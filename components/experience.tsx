import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Experience } from "@/lib/definitions";
import { experience } from "@/lib/placeholder-data";
import Link from "next/link";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceWrapper() {
  return (
    <>
      {experience
        .sort((a, b) => b.id - a.id)
        .map((exp) => (
          <Link
            key={exp.id}
            href={exp.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExperienceCard experience={exp}></ExperienceCard>
          </Link>
        ))}
    </>
  );
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="lg:mb-12">
      <CardHeader className="pb-2">
        <span className="text-sm text-muted-foreground">{`${experience.start_date.toUpperCase()} — ${experience.end_date.toUpperCase()}`}</span>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-medium">{`${experience.company} • ${experience.position}`}</h3>
            <ArrowUpRight className="w-4 h-4" />
          </div>
          <p className="text-muted-foreground">{experience.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.topics.map((topic, index) => (
            <Badge key={index} variant="outline">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
