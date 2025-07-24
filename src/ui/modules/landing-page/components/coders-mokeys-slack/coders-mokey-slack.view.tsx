import { LinkTypes } from "@/lib/link-type"
import { Container } from "@/ui/components/containers/container"
import { Button } from "@/ui/design/button/button"
import { Logo } from "@/ui/design/logo/logo"
import { Typography } from "@/ui/design/typographies/typography"
import Image from "next/image"

export const CodersMokeysSlackView = () => {
    return (
        <Container className="flex justify-between ">
            <div className="flex flex-col justify-center max-w-2xl space-y-5">
                <div className="flex items-center gap-7">
                    <Logo Size="very-small" />
                    <Typography variants="caption2" weight="medium" component="span">
                        Coders Monkeys
                    </Typography>
                </div>
                <Typography variants="h2" component="h2">
                    Rejoins-nous sur Instagram
                </Typography>
                <Typography variants="body-lg" component="p" theme="gray" className="max-w-lg">
                    Rejoins-nous et obtiens de l&apos;aide, des conseils et pourquoi pas 
                    nouveaux potes !
                </Typography>
                <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL} >
                    Rejoindre le groupe d&apos;aide
                </Button>
            </div>
            <div className="relative w-[600px] h-[600px]">
                <Image fill src="/assets/images/logo-slack.png" alt="Groupe slack Coders Mokeys" />
            </div>
        </Container>
    )
}