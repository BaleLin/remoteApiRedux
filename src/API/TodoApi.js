import {addTodo, changeCheck, changeContent,filterTodo,initTodo} from "../actions";
const axios = require('axios');
const todoApi = {
     todoObject:{
         todos:[],
         filter:"all"
     },
    updateServerDAta(dispatch,oprationType){
       axios.get('http://localhost:8080/api/todos')
         .then((response)=> {
             this.todoObject.todos=response.data._embedded.todos.map(serviceData=>{
               const {id,content,status} = serviceData;
               return {id,content,status};
           });
             switch (oprationType) {
                 case "INIT_SERVICE":dispatch(addTodo(this.filterTodos()));
                     break;
                 case "ADD_SERVICE":dispatch(addTodo(this.filterTodos()));
                 break;
                 case "CHEACK_SERVICE": dispatch(changeCheck(this.filterTodos()));
                 break;
                 case "EDIT_SERVICE": dispatch(changeContent(this.filterTodos()));
                 break;
                 case "FILLTER_SERVICE": dispatch(initTodo(this.filterTodos()));
                 break;
             }

         })
         .catch(function (error) {
           console.log(error);
         })
    },
    initData(dispatch,oprationType){
        this.updateServerDAta(dispatch,oprationType)
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
      axios.post('http://localhost:8080/api/todos', {content: item.content,status: item.status})
      .then((response)=> {
        console.log(response);
          this.updateServerDAta(dispatch,"ADD_SERVICE");

      }).catch(function (error) {
        console.log(error);
      });
    },
     toggleActive(viewId,status,dispatch){
         console.log(status==="active");
         axios.patch(`http://localhost:8080/api/todos/${viewId}`, {
             status:(status==="active"?"completed":"active")
         })
             .then((response)=> {
                 console.log(response);
                 this.updateServerDAta(dispatch,"CHEACK_SERVICE");

             }).catch(function (error) {
             console.log(error);
         });
          },
     changeStatus(filter,dispatch){
         this.todoObject.filter = filter;
         this.updateServerDAta(dispatch,"FILLTER_SERVICE");
     },
     updateItem(viewId,name,dispatch){
     axios.patch(`http://localhost:8080/api/todos/${viewId}`, {
             content:name
         })
             .then((response)=> {
                 console.log(response);
                 this.updateServerDAta(dispatch,"EDIT_SERVICE");

             }).catch(function (error) {
             console.log(error);
         });
     }

}
 export default todoApi;