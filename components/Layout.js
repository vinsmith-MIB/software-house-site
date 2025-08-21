import NavBar from './NavBar';
import Footer from './Footer';

/**
 * Layout component that wraps all pages with a consistent header and footer.
 * It also contains a container div for consistent widths across pages. Using
 * this component reduces duplication and ensures a unified look and feel.
 *
 * @param {object} props - React props.
 * @param {React.ReactNode} props.children - The content to render between the
 * header and footer.
 */
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  );
}