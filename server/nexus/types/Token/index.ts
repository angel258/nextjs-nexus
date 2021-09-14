import { extendType, objectType } from 'nexus'

export const TokenExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tokens({
      filtering: true,
      ordering: true,
    })
  },
})

export const Token = objectType({
  name: 'Token',
  sourceType: {
    module: '@prisma/client',
    export: 'Token',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.date('expiredAt')
    t.string('userId')
    t.field('User', {
      type: 'User',
      resolve({ userId }, _, ctx) {
        return userId
          ? ctx.prisma.user.findUnique({
              where: {
                id: userId,
              },
            })
          : null
      },
    })
  },
})
