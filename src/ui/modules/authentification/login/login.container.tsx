import { LoginFormFielsType } from "@/types/froms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view"


export const LoginContainer = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<LoginFormFielsType>();

    const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
        setIsLoading(true)
        console.log('formData', formData)
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