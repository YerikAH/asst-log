import { Footer, Hero, Navigation, Feature, Qa } from "@/components/home";
import { useTitle } from "@/hook";
import { useEffect } from "react";

export default function Home() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Inicio - AsstLog");
  }, [changeTitle]);
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Feature/>
        <Qa/>
      </main>
      <Footer />
    </>
  );
}
