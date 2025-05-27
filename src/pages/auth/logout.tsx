import { useEffect, useRef, type FC } from "react";
import { logout } from "../../services/user";
import { navigateTo } from "../../services/navigateService";

export const Logout: FC = () => {

    const hasLoggedOut = useRef(false);

    const fetchData = async () => {
        if (!hasLoggedOut.current) {
            hasLoggedOut.current = true;
            await logout();
            navigateTo("/test");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return <>
        <p>Please wait</p>
        <p>Logging out ...</p>
        <div style={{ minHeight: "100dvh" }} />
    </>;
};