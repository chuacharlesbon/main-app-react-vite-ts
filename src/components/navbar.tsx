import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { FaLanguage } from "react-icons/fa";
import useData from "../zustand/useData";
import { useState, type FC } from "react";
import { Flags, Logo } from "../assets";
import { MdMenu } from "react-icons/md";
import { Button, Offcanvas } from "react-bootstrap";

interface Props {
    title?: string;
    data?: any; // optional prop
}

interface AppProps {
    className?: string;
}

export const NavbarCustom: FC<Props> = ({ title, data }) => {
    const dataState = useData();
    const dataValue = dataState.data;
    return <div>
        <Link to="/">Home</Link>
        <Link to="/landing">Landing</Link>
        <Link to="/test">Test</Link>
        <span>{dataValue} {title}{data}</span>
    </div>;
};

export const NavbarBootstrap: FC = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const LanguageSwitcher = () => {
        const { i18n } = useTranslation();

        const changeLanguage = (lng: string) => {
            i18n.changeLanguage(lng);
        };

        return (
            <Dropdown align="end">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <FaLanguage className="fs-3 text-white me-2" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => changeLanguage('en')}>
                        <img alt="us-icon" className="me-2" src={Flags.usIcon} style={{ width: '20px', height: '20px' }} />
                        English
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage('ja')}>
                        <img alt="flag-icon" className="me-2 rounded-pill" src={Flags.japanIcon} style={{ width: '20px', height: '20px' }} />
                        日本語
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    const LeftDrawer = () => {
        return (
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <AppLogo className="mx-2 mb-4 text-dark"/>
                    <Link className="btn btn-light d-block text-start bg-white w-auto" to="/" onClick={handleClose}>
                        <p className="mx-0 my-1 lh-1">Home</p>
                    </Link>
                    <Link className="btn btn-light d-block text-start bg-white w-auto" to="/contact" onClick={handleClose}>
                        <p className="mx-0 my-1 lh-1">Contact</p>
                    </Link>
                </Offcanvas.Body>
            </Offcanvas>
        )
    }

    return (
        <>
            <LeftDrawer />
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className="d-flex flex-row justify-content-between">
                    <Button variant="dark" onClick={handleShow}>
                        <MdMenu className="fs-3 text-white mx-2" />
                    </Button>
                    <Navbar.Brand as={Link} className="w-100 mx-0" to="/" >
                        <AppLogo className="text-white"/>
                    </Navbar.Brand>
                    <Nav className="d-none d-lg-flex ms-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                    </Nav>
                    <LanguageSwitcher />
                </Container>
            </Navbar>
        </>
    );
}

export const AppLogo: FC<AppProps> = ({ className }) => {
    return (
        <div className={`d-flex flex-row align-items-center justify-content-start ${className}`}>
            <img alt="app-logo" className="rounded-pill me-2" src={Logo.avatar} style={{ width: '30px', height: '30px' }} />
            <div>
                <p className="m-0 text-start fs-6 fw-medium lh-1">KawaiiCharles</p>
                <p className="m-0 text-start lh-1" style={{ fontSize: '10px' }}>MyApp</p>
            </div>
        </div>
    )
}