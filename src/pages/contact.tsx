import type { FC } from "react";
import useData from "../zustand/useData";

interface Props {
    title?: string;
    data?: any; // optional prop
}

export const Contact: FC<Props> = ({ title, data }) => {
    const dataState = useData();
    const dataValue = dataState.data;
    return <>
        <div>Contact Page: {title ?? "N/A"}! {data ?? "no data"} {dataValue} <button onClick={dataState.increaseData}>Increase Data</button></div>
        <div style={{ minHeight: "100dvh" }} />
    </>;
};