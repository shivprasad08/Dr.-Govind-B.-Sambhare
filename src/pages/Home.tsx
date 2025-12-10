import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Users, Mail, Phone } from "lucide-react";
import facultyImage from "@/assets/faculty-profile.jpg";

const Home = () => {
  return (
    <div style={{ fontFamily: "font-2" }}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 overflow-hidden" style={{ backgroundImage: "url('/bg2.jpg')" }} data-scroll-section>
      <section className="relative pt-20 pb-20 px-4 overflow-hidden" style={{ backgroundImage: "url('/bg2.jpg')" }} data-scroll-section>
        <div className="absolute inset-0 bg-white opacity-5" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left: Faculty Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
              data-scroll
              data-scroll-speed="1"
            >
              <div>
                {/* font-1 for main heading */}
                <h1 
                  style={{ fontFamily: "font-1" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight whitespace-nowrap"
                >
                  Dr. Govind.B. Sambare
                </h1>

                <div className="h-1 w-24 bg-primary rounded-full mb-6" />
              </div>
              
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl text-primary font-semibold">
                  Associate Dean & Deputy HoD
                </p>
                <p className="text-lg text-muted-foreground">
                  Computer Engineering Department
                </p>
                <p className="text-base text-muted-foreground">
                  Pimpri Chinchwad College of Engineering, Pune
                </p>
              </div>

              <div className="flex flex-wrap gap-3 py-4">
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  PhD (Computer Engg)
                </div>
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  M.E. (CS)
                </div>
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  32+ Years Experience
                </div>
              </div>

              <div className="space-y-2 text-muted-foreground">
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-foreground">Research Focus:</span> Wireless Networks, IoT, Blockchain, Cybersecurity, AI/ML
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-foreground">Publications:</span> 65+ research papers in top journals and conferences
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-foreground">Expertise:</span> Mobility management, Healthcare IoT, Secure cloud computing
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:santosh.sambare@pccoepune.org"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>santosh.sambare@pccoepune.org</span>
                </a>
                <a
                  href="tel:+919689907628"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 96899 07628</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="shadow-medium">
                  <Link to="/experience" style={{ fontFamily: "font-2" }}>
                    View Experience
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/students" style={{ fontFamily: "font-2" }}>
                    Student Opportunities
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right: Faculty Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              data-scroll
              data-scroll-speed="2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 z-10" />
                <img
                  src={facultyImage}
                  alt="Dr. G.B. Sambare - Professor of Computer Engineering"
                  className="w-auto h-[85vh] object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20 px-4 bg-secondary/30 bg-cover bg-center bg-no-repeat relative"
        
        data-scroll-section
      >
        <div className="container mx-auto">
          {/* font-1 for section heading */}
          <motion.h2
            style={{ fontFamily: "font-1" }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What You'll Find Here
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Research & Publications",
                description: "65+ publications in wireless networks, IoT, blockchain, cybersecurity, and AI/ML in top journals and conferences.",
                link: "/publications",
              },
              {
                icon: Award,
                title: "Awards & Recognition",
                description: "Discover achievements, honors, and recognition received for research excellence and teaching.",
                link: "/awards",
              },
              {
                icon: Users,
                title: "Student Collaboration",
                description: "Find available research projects, collaborate with faculty, and contribute to cutting-edge work.",
                link: "/students",
              },
            ].map((feature) => (
              <motion.div key={feature.title}>
                <Link to={feature.link}>
                  <div className="p-6 rounded-lg bg-card hover:shadow-medium transition-all duration-300 h-full group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>

                    {/* font-1 for card headings */}
                    <h3
                      style={{ fontFamily: "font-1" }}
                      className="text-xl font-semibold mb-3"
                    >
                      {feature.title}
                    </h3>

                    {/* font-2 for descriptions */}
                    <p
                      style={{ fontFamily: "font-2" }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundImage: "url('/bg2.jpg')" }}data-scroll-section>
        <div className="container mx-auto">
          <motion.div className="max-w-3xl mx-auto text-center">
            {/* font-1 for CTA heading */}
            <h2
              style={{ fontFamily: "font-1" }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Collaborate?
            </h2>

            {/* font-2 for CTA text */}
            <p
              style={{ fontFamily: "font-2" }}
              className="text-lg text-muted-foreground mb-8"
            >
              Whether you're a student looking for research opportunities or interested 
              in learning more about our work, we'd love to hear from you.
            </p>

            <Button size="lg" asChild>
              <Link to="/contact" style={{ fontFamily: "font-2" }}>
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;