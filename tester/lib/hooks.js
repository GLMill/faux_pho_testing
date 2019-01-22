var before = null;
var after = null;



function hooks(hook){
    switch(hook){
        case before:
         if (before) before();
         break;
        case after:
         if (after) after() ;
         break
        default:
          break;
    }
}
