import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'

export const Lesson1Page: Page = () => {
  return (
    <>
      <NextSeo title="Урок 1. Как создавать страницы." />

      <h3>Урок 1. Как создавать страницы.</h3>

      <h4>Добавить пункт меню</h4>
      <p>Заходим в src/pages/_App/MainMenu/index.tsx</p>
      <p>Добавляем в MainMenuStyled ссылку на пункт меню</p>
      <p>Сохраняем изменения Ctrl+S</p>

      <h4>Добавить роутер страницы в pages</h4>
      <p>В папке pages/lessons создаем папку, а в ней файл index.ts </p>
      <p></p>
      <h4>Добавить компонент страницы в src/pages</h4>
      <p>Создаем папку и в ней файл index.tsx</p>
      <p>Для проверки ошибок - NPM Scripts - types.</p>
    </>
  )
}
