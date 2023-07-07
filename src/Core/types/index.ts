import { Base } from "../../Node";

export type PoolType = {
  [key: string]: any;
};

export type CreateMethod = (instance: Base, callback?: CreateMethod) => void;

export type DestroyMethod = (instance: Base, callback?: DestroyMethod) => boolean;