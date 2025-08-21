import Head from 'next/head';
import Layout from '@/components/Layout';
import {
  CodeBracketIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

export default function Services() {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    cardRefs.current.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      });
    });
  }, []);

  const services = [
    {
      title: 'Pengembangan Web',
      description:
        'Aplikasi Next.js, React, dan Node.js berskala enterprise.',
      Icon: CodeBracketIcon,
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Pipeline CI/CD, Kubernetes, dan solusi serverless.',
      Icon: CloudIcon,
    },
    {
      title: 'Aplikasi Mobile',
      description:
        'Pengembangan lintas platform dengan React Native & Flutter.',
      Icon: DevicePhoneMobileIcon,
    },
    {
      title: 'AI & Data',
      description:
        'Model machine learning dan dashboard berbasis data.',
      Icon: CpuChipIcon,
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Layanan – SoftWareHouse</title>
        <meta
          name="description"
          content="Layanan pengembangan perangkat lunak modern dari SoftWareHouse."
        />
      </Head>
      <section className="py-20">
        <h1 className="text-center text-3xl font-semibold mb-12">Layanan Kami</h1>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="p-8 border border-accent/20 rounded-lg bg-background/60"
            >
              <Icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-primary">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
