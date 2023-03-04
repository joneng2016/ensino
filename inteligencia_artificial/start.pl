/*Prolog Hello World Program*/
hello :- write('Hello World, This is my first program in Prolog!!!').

progenitor(sara,isaque).
progenitor(abraão,isaque).
progenitor(abraão,ismael).
progenitor(isaque,esaú).
progenitor(isaque,jacó).
progenitor(jacó,josé).

mulher(sara).
homem(isaque).
homem(abraão).
homem(ismael).
homem(esaú).
homem(jacó).
homem(josé).

filho_geral(Y,X) :- progenitor(X,Y).
mae(X,Y) :- progenitor(X,Y) , mulher(X).
avô_geral(X,Z) :- progenitor(X,Y), progenitor(Y,Z).
irmão(X,Y) :- progenitor(Z,X), progenitor(Z,Y), homem(X).
ancestral(X,Z) :- progenitor(X,Z).
ancestral(X,Z) :- progenitor(X,Y), ancestral(Y,Z).