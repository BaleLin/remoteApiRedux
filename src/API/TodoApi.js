import {addTodo, changeCheck, changeContent,filterTodo,initTodo} from "../actions";

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
                 case "初始":dispatch(addTodo(this.filterTodos()));
                     break;
                 case "添加":dispatch(addTodo(this.filterTodos()));
                 break;
                 case "勾选": dispatch(changeCheck(this.filterTodos()));
                 break;
                 case "编辑": dispatch(changeContent(this.filterTodos()));
                 break;
                 case "过滤": dispatch(initTodo(this.filterTodos()));
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
     changeStatus(filter,dispatch){
         this.todoObject.filter = filter;
         console.log("状态"+this.todoObject.filter);
         this.updateServerDAta(dispatch,"过滤");
     },
     updateItem(viewId,name,dispatch){
         console.log("改内容前"+name);
         axios.patch(`http://localhost:8080/api/todos/${viewId}`, {
             content:name
         })
             .then((response)=> {
                 console.log(response);
                 this.updateServerDAta(dispatch,"编辑");

             }).catch(function (error) {
             console.log(error);
         });
     }

}
 export default todoApi;