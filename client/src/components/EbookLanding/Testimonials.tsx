import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";

export default function Testimonials() {
  const testimonials = [
    {
      content: "Eu sempre achei que controle financeiro era só para quem ganhava muito. Depois do ebook 'Domine Suas Finanças', percebi que estava completamente enganada. Em 3 meses, saí do vermelho e comecei minha reserva de emergência, mesmo com um salário bem modesto.",
      author: "Amanda S.",
      occupation: "Professora, 32 anos",
      rating: 5
    },
    {
      content: "A planilha de orçamento que veio como bônus com o ebook foi um divisor de águas para mim. Finalmente entendi para onde ia meu dinheiro e consegui quitar todas as minhas dívidas em 6 meses. A sensação de liberdade é indescritível!",
      author: "Marcelo R.",
      occupation: "Analista de TI, 29 anos",
      rating: 5
    },
    {
      content: "Eu tentei vários cursos caros de finanças e nenhum me deu resultados práticos. O ebook da Idealize Gestão me surpreendeu pela simplicidade e pela praticidade. Hoje tenho minhas contas em dia, uma reserva de emergência completa e comecei a investir!",
      author: "Carla M.",
      occupation: "Empreendedora, 35 anos",
      rating: 4.5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#101010]/70 to-[#101010] relative">
      <div className="container mx-auto px-4">
        <SectionHeader>
          Veja o que <span className="text-[#C5A167]">pessoas reais</span> conquistaram com o <span className="text-[#C5A167]">Domine Suas Finanças</span>
        </SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              occupation={testimonial.occupation}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  content: string;
  author: string;
  occupation: string;
  rating: number;
}

function TestimonialCard({ content, author, occupation, rating }: TestimonialCardProps) {
  return (
    <div className="glass rounded-xl p-6 h-full flex flex-col">
      <div className="text-[#C5A167] text-2xl mb-4">
        <FaQuoteLeft />
      </div>
      
      <p className="flex-grow italic mb-6">
        {content}
      </p>
      
      <div className="flex items-center mt-auto">
        <div className="text-[#C5A167] mr-4 flex">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <FaStar key={i} />
          ))}
          {rating % 1 !== 0 && <FaStarHalfAlt />}
        </div>
        
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-[#F5F5F5]/70">{occupation}</p>
        </div>
      </div>
    </div>
  );
}
