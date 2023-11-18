import LoginRegisterViewComponent from '@/components/Auth/LoginRegisterViewComponent'
import PocketBankButton from '@/components/common/PocketBankButton'
import PocketBankTextField from '@/components/common/PocketBankTextField'
import TitleH1 from '@/components/common/TitleH2'
import * as constants from '@/utils/constants'
import Head from 'next/head'
import React from 'react'

const Register = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [telefone, setTelefone] = React.useState('')
  const [cpfCnpj, setCpfCnpj] = React.useState('')

  const leftElements = (
    <form className="flex flex-col w-full px-12 py-6 items-center justify-around overflow-auto">
      <TitleH1 label="Criar conta" />

      <PocketBankTextField
        backgroundColor="#F0F0F0"
        labelText="Nome"
        value={nome}
        onChanged={(e) => setNome(e)}
      />

      <PocketBankTextField
        backgroundColor="#F0F0F0"
        labelText="E-mail"
        value={email}
        onChanged={(e) => setEmail(e)}
      />

      <PocketBankTextField
        backgroundColor="#F0F0F0"
        labelText="Número"
        value={telefone}
        onChanged={(e) => setTelefone(e)}
      />

      <PocketBankTextField
        backgroundColor="#F0F0F0"
        labelText="CPF/CNPJ"
        value={cpfCnpj}
        onChanged={(e) => setCpfCnpj(e)}
      />

      <div className="w-full flex flex-row justify-end">
        <PocketBankButton
          labelText="Criar"
          type="submit"
          width="200px"
          backgroundColor="var(--primary-color)"
        />
      </div>
    </form>
  )

  const rightElements = (
    <div className="h-full flex flex-col justify-center items-center">
      <object data="/register-image.svg" type="image/svg+xml" className="h-72"></object>
    </div>
  )

  return (
    <>
      <Head>
        <title>{constants.appName('Login')}</title>
      </Head>
      <LoginRegisterViewComponent
        backgroundColorCenteredBoxEnabled
        leftElements={leftElements}
        rightElements={rightElements}
      />
    </>
  )
}

export default Register
