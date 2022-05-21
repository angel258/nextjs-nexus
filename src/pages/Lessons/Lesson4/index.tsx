/* eslint-disable no-console */
import { NextSeo } from 'next-seo'
import { useCallback, useState } from 'react'
import { Page } from 'src/pages/_App/interfaces'
import { Lesson4PageStyled } from './styles'

export const Lesson4Page: Page = () => {
  const [container, containerSetter] = useState<HTMLDivElement | null>(null)

  const wrapTextsByH1Tag = useCallback(() => {
    if (!container) {
      return
    }

    /**
     * Находим контейнер, в котором наш весь пользовательский контент
     *
     * Важно! Изучить методы HtmlElement.querySelector и HtmlElement.querySelectorAll
     */
    const contentNode = container.querySelector('.content')

    if (!contentNode) {
      return
    }

    console.log('contentNode', contentNode)

    /**
     * Конечный массив найденных текстовых нод
     */
    const textNodes: Text[] = []

    /**
     * Функция, которая обходит все дерево DOM и находит нужные нам узлы по заданному фильтру
     */
    const walker = document.createTreeWalker(
      // Корневой узел, в котором надо найти все узлы
      contentNode,
      // Ищем только текстовые ноды
      NodeFilter.SHOW_TEXT,
      null
    )

    let node: Node | null

    // В цикле выполняем переобход узлов
    while ((node = walker.nextNode())) {
      // Если это текстовая нода, добавляем в массив
      if (node instanceof Text) {
        textNodes.push(node)
      }
    }

    console.log('textNodes', textNodes)

    /**
     * Теперь надо по всем найденным текстовым узлам обернуть текст в заданный тег
     */
    textNodes.forEach((n) => {
      // Создаем тег <h1>
      const h1 = n.ownerDocument.createElement('h1')
      // Задаем ему текст из текстовой ноды
      h1.innerText = n.textContent || ''
      // Текстовую ноду заменяем новым тегом
      n.replaceWith(h1)
    })

    //
    // 1 Находим все текстовые ноды
  }, [container])

  return (
    <>
      <NextSeo title="Урок 4. Все можно редактировать!" />

      <Lesson4PageStyled ref={containerSetter}>
        <p>
          Смысл урока в том, чтобы показать, что разные HTML-элементы могут быть
          сильно изменены и даже заменены другими.
        </p>

        <div className="actions">
          <button onClick={wrapTextsByH1Tag}>
            Текстовые ноды обернуть в тег h1
          </button>
        </div>

        <div className="content">
          <div className="text">Тестовый текст</div>

          <div className="ul">
            <div className="li">Some text</div>
            <div className="li">Some text</div>
          </div>
          <ul>
            <li>sdfdsf</li>
          </ul>

          <input title="sdfsdf" placeholder="some text" />

          <br />

          <textarea defaultValue={'Some text'} />
        </div>
      </Lesson4PageStyled>
    </>
  )
}
