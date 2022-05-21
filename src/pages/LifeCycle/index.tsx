/* eslint-disable no-console */
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { Page } from '../_App/interfaces'

const Child = dynamic(import('./View'), {
  ssr: false,
})

export const Parent: Page = () => {
  const [title, titleSetter] = useState('LifeCycle')

  const onChangeTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTitle = event.currentTarget.value

      console.log('onChangeTitle event.currentTarget', event.currentTarget)
      console.log('onChangeTitle newTitle', newTitle)

      /**
       * Устанавливаем новое значение в стейт
       */
      titleSetter(newTitle)
    },
    []
  )

  console.log('Parent title', title)

  useEffect(() => {
    console.log('Parent useEffect title', title)

    return () => {
      console.log('Parent useEffect callback title', title)
    }
  }, [title])

  return (
    <>
      <NextSeo title="Жизненный цикл компонентов" />

      <p>
        <input type="text" value={title} onChange={onChangeTitle} /> Смена титла
        в стейте родительского компонента
      </p>

      <Child title={title} onChangeTitle={onChangeTitle} />
      {/* <Child title={'title'} onChangeTitle={onChangeTitle} />
      <Child title={title} onChangeTitle={onChangeTitle} />
      <Child title={title} onChangeTitle={onChangeTitle} /> */}
    </>
  )
}
