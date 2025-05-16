import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import KiwifyCheckout from "./KiwifyCheckout";
import CapaEbook from '@/assets/images/capa_page-0001.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-10 pb-20 overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Hero Content */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] leading-tight text-[#F5F5F5]">
              Chega de nó na cabeça com suas finanças
            </h1>

            <p className="text-xl md:text-2xl font-medium font-['Montserrat'] text-[#F5F5F5]/90 mt-4 lg:mt-6">
  Conquiste a <span className="text-[#C5A167]">paz financeira</span> que você tanto busca.
</p>
            
            <p className="text-lg md:text-xl font-['Nunito'] text-[#F5F5F5]/80 leading-relaxed">
            Sente que sua vida financeira é uma montanha-russa de preocupações? Entendemos. A Idealize Gestão caminha com você, passo a passo, para uma relação mais leve e tranquila com seu dinheiro.
            </p>
            
            <div className="pt-4">
              <KiwifyCheckout 
                productId="YOUR_KIWIFY_PRODUCT_ID"
                buttonText="QUERO ENCONTRAR MEU CAMINHO FINANCEIRO!"
                className="pulse px-8 py-4 bg-[#1E2B4F] text-[#F5F5F5] rounded-lg font-bold uppercase tracking-wider transition transform hover:scale-105 hover:shadow-lg text-center w-full sm:w-auto"
              />
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
                src={CapaEbook}
                alt="Capa do Ebook Domine Suas Finanças" 
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
