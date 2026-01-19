import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import lemurboxImg from '../assets/lemurbox.webp';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-7xl tracking-tight">
              <span className="block text-white">Education Centric</span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                AI Safety
              </motion.span>
            </h1>
            <motion.p 
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Building the future of safe, aligned AI tools to empower education and benefit mankind.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="lg:text-center mb-16">
            <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              From Hardware to Safety
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              We are an education startup created by AI researchers. We started by building the LemurBox, a DIY kit for Peppers Ghost holograms, to help revolutionize education.
            </p>
          </FadeIn>

          <div className="mt-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <FadeIn className="lg:w-1/2 relative group" delay={0.2}>
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <motion.img 
                  className="relative rounded-lg shadow-2xl w-full object-cover ring-1 ring-white/10" 
                  src={lemurboxImg} 
                  alt="LemurBox Hologram Kit"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </FadeIn>
              
              <div className="lg:w-1/2 space-y-8">
                <FadeIn delay={0.4}>
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">The Pivot to Safety</h3>
                    <p className="text-lg text-gray-400 leading-relaxed mb-4">
                      What began as a hardware project to bring holograms to the classroom evolved into a frontier for AI research. By integrating Large Language Models into our rigged 3D avatars, we created interactive educational companions within the LemurBox.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      However, the challenge of deploying these autonomous agents in schools revealed a critical truth: the gap between AI capability and safety is vast. Our hands-on experience in guard-railing these avatars provided us with a unique, practical perspective on AI alignment—insights that can only be gained from the real-world collision of advanced AI and human curiosity.
                    </p>
                  </motion.div>
                </FadeIn>
                
                <FadeIn delay={0.6}>
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg text-gray-400 leading-relaxed">
                      We established Hal51 AI Labs to focus deeply on AI safety and alignment. Our goal is to guarantee that as AI becomes a central tool in education, it remains safe, reliable, and beneficial for everyone.
                    </p>
                  </motion.div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
