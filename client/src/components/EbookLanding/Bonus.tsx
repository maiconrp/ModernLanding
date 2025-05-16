import { FaTable, FaFileExcel, FaCheckSquare } from "react-icons/fa"; // FaVideo removido, FaFileExcel adicionado
import SectionHeader from "@/components/ui/section-header";
// import { Button } from "@/components/ui/button"; // Comentado se não estiver usando um botão genérico aqui
import KiwifyCheckout from "./KiwifyCheckout";

export default function Bonus() {
  // Definindo os valores dos bônus para fácil referência e cálculo
  const valorEbookOriginal = 197;
  const valorEbookPromocional = 97;
  const valorBonus1PlanilhaMensal = 47; // Exemplo de valor, ajuste conforme sua estratégia
  const valorBonus2PlanilhaDiaria = 47; // Exemplo de valor, ajuste conforme sua estratégia

  const valorTotalOriginal = valorEbookOriginal + valorBonus1PlanilhaMensal + valorBonus2PlanilhaDiaria;

  return (
    <section id="bonus" className="py-20 bg-gradient-to-b from-[#101010]/70 to-[#101010] relative">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <span className="text-[#C5A167]">OFERTA ESPECIAL</span>: Leve o Ebook + <span className="text-[#C5A167]">2 PLANILHAS EXCLUSIVAS</span> Para Acelerar Seu Controle Financeiro!
        </SectionHeader>

        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Main product */}
          <div className="w-full lg:w-1/2 glass rounded-xl p-8 flex flex-col">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#C5A167]/20 rounded-full p-4">
                {/* Ícone do livro - você pode usar um ícone de react-icons se preferir
                    ex: import { FaBookOpen } from "react-icons/fa";
                    <FaBookOpen className="text-4xl text-[#C5A167]" />
                */}
                <i className="fas fa-book text-4xl text-[#C5A167]"></i> {/* Se estiver usando FontAwesome via CDN */}
              </div>
            </div>

            <h3 className="text-2xl font-bold font-['Montserrat'] text-center mb-6">Ebook Domine Suas Finanças</h3>

            <div className="flex-grow space-y-4 mb-6">
              <p className="text-center text-[#F5F5F5]/80">
                Guia completo em 6 módulos com todas as ferramentas, estratégias e conhecimentos que você precisa para transformar sua vida financeira.
              </p>

              <div className="border-t border-[#F5F5F5]/10 pt-4">
                <p className="text-center text-lg font-semibold">Valor Original: <span className="line-through">R${valorEbookOriginal}</span></p>
              </div>
            </div>

            <p className="text-center text-2xl font-bold text-[#C5A167]">
              Hoje: R${valorEbookPromocional}
            </p>
          </div>

          {/* Bonus */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Bonus 1 - Planilha de Controle Financeiro Mensal */}
            <div className="glass-gold rounded-xl p-6 flex items-start gap-4">
              <div className="bg-[#C5A167]/20 rounded-full p-3 shrink-0">
                <FaTable className="text-2xl text-[#C5A167]" />
              </div>

              <div>
                <h4 className="text-xl font-bold font-['Montserrat'] mb-2">
                  BÔNUS #1: Planilha de Controle Financeiro Mensal
                </h4>
                <p className="mb-3 text-[#F5F5F5]/80">
                  Assuma o controle total das suas finanças mensais! Nossa planilha exclusiva, inspirada no modelo Mobills, vem pré-formatada e com cálculos automáticos para você organizar suas rendas e despesas de forma clara e sem complicação.
                </p>
                <p className="text-lg font-semibold text-[#C5A167]">
                  Valor: R${valorBonus1PlanilhaMensal} <span className="text-[#F5F5F5]/80 text-sm font-normal">(GRÁTIS com o ebook)</span>
                </p>
              </div>
            </div>

            {/* Bonus 2 - Planilha de Gastos Estratificados Diários */}
            <div className="glass-gold rounded-xl p-6 flex items-start gap-4">
              <div className="bg-[#C5A167]/20 rounded-full p-3 shrink-0">
                <FaFileExcel className="text-2xl text-[#C5A167]" /> {/* Ícone atualizado */}
              </div>

              <div>
                <h4 className="text-xl font-bold font-['Montserrat'] mb-2">
                  BÔNUS #2: Planilha de Gastos Estratificados Diários
                </h4>
                <p className="mb-3 text-[#F5F5F5]/80">
                  Entenda seus hábitos de consumo no detalhe! Esta planilha te ajuda a rastrear seus gastos diários por categoria, revelando padrões e oportunidades de otimizar seu orçamento.
                </p>
                <p className="text-lg font-semibold text-[#C5A167]">
                  Valor: R${valorBonus2PlanilhaDiaria} <span className="text-[#F5F5F5]/80 text-sm font-normal">(GRÁTIS com o ebook)</span>
                </p>
              </div>
            </div>

            {/* Total value */}
            <div className="p-4 border border-[#C5A167] rounded-lg text-center">
              <p className="text-lg text-[#F5F5F5]/90">
                Valor Total (Ebook + Bônus): <span className="line-through">R${valorTotalOriginal.toFixed(2)}</span>
              </p>
              <p className="text-2xl font-bold text-[#C5A167] mt-1">
                Leve Tudo Hoje Por Apenas: R${valorEbookPromocional.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <KiwifyCheckout
            productId="YOUR_KIWIFY_PRODUCT_ID" // LEMBRE-SE DE ATUALIZAR ESTE ID
            buttonText="QUERO DOMINAR MINHAS FINANÇAS COM TODOS OS BÔNUS!" // Texto do botão pode ser ajustado
            className="pulse px-8 py-4 bg-[#C5A167] text-[#101010] rounded-lg font-bold uppercase tracking-wider transition transform hover:scale-105 hover:shadow-lg inline-block text-lg"
          />
          <p className="mt-4 text-sm text-[#F5F5F5]/70">
            <FaCheckSquare className="inline mr-1 text-[#C5A167]" /> Compra segura e acesso imediato.
          </p>
        </div>
      </div>
    </section>
  );
}