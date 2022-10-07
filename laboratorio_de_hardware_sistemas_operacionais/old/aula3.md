# Controladores de Fluxo


## for

```
for ($i = 1; $i -lt 5; $i++) {
  Write-Output "Sleeping for $i seconds"
  Start-Sleep -Seconds $i
}
```


## do util

```
$number = Get-Random -Minimum 1 -Maximum 10
do {
  $guess = Read-Host -Prompt "What's your guess?"
  if ($guess -lt $number) {
    Write-Output 'Too low!'
  }
  elseif ($guess -gt $number) {
    Write-Output 'Too high!'
  }
}
until ($guess -eq $number)
```



## do while
```
$number = Get-Random -Minimum 1 -Maximum 10
do {
  $guess = Read-Host -Prompt "What's your guess?"
  if ($guess -lt $number) {
    Write-Output 'Too low!'
  } elseif ($guess -gt $number) {
    Write-Output 'Too high!'
  }
}
while ($guess -ne $number)
```



## whilte
```
$date = Get-Date -Date 'November 22'
while ($date.DayOfWeek -ne 'Thursday') {
  $date = $date.AddDays(1)
}
Write-Output $date
```


### break
```
$i = 0;
for ($i = 1; $i -lt 5; $i++) {
  Write-Output "Sleeping for $i seconds"
  Start-Sleep -Seconds $i
  break
}
```



### foreach

```
$number = 1..10
foreach ($n in $number) {
  if ($n -ge 4) {
    Return $n
  }
}
```




# Exercícios

1 - Crie um script que cria 30 diretórios. O nome dos diretórios deve começar dir e, então, receber números de 0 a 30

2 - Mesmo que 1, porém comeeçando com 30 e indo até 60

3 - Mesmo que 1, porém na interação 20 - o nome da pasta deve ser "specialDir" em vez de "dir20"

4 - Uma vez executado o exercício 1. Crie um script que entre em cada diretório e cria um arquivo chamado "meu_nome_nao_eh_jony"

5 - Escreva, dentro de cada arquivo, "Hello World " e logo em seguida o número que corresponde ao número do diretório. Por exemplo
dir1 -> "meu nome não é Jone", deve conter a seguinte informação "Hello World 1" 




