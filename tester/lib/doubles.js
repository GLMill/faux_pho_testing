
// not working because of arguments
class Double {

    constructor(x){
        this.name = x;
        this.arguments = arguments;
    }

    check_for_methods(){
        if(this.arguments.length > 1){
           this.set_methods();
        }
    }

    set_methods(){
        var args = this.arguments;
        for(var i = 1; i < args.length; i++){
            for(var key in arguments[i]){
                Object.defineProperty(this.obj, key, {
                value : arguments[i][key],
                });
                
            }
        } 
    } 

    get_self(){
        return this;
    }
}
