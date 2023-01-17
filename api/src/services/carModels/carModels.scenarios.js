export const standard = defineScenario({
  carModel: {
    one: { data: { name: 'String', CarBrand: { create: { name: 'String' } } } },
    two: { data: { name: 'String', CarBrand: { create: { name: 'String' } } } },
  },
})
