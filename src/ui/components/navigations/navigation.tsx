import { Logo } from "@/ui/design/logo/logo"
import { Container } from "../containers/container"
import { Typography } from "@/ui/design/typographies/typography"
import { Button } from "@/ui/design/button/button"
import Link from "next/link"
import { ActiveLink } from "./active-link"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props { }

export const Navigation = ({ }: Props) => {
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <Logo Size="small" />
                        <div className="flex flex-col">
                            <div className="text-gray font-extrabold text-[24px]">
                                Coders Monkeys
                            </div>
                            <Typography variants="caption4" theme="gray" component="span">
                                Trouve de l&#39;inspiration & recoit des feedbacks!
                            </Typography>
                        </div>
                    </div>
                </Link>

                <div className="flex items-center gap-7">
                    <Typography variants="caption3" component="div" className="flex items-center gap-7">
                        <ActiveLink href="/design-system">Design System</ActiveLink>
                        <ActiveLink href="/projects">Project</ActiveLink>
                        <ActiveLink href="/formations">Formation</ActiveLink>
                        <ActiveLink href="/contacts">Contact</ActiveLink>
                    </Typography>

                    <div className="flex items-center gap-2">
                        <Button baseUrl="/connexion" size="small">Connexion</Button>
                        <Button baseUrl="/connexion/inscription" size="small" variant="secondary">Rejoindre</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}