'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Globe, PaintBucket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-demigod-teal/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-demigod-gold/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-white mb-6 leading-tight">
              Best E-Commerce Website Development Company in India
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Revolutionize your business and profits to higher notes with the best team in Asia pacific! We deliver exceptional digital experiences that transform how customers interact with your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-secondary group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="bg-white text-demigod-blue border-white hover:bg-demigod-blue hover:text-white">
                Explore Services
              </Button>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-full rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: <Globe className="h-8 w-8" />, title: "Web Development", desc: "E-commerce & custom websites" },
                    { icon: <Code className="h-8 w-8" />, title: "App Development", desc: "iOS & Android apps" },
                    { icon: <PaintBucket className="h-8 w-8" />, title: "Digital Marketing", desc: "SEO & social media" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="bg-demigod-teal/20 p-3 rounded-full text-demigod-teal mb-3">
                        {item.icon}
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 bg-gradient-to-r from-demigod-blue/30 to-demigod-teal/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold">Ready to transform your business?</h4>
                      <p className="text-gray-300 text-sm">Get started with a free consultation</p>
                    </div>
                    <Link href="/contact">
                      <Button size="sm" className="bg-white text-demigod-blue hover:bg-demigod-teal hover:text-white">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats/Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-demigod-teal text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
