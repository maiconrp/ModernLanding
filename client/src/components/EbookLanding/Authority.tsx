import { FaCertificate, FaInstagram } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";

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
 Idealize Gestão: Nossa paixão é ver você prosperar.
              </h3>
              
              <p className="text-lg leading-relaxed mb-6">
 Olá! Somos a Idealize Gestão, e nossa jornada começou com a paixão de transformar a relação das pessoas com o dinheiro. Fundada por Breno Baleeiro, com mais de 8 anos de experiência, dedicamos nosso trabalho a descomplicar as finanças e mostrar que é possível ter uma vida financeira mais leve e próspera.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
 Já tivemos o privilégio de caminhar ao lado de mais de 1.500 pessoas e empresas, ajudando-as a sair do sufoco, organizar as contas e construir um futuro mais tranquilo. Nossa maior alegria é ver a transformação acontecendo na prática, dia após dia.
              </p>
              
              <p className="text-lg leading-relaxed">
 Acreditamos que sua história com o dinheiro é única. Por isso, nossa abordagem vai além dos números: oferecemos um acompanhamento personalizado, com soluções que realmente se encaixam na sua vida. Queremos te apoiar em cada passo, transformando desafios em oportunidades de crescimento, porque para a Idealize, transformar ideias em realidade é a nossa expertise e a nossa paixão.
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
