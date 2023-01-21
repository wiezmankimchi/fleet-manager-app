import { db } from 'api/src/lib/db'
import { logger } from 'api/src/lib/logger'

import { hashPassword } from '@redwoodjs/api'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const carBrands = [
      { name: 'Audi', heName: 'אאודי' },
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

    const users = [
      {
        username: 'admin',
        email: 'wiezmankimchi@gmail.com',
        firstname: 'Wiezman',
        lastname: 'Kimchi',
        password: 'TELaviv1967',
        role: 'ADMIN',
      },
      {
        username: 'wiezman',
        email: 'wiezmankimchi@gmail.com',
        firstname: 'Wiezman',
        lastname: 'Kimchi',
        password: 'TELaviv1967',
        role: 'ADMIN',
      },
      {
        username: 'iris',
        email: 'iris.kimchi@gmail.com',
        firstname: 'Iris',
        lastname: 'Kimchi',
        password: 'TELaviv1967',
        role: 'USER',
      },
    ]

    const carModels = [
      { carBrandId: 1, name: 'A1', heName: 'A1' },
      { carBrandId: 1, name: 'A3', heName: 'A3' },
      { carBrandId: 1, name: 'A4', heName: 'A4' },
      { carBrandId: 1, name: 'A5', heName: 'A5' },
      { carBrandId: 1, name: 'A6', heName: 'A6' },
      { carBrandId: 1, name: 'A7', heName: 'A7' },
      { carBrandId: 1, name: 'A8', heName: 'A8' },
      { carBrandId: 1, name: 'E TRON', heName: 'E TRON' },
      { carBrandId: 1, name: 'Q2', heName: 'Q2' },
      { carBrandId: 1, name: 'Q3', heName: 'Q3' },
      { carBrandId: 1, name: 'Q4', heName: 'Q4' },
      { carBrandId: 1, name: 'Q4 E-tron', heName: 'Q4 E-tron' },
      { carBrandId: 1, name: 'Q5', heName: 'Q5' },
      { carBrandId: 1, name: 'Q7', heName: 'Q7' },
      { carBrandId: 1, name: 'Q8', heName: 'Q8' },
      { carBrandId: 1, name: 'R8', heName: 'R8' },
      { carBrandId: 1, name: 'S1', heName: 'S1' },
      { carBrandId: 1, name: 'S3', heName: 'S3' },
      { carBrandId: 1, name: 'S5', heName: 'S5' },
      { carBrandId: 1, name: 'S8', heName: 'S8' },
      { carBrandId: 3, name: 'ASTRA', heName: 'אסטרה' },
      { carBrandId: 3, name: 'CORSA', heName: 'קורסה' },
      { carBrandId: 3, name: 'INSIGNIA', heName: 'אינסיגניה' },
      { carBrandId: 3, name: 'ZAFIRA', heName: 'זפירה' },
      { carBrandId: 5, name: 'Alfa Gulieta', heName: 'אלפא ג׳וליאטה' },
      { carBrandId: 5, name: 'Alfa Mito', heName: 'אלפא מיטו' },
      { carBrandId: 5, name: 'Giulia', heName: 'ג׳וליה' },
      { carBrandId: 5, name: 'Stelvio', heName: 'סטלוויו' },
      { carBrandId: 5, name: 'Tonale', heName: 'טונל' },
      { carBrandId: 2, name: '118i', heName: '118i' },
      { carBrandId: 2, name: '125i', heName: '125i' },
      { carBrandId: 2, name: '220i', heName: '220i' },
      { carBrandId: 2, name: '318i', heName: '318i' },
      { carBrandId: 2, name: '320E', heName: '320E' },
      { carBrandId: 2, name: '320E', heName: '320E' },
      { carBrandId: 2, name: '330E', heName: '330E' },
      { carBrandId: 2, name: '330i', heName: '330i' },
      { carBrandId: 2, name: '340i', heName: '340i' },
      { carBrandId: 2, name: '420i', heName: '420i' },
      { carBrandId: 2, name: '430i', heName: '430i' },
      { carBrandId: 2, name: '440i', heName: '440i' },
      { carBrandId: 2, name: '520D', heName: '520D' },
      { carBrandId: 2, name: '520E', heName: '520E' },
      { carBrandId: 2, name: '520i', heName: '520i' },
      { carBrandId: 2, name: '530E', heName: '530E' },
      { carBrandId: 2, name: '530i', heName: '530i' },
      { carBrandId: 2, name: '540i', heName: '540i' },
      { carBrandId: 2, name: '640i', heName: '640i' },
      { carBrandId: 2, name: '740i', heName: '740i' },
      { carBrandId: 2, name: '745E', heName: '745E' },
      { carBrandId: 2, name: '750i', heName: '750i' },
      { carBrandId: 2, name: 'Cooper', heName: 'קופר' },
      { carBrandId: 2, name: 'Cooper S', heName: 'קופר אס' },
      { carBrandId: 2, name: 'Countryman', heName: 'קאונארימן' },
      { carBrandId: 2, name: 'i3', heName: 'i3' },
      { carBrandId: 2, name: 'i4', heName: 'i4' },
      { carBrandId: 2, name: 'i8', heName: 'i8' },
      { carBrandId: 2, name: 'IX', heName: 'IX' },
      { carBrandId: 2, name: 'M2', heName: 'M2' },
      { carBrandId: 2, name: 'M3', heName: 'M3' },
      { carBrandId: 2, name: 'M4', heName: 'M4' },
      { carBrandId: 2, name: 'M5', heName: 'M5' },
      { carBrandId: 2, name: 'M6', heName: 'M6' },
      { carBrandId: 2, name: 'M8', heName: 'M8' },
      { carBrandId: 9, name: 'Cherokee', heName: 'צ׳ירוקי' },
      { carBrandId: 9, name: 'Compass', heName: 'קומפס' },
      { carBrandId: 9, name: 'Grand Cherokee', heName: 'גראנד צ׳ירוקי' },
      { carBrandId: 9, name: 'Renegade', heName: 'רנאגד' },
      { carBrandId: 9, name: 'Rubicon', heName: 'רוביקון' },
      { carBrandId: 9, name: 'Wagoneer', heName: 'וואגוניר' },
      { carBrandId: 9, name: 'Wrangler', heName: 'ראנגלר' },
      { carBrandId: 17, name: 'Accord Hybrid', heName: 'אקורד היברידי' },
      { carBrandId: 17, name: 'Acura MDX', heName: 'אקיורה MDX' },
      { carBrandId: 17, name: 'Civic', heName: 'סיביק' },
      { carBrandId: 17, name: 'Civic Hybrid', heName: 'סיביק היברידי' },
      { carBrandId: 17, name: 'CR-V', heName: 'סי-אר-וי' },
      { carBrandId: 17, name: 'CR-V Hybrid', heName: 'סי-אר-וי היברידי' },
      { carBrandId: 17, name: 'HR-V', heName: 'אצ׳-אר-וי' },
      { carBrandId: 17, name: 'Jazz', heName: 'ג׳אז' },
      { carBrandId: 17, name: 'Odyssey', heName: 'אודיסי' },
      { carBrandId: 17, name: 'Pilot', heName: 'פילוט' },
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
      }),
      users.map(async (user) => {
        const [hashedPassword, salt] = hashPassword(user.password)
        const newUser = await db.user.create({
          data: {
            username: user.username,
            hashedPassword: hashedPassword,
            salt: salt,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
          },
        })
        logger.debug({ data: newUser }, 'Added post')
      }),
      carModels.map(async (model) => {
        const newCarModel = await db.carModel.create({
          data: {
            name: model.name,
            heName: model.heName,
            carBrandId: model.carBrandId,
          },
        })
        logger.debug({ data: newCarModel }, 'Added post')
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
