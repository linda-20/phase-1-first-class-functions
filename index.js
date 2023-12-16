function receivesAFunction(callback) {
    
    callback();
  }
  
  
  function returnsANamedFunction() {
    
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  
  
  function returnsAnAnonymousFunction() {

    return function () {
      console.log("This is an anonymous function.");
    };
  }
  
  
  receivesAFunction(() => {
    console.log("Callback function called.");
  });
  
  
  const namedFunction = returnsANamedFunction();
  namedFunction(); 
  
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction(); 
  