import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Award as AwardType } from "@/lib/AwardsData";

interface AwardCardProps {
  award: AwardType;
  index: number;
}

export const AwardCard = ({ award, index }: AwardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full hover:shadow-medium transition-all duration-300 group">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <Award className="h-6 w-6" />
            </div>
            <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {award.year}
            </span>
          </div>
          <CardTitle className="text-lg sm:text-xl leading-snug">{award.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs sm:text-sm font-medium text-primary mb-2">
            {award.organization}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {award.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
