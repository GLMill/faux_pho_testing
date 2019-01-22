//set-up

const describe = function(desc, fn){
  console.log(desc);
  fn();
}

const it = (desc, fn) => {
  console.log(desc);
  hooks(before);
  fn();
  hooks(after);
}


var double  = function(x){
  let obj = {};
  obj.name = x;
  if(arguments.length > 1){
    for(var i = 1; i < arguments.length; i++){
      for(var key in arguments[i]){
        Object.defineProperty(obj, key, {
          value : arguments[i][key],
        });
      }
    }
  }
  return obj;
}

function try_catch(method, val){
  try {
    new method(val);
  }
  catch(e){
    val = e;
  }
  finally {
    return val;
  }
}

//matchers 
const expect = (value) => { return new Matchers(value) }


const allow = (obj) => { return new Mock(obj) };