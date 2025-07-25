import { ForgetPasswordFormFielsType } from "@/types/froms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPasswordView } from "./forgetPassword.view"

export const ForgetPasswordContainer = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<ForgetPasswordFormFielsType>();

    const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (formData) => {
        setIsLoading(true)
        console.log('formData', formData)
    }

    return (
        <ForgetPasswordView
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