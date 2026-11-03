const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Browse", href: "#" },
  { name: "About", href: "#" },
]

const LINK_CLASSES = "rounded hover:text-glow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-background"

const Header = () => {

  
  return (
    <header className="py-4 w-full border-b border-border">
      <div className="flex items-center justify-between px-4 max-w-7xl mx-auto">
          <h1 className="text-foreground text-2xl font-display font-bold">
              <span className="text-accent">Hollow</span>Dex
          </h1>

          <nav className="flex space-x-4 text-muted-foreground text-lg font-body font-semibold">
              {NAV_LINKS.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={LINK_CLASSES}
                >
                  {link.name}
                </a>
              ))}
          </nav>
      </div>
    </header>
  )
}
export default Header