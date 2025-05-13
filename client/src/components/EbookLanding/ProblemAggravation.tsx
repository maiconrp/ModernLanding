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
              Quando ainda não encontramos nosso caminho na gestão financeira, as consequências vão muito além de não ter uma reserva no fim do mês. É aquela sensação de aperto no peito quando chega uma notificação de cobrança. São aquelas noites inquietas onde os pensamentos sobre contas não nos deixam descansar.
            </p>
            
            <p className="text-lg leading-relaxed">
              É a impressão de que estamos apenas reagindo à vida, não vivendo-a plenamente. É ver nossos sonhos de construir uma vida financeira mais tranquila ficando cada vez mais distantes porque parece difícil encontrar um plano financeiro que realmente funcione para nossa realidade.
            </p>
            
            <div className="glass p-6 rounded-xl">
              <p className="text-lg font-semibold text-[#C5A167]">O impacto vai além dos números na conta:</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="text-[#C5A167] mr-3 mt-1"><FaTimesCircle /></span>
                  <span>Momentos preciosos com família e amigos afetados por tensões sobre finanças</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C5A167] mr-3 mt-1"><FaTimesCircle /></span>
                  <span>Bem-estar emocional comprometido por preocupações recorrentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C5A167] mr-3 mt-1"><FaTimesCircle /></span>
                  <span>Chances de crescimento que passam despercebidas quando estamos em modo de sobrevivência</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C5A167] mr-3 mt-1"><FaTimesCircle /></span>
                  <span>Confiança em si mesmo enfraquecida pelos ciclos de tentativa e erro</span>
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
              "Quando nos sentimos desconectados das nossas finanças, é como se uma nuvem de preocupação nos acompanhasse por onde quer que vamos. Porém, com os passos certos, essa sensação pode dar lugar a uma clareza revigorante."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
