import React, {useEffect, useState} from "react";
import Page from "../components/Page";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import {DatalakeServiceClient} from "../gen/grpc-web/tensorbeat/DatalakeServiceClientPb";
import {GetAllSongsRequest} from "../gen/grpc-web/tensorbeat/datalake_pb";

type SongEntry = {
    id: string
    name: string
    artist: string
    genre: string
    rating: string
    uri: string
}

export default function Songs() {

    const [songs, setSongs] = useState<SongEntry[]>([]);

    useEffect(() => {
        const fetchData = () => {
            const client = new DatalakeServiceClient(
                "http://grpc-web.test.tensorbeat.com"
            );
            let req: GetAllSongsRequest = new GetAllSongsRequest();

            client.getAllSongs(req, null).then(res => {
                const songsList = res.getSongsList();
                const loadedSongs : SongEntry[] = [];
                songsList.forEach(songData => {
                    const tags = songData.getTagsMap();
                    const song: SongEntry = {
                        id: songData.getId(),
                        name: songData.getName(),
                        artist: tags.get("artist"),
                        genre: tags.get("genre"),
                        rating: tags.get("rating"),
                        uri: songData.getUri(),
                    }
                    loadedSongs.push(song);
                })
                setSongs([...songs, ...loadedSongs]);
            });
        };
        fetchData();
    }, []);

    const columns = [{
        dataField: "id",
        text: "Song ID",
    }, {
        dataField: "name",
        text: "Name",
    }, {
        dataField: "artist",
        text: "Artist",
    }, {
        dataField: "genre",
        text: "Genre",
    }, {
        dataField: "rating",
        text: "Rating",
    }, {
        dataField: "uri",
        text: "URI",
    }];

    return (
        <div>
            <Page title={"Songs"} page={"songs"}>

                <BootstrapTable keyField={"id"} data={songs} columns={columns}
                                bootstrap4={true}
                                striped={true}
                                hover={false}
                                selectRow={{mode: "checkbox", clickToSelect: true}}
                                tabIndexCell={true}
                                pagination={paginationFactory({
                                    custom: false,
                                    hidePageListOnlyOnePage: true,
                                    showTotal: true,
                                })}
                />

            </Page>
        </div>
    )

}