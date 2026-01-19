import Layout from '../components/Layout';
import lemurboxImg from '../assets/lemurbox.webp';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Education Centric AI Safety
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future of safe, aligned AI tools to empower education and benefit mankind.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From Hardware to Safety
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are an education startup created by AI researchers. We started by building the LemurBox, a DIY kit for Peppers Ghost holograms, to help revolutionize education.
            </p>
          </div>

          <div className="mt-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img 
                  className="rounded-lg shadow-xl w-full object-cover" 
                  src={lemurboxImg} 
                  alt="LemurBox Hologram Kit" 
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">The Pivot to Safety</h3>
                <p className="text-lg text-gray-500">
                  Through our journey with LemurBox, we realized that one of the biggest challenges—and opportunities—in educational AI was data integrity and safety.
                </p>
                <p className="text-lg text-gray-500">
                  We established Hal51 AI Labs to focus deeply on AI safety and alignment. Our goal is to guarantee that as AI becomes a central tool in education, it remains safe, reliable, and beneficial for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
