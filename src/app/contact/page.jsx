'use client';

import { motion } from 'framer-motion';
import ContactSection from '@/components/sections/ContactSection';

const ContactPage = () => {
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
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100"
            >
              We'd love to hear from you. Let's discuss how we can help transform your business with our digital solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-demigod-blue mb-10 text-center"
            >
              Our Location
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7748119591105!2d72.82414777437794!3d18.936571154840827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce112b558ee9%3A0xa7d5e5dca825fce2!2sOpera%20House%2C%20Mumbai%2C%20Maharashtra%20400004!5e0!3m2!1sen!2sin!4v1681381669367!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DemigodCloud Office Location"
                className="w-full h-full rounded-lg"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    // <>
    // <p>Coming soon</p>
    // </>
  );
};

export default ContactPage;
