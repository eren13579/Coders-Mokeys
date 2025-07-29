
import { Layout } from "@/ui/components/layouts/layouts";
import { Seo } from "@/ui/components/seo/Seo";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page-container";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkey" description="description...." />

      <Layout>
        <LandingPageContainer />
      </Layout>
    </>
  );
}
