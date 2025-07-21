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
  
  // ¡Esta URL la cambiaremos en el siguiente paso para filtrar!
  const response = await fetch("https://api.github.com/users/mrearsbig/repos");

  if (!response.ok) {
    throw new Error(`Error al obtener los proyectos: ${response.statusText}`);
  }

  const repos: GitHubRepo[] = await response.json();
  return repos.filter((repo) => projects.includes(repo.name));
}
