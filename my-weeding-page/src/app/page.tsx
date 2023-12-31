import AboutUs from '@/components/AboutUs';
import Blessing from '@/components/Blessing';
import Confirmation from '@/components/Confirmation';
import Gallery from '@/components/Gallery';
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
      <Gallery />
      <Blessing />
      <AboutUs />
      <div className='border-2 border-t-orange-200 bg-white py-4 text-center'>
        The website is a gift from <strong>An house</strong> with ♥️
      </div>
    </main>
  );
}
