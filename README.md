# Faux - Pho Testing Framework

*Faux Pho*

Is a testing framework built for JS code. Inspired  by similiar frameworks Faux Pho allows the following features: 

- Equality Matching.
- Allows a throws error matcher for class constructors with the try_catch(class, val)
 ` it('throws an error if num is not positive', function(){
    expect(try_catch(Square, -1)).to_throw('size should be a positive number');
  })`
 - helpful terminal messages and coloring.
 - contains a respond_to method
    `describe('area', function(){`
      `it('responds to area', ()=>{`
      `expect(new Square(5)).respond_to('area');`
      `})`
      `it('calculate the area',()=> {`
       `var square = new Square(5);`
        `expect(square.area()).toBe(25)`
      `})`
 ` })`
- It allows mocking 
`describe('testing doubles', ()=>{` 
  `it('can work with doubles', ()=>{`
    `var test = double('test');`
    `allow(test).to('say_hey').with('boo');`
    `expect(test.say_hey()).toBe('boo');`
  `})`
  
  
  it('can create a double with predefined values', ()=>{
    var test = double('test',{testing:'tester'});
    expect(test.testing).toBe('tester');
  })
 
 *How to run*
 
Similiar to Jasmines stand alone runner, clone this repo then write your tests within the tests folder and src within the src!
Include linkes to files you wish to test within the TestRunner.html file. 
Then drag/open this into a browser window - chrome or fire fox is recommended!
Open up the console to see your results!
