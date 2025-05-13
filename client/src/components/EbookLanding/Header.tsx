import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="relative w-full h-auto overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#1E2B4F] opacity-10 transform -rotate-45 scale-150"></div>
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[#C5A167] opacity-5 transform rotate-45 scale-150"></div>
      </div>
      
      {/* Logo area */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="text-2xl font-bold font-['Montserrat'] text-[#C5A167]">
          <span className="text-[#F5F5F5]">Idealize</span> Gestão
        </div>
        
        {/* Social media */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://instagram.com/idealize.adm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F5F5F5] hover:text-[#C5A167] transition duration-300"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a 
            href="#" 
            className="text-[#F5F5F5] hover:text-[#C5A167] transition duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
}
