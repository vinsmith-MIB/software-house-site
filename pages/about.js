import Head from 'next/head';
import Layout from '@/components/Layout';

/**
 * About page. This page gives visitors insight into the company’s mission,
 * vision and values. It also introduces the leadership team and outlines
 * what sets the software house apart from competitors. Feel free to modify
 * the content to more accurately describe your business.
 */
export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us – SoftWareHouse</title>
        <meta name="description" content="Learn about our mission, values and team at SoftWareHouse." />
      </Head>
      <section style={{ padding: '4rem 0' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>About Us</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
          SoftWareHouse was founded by passionate software engineers with the
          goal of helping businesses harness the power of technology. Our
          mission is to deliver high‑quality, user‑centric solutions that drive
          measurable results. From startups to enterprises, we collaborate
          closely with our clients to understand their unique challenges and
          craft software that makes a difference.
        </p>
        {/* Free team collaboration image from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1350&q=80"
          alt="Team collaborating in modern office"
          style={{ width: '100%', borderRadius: '8px', margin: '2rem 0' }}
        />
        <h2 style={{ marginTop: '3rem' }}>Our Values</h2>
        <ul style={{ listStyle: 'circle', paddingLeft: '2rem', lineHeight: '1.8' }}>
          <li><strong>Innovation:</strong> We embrace new technologies and creative thinking to build better products.</li>
          <li><strong>Quality:</strong> Attention to detail and adherence to best practices ensure our work meets the highest standards.</li>
          <li><strong>Collaboration:</strong> We believe the best solutions come from listening and working together.</li>
          <li><strong>Integrity:</strong> Transparent communication and honesty are at the core of everything we do.</li>
        </ul>
        <h2 style={{ marginTop: '3rem' }}>Our Team</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Our team is composed of experienced developers, designers, and project
          managers who are passionate about building software that solves real
          problems. We stay up‑to‑date with industry trends and technologies
          so that our clients always benefit from the latest innovations.
        </p>
      </section>
    </Layout>
  );
}