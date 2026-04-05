const TIMELINES = [
  { stage: 'Sample Development', timeframe: '1–5 days' },
  { stage: 'Bulk Production', timeframe: '10–35 days depending on volume' },
  { stage: 'Quality Control & Packing', timeframe: '1–4 days' },
  { stage: 'Shipping / Export Dispatch', timeframe: '5–8 days' },
];

export default function TimelinesToConfirm() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F6F2] border-l border-[#D1D1D1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl font-medium text-center mb-12 tracking-wide">
          Timelines to Confirm
        </h2>

        <div className="rounded-xl border border-[#E8E4DE] bg-white shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F0EDE8]">
                <th className="font-sans font-semibold text-[#1C1C1C] text-left py-4 px-5 md:px-6 text-sm md:text-base">
                  Stage
                </th>
                <th className="font-sans font-semibold text-[#1C1C1C] text-left py-4 px-5 md:px-6 text-sm md:text-base">
                  Typical Timeframe (Approx.)
                </th>
              </tr>
            </thead>
            <tbody>
              {TIMELINES.map((row, i) => (
                <tr
                  key={row.stage}
                  className={`font-sans text-[#1C1C1C] text-sm md:text-base ${
                    i < TIMELINES.length - 1 ? 'border-b border-[#E8E4DE]' : ''
                  }`}
                >
                  <td className="py-4 px-5 md:px-6">{row.stage}</td>
                  <td className="py-4 px-5 md:px-6">{row.timeframe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
