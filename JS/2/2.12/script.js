// Вывод чётных чисел от 2 до 10
for (a=2; a < 11; a++)
{
	if (a % 2 !== 0) continue
	console.log(a)
}

// Замена for на while 
let b = 0
while(b<3)
{
	console.log(`number ${b}!`)
	b++
}

// Использование метки
outer:
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) 
  {
    let input = prompt(`Значение на координатах (${i},${j})`, '')
	if (!input) break outer
  }
}
console.log('Success!'); 

// Вывод простых чисел от 2 до n
let c = 2
let n = 10
let d = 2

metka:
for (c=2; c<=n; c++)
{
	for(d=2; d<c; d++)
	{	
		if (c % d == 0) continue metka 
	}
	console.log(c)
}

// Повторять цикл, пока ввод неверен
let number
do
{
	number = prompt("Введите число больше 100")
} while (number <= 100 && number)
