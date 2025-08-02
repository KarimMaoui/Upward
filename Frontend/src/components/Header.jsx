// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigation = [
//     // { name: "Home", href: "/" },
//     { name: "B2B Services", href: "/services-b2b" },
//     { name: "B2C Services", href: "/services-b2c" },
//     { name: "Our Tutors", href: "/tutors" },
//     { name: "How It Works", href: "/how-it-works" },
//     { name: "Free Resources", href: "/blog" },
//     { name: "CSV Page", href: "/terms" },
//   ];

//   return (
//     <header className="bg-white shadow-sm border-b border-gray-200">
//       <div className="container-max">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <span className="text-2xl font-bold text-black">Upward</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <Link to="/about" className="btn-primary">
//               Contact
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-200">
//             <nav className="flex flex-col space-y-4">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link
//                 to="/book-session"
//                 className="btn-primary inline-block text-center"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Book a Session
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "B2B Services", href: "/services-b2b" },
    { name: "B2C Services", href: "/services-b2c" },
    { name: "Our Tutors", href: "/tutors" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Free Resources", href: "/blog" },
    { name: "CSV Page", href: "/terms" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
              Upward
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm lg:text-base text-gray-700 hover:text-black font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/about"
              className="inline-block px-4 py-2 bg-black text-white rounded-md hover:bg-grey-800 text-sm md:text-base transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-black font-medium text-base transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/book-session"
                className="inline-block bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Session
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
