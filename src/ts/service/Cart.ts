import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumWithoutDiscount(): number {
        let sum: number = this._items.reduce((acc, currentValue) => acc + currentValue.price, 0);
        return sum;
    }

    sumWithDiscount(discount: number): number {
        let sum: number = this._items.reduce((acc, currentValue) => acc + currentValue.price, 0) * (1 - discount / 100);
        return sum;
    }

    delete(id : number) : void {
        this._items = this._items.filter((item) => item.id !== id);
    }
}
