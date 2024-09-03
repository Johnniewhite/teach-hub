import React from 'react';

const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">
      {text}
    </button>
  );
};

export default Button;