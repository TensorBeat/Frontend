import React from "react";
import Page from "../components/Page";
import SongTable from "../components/SongTable";

export default function Songs() {

    return (
        <div>
            <Page title={"Songs"} page={"songs"}>

                <SongTable/>

            </Page>
        </div>
    )

}