import { useState, useRef, useCallback, useEffect } from 'react';

const SERVICE_TAGS = [
  'Antique textile repair',
  'Vintage garment restoration',
  'Re-stitching faded or damaged embroidery',
  'Color-matched thread repair',
];

function ClockIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-4 text-[#A07A5C]"
      aria-hidden
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 12v8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function RestorationReEmbroidery() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    },
    []
  );

  const handlePointerDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: PointerEvent) => updatePosition(e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <section className="py-16 md:py-24 bg-white border-l border-[#D1D1D1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Icon */}
        <div className="flex justify-center">
          <ClockIcon />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-3">
          Restoration & Re-Embroidery
        </h2>
        <p className="font-sans text-[#1C1C1C] text-base md:text-lg text-center mb-10">
          Preserving craftsmanship across generations.
        </p>

        {/* Service tags */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {SERVICE_TAGS.map((label) => (
            <span
              key={label}
              className="px-4 py-2 rounded-full bg-[#F6F1EA] border border-[#E8E4DE] font-sans text-[#1C1C1C] text-sm md:text-base"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Before / After comparison */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] max-h-[420px] rounded-lg overflow-hidden border border-[#E8E4DE] shadow-sm select-none"
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onClick={(e) => {
            if (!containerRef.current || (e.target as HTMLElement).closest('[data-slider-handle]')) return;
            const rect = containerRef.current.getBoundingClientRect();
            const percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            setSliderPosition(percent);
          }}
        >
          {/* Before layer (plain fabric) */}
          <div
            className="absolute inset-0 bg-[#E5E2DD]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.02) 2px,
                rgba(0,0,0,0.02) 4px
              )`,
            }}
            aria-hidden
          />

          {/* After layer (fabric + embroidery) - clipped by slider */}
          <div
            className="absolute inset-0 bg-[#E5E2DD]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.02) 2px,
                rgba(0,0,0,0.02) 4px
              )`,
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            {/* Placeholder embroidery (leaf) - replace with real image when available */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-32 h-40 md:w-40 md:h-52 opacity-90"
                style={{
                  background: `radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59, 130, 246, 0.5), rgba(29, 78, 216, 0.4))`,
                  clipPath:
                    'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                  boxShadow: '0 0 0 1px rgba(29, 78, 216, 0.2)',
                }}
              />
            </div>
          </div>

          {/* AFTER label - inside the "after" region */}
          <div
            className="absolute top-4 px-3 py-1.5 rounded-md bg-[#F6F1EA] border border-[#E8E4DE] font-sans text-[#1C1C1C] text-xs font-medium tracking-wide z-10"
            style={{ left: `calc(${sliderPosition}% + 0.5rem)` }}
          >
            AFTER
          </div>

          {/* Slider line + handle */}
          <div
            data-slider-handle
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md z-20 cursor-ew-resize touch-none"
            style={{ left: `${sliderPosition}%` }}
            onPointerDown={(e) => {
              (e.target as HTMLElement).setPointerCapture(e.pointerId);
              handlePointerDown();
            }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#D1D1D1] shadow-lg flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-[#1C1C1C]"
                aria-hidden
              >
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
