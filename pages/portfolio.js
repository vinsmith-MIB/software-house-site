import Head from 'next/head';
import Layout from '@/components/Layout';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Portfolio() {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    cardRefs.current.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });
  }, []);
  const projects = [
    {
<<<<<<< HEAD
      name: 'Healthcare Booking App',
      description:
        'A cross‑platform mobile and web application that allows patients to schedule appointments, receive reminders and consult doctors via video call.',
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Inventory Management System',
      description:
        'A cloud‑based platform for managing stock levels, supplier orders and warehouse logistics with real‑time analytics and reporting.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Analytics Dashboard',
      description:
        'An interactive dashboard that aggregates data from multiple sources and uses machine learning to provide actionable insights.',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'E‑Commerce Platform',
      description:
        'A scalable e‑commerce solution with customizable storefronts, payment gateway integrations and order fulfillment automation.',
      image:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1350&q=80',
=======
      title: 'Platform E-commerce',
      tag: 'Web App',
      image:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Sistem Kesehatan AI',
      tag: 'AI Solution',
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Dashboard Cloud',
      tag: 'DevOps',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1350&q=80',
>>>>>>> 984b407df142c2bd591a2404d67281c3d192c89e
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Portofolio – SoftWareHouse</title>
        <meta
          name="description"
          content="Contoh proyek unggulan yang telah kami kerjakan."
        />
      </Head>
      <section className="py-20">
        <h1 className="text-center text-3xl font-semibold mb-12">Portofolio</h1>
        <div className="grid gap-8 md:grid-cols-3">
<<<<<<< HEAD
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-accent/20 rounded-lg overflow-hidden bg-background/60"
            >
              <img
                src={project.image}
                alt={project.name}
                style={{ width: '100%', borderRadius: '4px', marginBottom: '1rem' }}
              />
              <h3>{project.name}</h3>
              <p style={{ lineHeight: '1.5' }}>{project.description}</p>
=======
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[i] = el)}
              className="border border-accent/20 rounded-lg overflow-hidden bg-background/60 shadow-lg hover:shadow-accent/40 transition transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-accent">{project.tag}</span>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              </div>
>>>>>>> 984b407df142c2bd591a2404d67281c3d192c89e
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
