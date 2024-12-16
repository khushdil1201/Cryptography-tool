import React, { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';
import { CipherSelector } from './components/CipherSelector';
import { TextInput } from './components/TextInput';
import { KeyInput } from './components/KeyInput';
import { atbashCipher } from './utils/ciphers/atbash';
import { caesarCipher } from './utils/ciphers/caesar';
import { vigenereCipher } from './utils/ciphers/vigenere';

function App() {
  const [selectedCipher, setSelectedCipher] = useState('Шифр Атбаша');
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState('');
  const [outputText, setOutputText] = useState('');
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');

  const handleProcess = () => {
    if (!inputText) return;

    try {
      let result = '';
      switch (selectedCipher) {
        case 'Шифр Атбаша':
          result = mode === 'encrypt' 
            ? atbashCipher.encrypt(inputText)
            : atbashCipher.decrypt(inputText);
          break;
        case 'Шифр Цезаря':
          const shift = parseInt(key) || 3;
          result = mode === 'encrypt'
            ? caesarCipher.encrypt(inputText, shift)
            : caesarCipher.decrypt(inputText, shift);
          break;
        case 'Шифр Виженера':
          if (!key) {
            alert('Пожалуйста, введите ключ для шифра Виженера');
            return;
          }
          result = mode === 'encrypt'
            ? vigenereCipher.encrypt(inputText, key)
            : vigenereCipher.decrypt(inputText, key);
          break;
        default:
          alert('Этот шифр еще не реализован');
          return;
      }
      setOutputText(result);
    } catch (error) {
      alert('Произошла ошибка при обработке');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Инструмент Криптографии
          </h1>
          
          <div className="space-y-6">
            <CipherSelector
              selectedCipher={selectedCipher}
              onCipherChange={setSelectedCipher}
            />

            <div className="flex gap-4">
              <button
                onClick={() => setMode('encrypt')}
                className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
                  mode === 'encrypt'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Lock size={20} /> Зашифровать
              </button>
              <button
                onClick={() => setMode('decrypt')}
                className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
                  mode === 'decrypt'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Unlock size={20} /> Расшифровать
              </button>
            </div>

            <TextInput
              label="Входной текст"
              value={inputText}
              onChange={setInputText}
              placeholder="Введите текст для обработки..."
            />

            <KeyInput
              cipher={selectedCipher}
              value={key}
              onChange={setKey}
            />

            <button
              onClick={handleProcess}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {mode === 'encrypt' ? 'Зашифровать' : 'Расшифровать'}
            </button>

            <TextInput
              label="Выходной текст"
              value={outputText}
              onChange={setOutputText}
              placeholder="Результат появится здесь..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;