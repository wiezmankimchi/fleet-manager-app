import { db } from 'src/lib/db'

export const cars = () => {
  return db.car.findMany()
}

export const car = ({ id }) => {
  return db.car.findUnique({
    where: { id },
  })
}

export const createCar = ({ input }) => {
  return db.car.create({
    data: input,
  })
}

export const updateCar = ({ id, input }) => {
  return db.car.update({
    data: input,
    where: { id },
  })
}

export const deleteCar = ({ id }) => {
  return db.car.delete({
    where: { id },
  })
}

export const Car = {
  Driver: (_obj, { root }) => {
    return db.car.findUnique({ where: { id: root?.id } }).Driver()
  },
}
