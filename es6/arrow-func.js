const sum = (...args) => {  // ... js rest parameter
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  console.log(sum(1,2,3,4))