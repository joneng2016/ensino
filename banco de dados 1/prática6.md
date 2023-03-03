Hoje vamos enteder as facilidades que existe em utilizar uma ide. Antes acesso o banco 
de dados por linha de comando conforme nós estamos fazendo até o presente momento.

 cd C:\xampp\mysql\bin\

 .\mysql.exe -u root


Então, depois disso, crie uma base dados. Pode se chamar aula03032023. 

Feito isso, abra um navegador de preferência e acesse o seguinte website:

https://dbeaver.io/download/


Clique em Windows(installer). Você baixará um arquivo .zip, descompacte-o e inicie a instalação.

Depois disso execute os seguintes passos:

Clique no ícone que lembra um pequeno plugin de energia com um símbolo verde em forma de mais. 
Selecione a opção do MariaDB (poder ser MySQL também).
Ao aparecer a tela de configuração dos dados do banco faça o seguinte:

Database adicione o nome da base de dados que você criou
Username, adicone "root"
Password, mantenha vazio
Ao fazer isso, clique em "Teste Connection" 
Uma solicitação de instalação do driver será aberta, execute a instalação. 


Dentro da estrutura de pastas, clique na seta para baixo próximo ao nome do banco.
Acesse o "diretório" chamado Database
Você observará uma série de banco de dados. Naquele que você criou, clique com o botão direito do mouse e selecione a seguinte opção: 
"SQLEditor"



Agora você pode começar a escrever seus scripts. Vamos práticar o seguinte:


Crie uma tabela com os seguinte nome; atividade_dia_da_semana;

Nesta tabela crie as seguintes colunas:

dia_semana -> varchar (mas você pode tentar usar enum se você quiser se desafiar).
atividade -> text; 



Depois faça quatro inserts de atividades que você fez ao longo da semana.



Vamos comparar o MySQL Workbench com o Dbeaver. Para isso, acesse o link: https://dev.mysql.com/downloads/file/?id=516912. Clique em "No thanks, just start my download". Realize a instalação da ide. Abra a ide "você pode escrever Workbeanch no menu inicial". Clique em iniciar uma nova conexão (o simbolo é um +). Não se esqueça de adicionar um nome para a conexão. Depois disso, remova a tabela que você fez (DROP TABLE ....) e repita o procedimento no Workbench

Próximo passo consiste no seguinte: Acesse o link 



