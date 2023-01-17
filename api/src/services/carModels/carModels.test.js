import {
  carModels,
  carModel,
  createCarModel,
  updateCarModel,
  deleteCarModel,
} from './carModels'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('carModels', () => {
  scenario('returns all carModels', async (scenario) => {
    const result = await carModels()

    expect(result.length).toEqual(Object.keys(scenario.carModel).length)
  })

  scenario('returns a single carModel', async (scenario) => {
    const result = await carModel({ id: scenario.carModel.one.id })

    expect(result).toEqual(scenario.carModel.one)
  })

  scenario('creates a carModel', async (scenario) => {
    const result = await createCarModel({
      input: { name: 'String', carBrandId: scenario.carModel.two.carBrandId },
    })

    expect(result.name).toEqual('String')
    expect(result.carBrandId).toEqual(scenario.carModel.two.carBrandId)
  })

  scenario('updates a carModel', async (scenario) => {
    const original = await carModel({
      id: scenario.carModel.one.id,
    })
    const result = await updateCarModel({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a carModel', async (scenario) => {
    const original = await deleteCarModel({
      id: scenario.carModel.one.id,
    })
    const result = await carModel({ id: original.id })

    expect(result).toEqual(null)
  })
})
