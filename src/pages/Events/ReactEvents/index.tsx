/* eslint-disable no-console */
import { NextSeo } from 'next-seo'
import { useCallback } from 'react'
import { Page } from '../../_App/interfaces'
import {
  ReactEventsPageContentStyled,
  ReactEventsPageReactEventElementStyled,
  ReactEventsPageIntroStyled,
  ReactEventsPageStyled,
} from './styles'

export const ReactEventsPage: Page = () => {
  // const onMouseOver = () => {
  //   //
  // }

  const onMouseOver = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    console.log('onMouseOver event', event)
    console.log('onMouseOver event.target', event.target)
    console.log('onMouseOver event.currentTarget', event.currentTarget)

    // event.stopPropagation();
  }, [])

  /**
   * Когда водим мышкой по элементу
   */
  // const onMouseMove = useCallback((event: React.MouseReactEvent<HTMLDivElement>) => {
  //   console.log('onMouseMove event', event)
  //   console.log('onMouseMove event.target', event.target)
  //   console.log('onMouseMove event.currentTarget', event.currentTarget)
  // }, [])

  return (
    <>
      <NextSeo title="React Events" />

      <ReactEventsPageStyled>
        <ReactEventsPageIntroStyled>
          Здесь мы обыграем различные браузерные события
          <ul>
            <li>onMouseOver (при наведении мышки)</li>
            <li>onMouseMove (при движении мышки)</li>
            <li>onClick (кликнуть по кнопочке))))</li>
            <li>onKeyPress (нажать кнопочку на Клаве)</li>
            <li></li>
          </ul>
          <p>
            Отдельно следует изучить понятия{' '}
            <a href="https://learn.javascript.ru/bubbling-and-capturing">
              Всплытие и Погружение
            </a>
            .
          </p>
          <p>
            Важно понимать: в реакте через атрибуты события навешиваются не на
            сам целевой элемент, а на документ.
          </p>
        </ReactEventsPageIntroStyled>

        <ReactEventsPageContentStyled>
          <ReactEventsPageReactEventElementStyled
            className="mouse-events item-2"
            onMouseOver={onMouseOver}
            // onMouseMove={onMouseMove}
          >
            <div>События мышки</div>
          </ReactEventsPageReactEventElementStyled>
        </ReactEventsPageContentStyled>
      </ReactEventsPageStyled>
    </>
  )
}
