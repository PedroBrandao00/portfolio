"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
    {
        company: "TechCorp",
        title: "Senior Frontend Engineer",
        period: "2023 — Present",
        description: [
            "Deliver high-quality, robust production code for diverse clients including startups and enterprise companies",
            "Work alongside creative directors to lead the research, development, and architecture of technical solutions",
            "Collaborate with designers, project managers, and engineers to transform creative concepts into production realities",
        ],
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    },
    {
        company: "Digital Agency",
        title: "Full Stack Developer",
        period: "2021 — 2023",
        description: [
            "Developed and maintained code for in-house and client websites primarily using React, Node.js, and PostgreSQL",
            "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility",
            "Interfaced with clients on a weekly basis, providing technological expertise",
        ],
        skills: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
        company: "Startup Inc",
        title: "Junior Developer",
        period: "2019 — 2021",
        description: [
            "Collaborated with a team of developers building a SaaS platform",
            "Developed and shipped highly interactive web applications",
            "Worked closely with senior developers to learn best practices",
        ],
        skills: ["JavaScript", "Vue.js", "Python", "MongoDB"],
    },
]

export function ExperienceSection() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section id="experience" className="py-24">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-foreground">Experience</h2>
                <div className="h-px flex-1 bg-border" />
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="flex overflow-x-auto md:flex-col md:overflow-visible">
                    {experiences.map((exp, index) => (
                        <button
                            key={exp.company}
                            onClick={() => setActiveTab(index)}
                            className={cn(
                                "whitespace-nowrap border-b-2 px-4 py-3 text-left text-sm font-mono transition-colors md:border-b-0 md:border-l-2",
                                activeTab === index
                                    ? "border-primary bg-secondary/50 text-primary"
                                    : "border-transparent text-muted-foreground hover:bg-secondary/30 hover:text-foreground",
                            )}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>
                <div className="flex-1 pt-2">
                    <h3 className="text-xl font-medium text-foreground">
                        {experiences[activeTab].title} <span className="text-primary">@ {experiences[activeTab].company}</span>
                    </h3>
                    <p className="mt-1 font-mono text-sm text-muted-foreground">{experiences[activeTab].period}</p>
                    <ul className="mt-6 space-y-4">
                        {experiences[activeTab].description.map((item, i) => (
                            <li key={i} className="flex gap-3 text-muted-foreground">
                                <span className="mt-1.5 text-primary">▹</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {experiences[activeTab].skills.map((skill) => (
                            <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
