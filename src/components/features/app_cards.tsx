import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface DataProps {
    imgSrc: string;
    link: string;
    title: string;
    desc: string;
}

export const AppCards: FC<DataProps> = ({ imgSrc, link, title, desc }) => {
    const { t } = useTranslation();
    return (
        <a className="app-card mx-2 my-4 rounded flex-shrink-0 d-flex flex-column justify-content-start text-dark font-montserrat text-decoration-none" href={link} rel="noreferrer">
            <img alt="app_preview" className="object-fit-contain w-100 bg-info mb-4" src={imgSrc} />
            <p className="text-uppercase my-0">{t(title)}</p>
            <hr />
            <p className="">{t(desc)}</p>
            <p className="" style={{fontSize: 12}}>{t('viewSite')}</p>
        </a>
    )
};