class Mock {
   
    constructor(obj){
      this.obj = obj;
    }
     
    to(method_name, method_val){
       this.method_name = method_name; 
       return this;
    }

    with(method_val){
        Object.defineProperty(this.obj, this.method_name, {
            value : function(){ return method_val},
        });
        return this;
    }
}