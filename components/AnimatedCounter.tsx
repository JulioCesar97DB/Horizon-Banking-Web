'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <p className='w-full'>
            <CountUp
                duration={2.75}
                decimals={2}
                decimal=','
                prefix='$'
                end={amount} />
        </p>
    )
}

export default AnimatedCounter