import { Container } from "@/ui/components/containers/container"
import { Box } from "@/ui/design/box/box"
import { Typography } from "@/ui/design/typographies/typography"
import Link from "next/link"
import Image from "next/image"
import { ForgetPasswordForm } from "./forgetPassword.form"
import { FormsType } from "@/types/froms"

interface Props {
    form: FormsType;
}

export const ForgetPasswordView = ({form}: Props) => {

    return (
        <Container className="grid grid-cols-2 gap-20 mb-32">
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    <Image src="/assets/images/character-3.png" fill alt="Description de l'illustration"
                        className="object-scale-down" />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding_x="px-5">
                    <div className="flex items-center justify-between">
                        <Typography variants="h5" component="h1">
                            Mot de passe perdu ?
                        </Typography>
                        <Typography variants="caption4" component="span" theme="primary">
                            <Link href="/connexion" target="">Connexion</Link>
                        </Typography>
                    </div>
                    <ForgetPasswordForm form={form} />
                </Box>
            </div>
        </Container>
    )
}