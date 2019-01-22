** Welcome to PHO!

This is a testing framework!



** commands 

- Blocks

    Pho has two kind of blocks: it and describe. Describes must be used as the outer block and it as the inner, multiple it blocks can be passed to a describe block. 

    An Describe block will take a string and an anoymous function - this will include your it block. 

    The it block will also work similiarly to this. 

    i.e. 
    describe('im just a block', ()=>{
        it('im in the inner block - magic happens here', (){
            //alls the code you want.
        })
    })

- Assertations 

   Pho has familiar keywords to those used in most testing frameworks.

   - expect - this returns a matcher object. Matcher object contains various methods that can then be called upon the method.
   -

- doubles 

    doubles are made by a constructor function. It will add the name of the double and then any key pair arguments as method name and output. 

    i.e.

    var test = double('test', {testing: 'tester'});

    will create 

    var test = {
        name : 'test',
        testing : 'tester'
    }

- allow

    As seen above doubles work through key pairs. Allow also allows us to make another double.

    i.e.
     
     var test = double('test');
     allow(test).to('say_hey','boo');

    this will create : 


    var test = {
        name : 'test';
        say_hey : 'boo'
    }

- hooks 

    We are able to make hooks : before and after:

    They must be 
