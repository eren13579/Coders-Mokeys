//COMPONENT
import { Container } from "@/ui/components/containers/container";
import { Layout } from "@/ui/components/layouts/layouts";
import { Seo } from "@/ui/components/seo/Seo";

//DESIGN SYSTEM
import { Avatar } from "@/ui/design/avatar/avatar";
import { Button } from "@/ui/design/button/button";
import { Logo } from "@/ui/design/logo/logo";
import { Spinner } from "@/ui/design/spinner/spinner";
import { Typography } from "@/ui/design/typographies/typography";

//ICONS
import { RiUser6Fill } from "react-icons/ri";

export default function DesignSystem() {
    return (
        <>
            <Seo title="Design System" description="description..." />
            <Layout>
                <Container className="py-10 space-y-10">
                    <div className='flex items-center gap-4 p-4'>
                        <Spinner size="small" />
                        <Spinner />
                        <Spinner size="large" />
                    </div>
                    {/** Logo */}
                    <div className='flex items-center gap-4 p-4'>
                        <Typography variants="caption2" weight="medium">Logo</Typography>
                        <Logo Size="very-small" />
                        <Logo Size="small" />
                        <Logo />
                        <Logo Size="large" />
                    </div>
                    {/** Avatar */}
                    <div className='flex items-center gap-4 p-4'>
                        <Typography variants="caption2" weight="medium">Avatar</Typography>
                        <Avatar Size="small" src="/assets/images/profil.jpg" alt="Avatar de Teda Patrick" />
                        <Avatar src="/assets/images/profil.jpg" alt="Avatar de Teda Patrick" />
                        <Avatar Size="large" src="/assets/images/profil.jpg" alt="Avatar de Teda Patrick" />
                    </div>

                    <div className='flex items-center gap-4 p-4'>
                        <Button loading size="small"> Accent </Button>
                        <Button loading size="small" icon={{ icon: RiUser6Fill }} iconPosition="left"> Accent </Button>
                        <Button loading size="small" variant="secondary"> secondary </Button>
                        <Button loading size="small" variant="outline"> outline </Button>
                        <Button loading size="small" variant="disabled"> Accent </Button>
                        <Button loading size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
                    </div>

                    <div className='flex items-center gap-4 p-4'>
                        <Button size="small"> Accent </Button>
                        <Button size="small" icon={{ icon: RiUser6Fill }} iconPosition="left"> Accent </Button>
                        <Button size="small" variant="secondary"> secondary </Button>
                        <Button size="small" variant="outline"> outline </Button>
                        <Button size="small" variant="disabled"> Accent </Button>
                        <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
                    </div>
                    <div className='flex items-center gap-4 p-4'>
                        <Button> Accent </Button>
                        <Button variant="secondary"> secondary </Button>
                        <Button variant="outline"> outline </Button>
                        <Button variant="disabled"> Accent </Button>
                        <Button variant="ico" icon={{ icon: RiUser6Fill }} />
                    </div>
                    <div className='flex items-center gap-4 p-4'>
                        <Button size="large"> Accent </Button>
                        <Button size="large" variant="secondary"> secondary </Button>
                        <Button size="large" variant="outline"> outline </Button>
                        <Button size="large" variant="disabled"> Accent </Button>
                        <Button size="large" iconTheme="secondary" variant="ico" icon={{ icon: RiUser6Fill }} />
                        <Button size="large" variant="ico" iconTheme="gray" icon={{ icon: RiUser6Fill }} />
                        <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
                    </div>

                    <div className="space-y-4 p-4">
                        <Typography variants="display" component="div"> Coders Monkeys </Typography>
                        <Typography theme="primary" variants="h1" component="div"> Coders Monkeys </Typography>
                        <Typography theme="secondary" variants="lead" component="div"> Coders Monkeys </Typography>
                        <Typography variants="body-sm" component="div"> Coders Monkeys </Typography>
                        <Typography variants='caption1' component="div"> Coders Monkeys </Typography>
                        <Typography variants='caption4' weight="medium" component="div"> Coders Monkeys </Typography>
                    </div>
                </Container>
            </Layout>
        </>
    )
}