import {Injectable} from "@angular/core";

let todos = [];
@Injectable()
export class TodoDataStoringService {

    constructor() {
    }

    public addData(data) {
        return new Promise(resolve => {
            todos.push(data);
            resolve(data);
        });
    }

    public getData() {
        return new Promise(resolve => resolve(todos));
    }

    public deleteData(id) {
        return new Promise(resolve => {
            let index = todos.findIndex(todo => todo._id === id);
            todos.splice(index, 1);
            resolve(true);
        });
    }

}
