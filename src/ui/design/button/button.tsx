import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "outline" | "disabled" | "ico";
    icon?: IconProps;
    iconTheme?: "primary" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
}

export const Button = ({
    size = "medium",
    variant = "primary",
    icon,
    iconTheme = "primary",
    iconPosition = "right",
    disabled,
    loading,
    children,
}: Props) => {

    let variantStyles: string = "", sizeStyles: string = "", icoSize: number = 0;

    switch (variant) {
        case "primary": // Default primary button styles
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-800 rounded";
            break;
        case "disabled":
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 cursor-not-allowed rounded";
            break;
        case "ico":
            if (iconTheme === "primary") { //default
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-gray-700 hover:bg-gray-600/50 text-white rounded-full";
            }
            break;
    }

    switch (size) {
        case "small":
            sizeStyles = `text-caption3 font-medium ${variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"
                }`;
            icoSize = 18;
            break;
        case "medium": // Default
            sizeStyles = `text-caption2 font-medium ${variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"
                }`;
            icoSize = 20;
            break;
        case "large":
            sizeStyles = `text-caption1 font-medium ${variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"
                }`;
            icoSize = 24;
            break;
    }

    return (
        <>
            <button
                type="button"
                className={clsx(variantStyles, sizeStyles, icoSize, loading && "cursor-wait", "relative")}
                onClick={() => console.log("Button clicked")}
                disabled={disabled}
            >

                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {
                            variant === "primary" || variant === "ico" ? 
                            (<Spinner variant="white" size="small" />) : 
                            (<Spinner size="small" />)
                        }
                    </div>
                )}

                <div className={clsx(loading && "invisible")}>
                    {icon && variant === "ico" ? (<>{
                        <icon.icon size={icoSize} />
                    }</>) : (
                        <div className={clsx(icon && "flex items-center gap-2")}>
                            {icon && iconPosition === "left" && (
                                <icon.icon size={icoSize} />
                            )}
                            {children}
                            {icon && iconPosition === "right" && (
                                <icon.icon size={icoSize} />
                            )}
                        </div>
                    )}
                </div>

            </button>
        </>
    );
}