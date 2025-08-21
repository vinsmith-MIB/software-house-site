import Head from 'next/head';
import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  }

  useEffect(() => {
    gsap.from('.contact-form', { opacity: 0, y: 40, duration: 1 });
  }, []);
  return (
    <Layout>
      <Head>
        <title>Kontak – SoftWareHouse</title>
        <meta
          name="description"
          content="Hubungi kami untuk memulai proyek digital Anda."
        />
      </Head>
      <section className="py-20">
        <h1 className="text-center text-3xl font-semibold mb-12">
          Mari Bangun Sesuatu yang Hebat
        </h1>
        <form
          onSubmit={handleSubmit}
          className="contact-form max-w-xl mx-auto grid gap-4"
        >
          {['Nama', 'Email', 'Perusahaan'].map((field) => (
            <input
              key={field}
              type={field === 'Email' ? 'email' : 'text'}
              required
              placeholder={field}
              className="p-3 rounded-md bg-background/50 border border-accent/40 focus:border-accent focus:outline-none"
            />
          ))}
          <textarea
            rows={5}
            required
            placeholder="Pesan"
            className="p-3 rounded-md bg-background/50 border border-accent/40 focus:border-accent focus:outline-none"
          ></textarea>
          <button type="submit" className="btn bg-primary hover:bg-primary/80">
            Kirim Permintaan
          </button>
        </form>
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Kantor Kami</h2>
          <p className="mb-4 text-primary">Jl. Contoh No. 123, Jakarta, Indonesia</p>
          <iframe
            title="Jakarta Map"
            src="https://www.google.com/maps?q=Jakarta,+Indonesia&output=embed"
            className="w-full h-64 border-0 rounded-lg"
          />
        </div>
      </section>
    </Layout>
  );
}
