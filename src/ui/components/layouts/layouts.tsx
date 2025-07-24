import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigations/footer";
import { Navigation } from "../navigations/navigation";

interface Props {
    children: React.ReactNode;
    isDisplayBreadcrumbs?: boolean;
}

export const Layout = ({children, isDisplayBreadcrumbs = true}: Props) => {
    return (
        <>
            <Navigation />
            {isDisplayBreadcrumbs && <Breadcrumbs />}
            {children}
            <Footer />
        </>
    )
}