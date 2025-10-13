export function Footer() {
  return (
    <footer className="py-8 border-t text-center text-muted-foreground bg-background">
      © {new Date().getFullYear()} Daksh Shahani | Built with Next.js + shadcn/ui
    </footer>
  );
}