const tasks={
    tasks: [{
        text: 'Grocery shopping',
        completed:true
    },{
        text:'Clean yard',
        completed:false
    },{
        text:'Film course',
        completed:false
    }],
    // getTasksToDo(){                                
  //  const taskstodo=this.tasks.filter((task)=>{
   //     return task.completed===false
   // })
  //  return taskstodo
  //  }
    getTasksToDo(){
        return this.tasks.filter((task)=>task.completed===false)
    }
}

console.log(tasks.getTasksToDo())
