// This is array : array = [n0,n1,n2,n3]
array = [3,4,6,5]
array.push(1)
array.push(1)
array.push(1)
console.log(array)
console.log('-----')

for(HowmanyPrint = 0; HowmanyPrint < array.length; HowmanyPrint++) {
    console.log(array[HowmanyPrint])
}

array.sort((a, b) => a - b)
console.log('------')
for(HowmanyPrint = 0; HowmanyPrint < array.length; HowmanyPrint++) {
    console.log(array[HowmanyPrint])
}
array2 = [1,4,12,3,0]
console.log('------')
console.log('Remember, array initial in number 0 and not 1!')
console.log(`Element 4 is on: ${array2.indexOf(4)} position`)
console.log(`Element 12 is on: ${array2.indexOf(12)} position`)