import { FC } from "react";

import { HowItWorks } from "./HowItWorks";
import { WeDoThings } from "./WeDoThings";
import { UpcomingGiveaway } from "./UpcomingGiveaway";
import { Header } from "./header";
import { AllPrize } from "./allPrize";
import { OurWinners } from "./OurWinners";
import { Questions } from "../../Questions";

const Home: FC = () => {
    return (
        <div>
            <Header />
            <AllPrize />
            <HowItWorks />
            <WeDoThings />
            <UpcomingGiveaway />
            <OurWinners />
            <Questions />
        </div>
    );
};

export { Home };
