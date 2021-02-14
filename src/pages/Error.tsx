import React from "react";
import Page from "../components/Page";
import {Container} from "react-bootstrap";

type ErrorProps = {
    code: number
    message?: string
}

const messages: { [key: string]: string} = {
    404: "This resource doesn't exist",
    500: "Something went wrong",
}

console.log(messages);

export function Error(props: ErrorProps) {

    return (
        <div>

            <Page title={`${props.code}`}>
                <Container className={"text-center"}>
                    <h1 className={"display-1"}>{props.code}</h1>
                    <h1 className={"display-4"}>Gadzooks!</h1>
                    <hr className={"w-75"}/>
                    <p className={"lead"}>{props.message ?? (messages[props.code] ?? "Something went wrong")}</p>
                </Container>
            </Page>

        </div>
    )

}
