
describe('error', ()=>{
  it('throws an error if num isnt an integer', ()=>{
    expect(try_catch(Square, 'a')).to_throw('argument is not a number');
  })

  it('throws an error if num is not positive', function(){
    expect(try_catch(Square, -1)).to_throw('size should be a positive number');
  })
})

describe('area', function(){
  it('responds to area', ()=>{
    expect(new Square(5)).respond_to('area');
  })
  it('calculate the area',()=> {
    var square = new Square(5);
    expect(square.area()).toBe(25)
  })
})

describe('square', ()=>{
  
  var context = {};
  before = () => { context.square = new Square(50) };

  it('sets a size property to size given', ()=>{
    expect(context.square.size).toBe(50);
  })


  it('sets a size property to size given', ()=>{
    expect(context.square.size).toBe(500);
  })
})

describe('testing doubles', ()=>{
  it('can work with doubles', ()=>{
    var test = double('test');
    allow(test).to('say_hey').with('boo');
    expect(test.say_hey()).toBe('boo');
  })

  it('can create a double with predefined values', ()=>{
    var test = double('test',{testing:'tester'});
    expect(test.testing).toBe('tester');
  })
})