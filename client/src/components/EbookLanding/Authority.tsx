import { FaCertificate, FaInstagram } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";

export default function Authority() {
  return (
    <section id="authority" className="py-20 relative">
      <div className="container mx-auto px-4">
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
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                Idealize Gestão
              </h3>
              
              <p className="text-lg leading-relaxed mb-6">
                Com mais de 8 anos de experiência em consultoria financeira, a Idealize Gestão se destacou no mercado por transformar conceitos complexos de gestão financeira em estratégias práticas e acessíveis.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nossa equipe de especialistas em finanças pessoais e empresariais já ajudou mais de 1.500 pessoas a saírem do vermelho e construírem uma vida financeira sólida e próspera.
              </p>
              
              <p className="text-lg leading-relaxed">
                Através de nossa metodologia exclusiva, combinamos educação financeira com ferramentas práticas que se adaptam à realidade de cada pessoa – porque acreditamos que todos merecem ter controle sobre seu dinheiro, independentemente de quanto ganham.
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
