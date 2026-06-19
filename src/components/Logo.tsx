import { cn } from './ui'

export function Logo({
  variant = 'black',
  className,
}: {
  variant?: 'black' | 'white'
  className?: string
}) {
  const src = variant === 'white' ? '/brand/alwayson-white.png' : '/brand/alwayson-black.png'
  return (
    <img
      src={src}
      alt="AlwaysOn"
      width={650}
      height={226}
      className={cn('h-auto w-auto select-none', className)}
      draggable={false}
    />
  )
}
