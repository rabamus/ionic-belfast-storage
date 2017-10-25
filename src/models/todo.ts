const DAYS = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export class Todo {

    public description: string;
    public done: boolean = false;
    private _due: Date;

    constructor() {
        this.description = '';
        this.done = false;
        this.due = null;
    }

    public set due(value: Date) {
        if (!value) {
            this._due = null;
            return;
        }

        if (typeof value == 'string') {
            let parts = (<string> value).split('-');
            let year = parseInt(parts[0]);
            let month = parseInt(parts[1]) - 1;
            let date = parseInt(parts[2]);
            value = new Date(year, month, date);
        }
        
        this._due = value;
    }

    public get due(): Date {
        return this._due;
    }

    public getDueString(): string {
        if (!this.due) return 'No due date';

        let due = this.due;

        let day = DAYS[due.getDay()];
        let date = due.getDate();
        let month = MONTHS[due.getMonth()];
        let year = due.getFullYear();

        return day + ', ' + date + ' ' + month + ' ' + year;
    }

    public static createFromObject(object: Todo) {
        let todo = new Todo();

        todo.description = object.description;
        todo.done = object.done;
        todo.due = object._due;

        return todo;
    }

}
