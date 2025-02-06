import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const dravik = { isFollowing: true, userName: 'dravik' }
  const vik = { isFollowing: false, userName: 'vikito' }
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName="midudev">
        Miguel Ángel
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="midudev">
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

