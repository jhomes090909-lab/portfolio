import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code as Code2, Lightbulb, Rocket } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "Building robust and scalable applications with modern technologies and best practices.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analyzing complex challenges and crafting elegant, efficient solutions.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly learning and experimenting with new technologies to stay ahead.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            About Me
          </h2>
          <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            I'm passionate about creating meaningful digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <skill.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
