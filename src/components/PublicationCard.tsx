import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Publication } from "@/lib/PublicationsData";

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

export const PublicationCard = ({ publication, index }: PublicationCardProps) => {
  const typeColors = {
    journal: "bg-primary/10 text-primary",
    conference: "bg-accent/10 text-accent-foreground",
    workshop: "bg-secondary text-secondary-foreground",
  };

  const typeLabels = {
    journal: "Journal",
    conference: "Conference",
    workshop: "Book chapter",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      
    >
      <Card className="hover:shadow-medium transition-all duration-300 group" >
        <CardContent className="pt-4 sm:pt-6">
          <div className="flex gap-2 sm:gap-4">
            <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-primary/5 text-primary h-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3 flex-col sm:flex-row">
                <h3 className="text-base sm:text-lg font-semibold leading-tight text-foreground">
                  {publication.title}
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <Badge className={typeColors[publication.type]} variant="secondary" style={{ fontSize: '0.7rem' }}>
                    {typeLabels[publication.type]}
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-900 dark:bg-amber-900 dark:text-amber-100 text-xs" variant="secondary">
                    {publication.indexing}
                  </Badge>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 break-words">
                {publication.authors.join(", ")}
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="text-xs sm:text-sm">
                  <span className="font-medium text-primary">{publication.venue}</span>
                  <span className="text-muted-foreground"> • {publication.year}</span>
                </div>
                
                {publication.link && (
                  <Button variant="ghost" size="sm" asChild className="h-8 text-xs">
                    <a href={publication.link} target="_blank" rel="noopener noreferrer">
                      View Paper
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
