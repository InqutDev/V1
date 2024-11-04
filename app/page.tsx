'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Palette, Search, Shield, Brush, Calendar, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSearch } from '@/components/animated-search';

export default function Home() {
  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = 0.7;
    }
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-50 dark:opacity-30"
        >
          <source src="https://cdn.coverr.co/videos/coverr-close-up-of-tattoo-artist-at-work-2633/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        
        <motion.div 
          className="relative container px-4 md:px-6 z-10"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <div className="flex flex-col items-center space-y-8 text-center">
            <motion.div 
              className="space-y-4"
              variants={fadeIn}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Your Vision,{' '}
                <span className="text-primary">Their Artistry</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
                Connect with elite tattoo artists, explore stunning portfolios, and bring your dream tattoo to life.
              </p>
            </motion.div>
            <motion.div 
              className="w-full"
              variants={fadeIn}
            >
              <AnimatedSearch />
            </motion.div>
            <motion.div 
              className="space-x-4 pt-8"
              variants={fadeIn}
            >
              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/artists">Find Your Artist</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-12 px-8">
                <Link href="/register">Join as Artist</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Stats Section */}
      <motion.section 
        className="w-full py-12 bg-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">5K+</h3>
              <p className="text-muted-foreground">Active Artists</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">100K+</h3>
              <p className="text-muted-foreground">Tattoos Created</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">4.9</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Inqut?</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">Everything you need for your perfect tattoo experience</p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Search className="h-6 w-6" />,
                title: "Smart Artist Matching",
                description: "Find artists that match your style preferences and location with our intelligent search system."
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: "Verified Portfolios",
                description: "Browse authentic work samples and genuine client reviews to make informed decisions."
              },
              {
                icon: <Calendar className="h-6 w-6" />,
                title: "Easy Scheduling",
                description: "Book appointments seamlessly with real-time availability and instant confirmation."
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Secure Platform",
                description: "Your safety is our priority with verified artists and secure payment processing."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Artist Community",
                description: "Join a thriving community of artists and enthusiasts sharing their passion for tattoo art."
              },
              {
                icon: <Brush className="h-6 w-6" />,
                title: "Custom Designs",
                description: "Collaborate with artists to create your perfect custom tattoo design."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="w-full py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Artists</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">Discover some of our top-rated tattoo artists</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Rivera",
                style: "Neo Traditional",
                image: "https://images.unsplash.com/photo-1598211686290-a8ef209d87c5?auto=format&fit=crop&w=300&h=300"
              },
              {
                name: "Sarah Chen",
                style: "Minimalist",
                image: "https://images.unsplash.com/photo-1598211686638-61d85fb70911?auto=format&fit=crop&w=300&h=300"
              },
              {
                name: "Marcus Kim",
                style: "Japanese Traditional",
                image: "https://images.unsplash.com/photo-1598211686754-89f5e7b12ec8?auto=format&fit=crop&w=300&h=300"
              }
            ].map((artist, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={400}
                    height={400}
                    className="object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="font-bold text-lg">{artist.name}</h4>
                      <p className="text-sm text-gray-200">{artist.style}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/artists">View All Artists</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />
        <motion.div 
          className="container relative px-4 md:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Ready to Start Your Tattoo Journey?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join thousands of artists and clients already using our platform.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/register">Create Account</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-12 px-8">
                <Link href="/artists">Browse Artists</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}