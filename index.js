//prgm-1//
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(givendata=>{
//     let result=givendata.filter((b)=>{
//         return b.id==3;
//     })
//     console.log(result)
// })

// prgrm -2//
// function date(){
//     document.getElementById('demo').innerHTML=Date();
    
// }
// date();

//prgrm-4//
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
// .then( json=>{
//     console.log(json)
//     let result = json.map((v,index)=>{
//         //   console.log(v.id + ' '+v.email)
//         console.log(v,index)
//         return [v.id,v.email].join("");
//     })
// } )
  .then(result => {
      console.log(result);
      for(i=0;i<result.length;i++){
          console.log(result[i].id+ " "+ result[i].email)
      }
  })



//--prgrm--6//
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let even= arr.filter((a)=>{
//     return a%2==0;
// })
// console.log(even)

//--prgm--7--//
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let odd= arr.filter((value)=>{
//     return value %2 !=0;
// })
// console.log(odd)


//--prgrm-8--//
// let arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//  let givenvalue = arr.includes(10)
//  if(givenvalue){
//      console.log('True')
//  }else{
//      console.log('false')
//  }



//--prgm-9--//
//  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//  let data = arr.filter((value)=>{
     
//       return value % 2== 0;

       
//  })
//  document.write('value of even is: ',data)
//--prgrm-10--//
//  let timeout = setTimeout(()=>{
//   document.write("krr ")
//  },1000)

// let interval = setInterval(() => {
//     document.write("cbe")
//     document.write(" ")
// }, 1500);
             //--------------------------------------------------//
