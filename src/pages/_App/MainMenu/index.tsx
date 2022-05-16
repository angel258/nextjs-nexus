import React, { useContext } from 'react'
import Link from 'next/link'
import { MainMenuStyled } from './styles'
import { Context } from '../Context'

export const MainMenu: React.FC = () => {
  const context = useContext(Context)

  const user = context?.user ? (
    <div>{context.user.fullname || context.user.username || 'NoName'}</div>
  ) : (
    <Link href="/signin">SignIn</Link>
  )

  return (
    <MainMenuStyled>
      <Link href="/">Главная</Link>
      <Link href="/react-hooks">Хуки</Link>
      <Link href="/events/react-events">Реактовые события</Link>
      <Link href="/events/native-events">Нативные события</Link>
      <Link href="/lessons">Lessons</Link>
      <div className="separator" />

      {context?.hello || ''}

      {user}
    </MainMenuStyled>
  )
}
