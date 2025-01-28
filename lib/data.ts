import { Project } from "./definitions";

export async function getProjects(): Promise<Project[]> {
  const data = await fetch("https://api.github.com/users/mrearsbig/repos");
  const projects: Project[] = await data.json();

  const nameProjects = ["portfolio", "nextjs-dashboard", "cashcard"];

  const filteredProjects = projects.filter((project) =>
    nameProjects.includes(project.name)
  );

  return filteredProjects;
}
