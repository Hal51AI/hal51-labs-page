import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-950/50 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">Hal51 AI Labs</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              About
            </Link>
            <Link 
              to="/research" 
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Research
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
