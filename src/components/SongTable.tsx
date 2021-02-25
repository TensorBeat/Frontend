import React, {useEffect, useState} from "react";
import BootstrapTable, {BootstrapTableProps, ExpandRowProps} from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import {DatalakeServiceClient} from "../gen/grpc-web/tensorbeat/DatalakeServiceClientPb";
import {GetAllSongsRequest} from "../gen/grpc-web/tensorbeat/datalake_pb";

type SongEntry = {
    id: string
    name: string
    artist: string
    genre: string
    duration: number
    durationText: string
    views: number
    likes: number
    downloadUrl: string
    uri: string
}

function secondsToTimeString(s: number): string {
    const seconds = Math.floor(s % 60);
    const minutes = Math.floor((s / 60) % 60);
    const hours = Math.floor(s / 3600);
    return (
        `${hours > 0 ? hours + ":" : ""}` +
        `${minutes < 10 && hours > 0 ? "0" + minutes : minutes}:` +
        `${seconds < 10 ? "0" + seconds : seconds}`
    );
}

export default function SongTable() {

    const [songs, setSongs] = useState<SongEntry[]>([]);

    useEffect(() => {
        const fetchData = () => {
            const client = new DatalakeServiceClient(
                "http://grpc-web.tensorbeat.com"
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
                        duration: tags.get("duration"),
                        durationText: secondsToTimeString(tags.get("duration")),
                        views: tags.get("views"),
                        likes: tags.get("likes"),
                        downloadUrl: tags.get("downloadUrl"),
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
        dataField: "name",
        text: "Name",
    }, {
        dataField: "artist",
        text: "Artist",
    }, {
        dataField: "genre",
        text: "Genre",
    }, {
        dataField: "durationText",
        text: "Duration",
    }];

    const expandRow = {
        className: "song-row-expand-container",
        renderer: (row: SongEntry) => {
            return (
                <div className={"row-expand"}>
                    <table>
                        <tr><td>ID:</td><td>{row.id}</td></tr>
                        <tr><td>Views:</td><td>{row.views}</td></tr>
                        <tr><td>Likes:</td><td>{row.likes}</td></tr>
                        <tr><td>Source:</td><td><a href={row.downloadUrl}>{row.downloadUrl}</a></td></tr>
                        <tr><td>URI:</td><td>{row.uri}</td></tr>
                    </table>
                </div>
            );
        }
    }

    return (
        <div className={"songs-table"}>
            <BootstrapTable keyField={"id"} data={songs} columns={columns}
                            bootstrap4={true}
                            striped={false}
                            hover={true}
                            expandRow={expandRow}
                            pagination={paginationFactory({
                                custom: false,
                                hidePageListOnlyOnePage: true,
                                showTotal: true,
                            })}
            />
        </div>
    )

}