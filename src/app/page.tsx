import type { Metadata } from 'next'
import Header from '@/components/header/Header'

export const metadata: Metadata = {
  title: 'joxa',
  description: 'hello my name is Jaxongir',
}

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}
