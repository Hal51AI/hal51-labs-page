import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import vinayImg from '../assets/vinay.webp';
import sangImg from '../assets/sang.webp';
import vikranthImg from '../assets/vikranth.webp';

const team = [
  {
    name: 'Vinay Prabhu',
    role: 'Chief Executive Officer',
    education: 'PhD ECE - Carnegie Mellon University | MSEE - IIT Madras',
    image: vinayImg,
    bio: [
      'AI/ML generalist',
      'Previously Employee #1 and Chief Scientist at UnifyID AI Labs (Raised $23.5M, Exit in 2021)',
      '2020 VentureBeat Computer Vision Innovation of the Year award winner',
      'Two Best Paper awards (DLSW-17, EACL-ANLP-21)'
    ]
  },
  {
    name: 'Sang Han',
    role: 'Chief Technology Officer',
    education: 'BSc - University of California: San Diego',
    image: sangImg,
    bio: [
      'Programmer / Machine Learning Engineer',
      'Fall 2019 UnifyID Research Fellowship Organizer',
      'DARPA Memex collaborator in Data Science',
      'Open Source contributor'
    ]
  },
  {
    name: 'Vikranth Kumar Shivaa',
    role: 'Chief Mobile Officer',
    education: 'MS CS - University of New Haven',
    image: vikranthImg,
    bio: [
      'Full Stack AI Engineering',
      'Previously Co-Founder & CTO at Nooble (Venture-backed)',
      'Early at FamPay (YC & Sequoia-backed), KonnectShift'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const About = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 sm:text-5xl">
                Our Team
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                The minds behind Hal51 AI Labs
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid gap-12 lg:grid-cols-3 sm:grid-cols-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {team.map((member) => (
              <motion.div 
                key={member.name} 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px -10px rgba(34, 211, 238, 0.2)",
                  borderColor: "rgba(34, 211, 238, 0.3)" 
                }}
                className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-colors duration-300"
              >
                <div className="relative w-48 h-48 mb-6 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <img 
                    className="relative w-full h-full object-cover rounded-full shadow-xl ring-2 ring-white/10" 
                    src={member.image} 
                    alt={member.name} 
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-6">{member.education}</p>
                <ul className="text-gray-300 text-left space-y-3 text-sm max-w-xs mx-auto">
                  {member.bio.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-cyan-500 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
