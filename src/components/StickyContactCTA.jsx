import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function StickyContactCTA() {
  const phoneNumber = '+919862565250';
  const whatsappNumber = '919862565250';

  return (
   <div className="fixed right-4 bottom-20 z-50 flex flex-col items-center gap-4 md:right-5 md:bottom-20">
  {/* Call Button */}
  <a
    href={`tel:${phoneNumber}`}
    aria-label="Call Perfect Smile Dental"
    className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-dental-blue text-white shadow-xl shadow-[rgba(91,141,239,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-dental-blue-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-dental-blue/50 active:translate-y-0.5"
  >
    <Phone size={20} />
  </a>

  {/* WhatsApp Button */}
  <a
    href={`https://wa.me/${whatsappNumber}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with Perfect Smile Dental on WhatsApp"
    className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 active:translate-y-0.5"
  >
    <FaWhatsapp size={24} />
  </a>
</div>
  );
}