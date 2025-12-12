import { motion } from "framer-motion";
import { TimelineItem } from "@/components/TimelineItem";
import { experiences } from "@/lib/ExperienceData";

const Experience = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6" data-scroll-section style={{ backgroundImage: "url('/bg2.jpg')", fontFamily: "font-2" }}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h1 style={{ fontFamily: "font-1" }} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
          <p style={{ fontFamily: "font-2" }} className="text-base sm:text-lg text-muted-foreground">
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
