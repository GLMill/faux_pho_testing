class Mock {
   
    constructor(obj){
      this.obj = obj;
    }
     
    to(method_name, method_val){
       Object.defineProperty(this.obj, method_name, {
           value : function(){ return method_val},
       });
    }
}