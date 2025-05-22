import { FaCheckCircle, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import { motion } from "framer-motion";
import KiwifyCheckout from "./KiwifyCheckout";

export default function Solution() {
  return (
    <section id="solution" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C5A167] opacity-5 transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#1E2B4F] opacity-5 transform -rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Ebook mockup */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Light effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C5A167] to-[#1E2B4F] opacity-20 blur-xl rounded-xl"></div>
              
              {/* Another variation of ebook mockup showing multiple devices */}
              <img 
                src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ebook Domine Suas Finanças em múltiplos dispositivos" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 glass-gold rounded-full p-4 shadow-lg z-20 transform rotate-12">
                <FaCheckCircle className="text-3xl text-[#C5A167]" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass rounded-full p-4 shadow-lg z-20">
                <FaStar className="text-3xl text-[#C5A167]" />
              </div>
            </div>
          </motion.div>
          
          {/* Solution description */}
          <motion.div 
            className="w-full lg:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat']">
              <span className="text-[#C5A167]">Encontre clareza</span> <span className="block mt-2">Ebook Domine Suas Finanças: Um guia prático para construir uma relação saudável com seu dinheiro</span>
            </h2>
            
            <p className="text-lg leading-relaxed">
              A gente sabe que buscar respostas sobre como colocar a vida financeira em ordem pode ser cansativo. Por isso, criamos o ebook <span className="font-bold">Domine Suas Finanças</span> pensando em você: um verdadeiro <span className="text-[#C5A167] font-bold">companheiro de jornada</span> feito pra quem busca clareza e um caminho prático pra lidar melhor com o dinheiro.
            </p>
            
            <p className="text-lg leading-relaxed">
              Dentro dele, você vai encontrar tudo o que precisa pra transformar o jeito que lida com as finanças, sem complicação. Traduzimos o que parece difícil em um passo a passo acessível pra você organizar suas contas, entender pra onde seu dinheiro tá indo e construir um futuro com muito mais tranquilidade e confiança.
            </p>
            
            <div className="mt-8">
              <KiwifyCheckout 
                productId="DnSlT4G"
                buttonText="QUERO INICIAR MINHA JORNADA FINANCEIRA!"
                className="cta-primary"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
