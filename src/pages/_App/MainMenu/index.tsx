import Link from 'next/link'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'
import { MainMenuStyled } from './styles'

export const MainMenu: React.FC = () => {
  const context = useContext(Context)

  const user = context?.user ? (
    <div>{context.user.fullname || context.user.username || 'NoName'}</div>
  ) : (
    <Link href="/signin">SignIn</Link>
  )

  // let user: JSX.Element | undefined

  // if(context?.user) {
  //   user = <div>{context.user.fullname || context.user.username || 'NoName'}</div>
  // }

  return (
    <MainMenuStyled>
      <Link href="/">MainPage</Link>
      <Link href="/lessons">Lessons</Link>
      <Link href="/lessons/lesson1">
        <a title="Создание страниц">Lesson1</a>
      </Link>
      <Link href="/lessons/lesson2">Lesson2</Link>
      <Link href="/lessons/lesson3">Lesson3</Link>
      <div className="separator" />

      {context?.hello || ''}

      {user}
    </MainMenuStyled>
  )
}
