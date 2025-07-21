import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "white";
}

export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {

    let variantStyles: string = "", sizeStyles: string = "";

    switch (size) {
        case "small":
            sizeStyles = "w-5 h-5";
            break;
        case "medium": // Default
            sizeStyles = "w-8 h-8";
            break;
        case "large":
            sizeStyles = "w-12 h-12";
            break;
    }

    switch (variant) {
        case "primary": // Default
            variantStyles = "text-primary";
            break;
        case "white":
            variantStyles = "text-white";
            break;
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            role="spinner"
            preserveAspectRatio="xMidYMid"
            className={clsx(sizeStyles, variantStyles, "animate-spin")}>
            <g>
                <circle 
                    stroke-dasharray="141.37166941154067 49.12388980384689"
                    r="30" stroke-width="10" stroke="currentColor" fill="none" cy="50" cx="50"
                    transform="matrix(1,0,0,1,0,0)"
                    // style={{
                    //     fill: "none",
                    //     stroke: "rgb(95, 98, 226)",
                    //     transform: "matrix(1, 0, 0, 1, 0, 0)",
                    //     animation: "none"
                    // }} 
                />
            </g>
        </svg>
    )
}