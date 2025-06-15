'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const techCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    technologies: [
      { name: 'React', icon: 'https://ext.same-assets.com/4163753834/1113559555.webp' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Next.js', icon: 'https://ext.same-assets.com/4163753834/2219250404.webp' },
      { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    technologies: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PHP', icon: 'https://ext.same-assets.com/4163753834/132558234.webp' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile',
    technologies: [
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
    ]
  },
  {
    id: 'database',
    label: 'Database',
    technologies: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ]
  },
];

const TechnologiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-underline inline-block mb-6 pb-2">
            Design & Develop with <span className="text-demigod-teal">Next-Gen Tech</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our team holds expertise in cutting-edge technologies, allowing us to build robust,
            scalable, and innovative solutions for your business needs.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {techCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-demigod-blue data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {techCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-full p-4 shadow-sm">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className="text-demigod-blue font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-500 italic">
                  Our expertise isn't limited to just these technologies.
                  We adapt to the best tools for your specific project requirements.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-demigod-blue to-demigod-gradient-purple rounded-lg p-8 mt-16 text-white text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-white ">Let's discuss your project requirements</h3>
          <p className="mb-6 text-white ">
            Our team of experts will help you determine the best technology stack for your project
            based on your specific business needs and goals.
          </p>
          <button className="bg-white text-demigod-blue px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
