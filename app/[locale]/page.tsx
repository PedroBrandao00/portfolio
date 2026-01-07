import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { TechStack } from "@/components/about-me";
import ChangeLocale from "@/components/change-locale";
import { ExperienceSection } from "@/components/experience";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import {DottedMap} from "@/components/ui/dotted-map";

export default async function Home() {
  const t = await getTranslations("main");
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/PedroBrandao00",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://pt.linkedin.com/in/pedro-brand%C3%A3o-4350921a3",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:pedrobrandao04@gmail.com", label: "Email" },
  ];
  return (
    <div className="z-50 mx-auto flex max-w-5xl flex-col gap-16 p-6 py-20">
      <div className="flex justify-center gap-4">
        <AnimatedThemeToggler />
        <ChangeLocale />
      </div>
      <div className="grid items-start justify-between gap-16 md:flex">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-lg bg-primary/20 blur-xl" />
            <div className="relative h-80 w-80 overflow-hidden rounded-lg border-2 border-primary/50">
              <Image
                alt="retrato"
                className="rounded-md object-cover"
                fill
                src="/foto.jpg"
                priority
              />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  aria-label={link.label}
                  className="text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-md text-primary">👋 {t("hi")} </p>
          <h1 className="mb-4 font-bold text-5xl text-foreground tracking-tight lg:text-7xl">
            Pedro Brandão
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed lg:col-span-3">
            <p>{t("description")}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 lg:grid-cols-5 lg:gap-x-8">
        <div className="order-1 col-span-2 row-span-1 grid gap-8 lg:col-span-1">
          <div className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-linear-to-t from-primary/20 via-primary/10 to-primary/5 p-6">
            <Button asChild className="rounded-full">
              <Link href="/cv_pedro.pdf" target="_blank">
                {t("resume")}
              </Link>
            </Button>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-linear-to-t from-primary/20 via-primary/10 to-primary/5 p-6">
            <p className="font-bold text-7xl">2+</p>
            <p className="mt-8 text-muted-foreground text-sm">
              {t("experience")}
            </p>
          </div>
        </div>

        <div className="order-3 col-span-4 rounded-xl bg-linear-to-b from-primary/20 via-primary/10 to-primary/5 lg:order-2 lg:col-span-3">
          <TechStack />
        </div>

        <div className="relative order-2 col-span-2 w-full overflow-hidden rounded-xl lg:order-3 lg:col-span-1">
          <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-primary/10 to-primary/5" />
          <DottedMap
            mapSamples={1000}
            markers={[
              {
                lat: 40.6333,
                lng: -8.65,
                size: 3,
              },
            ]}
          />
          <p className="absolute inset-x-0 bottom-6 text-center font-semibold text-md">
            Aveiro, Portugal
          </p>
        </div>
      </div>
      <ExperienceSection />
      <footer className="text-center">
        <p className="font-mono text-muted-foreground text-sm">
          {t("built_by")} Pedro Brandão
        </p>
      </footer>
    </div>
  );
}
