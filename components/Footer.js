/**
 * Footer component. Displays basic contact information and copyright text.
 * This footer appears at the bottom of every page thanks to the Layout
 * component. Feel free to customize the content to reflect your own
 * software house's details or branding.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} SoftWareHouse. All rights reserved.</p>
      <p>
        Follow us on
        {' '}
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#90caf9' }}>
          LinkedIn
        </a>
        {' '}|{
        ' '}
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#90caf9' }}>
          Twitter
        </a>
      </p>
    </footer>
  );
}