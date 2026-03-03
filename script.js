function convertToRoman(num) {
  let value=[1000,500,100,50,10,5,1];
	let result="";
	let symbol=['M','D','C','L','X','V','I'];
	for(let i=0;i<value.length;i++){
		while(num>=value[i]){
			result=result+symbol[i];
			num=num-value[i];
		}
	}
return result;
  

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
