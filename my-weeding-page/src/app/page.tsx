import Confirmation from '@/components/Confirmation';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Stories from '@/components/Stories';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <main className='min-h-[100vh] w-screen scroll-smooth bg-[#FDF8F7]'>
      <Header />
      <Hero />
      <Testimonial />
      <Stories />
      <Schedule />
      <Confirmation />
    </main>
  );
}
