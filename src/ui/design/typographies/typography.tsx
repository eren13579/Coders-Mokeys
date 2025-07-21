import clsx from "clsx";

interface Props {
    variants?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "lead" | "body-lg" | "body-base" | "body-sm" | "caption1" | "caption2" | "caption3" | "caption4";
    component?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    theme?: "white" | "black" | "primary" | "secondary" | "gray";
    weight?: "regular" | "medium" | "semibold" | "bold";
    className?: string;
    children?: React.ReactNode;
}

export const Typography = ({
    variants = "h3",
    component: Component = "div",
    theme = "black",
    weight = "regular",
    className,
    children,
}: Props) => {

    let varianteStyles: string = "", colorStyles: string = "";

    switch (variants) {
        case "display":
            varianteStyles = "text-8xl";
            break;
        case "h1":
            varianteStyles = "text-7xl";
            break;
        case "h2":
            varianteStyles = "text-6xl";
            break;
        case "h3": // Default case for h3
            varianteStyles = "text-5xl";
            break;
        case "h4":
            varianteStyles = "text-4xl";
            break;
        case "h5":
            varianteStyles = "text-3xl";
            break;
        case "lead":
            varianteStyles = "text-2xl";
            break;
        case "body-lg":
            varianteStyles = "text-lg";
            break;
        case "body-base":
            varianteStyles = "text-base";
            break;
        case "body-sm":
            varianteStyles = "text-sm";
            break;
        case "caption1":
            varianteStyles = "text-caption1";
            break;
        case "caption2":
            varianteStyles = "text-caption2";
            break;
        case "caption3":
            varianteStyles = "text-caption3";
            break;
        case "caption4":
            varianteStyles = "text-caption4";
            break;
    }

    switch (theme) {
        case "black": // Default
            colorStyles = "text-gray"
            break;
        case "white":
            colorStyles = "text-white"
            break;
        case "gray":
            colorStyles = "text-gray-700"
            break;
        case "primary":
            colorStyles = "text-primary"
            break;
        case "secondary":
            colorStyles = "text-secondary"
            break;
    }


    return <Component className={clsx(
        varianteStyles,
        colorStyles,
        weight === "medium" && "font-medium",
        className,
    )}>
        {children}
    </Component>
}