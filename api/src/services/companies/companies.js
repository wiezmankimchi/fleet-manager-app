import { db } from 'src/lib/db'

export const companies = ({ page = 1, limit = 10, ...args }) => {
  const offset = (page - 1) * limit

  const where = args.filter
    ? {
        OR: [
          {
            id: {
              equals: isNaN(parseInt(args?.filter)) ? 0 : parseInt(args.filter),
            },
          },
          { name: { contains: args.filter } },
        ],
      }
    : {}

  return {
    companies: db.company.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy: args.orderBy,
    }),
    count: db.company.count(),
  }
}

export const company = ({ id }) => {
  return db.company.findUnique({
    where: { id },
  })
}

export const createCompany = ({ input }) => {
  return db.company.create({
    data: input,
  })
}

export const updateCompany = ({ id, input }) => {
  return db.company.update({
    data: input,
    where: { id },
  })
}

export const deleteCompany = ({ id }) => {
  return db.company.delete({
    where: { id },
  })
}

export const Company = {
  Driver: (_obj, { root }) => {
    return db.company.findUnique({ where: { id: root?.id } }).Driver()
  },
}
