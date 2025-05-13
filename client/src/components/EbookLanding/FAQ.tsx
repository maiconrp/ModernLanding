import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      question: "Preciso ter conhecimento prévio em finanças?",
      answer: "Não! O ebook foi escrito especialmente para quem está começando. Explicamos todos os conceitos financeiros de forma simples e direta, sem jargões complicados. Você vai evoluir do básico ao avançado de forma gradual e natural."
    },
    {
      question: "Em quanto tempo verei resultados?",
      answer: "A maioria dos nossos leitores relata uma melhora significativa na organização financeira já nos primeiros 30 dias. Para resultados como quitação de dívidas e criação de reserva de emergência, o tempo varia conforme sua situação atual, mas nosso método acelera esse processo consideravelmente."
    },
    {
      question: "Funciona para qualquer faixa de renda?",
      answer: "Sim! Nosso método é adaptável para qualquer realidade financeira. Temos exemplos de sucesso desde pessoas que ganham um salário mínimo até profissionais com alta renda. O segredo está na aplicação dos princípios, independentemente do valor absoluto."
    },
    {
      question: "Como recebo o ebook e os bônus?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com os links para baixar o ebook em formato PDF e acessar todos os bônus. O material pode ser lido em qualquer dispositivo: computador, tablet ou celular."
    },
    {
      question: "Tem garantia de satisfação?",
      answer: "Absolutamente! Oferecemos garantia de 30 dias. Se você seguir o método e não ficar satisfeito com os resultados, devolvemos 100% do seu investimento, sem perguntas."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader>
          Perguntas <span className="text-[#C5A167]">Frequentes</span>
        </SectionHeader>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass rounded-xl overflow-hidden mb-4 border-none">
                <AccordionTrigger className="px-6 py-4 text-xl font-semibold font-['Montserrat'] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-[#F5F5F5]/90">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
