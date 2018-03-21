//create a constructor function

var task = function(name){
    this.name = name;
    this.completed = false;             
};

task.prototype.complete = function(){
        console.log("completing task: " + this.name);
        this.completed = true;
};  

task.prototype.save = function(){
        console.log("saving task: " + this.name);            
};


module.exports = task;

