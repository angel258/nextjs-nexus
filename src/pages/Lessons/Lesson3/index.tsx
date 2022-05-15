import { NextSeo } from 'next-seo'
import { MyComponent } from 'src/components/MyComponent'
import { Page } from 'src/pages/_App/interfaces'

export const Lesson3Page: Page = () => {
  const title = 'Урок 3. Как создавать страницы.'

  return (
    <>
      <NextSeo title={title} />

      <h3>{title}</h3>

      <MyComponent name="Olga" index={0} />
    </>
  )
}
