import NonSocialLinks from "../components/NonSocialLinks";
import SocialLinks from "../components/SocialLinks";
import TopContent from "../components/TopContent";

export default async function Home() {
  return (
    <main>
      <TopContent />
      <SocialLinks />
      <NonSocialLinks />
    </main>
  );
}
