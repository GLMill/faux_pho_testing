//set-up

const describe = (desc, fn) => {
  console.log(desc);
  fn();
}

const it = (desc, fn) => {
  console.log(desc);
  fn();
}

//matchers 
const expect = (value) => { return new Matchers(value) }

