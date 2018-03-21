# javaScriptProject

You could declare objects using these three ways:

1) var obj = {};
2) var nextObject = Object.create(Object.prototype);
3) var lasObject = new Object();

After declaring your object you could add keys and values as follow:

1) Dot notation

    obj.param = "new value";
    
    obj["param"] = "new value";
    
# Constructor pattern
Using JavaScript, you could create objects with a function. This is called a constructor.

Example:

    function ObjectName(param1,param2){
        this.param1 = param1;
        this.param2 = param2;
        this.toString = function(){
            return this.param1 + '' + this.param2;
        }    
    }



