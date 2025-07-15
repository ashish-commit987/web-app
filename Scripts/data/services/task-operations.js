import Task from '../models/task.js';
export const Task_Operations={
    getSize(){
        return this.tasks.length;
    },

    getMark(){
        return this.tasks.filter(taskObject=>taskObject.isMarked).length;
    },

    getUnMark(){
        return this.getSize()-this.getMark();
    },
    
    tasks:[],
    add(taskObject){
        let task=new Task();
        for(let key in taskObject){
            task[key]=taskObject[key];
        }
        this.tasks.push(task);
        console.log(this.tasks);
        
    },
    delete(){
        this.tasks=this.tasks.filter(taskObject=>!taskObject.isMarked);
        return this.tasks;
    },

    search(taskId){
        return this.tasks.find(taskObject=>taskObject.id==taskId);
    },

    toggleMark(taskId){
        const taskObject=this.search(taskId);
        if(taskObject){
            taskObject.toggle();
        }
    },

    update(){

    },
    
    save(){
        return this.tasks;
    },
    clearAll(){

    }
}