/* eslint-disable no-console */
import { NextSeo } from 'next-seo'
import { useTokensQuery } from 'src/modules/gql/generated/tokens'
import { Page } from '../_App/interfaces'
import UikitUserLink from '../../uikit/Link/User'

/**
 * Страница токенов авторизации пользователей
 */
export const TokensPage: Page = () => {
  const response = useTokensQuery({
    variables: {
      take: 5,
      where: {
        User: {
          username: {
            equals: 'admin',
          },
        },
      },
    },
  })

  console.log('response', response)

  return (
    <>
      <NextSeo title="Токены" />

      <table
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        border="1"
        style={{
          borderColor: 'red',
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Дата авторизации</th>
            <th>Пользователь</th>
          </tr>
        </thead>
        <tbody>
          {response.data?.tokens.map((token) => {
            return (
              <tr key={token.id}>
                <td>{token.id}</td>
                <td>{token.createdAt}</td>
                <td>
                  <UikitUserLink user={token.User} size="small" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
