import { motion } from "framer-motion";
import { AwardCard } from "@/components/AwardCard";
import { awards } from "@/lib/AwardsData";

const Awards = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4" data-scroll-section style={{ backgroundImage: "url('/bg2.jpg')" }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h1>
          <p className="text-lg text-muted-foreground">
            Honors and achievements recognizing excellence in research, teaching, and service to the academic community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <AwardCard key={award.id} award={award} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
