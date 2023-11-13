import LoginRegisterBox from '@/components/common/LoginRegisterBox';
import MainBackground from '@/components/common/MainBackground';
import * as constants from '@utils/constants';
import Head from 'next/head';
import React from 'react';

const Login = () => {
  const leftElements = (
    <>
      <h2 className="text-[34px] text-[#3E0B10] pb-9">
        Realize login para acessar sua conta
      </h2>
      <object
        data="/login-image.svg"
        type="image/svg+xml"
        className="h-72"
      ></object>
    </>
  );

  return (
    <>
      <MainBackground>
        <Head>
          <title>Login - {constants.appName}</title>
        </Head>
        <LoginRegisterBox>
          {/* left_svg */}
          <div className="flex flex-col items-center justify-center h-full w-[60%] round top-0 left-0 bg-slate-400 p-20">
            {leftElements}
            {/* <input type="text" name="" id="" className="bg-red-500" /> */}
          </div>

          {/* form_wrap */}
          <div className="absolute h-full w-2/5 left-[60%] top-0 bg-[--primary-color] rounded-[50px] shadow-md">
            <form autoComplete="off"></form>
          </div>
        </LoginRegisterBox>
      </MainBackground>
    </>
  );
};

export default Login;
