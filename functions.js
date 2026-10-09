// 1. Display the client list
function list(clientsArray) {
  const items = clientsArray.map(client => {
    return `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
      </li>
    `
  })

  return items.join('')
}

// 2. Sort clients by property
function order(clientsArray, property) {
  return clientsArray.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1
    } else if (a[property] > b[property]) {
      return 1
    } else {
      return 0
    }
  })
}

// 3. Calculate the total balance
function total(clientsArray) {
  return clientsArray.reduce((sum, client) => {
    return sum + client.balance
  }, 0)
}

// 4. Find a client by index
function info(index) {
  return clients.find(client => client.index === index)
}

// 5. Search clients by name
function search(query) {
  const searchName = query.toLowerCase()

  return clients.filter(client => {
    return client.name.toLowerCase().includes(searchName)
  })
}