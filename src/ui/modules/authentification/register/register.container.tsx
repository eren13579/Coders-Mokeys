import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view"
import { RegisterFormFielsType } from "@/types/froms";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { UserToggle } from "@/hooks/use-toggle";

export const RegisterContainer = () => {
    const {value: isLoading, setValue:setIsLoading} = UserToggle();

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFielsType>();

    const handleCreateUserAuth =  async ({email, password, how_did_hear}: RegisterFormFielsType) => {
        const {error, data} = await  firebaseCreateUser(email, password);
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return 
        }

        toast.success("Bienvenu sur l'app des singes coders");
        setIsLoading(false);
        reset();
    }

    const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
        setIsLoading(true)
        const { password } = formData;

        if (password.length <= 7) {
            setError("password", {
                type: "manual",
                message: "ton mot de passe dois comporter au minimun 8 caractère",
            });
            return
        }
       handleCreateUserAuth(formData)
    };

    return (

        <RegisterView
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