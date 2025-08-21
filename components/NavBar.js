import Link from 'next/link';

/**
 * Navigation bar component. Includes a logo and navigation links to each
 * section of the site. The links make use of Next.js' Link component for
 * client-side transitions. Navigation collapses on smaller screens via
 * responsive CSS defined in globals.css.
 */
export default function NavBar() {
  return (
    <header>
      <nav className="container nav">
        <div className="logo">SoftWareHouse</div>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}