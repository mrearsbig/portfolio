import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Project } from "@/lib/definitions";
import Image from "next/image";
import { getProjects } from "../lib/data";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default async function ProjectWrapper() {
  const projects = await getProjects();

  return (
    <>
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.homepage || project.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard project={project} />
        </Link>
      ))}
    </>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="border-black w-auto text-black lg:mb-12">
      <CardContent className="p-6 space-y-6">
        {/* Main content area */}
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={`/projects/${project.name}.png`}
              width={500}
              height={500}
              alt="Picture of the project"
              className="rounded-xl"
            />
          </AspectRatio>
        </div>

        {/* Link and description section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">{project.name}</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
          <span className="text-base text-muted-foreground">
            {project.description || "No description provided"}
          </span>
        </div>

        {/* Yellow buttons grid */}
        {project.topics.length ? (
          <div className="flex flex-wrap gap-2">
            {project.topics.map((topic, index) => (
              <Badge key={index} variant="outline">
                {topic}
              </Badge>
            ))}
          </div>
        ) : (
          ""
        )}
      </CardContent>
    </Card>
  );
}
