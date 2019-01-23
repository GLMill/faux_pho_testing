var before = null;
var after = null;



function hooks(hook){
    switch(hook){
        case before:
         if (before) return before();
         break;
        case after:
         if (after) return after() ;
         break
        default:
          break;
    }
}
