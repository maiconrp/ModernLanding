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
      answer: "Não se preocupe com isso! Criamos o ebook pensando justamente em quem está começando e quer descomplicar. Explicamos tudo de forma super simples e direta, sem enrolação ou palavras difíceis. Você vai pegar o jeito no seu tempo, evoluindo do básico até se sentir mais confiante."
    },
    {
      question: "Em quanto tempo verei resultados?",
      answer: "Olha, a gente vê a maioria das pessoas sentindo uma boa diferença na organização logo no primeiro mês! Pra resultados maiores, como quitar dívidas ou montar sua reserva, o tempo varia pra cada um. Mas pode ter certeza: nosso método foi feito pra te ajudar a chegar lá mais rápido e com mais segurança."
    },
    {
      question: "Funciona para qualquer faixa de renda?",
      answer: "Sim, com certeza! A beleza do nosso método é que ele se adapta à sua realidade, não importa quanto você ganha. O que realmente faz a diferença é aplicar os princípios que ensinamos. Já vimos histórias de sucesso com os mais diversos orçamentos, e a sua pode ser a próxima!"
    },
    {
      question: "Como recebo o ebook e os bônus?",
      answer: "Assim que o pagamento for confirmado (geralmente na hora!), você vai receber um e-mail especial nosso. Nele, terão os links pra baixar o ebook em PDF e acessar na mesma hora todos os bônus incríveis que preparamos. Dá pra ler e usar em qualquer lugar: no seu computador, tablet ou celular. Facinho, facinho!"
    },
    {
      question: "Tem garantia de satisfação?",
      answer: "Completamente! Temos tanta confiança no nosso método que te damos 30 dias pra experimentar. Se você seguir o passo a passo direitinho e sentir que não era bem o que esperava, a gente devolve 100% do seu investimento, sem letrinhas miúdas ou perguntas chatas. Risco zero pra você!"
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
