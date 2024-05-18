/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chain = new Map;
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    function setValue(map, key, value) {
      if (!map.has(key)) {
        if(value === undefined){
          value = null
        }
          map.set(key, new Set);
          map.get(key).add(value);
      }
      
      map.get(key).add(value);
  }
  
    for(let i=0; i < this.words.length;i++){
      setValue(this.chain,this.words[i],this.words[i+1])
    }
  
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let str = '';
    for(let i =0; i<= numWords ;i++){
      let ranWords = Array.from(this.chain)[Math.floor(Math.random()*Array.from(this.chain).length)]
      str += `${ranWords[0]} ${Array.from(ranWords[1])[Math.floor(Math.random()*Array.from(ranWords[1]).length)]} `
      if(str.includes('undefined')){ str = str.slice(0,str.length - 10)};
        if(str.includes('null')){ str = str.slice(0,str.length - 5)} 
    }
    console.log(str)
    return str
  }
}

module.exports = {
  MarkovMachine:MarkovMachine
}