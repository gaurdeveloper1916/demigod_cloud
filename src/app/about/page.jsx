'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Users, Award, Briefcase, Clock } from 'lucide-react';

const AboutPage = () => {
  const companyValues = [
    {
      title: 'Innovation',
      description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions.',
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in our code, design, and project management processes.',
      icon: <Check className="h-6 w-6" />,
    },
    {
      title: 'Client Success',
      description: 'Our ultimate goal is to help our clients achieve their business objectives through technology.',
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: 'Teamwork',
      description: 'We foster a collaborative environment where diverse perspectives lead to better solutions.',
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: 'Reliability',
      description: 'We deliver on our promises, maintaining transparency and accountability throughout every project.',
      icon: <Clock className="h-6 w-6" />,
    },
  ];

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
              About DemigodCloud
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100"
            >
              Delivering exceptional digital experiences through innovation and technical excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-demigod-blue mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <b>DemigodCloud</b> is an entity founded by Mr. Devanshu Gaur. Our team aims to achieve the ultimate goal of developing projects and products in the most advanced hybrid format, to assure guaranteed long-term effective & efficient growth to our clients, partners & associates community.
                </p>
                <p className="text-gray-700">
                  Since our inception, we've been dedicated to providing innovative digital solutions that help businesses transform and grow in an increasingly digital world. We started as a small team of passionate technologists and have grown into a comprehensive digital services provider.
                </p>
                <p className="text-gray-700">
                  Our journey has been defined by our commitment to excellence, our passion for innovation, and our dedication to helping our clients succeed. We've worked with businesses of all sizes, from startups to large enterprises, across various industries.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-demigod-blue mb-2">What Makes Us Unique</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-demigod-teal mr-2 mt-1" />
                      <span>10+ years of industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-demigod-teal mr-2 mt-1" />
                      <span>Global client base across diverse industries</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-demigod-teal mr-2 mt-1" />
                      <span>More than 100+ successful projects delivered</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-demigod-teal mr-2 mt-1" />
                      <span>Transparent agreements and communication</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-demigod-teal mr-2 mt-1" />
                      <span>Team of dedicated professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="DemigodCloud Team"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-demigod-blue/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-demigod-teal/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-demigod-blue mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg"
            >
              These principles guide everything we do, from how we build our products to how we interact with our clients and each other.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-demigod-blue/10 text-demigod-blue mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-demigod-blue mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-demigod-blue to-demigod-gradient-purple rounded-lg p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="mb-4 text-white">
                To be the leading digital transformation partner for businesses worldwide, known for our innovative solutions, technical excellence, and unwavering commitment to client success.
              </p>
              <p className='text-white'>
                We aim to create a future where technology empowers businesses of all sizes to reach their full potential and deliver exceptional experiences to their customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-demigod-blue mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To deliver exceptional digital solutions that transform businesses, enhance user experiences, and drive sustainable growth.
              </p>
              <p className="text-gray-700">
                We achieve this by leveraging cutting-edge technologies, fostering a culture of innovation, maintaining the highest standards of quality, and building lasting partnerships with our clients based on trust and mutual success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    // <p>Coming soon</p>
  );
};

export default AboutPage;
