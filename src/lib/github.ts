export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage?: string;
  topics: string[];
}

/** Lista de proyectos destacados a mostrar en el portafolio */
const FEATURED_PROJECTS = [
  "portfolio",
  "nextjs-dashboard",
  "cashcard",
] as const;

/** Tiempo de cache para las respuestas de GitHub (en segundos) */
const CACHE_TTL = 3600; // 1 hora

// Caché en memoria del módulo
let cacheData: GitHubRepo[] | null = null;
let cacheTimestamp = 0;

/**
 * Obtiene los proyectos destacados de GitHub
 * @returns Array de repositorios de GitHub o array vacío si hay error
 */
export async function getGithubProjects(): Promise<GitHubRepo[]> {
  // Retornar desde caché si está vigente
  const now = Date.now();
  if (cacheData && now - cacheTimestamp < CACHE_TTL * 1000) {
    return cacheData;
  }

  const token = import.meta.env.GITHUB_TOKEN;

  if (!token) {
    console.warn(
      "⚠️ GITHUB_TOKEN no configurado. Los proyectos podrían no cargarse correctamente."
    );
  }

  const headers: HeadersInit = {
    // Header recomendado por GitHub para REST v3
    Accept: "application/vnd.github+json",
    "User-Agent": "mrearsbig-portfolio",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const url =
    "https://api.github.com/users/mrearsbig/repos?per_page=100&sort=updated";

  try {
    const response = await fetch(url, {
      headers,
      // Evitar opciones no soportadas en SSR; el caché lo manejamos nosotros
      // cache: "force-cache",
    });

    if (!response.ok) {
      // Mensaje más claro en caso de rate limiting
      if (response.status === 403) {
        const remaining = response.headers.get("x-ratelimit-remaining");
        const reset = response.headers.get("x-ratelimit-reset");
        console.error(
          `❌ GitHub API rate limited. Remaining=${remaining}, reset=${reset}`
        );
      } else {
        console.error(
          `❌ Error GitHub API: ${response.status} - ${response.statusText}`
        );
      }
      return [];
    }

    const reposJson = await response.json();
    if (!Array.isArray(reposJson)) {
      console.error("❌ Respuesta inesperada de GitHub API.");
      return [];
    }

    const repos: GitHubRepo[] = reposJson.map((r: any) => ({
      id: r.id,
      name: r.name,
      html_url: r.html_url,
      description: r.description ?? null,
      homepage: r.homepage ?? undefined,
      topics: Array.isArray(r.topics) ? r.topics : [],
    }));

    // Filtrar y ordenar según la lista de proyectos destacados
    const featured = repos
      .filter((repo) =>
        FEATURED_PROJECTS.includes(
          repo.name as (typeof FEATURED_PROJECTS)[number]
        )
      )
      .sort((a, b) => {
        const aIndex = FEATURED_PROJECTS.indexOf(
          a.name as (typeof FEATURED_PROJECTS)[number]
        );
        const bIndex = FEATURED_PROJECTS.indexOf(
          b.name as (typeof FEATURED_PROJECTS)[number]
        );
        return aIndex - bIndex;
      });

    // Guardar en caché
    cacheData = featured;
    cacheTimestamp = now;

    return featured;
  } catch (error) {
    console.error("❌ Error al obtener proyectos de GitHub:", error);
    return [];
  }
}
