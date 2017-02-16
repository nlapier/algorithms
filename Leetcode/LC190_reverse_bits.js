/*
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?
*/

function reverseBits(n) {
  
    function pad32(num){
      while(num.length < 32){
        num = "0" + num
      }
      return num
    }
  
    let binaryN = pad32(n.toString(2));
    let reversedBinary = binaryN.split("").reverse().join("");
    let output = parseInt(reversedBinary, 2);
    return output;
}