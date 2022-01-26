//******** Create an array of the 3 text elemets ********//
let textArray = [ "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...","There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...","Curabitur iaculis, nisl ut tristique fringilla, orci purus rutrum arcu, sed pharetra lectus tortor eget orci."];
//**** Convert the first letter of each word to upper case*******//
function capWords(text){
  let array1 = text.split(' ');
  let newarray1 = [];
  for(let x = 0; x < array1.length; x++) 
  {newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));}
  let bigText = newarray1.join(' '); 
  return bigText;}
//******** Find longest word ********//
function longestWord(text){
    array1 = text.match(/\w[a-z]{0,}/gi);
    let longest_word = array1[0];
    for(let x = 1 ; x < array1.length ; x++)
    {
      if(longest_word.length < array1[x].length)
      {longest_word = array1[x];} 
  }
  return longest_word;
  }
//******** Count number of vowels ********//
function vowelCount(text){
  let vowel_list = 'aeiouAEIOU';
  let vcount = 0;
for(let x = 0; x < text.length ; x++){
  if (vowel_list.indexOf(text[x]) !== -1){vcount += 1;}}
  return vcount;}
//******** Run  functions on all ********//
for (let d=0; d < textArray.length; d++)
  { let b_Text= capWords(textArray[d]);
    let l_Word= longestWord(textArray[d]);
    let v_Count= vowelCount(textArray[d]);
    let br_line = '--------------------------';
    console.log(`The original string was:\n${textArray[d]}\n${br_line}\nCapitalizing each word looks like:\n${b_Text}\nThe longest word is: ${l_Word}\nThere are ${v_Count} vowels\n${br_line}`);} 
 