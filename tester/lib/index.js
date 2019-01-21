const describe = (desc, fn) => {
  console.log(desc);
  fn();
}

function name(){
  console.log('huxley');
}

describe('hey its', name);