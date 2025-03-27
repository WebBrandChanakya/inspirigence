"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+917021945422"; 
  const message = "Hello! I'm interested in your services."; 

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 aspect-square right-5 px-3 py-2 bg-green-500 text-white flex items-center gap-2 rounded-full shadow-lg transition-all hover:bg-green-600"
    >
      <FaWhatsapp size={24} />
    </button>
  );
}
