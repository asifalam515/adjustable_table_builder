import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8801630411689"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:bg-[#1ebe5d] transition-all hover:scale-110 active:scale-95"
      style={{ zIndex: 9999 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};
