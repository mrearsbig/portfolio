export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage?: string;
  topics: string[];
}

export async function getGithubProjects() {
  const projects = ["portfolio", "nextjs-dashboard", "cashcard"];

  // 1. Obtener token de entorno
  const token = import.meta.env.GITHUB_TOKEN;

  // 2. Configurar headers con autenticación
  const headers: HeadersInit = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

  // 3. URL optimizada para filtrar repositorios
  const url = `https://api.github.com/users/mrearsbig/repos?per_page=100`;

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`Error al obtener los proyectos: ${response.statusText}`);
  }

  const repos: GitHubRepo[] = await response.json();

  // Filtrar solo los proyectos deseados
  return repos.filter((repo) => projects.includes(repo.name));
}
