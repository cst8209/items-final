const items = [
  { task: 'Buy Milk', complete: false },
  { task: 'Feed Cat', complete: true }
]

// displays the each item in items array
// displays each item's index
// displays an x for completed items
function showItems () {
  for (let i = 0; i < items.length; i++) {
    console.log(`${i}. ${items[i].complete ? 'x' : ' '} ${items[i].task}`)
  }

  return '[end]'
}

// add an new item object to the items array
// accepts the task as an argument
// set complete to false
function addItem (task) {
  items.push({
    task,
    complete: false
  })
  return 'Item added.'
}

// toggles the complete status of the desired item
// the desired item is retrieved by the provided index
function toggleComplete (index) {
  items[index].complete = !items[index].complete

  return 'Item updated.'
}
