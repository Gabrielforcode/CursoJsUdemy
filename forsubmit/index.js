console.log('only for submit text')

let date = new Date('2022-12-12 01:01:01.000Z')
let date1 = new Date('2022-12-01 13:01:01.000Z').toLocaleTimeString('pt-BR',{hour12: false, timeZone: 'GMT'})
data.
console.log(date)
console.log(date1)


function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pr-BR', {
        hour12: false,
        timeZone: 'GMT' //'UTC'
    })

}

let segundos = 0

console.log(getTimeFromSeconds(10))
console.log(new Date(10* 1000))
console.log(new Date(10* 1000).toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'}))
console.log(new Date(1000)) //1970-01-01T00:00:01.000Z
console.log(new Date(1000).toLocaleTimeString())
console.log(new Date(1000).toLocaleTimeString('pt-br', {timeZone: 'GMT'}))

function iniciarRelogio (){
    const timer = setInterval(function(){
        segundos ++
        console.log(getTimeFromSeconds(segundos))
    }, 1000)
}







//btnAddTarefa.addEventListener('click', function(e){
//   if ( !inputTarefas.value) return;
////    criaTarefa(inputTarefas.value)
    
//})

var input = 15
function retorno (input){
if (!input) console.log(input)
console.log(input)}

retorno(15)

function regraTres(var1, var2, var3, ){
    return (var1 * var3)/ var2
}
console.log(regraTres(1,1.5,13))


var firstName = 'John', lastName = 'Doe', age = 35
console.log(firstName, lastName, age )




let txt = "I can eat bananas all day";
let x = txt.slice(10, 17).toL
console.log(x)

const cars = ["Saab", "Volvo", "BMW"].splice
console.log(cars[0])
cars[0] = "Ford"
console.log(cars)

const fruits = ["Banana", "Orange", "Apple", "Kiwi"].sort()
console.log(fruits)
fruits.splice(1,2)
console.log(fruits)

x = Math.sqrt

document.getElementById('demo').innerText
document.getElementsByTagName("demo").innerText
