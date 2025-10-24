export function Footer() {
  return (
    <footer className="py-4 px-2 border-t text-center text-muted-foreground bg-background">
      © {new Date().getFullYear()} Daksh Shahani | Built with Next.js + shadcn/ui + three.js
    </footer>
  );
}