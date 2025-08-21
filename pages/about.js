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
      <section className="py-20">
        <h1 className="text-center text-3xl font-semibold mb-8">Siapa Kami</h1>
        <p className="max-w-3xl mx-auto text-center text-lg text-primary mb-8">
          Tim pengembang, desainer, dan engineer IT yang berfokus pada pembuatan
          pengalaman digital generasi berikutnya.
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
