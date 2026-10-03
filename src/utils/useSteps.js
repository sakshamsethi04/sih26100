import { useEffect, useRef, useState } from 'react'

/**
 * Plays a fixed list of steps one after another to simulate processing.
 * Returns the index of the step currently running (steps.length when done).
 * This is a front-end simulation only; no model or OCR is called.
 */
export function useSteps(count, { running = true, interval = 750, onDone, restartKey = 0 } = {}) {
  const [current, setCurrent] = useState(0)
  const done = useRef(onDone)
  done.current = onDone

  useEffect(() => {
    if (!running) return undefined
    setCurrent(0)
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setCurrent(i)
      if (i >= count) {
        clearInterval(timer)
        if (done.current) setTimeout(done.current, 500)
      }
    }, interval)
    return () => clearInterval(timer)
  }, [count, running, interval, restartKey])

  return current
}
