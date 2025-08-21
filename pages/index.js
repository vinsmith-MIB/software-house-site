import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import {
  CodeBracketIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef([]);

  useEffect(() => {
    gsap.from(heroRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
    });

    gsap.registerPlugin(ScrollTrigger);
    servicesRef.current.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>SoftWareHouse – Membangun Masa Depan Teknologi</title>
        <meta
          name="description"
          content="Kami membuat solusi digital yang scalable dengan teknologi terbaru."
        />
      </Head>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1650&q=80"
          alt="Futuristic technology"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90" />
        <h1 className="relative text-4xl md:text-6xl font-bold">Membangun Masa Depan Teknologi</h1>
        <p className="relative mt-4 max-w-2xl text-lg text-primary">
          Kami membuat solusi digital yang scalable dengan teknologi terbaru.
        </p>
        <div className="relative mt-8 flex gap-4">
          <Link href="/contact" className="btn bg-primary hover:bg-primary/80">
            Mulai Proyek
          </Link>
          <Link href="/services" className="btn bg-secondary hover:bg-secondary/80">
            Lihat Layanan
          </Link>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <h2 className="text-center text-2xl font-semibold mb-8 text-primary">
          Dipercaya Perusahaan Ternama
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://dummyimage.com/160x80/1e293b/ffffff&text=Logo+${i}`}
              alt={`Client ${i}`}
              className="grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-semibold mb-12">Layanan Kami</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            ref={(el) => (servicesRef.current[0] = el)}
            className="p-6 rounded-lg bg-background/60 border border-accent/20 text-center shadow-lg hover:shadow-accent/40 transition transform hover:-translate-y-1"
          >
            <CodeBracketIcon className="h-10 w-10 mx-auto text-accent" />
            <h3 className="mt-4 font-semibold">
              Pengembangan Software Kustom
            </h3>
          </div>
          <div
            ref={(el) => (servicesRef.current[1] = el)}
            className="p-6 rounded-lg bg-background/60 border border-accent/20 text-center shadow-lg hover:shadow-accent/40 transition transform hover:-translate-y-1"
          >
            <CloudIcon className="h-10 w-10 mx-auto text-accent" />
            <h3 className="mt-4 font-semibold">Cloud & DevOps</h3>
          </div>
          <div
            ref={(el) => (servicesRef.current[2] = el)}
            className="p-6 rounded-lg bg-background/60 border border-accent/20 text-center shadow-lg hover:shadow-accent/40 transition transform hover:-translate-y-1"
          >
            <DevicePhoneMobileIcon className="h-10 w-10 mx-auto text-accent" />
            <h3 className="mt-4 font-semibold">Aplikasi Mobile</h3>
          </div>
          <div
            ref={(el) => (servicesRef.current[3] = el)}
            className="p-6 rounded-lg bg-background/60 border border-accent/20 text-center shadow-lg hover:shadow-accent/40 transition transform hover:-translate-y-1"
          >
            <CpuChipIcon className="h-10 w-10 mx-auto text-accent" />
            <h3 className="mt-4 font-semibold">AI & Solusi Data</h3>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Inovasi Utama</h2>
        <p className="text-primary text-lg mb-6">
          10+ tahun memberikan solusi IT untuk startup dan perusahaan global.
        </p>
        <div className="text-5xl font-bold text-accent animate-pulse">10+</div>
      </section>
    </Layout>
  );
}
