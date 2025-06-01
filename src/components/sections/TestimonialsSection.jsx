'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechInnovate',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    quote: "DemigodCloud transformed our e-commerce platform completely. Their team delivered a solution that not only looks beautiful but also performs exceptionally well. The conversion rates have increased by 45% since launch!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CTO, GlobalApp',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    quote: "We approached DemigodCloud for an app that needed complex integration with multiple APIs. Their technical expertise and attention to detail were impressive. The app works flawlessly and our users love it.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    position: 'Marketing Director, RetailBrand',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    quote: "The digital marketing services provided by DemigodCloud have been game-changing for our brand. Our online visibility has improved significantly and we've seen a substantial increase in qualified leads.",
    rating: 4,
  },
  {
    id: 4,
    name: 'Robert Williams',
    position: 'Founder, StartupsLab',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    quote: "As a startup, we needed a reliable technical partner who understood our vision. DemigodCloud delivered beyond our expectations, creating an MVP that helped us secure our next round of funding.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Aisha Patel',
    position: 'UX Director, DesignFirst',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    quote: "The design team at DemigodCloud is truly exceptional. They created a user interface that perfectly balances aesthetics and functionality. Our product's usability scores have improved dramatically.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-underline inline-block mb-6 pb-2">
            What Our <span className="text-demigod-teal">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say about their experience
            working with DemigodCloud.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="embla__slide flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
                  <Card className="h-full border-0 shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-demigod-blue">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.position}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                          ))}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 text-demigod-blue hover:bg-demigod-blue hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 text-demigod-blue hover:bg-demigod-blue hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-demigod-blue' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
