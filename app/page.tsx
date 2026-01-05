import { AboutSection } from "@/components/about-me";
import { ExperienceSection } from "@/components/experience";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@pedrobrandao.dev", label: "Email" },
  ]
  return (
    <div className="max-w-5xl mx-auto z-50">
      <AnimatedThemeToggler />
      <div className="flex justify-between items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-lg bg-primary/20 blur-xl" />
          <div className="relative overflow-hidden rounded-lg border-2 border-primary/50 h-80 w-80">
            <Image
              src="/retrato-preto-e-branco.webp"
              fill
              alt="retrato"
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <div>
          <p className="mb-4 font-mono text-sm text-primary">Hi, my name is</p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground lg:text-7xl">Pedro Brandão</h1>
          <h2 className="mb-6 text-3xl font-semibold text-muted-foreground lg:text-5xl">I build things for the web.</h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
            design with robust engineering. Currently focused on building exceptional digital experiences.
          </p>
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            <Button>
              Resume
            </Button>
          </div>
        </div>
      </div>
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
