/**COMPONENTS */
import { Layout } from "@/ui/components/layouts/layouts";
import { Seo } from "@/ui/components/seo/Seo";
import { RegisterContainer } from "@/ui/modules/authentification/register/register.container";

export default function Register() {
  return (
    <>
      <Seo title="Inscription" description="Page d'Inscription" />

      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
}
