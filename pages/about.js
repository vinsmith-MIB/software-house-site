import Head from 'next/head';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Tentang – SoftWareHouse</title>
        <meta
          name="description"
          content="Tim pengembang, desainer, dan engineer IT yang berfokus pada pengalaman digital generasi berikutnya."
        />
      </Head>
<<<<<<< HEAD
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
=======
      <section className="py-20">
        <h1 className="text-center text-3xl font-semibold mb-8">Siapa Kami</h1>
        <p className="max-w-3xl mx-auto text-center text-lg text-primary mb-8">
          Tim pengembang, desainer, dan engineer IT yang berfokus pada pembuatan
          pengalaman digital generasi berikutnya.
>>>>>>> 984b407df142c2bd591a2404d67281c3d192c89e
        </p>
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1350&q=80"
          alt="Ilustrasi tim coding"
          className="w-full rounded-lg mb-12"
        />
        <h2 className="text-2xl font-semibold mb-6">Nilai Utama Kami</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["Inovasi", "Integritas", "Kolaborasi", "Keunggulan"].map((item) => (
            <div
              key={item}
              className="p-6 text-center border border-accent/20 rounded-lg bg-background/60"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
