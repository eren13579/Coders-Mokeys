import clsx from "clsx";
import { Typography } from "../typographies/typography";

interface Props {
    label?: string;
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password";
    register: any;
    errors: any;
    errorMessage: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;
}

export const Input = ({
    label,
    isLoading,
    placeholder,
    type = "text",
    register,
    errors,
    errorMessage = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutocompleted = false,
}: Props) => {

    return (
        <div className="space-y-2">
            {label && (
                <Typography variants="caption4" component="div" theme={errors[id] ? "danger" : "gray-600"}>
                    {label}
                </Typography>
            )}
            <input type={type} placeholder={placeholder} className={clsx(
                isLoading && "cursor-not-allowed",
                errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
                "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary")}
                disabled={isLoading} {...register(id, {
                    required: {
                        value: required,
                        message: errorMessage
                    }
                })} autoComplete={isAutocompleted ? "on" : "off"}
            />
            {errors[id] && (
                <Typography variants="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    )
}