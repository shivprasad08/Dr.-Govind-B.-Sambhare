import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { studentProjects } from "@/lib/StudentProject";
import { Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Students = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4" data-scroll-section style={{ backgroundImage: "url('/bg2.jpg')" }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Research Opportunities</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Available research projects and collaboration opportunities for motivated students.
          </p>

          <Alert className="bg-accent/10 border-accent">
            <Info className="h-4 w-4 text-accent-foreground" />
            <AlertDescription className="text-accent-foreground">
              Interested in any of these projects? Reach out through the{" "}
              <a href="/contact" className="font-medium underline">
                contact page
              </a>{" "}
              with your resume and a brief statement of interest.
            </AlertDescription>
          </Alert>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
