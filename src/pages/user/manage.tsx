import type { FC } from "react";
import { useTranslation } from "react-i18next";
import useData from "../../zustand/useData";

interface Props {
    title?: string;
    data?: any; // optional prop
  }
  
export const ManageUser: FC<Props> = ({ title, data }) => {

    const { t } = useTranslation();
    
    const dataState = useData();
    const dataValue = dataState.data;
    return <>
        <div>Manage User Page: {title ?? "N/A"}! {data ?? "no data"} {dataValue} <button onClick={dataState.increaseData}>Increase Data</button></div>
        <p>{t('welcome')}</p>
        <div style={{ minHeight: "100dvh" }} />
    </>;
};