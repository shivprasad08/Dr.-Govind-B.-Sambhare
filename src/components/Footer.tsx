import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log("Footer rendered");

  return (
    <footer
      className="bg-primary text-primary-foreground"
      data-scroll-section
      style={{ fontFamily: "font-2" }}   // ✅ Footer font applied
    >
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Branding */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-base sm:text-lg" style={{ fontFamily: "font-2" }}>
                Dr. G.B.Sambare
              </span>
            </div>
            <p className="text-primary-foreground/80 text-xs sm:text-sm pl-2">
              Dr. G. B. Sambare is a Ph.D. holder in Computer Engineering with over three decades of teaching, research, and administrative experience. His work spans networking, cybersecurity, AI, blockchain, and cloud computing with 100+ research contributions
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col place-self-center items-start text-left">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm items-start text-left">
              <Link
                to="/experience"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                to="/awards"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Awards
              </Link>
              <Link
                to="/publications"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Publications
              </Link>
              <Link
                to="/students"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Student Section
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Contact</h3>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  santosh.sambare@pccoepune.org
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +91 96899 07628
                </span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Pimpri Chinchwad Education Trust's, Pimpri Chinchwad College Of Engineering,
                  Sector-26, Pradhikaran, Nigdi, Near Akurdi Railway Station, Pune - 411 044.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-xs sm:text-sm text-primary-foreground/60">
          <p>
            © {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
