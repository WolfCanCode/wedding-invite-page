import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stories from '@/components/Stories';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <main className='min-h-[100vh] w-screen scroll-smooth bg-orange-100/75'>
      <Header />
      <Hero />
      <Testimonial />
      <Stories />
    </main>
  );
}
