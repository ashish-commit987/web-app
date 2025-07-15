class Task{
    constructor(id,name,desc,date,time,url){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.date=date;
        this.time=time;
        this.url=url;
        this.isMarked=false;
    }
    toggle(){
        this.isMarked=!this.isMarked;
    }
}

export default Task;