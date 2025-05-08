import React from 'react'
import Navbar from '../../assets/components/Navbar'
import Footer from '../../assets/components/Footer'

const Bridge = () => {
  return (
    <>
    <Navbar />
    <div>
        <h1>Bridge</h1>
        <p>Bridge is a card game played with a standard deck of 52 cards. It is played by four players in two competing partnerships. The game consists of two main phases: the bidding phase and the play phase.</p>
        <h2>Bidding Phase</h2>
        <p>In the bidding phase, players bid on the number of tricks they believe their partnership can take. The highest bid becomes the contract, and the player who made that bid becomes the declarer.</p>
        <h2>Play Phase</h2>
        <p>In the play phase, players play their cards in a specific order, trying to win tricks based on the contract. The declarer tries to fulfill the contract while the other players try to prevent them from doing so.</p>
    </div>
    <Footer />
    </>
  )
}

export default Bridge