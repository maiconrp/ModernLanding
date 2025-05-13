import { FaCheckCircle, FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-b from-[#101010]/90 to-[#101010] relative">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -bottom-16 right-0 w-96 h-96 bg-[#C5A167] rounded-full blur-3xl"></div>
        <div className="absolute -top-16 left-0 w-96 h-96 bg-[#1E2B4F] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat'] mb-8">
            <span className="text-[#C5A167]">Uma escolha</span> pela sua tranquilidade: <span className="block mt-2">Dar o próximo passo em direção a uma <span className="text-[#C5A167]">nova relação</span> com suas finanças</span>
          </h2>
          
          <p className="text-xl mb-8">
            Cada momento é uma oportunidade para começarmos uma nova história com nosso dinheiro. <span className="text-[#C5A167] font-bold">Você merece viver com mais clareza e menos preocupação</span> sobre suas finanças.
          </p>
          
          {/* Ebook cover and price */}
          <div className="glass rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                {/* Another angle of the ebook mockup */}
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ebook Domine Suas Finanças" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold font-['Montserrat'] mb-4">Ebook Domine Suas Finanças</h3>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#C5A167] mr-3 mt-1"><FaCheckCircle /></span>
                    <span>6 módulos desenvolvidos para acompanhar sua jornada financeira</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C5A167] mr-3 mt-1"><FaCheckCircle /></span>
                    <span>3 ferramentas complementares (Planilha personalizada, Mini-Curso e Checklist diário)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C5A167] mr-3 mt-1"><FaCheckCircle /></span>
                    <span>Disponível para você começar imediatamente após a confirmação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C5A167] mr-3 mt-1"><FaCheckCircle /></span>
                    <span>30 dias para experimentar com tranquilidade nossa abordagem</span>
                  </li>
                </ul>
                
                <div>
                  <p className="text-lg">De <span className="line-through">R$398</span> por apenas:</p>
                  <p className="text-3xl font-bold text-[#C5A167] mb-4">R$97</p>
                  <p className="text-sm text-[#F5F5F5]/70">Pagamento único e seguro</p>
                </div>
              </div>
            </div>
          </div>
          
          <Button className="pulse px-10 py-5 bg-[#C5A167] text-[#101010] rounded-lg font-bold uppercase tracking-wider transition transform hover:scale-105 hover:shadow-xl inline-block text-xl">
            QUERO COMEÇAR MINHA JORNADA DE TRANSFORMAÇÃO!
          </Button>
          
          <p className="mt-6 text-[#F5F5F5]/70 flex items-center justify-center">
            <FaLock className="mr-2" />
            Pagamento 100% seguro e criptografado
          </p>
        </div>
      </div>
    </section>
  );
}
