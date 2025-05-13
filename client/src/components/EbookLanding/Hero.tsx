import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-10 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Hero Content */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] leading-tight text-[#F5F5F5]">
              O Dinheiro <span className="text-[#C5A167]">Controla Você</span> ou Você <span className="text-[#C5A167]">Controla o Dinheiro</span>? <span className="block mt-2">CHEGA de Viver Perdido e Sufocado Pelas Contas!</span>
            </h1>
            
            <p className="text-lg md:text-xl font-['Nunito'] text-[#F5F5F5]/80 leading-relaxed">
              Se perguntas como <span className="italic font-semibold">"Como posso ter controle financeiro?"</span>, <span className="italic font-semibold">"Como colocar as contas em dia?"</span> ou <span className="italic font-semibold">"Como posso mudar minha vida financeira?"</span> <span className="text-[#C5A167] font-bold">NÃO SAEM DA SUA CABEÇA</span>, este guia é a resposta que você tanto procura. A Idealize Gestão te mostra o caminho, passo a passo.
            </p>
            
            <div className="pt-4">
              <Button 
                className="pulse px-8 py-4 bg-[#1E2B4F] text-[#F5F5F5] rounded-lg font-bold uppercase tracking-wider transition transform hover:scale-105 hover:shadow-lg text-center w-full sm:w-auto"
              >
                QUERO O MAPA PARA O CONTROLE FINANCEIRO!
              </Button>
            </div>
          </motion.div>
          
          {/* Ebook Mockup */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E2B4F] to-[#C5A167] opacity-20 blur-lg rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ebook Domine Suas Finanças" 
                className="relative w-full h-auto rounded-lg shadow-2xl border border-[#C5A167]/20"
              />
              
              {/* Price tag */}
              <div className="absolute -top-4 -right-4 bg-[#C5A167] text-[#101010] font-bold rounded-full p-4 shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-xs uppercase block">Apenas</span>
                <span className="text-xl">R$97</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#101010] to-transparent"></div>
    </section>
  );
}
