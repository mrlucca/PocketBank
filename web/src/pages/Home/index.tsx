import CenteredBox from '@/components/common/CenteredBox'
import MainBackground from '@/components/common/MainBackground'
import React from 'react'
import Account from '../Account'
import Transaction from '../Transaction'
import Wallet from '../Wallet'

enum HomePageItem {
  Account = 'Account',
  Transaction = 'Transaction',
  Wallet = 'Wallet',
}

const Home = () => {
  const [currentPage, setCurrentPage] = React.useState(HomePageItem.Account)
  const screens = Object.values(HomePageItem)

  function loadPage() {
    switch (currentPage) {
      case HomePageItem.Account:
        return <Account />
      case HomePageItem.Transaction:
        return <Transaction />
      case HomePageItem.Wallet:
        return <Wallet />

      default:
        return <Account />
    }
  }

  function onPageChanged(currentPage: HomePageItem) {
    setCurrentPage(currentPage)
  }

  return (
    <>
      <div className="w-full absolute flex flex-row justify-around items-center border-l-indigo-300">
        {screens.map((screen) => (
          <button type="button" onClick={() => onPageChanged(screen)} key={screen}>
            {screen}
          </button>
        ))}
      </div>
      <MainBackground>
        <CenteredBox backgroundColorEnabled>
          <div className="h-full w-[--width-inside-centered-box] m-auto my-1 flex flex-col items-center justify-around">
            <div className="w-full flex flex-row justify-between items-center text-[--secondary-color]">
              <object
                data="/menu-icon.svg"
                type="image/svg+xml"
                className="h-9 cursor-pointer"
              ></object>
              <h2 className="text-4xl font-semibold">{currentPage}</h2>
            </div>

            <div className="h-full w-full pt-3 pb-4 flex flex-col items-center justify-around">
              {loadPage()}
            </div>
          </div>
        </CenteredBox>
      </MainBackground>
    </>
  )
}

export default Home
