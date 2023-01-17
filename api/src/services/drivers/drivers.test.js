import {
  drivers,
  driver,
  createDriver,
  updateDriver,
  deleteDriver,
} from './drivers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('drivers', () => {
  scenario('returns all drivers', async (scenario) => {
    const result = await drivers()

    expect(result.length).toEqual(Object.keys(scenario.driver).length)
  })

  scenario('returns a single driver', async (scenario) => {
    const result = await driver({ id: scenario.driver.one.id })

    expect(result).toEqual(scenario.driver.one)
  })

  scenario('creates a driver', async (scenario) => {
    const result = await createDriver({
      input: {
        lastName: 'String',
        companyId: scenario.driver.two.companyId,
        carId: scenario.driver.two.carId,
        firstName: 'String',
      },
    })

    expect(result.lastName).toEqual('String')
    expect(result.companyId).toEqual(scenario.driver.two.companyId)
    expect(result.carId).toEqual(scenario.driver.two.carId)
    expect(result.firstName).toEqual('String')
  })

  scenario('updates a driver', async (scenario) => {
    const original = await driver({ id: scenario.driver.one.id })
    const result = await updateDriver({
      id: original.id,
      input: { lastName: 'String2' },
    })

    expect(result.lastName).toEqual('String2')
  })

  scenario('deletes a driver', async (scenario) => {
    const original = await deleteDriver({
      id: scenario.driver.one.id,
    })
    const result = await driver({ id: original.id })

    expect(result).toEqual(null)
  })
})
