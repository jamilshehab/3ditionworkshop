import {
  AboutSection,
  Gallery,
  GetInTouch,
  HomeBanner,
  StickySocialMedia,
} from "./components";
import OurProducts from "./components/Shared/OurProducts";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <AboutSection />
      <OurProducts />
      <GetInTouch />
      <StickySocialMedia />
    </main>
  );
}
