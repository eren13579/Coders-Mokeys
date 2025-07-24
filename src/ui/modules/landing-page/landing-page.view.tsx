import { CallToActionView } from "@/ui/design/call-to-action/call-to-action.view"
import { CodersMokeysSlackView } from "./components/coders-mokeys-slack/coders-mokey-slack.view"
import { CurrentCourseCtsView } from "./components/current-course-cta/current-courese-cta.view"
import { FeaturedView } from "./components/featured/featured.view"
import { HeroTopView } from "./components/hero-top/hero-top.view"
import { HighlightListView } from "./components/highlight-list/highlight-list.view"

export const LandingPageView = () => {
    return (
        <>
            <HeroTopView />
            <FeaturedView />
            <CodersMokeysSlackView />
            <CurrentCourseCtsView />
            <HighlightListView />
            <CallToActionView />
        </>
    )
}