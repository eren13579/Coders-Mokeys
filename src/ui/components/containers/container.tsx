import clsx from "clsx";
import { Children } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className} : Props) => {
    return (
        <div className={clsx(className, "w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10")}>
            {children}
        </div>
    )
}