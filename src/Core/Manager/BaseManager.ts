import { PoolType } from "../types";
import { CreateMethod, DestroyMethod } from "../types";

class BaseManager {
  pool: PoolType = {};

  create: CreateMethod = (instance, callback) => {
    const { type, id } = instance;
    const pool = this.getCurrentTypePool(type);
    pool.set(id, instance);
    if (callback) callback(instance);
  };

  destroy: DestroyMethod = (instance, callback) => {
    const { type, id } = instance;
    const pool = this.getCurrentTypePool(type);
    const success = pool.delete(id);
    if (callback) callback(success);
    return success;
  };

  getCurrentTypePool = (type: string) => {
    const { pool } = this;
    if (!pool[type]) return this.pool[type] = new Map();

    return pool[type];
  };
};

export default BaseManager;