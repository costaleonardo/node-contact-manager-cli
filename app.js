const chalk = require('chalk')
const yargs = require('yargs')
const contacts = require('./contacts.js')

/**
 * @TODO
 * 
 * Command: Add
 */
yargs.command({
  command: 'add',
  describe: 'Add new contact.',
  builder: {
    name: {
      describe: 'Contact name.',
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'Contact email.',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    contacts.addContact(argv.name, argv.email)
  }
})

/**
 * @TODO
 * 
 * Command: Remove
 */
yargs.command({
  command: 'remove',
  describe: 'Remove contact.',
  builder: {
    name: {
      describe: 'Contact name.',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    contacts.removeContact(argv.name)
  }
})

console.log(yargs.argv)

