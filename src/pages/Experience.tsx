import { motion } from "framer-motion";
import { TimelineItem } from "@/components/TimelineItem";
import { experiences } from "@/lib/ExperienceData";

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4" data-scroll-section style={{ backgroundImage: "url('/bg2.jpg')" }}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
          <p className="text-lg text-muted-foreground">
            A journey through academic positions, research contributions, and educational leadership.
          </p>
        </motion.div>

        <div className="space-y-2">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
