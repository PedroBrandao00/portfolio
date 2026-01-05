import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./kibo-ui/marquee"

export function AboutSection() {
    const technologies = [
        { name: "React", icon: ReactIcon },
        { name: "TypeScript", icon: TypeScriptIcon },
        { name: "Tailwind CSS", icon: TailwindIcon },
        { name: "Next.js", icon: NextJsIcon },
        { name: "Vite", icon: ViteIcon },
        { name: "Node.js", icon: NodeJsIcon },
        { name: "JavaScript", icon: JavaScriptIcon },
        { name: "HTML5", icon: Html5Icon },
        { name: "CSS3", icon: Css3Icon },
        { name: "Git", icon: GitIcon },
    ]

    return (
        <section id="about" className="py-24">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-foreground">About Me</h2>
                <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-12 lg:grid-cols-3">
                <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Hello! I'm Pedro, a developer based in Portugal who enjoys creating things that live on the internet. My
                        interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns
                        out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p>
                        Fast-forward to today, and I've had the privilege of working at{" "}
                        <span className="text-primary font-medium">startups</span>,{" "}
                        <span className="text-primary font-medium">agencies</span>, and{" "}
                        <span className="text-primary font-medium">large corporations</span>. My main focus these days is building
                        accessible, inclusive products and digital experiences.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <Marquee>
                        <MarqueeFade side="left" />
                        <MarqueeFade side="right" />
                        <MarqueeContent>
                            {[...technologies, ...technologies].map((tech, index) => (
                                <MarqueeItem className="h-fit min-w-fit flex items-center justify-center mx-6 " key={index}>
                                    <p className="text-xs">{tech.name}</p>
                                    <tech.icon className="h-10 w-10 text-foreground" />
                                </MarqueeItem>

                            ))}
                        </MarqueeContent>
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

function ReactIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-9.82 1.59c.54-.16 1.08-.31 1.62-.45-.18-.31-.35-.63-.51-.95-.16-.32-.31-.64-.45-.97-.45.39-.88.79-1.28 1.19.18.24.38.47.62.68m9.8-7.7c-.54.16-1.08.31-1.62.45.18.31.35.63.51.95.16.32.31.64.45.97.45-.39.88-.79 1.28-1.19-.18-.24-.38-.47-.62-.68M6.1 10.15c-.45.39-.88.79-1.28 1.19.18.24.38.47.62.68.54.16 1.08.31 1.62.45-.18-.31-.35-.63-.51-.95-.16-.32-.31-.64-.45-.97z" />
        </svg>
    )
}

function TypeScriptIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" >
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" /><path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z" /></svg>
    )
}

function TailwindIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
        </svg>
    )
}

function NextJsIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5v-9l7 4.5-7 4.5z" />
        </svg>
    )
}

function ViteIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="m12 2-9 5v10l9 5 9-5V7l-9-5zm0 2.18 6.9 3.82L12 11.82 5.1 8 12 4.18zM4.5 9.32l6.5 3.61v6.75L4.5 16.07V9.32zm8 10.36v-6.75l6.5-3.61v6.75l-6.5 3.61z" />
        </svg>
    )
}

function NodeJsIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35a1.57 1.57 0 0 0-.78 1.36v9.58c0 .56.3 1.08.78 1.36l7.44 4.3a1.57 1.57 0 0 0 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3a1.57 1.57 0 0 0-.78-.2z" />
        </svg>
    )
}

function JavaScriptIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#f0db4f" d="M1.408 1.408h125.184v125.185H1.408z" /><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237" /></svg>
    )
}

function Html5Icon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#e44d26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z" /><path fill="#f16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z" /><path fill="#ebebeb" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z" /><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z" /></svg>
    )
}

function Css3Icon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813-1.422-16.033zm5.65 7.317-.153-1.797h7.291l.305-3.466H6.824l.916 10.345 4.243 1.203 4.272-1.204.606-6.848H9.995l.153 1.767h4.966l-.305 3.17-2.826.77-2.798-.77-.172-1.978H7.093l.305 3.467 4.585 1.25 4.614-1.25.596-6.659H9.994z" />
        </svg>
    )
}

function GitIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.532 1.532 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.074V14.3a1.532 1.532 0 0 1 .406 2.529 1.532 1.532 0 1 1-1.927-2.373V9.26a1.534 1.534 0 0 1-.833-2.012L8.097 4.983l-5.72 5.716a1.29 1.29 0 0 0 0 1.823l8.731 8.729a1.29 1.29 0 0 0 1.823 0l8.69-8.689a1.29 1.29 0 0 0 0-1.823z" />
        </svg>
    )
}
