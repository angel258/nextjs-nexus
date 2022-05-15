import { NextSeo } from 'next-seo'
import Link from 'next/link'

import { Page } from '../_App/interfaces'

export const MainPage: Page = () => {
  return (
    <>
      <NextSeo title="Main page" description="Main page description" />

      <div>Main Page</div>
      <div>Page1</div>
      <div>Page2</div>
      <div>Page3</div>
      <Link href="/page1">Page 1</Link>
      <br />
      <Link href="/page2">Page 2</Link>
      <br />
      <Link href="/page3">Page 3</Link>

      <div />

      <hr />
      <br />
    </>
  )
}

/**
 * Example.
 * Commit this if not needed.
 *
 * Get data before render page
 */
MainPage.getInitialProps = () => {
  return {
    statusCode: 200,
  }
}

export default MainPage
