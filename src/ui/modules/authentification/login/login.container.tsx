import { LoginFormFielsType } from "@/types/froms";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view"

import { UserToggle } from "@/hooks/use-toggle";
import { firebaseSingInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
    const router = useRouter()
    const { value: isLoading, setValue: setIsLoading } = UserToggle();

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<LoginFormFielsType>();

    const handlSingInUser = async ({email, password}: LoginFormFielsType) => {
        const { error } = await firebaseSingInUser(email, password);
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success("Bienvenue sur Coders Mokeys");
        setIsLoading(false);
        reset();
        router.push("/mon-espace");
    }

    const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
        setIsLoading(true);
        const { password } = formData;
        if (password.length <= 7) {
            setError("password", {
                type: "manuel",
                message: "Ton mot de passe dois comporte au minimun 8 caractères"
            })
        setIsLoading(false);
        return;    
        }
        handlSingInUser(formData);
    }
    return (
        <LoginView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    )
}