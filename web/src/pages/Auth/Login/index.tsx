import LoginRegisterViewComponent from '@/components/Auth/LoginRegisterViewComponent'
import PocketBankButton from '@/components/common/PocketBankButton'
import PocketBankTextField from '@/components/common/PocketBankTextField'
import TitleH1 from '@/components/common/TitleH2'
import * as constants from '@utils/constants'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  const [user, setUser] = React.useState('')
  const [pass, setPass] = React.useState('')

  const leftElements = (
    <div className="flex flex-col items-center justify-around h-full p-20">
      <TitleH1 label="Realize login para acessar sua conta" />
      <object data="/login-image.svg" type="image/svg+xml" className="h-72"></object>
    </div>
  )

  const rightElements = (
    <form
      className="h-full max-w-xs mx-auto flex flex-col justify-between items-center pt-16 pb-28"
      autoComplete="off"
    >
      <TitleH1 label="Login" />

      <div className="w-full">
        <PocketBankTextField labelText="Usuário" value={user} onChanged={(e) => setUser(e)} />

        <div className="h-8"></div>

        <PocketBankTextField
          labelText="Senha"
          type="password"
          value={pass}
          onChanged={(e) => setPass(e)}
        />
      </div>

      <div className="w-full flex flex-col items-center">
        <PocketBankButton labelText="Entrar" width="60%" />

        <div className="h-4"></div>

        <p className="text-xs">
          Ainda não possui uma conta?{' '}
          <Link href="/Auth/Register" className="text-[--secondary-color]">
            Crie agora!
          </Link>
        </p>
      </div>
    </form>
  )

  return (
    <>
      <Head>
        <title>{constants.appName('Login')}</title>
      </Head>
      <LoginRegisterViewComponent leftElements={leftElements} rightElements={rightElements} />
    </>
  )
}

export default Login
