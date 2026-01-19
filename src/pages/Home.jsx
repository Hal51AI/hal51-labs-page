import Layout from '../components/Layout';
import lemurboxImg from '../assets/lemurbox.webp';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-7xl tracking-tight">
            <span className="block text-white">Education Centric</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              AI Safety
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building the future of safe, aligned AI tools to empower education and benefit mankind.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              From Hardware to Safety
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              We are an education startup created by AI researchers. We started by building the LemurBox, a DIY kit for Peppers Ghost holograms, to help revolutionize education.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  className="relative rounded-lg shadow-2xl w-full object-cover ring-1 ring-white/10" 
                  src={lemurboxImg} 
                  alt="LemurBox Hologram Kit" 
                />
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">The Pivot to Safety</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Through our journey with LemurBox, we realized that one of the biggest challenges—and opportunities—in educational AI was data integrity and safety.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
                  <p className="text-lg text-gray-400 leading-relaxed">
                    We established Hal51 AI Labs to focus deeply on AI safety and alignment. Our goal is to guarantee that as AI becomes a central tool in education, it remains safe, reliable, and beneficial for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
