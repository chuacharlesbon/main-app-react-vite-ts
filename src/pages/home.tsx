import type { FC } from "react";
import useData from "../zustand/useData";
import { NavbarBootstrap } from "../components/navbar";
import { useTranslation } from "react-i18next";

interface Props {
    title?: string;
    data?: any; // optional prop
  }
  
export const Home: FC<Props> = ({ title, data }) => {

    const { t } = useTranslation();
    
    const dataState = useData();
    const dataValue = dataState.data;
    return <>
        <NavbarBootstrap />
        <div>Home Page: {title ?? "N/A"}! {data ?? "no data"} {dataValue} <button onClick={dataState.increaseData}>Increase Data</button></div>
        <p>{t('welcome')}</p>
        <div style={{ minHeight: "100dvh" }} />
    </>;
};