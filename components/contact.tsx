import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact">
      <p className="mb-4 font-mono text-primary text-sm">What's Next?</p>
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-bold text-2xl text-foreground">Get In Touch</h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
        I'm currently looking for new opportunities and my inbox is always open.
        Whether you have a question, want to collaborate, or just want to say
        hi, I'll try my best to get back to you!
      </p>
      <Button
        asChild
        className="border-2 border-primary bg-transparent text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        size="lg"
      >
        <a href="mailto:hello@pedrobrandao.dev">Say Hello</a>
      </Button>
      <footer className="mt-24 text-center">
        <p className="font-mono text-muted-foreground text-sm">
          Designed & Built by Pedro Brandão
        </p>
      </footer>
    </section>
  );
}
