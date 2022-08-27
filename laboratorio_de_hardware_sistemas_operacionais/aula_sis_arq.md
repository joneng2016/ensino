# Aula 1 - Sitema de Arquivos

* Conjunto de padrões usados para organizas os dados.
* Dados são diretórios e arquivos.
* Criado depois da formatação da unidade.
* Existem vários tipos disponíveis hoje em dia.
* Sistema de arquivos permitem gerenciar o espaço livre e o espaço ocupado
* Mantem a integridade dos dados - tal como manter registro dos arquivos que
são criados, destruídos ....


# Exemplos

FAT32, NTFS, ext2, ext3, ext4

## Família FAT

* File Allocation Table (Tabela de alocação de arquivos)
* Padrões de sistema DOS e Windows antigo
* Possui várias versões
* FAT 32 muito empregado em mídias removíveis hoje em dia.

### FAT 12

Suporta arquivo de no máximo 32 MB
Tamanho máximo de volume 32 MB

### FAT 16

Suporta arquivo de no máximo 2 GB
Tamanho máximo de volume 2 GB

### FAT 32

Suporta arquivo de no máximo 2/4 GB (com LFS - Large File  Support)
Tamanho máximo de volume 2 TB

## NTFS - New Technology File System (Nova tecnoloogia de sistema de arquivos)

* 1993
* Tamanho máxi 16 EB
* Trabalha com Journaling (min corrupção de arquivos)
* Suporta criptografia
* Compatível com Windows e Linux kernel > 2.2


## exFAT

* Extended File Allocation Table
* Sistema proprietário, criado em 2006 pela Microsoft.
* Max arq e volume 12PB
* Possui suporte em outros S.Os Android e Linux

# ext2, ext3 e ext4

* Sitema de arquivos para Linux
* ext3 journaling
* ext4 é o padrão
* arquivos de até 16 TB/ 1 EB max storage
* Não tem suporte a Windows, nem OS X

## HFS, HFS+, APFS

* Sitema de arquivos para Apple OS (OS X)
* Suporta arquivos de 2GB e volumes de 2TB
* APFS - mais moderno.
* Tamanho máxi de arquivo e volume 8 EB
* Apenas Apple

## ZFS

* Mantida pela Oracle
* Fork chamado OpenZFS
* Para servidores
* Proteção avançada para perda e corrupção de dados
* Suporta Linux, FreeBSD, TrueOS, Windows e OSX

# ISO 9660 - CDs

* Padrão orignal CD
* Nomes de arquivos: 8.3 caracteres
* Tamanho de volume restrido pelo tamanho da mídia de até 4 GB
* Suportado em Mac OS, Unix, Linux e Windows


# UDF

* Suporta volume de até 16 TB
* Suporta arquivo de até 16 EB
* Usado em DVDs


# tmpfs

* Sitema de arquivos temp. 
* Implementado em sistemas derivados do Unix, como Linux
* Armazena e acessa arquivos temp
* Rápido acesso
* Aumenta perfomance de arquivos
* Não requer espaço em disco dedicado para arquivos


## Outros Sitema de Arquivos 

* Sistema de Arquivos de Redes NFS, AFS
* Banco de Dados DBFS
* Dispositivos - devfs, udev
* Fita - LTFS

## Qual usar?
Windows NTFS, Linux ext4, .... Pendrive FAT32, exFat e para HDs mesma coisa que S.O


## Exercícios para prática

https://sites.google.com/view/sistemasar