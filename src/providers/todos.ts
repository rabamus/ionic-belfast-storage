import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Todo } from '../models/todo';

@Injectable()
export class Todos {

    private items: Todo[];

    constructor(
        private storage: Storage,
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

    public async getItems(): Todo[] {
        let objects = await this.storage.get('todos');
        let items: Todo[] = [];

        if (!objects) objects = [];

        for (let object of objects) {
            items.push(Todo.createFromObject(object));
        }

        this.items = items;

        if (this.items.length == 0) this.createSampleItems();

        return this.items;
    }

    public async setItems(items: Todo[]) {
        this.items = items;
        await this.storage.set('todos', this.items);
    }

}