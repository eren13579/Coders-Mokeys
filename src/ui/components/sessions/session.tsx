import { userAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusType } from "@/types/session-status-type";
import { ScreenSpinner } from "@/ui/design/spinner/screen-spinner";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusType;
}

export const Session = ({ children, sessionStatus }: Props) => {
    const { authUserIsLoading, authUser } = userAuth();
    const router = useRouter();

    const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;
    
    const shouldRedirectToOnboarding = () => {
        return (
            !authUserIsLoading && 
            authUser && 
            !onboardingIsCompleted && 
            router.asPath !== "/onboarding"
        );
    };

    const shouldNotRedirectToOnboarding = () => {
        return (
            !authUserIsLoading && 
            authUser && 
            onboardingIsCompleted && 
            router.asPath === "/onboarding"
        );
    };

    if (shouldRedirectToOnboarding()) {
        router.push("/onboarding");
        return <ScreenSpinner />;
    }

    if (shouldNotRedirectToOnboarding()) {
        router.push("/mon-espace");
        return <ScreenSpinner />;
    }

    if (sessionStatus === GUEST && !authUserIsLoading) {
        if (!authUser) {
            return <> {children} </>
        } else {
            router.push("/mon-espace");
        }
    }

    if (sessionStatus === REGISTERED && !authUserIsLoading) {
        if (authUser) {
            return <> {children} </>
        } else {
            router.push("/connexion");
        }
    }

    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>;
    }
    return (
        <ScreenSpinner />
    )
}