import { Images } from "../assets";

interface CardProps {
    imgSrc: any;
    link: string;
    title: string;
    desc: string;
}

export const AppCardsPortfolioList: CardProps[] = [
    {
        imgSrc: Images.portfolio2025,
        link: "https://portfolio.kawaiicharles.com/",
        title: "portfolio2025",
        desc: "portfolio2025Desc",
    },
    {
        imgSrc: Images.portfolio2024,
        link: "https://portfolio-chua-c.vercel.app/",
        title: "portfolio2024",
        desc: "portfolio2025Desc",
    },
    {
        imgSrc: Images.portfolio2022,
        link: "https://chuacharlesbon.github.io/portfolio-chua/",
        title: "portfolio2022",
        desc: "portfolio2025Desc",
    },
    {
        imgSrc: Images.portfolio2022B,
        link: "https://react-shopnetwork-chua.vercel.app/about",
        title: "portfolio2022B",
        desc: "portfolio2025Desc",
    },
]

export const MobileAppList: CardProps[] = [
    {
        imgSrc: Images.wynApp,
        link: "https://play.google.com/store/apps?test=A",
        title: "wynAppTitle",
        desc: "wynAppDesc",
    },
    {
        imgSrc: Images.ereportApp,
        link: "https://play.google.com/store/apps?test=B",
        title: "ereportAppTitle",
        desc: "ereportAppDesc",
    },
]