'use strict'

let string = 'JavaScript'

const index = string.indexOf('t')

console.log(index) // -1

if (index >= 0) {
	console.log('exists')
} else {
	console.log('does not exists')
}