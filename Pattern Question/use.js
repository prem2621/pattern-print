// function loop(n){
//   let result = ''
//   for(let i=1; i<=n; i++){
//     for(let j=i; j<n; j++){
//       result += '* '
//     }
//     for(let k=1; k<i; k++){
//        result += '  '
//     }
//     for(let k=1; k<i; k++){
//       result += '  '
//    }
//     for(let l=i; l<n; l++){
//       result += '* '
//     }
//     result += '\n'
//   }

//   for(let i=1; i<=n; i++){
//     for(let j=0; j<i; j++){
//       result += '* '
//     }
//     for(let k=i; k<n; k++){
//        result += '  '
//     }
//     for(let k=i; k<n; k++){
//       result += '  '
//    }
//     for(let l=0; l<i; l++){
//       result += '* '
//     }
//     result += '\n'
//   }
//   return result

// }
// console.log(loop(5));


function loop(n) {
  let result = "";
  for (let i = 1; i < n; i++) {
    for (let j = i; j < n; j++) {
      result += "* ";
    }
    for (let j = 1; j < i; j++) {
      result += "  ";
    }
    for (let j = 1; j < i; j++) {
      result += "  ";
    }
    for (let k = i; k < n; k++) {
      result += "* ";
    }
    result += "\n";
  }
  for (let i = 1; i <=n; i++) {
    for (let j = 0; j < i; j++) {
      result += "* ";
    }
    for (let j = 1; j < i; j++) {
      result += "  ";
    }
    for (let j = 1; j < i; j++) {
      result += "  ";
    }
    for (let k = 0; k < i; k++) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
}
console.log(loop(5));
