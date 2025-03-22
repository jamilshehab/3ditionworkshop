import {
  AboutSection,
  FollowUsOnInstagram,
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
      <FollowUsOnInstagram />
      <StickySocialMedia />
    </main>
  );
}
