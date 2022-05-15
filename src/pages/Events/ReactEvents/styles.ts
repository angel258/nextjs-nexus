import styled from 'styled-components'

export const ReactEventsPageIntroStyled = styled.div``
export const ReactEventsPageContentStyled = styled.div``

/**
 * Элемент, на который мы будем навешивать события
 */
export const ReactEventsPageReactEventElementStyled = styled.div`
  border: 1px solid #ddd;
  width: 300px;
  height: 200px;

  &.mouse-events {
    > div {
      border: 1px solid blue;
    }
  }
`

export const ReactEventsPageStyled = styled.div`
  ${ReactEventsPageIntroStyled} {
    margin-bottom: 15;
  }
`
