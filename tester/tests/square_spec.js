function sum(a,b){
  return a + b;
}


describe('sum', ()=>{
  it('adds two numbers', ()=>{
    expect(sum(2,2)).toBe(4);
  })
})
