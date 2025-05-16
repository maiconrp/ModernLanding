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
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4 text-[#C5A167]">SENSAÇÃO DE CONFUSÃO?</h3>
            <p className="text-[#F5F5F5]/90 flex-grow">
              Sabe quando você pensa em finanças e já dá aquele nó na cabeça? É super comum se sentir perdido com tanta informação e conselho por aí. A gente entende como é difícil saber por onde começar e o que realmente funciona para o seu dinheiro.
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
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4 text-[#C5A167]">DESAFIO COM AS CONTAS?</h3>
            <p className="text-[#F5F5F5]/90 flex-grow">
              Aquela preocupação com as contas que não saem da cabeça, especialmente na hora de dormir... É frustrante se sentir preso em um ciclo de dívidas e se perguntar se é mesmo possível colocar a vida financeira nos trilhos, mesmo "no vermelho".
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
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4 text-[#C5A167]">TENTATIVAS QUE NÃO DERAM CERTO?</h3>
            <p className="text-[#F5F5F5]/90 flex-grow">
              Você já tentou organizar suas finanças com planilhas, regras e métodos, mas sentiu que nada se encaixava na sua vida? É desanimador investir tempo e energia e não ver os resultados, ou perceber que a teoria parece distante da sua rotina.
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
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4 text-[#C5A167]">BUSCANDO UM CAMINHO PRÁTICO?</h3>
            <p className="text-[#F5F5F5]/90 flex-grow">
              Com tantas opções e informações, é natural se perguntar: qual o jeito mais simples e eficaz de organizar meu dinheiro? Como fazer o salário render e ainda sobrar? E como começar a cuidar das finanças sem precisar virar especialista? A gente sabe que a busca por respostas claras e práticas pode ser cansativa.
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
                Se você se identificou com o que leu, queremos te dizer algo importante: existe sim um jeito mais leve e claro de lidar com tudo isso! Um caminho acessível que faz sentido para a sua realidade, e a gente tá aqui pra te mostrar, passo a passo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
