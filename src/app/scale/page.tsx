import scaleImg from "@/public/scale.jpg";
import Hero from "@/components/hero";

export default function Scale() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="car factory"
      title="Scale your app to infinity."
    />
  );
}
