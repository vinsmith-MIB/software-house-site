import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="pt-24 max-w-7xl mx-auto px-6">{children}</main>
      <Footer />
    </>
  );
}
