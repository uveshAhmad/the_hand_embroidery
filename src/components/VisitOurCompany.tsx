import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const iconClass = 'w-5 h-5 text-[#1C1C1C]';
const circleClass = 'w-14 h-14 rounded-full bg-[#E8E4DE] flex items-center justify-center mb-4 mx-auto';

const cards = [
  {
    icon: <MapPin className={iconClass} />,
    title: 'Studio & Atelier',
    lines: [
      { text: 'Jawahar Nagar, Ghaziabad' },
      { text: 'Pin Code: 201102' }
    ],
    note: 'Visits by appointment only.',
  },
  {
    icon: <Mail className={iconClass} />,
    title: 'Email Us',
    lines: [
      { text: 'contact@thehandembroidery.com', href: 'mailto:contact@thehandembroidery.com' }
    ],
    note: 'We love hearing from you.',
  },
  {
    icon: <Phone className={iconClass} />,
    title: 'Call or WhatsApp',
    lines: [
      { 
        text: '+91 8810561006', 
        href: 'https://wa.me/918810561006', 
        target: '_blank',
        iconPrefix: (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.478 5.611h-.011c-1.543 0-3.052-.414-4.375-1.196l-.314-.187-3.253.852.868-3.17-.205-.326A9.957 9.957 0 0 1 3.167 11.99c0-5.461 4.444-9.905 9.905-9.905 2.646 0 5.132 1.031 7.002 2.902a9.835 9.835 0 0 1 2.902 7.003c-.001 5.46-4.446 9.904-9.905 9.904m8.497-18.406A11.933 11.933 0 0 0 11.992 0C5.372 0 .004 5.37 0 11.992c0 2.115.551 4.181 1.6 6.006L.012 23.988l6.14-1.611a11.964 11.964 0 0 0 5.84 1.517h.005c6.618 0 11.986-5.369 11.986-11.991 0-3.208-1.248-6.225-3.514-8.492" />
          </svg>
        )
      }
    ],
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
              <div className="font-sans text-[#1C1C1C] text-base space-y-1 mb-4 flex flex-col items-center">
                {card.lines.map((line: any, idx) => (
                  line.href ? (
                    <a
                      key={idx}
                      href={line.href}
                      target={line.target || '_self'}
                      rel={line.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center gap-2 hover:text-[#A07A5C] transition-colors"
                    >
                      {line.iconPrefix}
                      {line.text}
                    </a>
                  ) : (
                    <p key={idx}>{line.text}</p>
                  )
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
