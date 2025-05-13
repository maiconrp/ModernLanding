import { 
  FaLightbulb, 
  FaCheckCircle, 
  FaMapMarkedAlt, 
  FaBrain,
  FaChartPie,
  FaAward
} from "react-icons/fa";
import SectionHeader from "@/components/ui/section-header";
import GlassIcon from "@/components/ui/glass-icon";

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-[#101010]/70 to-[#101010] relative">
      <div className="container mx-auto px-4">
        <SectionHeader>
          Deixe a <span className="text-[#C5A167]">Incerteza</span> Para Trás e Conquiste a <span className="text-[#C5A167]">Confiança</span> de Quem Sabe Para Onde Vai (e Como Chegar Lá!)
        </SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="glass h-full rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <GlassIcon icon={<FaLightbulb />} color="#1E2B4F" />
              
              <h3 className="text-xl font-bold font-['Montserrat'] mb-4">CLAREZA ABSOLUTA</h3>
              
              <p className="text-[#F5F5F5]/90">
                Descubra de forma simples e acessível o que realmente importa sobre gestão financeira e como fazer seu dinheiro trabalhar a seu favor, criando uma relação mais harmoniosa com suas finanças.
              </p>
            </div>
            
            {/* Person looking confident and organized with finances */}
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Pessoa confiante e organizada com suas finanças" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          {/* Benefit 2 */}
          <div className="glass h-full rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <GlassIcon icon={<FaCheckCircle />} color="#1E2B4F" />
              
              <h3 className="text-xl font-bold font-['Montserrat'] mb-4">CONTAS EM DIA, SEM SUFOCO</h3>
              
              <p className="text-[#F5F5F5]/90">
                Encontre caminhos gentis e práticos para reorganizar suas contas e lidar com as dívidas de forma gradual e consistente, mesmo quando parecer que a situação está realmente desafiadora.
              </p>
            </div>
            
            {/* Person feeling relieved after organizing finances */}
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Pessoa aliviada após organizar finanças" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          {/* Benefit 3 */}
          <div className="glass h-full rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <GlassIcon icon={<FaMapMarkedAlt />} color="#1E2B4F" />
              
              <h3 className="text-xl font-bold font-['Montserrat'] mb-4">PLANO QUE FUNCIONA</h3>
              
              <p className="text-[#F5F5F5]/90">
                Desenvolva seu próprio plano financeiro que realmente funcione no seu dia a dia e descubra maneiras de distribuir seus recursos que façam sentido para seus objetivos e estilo de vida único.
              </p>
            </div>
            
            {/* Person planning finances successfully */}
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Pessoa planejando finanças com sucesso" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          {/* Benefit 4 */}
          <div className="glass h-full rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <GlassIcon icon={<FaBrain />} color="#1E2B4F" />
              
              <h3 className="text-xl font-bold font-['Montserrat'] mb-4">AUTONOMIA E CONHECIMENTO</h3>
              
              <p className="text-[#F5F5F5]/90">
                Desenvolva sua autonomia financeira através de conhecimentos acessíveis e relevantes, sem precisar mergulhar em terminologias complexas ou se tornar um especialista para cuidar bem do seu próprio dinheiro.
              </p>
            </div>
            
            {/* Person studying finances independently */}
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Pessoa estudando finanças independentemente" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          {/* Benefit 5 */}
          <div className="glass h-full rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <GlassIcon icon={<FaChartPie />} color="#1E2B4F" />
              
              <h3 className="text-xl font-bold font-['Montserrat'] mb-4">MÉTODOS DESCOMPLICADOS</h3>
              
              <p className="text-[#F5F5F5]/90">
                Conheça abordagens como a "regra 50/30/20" e outros princípios fundamentais da educação financeira de forma prática e adaptada ao seu contexto, transformando conceitos em ferramentas que realmente funcionam no seu dia a dia.
              </p>
            </div>
            
            {/* Person using simple effective methods for finances */}
            <img 
              src="https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Pessoa usando métodos simples e eficazes para finanças" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          {/* Final benefit callout */}
          <div className="glass-gold h-full rounded-xl overflow-hidden flex items-center p-8">
            <div className="text-center">
              <div className="text-5xl text-[#C5A167] mb-6">
                <FaAward />
              </div>
              <p className="text-xl font-semibold">
                Imagine como seria começar cada dia com a <span className="text-[#C5A167]">sensação de tranquilidade</span> de ter uma relação saudável com seu dinheiro, sabendo que ele está alinhado com seus valores e trabalhando como um aliado na sua vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
