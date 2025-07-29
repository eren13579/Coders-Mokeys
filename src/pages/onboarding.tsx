/**COMPONENTS */
import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layouts/layouts";
import { Seo } from "@/ui/components/seo/Seo";

export default function Onboarding() {
  return (
    <>
      <Seo title="Onboarding" description="description de la page onboarding" />

      <Layout sessionStatus={REGISTERED}>
            <div className="flex items-center justify-center pt-20 py-40">
                Welcome to onboarding
            </div>
      </Layout>
    </>
  );
}
