import {
  companies,
  company,
  createCompany,
  updateCompany,
  deleteCompany,
} from './companies'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('companies', () => {
  scenario('returns all companies', async (scenario) => {
    const result = await companies()

    expect(result.length).toEqual(Object.keys(scenario.company).length)
  })

  scenario('returns a single company', async (scenario) => {
    const result = await company({ id: scenario.company.one.id })

    expect(result).toEqual(scenario.company.one)
  })

  scenario('creates a company', async () => {
    const result = await createCompany({
      input: {
        name: 'String8376489',
        city: 'String',
        zipcode: 'String',
        country: 'String',
      },
    })

    expect(result.name).toEqual('String8376489')
    expect(result.city).toEqual('String')
    expect(result.zipcode).toEqual('String')
    expect(result.country).toEqual('String')
  })

  scenario('updates a company', async (scenario) => {
    const original = await company({ id: scenario.company.one.id })
    const result = await updateCompany({
      id: original.id,
      input: { name: 'String95993712' },
    })

    expect(result.name).toEqual('String95993712')
  })

  scenario('deletes a company', async (scenario) => {
    const original = await deleteCompany({
      id: scenario.company.one.id,
    })
    const result = await company({ id: original.id })

    expect(result).toEqual(null)
  })
})
