import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Awards", path: "/awards" },
  { name: "Publications", path: "/publications" },
  { name: "Student Section", path: "/students" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-primary text-primary-foreground",
        scrolled && "shadow-lg"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">

          {/* ✅ TEXT LOGO WITH FONT-2 */}
          <Link
            to="/"
            style={{ fontFamily: "font-2" }}
            className="font-bold text-base sm:text-xl md:text-2xl tracking-wide text-primary-foreground"
          >
            Dr. G.B.Sambare
          </Link>

          {/* ✅ DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  style={{ fontFamily: "font-2" }}   // ✅ font-2 applied
                  className={cn(
                    "relative text-primary-foreground transition-all duration-300",
                    "hover:bg-white hover:text-primary hover:backdrop-blur-sm",
                    isActive(item.path) &&
                      "bg-primary-foreground/15 font-medium"
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* ✅ MOBILE MENU BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* ✅ MOBILE NAVIGATION */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in bg-primary">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    style={{ fontFamily: "font-2" }}  // ✅ font-2 applied
                    className={cn(
                      "w-full justify-start text-primary-foreground transition-all duration-300",
                      "hover:bg-white hover:text-primary",
                      isActive(item.path) &&
                        "bg-primary-foreground/20 font-medium"
                    )}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
