import { UserNoNestingFragment } from 'src/modules/gql/generated'

export interface UserAvatarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes?: Record<string, any>

  size?: 'normal' | 'small' | 'big'

  editable?: boolean

  user: Partial<UserNoNestingFragment> & {
    __typename?: 'User'
  }

  className?: string
}
