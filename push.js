'use strict'

const items = [
	{ id: 111, name: 'Burger', price: 299 },
	{ id: 222, name: 'Fries', price: 150 },
	{ id: 333, name: 'Cola', price: 199 },
]

const newItem = { id: 4444, name: 'Hot dog', price: 99 }
items.push(newItem)
console.log(items)