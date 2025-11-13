import HeroSection from "@/components/hero-section-new";
import CoreFeatures from "@/components/core-features";
import UserCase from "@/components/user-case";
import SimpleWaitlist from "@/components/simple-waitlist";
import SimpleFooter from "@/components/simple-footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoreFeatures />
      <UserCase />
      <SimpleWaitlist />
      <SimpleFooter />
    </main>
  );
}
