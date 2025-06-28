'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'business-first',
    title: 'Business-first mindset',
    icon: 'https://ext.same-assets.com/4163753834/3093550014.webp',
    description: 'We don’t just write code, we build platforms that serve real goals. Every decision starts with your business in mind.',
    features: ['Customized product catalog', 'Multiple payment gateways', 'Reporting tools', 'High-quality images'],
    link: '/services/ecommerce'
  },
  {
    id: 'Speed without chaos',
    title: 'Speed without chaos',
    icon: 'https://ext.same-assets.com/4163753834/2324484177.webp',
    description: 'We move fast, but never messy. Our process is lean, focused, and structured to reduce waste and avoid rework.',
    features: ['SEO optimization', 'Social media marketing', 'Content strategy', 'Email campaigns'],
    link: '/services/digital-marketing'
  },
  {
    id: 'Built for traction',
    title: 'Built for traction',
    icon: 'https://ext.same-assets.com/4163753834/2907551384.webp',
    description: 'We help you build what users will adopt, and what converts. Strategy and design choices are always tied to growth.',
    features: ['UI/UX design', 'Brand identity', 'Web design', 'App interface design'],
    link: '/services/design'
  },
  {
    id: 'Backed by long-term thinking',
    title: 'Backed by long-term thinking',
    icon: 'https://ext.same-assets.com/4163753834/1280216548.webp',
    description: "As part of a hedge fund structure, we think like investors. We care about what scales, not just what launches.",
    features: ['iOS & Android development', 'Cross-platform apps', 'Hybrid solutions', 'App maintenance'],
    link: '/services/mobile-app'
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="card-hover h-full border border-gray-200">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-demigod-blue/10 flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={32}
                height={32}
                className="w-7 h-7 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-demigod-blue">{service.title}</h3>
          </div>

          <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-demigod-teal mr-2 shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href={service.link} className="mt-auto">
            <Button variant="outline" className="w-full group">
              Learn More
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-underline inline-block mb-6 pb-2">
              What makes us <span className="text-demigod-teal">Standout</span>?
            </h2>
            <p className="text-gray-600 text-lg">
              From idea to execution- we work across product strategy, design, development, and growth. All with one goal - to make the build actually serve the business.

            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <Button className="btn-primary">
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
