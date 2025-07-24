import { Container } from "@/ui/components/containers/container"
import { Button } from "@/ui/design/button/button"
import { Typography } from "@/ui/design/typographies/typography"
import Image from "next/image"

export const HeroTopView = () => {
    return (
        <Container className="relative pt-40 pb-52 overflow-hidden">
            <div className="w-full max-w-2xl space-y-5">
                <Typography variants="h1" component="h1" className="max-w-lg">
                    Rejoindre les singes coders!
                </Typography>
                <Typography variants="body-lg" theme="gray" component="p" className="max-w-xl">
                    Ici on se prend pas la tete mais on code comme des betes! 
                    Rejoins notre communauté de développeurs front-end passionnés 
                    et améliore tes compétences tout en t&apos;amusant.
                </Typography>
                <div className="space-x-5 pt-2.5">
                    <Button baseUrl="">Commencer</Button>
                    <Button baseUrl="" variant="secondary">En savoir plus</Button>

                </div>
            </div>
            <Image src="/assets/svg/rocket.svg"
                alt="Ilustration d'une Rocket pour materialiser l'evolution du level des developpeurs front-end"
                width={510}
                height={400}
                className="absolute top-40 right-10 z-0" />
        </Container>
    )
}