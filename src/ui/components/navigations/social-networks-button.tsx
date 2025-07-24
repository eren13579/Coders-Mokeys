import { Button } from "@/ui/design/button/button"
import { footerSociauxLinks } from "./app-links"
import { v4 as uuidv4 } from "uuid"
import clsx from "clsx";
import { RiInstagramFill } from "react-icons/ri";

interface Props {
    theme?: "primary" | "gray" | "secondary";
    className?: string;
}

export const SocialNetworksButton = ({className, theme = 'primary'}: Props) => {

    const icoList = footerSociauxLinks.map((socialNetwork) => (
        <Button key={uuidv4()}  variant="ico" iconTheme={theme} icon={{
            icon: socialNetwork.icon ? socialNetwork.icon : RiInstagramFill,
        }}
        baseUrl={socialNetwork.baseUrl}
        linkType={socialNetwork.type}
        /> 
    ))

    return (
        <div className={clsx(className, "flex items-center gap-2.5")}>
            {icoList}
        </div>
    );
}

