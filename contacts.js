const fs = require('fs')
const chalk = require('chalk')

/**
 * @TODO
 * 
 * POST Add contact to file.
 */
const addContact = (name, email) => {
  const contacts = loadContacts();
  const duplicateContact = contacts.find(contact => contact.name === name)

  if (!duplicateContact) {
    contacts.push({
      name,
      email
    })

    saveContacts(contacts)
    
    console.log(chalk.green.inverse('Contact added.'))
  } else {
    console.log(chalk.red.inverse('Contact name already taken.'))
  }

  console.log(contacts);
}

/**
 * @TODO
 * 
 * POST Save current contact.
 */
const saveContacts = contacts => {
  const dataJSON = JSON.stringify(contacts)
  fs.writeFileSync('contacts.json', dataJSON)
}

/**
 * @TODO
 * 
 * GET Load all contacts.
 */
const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync('contacts.json')
    const dataJSON = dataBuffer.toString()

    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  addContact
}