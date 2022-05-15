/* eslint-disable no-console */
import { NextSeo } from 'next-seo'
import { useCallback, useEffect, useState } from 'react'
import { Page } from 'src/pages/_App/interfaces'

/**
 * Понимание базовых хуков
 * https://ru.reactjs.org/docs/hooks-intro.html
 */
export const ReactHooksPage: Page = () => {
  const [button, buttonSetter] = useState<HTMLButtonElement | null>(null)

  console.log('button', button)

  const [count, countSetter] = useState(0)

  const onClickCount = useCallback(() => {
    countSetter(count + 1)
  }, [count])

  useEffect(() => {
    // const button = document.querySelector('button')

    console.log('useEffect button', button)

    if (!button) {
      return
    }

    const id = Math.random()

    const onClick = (event: MouseEvent) => {
      console.log('onClick event ' + id, event)

      // if (event.target === button) {
      //   alert('Yes')
      // }
    }

    button?.addEventListener('click', onClick)

    return () => {
      button?.removeEventListener('click', onClick)
    }
  }, [button, count])

  useEffect(() => {
    console.log('useEffect count', count)

    if (count < 10) {
      countSetter(count + 1)
    }
  }, [count])

  return (
    <>
      <NextSeo title="React Hooks" />

      <button>Click me </button>
      <button ref={buttonSetter} onClick={onClickCount}>
        Click me {count}
      </button>
    </>
  )
}
