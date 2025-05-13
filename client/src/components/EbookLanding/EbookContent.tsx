import { FaAngleRight } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export default function EbookContent() {
  // Module content data structure
  const modules = [
    {
      number: 1,
      title: "Entendendo o Caos – O Diagnóstico da Sua Vida Financeira",
      description: "Vamos explorar juntos o que realmente importa na gestão financeira pessoal e como isso se aplica à sua realidade.",
      topics: [
        "Mapeamento completo da sua situação atual",
        "Identificação de padrões de comportamento financeiro",
        "Ferramentas de diagnóstico simplificadas"
      ]
    },
    {
      number: 2,
      title: "Seu Orçamento à Prova de Falhas",
      description: "Descubra maneiras de distribuir seu dinheiro que funcionem para você e como criar um plano financeiro personalizado que seja prazeroso de seguir.",
      topics: [
        "Desvendando o método 50/30/20 de forma prática",
        "Criando um orçamento flexível e realista",
        "Ferramentas simples para acompanhamento diário"
      ]
    },
    {
      number: 3,
      title: "Operação Contas em Dia (O Fim das Dívidas e da Angústia)",
      description: "Abordagens gentis e eficazes para reorganizar suas dívidas e estratégias práticas para trazer mais tranquilidade ao lidar com suas contas.",
      topics: [
        "Técnicas de negociação de dívidas que funcionam",
        "Métodos de priorização de pagamentos (bola de neve vs. avalanche)",
        "Como evitar recair no ciclo de endividamento"
      ]
    },
    {
      number: 4,
      title: "Blindagem Financeira (Construindo Sua Reserva e Tranquilidade)",
      description: "Como construir bases sólidas para uma relação mais tranquila e segura com suas finanças a longo prazo.",
      topics: [
        "Como construir uma reserva de emergência efetiva",
        "Estratégias de proteção contra imprevistos",
        "Planejamento para objetivos de curto e médio prazo"
      ]
    },
    {
      number: 5,
      title: "Os Segredos de Quem Faz o Dinheiro Sobrar (e Investe!)",
      description: "Os conceitos essenciais para iniciar sua jornada no mundo dos investimentos de maneira confortável e alinhada com seus objetivos pessoais.",
      topics: [
        "Fundamentos básicos de investimentos para iniciantes",
        "Como avaliar seu perfil de investidor",
        "Por onde começar sem complexidades"
      ]
    },
    {
      number: 6,
      title: "Os Pilares da Educação Financeira na Prática",
      description: "Entenda os '5 pilares da educação financeira' e os '4 pilares da gestão financeira' de forma simples.",
      topics: [
        "Hábitos diários que transformam sua relação com dinheiro",
        "Como manter-se motivado em sua jornada financeira",
        "Criando seu legado financeiro para o futuro"
      ]
    }
  ];

  return (
    <section id="ebook-content" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader>
          Por Dentro do Guia <span className="text-[#C5A167]">'Domine Suas Finanças'</span>: <span className="block mt-2">As Respostas Práticas Que Você Precisa Para Cada Desafio</span>
        </SectionHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* First row of modules */}
          <div className="space-y-8">
            {modules.slice(0, 2).map((module) => (
              <ModuleCard key={module.number} module={module} />
            ))}
          </div>
          
          {/* Second row of modules */}
          <div className="space-y-8">
            {modules.slice(2, 4).map((module) => (
              <ModuleCard key={module.number} module={module} />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Third row of modules */}
          {modules.slice(4, 6).map((module) => (
            <ModuleCard key={module.number} module={module} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="pulse cta-primary">
            QUERO COMEÇAR MINHA TRANSFORMAÇÃO FINANCEIRA!
          </Button>
        </div>
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
    topics: string[];
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
          <h3 className="text-xl font-bold font-['Montserrat'] mb-2">{module.title}</h3>
          <p className="text-[#F5F5F5]/80">
            {module.description}
          </p>
          
          <ul className="mt-4 space-y-2">
            {module.topics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#C5A167] mr-2 mt-1"><FaAngleRight /></span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
