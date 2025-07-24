import { Container } from "@/ui/components/containers/container"
import { Button } from "@/ui/design/button/button"
import { Typography } from "@/ui/design/typographies/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HighlightListView = () => {

    return (
        <Container className="py-24 space-y-10">
            <div className="flex justify-center gap-24">
                <div className="relative w-[520px] h-[350px] mt-10">
                    <Image fill src="assets/images/cake.png" alt="illustration d'un cake" />
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variants="h3" component="h2">
                        De novice a dévéloppeur a un clin d&apos;oiel !
                    </Typography>
                    <div>
                        <ListPoint>Progresse rapidement.</ListPoint>
                        <ListPoint>Inspire-toi.</ListPoint>
                        <ListPoint>Gagne de l&apos;assurance.</ListPoint>
                    </div>
                    <div className="relative inline-block">
                        <Button baseUrl="/#" icon={{ icon: RiArrowRightLine }} iconPosition="right">
                            Let&apos;s go
                        </Button>
                        <Image className="absolute bottom-5 right-7" src="assets/svg/cursor.svg" alt="un curseur..." width={25} height={27} />
                    </div>
                </div>
            </div>

            <div className="flex flex-row-reverse justify-center gap-24">
                <div className="relative w-[520px] h-[350px] mt-10">
                    <Image fill src="assets/images/toupie.png" alt="illustration d'une toupie" />
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variants="h3" component="h2">
                        Booste ta carrière de dévéloppeur
                    </Typography>
                    <div>
                        <ListPoint>Partage tes projects, obtiens des feedbacks.</ListPoint>
                        <ListPoint>Connecte-toi, élargis ton réseau pro!</ListPoint>
                        <ListPoint>Reste inpiré, motivé avec notre commauté.</ListPoint>
                    </div>
                    <div className="relative inline-block">
                        <Button variant="secondary" baseUrl="/#" icon={{ icon: RiArrowRightLine }} iconPosition="right">
                            Démarrer
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

interface Props {
    children: React.ReactNode
}

const ListPoint = ({ children }: Props) => {

    return (
        <div className="space-y-3">
            <div className="flex item-center gap-2">
                <RiCheckboxCircleLine size={24} className="mt-1 text-secondary" />
                <Typography variants="body-lg" component="span">
                    {children}
                </Typography>
            </div>
        </div>
    )
}