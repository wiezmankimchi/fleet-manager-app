import { db } from 'api/src/lib/db'
import { logger } from 'api/src/lib/logger'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const carBrands = [
      { name: 'Audi', heName: 'אודי' },
      { name: 'BMW', heName: 'ב.מ.וו.' },
      { name: 'Buick', heName: 'ביואיק' },
      { name: 'Opel', heName: 'אופל' },
      { name: 'Isuzu', heName: 'איסוזו' },
      { name: 'Alfa Romeo', heName: 'אלפא רומאו' },
      { name: 'Aston Martin', heName: 'אסטון מרטין' },
      { name: 'GM', heName: 'ג׳.מ.' },
      { name: 'GMC', heName: 'ג׳.מ.סי.' },
      { name: 'Jeep', heName: 'ג׳יפ' },
      { name: 'Geely', heName: 'ג׳ילי' },
      { name: 'Dacia', heName: 'דאצ׳יה' },
      { name: 'Dodge', heName: 'דודג׳' },
      { name: 'DS', heName: 'די.אס.' },
      { name: 'Daewoo', heName: 'דייהו' },
      { name: 'Daihatsu', heName: 'דייהטסו' },
      { name: 'Chrysler', heName: 'קריזלר' },
      { name: 'Honda', heName: 'הונדה' },
      { name: 'Volvo', heName: 'וולוו' },
      { name: 'Toyota', heName: 'טויוטה' },
      { name: 'Tesla', heName: 'טסלה' },
      { name: 'Jaguar', heName: 'יגואר' },
    ]

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      carBrands.map(async (brand) => {
        const newCarBrand = await db.carBrand.create({
          data: { name: brand.name, heName: brand.heName },
        })

        logger.debug({ data: newCarBrand }, 'Added post')
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
