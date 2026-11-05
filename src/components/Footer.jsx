const Footer = () => {
  return (
    <footer className="text-foreground py-4 text-center border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <a
          href="https://www.freetogame.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm rounded font-body hover:text-glow transition-colors group
          duration-300 focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Game data from{" "}
          <span className="text-accent group-hover:text-glow">FreeToGame</span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
