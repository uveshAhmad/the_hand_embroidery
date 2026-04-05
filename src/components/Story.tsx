
export default function Story() {
  return (
    <section className="bg-[#F6F1EA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-[#1C1C1C] text-[3.5rem] font-medium leading-[4.2rem] mb-6">
              A Story Stitched by Hand
            </h2>
            <div className="space-y-4 font-sans text-[#1C1C1C] text-[1.125rem] font-normal leading-[2.025rem]">
              <p>
                We are a hand embroidery studio devoted to preserving traditional craftsmanship
                while shaping designs for modern lifestyles.
              </p>
              <p>
                Our artisans work thread by thread, guided by experience, patience, and artistic
                precision.
              </p>
              <p>
                Every piece is created slowly — not by machines, but by hands that understand
                detail, texture, and emotion.
              </p>
              <p className="font-sans text-[#C9A24D] text-[1.125rem] font-normal leading-[2.025rem]">
                This is embroidery made to last, not trends made to fade.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="shadow-2xl rounded-lg overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dk7dydmvc/image/upload/q_auto/f_auto/v1775404969/storyImg_rzim8t.svg" 
                alt="Hand embroidery story" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
