import Hero from "@/components/hero";
import performanceImage from "@/public/performance.jpg";

export default function Performance() {
  return (
    <Hero
      imgData={performanceImage}
      imgAlt="car factory"
      title="We serve high performance applications"
    />
  );
}
