"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations("main");
  const experiences = [
    {
      company: "Techfusion",
      title: "Frontend Developer",
      period: `2023 — ${t("present")}`,
      description: [
        t("tf_01"),
        t("tf_02"),
        t("tf_03"),
        t("tf_04"),
        t("tf_05"),
        t("tf_06"),
        t("tf_07"),
      ],
      skills: ["NEXTJS", "REACT", "TYPESCRIPT", "JAVASCRIPT", "TAILWINDCSS"],
    },
    {
      company: "Brain One",
      title: "Frontend Developer",
      period: "2022 — 2022",
      description: [t("bo_01"), t("bo_02"), t("bo_03")],
      skills: ["REACT", "HTML", "JAVASCRIPT", "CSS"],
    },
  ];
  return (
    <section id="experience">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-bold text-2xl text-foreground">
          {t("experience")}
        </h2>
        <div className="h-px flex-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex overflow-x-auto md:flex-col md:overflow-visible">
          {experiences.map((exp, index) => (
            <button
              className={cn(
                "whitespace-nowrap border-b-2 px-4 py-3 text-left font-mono text-sm transition-colors md:border-b-0 md:border-l-2",
                activeTab === index
                  ? "rounded-r-xl border-primary bg-primary/20 text-primary"
                  : "rounded-r-xl border-transparent text-muted-foreground hover:bg-primary/30 hover:text-foreground"
              )}
              key={exp.company}
              onClick={() => setActiveTab(index)}
              type="button"
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="flex-1 pt-2">
          <h3 className="font-medium text-foreground text-xl">
            {experiences[activeTab].title}{" "}
            <span className="text-primary">
              @ {experiences[activeTab].company}
            </span>
          </h3>
          <p className="mt-1 font-mono text-muted-foreground text-sm">
            {experiences[activeTab].period}
          </p>
          <ul className="mt-6 space-y-4">
            {experiences[activeTab].description.map((item, _) => (
              <li
                className="flex items-center gap-3 text-muted-foreground"
                key={item}
              >
                <span className="text-primary">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {experiences[activeTab].skills.map((skill) => (
              <span
                className="rounded-full bg-primary/10 px-3 py-1 font-mono text-primary text-xs"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
