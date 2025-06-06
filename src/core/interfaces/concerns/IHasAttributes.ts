/* eslint-disable no-unused-vars */
import { IModelAttributes } from "@src/core/domains/models/interfaces/IModel";


export interface IHasAttributesSetAttributeOptions {
    broadcast: boolean;
}

export interface IHasAttributes<Attributes extends IModelAttributes = IModelAttributes> {

    attributes: Attributes | null;

    original: Attributes | null;

    attrSync<K extends keyof Attributes = keyof Attributes>(key: K, value?: unknown): Attributes[K] | null | undefined;

    setAttribute(key: keyof Attributes, value?: unknown): Promise<void>;

    getAttributeSync<K extends keyof Attributes = keyof Attributes>(key: K): Attributes[K] | null

    getAttributes(...args: any[]): Attributes | null;

    getOriginal(key: keyof Attributes): Attributes[keyof Attributes] | null

    getDirty(): Record<keyof Attributes, any> | null

    isDirty(): boolean;
}