import { Link } from "react-router-dom";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name and Title */}
        <Link to="/" className="group">
          <h1 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {personalInfo.name}
          </h1>
          <p className="text-xs md:text-sm text-primary font-medium">
            Game Programmer
          </p>
        </Link>

        {/* Navigation Buttons */}
        <nav className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to="/projects">Projects</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/other">Other links</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
