function add(arg1, arg2) {
  if (arg1 !== undefined && arg2 !== undefined) {
    return arg1 + arg2;
  } else {
    return (arg2) => {
      return arg1 + arg2;
    };
  }
}

function sub(arg1, arg2) {
  if (arg1 !== undefined && arg2 !== undefined) {
    return arg1 - arg2;
  } else {
    return (arg2) => {
      return arg2 - arg1;
    };
  }
}

function mul(arg1, arg2) {
  if (arg1 !== undefined && arg2 !== undefined) {
    return arg2 * arg1;
  } else {
    return (arg2) => {
      return arg2 * arg1;
    };
  }
}

function div(arg1, arg2) {
  if (arg1 !== undefined && arg2 !== undefined) {
    return arg2 / arg1;
  } else {
    return (arg2) => {
      return arg2 / arg1;
    };
  }
}
let a = add(1, 2);
let b = mul(a, 10);
let sub1 = sub(1);
let c = sub1(b);
let d = mul(sub(a, 1))(c);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

function pipe(...arguments) {
  return (arg) => {
    let args = arguments;
    let result = arg;
    args.forEach((item) => {
      result = item(result);
      return result;
    });
    return result;
  };
}
let doSmth = pipe(add(d), sub(c), mul(b), div(a));

let result = doSmth(0);
console.log(result);
//console.log(pipe(add(1), mul(2))(3))
