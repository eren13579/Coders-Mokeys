/**COMPONENTS */
import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layouts/layouts";
import { Seo } from "@/ui/components/seo/Seo";
import { UserAccountContainer } from "@/ui/modules/user-profil/user-account/user-account.container";

export default function MonEspace() {
  return (
    <>
      <Seo title="Mon espace" description="Mon espace utilisateur" />

      <Layout withSidebar sessionStatus={REGISTERED}>
            <UserAccountContainer />
      </Layout>
    </>
  );
}
