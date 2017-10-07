import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {TodoDataStoringService} from "../services/todo-data-storing.service";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    public form: FormGroup;
    private todos;
    private activeTasks;
    private newTodo;

    constructor(private _saveTodoData: TodoDataStoringService,
                private fb: FormBuilder){
        this.form = this.fb.group({
            newTask: ['', [Validators.required]]
        });
    }

    ngOnInit() {

    }


// create method to add new task
    public addTodo() {
        this._saveTodoData.addData({title: this.newTodo, isDone: false}).then(() => {
            return this.getTodos();
        }).then(() => {
            this.newTodo = ''; // clear input form value
        });
    }

    public getTodos() {
        return this._saveTodoData.getData().then(todos => {
            this.todos = todos;
            this.activeTasks = this.todos.filter(todo => todo.isDone).length;
        });
    }

    public deleteTodoData(todo) {
        this._saveTodoData.deleteData(todo._id).then(() => {
            return this.getTodos();
        });
    }

}
