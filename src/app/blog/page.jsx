'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, Tag, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'What is holding back your website from ranking higher on SERP and getting more traffic?',
    excerpt: 'Learn the key factors that could be preventing your website from achieving better search engine rankings and how to address them effectively.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    date: 'May 15, 2024',
    readTime: '5 min read',
    category: 'SEO',
    slug: 'ranking-higher-on-serp'
  },
  {
    id: 2,
    title: 'E-Commerce Web Designing, Growth and Engagement',
    excerpt: 'Discover the essential elements of successful e-commerce web design that drive growth, increase customer engagement, and boost conversion rates.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'April 28, 2024',
    readTime: '7 min read',
    category: 'E-Commerce',
    slug: 'ecommerce-web-designing'
  },
  {
    id: 3,
    title: 'Top Web Designing Company, Your nearby Solution-based Web Development',
    excerpt: 'Find out why choosing a local web development partner can provide significant advantages for your business, from better communication to more personalized solutions.',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'April 10, 2024',
    readTime: '6 min read',
    category: 'Web Development',
    slug: 'top-web-designing-company'
  },
  {
    id: 4,
    title: 'The Future of Mobile App Development: Trends to Watch in 2024',
    excerpt: 'Explore the emerging technologies and methodologies shaping the future of mobile app development and how they can benefit your business.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    date: 'March 22, 2024',
    readTime: '8 min read',
    category: 'Mobile App',
    slug: 'future-of-mobile-app-development'
  },
  {
    id: 5,
    title: 'How AI is Transforming Digital Marketing Strategies',
    excerpt: 'Learn how artificial intelligence is revolutionizing digital marketing and how businesses can leverage AI tools to enhance their marketing efforts.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80',
    date: 'March 5, 2024',
    readTime: '9 min read',
    category: 'Digital Marketing',
    slug: 'ai-transforming-digital-marketing'
  },
  {
    id: 6,
    title: 'Building Secure E-Commerce Platforms: Best Practices',
    excerpt: 'Discover essential security measures and best practices for developing robust and secure e-commerce platforms that protect both businesses and customers.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665321e3e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    date: 'February 18, 2024',
    readTime: '7 min read',
    category: 'E-Commerce',
    slug: 'secure-ecommerce-platforms'
  },
];

const categories = [
  'All',
  'Web Development',
  'E-Commerce',
  'Digital Marketing',
  'Mobile App',
  'SEO',
  'UI/UX',
];

const BlogPostCard = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border-0 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            className="object-cover object-center w-full h-full transform hover:scale-105 transition-transform duration-500"
            width={600}
            height={300}
          />
          <div className="absolute top-4 right-4 bg-demigod-teal text-white text-xs font-semibold py-1 px-2 rounded">
            {post.category}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <div className="flex items-center mr-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-demigod-blue mb-3 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-demigod-teal font-medium">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CategoryFilter = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            category === 'All'
              ? 'bg-demigod-blue text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const BlogPage = () => {
  return (
    // <div className="bg-white">
    //   {/* Hero Section */}
    //   <section className="bg-gradient-to-r from-demigod-blue to-demigod-gradient-purple py-20 text-white">
    //     <div className="container mx-auto px-4">
    //       <div className="max-w-3xl mx-auto text-center">
    //         <motion.h1
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5 }}
    //           className="text-4xl md:text-5xl font-bold mb-6"
    //         >
    //           Our Blog
    //         </motion.h1>
    //         <motion.p
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ duration: 0.5, delay: 0.2 }}
    //           className="text-xl text-gray-100"
    //         >
    //           Insights, tips, and trends about web development, digital marketing, and technology.
    //         </motion.p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Blog Section */}
    //   <section className="py-20">
    //     <div className="container mx-auto px-4">
    //       {/* Search and Filter */}
    //       <div className="max-w-5xl mx-auto mb-12">
    //         <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
    //           <div className="relative w-full md:w-1/3">
    //             <input
    //               type="text"
    //               placeholder="Search articles..."
    //               className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-demigod-teal"
    //             />
    //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    //           </div>
    //           <CategoryFilter categories={categories} />
    //         </div>
    //       </div>

    //       {/* Featured Post */}
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5 }}
    //         viewport={{ once: true }}
    //         className="max-w-5xl mx-auto mb-16"
    //       >
    //         <div className="bg-gray-50 rounded-xl overflow-hidden">
    //           <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
    //             <div className="lg:col-span-2 h-72 lg:h-auto relative">
    //               <Image
    //                 src={blogPosts[0].image}
    //                 alt={blogPosts[0].title}
    //                 className="object-cover h-full w-full"
    //                 width={600}
    //                 height={600}
    //               />
    //               <div className="absolute top-4 left-4 bg-demigod-teal text-white text-sm font-semibold py-1 px-3 rounded">
    //                 Featured
    //               </div>
    //             </div>
    //             <div className="lg:col-span-3 p-8 flex flex-col justify-center">
    //               <div className="flex items-center text-sm text-gray-500 mb-3">
    //                 <div className="flex items-center mr-4">
    //                   <Calendar className="h-4 w-4 mr-1" />
    //                   <span>{blogPosts[0].date}</span>
    //                 </div>
    //                 <div className="flex items-center mr-4">
    //                   <Clock className="h-4 w-4 mr-1" />
    //                   <span>{blogPosts[0].readTime}</span>
    //                 </div>
    //                 <div className="flex items-center">
    //                   <Tag className="h-4 w-4 mr-1" />
    //                   <span>{blogPosts[0].category}</span>
    //                 </div>
    //               </div>
    //               <h2 className="text-2xl md:text-3xl font-bold text-demigod-blue mb-4">
    //                 {blogPosts[0].title}
    //               </h2>
    //               <p className="text-gray-600 mb-6">
    //                 {blogPosts[0].excerpt}
    //               </p>
    //               <Link href={`/blog/${blogPosts[0].slug}`}>
    //                 <Button className="btn-primary">
    //                   Read Full Article
    //                   <ArrowRight className="ml-2 h-4 w-4" />
    //                 </Button>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </motion.div>

    //       {/* Blog Grid */}
    //       <div className="max-w-6xl mx-auto">
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //           {blogPosts.slice(1).map((post) => (
    //             <BlogPostCard key={post.id} post={post} />
    //           ))}
    //         </div>

    //         {/* Pagination */}
    //         <div className="flex justify-center mt-16">
    //           <div className="flex items-center space-x-2">
    //             <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-demigod-teal hover:text-demigod-teal transition-colors">
    //               <ArrowRight className="h-4 w-4 transform rotate-180" />
    //             </button>
    //             <button className="w-10 h-10 rounded-full bg-demigod-blue text-white flex items-center justify-center">
    //               1
    //             </button>
    //             <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-demigod-teal hover:text-demigod-teal transition-colors">
    //               2
    //             </button>
    //             <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-demigod-teal hover:text-demigod-teal transition-colors">
    //               3
    //             </button>
    //             <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-demigod-teal hover:text-demigod-teal transition-colors">
    //               <ArrowRight className="h-4 w-4" />
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Newsletter Section */}
    //   <section className="py-20 bg-gray-50">
    //     <div className="container mx-auto px-4">
    //       <div className="max-w-3xl mx-auto text-center">
    //         <motion.h2
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5 }}
    //           viewport={{ once: true }}
    //           className="text-3xl font-bold text-demigod-blue mb-4"
    //         >
    //           Subscribe to Our Newsletter
    //         </motion.h2>
    //         <motion.p
    //           initial={{ opacity: 0 }}
    //           whileInView={{ opacity: 1 }}
    //           transition={{ duration: 0.5, delay: 0.2 }}
    //           viewport={{ once: true }}
    //           className="text-gray-600 mb-8"
    //         >
    //           Stay updated with the latest trends in web development, mobile apps,
    //           and digital marketing. We promise not to spam your inbox!
    //         </motion.p>

    //         <motion.div
    //           initial={{ opacity: 0 }}
    //           whileInView={{ opacity: 1 }}
    //           transition={{ duration: 0.5, delay: 0.4 }}
    //           viewport={{ once: true }}
    //           className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
    //         >
    //           <input
    //             type="email"
    //             placeholder="Enter your email address"
    //             className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-demigod-teal"
    //           />
    //           <Button className="btn-primary whitespace-nowrap">
    //             Subscribe
    //           </Button>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <p>Coming soon</p>
  );
};

export default BlogPage;
