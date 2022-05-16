import { NextSeo } from 'next-seo'
import Link from 'src/uikit/Link'
import { Page } from '../_App/interfaces'

export const Lessons: Page = () => {
  return (
    <>
      <NextSeo title="Уроки" />

      <ul>
        <li>
          <Link href="/lessons/lesson1" title="Создание страниц">
            Lesson1
          </Link>
        </li>
        <li>
          <Link href="/lessons/lesson2">Lesson2</Link>
        </li>
        <li>
          <Link href="/lessons/lesson3">Lesson3</Link>
        </li>
        <li>
          <Link href="/lessons/lesson4">Lesson4</Link>. Все можно редактировать!
        </li>
        <li>
          <Link href="/lessons/lesson5">Lesson5</Link>. Пятнашки
        </li>
      </ul>
    </>
  )
}
