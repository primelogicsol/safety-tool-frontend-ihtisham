'use client'
import { useEffect, useState } from 'react'
import Counter from './Counter'

interface CounterUpProps {
  end: number;
}

export default function CounterUp({ end }: CounterUpProps) {
    const [inViewport, setInViewport] = useState(false)

    const handleScroll = () => {
        const elements = document.getElementsByClassName('count-text')
        if (elements.length > 0) {
            const element = elements[0]
            const rect = element.getBoundingClientRect()
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
            if (isInViewport && !inViewport) {
                setInViewport(true)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [inViewport])
    return (
        <>
            <span className="count-text">{inViewport && <Counter end={end} duration={20} />}</span>
        </>
    )
}
