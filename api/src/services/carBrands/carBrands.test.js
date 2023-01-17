import {
  carBrands,
  carBrand,
  createCarBrand,
  updateCarBrand,
  deleteCarBrand,
} from './carBrands'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('carBrands', () => {
  scenario('returns all carBrands', async (scenario) => {
    const result = await carBrands()

    expect(result.length).toEqual(Object.keys(scenario.carBrand).length)
  })

  scenario('returns a single carBrand', async (scenario) => {
    const result = await carBrand({ id: scenario.carBrand.one.id })

    expect(result).toEqual(scenario.carBrand.one)
  })

  scenario('creates a carBrand', async () => {
    const result = await createCarBrand({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a carBrand', async (scenario) => {
    const original = await carBrand({
      id: scenario.carBrand.one.id,
    })
    const result = await updateCarBrand({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a carBrand', async (scenario) => {
    const original = await deleteCarBrand({
      id: scenario.carBrand.one.id,
    })
    const result = await carBrand({ id: original.id })

    expect(result).toEqual(null)
  })
})
