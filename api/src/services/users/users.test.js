import { users, user, createUser, updateUser, deleteUser } from './users'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        username: 'String4805580',
        hashedPassword: 'String',
        salt: 'String',
      },
    })

    expect(result.username).toEqual('String4805580')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
  })

  scenario('updates a user', async (scenario) => {
    const original = await user({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { username: 'String33512562' },
    })

    expect(result.username).toEqual('String33512562')
  })

  scenario('deletes a user', async (scenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
