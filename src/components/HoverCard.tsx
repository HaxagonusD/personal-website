'use client'

import { useRef } from 'react'
import { animate } from 'animejs'

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'a'
  href?: string
  target?: string
  rel?: string
}

export default function HoverCard({
  children,
  className,
  as: Tag = 'div',
  href,
  target,
  rel,
}: HoverCardProps) {
  const ref = useRef<HTMLDivElement & HTMLAnchorElement>(null)

  function lift() {
    animate(ref.current!, {
      translateY: -6,
      scale: 1.015,
      duration: 400,
      ease: 'spring(1, 80, 12, 4)',
    })
  }

  function drop() {
    animate(ref.current!, {
      translateY: 0,
      scale: 1,
      duration: 600,
      ease: 'spring(1, 80, 10, 8)',
    })
  }

  const props = {
    ref,
    className,
    onMouseEnter: lift,
    onMouseLeave: drop,
    ...(Tag === 'a' && { href, target, rel }),
  }

  return <Tag {...(props as any)}>{children}</Tag>
}
