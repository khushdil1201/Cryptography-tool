import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CipherSelectorProps {
  selectedCipher: string;
  onCipherChange: (cipher: string) => void;
}

const ciphers = [
  'Шифр Атбаша',
  'Шифр Цезаря',
  'Шифр Виженера',
  'Шифр Плейфера',
  'Шифр Вертикальной перестановки',
  'Шифр Алгебра матрицы',
  'Шифр Хилла',
  'Шифр RSA',
  'Шифр Диффи-Хеллмана',
  'Шифр DES',
  'Шифр Гронсфельда',
  'Шифр AES'
];

export const CipherSelector: React.FC<CipherSelectorProps> = ({
  selectedCipher,
  onCipherChange,
}) => {
  return (
    <div className="relative">
      <select
        value={selectedCipher}
        onChange={(e) => onCipherChange(e.target.value)}
        className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {ciphers.map((cipher) => (
          <option key={cipher} value={cipher}>
            {cipher}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  );
};