import React, {useEffect, useState} from "react";
import BootstrapTable, {
    ExpandRowProps, TableChangeHandler
} from "react-bootstrap-table-next";
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
    const [searchTime, setSearchTime] = useState(0);
    const [totalSongs, setTotalSongs] = useState(0);

    const fetchData = (pageToken: number, pageSize: number, clear: boolean): number => {
        const client = new DatalakeServiceClient(
            "http://grpc-web.tensorbeat.com"
        );
        let req: GetAllSongsRequest = new GetAllSongsRequest();
        req.setPageToken(pageToken);
        req.setPageSize(pageSize);
        const startTime = Date.now();

        let nextPageToken = 0;
        client.getAllSongs(req, null).then(res => {
            setTotalSongs(res.getTotalSize());
            nextPageToken = res.getNextPageToken();
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
            if (clear) {
                setSongs(loadedSongs);
            } else {
                setSongs([...songs, ...loadedSongs]);
            }
            setSearchTime(Date.now() - startTime);
        });
        return nextPageToken;
    };

    useEffect(() => {
        fetchData(0, 10, true);
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

    const expandRow: ExpandRowProps<SongEntry> = {
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

    let currentPageToken = 0;
    const handleTableChange: TableChangeHandler<SongEntry> = (type: string, {page, sizePerPage}) => {
        currentPageToken += fetchData(page, sizePerPage, currentPageToken !== page);
    }

    return (
        <div className={"songs-table"}>
            <BootstrapTable remote={true}
                            keyField={"id"} data={songs} columns={columns}
                            bootstrap4={true}
                            striped={false}
                            hover={true}
                            expandRow={expandRow}
                            pagination={paginationFactory({
                                custom: false,
                                showTotal: true,
                                totalSize: totalSongs,
                            })}
                            noDataIndication={() => <div className={"loading"}>Loading...</div> }
                            onTableChange={handleTableChange}
            />
            {/*<div>{searchTime / 1000} seconds</div>*/}
        </div>
    )

}