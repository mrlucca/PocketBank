import PocketBankButton from '@/components/common/PocketBankButton'
import PocketBankTextField from '@/components/common/PocketBankTextField'
import React from 'react'

const TransactionCard = ({ children, width, className }: any) => {
  return (
    <div
      className={`h-full flex flex-col items-center justify-around bg-[--primary-color] rounded-[--default-border-radius] overflow-hidden shadow-md ${className}`}
      style={{ width: width }}
    >
      {children}
    </div>
  )
}

const Transaction = () => {
  return (
    <div className="h-full w-full flex flex-row items-center justify-between">
      <TransactionCard width={'50%'}>
        <object data="/cat-rounded.svg" type="image/svg+xml" className="h-32"></object>

        <p>Valor</p>

        <div className="text-center">
          <input type="text" name="" id="" className="mb-3" />
          <p>Saldo atual: x.xxx,xx</p>
        </div>
      </TransactionCard>

      <div className="h-full w-1/5 flex flex-col items-center justify-center">
        <object data="/transaction-arrow.svg" type="image/svg+xml"></object>
      </div>

      <TransactionCard width={'30%'}>
        <object data="/cat-rounded-2.svg" type="image/svg+xml" className="h-32"></object>

        <PocketBankButton labelText="Enviar" width="120px" />
      </TransactionCard>
    </div>
  )
}

export default Transaction
