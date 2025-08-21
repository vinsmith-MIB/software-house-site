import '@/styles/globals.css';

/**
 * Custom App component for Next.js. This file wraps every page in a common
 * component. In our case we don't add any additional providers or state
 * management, but the import of global styles happens here. The `Component`
 * prop is the active page being rendered and `pageProps` are its props.
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}