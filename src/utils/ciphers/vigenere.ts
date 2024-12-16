export const vigenereCipher = {
  encrypt: (text: string, key: string): string => {
    const normalizedKey = key.toLowerCase().replace(/[^a-z]/g, '');
    if (!normalizedKey) return text;

    return text
      .split('')
      .map((char, i) => {
        if (char.match(/[a-z]/i)) {
          const keyChar = normalizedKey[i % normalizedKey.length];
          const shift = keyChar.charCodeAt(0) - 97;
          const code = char.toLowerCase().charCodeAt(0);
          return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char;
      })
      .join('');
  },
  decrypt: (text: string, key: string): string => {
    const normalizedKey = key.toLowerCase().replace(/[^a-z]/g, '');
    if (!normalizedKey) return text;

    return text
      .split('')
      .map((char, i) => {
        if (char.match(/[a-z]/i)) {
          const keyChar = normalizedKey[i % normalizedKey.length];
          const shift = keyChar.charCodeAt(0) - 97;
          const code = char.toLowerCase().charCodeAt(0);
          let newCode = code - 97 - shift;
          if (newCode < 0) newCode += 26;
          return String.fromCharCode(newCode + 97);
        }
        return char;
      })
      .join('');
  }
};