import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-transparent text-center flex flex-col items-center gap-6"
    >
      <h3 className="text-3xl font-semibold">Get in Touch</h3>
      <p className="text-muted-foreground max-w-md">
        Have a question or want to collaborate? Reach out at{" "}
        <a
          href="mailto:dakshitshahani@gmail.com"
          className="text-primary underline"
        >
          dakshitshahani@gmail.com
        </a>{" "}
        or connect on{" "}
        <a
          href="https://github.com/dakshshahani"
          className="text-primary underline"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
       <div className="flex gap-4 items-center">
                    <Button asChild>
        <a href="mailto:dakshitshahani@gmail.com">Say Hello 👋</a>
      </Button>
                  <a
                    href="https://github.com/dakshshahani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub size={28} />
                  </a>
      
                  <a
                    href="https://www.linkedin.com/in/dakshit-shahani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </div>
    
    </section>
  );
}