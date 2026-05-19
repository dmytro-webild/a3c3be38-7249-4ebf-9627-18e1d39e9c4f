"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Overview",
          id: "#about",
        },
        {
          name: "Services",
          id: "#features",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
      ]}
      brandName="VORTEX"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Turn your business idea into digital presence"
      description="VORTEX builds modern websites, brand systems, AI marketing flows, and simple automation setups for businesses that want to look sharper and move smarter online. From rough concept to polished, lead-ready digital system—all in one premium package."
      testimonials={[
        {
          name: "Sarah Miller",
          handle: "@sarah_designs",
          testimonial: "Vortex completely transformed my digital presence. Lead generation has tripled since we launched.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h76s74&_wi=1",
          imageAlt: "digital vortex background",
        },
        {
          name: "David Chen",
          handle: "@chen_consulting",
          testimonial: "Finally, a solution that handles branding and automation under one roof. Highly professional results.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=e71b4c",
          imageAlt: "digital vortex background",
        },
        {
          name: "Elena Rodriguez",
          handle: "@elena_coaching",
          testimonial: "The transition from concept to polished launch was seamless. My brand finally looks as premium as my service.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dk1d5l&_wi=1",
          imageAlt: "digital vortex background",
        },
        {
          name: "Marcus Thorne",
          handle: "@m_thorne_coach",
          testimonial: "Exceptional work on the automated marketing flows. It feels like having a whole team working for me.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y3b54z&_wi=1",
          imageAlt: "digital vortex background",
        },
        {
          name: "Linda Wu",
          handle: "@linda_consults",
          testimonial: "The design quality is top-tier. My business has never looked this professional.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1pnw56&_wi=1",
          imageAlt: "digital vortex background",
        },
      ]}
      buttons={[
        {
          text: "Launch Your Project",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h76s74&_wi=2"
      imageAlt="digital vortex background"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=z3x0ml",
          alt: "portrait successful entrepreneur",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=v4mirg",
          alt: "creative entrepreneur working",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h63kdn",
          alt: "startup founder portrait",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gbckg4",
          alt: "professional business consultant",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=uxl4pd",
          alt: "content strategist portrait",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "The Digital Studio for ",
        },
        {
          type: "image",
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=e71b4c",
          alt: "creative studio atmosphere",
        },
        {
          type: "text",
          content: " Ambitious Visionaries",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Web Presence",
          description: "High-performance, modern websites designed to convert visitors into leads.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dk1d5l&_wi=2",
        },
        {
          title: "AI Marketing Flows",
          description: "Automated engagement systems that nurture your leads automatically.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y3b54z&_wi=2",
        },
        {
          title: "Brand Strategy",
          description: "Premium brand systems that build trust instantly and distinguish your business.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1pnw56&_wi=2",
        },
      ]}
      title="Integrated Launch Solutions"
      description="We bridge the gap between rough ideas and professional market readiness."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Essentials",
          price: "$1,999",
          subtitle: "Perfect for freelancers and coaches",
          buttons: [
            {
              text: "Get Started",
              href: "#contact",
            },
          ],
          features: [
            "Custom Branding",
            "One-Page Website",
            "Email Automation",
          ],
        },
        {
          id: "pro",
          badge: "Growth",
          price: "$3,999",
          subtitle: "For established local businesses",
          buttons: [
            {
              text: "Get Started",
              href: "#contact",
            },
          ],
          features: [
            "Full Branding Identity",
            "High-Performance Website",
            "AI Marketing Flow",
            "Lead Automation",
          ],
        },
      ]}
      title="Integrated Launch Packages"
      description="Transparent pricing for a fully managed digital transformation."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "NexusTech",
        "Summit Coaching",
        "Apex Fitness",
        "PureSkin Clinic",
        "ModernFlow",
        "Velocity Startup",
        "Zenith Brand",
      ]}
      title="Trusted by Emerging Brands"
      description="We help ambitious entrepreneurs stand out in a crowded market."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "150+",
          description: "Projects Launched",
        },
        {
          id: "m2",
          value: "85%",
          description: "Avg Conversion Lift",
        },
        {
          id: "m3",
          value: "24h",
          description: "Launch Speed Improvement",
        },
      ]}
      title="Measurable Impact"
      description="Numbers that define our clients' growth."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Exceptional Quality",
          quote: "The team understood my vision immediately. The final output is perfect.",
          name: "Sarah Miller",
          role: "CEO",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=z3x0ml",
        },
        {
          id: "t2",
          title: "Real Results",
          quote: "Automated flows saved me so much time. Lead quality is incredible.",
          name: "David Chen",
          role: "Founder",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=v4mirg",
        },
        {
          id: "t3",
          title: "Premium Feel",
          quote: "My café looks like a high-end enterprise now. Incredible branding work.",
          name: "Elena Rodriguez",
          role: "Owner",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h63kdn",
        },
        {
          id: "t4",
          title: "Game Changer",
          quote: "Best investment for my consultancy. I feel professional everywhere online.",
          name: "Marcus Thorne",
          role: "Coach",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gbckg4",
        },
        {
          id: "t5",
          title: "Highly Recommend",
          quote: "Professional, fast, and high quality. Exactly what I needed.",
          name: "Linda Wu",
          role: "Consultant",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=uxl4pd",
        },
      ]}
      title="Client Success Stories"
      description="Hear how VORTEX turns concepts into systems."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How long is the launch process?",
          content: "We aim to deliver fully polished systems within 2-4 weeks, depending on project scope.",
        },
        {
          id: "q2",
          title: "What tools do you use?",
          content: "We use modern stack tools tailored for automation, design quality, and ease of ownership for you.",
        },
        {
          id: "q3",
          title: "Can I update content later?",
          content: "Absolutely. Every project comes with a user-friendly way to manage your brand assets.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s7dj1b"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about our studio process."
      faqsAnimation="slide-up"
      imageAlt="digital system abstract blue"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to launch your project?"
      buttons={[
        {
          text: "Contact Us Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="VORTEX"
      copyrightText="© 2025 VORTEX Studio. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
