import { cars, car, createCar, updateCar, deleteCar } from './cars'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cars', () => {
  scenario('returns all cars', async (scenario) => {
    const result = await cars()

    expect(result.length).toEqual(Object.keys(scenario.car).length)
  })

  scenario('returns a single car', async (scenario) => {
    const result = await car({ id: scenario.car.one.id })

    expect(result).toEqual(scenario.car.one)
  })

  scenario('creates a car', async () => {
    const result = await createCar({
      input: {
        registration: 'String',
        registrationDate: '2023-01-15T05:41:00.360Z',
        carModelId: 4744296,
      },
    })

    expect(result.registration).toEqual('String')
    expect(result.registrationDate).toEqual(
      new Date('2023-01-15T05:41:00.360Z')
    )

    expect(result.carModelId).toEqual(4744296)
  })

  scenario('updates a car', async (scenario) => {
    const original = await car({ id: scenario.car.one.id })
    const result = await updateCar({
      id: original.id,
      input: { registration: 'String2' },
    })

    expect(result.registration).toEqual('String2')
  })

  scenario('deletes a car', async (scenario) => {
    const original = await deleteCar({ id: scenario.car.one.id })
    const result = await car({ id: original.id })

    expect(result).toEqual(null)
  })
})
