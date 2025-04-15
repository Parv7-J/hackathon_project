import Link from "next/link";

function HomeNavigation() {
  return (
    <nav>
      <ul className="flex gap-8 md:gap-16 items-center">
        <li>
          <Link
            href="/about"
            className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <Link
          href="/services"
          className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-300 relative group"
        >
          Our Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <li>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            href="/sign-in"
            className="bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-600 hover:text-white px-5 py-2 rounded-md font-medium transition-colors duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HomeNavigation;
