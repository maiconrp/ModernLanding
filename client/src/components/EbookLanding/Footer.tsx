import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 relative bg-[#101010] border-t border-[#F5F5F5]/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold font-['Montserrat'] text-[#C5A167] mb-2">
              <span className="text-[#F5F5F5]">Idealize</span> Gestão
            </div>
            <p className="text-[#F5F5F5]/70">
              Transformando finanças, transformando vidas.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
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
            <a 
              href="#" 
              className="text-[#F5F5F5] hover:text-[#C5A167] transition duration-300"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#F5F5F5]/10 text-center text-[#F5F5F5]/50 text-sm">
          <p>© {new Date().getFullYear()} Idealize Gestão. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-[#C5A167] transition duration-300">Termos de Uso</a>
            <a href="#" className="hover:text-[#C5A167] transition duration-300">Política de Privacidade</a>
            <a href="mailto:contato@idealizegestao.com.br" className="hover:text-[#C5A167] transition duration-300">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
