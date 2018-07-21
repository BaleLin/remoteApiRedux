 const todoApi = {
     todoObject:{
         todos:[],
         status:"all"
     },
     filterTodos(){
         let todos = this.todoObject.todos;
         let status = this.todoObject.status;
         if(status == 'all'){
             let afeterHandleTodos = todos;
             return {afeterHandleTodos,status};
         }else if(status == 'active'){
             let afeterHandleTodos = todos.filter(item => item.isComplete===false)
             return {afeterHandleTodos,status}
         }else{
             let afeterHandleTodos = todos.filter(item => item.isComplete===true)
             return {afeterHandleTodos,status}
         }
     },
     addItem(item){
        this.todoObject.todos.push(item);
        return this.filterTodos();
     },
     toggleActive(viewId){
         this.todoObject.todos.forEach(item=>{
            if(item.id==viewId){
               item.isComplete=!item.isComplete;
            }
        });
           return this.filterTodos();
     },
     changeStatus(status){
         this.todoObject.status = status;
        return this.filterTodos();
     },
     updateItem(viewId,name){
         console.log(viewId);
         console.log(name);
         this.todoObject.todos.forEach(item=>{
             if(item.id==viewId){
                 item.content=name;
                 console.log("改变后的"+name);
             }
         });

         return this.filterTodos();
     }

}
 export default todoApi;