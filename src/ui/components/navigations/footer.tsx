import { Typography } from "@/ui/design/typographies/typography"
import { Container } from "../containers/container"
import Image from "next/image"
import { footerLinsk } from "./app-links";
import { v4 as uuidv4 } from 'uuid';
import { ActiveLink } from "./active-link";
import { FooterLins } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworksButton } from "./social-networks-button";

export const Footer = () => {

    const Years = new Date().getFullYear();
    const footerNavigationList = footerLinsk.map((elements) => (
        <FooterLinks key={uuidv4()} data={elements} />
    ));

    return (
        <div className="bg-gray">
            <Container className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography variants="caption1" theme="white" weight="medium">
                        Formations gratuites
                    </Typography>
                    <Typography variants="caption3" theme="gray">
                        Abonne-toi a la chaine!
                    </Typography>
                    <a href="https://www.youtube.com/watch?v=2ehqBu_dDsk&list=PLtKaauZVThjAe3U3AQqa-C1fLwHR48aMM" 
                        className="p-5" target="_blank">
                        <Image src="/assets/svg/youtube.svg"
                            width={70} height={70} alt="Remote Mokeys | Youtube" />
                    </a>
                </div>
                <div className="flex gap-7">{footerNavigationList}</div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800" />
                <div className="flex justify-between items-center">
                    <Typography variants="caption4" theme="gray">
                        {`Copyright @ ${Years} | Propulsed by `}
                        <a href="https://www.instagram.com/fastbooster.afrq/" target="_blank" className="underline">
                            Teda Patrick
                        </a>
                        {` - Fastbooster`}
                    </Typography>
                    <div className="">
                        <SocialNetworksButton theme="gray"/>
                    </div>
                </div>
            </Container>
        </div>
    )
};

interface footerLinkProps {
    data: FooterLins;
}

const FooterLinks = ({data}: footerLinkProps) => {
    const linkList = data.links.map((link) => (
        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            )}
            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">{link.label}</a>
            )}
        </div>
    ))
    return (
        <div className="min-w-[190px]">
            <Typography theme="white" variants="caption2" weight="medium" className="pb-5">
                {data.label}
            </Typography>
            <Typography theme="gray" variants="caption3" className="space-y-4">
                {linkList}
            </Typography>
        </div>
    )
}