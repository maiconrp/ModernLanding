import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";

interface KiwifyCheckoutProps {
  productId: string;
  buttonText: string;
  className?: string;
}

export default function KiwifyCheckout({ 
  productId, 
  buttonText, 
  className = "pulse px-8 py-4 bg-[#C5A167] text-[#101010] rounded-lg font-bold uppercase tracking-wider transition transform hover:scale-105 hover:shadow-lg text-center w-full sm:w-auto"
}: KiwifyCheckoutProps) {
  
  const handleCheckout = () => {
    // Kiwify checkout URL format
    window.open(`https://pay.kiwify.com.br/checkout/${productId}`, "_blank");
  };

  return (
    <div className="kiwify-checkout-container">
      <Button 
        onClick={handleCheckout}
        className={className}
      >
        {buttonText}
      </Button>
      
      <p className="mt-4 text-[#F5F5F5]/70 flex items-center justify-center">
        <FaLock className="mr-2" />
        Pagamento 100% seguro processado pela Kiwify
      </p>
    </div>
  );
}