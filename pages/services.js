import Head from 'next/head';
import Layout from '@/components/Layout';

/**
 * Services page. Lists the core offerings of the software house with a brief
 * description for each. Use this page to convince potential clients you
 * have the expertise they need.
 */
export default function Services() {
  const services = [
    {
      title: 'Custom Software Development',
      description:
        'Tailored solutions crafted to meet specific business requirements. Our team builds scalable and secure systems using modern technologies.',
    },
    {
      title: 'Web Application Development',
      description:
        'Responsive, accessible, and high‑performance web applications for all platforms. We specialize in React, Node.js and cloud‑native architectures.',
    },
    {
      title: 'Mobile App Development',
      description:
        'Native and cross‑platform mobile apps that provide seamless user experiences and integrate with existing systems.',
    },
    {
      title: 'UI/UX Design',
      description:
        'Intuitive and engaging interfaces designed with the user in mind. Our process covers research, wireframes, prototypes and final UI assets.',
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Cloud migration, infrastructure setup and continuous deployment pipelines. We help you leverage AWS, Azure or GCP effectively.',
    },
    {
      title: 'Maintenance & Support',
      description:
        'Ongoing support to ensure your software remains reliable, secure and up‑to‑date. We offer service level agreements tailored to your needs.',
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Services – SoftWareHouse</title>
        <meta name="description" content="Discover the software development services offered by SoftWareHouse." />
      </Head>
      <section style={{ padding: '4rem 0' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Services</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                backgroundColor: '#ffffff',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}
            >
              <h3>{service.title}</h3>
              <p style={{ lineHeight: '1.5' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}