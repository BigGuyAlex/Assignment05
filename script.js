let number = 0
let area = 0
let circumference = 0
let PI = 3.14

document.getElementById('button').addEventListener('click', calculate)

function calculate () {
  number = document.getElementById('input').value
  number = parseInt(number)
  PI = 3.14
  area = 0.25 * number ** 2 * PI
  circumference = PI * number
  document.getElementById('answer1').innerHTML = 'Area = ' + area
  document.getElementById('meaning2').innerHTML = 'Therefore, the Area of the Circle is ' + area
  document.getElementById('answer2').innerHTML = 'Circumference = ' + circumference
  document.getElementById('meaning1').innerHTML = 'The Circumference of the Circle is ' + circumference
}
