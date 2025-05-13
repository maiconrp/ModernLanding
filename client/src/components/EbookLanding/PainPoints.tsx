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
              Às vezes, só de ouvir falar sobre gestão financeira pessoal já dá um nó na cabeça, não é? Entendemos como é difícil buscar informações sobre o que realmente precisamos saber sobre nosso dinheiro e acabar se sentindo ainda mais perdido com tantas opções e conselhos por aí.
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
              Aquela preocupação sobre como finalmente colocar as contas em dia que aparece bem na hora de dormir... Sabemos como é frustrante. E quando nos perguntamos se é possível organizar nossas dívidas mesmo estando no vermelho, a tarefa parece ainda mais desafiadora.
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
              Já teve aquele momento de determinação em que você decidiu organizar suas finanças de uma vez por todas? Talvez até tenha começado planilhas ou tentado aplicar a regra 50/30/20, mas sentiu que esses métodos não se encaixavam perfeitamente na sua rotina?
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
              É natural ficar com a cabeça cheia de questões sobre qual seria o melhor caminho para criar um plano financeiro efetivo, como distribuir o salário para ter uma sobra no fim do mês ou como aprender sobre finanças sem grandes investimentos. E às vezes parece que as respostas são mais complicadas do que deveriam ser, não é?
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
                Se você se identificou com essas situações, queremos que você <span className="uppercase text-[#C5A167] font-bold">SAIBA</span>: Existe um caminho mais claro e acessível do que você imagina, e estamos aqui para percorrê-lo com você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
