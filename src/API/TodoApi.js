import {addTodo, changeCheck} from "../actions";

const axios = require('axios');
const todoApi = {
     todoObject:{
         todos:[
             {id:1,content:"sass",status:"active"}
         ],
         filter:"all"
     },
    updateServerDAta(dispatch,oprationType){
       axios.get('http://localhost:8080/api/todos')
         .then((response)=> {
             this.todoObject.todos=response.data._embedded.todos.map(serviceData=>{
               const {id,content,status} = serviceData;
               return {id,content,status};
           });
             console.log("aa"+this.todoObject.todos);
             switch (oprationType) {
                 case "添加":dispatch(addTodo(this.filterTodos()));
                 break;
                 case "勾选": dispatch(changeCheck(this.filterTodos()));
                 break;
             }

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
      axios.post('http://localhost:8080/api/todos', {id:1,content: item.content,status: item.status})
      .then((response)=> {
        console.log(response);
          this.updateServerDAta(dispatch,"添加");

      }).catch(function (error) {
        console.log(error);
      });console.log("查询添加"+JSON.stringify(this.todoObject.todos));
     // dispatch(addTodo(this.filterTodos()));
    },
     toggleActive(viewId,status,dispatch){
         console.log("勾选前"+status);
         console.log(status==="active");
         axios.patch(`http://localhost:8080/api/todos/${viewId}`, {
             status:(status==="active"?"completed":"active")
         })
             .then((response)=> {
                 console.log(response);
                 this.updateServerDAta(dispatch,"勾选");

             }).catch(function (error) {
             console.log(error);
         });
        //  console.log("查询添加"+JSON.stringify(this.todoObject.todos));
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