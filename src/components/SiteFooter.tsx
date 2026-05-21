export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-prose py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Marta Mariño Alvite. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="mailto:martamarinalvite@gmail.com" className="hover:text-foreground">Email</a>
          <a href="https://linkedin.com/in/marta-marin-alvite" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href="https://github.com/mmarinoa" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
