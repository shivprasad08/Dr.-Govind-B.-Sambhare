import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Experience } from "@/lib/ExperienceData";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-[28px] bottom-0 w-0.5 bg-border" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-soft">
        <Briefcase className="h-3 w-3 text-primary-foreground" />
      </div>

      <Card className="ml-6 hover:shadow-medium transition-shadow duration-300">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {experience.title}
              </h3>
              <p className="text-sm font-medium text-primary">
                {experience.organization}
              </p>
            </div>
            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap self-start">
              {experience.date}
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {experience.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
