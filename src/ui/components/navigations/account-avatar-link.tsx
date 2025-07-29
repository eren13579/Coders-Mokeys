import { userAuth } from "@/context/AuthUserContext"
import { Avatar } from "@/ui/design/avatar/avatar"
import { Typography } from "@/ui/design/typographies/typography"
import Link from "next/link"

export const AccountAvatarLink = () => {
    const {authUser} = userAuth();

    const {photoURL, displayName} = authUser;

    return (
        <Link href="/mon-espace" className="flex items-center gap-2 ">
            <Avatar src={photoURL} alt={displayName ? `avatar de ${displayName}` : "avatar de l'utilisateur"} Size="large" />
            <div className="max-w-[160px]">
                <Typography variants="caption2" weight="medium" className="truncate">
                    {displayName ? displayName : "Bienvenue"}
                </Typography>
                <Typography variants="caption4" weight="medium" theme="gray">
                    Mon compte
                </Typography>
            </div>
        </Link>
    )
}