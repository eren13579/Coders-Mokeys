import clsx from "clsx";
import Image from "next/image";

interface Props {
    Size?: "small" | "medium" | "large";
    src: string;
    alt: string;
}

export const Avatar = ({ Size = "medium", src, alt }: Props) => {

    let sizeStyle: string

    switch (Size) {
        case "small":
            sizeStyle = "w-[24px] h-[24px]";
            break;
        case "medium": //Default
            sizeStyle = "w-[34px] h-[34px]";
            break;
        case "large":
            sizeStyle = "w-[50px] h-[50px]";
            break;
    }

    return (
        <div className={clsx(sizeStyle, "bg-gray-400 rounded-full relative")}>
            <Image 
                fill
                src={src}
                alt={alt}
                className="object-cover object-center rounded-full"
            />
        </div>
    )
}