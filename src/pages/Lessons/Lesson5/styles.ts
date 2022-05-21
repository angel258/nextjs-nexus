import styled, { css } from 'styled-components'

type Lesson5PageBoardCellStyledProps = {
  // Может быть перемещена
  moveable: boolean
}

export const Lesson5PageBoardCellStyled = styled.button<Lesson5PageBoardCellStyledProps>`
  border: 1px solid #ddd;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 2px 2px #d7cece;
  cursor: default;

  ${({ moveable }) => {
    if (moveable) {
      return css`
        cursor: pointer;
        background-color: #d5d4d4;

        &:hover {
          background-color: #cbc9c9;
        }
      `
    }
  }}
`

export const Lesson5PageBoardStyled = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`

export const Lesson5PageStyled = styled.div`
  .toolbar {
    margin: 15px 0;

    button {
      cursor: pointer;
    }
  }
`
