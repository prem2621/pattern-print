    var n = 5;    //    Squre
var pattern = ""

// * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *

for (let i = 0; i <5; i++) {
   for(let j=0; j<5; j++){
    pattern += "* "
   }
   pattern += "\n "
}
console.log(pattern);

//-------------------------------------------------------
      
        // increase triangle in left

//         for(let i=1; i<=5; i++)
//     for(let j=1; j<=i; j++){
//         pattern += "* ";
//     }
//     pattern += "\n"
// }
// console.log(pattern);

// ------------------------------------------------------

        // deccrease triangle in left

// for(let i=1; i<=n; i++){
//     for(let j=0; j<=n-i; j++){
//         document.write("* ")
//     }
//        document.write("<br>")
// }

// ----------------------------------------------------

          // increasing in right

// for(let i=1; i<=n; i++){
//     for(let j=i; j<=n; j++){
//         document.write(" 7 ")
//     }
//     for(let k=1; k<=i; k++){
//          document.write("8 ");
//     }
//     document.write("<br>")
// }


// ----------------------------------------------------
  
        //desreasing tringle right

// function loop(n) {
//   let result = "";

//   for (let i = 1; i <= n; i++) {
//     // Print spaces (2 spaces per space to align with '* ')
//     for (let k = 0; k < i; k++) {
//       result += "  ";
//     }
//     // Print stars
//     for (let j = i; j < n; j++) {
//       result += "* ";
//     }
//     result += "\n";
//   }
//   return result;
// }

// console.log(loop(5));

// ----------------------------------------------------

            // hill pattern


// function loop(n){
//   let result = ''
//   for(let i=1; i<n; i++){
//         for(let j=i; j<n; j++){
//           result += ' '
//         }
//         for(let k=0; k<i; k++){
//           result += '* '
//         }
//         result += '\n'
//   }
//   return result
// }
// console.log(loop(5));

// ----------------------------------------------------

            //Reverse  hill pattern

// function loop(n){
//   let result = ''
//   for(let i=1; i<n; i++){
//         for(let j=0; j<i; j++){
//           result += ' '
//         }
//         for(let k=i; k<n; k++){
//           result += '* '
//         }
//         result += '\n'
//   }
//   return result
// }
// console.log(loop(5));

// ----------------------------------------------------

            //Diamand Pattern


// function loop(n){
//   let result = ''
//   for(let i=1; i<=n; i++){
//     for(let j=i; j<n; j++){
//       result += ' '
//     }
//     for(let k=0; k<i; k++){
//       result += '* '
//     }
//     result += '\n'
//   }
//   for(let i=1; i<=n; i++){
//     for(let j=0; j<i; j++){
//       result += ' '
//     }
//     for(let k=i; k<n; k++){
//       result += '* '
//     }
//     result += '\n'
//   }
//   return result
// }
// console.log(loop(5));

// ----------------------------------------------------

             // increase left with number

// for(let i =1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         document.write(j) or i
//     }
//     document.write("<br>")
// }

// ----------------------------------------------------

// function loop(n) {
//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//       result += "* ";
//     }
//     result += "\n";
//   }
//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j < n; j++) {
//       result += "* ";
//     }
//     result += "\n";
//   }
//   return result;
// }
// console.log(loop(5));
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *



// ----------------------------------------------------

// 1;
// 01;
// 101;
// 0101;
// 10101;

// function loop(n){
//   let result = ''
//   for(let i=1; i<=n; i++){
//     let start;
//      if(i%2 === 0) start = 1
//      else start = 0
//     for(let j=0; j<i; j++){
//       result += start
//       start += 1-start
//     }
//     result += '\n'
//   }
//   return result
// }
// console.log(loop(5));

// ----------------------------------------------------


// function loop(n) {
//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       result += j;
//     }
//     for (k = i; k < n; k++) {
//       result += "  ";
//     }
//     for (let l = 1; l <= i; l++) {
//       result += l;
//     }
//     result += "\n";
//   }
//   return result;
// }
// console.log(loop(5));

// 1        1
// 12      12
// 123    123
// 1234  1234
// 1234512345

// ----------------------------------------------------

// function loop(n){
        
// let num = 1;
// let result = ''
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     result += num++ + '  '
//   }
//   result += '\n'
// }
//     return result
// }
// console.log(loop(5));


// ----------------------------------------------------

// * * * * * * * *
// * * *     * * *
// * *         * *
// *             *

// function loop(n) {
//   let result = "";
//   for (let i = 1; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       result += "* ";
//     }
//     for (let j = 1; j < i; j++) {
//       result += "  ";
//     }
//     for (let j = 1; j < i; j++) {
//       result += "  ";
//     }
//     for (let k = i; k < n; k++) {
//       result += "* ";
//     }
//     result += "\n";
//   }
//   return result;
// }
// console.log(loop(5));



// ----------------------------------------------------

// * ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ *
// * * ^ ^ ^ ^ ^ ^ ^ ^ * *
// * * * ^ ^ ^ ^ ^ ^ * * *
// * * * * ^ ^ ^ ^ * * * *
// * * * * * ^ ^ * * * * *
// * * * * * ^ ^ * * * * *
// * * * * ^ ^ ^ ^ * * * *
// * * * ^ ^ ^ ^ ^ ^ * * *
// * * ^ ^ ^ ^ ^ ^ ^ ^ * *
// * ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ *


// for(let i=1; i<=n; i++){
//         for(let j=1; j<=i; j++){
//           document.write("* ")
//         }
//         for(let k=i; k<=n; k++){
//           document.write("^ ")
//         }
//         for (let k = i; k <= n; k++) {
//           document.write("^ ");
//         }
//         for (let j = 1; j <= i; j++) {
//           document.write("* ");
//         }
//         document.write("<br>")
// }
// for(let i=1; i<=n; i++){
//         for(let j=i; j<=n; j++){
//                 document.write("* ")
//         }
//         for(let k=1; k<=i; k++){
//                 document.write("^ ")
//         }
//         for (let k = 1; k <= i; k++) {
//           document.write("^ ");
//         }
//         for (let j = i; j <= n; j++) {
//           document.write("* ");
//         }
//         document.write("<br>")
// }


// -----------------------------------------------------

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// for(let i=1; i<=n; i++){
//         for(let j=1; j<=n; j++){
//       if(i===1 || j===1 || i===n || j===n){
//         document.write("* ")
//       }     
//       else{
//         document.write("&nbsp;&nbsp;&nbsp;");
//       }  
//         }
//        document.write("<br>");   
// }

// -----------------------------------------------------

// *             *
// *             *
// *             *
// *             *
// *             *

// for(let i=1; i<=n; i++){
//         for(let j=1; j<=n; j++){
//            if(j===1 || j===n){
//                 document.write("* ")
//            }    
//            else{
//             document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");    // document.write("^ ") 
//            }
//         }
//         document.write("<br>")
// }

// -----------------------------------------------------

// ^ ^ ^ * ^ ^ ^  
// ^ ^ ^ * ^ ^ ^  
// ^ ^ ^ * ^ ^ ^  
// * * * * * * *  
// ^ ^ ^ * ^ ^ ^  
// ^ ^ ^ * ^ ^ ^  
// ^ ^ ^ * ^ ^ ^ 

// for(let i=1; i<=7; i++){
//         for(let j=1; j<=7; j++){
//                 if(i== n/2+1 || j==n/2+1){
//                         document.write("%")
//                 }
//                 else{
//                         document.write("^ ")
//                 }
//         }
//         document.write("<br>")
// }

// -----------------------------------------------------

// * ^ ^ ^ ^ ^ ^ ^ *
// ^ * ^ ^ ^ ^ ^ * ^
// ^ ^ * ^ ^ ^ * ^ ^
// ^ ^ ^ * ^ * ^ ^ ^
// ^ ^ ^ ^ * ^ ^ ^ ^
// ^ ^ ^ * ^ * ^ ^ ^
// ^ ^ * ^ ^ ^ * ^ ^
// ^ * ^ ^ ^ ^ ^ * ^
// * ^ ^ ^ ^ ^ ^ ^ *

// for(let i=1; i<=n; i++){   i<=9
//         for(let j=1; j<=n; j++){   j<=9
//                 if(i==j || i+j == n+1){   n+5
//                         document.write("* ")
//                 }
//                 else{
//                         document.write("^ ")
//                 }
//         }
//         document.write("<br>")
// }

// -----------------------------------------------------

//               *
//             * * *
//          * * * * *
//         * * * * * *
//        * * * * * * *
//         * * * * * *
//          * * * * *
//             * * *
//               *

// for(let i=1; i<n; i++){  
//         for(let j=i; j<=n; j++){
//                 document.write("&nbsp;&nbsp;&nbsp")
//         }
//         for(let k=1; k<i; k++){
//                 document.write("* ")
//         }
//         for (let k = 1; k<= i; k++) {
//           document.write("* ");
//         }
//         document.write("<br>")
//  }
//  for(let i=1; i<=n; i++){
//         for(let j=1; j<=i; j++){
//                document.write("&nbsp;&nbsp;&nbsp");
//         }
//         for(let k=i; k<n; k++){
//                 document.write("* ")
//         }
//         for (let k = i; k <= n; k++) {
//           document.write("* ");
//         }
//         document.write("<br>")
//  }


// ----------------------------------------------------------

// 55555;
// 4444;
// 333;
// 22;
// 1;
// let num =1
// for(let i=0; i<n; i++){
//         for(let j=i; j<n; j++){
//                 document.write(n-i)         
//         }
//         document.write("<br> ")
// }


//   -------------------------------------------------------------------------------------------------

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// for(let i=n; i>=1; i--){
//         for(let j=1; j<=i; j++){
//                 document.write(j + "")
//         }
//         document.write("<br>")
// }


//  for (let i = 0; i <= n; i++) {
//    for (let j = 1; j <= n - i; j++) {
//      document.write(j);
//    }
//    document.write("<br>");
//  }

//   -------------------------------------------------------------------------------------------------

// 1********1
// 12******21
// 123****321
// 1234**4321
// 1234554321

// for(let i=1; i<=n; i++){
//         for(let j=1; j<=i; j++){
//              document.write(j)
//         }
//         for(let k=i; k<n; k++){
//                 document.write("*")
//         }
//           for(let k=i; k<n; k++){
//                 document.write("*")
//         }
//          for (let j = i; j >= 1; j--) {
//            document.write(j);
//          }
//         document.write("<br>")
// }

//   -------------------------------------------------------------------------------------------------

// 1;
// 23;
// 456;
// 78910;
// 1112131415;

// let num =1
// for(let i=1; i<=n; i++){
//   for (let j = 1; j <= i; j++) {
//     document.write(num);
//     num++;
//   }
//           document.write("<br>");
// }

//  -------------------------------------------------------------------------------------------------








