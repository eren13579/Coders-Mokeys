/**COMPONENTS */
import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layouts/layouts";
import { Seo } from "@/ui/components/seo/Seo";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";

export default function Connexion() {
  return (
    <>
      <Seo title="Connexion" description="Connexion sur la page" />

      <Layout sessionStatus={GUEST}>
        <LoginContainer />
      </Layout>
    </>
  );
}
