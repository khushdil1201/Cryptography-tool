import React from 'react';

interface KeyInputProps {
  cipher: string;
  value: string;
  onChange: (value: string) => void;
}

export const KeyInput: React.FC<KeyInputProps> = ({ cipher, value, onChange }) => {
  const getPlaceholder = () => {
    switch (cipher) {
      case 'Шифр Цезаря':
        return 'Введите число сдвига (например, 3)';
      case 'Шифр Виженера':
        return 'Введите ключевое слово';
      default:
        return 'Введите ключ шифрования';
    }
  };

  if (cipher === 'Шифр Атбаша') return null;

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Ключ шифрования
      </label>
      <input
        type={cipher === 'Шифр Цезаря' ? 'number' : 'text'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={getPlaceholder()}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};