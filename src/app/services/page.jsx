'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Website Development',
    icon: 'https://ext.same-assets.com/4163753834/3093550014.webp',
    description: 'Custom e-commerce solutions tailored to your business needs. We create intuitive, secure, and scalable online stores that drive conversions and enhance customer experience.',
    features: [
      'Custom product catalog and inventory management',
      'Secure payment gateway integration',
      'Mobile-responsive design',
      'SEO optimization for better visibility',
      'Analytics and reporting dashboard',
    ],
    cta: 'Transform Your Online Store',
    path: '/services/ecommerce',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    icon: 'https://ext.same-assets.com/4163753834/1280216548.webp',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We specialize in building robust, feature-rich apps for iOS and Android platforms.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native',
      'UI/UX design focused on user engagement',
      'App Store and Play Store optimization',
      'Ongoing maintenance and support',
    ],
    cta: 'Build Your Mobile Application',
    path: '/services/mobile-app',
  },
  {
    id: 'web-development',
    title: 'Custom Web Development',
    icon: 'https://ext.same-assets.com/4163753834/2441300200.webp',
    description: 'End-to-end web development services from concept to deployment. We create custom, scalable, and high-performance web applications that align with your business objectives.',
    features: [
      'Custom web application development',
      'Progressive Web Apps (PWAs)',
      'Front-end and back-end development',
      'API development and integration',
      'Performance optimization',
    ],
    cta: 'Start Your Web Project',
    path: '/services/web-development',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Services',
    icon: 'https://ext.same-assets.com/4163753834/2324484177.webp',
    description: 'Comprehensive digital marketing strategies to enhance your online presence, drive traffic, and increase conversions. We help you reach your target audience through various digital channels.',
    features: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Pay-Per-Click (PPC) advertising',
      'Content marketing and strategy',
      'Email marketing campaigns',
    ],
    cta: 'Boost Your Online Presence',
    path: '/services/digital-marketing',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design Services',
    icon: 'https://ext.same-assets.com/4163753834/2907551384.webp',
    description: 'User-centered design solutions that enhance user experience and satisfaction. We create intuitive, accessible, and visually appealing interfaces that drive engagement and conversions.',
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing and analysis',
      'Responsive and adaptive design',
    ],
    cta: 'Enhance Your User Experience',
    path: '/services/ui-ux',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: 'https://ext.same-assets.com/4163753834/338845252.webp',
    description: 'Scalable, secure, and cost-effective cloud solutions to optimize your IT infrastructure. We help you leverage the power of cloud computing to enhance your business operations.',
    features: [
      'Cloud migration and deployment',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Cloud security implementation',
      'DevOps and continuous integration',
    ],
    cta: 'Migrate to the Cloud',
    path: '/services/cloud-solutions',
  },
];

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300 border-0">
        <CardContent className="p-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-demigod-blue/10 rounded-lg flex items-center justify-center mr-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={30}
                height={30}
                className="w-6 h-6 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-demigod-blue">{service.title}</h3>
          </div>

          <p className="text-gray-600 mb-6">{service.description}</p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-demigod-blue mb-3">Key Features</h4>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-demigod-teal mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href={service.path}>
            <Button className="btn-primary group w-full">
              {service.cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-demigod-blue to-demigod-gradient-purple py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100"
            >
              Comprehensive digital solutions to help your business thrive in the modern digital landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-demigod-blue mb-6"
            >
              Explore Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg"
            >
              We offer a wide range of digital services to help businesses of all sizes achieve their goals.
              From web and mobile development to digital marketing and cloud solutions,
              we have the expertise to deliver exceptional results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-demigod-blue to-demigod-gradient-purple rounded-lg p-10 text-white text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-white"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 text-white"
            >
              Let's discuss how our services can help you achieve your business goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button className="bg-white text-demigod-blue hover:bg-opacity-90 px-8 py-3 text-lg font-medium rounded-md">
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  //  <p>Coming soon</p>
  );
};

export default ServicesPage;
