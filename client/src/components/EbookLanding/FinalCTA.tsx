import { FaCheckCircle, FaLock } from "react-icons/fa";
// import { Button } from "@/components/ui/button"; // Comentado se não usado diretamente
import KiwifyCheckout from "./KiwifyCheckout";

export default function FinalCTA() {
  // Valores para consistência (idealmente viriam de um contexto ou props se compartilhados)
  const valorEbookOriginal = 117;
  const valorBonus1PlanilhaMensal = 27; // Mesmo valor do componente Bonus.tsx
  const valorBonus2PlanilhaDiaria = 27; // Mesmo valor do componente Bonus.tsx
  const valorTotalOriginalPacote = valorEbookOriginal + valorBonus1PlanilhaMensal + valorBonus2PlanilhaDiaria;
  const precoPromocionalFinal = 47;

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-b from-[#101010]/90 to-[#101010] relative">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -bottom-16 right-0 w-96 h-96 bg-[#C5A167] rounded-full blur-3xl"></div>
        <div className="absolute -top-16 left-0 w-96 h-96 bg-[#1E2B4F] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat'] mb-8">
            Sua <span className="text-[#C5A167]">Decisão Inteligente</span> Para Uma Vida Financeira Mais Leve e Organizada
            <span className="block mt-2 text-xl md:text-2xl font-normal text-[#F5F5F5]/80">
              Chegou a hora de dar o passo que transforma preocupação em <span className="text-[#C5A167]">paz de espírito</span>.
            </span>
          </h2>

          <p className="text-lg md:text-xl mb-10 text-[#F5F5F5]/90">
            Imagine acordar todos os dias com a certeza de que suas finanças estão sob controle, permitindo que você foque no que realmente importa.
            Este não é apenas um ebook, é o seu mapa para a <span className="text-[#C5A167] font-semibold">liberdade financeira</span> que você tanto busca.
            <span className="block mt-3">Você merece essa tranquilidade e clareza. <span className="text-[#C5A167] font-semibold">Invista em você!</span></span>
          </p>

          {/* Ebook cover and price */}
          <div className="glass rounded-xl p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-full md:w-2/5"> {/* Ajustei a proporção para a imagem */}
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" // Reduzi um pouco o 'w' da imagem de placeholder
                  alt="Capa do Ebook Domine Suas Finanças"
                  className="w-full h-auto rounded-lg shadow-xl aspect-[3/4] object-cover" // Adicionei aspect-ratio e object-cover
                />
              </div>

              <div className="w-full md:w-3/5 text-left">
                <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] mb-4">Ebook Domine Suas Finanças + Bônus Exclusivos</h3>

                <ul className="space-y-2 md:space-y-3 mb-6 text-sm md:text-base text-[#F5F5F5]/90">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#C5A167] mr-2 md:mr-3 mt-1 shrink-0" />
                    <span>Guia completo com 6 módulos práticos para sua total clareza financeira.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#C5A167] mr-2 md:mr-3 mt-1 shrink-0" />
                    <span>
                      <span className="font-semibold text-[#C5A167]">Bônus Exclusivos:</span> Planilha de Controle Mensal + Planilha de Gastos Diários para acelerar seus resultados.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#C5A167] mr-2 md:mr-3 mt-1 shrink-0" />
                    <span>Acesso imediato e vitalício: Comece sua transformação agora mesmo.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#C5A167] mr-2 md:mr-3 mt-1 shrink-0" />
                    <span><span className="font-semibold text-[#C5A167]">Garantia Incondicional:</span> 30 dias para você experimentar sem riscos.</span>
                  </li>
                </ul>

                <div className="bg-[#101010]/50 p-4 rounded-md">
                  <p className="text-base md:text-lg text-[#F5F5F5]/80">
                    De <span className="line-through">R${valorTotalOriginalPacote.toFixed(2)}</span> por apenas:
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-[#C5A167] my-1">
                    R${precoPromocionalFinal.toFixed(2)}
                  </p>
                  <p className="text-xs md:text-sm text-[#F5F5F5]/70">Pagamento único e acesso vitalício.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kiwify Checkout Button */}
          <KiwifyCheckout
            productId="DnSlT4G" // LEMBRE-SE DE ATUALIZAR ESTE ID
            buttonText="QUERO MINHA TRANSFORMAÇÃO FINANCEIRA AGORA!"
            className="pulse px-8 py-5 md:px-10 md:py-5 bg-[#C5A167] text-[#101010] rounded-lg font-bold uppercase tracking-wider transition transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center text-base md:text-lg text-center whitespace-normal break-words leading-tight w-full sm:w-auto mx-auto"
          />
          
        </div>
      </div>
    </section>
  );
}