import React from 'react'

import { Meta } from '@storybook/react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'

import Component from '..'
import { UikitUserLinkProps as ComponentProps } from '../interfaces'

const title = 'prisma-cms.com/UI/UserLink'

interface ContainerProps extends ComponentProps {}

export const UserLink: React.FC<ContainerProps> = ({ ...other }) => {
  return (
    <div>
      <Component {...other} />
    </div>
  )
}

const args: Partial<ContainerProps> = {
  ...Component.defaultProps,
  size: 'normal',
  user: {
    id: 'user-id',
    fullname: 'Test user',
    username: 'test',
  },
}

export default {
  title,
  component: Component,
  argTypes: {},
  args,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>{title}</Title>
          <Subtitle>Content Editor used for Comments and Topics</Subtitle>
          <Description></Description>
          <Primary></Primary>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta
