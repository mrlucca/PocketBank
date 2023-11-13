import React from 'react';

const MainBackground: React.FC<ChildrenProps> = ({ children }) => (
  <main className="w-full min-h-screen overflow-hidden bg-[--background-page-color] p-8 flex items-center justify-center">
    {children}
  </main>
);

export default MainBackground;
