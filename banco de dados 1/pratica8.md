# Prática 7

Vamos aprender o conceito de valor único por coluna em uma tabela. Para isso vamos criar uma tabela chamada funcionarios (não se esqueça de criar e acessar
um banco de dados ou, então, de acessar algum banco de dados presete em sua máquina). Essa tabela deve ter as seguintes colunas

* id_funcionarios, que deve ser chave primária e conter autoincremento.
* nome, que é o nome do funcionário (pode ser uma varchar, tamanho você que decide).
* documento, contem cpf do funcionário (pode ser varchar também).
* funcao, função desempenhada pelo funcionário dentro da empresa (vou deixar o desafio de você usar um enum [1]). Você decide os possíveis cargos, mas segue um
exemplo: desenvolvedor, gerente de projeto, analista de negócio, coordenador técnico, gestor, diretor
* nivel, que pode ter quatro valores possíveis: nao_aplica, júnior, pleno ou sênior (você também pode utilizar, se achar apropriado, enum). 
* salário: pode ser ou float ou double.

Antes de finalizar a criação de sua tabela, perceba o seguinte - é impossível existir duas pessoas com o mesmo nome ou com o mesmo documento. Podemos adicionar uma 
trava na tabela para essa finalidade, que é UNIQUE. Um exemplo de aplicação em UNIQUE é a seguinte forma

```
CREATE TABLE funcionarios (
  id_func....
  nome VARCHAR(100) UNIQUE,
  ...
  ...
  documento VARCHAR(12) UNIQUE,
  ...
  ...
);
```


Para verificar se funcionou, realize o INSERT de um registro (fica a seu critério definir nome e documento, pode jogar valores como 11111111111 para cpf, por exemplo).
Feito isso, tente realizar um registro com o mesmo CPF ou com o mesmo nome. Houve o retorno de um erro? Esse erro está associado a tentar repetir o nome ? Então
funcionou conforme o esperado, sua tabela possui uma "Restrição" de não permitir inserir dois funcionários com o mesmo nome ou com o mesmo documento na mesma tabela.






[1] http://www.bosontreinamentos.com.br/mysql/tipos-de-dados-enum-mysql/
