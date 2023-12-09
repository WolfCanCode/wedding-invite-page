import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stories from "@/components/Stories";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="bg-orange-100/75 min-h-[100vh] w-screen">
      <Header />
      <Hero />
      <Testimonial />
      <Stories />
    </main>
  )
}
