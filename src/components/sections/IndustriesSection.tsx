import { motion } from 'framer-motion';
import { Building2, Stethoscope, GraduationCap, ShoppingBag, Briefcase, Factory } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const industries = [
  {
    icon: <Building2 size={32} />,
    title: "Financial Services",
    description: "Custom solutions for banks, insurance companies, and fintech startups.",
  },
  {
    icon: <Stethoscope size={32} />,
    title: "Healthcare",
    description: "HIPAA-compliant systems for healthcare providers and medical technology companies.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Education",
    description: "Digital learning platforms and administrative systems for educational institutions.",
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "Retail & E-commerce",
    description: "Scalable solutions for online stores and retail management systems.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Professional Services",
    description: "Business automation and workflow optimization for service providers.",
  },
  {
    icon: <Factory size={32} />,
    title: "Manufacturing",
    description: "Industrial automation and supply chain management solutions.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Industries We Serve"
          subtitle="We deliver tailored technology solutions across diverse sectors, helping businesses innovate and grow."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-lg w-fit">
                <div className="text-primary-600">
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
              <p className="text-navy-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;