function FizzBuzz(){
    let arr = []
    for(let i =1; arr.length<100; i++){
      if(i%3===0 && i%2===0){
        arr.push(i + " ,FizzBuzz")
      }else if(i%2===0){
        arr.push(i + " ,Fizz")
      }else if(i%3===0){
        arr.push(i + " ,Buzz")
      }else {
        arr.push(i)
      }
    }
  
  return arr;
  }
  
  
  console.log(FizzBuzz())