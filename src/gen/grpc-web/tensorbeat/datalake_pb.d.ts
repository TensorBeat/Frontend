import * as jspb from 'google-protobuf'

import * as tensorbeat_common_pb from '../tensorbeat/common_pb';


export class GetSongsRequest extends jspb.Message {
  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): GetSongsRequest;

  getOperator(): LogicalOperator;
  setOperator(value: LogicalOperator): GetSongsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsRequest): GetSongsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsRequest;
  static deserializeBinaryFromReader(message: GetSongsRequest, reader: jspb.BinaryReader): GetSongsRequest;
}

export namespace GetSongsRequest {
  export type AsObject = {
    tagsMap: Array<[string, string]>,
    operator: LogicalOperator,
  }
}

export class GetSongsResponse extends jspb.Message {
  getSongsList(): Array<tensorbeat_common_pb.File>;
  setSongsList(value: Array<tensorbeat_common_pb.File>): GetSongsResponse;
  clearSongsList(): GetSongsResponse;
  addSongs(value?: tensorbeat_common_pb.File, index?: number): tensorbeat_common_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsResponse): GetSongsResponse.AsObject;
  static serializeBinaryToWriter(message: GetSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsResponse;
  static deserializeBinaryFromReader(message: GetSongsResponse, reader: jspb.BinaryReader): GetSongsResponse;
}

export namespace GetSongsResponse {
  export type AsObject = {
    songsList: Array<tensorbeat_common_pb.File.AsObject>,
  }
}

export class AddSongsRequest extends jspb.Message {
  getSongsList(): Array<tensorbeat_common_pb.AddFile>;
  setSongsList(value: Array<tensorbeat_common_pb.AddFile>): AddSongsRequest;
  clearSongsList(): AddSongsRequest;
  addSongs(value?: tensorbeat_common_pb.AddFile, index?: number): tensorbeat_common_pb.AddFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSongsRequest): AddSongsRequest.AsObject;
  static serializeBinaryToWriter(message: AddSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSongsRequest;
  static deserializeBinaryFromReader(message: AddSongsRequest, reader: jspb.BinaryReader): AddSongsRequest;
}

export namespace AddSongsRequest {
  export type AsObject = {
    songsList: Array<tensorbeat_common_pb.AddFile.AsObject>,
  }
}

export class AddSongsResponse extends jspb.Message {
  getSuccessful(): boolean;
  setSuccessful(value: boolean): AddSongsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSongsResponse): AddSongsResponse.AsObject;
  static serializeBinaryToWriter(message: AddSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSongsResponse;
  static deserializeBinaryFromReader(message: AddSongsResponse, reader: jspb.BinaryReader): AddSongsResponse;
}

export namespace AddSongsResponse {
  export type AsObject = {
    successful: boolean,
  }
}

export class AddTagsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): AddTagsRequest;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): AddTagsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsRequest): AddTagsRequest.AsObject;
  static serializeBinaryToWriter(message: AddTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsRequest;
  static deserializeBinaryFromReader(message: AddTagsRequest, reader: jspb.BinaryReader): AddTagsRequest;
}

export namespace AddTagsRequest {
  export type AsObject = {
    id: string,
    tagsMap: Array<[string, string]>,
  }
}

export class AddTagsResponse extends jspb.Message {
  getSuccessful(): boolean;
  setSuccessful(value: boolean): AddTagsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsResponse): AddTagsResponse.AsObject;
  static serializeBinaryToWriter(message: AddTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsResponse;
  static deserializeBinaryFromReader(message: AddTagsResponse, reader: jspb.BinaryReader): AddTagsResponse;
}

export namespace AddTagsResponse {
  export type AsObject = {
    successful: boolean,
  }
}

export class RemoveTagsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveTagsRequest;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): RemoveTagsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsRequest): RemoveTagsRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsRequest;
  static deserializeBinaryFromReader(message: RemoveTagsRequest, reader: jspb.BinaryReader): RemoveTagsRequest;
}

export namespace RemoveTagsRequest {
  export type AsObject = {
    id: string,
    tagsMap: Array<[string, string]>,
  }
}

export class RemoveTagsResponse extends jspb.Message {
  getSuccessful(): boolean;
  setSuccessful(value: boolean): RemoveTagsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsResponse): RemoveTagsResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsResponse;
  static deserializeBinaryFromReader(message: RemoveTagsResponse, reader: jspb.BinaryReader): RemoveTagsResponse;
}

export namespace RemoveTagsResponse {
  export type AsObject = {
    successful: boolean,
  }
}

export enum LogicalOperator { 
  UNKNOWN_LOGICAL_OPERATOR = 0,
  OR = 1,
  AND = 2,
  NOT = 3,
}
