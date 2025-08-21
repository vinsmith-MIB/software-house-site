import Head from 'next/head';
import Layout from '@/components/Layout';

/**
 * Portfolio page. Highlights selected projects with descriptions. Use this
 * page to showcase your best work and provide links to case studies or live
 * demos if applicable. The sample projects below are placeholders—replace
 * them with your actual portfolio items.
 */
export default function Portfolio() {
  const projects = [
    {
      name: 'Healthcare Booking App',
      description:
        'A cross‑platform mobile and web application that allows patients to schedule appointments, receive reminders and consult doctors via video call.',
    },
    {
      name: 'Inventory Management System',
      description:
        'A cloud‑based platform for managing stock levels, supplier orders and warehouse logistics with real‑time analytics and reporting.',
    },
    {
      name: 'Analytics Dashboard',
      description:
        'An interactive dashboard that aggregates data from multiple sources and uses machine learning to provide actionable insights.',
    },
    {
      name: 'E‑Commerce Platform',
      description:
        'A scalable e‑commerce solution with customizable storefronts, payment gateway integrations and order fulfillment automation.',
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Portfolio – SoftWareHouse</title>
        <meta name="description" content="Explore the projects developed by SoftWareHouse." />
      </Head>
      <section style={{ padding: '4rem 0' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Portfolio</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                backgroundColor: '#ffffff',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}
            >
              <h3>{project.name}</h3>
              <p style={{ lineHeight: '1.5' }}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}