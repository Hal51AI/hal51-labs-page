const Footer = () => {
  return (
    <footer className="bg-gray-950/50 backdrop-blur-md border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-medium">&copy; {new Date().getFullYear()} Hal51 AI Labs. All rights reserved.</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-mono tracking-wider">EDUCATION • AI SAFETY • ALIGNMENT</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
