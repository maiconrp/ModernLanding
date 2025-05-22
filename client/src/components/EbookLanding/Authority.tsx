import { FaCertificate, FaInstagram } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";
import FotoBreno from '@/assets/images/capa zap (2).jpg';

export default function Authority() {
  return (
    <section id="authority" className="py-20 relative">
      <div className="container mx-auto px-8 relative z-10">
        <SectionHeader>
          Quem Está Por Trás Deste <span className="text-[#C5A167]">Método Transformador</span>?
        </SectionHeader>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* About image */}
          <div className="w-full lg:w-1/3">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1E2B4F] to-[#C5A167] opacity-20 blur-lg rounded-full"></div>
              {/* Professional image of financial consultant or company founder */}
              <img 
                src={FotoBreno}
                alt="Equipe Idealize Gestão" 
                className="w-full h-auto rounded-full aspect-square object-cover border-4 border-[#C5A167]/30 relative z-10"
              />
            </div>
          </div>
          
          {/* About content */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold font-['Montserrat'] mb-6 flex items-center">
                <span className="text-[#C5A167] mr-3">
 <FaCertificate />
                </span>
 Idealize Gestão: Nossa paixão é ver você prosperar.
              </h3>
              
              <p className="text-lg leading-relaxed mb-6">
                Olá! Somos a Idealize Gestão, fundada por Breno Baleeiro. Com mais de 8 anos de experiência, nossa paixão é descomplicar finanças para uma vida mais leve e próspera.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Ajudamos mais de 1.500 pessoas e empresas a organizar contas e construir um futuro tranquilo. Vemos a transformação acontecer diariamente.
              </p>

              <p className="text-lg leading-relaxed">
                Sua história financeira é única. Oferecemos acompanhamento personalizado com soluções que se encaixam na sua vida, transformando desafios em crescimento. Para a Idealize, realizar ideias é nossa expertise e paixão.
              </p>
              
              <div className="mt-6 flex items-center">
                <a 
                  href="https://instagram.com/idealize.adm" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#C5A167] hover:underline"
                >
                  <FaInstagram className="mr-2" />
                  @idealize.adm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
