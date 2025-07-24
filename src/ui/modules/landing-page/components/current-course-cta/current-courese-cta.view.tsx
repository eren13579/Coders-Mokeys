import { Container } from "@/ui/components/containers/container"
import { Typography } from "@/ui/design/typographies/typography"
import Image from "next/image"
import { RiPlayCircleLine } from "react-icons/ri"

export const CurrentCourseCtsView = () => {

    return (
        <div className="bg-gray-300">
            <Container className="py-24 text-center">
                <Typography variants="h2" component="h2" className="mb-2.5">
                    Formation React.Js gratuite
                </Typography>
                <Typography variants="lead" component="h3" className="mb-5">
                    Apprendre a coder l&apos;app des singes coders !
                </Typography>
                <Typography variants="caption3" component="p" theme="gray" className="mb-16">
                    Si tu veux un CV plus sexy que ton ex, suis cette formation complète !
                </Typography>
                <a href="" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div className="relative text-white flex flex-col items-center justify-center gap-2 h-full bg-gray z-10 rounded opacity-0 hover:opacity-95 animate">
                            <RiPlayCircleLine size={42} />
                            <Typography variants="caption2" theme="white" className="uppercase" weight="medium">
                                Lire la formation
                            </Typography>
                        </div>
                        <Image fill src="assets/images/coders-monkeys.png" alt="" className="objet-cover object-center rounded" />
                    </div>
                </a>
            </Container>
        </div>
    )
}