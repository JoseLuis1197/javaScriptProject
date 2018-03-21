//create a task object
/*
var task = {};

task.title = "My task";
task.description = "My description";
task.toString = function(){
    return this.title + " " + this.description;        
}

console.log(task.toString());

*/

//create a task object

var task = {
    title : "My task",
    description : "My description",
    toString : function(){
    return this.title + " " + this.description 
    }    
};
    
console.log(task.toString());