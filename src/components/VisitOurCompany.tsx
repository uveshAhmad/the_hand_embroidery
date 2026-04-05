import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const iconClass = 'w-5 h-5 text-[#1C1C1C]';
const circleClass = 'w-14 h-14 rounded-full bg-[#E8E4DE] flex items-center justify-center mb-4 mx-auto';

const cards = [
  {
    icon: <MapPin className={iconClass} />,
    title: 'Studio & Atelier',
    lines: ['Jawahar Nagar, Ghaziabad', 'Pin Code: 201102'],
    note: 'Visits by appointment only.',
  },
  {
    icon: <Mail className={iconClass} />,
    title: 'Email Us',
    lines: ['contact@thehandembroidery.com'],
    note: 'We love hearing from you.',
  },
  {
    icon: <Phone className={iconClass} />,
    title: 'Call or WhatsApp',
    lines: ['+918810561006'],
    note: 'Monday-Friday | 10 AM - 6 PM',
    noteIcon: <Clock className="w-4 h-4 text-[#555555] inline-block mr-1 align-middle" />,
  },
];

export default function VisitOurCompany() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F1EA] border-l border-[#D1D1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl font-semibold text-center mb-12">
          Visit Our Company
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#FDFBF7] rounded-xl shadow-sm p-8 text-center"
            >
              <div className={circleClass}>{card.icon}</div>
              <h3 className="font-serif text-[#1C1C1C] text-xl md:text-2xl font-semibold mb-3">
                {card.title}
              </h3>
              <div className="font-sans text-[#1C1C1C] text-base space-y-0.5 mb-4">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="font-sans text-[#555555] text-sm">
                {card.noteIcon}
                {card.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
