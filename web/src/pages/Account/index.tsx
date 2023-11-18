import PocketBankButton from '@/components/common/PocketBankButton'
import PocketBankTextField from '@/components/common/PocketBankTextField'
import React from 'react'

const Account = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [telefone, setTelefone] = React.useState('')
  const [cpfCnpj, setCpfCnpj] = React.useState('')

  return (
    <form className="h-full w-[--width-home-centered-box-child] m-auto flex flex-col items-center justify-around bg-red-300">
      <object data="/cat-rounded.svg" type="image/svg+xml" className="h-32"></object>

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
        labelText="CPF"
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
}

export default Account
