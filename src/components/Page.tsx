import React from "react";
import {Container, Nav, Navbar, NavbarBrand, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";

type PageProps = {
    title?: string
    children?: React.ReactNode
}

export default function Page(props: PageProps) {

    return (
        <div>
            <Helmet>
                <title>{props.title ? props.title + " - " : ""}TensorBeat Console</title>
            </Helmet>
            <div className={""}>
                <Navbar variant={"dark"} bg={"primary"} className={"sticky-top"}>
                    <NavbarBrand href={"/"}>TensorBeat Console</NavbarBrand>
                </Navbar>
                <Container fluid={true}>
                    <Row>
                        {/* TODO: fix spacing so I don't have to use this */}
                        <div className={"col-12 col-md-3 col-xl-2"}/>
                        <div className={"col-12 col-md-3 col-xl-2 border-right position-fixed overflow-auto h-100 sidebar py-3 px-0"}>
                            <Nav className={"flex-column"}>
                                <li className={"nav-item"}>
                                    <a className={"nav-link nav-h1"} href={"/"}>Overview</a>
                                    <a className={"nav-link"} href={"/songs"}>Songs</a>
                                    <a className={"nav-link"} href={"/"}>Other option</a>
                                    <a className={"nav-link"} href={"/"}>Option 3</a>
                                    <a className={"nav-link"} href={"/"}>Final option</a>
                                </li>

                            </Nav>
                        </div>
                        <main className={"col"}>
                            {props.children}
                        </main>
                    </Row>
                </Container>
            </div>
        </div>
    );

}
