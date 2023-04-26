'use strict'

const firstArray = [6, 19, 20, 21, 102, 5]
const secondArray = [19, 81, 2, 21, 22, 102, 5]
const thirdArray = [5, 12, 222, 21, 22, 110]

for (let i = 0; i < firstArray.length; i++) {
	for (let j = 0; j < secondArray.length; j++) {
		for (let k = 0; k < thirdArray.length; k++) {
			if (firstArray[i] === secondArray[j] && secondArray[j] === thirdArray[k]) {
				console.log('Three cycles have a numbers: ' + thirdArray[k])
			}
		}
	}
}