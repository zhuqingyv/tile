interface CacheItem<T> {
  key: string;
  value: T;
  next?: CacheItem<T>;
  prev?: CacheItem<T>;
}

interface LRUOptions {
  capacity: number;
};

class LRU<T> {
  private capacity: number;
  private cache: Map<string, CacheItem<T>>;
  private head?: CacheItem<T>;
  private tail?: CacheItem<T>;

  constructor(options: LRUOptions) {
    const { capacity } = options;
    this.capacity = capacity;
    this.cache = new Map();
  };

  private removeNode(node: CacheItem<T>) {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  };

  private addToHead(node: CacheItem<T>) {
    node.prev = undefined;
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  };

  get(key: string): T | undefined {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      this.removeNode(node);
      this.addToHead(node);
      return node.value;
    }
    return undefined;
  };

  put(key: string, value: T) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.removeNode(node);
      this.addToHead(node);
    } else {
      const newNode = { key, value };
      this.cache.set(key, newNode);
      this.addToHead(newNode);
      if (this.cache.size > this.capacity) {
        const removedNode = this.tail!;
        this.removeNode(removedNode);
        this.cache.delete(removedNode.key);
      }
    }
  };

  clear() {
    this.cache.clear();
    this.head = undefined;
    this.tail = undefined;
  };
};

export default LRU;