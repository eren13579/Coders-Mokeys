import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/containers/container";
import { Typography } from "@/ui/design/typographies/typography";
import Image from "next/image";
import { OnboardingTabs } from "../../tabs/onboardingTabg";

export const WelcomeStep = ({
    next, isFirstStep, isFinalStep, stepList, getCurrentStep
}: BaseComponentProps) => {
    return (
        <div className="relative h-screen pb-[91px]">
            <div className="h-full overflow-auto">
                <OnboardingTabs tabs={stepList} getCurrentStep={getCurrentStep} />
                <Container className="grid h-full grid-cols-12">
                    <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                        <div className="w-full space-y-5 pb-4.5">
                            <Typography variants="h1" component="h1">
                                Bienvenue sur l'appli des singes corders!
                            </Typography>
                            <Typography variants="body-base" component="p" theme="gray">
                                Viens trainer avec des developpeurs aussi fou 
                                que toi, montre tes projects persos et reçois
                                et recois des feedbacks constructifs (ou fais-toi carrément
                                descendre). Prèt à créer des truc incroyable?
                            </Typography>
                        </div>
                    </div>
                    <div className="relative flex items-center h-full col-span-6">
                        <div className="w-full">
                            <Image src="/assets/svg/rocket.svg" alt="illustration d'une rocket"
                            width={711} height={496} />
                        </div>
                    </div>
                </Container>
            </div>
            <OnboardingFooter
                next={next}
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
            />
        </div>
    );
};