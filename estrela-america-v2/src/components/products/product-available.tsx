import { Star } from 'lucide-react'

export function ProductAvailable() {
  const starsArray: number[] = randomStarsAvaliate()

  function randomStarsAvaliate(): number[] {
    return Array(5).fill(5)
  }

  return (
    <>
      {starsArray.map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-200 fill-primary-yellow" />
      ))}
    </>
  )
}
