'use strict'

const db = require('../server/db')
const {Thing} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const things = await Promise.all([
    Thing.create({name: 'coolthing', status: 'LIVE'}),
    Thing.create({name: 'lamething', health: 90 })
  ])

  console.log(`seeded ${things.length} things`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}
