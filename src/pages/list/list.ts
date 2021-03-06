import { Component, ViewChild } from "@angular/core";
import { List, NavController } from "ionic-angular";

import { SinglePage } from '../single/single';

import { Todo } from '../../models/todo';
import { Todos } from '../../providers/todos';

@Component({
    selector: "page-list",
    templateUrl: "list.html"
})
export class ListPage {

    @ViewChild(List) list: List;

    private todos: Todo[] = [];

    constructor(
        public navCtrl: NavController,
        public todosProvider: Todos,
    ) {

    }

    public ionViewWillEnter() {
        this.todos = this.todosProvider.getItems();
    }

    public setDone(todo: Todo, value: boolean) {
        todo.done = value;

        this.todosProvider.setItems(this.todos);
        
        this.list.closeSlidingItems();
    }

    public showCreate(): void {
        this.navCtrl.push(SinglePage);
    }

}
