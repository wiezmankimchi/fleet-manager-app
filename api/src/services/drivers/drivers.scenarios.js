export const standard = defineScenario({
  driver: {
    one: {
      data: {
        lastName: 'String',
        firstName: 'String',
        Car: {
          create: {
            registration: 'String',
            registrationDate: '2023-01-15T05:40:11.934Z',
            carModelId: 7299228,
          },
        },
        Company: {
          create: {
            name: 'String2297918',
            city: 'String',
            zipcode: 'String',
            country: 'String',
          },
        },
      },
    },
    two: {
      data: {
        lastName: 'String',
        firstName: 'String',
        Car: {
          create: {
            registration: 'String',
            registrationDate: '2023-01-15T05:40:11.934Z',
            carModelId: 2229531,
          },
        },
        Company: {
          create: {
            name: 'String5379766',
            city: 'String',
            zipcode: 'String',
            country: 'String',
          },
        },
      },
    },
  },
})
