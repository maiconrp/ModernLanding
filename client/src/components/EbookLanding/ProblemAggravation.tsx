import { FaTimesCircle } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";

export default function ProblemAggravation() {
  return (
    <section id="problem-aggravation" className="py-20 relative bg-gradient-to-b from-[#101010] to-[#101010]/70">
      <div className="container mx-auto px-4">
        <SectionHeader>
          O <span className="text-[#C5A167]">Descontrole Financeiro</span> Custa Caro: <span className="block mt-2">Sua Paz, Seus Sonhos, Sua Qualidade de Vida.</span>
        </SectionHeader>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Problem description */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed">
              Viver sem saber <span className="italic">"o que se faz na gestão financeira"</span> ou <span className="italic">"como ter um controle financeiro pessoal"</span> é mais do que apenas não ter dinheiro sobrando. É a ansiedade que aperta o peito a cada boleto. São as noites mal dormidas pensando em <span className="italic">"como colocar as contas em dia"</span>.
            </p>
            
            <p className="text-lg leading-relaxed">
              É sentir que você está apenas sobrevivendo, não vivendo. É ver seus sonhos de <span className="italic">"mudar de vida financeira"</span> cada vez mais distantes porque você não sabe <span className="italic">"como fazer um plano financeiro pessoal"</span>.
            </p>
            
            <div className="glass p-6 rounded-xl">
              <p className="text-lg font-semibold text-[#C5A167]">O custo real vai muito além do financeiro:</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="text-[#C5A167] mr-3 mt-1"><FaTimesCircle /></span>
                  <span>Relacionamentos deteriorados por discussões sobre dinheiro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C5A167] mr-3 mt-1"><FaTimesCircle /></span>
                  <span>Saúde mental comprometida pela preocupação constante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C5A167] mr-3 mt-1"><FaTimesCircle /></span>
                  <span>Oportunidades perdidas por falta de recursos ou planejamento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C5A167] mr-3 mt-1"><FaTimesCircle /></span>
                  <span>Autoestima minada pela sensação de fracasso</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="w-full lg:w-1/2">
            {/* A person showing signs of financial stress and anxiety */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1E2B4F] to-[#C5A167] opacity-20 blur-xl rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pessoa enfrentando estresse financeiro" 
                className="w-full h-auto rounded-xl shadow-xl relative z-10"
              />
            </div>
            
            <p className="mt-6 text-center text-lg italic text-[#F5F5F5]/80">
              "Sentir que está perdendo o controle da sua vida financeira é uma das experiências mais angustiantes do mundo moderno."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
