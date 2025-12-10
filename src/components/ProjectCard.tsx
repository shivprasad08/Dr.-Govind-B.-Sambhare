import { motion } from "framer-motion";
import { Lightbulb, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { StudentProject } from "@/lib/StudentProject";

interface ProjectCardProps {
  project: StudentProject;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const statusConfig = {
    open: { label: "Open", icon: Lightbulb, color: "bg-accent/10 text-accent-foreground" },
    "in-progress": { label: "In Progress", icon: Clock, color: "bg-primary/10 text-primary" },
    completed: { label: "Completed", icon: CheckCircle2, color: "bg-secondary text-secondary-foreground" },
  };

  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className="h-full hover:shadow-medium transition-all duration-300">
        <CardHeader>
          <div className="flex items-start justify-between gap-3 mb-3">
            <Badge className={status.color} variant="secondary">
              <StatusIcon className="h-3 w-3 mr-1" />
              {status.label}
            </Badge>
            {project.deadline && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(project.deadline).toLocaleDateString()}
              </div>
            )}
          </div>
          <CardTitle className="text-xl leading-snug">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>
          <div>
            <p className="text-xs font-semibold text-foreground mb-2">Required Skills:</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
