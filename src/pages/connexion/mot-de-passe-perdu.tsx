/**COMPONENTS */
import { Layout } from "@/ui/components/layouts/layouts";
import { Seo } from "@/ui/components/seo/Seo";
import { ForgetPasswordContainer } from "@/ui/modules/authentification/forgetPassword/forgetPassword.container";

export default function ForgetPassword() {
  return (
    <>
      <Seo title="Forget Password" description="Page de recupération de mot de passe" />

      <Layout>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
