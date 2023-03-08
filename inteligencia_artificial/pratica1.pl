professor(jonathan,lucas).
professor(jonathan,braiam).
professor(jonathan,guilherme).
professor(jonathan,bruno).
temaula(lucas,ia).
temaula(braiam,ia).
temaula(guilherme,testes).
temaula(bruno,testes).
ministra(jonathan,testes).
ministra(jonathan,ia).
ministra(leander,ux).
aluno(Y,X) :- professor(X,Y).
ensina(X,Y,Z) :- professor(X,Y), ministra(X,Z).
