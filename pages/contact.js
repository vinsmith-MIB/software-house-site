import Head from 'next/head';
import Layout from '@/components/Layout';

/**
 * Contact page. Provides visitors with a simple form to reach out. Since
 * there’s no backend configured in this example, the form submission is
 * prevented and instead shows an alert. Replace the handler with your
 * preferred method for sending form data (e.g. API route, third‑party form
 * service) when deploying the site.
 */
export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  }
  return (
    <Layout>
      <Head>
        <title>Contact Us – SoftWareHouse</title>
        <meta name="description" content="Get in touch with the SoftWareHouse team." />
      </Head>
      <section style={{ padding: '4rem 0' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
          ></textarea>
          <button
            type="submit"
            className="btn"
            style={{ alignSelf: 'flex-start' }}
          >
            Send Message
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          Alternatively, you can reach us at{' '}
          <a href="mailto:info@softwarehouse.com" style={{ color: '#3f51b5' }}>info@softwarehouse.com</a>.
        </p>
      </section>
    </Layout>
  );
}