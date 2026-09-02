export class Stack<T> 
{
  private items: T[] = [];

  public push(item: T): void 
  {
    this.items.push(item);
  }

  public pop(): T | undefined 
  {
    return this.items.pop();
    //return undefined;
  }

  public peek(): T | undefined 
  {
    return this.items[this.items.length - 1];
    //return undefined;
  }

  public size(): number 
  {
    return this.items.length;
    //return 0;
  }
}
