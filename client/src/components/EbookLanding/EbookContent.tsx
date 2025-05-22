import { FaAngleRight } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

// Module content data structure
const modules = [
  {
    number: 1,
    title: '<span class="text-[#C5A167]">Módulo 1:</span> Onde você está? Seu mapa financeiro sem complicação',
    description: "Comece sua jornada descobrindo seu ponto de partida. Vamos te ajudar a mapear suas receitas, despesas, dívidas e patrimônio de um jeito simples, pra você ter a clareza que precisa."
  },
  {
    number: 2,
    title: '<span class="text-[#C5A167]">Módulo 2:</span> Seu orçamento na vida real: Um plano que funciona pra você',
    description: "Chega de orçamento engessado! Aprenda a distribuir seu dinheiro de forma inteligente com a regra 50-30-20 adaptada pra sua realidade, criando um plano que te dê liberdade e tranquilidade."
  },
  {
    number: 3,
    title: '<span class="text-[#C5A167]">Módulo 3:</span> Diga adeus às dívidas: O caminho leve para quitar o que te tira o sono',
    description: "Eliminar dívidas parece impossível? A gente te mostra o passo a passo pra listar tudo, negociar com confiança e priorizar os pagamentos pra você respirar aliviado e retomar o controle."
  },
  {
    number: 4,
    title: '<span class="text-[#C5A167]">Módulo 4:</span> Seu escudo financeiro: Construindo a reserva que te dá paz',
    description: "Crie sua rede de segurança! Descubra por que a poupança não é a melhor opção e onde guardar sua reserva de emergência para ter a tranquilidade de que imprevistos não vão te derrubar."
  },
  {
    number: 5,
    title: '<span class="text-[#C5A167]">Módulo 5:</span> Dinheiro trabalhando pra você: Seus primeiros passos nos investimentos',
    description: "Deixe o medo de lado! Entenda os conceitos básicos de investimento de um jeito simples, descubra seu perfil e saiba por onde começar a multiplicar seu dinheiro sem complicação."
  },
  {
    number: 6,
    title: '<span class="text-[#C5A167]">Módulo 6:</span> Sua vida financeira a longo prazo: Construindo um futuro tranquilo',
    description: "Vá além do básico! Descubra hábitos poderosos pra manter suas finanças saudáveis a longo prazo, revise seu planejamento e construa o futuro próspero que você sempre quis."
  }
];

export default function EbookContent() {
  return (
    <section id="ebook-content" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader>
          Por Dentro do Guia <span className="text-[#C5A167]">'Domine Suas Finanças'</span>: <span className="block mt-2">As Respostas Práticas Que Você Precisa Para Cada Desafio</span>
        </SectionHeader>
        
        {/* Simplified grid for modules - Tailwind handles the flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {modules.map((module) => (
            <ModuleCard key={module.number} module={module} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="pulse cta-primary w-full sm:w-auto mx-auto whitespace-normal break-words py-5">
            QUERO COMEÇAR MINHA TRANSFORMAÇÃO FINANCEIRA!
          </Button>
        </div>
        
        {/* List of module titles */}
      </div>
    </section>
  );
}

// Module Card Component
interface ModuleProps {
  module: {
    number: number;
    title: string;
    description: string;
  };
}

function ModuleCard({ module }: ModuleProps) {
  return (
    <div className="glass rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-[#1E2B4F] rounded-full w-12 h-12 flex items-center justify-center shrink-0">
          <span className="text-[#F5F5F5] font-bold">{module.number}</span>
        </div>
        
        <div>
          {/* Use dangerouslySetInnerHTML for the title as it contains HTML */}
          <h3 
            className="text-xl font-bold font-['Montserrat'] mb-2"
            dangerouslySetInnerHTML={{ __html: module.title }}
          />
          <p className="text-[#F5F5F5]/80">
            {module.description}
          </p>
        </div>
      </div>
    </div>
  );
}