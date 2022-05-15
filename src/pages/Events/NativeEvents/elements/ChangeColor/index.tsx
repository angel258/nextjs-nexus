/* eslint-disable no-console */
import { useState } from 'react'
import { useMemo } from 'react'
import { useCallback, useEffect } from 'react'
import { ChangeColorStyled } from './styles'

/**
 * #1 Компонент Круг
 */
export const ChangeColor: React.FC = () => {
  /**
   * #3 Создание и обновление цвета
   */

  // let color = 'red'
  const [color, colorSetter] = useState<[number, number, number] | undefined>()

  console.log('color', color)

  /**
   * Здесь храним текущий узел, на который будут навешиваться события
   */
  const [div, divSetter] = useState<HTMLDivElement | null>()

  console.log('div', div)

  /**
   * #2.1 Получаем добавленный в DOM узел
   */
  const ref = useCallback((node: HTMLDivElement | null) => {
    //

    console.log('node', node)

    divSetter(node)
  }, [])

  /**
   * #2 Навешиваем событие на клик
   */
  useEffect(() => {
    if (!div) {
      return
    }

    /**
     * Обработчик по клику
     */
    const onClick = (event: MouseEvent) => {
      console.log('onClick event', div, event)

      // color = 'blue'

      const r = Math.round(Math.random() * 255)
      const g = Math.round(Math.random() * 255)
      const b = Math.round(Math.random() * 255)

      colorSetter([r, g, b])
    }

    /**
     * Навешиваем обработчик на конечный HTML-узел.
     */
    div.addEventListener('click', onClick)

    /**
     * Возвращаем функцию, которая будет вызвана при повторном эффекте
     * или при размонтировании компонента.
     */
    return () => {
      /**
       * Удаляем навешенную функцию, чтобы не создавались лишние обработчики
       */
      div.removeEventListener('click', onClick)
    }
  }, [div])

  const style = useMemo(() => {
    return {
      background: color ? `#${color.join('')}` : undefined,
    }
  }, [color])

  return <ChangeColorStyled ref={ref} style={style}></ChangeColorStyled>
}
