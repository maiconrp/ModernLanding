import { FaQuestionCircle, FaChartLine, FaRedoAlt, FaCompass, FaLightbulb } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#1E2B4F]/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader>
          <span className="text-[#C5A167]">Sua Rotina</span> é Dominada por Essas{" "}
          <span className="text-[#C5A167]">Perguntas e Angústias</span> Financeiras?
        </SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pain point card 1 */}
          <div className="glass rounded-xl p-6 shadow-glass transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
            <div className="text-4xl text-[#C5A167] mb-4">
              <FaQuestionCircle />
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4 text-[#C5A167]">CONFUSÃO TOTAL?</h3>
            <p className="text-[#F5F5F5]/90 flex-grow">
              Você se pergunta <span className="italic">"O que é essa tal de gestão financeira pessoal? O que preciso estudar pra entender meu dinheiro?"</span> e a paralisia da incerteza te domina?
            </p>
            
            {/* A person looking confused while staring at financial documents */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pessoa confusa com finanças" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          
          {/* Pain point card 2 */}
          <div className="glass rounded-xl p-6 shadow-glass transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
            <div className="text-4xl text-[#C5A167] mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4 text-[#C5A167]">SEMPRE NO VERMELHO?</h3>
            <p className="text-[#F5F5F5]/90 flex-grow">
              A pergunta <span className="italic">"Como colocar as contas em dia?"</span> se repete como um pesadelo, e <span className="italic">"Como organizar minhas dívidas se já estou no vermelho?"</span> parece uma missão impossível?
            </p>
            
            {/* A person looking stressed while checking finances on laptop */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pessoa estressada verificando finanças" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          
          {/* Pain point card 3 */}
          <div className="glass rounded-xl p-6 shadow-glass transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
            <div className="text-4xl text-[#C5A167] mb-4">
              <FaRedoAlt />
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4 text-[#C5A167]">TENTATIVAS FRUSTRADAS?</h3>
            <p className="text-[#F5F5F5]/90 flex-grow">
              Você já pensou <span className="italic">"Preciso ter controle financeiro pessoal!"</span> ou tentou planilhas, ouviu sobre a <span className="italic">"regra 50/30/20"</span>, mas NADA parece funcionar na sua vida real?
            </p>
            
            {/* A person looking frustrated with financial paperwork */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pessoa frustrada com papelada financeira" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pain point card 4 */}
          <div className="glass rounded-xl p-6 shadow-glass transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
            <div className="text-4xl text-[#C5A167] mb-4">
              <FaCompass />
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4 text-[#C5A167]">PERDIDO(A) EM "COMO FAZER?"</h3>
            <p className="text-[#F5F5F5]/90 flex-grow">
              Sua mente ferve com <span className="italic">"Como faço um plano financeiro?"</span>, <span className="italic">"Como divido meu salário pra sobrar dinheiro?"</span>, <span className="italic">"Como consigo estudar finanças sozinho sem gastar uma fortuna?"</span> – e as respostas parecem complexas demais?
            </p>
            
            {/* A person looking overwhelmed with financial planning */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pessoa sobrecarregada com planejamento financeiro" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          
          {/* Reassurance message */}
          <div className="glass-gold rounded-xl p-8 shadow-glass flex items-center">
            <div>
              <div className="text-6xl text-[#C5A167] mb-6">
                <FaLightbulb />
              </div>
              <p className="text-xl md:text-2xl font-semibold font-['Nunito']">
                Se cada uma dessas dúvidas reflete o caos que você sente, <span className="uppercase text-[#C5A167] font-bold">SAIBA</span>: Isso tem solução, e ela é mais simples do que você imagina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
