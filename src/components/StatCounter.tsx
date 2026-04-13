'use client'

import { useEffect, useRef } from 'react'
import { animate, utils } from 'animejs'

interface StatCounterProps {
  value: string
  className?: string
}

export default function StatCounter({ value, className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const match = value.match(/(\d+(?:\.\d+)?)/)
    if (!match) return

    const numStr = match[1]
    const target = parseFloat(numStr)
    const isFloat = numStr.includes('.')
    const decimals = isFloat ? numStr.split('.')[1].length : 0
    const prefix = value.slice(0, match.index)
    const suffix = value.slice((match.index ?? 0) + numStr.length)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true
            observer.unobserve(el)

            const obj = { val: 0 }
            animate(obj, {
              val: target,
              duration: 1400,
              ease: 'outExpo',
              onUpdate() {
                const display = isFloat
                  ? obj.val.toFixed(decimals)
                  : Math.round(obj.val).toString()
                el.textContent = `${prefix}${display}${suffix}`
              },
            })
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
