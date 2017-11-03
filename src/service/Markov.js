const splitWords = (input) => {
    let output = [];
    let current = '';
    for (let i = 0; i < input.length; i++) {
        let n = input.charCodeAt(i);
        if ((n >= 4096 && n <= 4255))  {
            // if current character is a consonant
            if ((n >= 4096 && n <= 4138) || (n >= 4159 && n <= 4175)) {
                if (current.length !== 0) {
                    output.push(current);
                }
                current = input[i];
            } 
            // if current character is asat
            else if (n === 4154) {
                current = output[output.length-1] + current + input[i];
                output.pop();
                if (i < input.length-1 && (n === 4152 || n === 4232 || n === 4234 || n === 4239 || n === 4252)) {
                    current += input[i+1];
                    i++;
                }
            }
            // if current character is stacked
            else if (n === 4153) {
                current = output[output.length-1] + current + "်";
                output.pop();
            }
            else {
                current += input[i]
            }
        }
    }
    output.push(current)
    return output;
}

export default class Markov {
    constructor(prefixLen, outputLen) {
        this.chain = {};
        this.prefixLen = prefixLen;
        this.outputLen = outputLen;
    }

    build(input) {
        let words = splitWords(input);
        let prefix = [];
        for (let i = 0; i < this.prefixLen; i++) {
            prefix.push(" ");
        }
        for (let i = 0; i < words.length; i++) {
            let s = words[i];
            let key = prefix.join("");
            if (key in this.chain) {
                this.chain[key].push(s)
            } else {
                this.chain[key] = [s]
            }
            prefix.shift();
            prefix.push(s);
        }
    }

    generate() {
        let output = [];
        let words = [];
        for (let i = 0; i < this.prefixLen; i++) {
            words.push(" ");
        }
        for (let i = 0; i < this.outputLen; i++) {
            let choices = this.chain[words.join("")];
            if (!choices || choices.length === 0) {
                break;
            }
            let next = choices[Math.floor(Math.random()*choices.length)];
            output.push(next);
            words.shift();
            words.push(next);
        }
        return output.join(" ");
    }
}