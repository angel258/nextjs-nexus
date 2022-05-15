import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import { ChangeColor } from './elements/ChangeColor'

export const NativeEventsPage: Page = () => {
  return (
    <>
      <NextSeo title="Нативные события" />

      <ChangeColor />
    </>
  )
}
