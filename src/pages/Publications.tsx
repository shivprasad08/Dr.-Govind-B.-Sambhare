import { motion } from "framer-motion";
import { useState } from "react";
import { PublicationCard } from "@/components/PublicationCard";
import { publications } from "@/lib/PublicationsData";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const typeOptions = ["all", "journal", "conference", "workshop"] as const;
  const indexingOptions = ["all", "Scopus", "Google Scholar"] as const;
  
  const typeLabels = {
    all: "All",
    journal: "Journal",
    conference: "Conference",
    workshop: "Book chapter",
  } as const;

  const [typeFilter, setTypeFilter] = useState<(typeof typeOptions)[number]>("all");
  const [indexingFilter, setIndexingFilter] = useState<(typeof indexingOptions)[number]>("all");

  const filteredPublications = publications
    .filter(pub => {
      const typeMatch = typeFilter === "all" || pub.type === typeFilter;
      const indexingMatch = indexingFilter === "all" || pub.indexing === indexingFilter;
      return typeMatch && indexingMatch;
    })
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6" data-scroll-section style={{ backgroundImage: "url('/bg2.jpg')", fontFamily: "font-2" }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 style={{ fontFamily: "font-1" }} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p style={{ fontFamily: "font-2" }} className="text-base sm:text-lg text-muted-foreground mb-6">
            Peer-reviewed research papers, conference proceedings, and scholarly contributions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold text-center text-black dark:text-white mb-3">Filter by Type</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {typeOptions.map((type) => (
                  <Button
                    key={type}
                    variant={typeFilter === type ? "default" : "outline"}
                    onClick={() => setTypeFilter(type)}
                    className="capitalize"
                  >
                    {typeLabels[type]}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm font-bold text-center text-black dark:text-white mb-3">Filter by Indexing</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {indexingOptions.map((indexing) => (
                  <Button
                    key={indexing}
                    variant={indexingFilter === indexing ? "default" : "outline"}
                    onClick={() => setIndexingFilter(indexing)}
                    className="capitalize"
                  >
                    {indexing}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          {filteredPublications.map((publication, index) => (
            <PublicationCard key={publication.id} publication={publication} index={index} />
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No publications found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;
