import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Todo } from '../../models/todo';
import { Todos } from '../../providers/todos';

@Component({
    selector: 'page-single',
    templateUrl: 'single.html'
})
export class SinglePage {

    public todo: Todo;

    constructor(
        public navCtrl: NavController,
        public todos: Todos,
    ) {
        this.todo = new Todo();
    }

    public createTodoAndReturn() {
        let todos = this.todos.getItems();

        todos.push(this.todo);
        
        this.todos.setItems(todos);

        this.navCtrl.pop();
    }

}
