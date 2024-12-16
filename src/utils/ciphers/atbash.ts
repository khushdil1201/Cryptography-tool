export const atbashCipher = {
  encrypt: (text: string): string => {
    return text
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.toLowerCase().charCodeAt(0);
          return String.fromCharCode(219 - code);
        }
        return char;
      })
      .join('');
  },
  decrypt: (text: string): string => {
    // For Atbash, encryption and decryption are the same
    return atbashCipher.encrypt(text);
  }
};