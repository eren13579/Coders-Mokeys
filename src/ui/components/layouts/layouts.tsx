import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigations/footer";
import { Container } from "../containers/container"
import { Navigation } from "../navigations/navigation";
import { UserAccountNavigation } from "../navigations/user-account-navigation";
import { Session } from "../sessions/session";
import { SessionStatusType } from "@/types/session-status-type";

interface Props {
    children: React.ReactNode;
    isDisplayBreadcrumbs?: boolean;
    withSidebar?: boolean;
    sessionStatus?: SessionStatusType;
}

export const Layout = ({children, isDisplayBreadcrumbs = true, withSidebar, sessionStatus}: Props) => {

    let view: React.ReactElement = <></>;

    if(withSidebar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3">
                        <UserAccountNavigation />
                    </div>
                    <div className="col-span-9">{children}</div>
                </div>
            </Container>
        )
    } else {
        view = <>{children}</>;
    }

    return (
        <Session sessionStatus={sessionStatus}>
            <Navigation />
            {isDisplayBreadcrumbs && <Breadcrumbs />}
            {view}
            <Footer />
        </Session>
    )
}