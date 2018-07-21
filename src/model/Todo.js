export default class Todo{
    constructor(id,content){
        this.id = id;
       this.content = content;
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