const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  abetca = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  constructor(revers = true) {
    this.revers = revers;
  }

  encrypt(message, key) {
    
    if (arguments.length < 2 || [...arguments].some(element => Boolean(element) === false)) {
      throw new Error('Incorrect arguments!');
    } else {
      let rezultat = [];
      let indexMass = message.split('').reduce((accumulator, currentValue, i) => {
        if (currentValue.match(/[^A-Z]/i)) {
          accumulator.push(i)
        }
        return accumulator;
      }, []);

      let str_Reg = message.toUpperCase().replace(/[^A-Z]/gi, '');
      let k = '';
      let count = Math.ceil(str_Reg.length / key.length);
      for (let i = 0; i < count; i++) {
        k += key;
      }
      k = k.substring(0, str_Reg.length).toUpperCase();
      
      for (let i = 0; i < str_Reg.length; i++) {
        let abetcaIndex = (this.abetca.indexOf(str_Reg[i]) + this.abetca.indexOf(k[i])) % this.abetca.length;
        rezultat.push(this.abetca[abetcaIndex])
      }
      indexMass.forEach(element => {
        rezultat.splice(element, 0, message[element])
      });

      return !this.revers ? rezultat.revers().join('') : rezultat.join('');
    } 
  }
  decrypt(encryptedMessage, key) {
    
    if (arguments.length < 2 || [...arguments].some(el => Boolean(el) === false)) {
      throw new Error('Incorrect arguments!');
    } else {
      let rezultat = [];
      let indexMass = encryptedMessage.split('').reduce((accumulator, currentValue, i) => {
        if (currentValue.match(/[^A-Z]/i)) {
          accumulator.push(i)
        }
        return accumulator;
      }, []);

      let str_Reg = encryptedMessage.toUpperCase().replace(/[^A-Z]/gi, '');
      let k = '';
      let count = Math.ceil(str_Reg.length / key.length);
      for (let i = 0; i < count; i++) {
        k += key;
      }
      k = k.substring(0, str_Reg.length).toUpperCase();
      for (let i = 0; i < str_Reg.length; i++) {
        let abetcaIndex = (this.abetca.indexOf(str_Reg[i]) - this.abetca.indexOf(k[i]) + this.abetca.length) % this.abetca.length;
        rezultat.push(this.abetca[abetcaIndex])
      }
      indexMass.forEach(element => {
        rezultat.splice(element, 0, encryptedMessage[element])
      });

      return !this.revers ? rezultat.revers().join('') : rezultat.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
