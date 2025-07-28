import { firebaseLogoutUser } from "@/api/authentication";
import { Box } from "@/ui/design/box/box"
import { Button } from "@/ui/design/button/button";
import { Typography } from "@/ui/design/typographies/typography";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";

export const UserAccountNavigation = () => {
    const router = useRouter();

    const handleLogoutUser = async () => {
        const { error } = await firebaseLogoutUser();
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("A bientot sur Coders Mokeys");
        router.push("/connexion");
    }

    return (
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <Typography variants="caption2" weight="medium">
                    <ActiveLink href="/mon-espace">Mon Compte</ActiveLink>
                </Typography>
                <Typography variants="caption2" weight="medium">
                    <ActiveLink href="/mon-espace/mes-projets">Mes Projets</ActiveLink>
                </Typography>
            </div>
            <Button action={handleLogoutUser} variant="danger">
                Déconnexion
            </Button>
        </Box>
    )
}