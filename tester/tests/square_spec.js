  function sum(a,b){
    return a + b;
  }


  describe('sum', ()=>{
    it('adds two numbers', ()=>{
      expect(sum(2,2)).toBe(4);
    })
  })

describe('error', ()=>{
  it('throws an error', ()=>{
    var error = null;
    try { 
      new Square('f');
    }
    catch(e){
      error = e.message;
    }
    expect(error).to_throw('argument is not a number');
  })
})