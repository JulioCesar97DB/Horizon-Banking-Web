import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import TotalBalanceBox from '../../components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Julio', lastName: 'Diaz', email: 'julio.diaz@gmail.com' }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={4784.28}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 791.59 },
          { currentBalance: 4065.98 }
        ]}
      />
    </section>
  )
}

export default Home
