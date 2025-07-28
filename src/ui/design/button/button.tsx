import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "outline" | "disabled" | "ico" | "success" | "danger";
    icon?: IconProps;
    iconTheme?: "primary" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    type?: "submit" | "button";
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string;
    linkType?: LinkType;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    action?: Function;
    fullWith?: boolean;
}

export const Button = ({
    size = "medium",
    variant = "primary",
    icon,
    iconTheme = "primary",
    iconPosition = "right",
    type = "button",
    disabled,
    loading,
    children,
    baseUrl,
    linkType = "internal",
    fullWith = false,
    action = () => { },
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
        case "success":
            variantStyles = "bg-secondary hover:bg-secondary-400 text-white rounded";
            break;
        case "danger":
            variantStyles = "bg-alert-danger hover:bg-alert-danger/75 text-white rounded";
            break;
        case "ico":
            if (iconTheme === "primary") { //default
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
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

    const handleClick = () => {
        if (action) {
            action()
        }
    }

    const buttonContent = (
        <>
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
        </>
    );

    const buttonElement = (
        <button
            type={type}
            className={clsx(variantStyles, sizeStyles, icoSize,
                loading && "cursor-wait", fullWith && "w-full", "relative animate")}
            onClick={handleClick}
            disabled={disabled || loading ? true : false}
        >
            {buttonContent}
        </button>
    );

    if (baseUrl) {
        if (linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank">
                    {buttonElement}
                </a>
            )
        } else {
            return (
                <Link href={baseUrl}>{buttonElement}</Link>
            )
        }
    }

    return buttonElement;
}