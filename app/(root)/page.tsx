import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import TotalBalanceBox from '../../components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Julio'}

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
        </header>

        <TotalBalanceBox 
          accounts= {[]}
          totalBanks={1}
          totalCurrentBalance={4784.28}
        />
      </div>
    </section>
  )
}

export default Home
