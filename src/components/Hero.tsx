import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Kristan Rain Amante
          </h1>
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8">
            Developer, Builder, and Creative Problem-Solver
          </p>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I craft elegant solutions to complex problems, turning ideas into reality
            through clean code and thoughtful design.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
