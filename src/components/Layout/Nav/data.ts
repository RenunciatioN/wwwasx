import { mainRoutes } from "@/constants/routes.constants";
import {
    chartIcon,
    diamondIcon,
    inboxIcon,
    moneyBagIcon,
    questionsIcon,
} from "@/assets/icons";

export interface IMenuItem {
    name: string,
    path: string
    icon: string
}

export const navList = [
    {
        name: "Become a VIP",
        path: mainRoutes.becomeVip,
        icon: diamondIcon,
    },
    {
        name: "Upcoming giveaway",
        path: mainRoutes.upcomingGiveaway,
        icon: chartIcon,
    },
    {
        name: "About Us",
        path: mainRoutes.about,
        icon: questionsIcon,
    },
    {
        name: "Contact Us",
        path: mainRoutes.contact,
        icon: inboxIcon,
    },
    {
        name: "Store",
        path: mainRoutes.store,
        icon: moneyBagIcon,
    },
];
