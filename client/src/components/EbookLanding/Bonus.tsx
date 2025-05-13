import { FaTable, FaVideo, FaCheckSquare } from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export default function Bonus() {
  return (
    <section id="bonus" className="py-20 bg-gradient-to-b from-[#101010]/70 to-[#101010] relative">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <span className="text-[#C5A167]">OFERTA ESPECIAL</span>: Leve o Ebook + <span className="text-[#C5A167]">BÔNUS EXCLUSIVOS</span> Para Acelerar Seu Controle Financeiro!
        </SectionHeader>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Main product */}
          <div className="w-full lg:w-1/2 glass rounded-xl p-8 flex flex-col">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#C5A167]/20 rounded-full p-4">
                <i className="fas fa-book text-4xl text-[#C5A167]"></i>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold font-['Montserrat'] text-center mb-6">Ebook Domine Suas Finanças</h3>
            
            <div className="flex-grow space-y-4 mb-6">
              <p className="text-center">
                Guia completo em 6 módulos com todas as ferramentas, estratégias e conhecimentos que você precisa para transformar sua vida financeira.
              </p>
              
              <div className="border-t border-[#F5F5F5]/10 pt-4">
                <p className="text-center text-lg font-semibold">Valor Original: <span className="line-through">R$197</span></p>
              </div>
            </div>
            
            <p className="text-center text-2xl font-bold text-[#C5A167]">
              Hoje: R$97
            </p>
          </div>
          
          {/* Bonus */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Bonus 1 */}
            <div className="glass-gold rounded-xl p-6 flex items-start gap-4">
              <div className="bg-[#C5A167]/20 rounded-full p-3 shrink-0">
                <FaTable className="text-2xl text-[#C5A167]" />
              </div>
              
              <div>
                <h4 className="text-xl font-bold font-['Montserrat'] mb-2">BÔNUS #1: Planilha de Orçamento Inteligente</h4>
                <p className="mb-3">
                  Planilha pré-formatada que faz os cálculos automaticamente e ajuda você a visualizar seu progresso mês a mês.
                </p>
                <p className="text-lg font-semibold text-[#C5A167]">
                  Valor: R$67 <span className="text-[#F5F5F5]/80 text-sm">(GRÁTIS com o ebook)</span>
                </p>
              </div>
            </div>
            
            {/* Bonus 2 */}
            <div className="glass-gold rounded-xl p-6 flex items-start gap-4">
              <div className="bg-[#C5A167]/20 rounded-full p-3 shrink-0">
                <FaVideo className="text-2xl text-[#C5A167]" />
              </div>
              
              <div>
                <h4 className="text-xl font-bold font-['Montserrat'] mb-2">BÔNUS #2: Mini-Curso em Vídeo "Negociação de Dívidas"</h4>
                <p className="mb-3">
                  3 vídeo-aulas práticas com scripts e técnicas de negociação que podem reduzir suas dívidas em até 60%.
                </p>
                <p className="text-lg font-semibold text-[#C5A167]">
                  Valor: R$87 <span className="text-[#F5F5F5]/80 text-sm">(GRÁTIS com o ebook)</span>
                </p>
              </div>
            </div>
            
            {/* Bonus 3 */}
            <div className="glass-gold rounded-xl p-6 flex items-start gap-4">
              <div className="bg-[#C5A167]/20 rounded-full p-3 shrink-0">
                <FaCheckSquare className="text-2xl text-[#C5A167]" />
              </div>
              
              <div>
                <h4 className="text-xl font-bold font-['Montserrat'] mb-2">BÔNUS #3: Checklist "21 Hábitos Financeiros Transformadores"</h4>
                <p className="mb-3">
                  Lista prática com hábitos diários, semanais e mensais que vão automatizar seu sucesso financeiro.
                </p>
                <p className="text-lg font-semibold text-[#C5A167]">
                  Valor: R$47 <span className="text-[#F5F5F5]/80 text-sm">(GRÁTIS com o ebook)</span>
                </p>
              </div>
            </div>
            
            {/* Total value */}
            <div className="p-4 border border-[#C5A167] rounded-lg text-center">
              <p className="text-lg">
                Valor Total: <span className="line-through">R$398</span>
              </p>
              <p className="text-2xl font-bold text-[#C5A167] mt-2">
                Hoje Por Apenas: R$97
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="pulse px-8 py-4 bg-[#C5A167] text-[#101010] rounded-lg font-bold uppercase tracking-wider transition transform hover:scale-105 hover:shadow-lg inline-block text-lg">
            QUERO INICIAR MINHA JORNADA COM TODOS OS BÔNUS!
          </Button>
          
          <p className="mt-4 text-[#F5F5F5]/70">
            Pagamento único e seguro via PIX, cartão de crédito ou boleto
          </p>
        </div>
      </div>
    </section>
  );
}
