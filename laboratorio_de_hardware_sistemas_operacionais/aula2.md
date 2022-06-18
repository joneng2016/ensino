# Aula2 

## Link

https://docs.microsoft.com/en-us/learn/modules/introduction-to-powershell/

## Objetivos de Aprendizagem

* Verificar como administrar as atividades do S.O usando powershell
* I

### Versão do Shell


```
$PSVersionTable
```

```
Name                           Value
 ----                           -----
 PSVersion                      7.1.4
 PSEdition                      Core
 GitCommitId                    7.1.4
 OS                             Linux 5.4.0-1058-azure #60~18.04.1-Ubuntu SMP Tue Aug 31 20:34:4…
 Platform                       Unix
 PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0…}
 PSRemotingProtocolVersion      2.3
 SerializationVersion           1.1.0.1
 WSManStackVersion              3.0

```


Com ponto você consegue acessar propriedades específicas


```
$PSVersionTable.PSVersion
```


```
Major  Minor  Patch  PreReleaseLabel BuildLabel
-----  -----  -----  --------------- ----------
7      1      4
```


## Get-Verb

Fornece os comandos, alias e uma descrição do mesmo para te ajudar a entender o que ele faz.


## Filtragem específica

```
Get-Command -Noun Process

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Debug-Process                                      7.0.0.0    Microsoft…
Cmdlet          Get-Process                                        7.0.0.0    Microsoft…
Cmdlet          Start-Process                                      7.0.0.0    Microsoft…
Cmdlet          Stop-Process                                       7.0.0.0    Microsoft…
Cmdlet          Wait-Process                                       7.0.0.0    Microsoft…

```




```
 Get-Command Get -Noun File
```

```
PS /home/jonathan.samara> Get-Command Get -Noun File

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Out-File                                           7.0.0.0    Microsoft.PowerShell.Utility
Cmdlet          Unblock-File                                       7.0.0.0    Microsoft.PowerShell.Utility
```


## Documentation Powershell 


https://docs.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started?preserve-view=true&view=powershell-7.2&WT.mc_id=academic-16634-chnoring&viewFallbackFrom=powershell-7.1


### Get-Help

Trás mais detalhes sobre um comando específico

Por exemplo - vamos verificar a estrutura do ls 

```
Get-Help -Name Copy

NAME
    Copy-Item
    
SYNTAX
    Copy-Item [-Path] <string[]> [[-Destination] <string>] [-Container] [-Force] [-Filter <string>] [-Include <string[]>] 
    [-Exclude <string[]>] [-Recurse] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-FromSession <PSSession>] 
    [-ToSession <PSSession>] [<CommonParameters>]
    
    Copy-Item [[-Destination] <string>] -LiteralPath <string[]> [-Container] [-Force] [-Filter <string>] [-Include <string[]>] 
    [-Exclude <string[]>] [-Recurse] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-FromSession <PSSession>] 
    [-ToSession <PSSession>] [<CommonParameters>]
    

ALIASES
    cpi
    copy
    

REMARKS
    Get-Help cannot find the Help files for this cmdlet on this computer. It is displaying only partial help.
        -- To download and install Help files for the module that includes this cmdlet, use Update-Help.
        -- To view the Help topic for this cmdlet online, type: "Get-Help Copy-Item -Online" or
           go to https://go.microsoft.com/fwlink/?LinkID=2096990.

```



Podemos buscar informações específicas sobre o comando que eu quero entender

```
Get-Help -Name Get-Command -Full
Get-Help -Name Get-Command -Detailed
Get-Help -Name Get-Command -Examples
Get-Help -Name Get-Command -Online
Get-Help -Name Get-Command -Parameter Noun
Get-Help -Name Get-Command -ShowWindow
```



A adição de * indica que nós queremos buscar todos os comandos que:

* command*  --- começam
* \*command\* --- estão no meio
* *command  --- terminam


```
help process*

PS /home/jonathan.samara> help process* 
PS /home/jonathan.samara>                                                                                               
```



```
help process*

PS /home/jonathan.samara> help *process 
Name                              Category  Module                    Synopsis
----                              --------  ------                    --------
Enter-PSHostProcess               Cmdlet    Microsoft.PowerShell.Core …
Exit-PSHostProcess                Cmdlet    Microsoft.PowerShell.Core …
Debug-Process                     Cmdlet    Microsoft.PowerShell.Man… …
Get-Process                       Cmdlet    Microsoft.PowerShell.Man… …
Start-Process                     Cmdlet    Microsoft.PowerShell.Man… …
Stop-Process                      Cmdlet    Microsoft.PowerShell.Man… …
Wait-Process                      Cmdlet    Microsoft.PowerShell.Man… …

                                                                                 
```


```
PS /home/jonathan.samara> help *process*                                                                                
                                                                                                                        
Name                              Category  Module                    Synopsis
----                              --------  ------                    --------
Enter-PSHostProcess               Cmdlet    Microsoft.PowerShell.Core …
Exit-PSHostProcess                Cmdlet    Microsoft.PowerShell.Core …
Get-PSHostProcessInfo             Cmdlet    Microsoft.PowerShell.Core …
Debug-Process                     Cmdlet    Microsoft.PowerShell.Man… …
Get-Process                       Cmdlet    Microsoft.PowerShell.Man… …
Start-Process                     Cmdlet    Microsoft.PowerShell.Man… …
Stop-Process                      Cmdlet    Microsoft.PowerShell.Man… …
Wait-Process                      Cmdlet    Microsoft.PowerShell.Man… …
```

### Alias

```
PS /home/jonathan.samara> Get-Alias -Name gcm

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           gcm -> Get-Command 
```



## Operadores de Comparação

Operator	Definition
* -eq               Igual a
* -ne               Diferente de
* -gt               Maior que
* -ge               Maior ou igual
* -lt               Menor que
* -le               Menor ou igual
* -Like             Está contido dentro
* -NotLike          Não está contido Está contido dentro
* -Contains         Contem um específico valor
* -NotContains      Define se a coleção não contem um valor específico
* -In               Define um valor específico na coleção
* -NotIn            Define se não existe na coleção
* -Replace          Substitui um valor específico

```
'PowerShell' -eq 'powershell'
```

```
'PowerShell' -ceq 'powershell'
```

```
'PowerShell' -ne 'powershell'
```


```
5 -gt 5
```


```
5 -ge 5
```

```
5 -lt 10
```

```
'PowerShell' -like '*shell'
```



```
$Numbers = 1..10
```

```
$Numbers -contains 15
```

```
$Numbers -notcontains 15
```


```
15 -in $Numbers
```

```
10 -in $Numbers
```




# Exercícios

Forneça a Versão do Powershell.

Em uma única instrução, forneça o SerializationVersion do seu Powershell

Em uma única instrução, forneça o sistema operacional onde o Powershell está sendo executado

Qual é o alias do comando cpi?

Usando o comando HELP, informe o que o comando cpi faz

Usando o comando Get-Command, apresente dos os comandos possíveis que contem Copy

Como você faz para comparar se 8 é maior que 10, 9 é igual a 15?