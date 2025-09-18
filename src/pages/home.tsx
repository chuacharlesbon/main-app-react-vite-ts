import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Images } from "../assets";
import { IntersectionObserverDiv } from "../components/core/containers/Div";
import { AppCardsPortfolioList, MobileAppList } from "../constants/app_cards_data";
import { AppCards } from "../components/features/app_cards";

export const Home: FC = () => {

    const { t } = useTranslation();
    return <div className="bg-grey m-0">
        <section className="p-4 min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-white fade-in-delayed-1000ms">{t('welcome')}</h3>
            <img alt="avatar" src={Images.avatarHappy} className="object-fit-cover fade-in-delayed" width={250} height={300} />
            <a className="btn btn-light fw-bold fade-in-delayed-500ms mt-4" href="https://portfolio.kawaiicharles.com" rel="noreferrer">
                {t('portfolioSite')}
            </a>
        </section>

        <section>
            <IntersectionObserverDiv className="px-4 py-4 min-vh-100 d-flex flex-column justify-content-start align-items-center">
                <h3 className="text-white my-5 fade-in-delayed">{t('portfolioApps')}</h3>
                <div className="row w-100 fade-in-delayed-500ms">
                    <div className="col col-12 col-md-10 col-lg-8 col-xl-6 d-flex flex-row justify-content-start align-itmes-center mx-auto" style={{ overflowX: "scroll" }}>
                        {
                            AppCardsPortfolioList.map((app) => <AppCards desc={app.desc} key={app.link} imgSrc={app.imgSrc} link={app.link} title={app.title} />
                            )
                        }
                    </div>
                </div>
            </IntersectionObserverDiv>
        </section>

        <section>
            <IntersectionObserverDiv className="px-4 py-4 min-vh-100 d-flex flex-column justify-content-start align-items-center">
                <h3 className="text-white my-5 fade-in-delayed">{t('moreApps')}</h3>
                <div className="row w-100 fade-in-delayed-500ms">
                    <div className="col col-12 col-md-10 col-lg-8 col-xl-6 d-flex flex-row justify-content-start align-itmes-center mx-auto" style={{ overflowX: "scroll" }}>
                        {
                            MobileAppList.map((app) => <AppCards desc={app.desc} key={app.link} imgSrc={app.imgSrc} link={app.link} title={app.title} />
                            )
                        }
                    </div>
                </div>
            </IntersectionObserverDiv>
        </section>
    </div>;
};