import Link from 'next/link'
import { MainMenuStyled } from './styles'

export const MainMenu: React.FC = () => {
  return (
    <MainMenuStyled>
      <Link href="/">Главная</Link>
      <Link href="/react-hooks">Хуки</Link>
      <Link href="/events/react-events">Реактовые события</Link>
      <Link href="/events/native-events">Нативные события</Link>
    </MainMenuStyled>
  )
}
