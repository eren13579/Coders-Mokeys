import { Container } from "@/ui/components/containers/container";
import { SocialNetworksButton } from "@/ui/components/navigations/social-networks-button";
import { Button } from "@/ui/design/button/button";
import { Typography } from "@/ui/design/typographies/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface FeaturesListInstaface {
    imagePath: string,
    imageAlt: string,
    title: string,
    description: string,
}

const featuresData: FeaturesListInstaface[] = [
    {
        imagePath: "/assets/images/disk.png",
        imageAlt: "illustration",
        title: "Ressources",
        description: "Consulte et partage des ressources pour les dévéloppeurs front-end.",
    },
    {
        imagePath: "/assets/images/gamepad.png",
        imageAlt: "illustration",
        title: "Entrainement",
        description: "Entrain toi a devenir meilleur et trouve de l'inspiration.",
    },
    {
        imagePath: "/assets/images/loupgspeaker.png",
        imageAlt: "illustration",
        title: "Visibilité",
        description: "Expose tes projets et creer toi des possibilités.",
    },
    {
        imagePath: "/assets/images/compass.png",
        imageAlt: "illustration",
        title: "Relations",
        description: "Connecte toi avec d'autres développeurs et élargis ton réseau.",
    },
]

export const FeaturedView = () => {

    const featuredList = featuresData.map((feature) => (
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
            <div className="relative w-[100px] h-[100px] rounded-full mb-6 p-10 overflow-hidden">
                <Image fill src={feature.imagePath} alt={feature.imageAlt} className="object-scale-down blur-2xl" />
                <Image fill src={feature.imagePath} alt={feature.imageAlt} className="object-scale-down" />
            </div>
            <Typography variants="lead" component="h3" weight="medium" className="text-center mb-2.5">
                {feature.title}
            </Typography>
            <Typography variants="body-base" component="p" theme="gray" className="text-center">
                {feature.description}
            </Typography>
        </div>
    ));

    return (
        <div className="bg-gray-300">
            <Container className="grid grid-cols-12 gap-24 py-24">
                <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
                <div className="col-span-5 flex flex-col justify-between gap-10">
                    <div>
                        <Typography variants="h2" component="h2" className="mb-5">
                            L&apos;endroit le plus cool pour devenir un dévéloppeur.
                        </Typography>
                        <Typography variants="body-lg" component="p" theme="gray" className="mb-8">
                            Du partage, des connexions et des formations notre app gère tout sa pour
                            toi. Rejoins la communauté et grimpe en grade. Let&apos;s go !
                        </Typography>
                        <Button variant="secondary" baseUrl="/#" icon={{ icon: RiArrowRightLine }} iconPosition="right">
                            Commencer
                        </Button>
                    </div>
                    <div>
                        <Typography variants="caption3" component="div" theme="gray" className="mb-4">
                            Nos réseaux sociaux
                        </Typography>
                        <SocialNetworksButton />
                    </div>    
                </div>
            </Container>
        </div>
    );
};