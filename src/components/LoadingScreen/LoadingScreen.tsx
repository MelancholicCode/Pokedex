import { FC } from 'react';

import "./LoadingScreen.scss";

const LoadingScreen: FC = () => {
  return (
    <div className="loading-screen">
      <svg className='loading-screen__pokeball' fill="none" viewBox="0 0 98 97">
        <path fill="#EB4E3F" d="M89 32V16h-8V8H65V0H32v8H16v8H8v16H0v33h8v16h8v8h16v8h33v-8h16v-8h9V65h7V32h-8Z"/>
        <path fill="#000" d="M89 16h-8V8H65V0H32v8H16v8H8v16H0v33h8v16h8v8h16v8h33v-8h16v-8h9V65h7V32h-8V16ZM9 32h7V16h16V8h33v8h16v16h8v16h-8v9H65v-9h-8v-7H41v7h-9v9H17v-9H9V32Zm48 33H41V48h16v17ZM8 65v-8h8v8H8Zm81 0h-8v16H65v8H32v-8H16V65h24v7h17v-7h24v-8h8v8Z"/>
        <path fill="#F3F2F1" d="M57 65h24v16H65v8H32v-8H16V65h25v7h16v-7ZM40 48v17h17V48H40Zm-24 9H8v8h8v-8Zm65 8h8v-8h-8v8ZM32 32h-8v8h8v-8Z"/>
      </svg>
      <p className="loading-screen__text">Loading...</p>
    </div>
  );
};

export default LoadingScreen;