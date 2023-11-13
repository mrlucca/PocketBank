import React from 'react';

const LoginRegisterBox: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      {/* box */}
      <div className="relative w-full max-w-screen-xl h-[580px] rounded-[50px] bg-[white]">
        {children}
      </div>
    </>
  );
};

export default LoginRegisterBox;
