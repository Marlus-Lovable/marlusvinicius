import { contact } from "@/data/portfolioData";
import { Mail, Linkedin, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="w-2 h-10 bg-accent rounded-full" />
          {contact.title}
        </h2>

        {/* Contact Links */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                {contact.email}
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
              <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                linkedin.com/in/marlus-vinicius
              </p>
            </div>
          </a>

          {/* YouTube */}
          <a
            href={contact.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Youtube className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">YouTube</p>
              <p className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                @marlusviniciusGameDev
              </p>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Marlus Vinicius. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
