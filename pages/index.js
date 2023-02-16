import Footer from "@/component/footer/footer";
import Hero from "@/component/hero/hero";
import Newsletter from "@/component/newsletter/newsletter";
import OurTrack from "@/component/ourTrack/ourTrack";
import PremiumLearning from "@/component/premium/premium";
import StudentSay from "@/component/studentSay/studentSay";

// https://www.figma.com/file/dusbpXyheOl3JVckZItZWC/Edu-Site?node-id=4%3A935&t=37l9zUFP41eDKusO-0

export default function Home() {
  return (
    <>
      <title>Home | Book Store</title>
      <Hero />
      <OurTrack />
      <PremiumLearning />
      <StudentSay />
      <Newsletter />
      <Footer />
    </>
  );
}
