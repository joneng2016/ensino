# Aula 3 - Memória

* A memória do computador é organizada em uma hierarquia.
* No nível mais alto (mais perto do processador), estão os *registradores do processador*.
* Níveis de cache: Quando são usados múltiplos níveis, eles são indicados por
L1, L2 e assim por diante.
* Em seguida, vem a memória principal, que normalmente é uma memória dinâmica de acesso aleatório e dinâmico (DRAM). 
* Todos estas anteriores são considerados internas ao sistema de computação. 
* A hierarquia continua com a memória externa, com o próximo nível geralmente sendo um disco rígido fixo, e um ou mais níveis abaixo disso consistindo em mídia removível, como discos ópticos e fita.
* internas ao sistema: acessíveis diretamente pelo processador
* externas: acessíveis pelo processador por meio de um módulo de E/S
* À medida que descemos na hierarquia da memória, encontramos:
    * custo/ bit menor,
    * capacidade maior e
    * tempo de acesso mais lento
* Seria bom usar apenas a memória mais rápida, mas como ela é a memória mais cara, trocamos tempo de acesso pelo custo, usando mais da memória mais lenta
* O desafio de projeto é organizar os dados e os programas na memória de modo que as palavras de memória acessadas normalmente estejam na memória mais rápida
* Se a memória cache for projetada corretamente, então, na maior parte do tempo, o processador solicitará palavras da memória que já estão na cache, e não precisará buscar na DRAM.
* As restrições de projeto sobre a memória de um computador podem ser resumidas por três questões:
  - Quanto?
  - Com que velocidade?
  - Com que custo? 