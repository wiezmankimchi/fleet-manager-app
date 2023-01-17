import { db } from 'src/lib/db'

export const carModels = ({ page = 1, limit = 10, ...args }) => {
  const offset = (page - 1) * limit

  const where = args.filter
    ? {
        OR: [
          {
            id: {
              equals: isNaN(parseInt(args?.filter)) ? 0 : parseInt(args.filter),
            },
          },
          { name: { contains: args?.filter } },
          { heName: { contains: args?.filter } },
        ],
      }
    : {}

  return {
    carModels: db.carModel.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy: args.orderBy,
    }),
    count: db.carModel.count(),
  }
}

export const carModel = ({ id }) => {
  return db.carModel.findUnique({
    where: { id },
  })
}

export const createCarModel = ({ input }) => {
  return db.carModel.create({
    data: input,
  })
}

export const updateCarModel = ({ id, input }) => {
  return db.carModel.update({
    data: input,
    where: { id },
  })
}

export const deleteCarModel = ({ id }) => {
  return db.carModel.delete({
    where: { id },
  })
}

export const CarModel = {
  CarBrand: (_obj, { root }) => {
    return db.carModel.findUnique({ where: { id: root?.id } }).CarBrand()
  },
}
