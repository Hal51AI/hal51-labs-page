const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; {new Date().getFullYear()} Hal51 AI Labs. All rights reserved.</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Education • AI Safety • Alignment</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
