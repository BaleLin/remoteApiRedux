export default class Todo{
    constructor(id,name){
        this.id = id;
       this.name = name;
        this.isComplete = false;
    }

    static get ACTIVE() {
        return "active";
    }

    static get COMPLETED() {
        return "completed";
    }

    static get ALL() {
        return "all";
    }


    complete(){
        this.status = Todo.COMPLETED;
    }

    reactive(){
        this.status = Todo.ACTIVE;
    }

    toggleActive() {
        this.status = this.status === Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE;
    }
}