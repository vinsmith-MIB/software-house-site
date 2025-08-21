import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

/**
 * Home page of the software house company profile site. Presents a hero
 * section with a strong value proposition, summaries of services, and
 * highlights of portfolio projects. Each section encourages visitors to
 * explore deeper into the site or contact the company.
 */
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SoftWareHouse – Innovative Software Solutions</title>
        <meta
          name="description"
          content="SoftWareHouse provides bespoke software solutions including web apps, mobile apps, and cloud systems."
        />
      </Head>
      <section className="hero">
        <h1>Innovative Software Solutions</h1>
        <p>
          Empowering businesses through custom software development, mobile
          applications, and digital transformation. We build reliable and
          scalable solutions tailored to your needs.
        </p>
        <Link href="/contact" className="btn">
          Get in Touch
        </Link>
      </section>
      <section style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Services</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3>Custom Software Development</h3>
            <p>
              We design and build bespoke solutions that solve your business
              challenges and streamline operations.
            </p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3>Web & Mobile Applications</h3>
            <p>
              Our experts craft responsive web apps and native mobile apps
              delivering seamless user experiences across devices.
            </p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3>Cloud & DevOps</h3>
            <p>
              We leverage cloud platforms and DevOps best practices to deploy
              secure, scalable and maintainable systems.
            </p>
          </div>
        </div>
      </section>
      <section style={{ padding: '4rem 0', backgroundColor: '#f0f4ff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Projects</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3>Project A</h3>
            <p>
              A cross‑platform mobile application that simplifies booking
              appointments for healthcare providers.
            </p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3>Project B</h3>
            <p>
              A cloud‑based inventory management system that integrates with
              existing ERPs and scales with your business.
            </p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3>Project C</h3>
            <p>
              An AI‑powered analytics dashboard providing real‑time insights
              through intuitive visualizations.
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/portfolio" className="btn">
            See More
          </Link>
        </div>
      </section>
    </Layout>
  );
}