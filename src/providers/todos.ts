import { Injectable } from '@angular/core';

import { Todo } from '../models/todo';

@Injectable()
export class Todos {

    private items: Todo[];

    constructor(

    ) {
        
    }

    public createSampleItems() {
        let now = new Date();
        
        let item1 = new Todo();
        item1.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        item1.due = new Date(now.getTime() + 86400000);

        let item2 = new Todo();
        item2.description = 'Vestibulum elementum dictum metus, vel blandit massa euismod.';
        item2.done = true;

        let item3 = new Todo();
        item3.description = 'Vestibulum elementum dictum metus, vel blandit massa euismod.';

        this.items = [item1, item2, item3];
    }

    public getItems(): Todo[] {
        if (!this.items) this.createSampleItems();
        return this.items;
    }

    public setItems(items: Todo[]) {
        this.items = items;
    }

}