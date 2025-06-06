import { motion } from "framer-motion";
import {
  Code,
  Users,
  LineChart,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";
import StatsSection from "../components/sections/StatsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import IndustriesSection from "../components/sections/IndustriesSection";
import ParallaxSection from "../components/ui/ParallaxSection";
import AnimatedText from "../components/ui/AnimatedText";
import GradientButton from "../components/ui/GradientButton";
import FloatingCard from "../components/ui/FloatingCard";

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Kronocode Solutions LLC provides expert technology consulting, staffing, and web development services. Transform your business with our innovative solutions."
        keywords="technology consulting, IT staffing, web development, software development, IT solutions, digital transformation"
        canonical="https://kronocode.com"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 -z-20"></div>

        <div className="container">
          <div className="max-w-3xl">
            <AnimatedText
              text="Empowering Growth with Global Staffing & Strategic Consulting"
className="text-4xl md:text-5xl lg:text-4xl font-poppins font-bold leading-relaxed mb-8"
            />

            <motion.p
              className="text-xl text-navy-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Empower your business with Kronocode's expert consulting,
              staffing, and web development services. We turn your technological
              challenges into opportunities for growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <GradientButton to="/services">
                Explore Our Services
              </GradientButton>
              <GradientButton to="/contact">Contact Us</GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive suite of technology services to help your business succeed in the digital landscape."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FloatingCard>
              <ServiceCard
                title="IT Consulting"
                description="Strategic technology consulting to solve complex business challenges and drive digital transformation initiatives."
                icon={<LineChart size={32} />}
                delay={0}
              />
            </FloatingCard>
            <FloatingCard>
              <ServiceCard
                title="Staff Augmentation"
                description="Access to top-tier tech talent to enhance your team's capabilities and accelerate project delivery."
                icon={<Users size={32} />}
                delay={1}
              />
            </FloatingCard>
            <FloatingCard>
              <ServiceCard
                title="Web Development"
                description="Custom web applications and responsive websites built with the latest technologies and best practices."
                icon={<Code size={32} />}
                delay={2}
              />
            </FloatingCard>
          </div>

          <div className="text-center mt-12">
            <GradientButton to="/services">View All Services</GradientButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ParallaxSection>
        <StatsSection />
      </ParallaxSection>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ParallaxSection>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            </ParallaxSection>

            <div>
              <SectionHeading
                title="Why Choose Kronocode"
                subtitle="We combine technical expertise with business acumen to deliver solutions that drive real results."
                centered={false}
              />

              <div className="space-y-6">
                {[
                  {
                    title: "Technical Excellence",
                    description:
                      "Our team of experts stays at the forefront of technology trends and best practices.",
                  },
                  {
                    title: "Client-Centric Approach",
                    description:
                      "We work closely with you to understand your unique needs and deliver tailored solutions.",
                  },
                  {
                    title: "Proven Track Record",
                    description:
                      "We've successfully delivered hundreds of projects for clients across various industries.",
                  },
                  {
                    title: "End-to-End Support",
                    description:
                      "From strategy to implementation and beyond, we're with you every step of the way.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="mr-4 mt-1">
                      <div className="bg-primary-100 rounded-full p-1">
                        <ChevronRight size={20} className="text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-navy-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <GradientButton to="/about">Learn more about us</GradientButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ParallaxSection>
        <IndustriesSection />
      </ParallaxSection>

      <ParallaxSection>
        <TestimonialsSection />
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 -z-10"></div>
        <ParallaxSection
          className="absolute top-0 right-0 w-full h-full -z-20"
          offset={50}
        >
          <div className="bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 mix-blend-overlay w-full h-full"></div>
        </ParallaxSection>

        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <AnimatedText
              text="Ready to Innovate?"
              className="text-white text-3xl md:text-4xl font-semibold mb-6"
            />
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how we can help you achieve your technology goals
              and drive business growth.
            </p>
            <GradientButton to="/contact" className="inline-block">
              <MessageSquare size={18} className="mr-2 inline-block" />
              Schedule a Consultation
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
