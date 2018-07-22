import {addTodo} from "../actions";

const axios = require('axios');
const todoApi = {
     todoObject:{
         todos:[
             {id:1,content:"sass",status:"active"}
         ],
         filter:"all"
     },
    updateServerDAta(dispatch){
       axios.get('http://localhost:8080/api/todos')
         .then((response)=> {
             this.todoObject.todos=response.data._embedded.todos.map(serviceData=>{
               const {id,content,status} = serviceData;
               return {id,content,status};
           });
             console.log("aa"+this.todoObject.todos);
             dispatch(addTodo(this.filterTodos()));
         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })
         .then(function () {
           // always executed
         });
    },
     filterTodos(){
         let todos = this.todoObject.todos;
         let filter = this.todoObject.filter;
         if(filter == 'all'){
             let afeterHandleTodos = todos;
             return {afeterHandleTodos,filter};
         }else if(filter =='active'){
             let afeterHandleTodos = todos.filter(item => item.status==='active')
             return {afeterHandleTodos,filter}
         }else{
             let afeterHandleTodos = todos.filter(item => item.status==="completed")
             return {afeterHandleTodos,filter}
         }
     },
    addItem(item,dispatch){
         let self = this;
      axios.post('http://localhost:8080/api/todos', {
          id:1,
        content: item.content,
        status: item.status
      })
      .then(function (response) {
        console.log(response);
          self.updateServerDAta(dispatch);

      })
      .catch(function (error) {
        console.log(error);
      });
        this.todoObject.todos.push(item);
        console.log("查询添加"+JSON.stringify(this.todoObject.todos));
       // dispatch(addTodo(this.filterTodos()));
    },
     toggleActive(viewId){
         this.todoObject.todos.forEach(item=>{
            if(item.id==viewId){
               if (item.status==="active") {
                   item.status = "completed"
               }else {
                   item.status = "active"
               }
            }
        });
           return this.filterTodos();
     },
     changeStatus(filter){
         this.todoObject.filter = filter;
         console.log("状态"+this.todoObject.filter);
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