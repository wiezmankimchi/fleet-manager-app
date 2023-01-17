import { db } from 'src/lib/db'

export const carBrands = ({ page = 1, limit = 10, ...args }) => {
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
          { heName: { contains: args.filter } },
        ],
      }
    : {}

    
  return {
    carBrands: db.carBrand.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy: args.orderBy,
    }),
    count: db.carBrand.count(),
  }
}

export const carBrand = ({ id }) => {
  return db.carBrand.findUnique({
    where: { id },
  })
}

export const createCarBrand = ({ input }) => {
  return db.carBrand.create({
    data: input,
  })
}

export const updateCarBrand = ({ id, input }) => {
  return db.carBrand.update({
    data: input,
    where: { id },
  })
}

export const deleteCarBrand = ({ id }) => {
  return db.carBrand.delete({
    where: { id },
  })
}

export const CarBrand = {
  CarModel: (_obj, { root }) => {
    return db.carBrand.findUnique({ where: { id: root?.id } }).CarModel()
  },
}
