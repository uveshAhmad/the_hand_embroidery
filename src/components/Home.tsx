import Hero from './Hero';
import Story from './Story';
import Process from './Process';
import WhatWeCreate from './WhatWeCreate';
import WhatWeNeed from './WhatWeNeed';
import CallToAction from './CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Process />
      <WhatWeCreate />
      <WhatWeNeed />
      <CallToAction />
    </>
  );
}
