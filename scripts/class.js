'use strict'

class task { 
    constructor(name){
    this.name = name;
    this.completed = false;             
};
   complete () {
        console.log("completing task: " + this.name);
        this.completed = true;
};

save() {
        console.log("saving task: " + this.name);            
};


}

var task1 = new task("Bobby");
var task2 = new task("Alfred");

task1.complete();
task2.save();
    