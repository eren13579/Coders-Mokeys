import { Container } from "@/ui/components/containers/container"
import { Typography } from "../typographies/typography"
import { Button } from "../button/button"
import { LinkTypes } from "@/lib/link-type"
import Image from "next/image"

export const CallToActionView = () => {

    return (
        <div className="relative overflow-hidden bg-primary">
            <Container className="py-20">
                <div className="relative z-10 max-w-3xl space-y-6">
                    <Typography variants="h2" theme="white" component="h2">
                        N&apos;attend pas pour développer tes competences...
                    </Typography>

                    <div>
                        <Button variant="success" baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
                            Formation React.js gratuite
                        </Button>
                    </div>
                </div>
                <div>
                    <Image width={1210} height={1210} src="assets/images/bombe.png" alt="une bombe..."
                    className="absolute -bottom-[620px] right-[2px]" />
                </div>
            </Container>
        </div>
    )
}