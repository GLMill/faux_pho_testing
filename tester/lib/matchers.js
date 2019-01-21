
class Matchers {
 
  constructor(value){
    this.val = value;
  }
  
  // asserting non strict equals
  toBe(assertation){
    if(assertation == this.val){
      console.log('passed');
      return true;
    } else{
      console.log('fail');
      return false;
    }
  }

}
