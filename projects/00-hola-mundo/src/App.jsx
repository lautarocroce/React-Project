import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const dravik = { userName: 'dravik' }
  const vik = { userName: 'vikito' }
  return (
    <section className='App'>
      <TwitterFollowCard userName="midudev" inicialIsFollowing={true}>
        Miguel Ángel
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev">
        Lautaro Manuel
      </TwitterFollowCard>
      <TwitterFollowCard {...dravik}>
        Draco Malote
      </TwitterFollowCard>
      <TwitterFollowCard {...vik}>
        Vikito
      </TwitterFollowCard>
    </section >
  )
}

