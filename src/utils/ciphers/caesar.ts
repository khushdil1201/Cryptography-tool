export const caesarCipher = {
  encrypt: (text: string, shift: number): string => {
    return text
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.toLowerCase().charCodeAt(0);
          let shiftedCode = ((code - 97 + shift) % 26) + 97;
          if (shiftedCode < 97) shiftedCode += 26;
          return String.fromCharCode(shiftedCode);
        }
        return char;
      })
      .join('');
  },
  decrypt: (text: string, shift: number): string => {
    return caesarCipher.encrypt(text, 26 - (shift % 26));
  }
};