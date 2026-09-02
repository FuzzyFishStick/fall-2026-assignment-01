export type EventMap = {
  launch: string;
  shutdown: number;
};
 
export class SimpleEventEmitter<T extends EventMap> {
  private listeners: {
    [K in keyof T]?: Array<(data: T[K]) => void>;
  } = {};
 
  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void {
    const existingListeners = this.listeners[eventName] ?? [];
    existingListeners.push(callback);
    this.listeners[eventName] = existingListeners;
  }
 
  public emit<K extends keyof T>(eventName: K, data: T[K]): void {
    const listenersForEvent = this.listeners[eventName];
    if (!listenersForEvent) {
      return;
    }
    for (const listener of listenersForEvent) {
      listener(data);
    }
  }
}
 
