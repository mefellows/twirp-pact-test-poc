// @generated by protobuf-ts 2.0.0-alpha.27 with parameters client_none,generate_dependencies
// @generated from protobuf file "service.proto" (package "twirp.example.haberdasher", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message twirp.example.haberdasher.FindHatRPC
 */
export interface FindHatRPC {
    /**
     * @generated from protobuf field: string hat_id = 1;
     */
    hatId: string;
}
/**
 * @generated from protobuf message twirp.example.haberdasher.ListHatRPC
 */
export interface ListHatRPC {
    /**
     * @generated from protobuf field: repeated twirp.example.haberdasher.Filter filters = 1;
     */
    filters: Filter[];
}
/**
 * Size of a Hat, in inches.
 *
 * @generated from protobuf message twirp.example.haberdasher.Size
 */
export interface Size {
    /**
     * @generated from protobuf field: int32 inches = 1;
     */
    inches: number; // must be > 0
}
/**
 * A Hat is a piece of headwear made by a Haberdasher.
 *
 * @generated from protobuf message twirp.example.haberdasher.Hat
 */
export interface Hat {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: int32 inches = 2;
     */
    inches: number;
    /**
     * @generated from protobuf field: string color = 3;
     */
    color: string; // anything but "invisible"
    /**
     * @generated from protobuf field: string name = 4;
     */
    name: string; // i.e. "bowler"
    /**
     * @generated from protobuf field: repeated twirp.example.haberdasher.Hat variants = 5;
     */
    variants: Hat[];
}
/**
 * @generated from protobuf message twirp.example.haberdasher.Filter
 */
export interface Filter {
    /**
     * @generated from protobuf field: string order_by = 1;
     */
    orderBy: string;
    /**
     * @generated from protobuf field: twirp.example.haberdasher.Pagination pagination = 2;
     */
    pagination?: Pagination;
}
/**
 * @generated from protobuf message twirp.example.haberdasher.Pagination
 */
export interface Pagination {
    /**
     * @generated from protobuf field: int32 limit = 1;
     */
    limit: number;
    /**
     * @generated from protobuf field: int32 offset = 2;
     */
    offset: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FindHatRPC$Type extends MessageType<FindHatRPC> {
    constructor() {
        super("twirp.example.haberdasher.FindHatRPC", [
            { no: 1, name: "hat_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FindHatRPC): FindHatRPC {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string hat_id */ 1:
                    message.hatId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: FindHatRPC, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string hat_id = 1; */
        if (message.hatId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.hatId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message twirp.example.haberdasher.FindHatRPC
 */
export const FindHatRPC = new FindHatRPC$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListHatRPC$Type extends MessageType<ListHatRPC> {
    constructor() {
        super("twirp.example.haberdasher.ListHatRPC", [
            { no: 1, name: "filters", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Filter }
        ]);
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListHatRPC): ListHatRPC {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated twirp.example.haberdasher.Filter filters */ 1:
                    message.filters.push(Filter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ListHatRPC, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated twirp.example.haberdasher.Filter filters = 1; */
        for (let i = 0; i < message.filters.length; i++)
            Filter.internalBinaryWrite(message.filters[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message twirp.example.haberdasher.ListHatRPC
 */
export const ListHatRPC = new ListHatRPC$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Size$Type extends MessageType<Size> {
    constructor() {
        super("twirp.example.haberdasher.Size", [
            { no: 1, name: "inches", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Size): Size {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 inches */ 1:
                    message.inches = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Size, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 inches = 1; */
        if (message.inches !== 0)
            writer.tag(1, WireType.Varint).int32(message.inches);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message twirp.example.haberdasher.Size
 */
export const Size = new Size$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hat$Type extends MessageType<Hat> {
    constructor() {
        super("twirp.example.haberdasher.Hat", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "inches", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "color", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "variants", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Hat }
        ]);
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Hat): Hat {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* int32 inches */ 2:
                    message.inches = reader.int32();
                    break;
                case /* string color */ 3:
                    message.color = reader.string();
                    break;
                case /* string name */ 4:
                    message.name = reader.string();
                    break;
                case /* repeated twirp.example.haberdasher.Hat variants */ 5:
                    message.variants.push(Hat.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Hat, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* int32 inches = 2; */
        if (message.inches !== 0)
            writer.tag(2, WireType.Varint).int32(message.inches);
        /* string color = 3; */
        if (message.color !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.color);
        /* string name = 4; */
        if (message.name !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.name);
        /* repeated twirp.example.haberdasher.Hat variants = 5; */
        for (let i = 0; i < message.variants.length; i++)
            Hat.internalBinaryWrite(message.variants[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message twirp.example.haberdasher.Hat
 */
export const Hat = new Hat$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Filter$Type extends MessageType<Filter> {
    constructor() {
        super("twirp.example.haberdasher.Filter", [
            { no: 1, name: "order_by", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "pagination", kind: "message", T: () => Pagination }
        ]);
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Filter): Filter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string order_by */ 1:
                    message.orderBy = reader.string();
                    break;
                case /* twirp.example.haberdasher.Pagination pagination */ 2:
                    message.pagination = Pagination.internalBinaryRead(reader, reader.uint32(), options, message.pagination);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Filter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string order_by = 1; */
        if (message.orderBy !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.orderBy);
        /* twirp.example.haberdasher.Pagination pagination = 2; */
        if (message.pagination)
            Pagination.internalBinaryWrite(message.pagination, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message twirp.example.haberdasher.Filter
 */
export const Filter = new Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Pagination$Type extends MessageType<Pagination> {
    constructor() {
        super("twirp.example.haberdasher.Pagination", [
            { no: 1, name: "limit", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "offset", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Pagination): Pagination {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 limit */ 1:
                    message.limit = reader.int32();
                    break;
                case /* int32 offset */ 2:
                    message.offset = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Pagination, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 limit = 1; */
        if (message.limit !== 0)
            writer.tag(1, WireType.Varint).int32(message.limit);
        /* int32 offset = 2; */
        if (message.offset !== 0)
            writer.tag(2, WireType.Varint).int32(message.offset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message twirp.example.haberdasher.Pagination
 */
export const Pagination = new Pagination$Type();
/**
 * @generated ServiceType for protobuf service twirp.example.haberdasher.Haberdasher
 */
export const Haberdasher = new ServiceType("twirp.example.haberdasher.Haberdasher", [
    { name: "MakeHat", options: { "google.api.http": { body: "*", post: "/hat" } }, I: Size, O: Hat },
    { name: "FindHat", options: { "google.api.http": { get: "/hat/{hat_id}" } }, I: FindHatRPC, O: FindHatRPC },
    { name: "ListHat", options: { "google.api.http": { get: "/hat" } }, I: ListHatRPC, O: ListHatRPC }
]);