import React from 'react'

const Wallet = () => {
  return (
    <div className="h-full w-3/5 flex flex-col items-center justify-between bg-rose-400">
      <div className="text-center">
        <p>Saldo disponível</p>
        <p>x.xxx,xx</p>
      </div>

      <div className="h-3/5">
        <p>Histórico</p>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
        </ul>
      </div>
    </div>
  )
}

export default Wallet
