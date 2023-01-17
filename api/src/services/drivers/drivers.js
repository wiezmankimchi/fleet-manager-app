import { db } from 'src/lib/db'

export const drivers = ({ page = 1, limit = 10, ...args }) => {
  const offset = (page - 1) * limit

  const where = args.filter
    ? {
        OR: [
          {
            id: {
              equals: isNaN(parseInt(args?.filter)) ? 0 : parseInt(args.filter),
            },
          },
          { firstName: { contains: args.filter } },
          { lastName: { contains: args.filter } },
          { registration: { contains: args.filter } },
        ],
      }
    : {}

  return {
    drivers: db.driver.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy: args.orderBy,
    }),
    count: db.driver.count(),
  }
}

export const driver = ({ id }) => {
  return db.driver.findUnique({
    where: { id },
  })
}

export const createDriver = ({ input }) => {
  return db.driver.create({
    data: input,
  })
}

export const updateDriver = ({ id, input }) => {
  return db.driver.update({
    data: input,
    where: { id },
  })
}

export const deleteDriver = ({ id }) => {
  return db.driver.delete({
    where: { id },
  })
}

export const Driver = {
  Car: (_obj, { root }) => {
    return db.driver.findUnique({ where: { id: root?.id } }).Car()
  },
  Company: (_obj, { root }) => {
    return db.driver.findUnique({ where: { id: root?.id } }).Company()
  },
}
