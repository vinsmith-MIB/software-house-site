export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-accent/30 bg-background text-center py-6">
      <p className="text-sm">© {currentYear} SoftWareHouse. All rights reserved.</p>
      <p className="mt-2 space-x-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent"
        >
          Twitter
        </a>
      </p>
    </footer>
  );
}
