import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { OnboardingTabs } from "../../tabs/onboardingTabg";
import { Container } from "@/ui/components/containers/container";
import { Typography } from "@/ui/design/typographies/typography";
import { ProfileStepFrom } from "./profile-step-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFielsType } from "@/types/froms";
import { UserToggle } from "@/hooks/use-toggle";
import { firestoreUpdateDocument } from "@/api/firestore";
import { userAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const ProfileStep = ({
  prev,
  next,
  isFirstStep,
  isFinalStep,
  stepList,
  getCurrentStep,
}: BaseComponentProps) => {
  const { authUser } = userAuth();

  const { value: isLoading, setValue: setLoaging } = UserToggle();

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFielsType>();

  const { displayName, expertise, biography } = authUser.userDocument;

  // Display value is exist...
  useEffect(() => {

    const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] = [
      "displayName",
      "expertise",
      "biography"
    ];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }

  })

  const handleUpdateUserDocument = async (
    formData: OnboardingProfileFormFielsType
  ) => {
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );
    if (error) {
      setLoaging(false);
      toast.error(error.message);
      return
    }

      setLoaging(false);
      reset();
      next();
  };

  const onSubmit: SubmitHandler<OnboardingProfileFormFielsType> = async (
    formData
  ) => {
    setLoaging(true);

    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.biography
    ) {
      await handleUpdateUserDocument(formData);
    }
    setLoaging(false);
    next();
  };

  return (
    <div className="relative h-screen pb-[91px]">
      <div className="h-full overflow-auto">
        <OnboardingTabs tabs={stepList} getCurrentStep={getCurrentStep} />
        <Container className="grid h-full grid-cols-12">
          <div className="relative z-10 flex items-center h-full col-span-6 py-10">
            <div className="w-full space-y-5 pb-4.5">
              <Typography variants="h1" component="h1">
                Présente-toi!
              </Typography>
              <Typography variants="body-base" component="p" theme="gray">
                Dis-nous tous sur toi ! Remplis notre formulaire de présentation
                pour qu'on puisse mieux te connaitre. On veux savoir qui tu es,
                ce que tu fais et comment tu as atteris ici. plus on en saura
                sur toi, mieux on pourra personnaliser ton expérience sur notre
                plateforme.
              </Typography>
            </div>
          </div>
          <div className="relative flex items-center h-full col-span-6">
            <div className="flex justify-end w-full">
              <ProfileStepFrom
                form={{
                  errors,
                  control,
                  register,
                  handleSubmit,
                  onSubmit,
                  isLoading,
                }}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prev={prev}
        next={handleSubmit(onSubmit)}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </div>
  );
};
