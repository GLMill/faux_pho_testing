
class Matchers {
 
  constructor(value){
    this.val = value;
  }
  
  // asserting non strict equals
  toBe(assertation){
    if(assertation == this.val){
      this.print_success(assertation)
      return true;
    } else{
      this.print_fail(assertation);
      return false;
    }
  }

  to_throw(assertation){
    console.log('error!');
    (assertation != this.val.message) ? this.print_error(this.val, assertation) :this.print_success(assertation);
  }

  print_error(e, assertation){
    this.print_fail(assertation)
    console.log(`%c Test failed! on line  ${e.lineNumber} in the ${e.fileName} \n ${e.stack}`, 'color: #FF1C1A');
  }

  print_success(assertation){
    console.log(` %c passed: expected : ${assertation} got : ${ this.val }`, 'color: #0EE80C');
  }

  print_fail(assertation){
    console.log(`%c failed: expected : ${assertation} got : ${ this.val }`, 'color: #FF1C1A');
  }

}
