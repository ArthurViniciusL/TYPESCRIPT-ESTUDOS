# Anotações do curso

- Repositório do curso: https://github.com/luizomf/cursojstypescript
- Repositório de estudos: https://github.com/ArthurViniciusL/TYPESCRIPT-ESTUDOS
## Aula 420 - O que é Typescript.

O Typescript é um superset para o Javascript, com tipagem estática, novos recursos e que compila para Javascript puro.

- #### Superset
	Um superset seria uma camada adicional para os recursos implementados dentro do Javascript.
	![[0001.png]]
	Os novos recursos mais significativos e interessantes são: Regras de tipagem e um melhor suporte a orientação a objetos com a inserção de, por exemplo, encapsulamento.
------------------------------------------------------------------------
### Começando no Typescript

- #### Inciando um projeto com o node

```
npm init -y 
```

![[0002.png]]
________________________________________________________________________

- #### Instalando o Typescript

```
npm i typescript -D
```

![[0003.png]]![[0004.png]]
________________________________________________________________________

### Configurando o ambiente Typescript.

- #### Executando o Typescript

	```
	node nome_do_arquivo.ts
	```

	![[0005.png]]
________________________________________________________________________
- #### Compilando o Typescript
	```
	npx tsc
	```
________________________________________________________________________
- #### Criando um arquivo de configuração para o Typescript
	Parte da documentação: https://www.typescriptlang.org/docs/handbook/compiler-options.html
	
	Esse arquivo de configuração é bastante útil para especificar qual versão do Ecma Script deve ser usada no projeto, qual o modulo usado para compilar, quais recurso estão sendo usados no projeto (_"lib": ["ESNext", "DOM" ... etc]_)
	 e etc.
	```
	npx tsc --init
	```
	![[0013.png]]
	![[0014.png]]
	Dentro do arquivo exite mais recursos e explicações de qual a utilidade desse recurso.
________________________________________________________________________
- #### Criando a pasta dos compilados
	Para organizar melhor a estrutura de arquivos do projeto nós podemos criar a pasta a pasta _**src**_ para os arquivos _.ts_ e a pasta _**dist**_ para os arquivos compilados (_.js_).
	
	E para automatizar esse processo de "jogar" os arquivos _.js_ na pasta _**dist**_ nós podemos utilizar o arquivos _tsconfig.json_.
	
	1. Informar o caminho da pasta de saída dentro do objeto JSON "_compilerOptions_"
	![[0015.png]]
	2. Criar o objeto JSON "_include_" que define onde está estão os arquivos na hora da compilação.
	![[0016.png]]
	3. O resultado é final.
		![[0017.png]]
________________________________________________________________________

- #### Configurando o VS Code para executar

	Em termos práticos essa pequena configuração é feita apenas para facilitar o prendizado no Typescript.
	
	Nesse exemplo a configuração para VS Code executar o código Typscript vai ser feita unicamente para esse projeto.
  
	1. Crie a pasta **.vscode**:
		![[0006.png]]
	2. Crie o arquivo: **settings.json** dentro da pasta:
		![[0007.png]]
	3. Procure pelas configurações de execução (code-runner.executorMap) na extensão **Code Runner**: 
		![[0008.png]]
	4. Informe o método de compilação: **npx ts-node --files**
	```
	{
		"code-runner.executorMap": {
			"typescript": "npx ts-node --files"
		}
	}
	```

	5. Execute o código
		![[0010.png]]
________________________________________________________________________

- #### Instalando e integrando a extensão ESLint com o Typescript.
	
	Essa extensão serve como uma sistema de verificação da sintaxe do **Typescript** enquanto você escreve o código.
	
	- Extensão:
		VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
		![[0011.png]]
	
	- Integração

	```
	npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
	```

	![[0012.png]]
## Aula 429 - Tipos no Typescript.

Apesar do **Typescript** também realizar a inferência de tipos, uma das características do **Typescript** é permitir que você tenha mais controle sobre os tipos. 

O **Typescript** possui suporte para todos os tipos mais básicos e declaração de "estruturas" segue o mesmo modelo do Javascript, com _let_ e _var_ para variáveis e _const_ para constantes.
### Variáveis e constantes
```
let variavel: tipo = valor;
var ...
const ...
```

### Tipos no Typescript
1. **string** : Para trabalhar com texto.
2. **number** : Abrange a implementação de valores inteiros e reais.
3. **boolean** : true ou false.
4. **symbol** : É um pouco similar a String, mas ele usado para criar atributos de identificação (um id).
5. **bigint** : Dá suporte a valores inteiros que ultrapassam a capacidade _bytes_ suportados por um **number**.
6. **void**: O void serve para explicitar que a função não tem um retorno. Outra forma de d definir a função como _void_ é apenas **não declarando** o tipo da função.
7. **any**: Serve para declarar explicitamente que é esperado qualquer coisa.

![[0018.png]]
### Arrays

Existem duas formas de declarar um Array dentro do **Typescript**.
1. A mais comum
	**Sintaxe:**
	```
	let nomeDoArray: tipo[] = [ valores ];
	```
	
2. Utilizando a noção de _generics_.
	**Sintaxe:**
	```
	let nomeDoArray: Array<tipo> = [ valores ];
	```
	![[0019.png]]
### Objetos
A declaração de objetos dentro do **Typescript** segue do mesmo jeito que no **Javascript**, mas com a possibilidade de definir tipos e declarar campos opcionais.

**Sintaxe**
```
let nomeDoObjeto: {atributo: tipo} = { valoresDosObjetos }
```

Atributos considerados "opcionais" são declarados com um uma _?_.
![[0020.png]]

### Funções

A declaração de funções também segue o mesmo modelo do **Javascript**, podendo ser de algum tipo específico (_number_, _string_, _boolean_ e etc), ou do tipo _void_, elas também pode ser escritas de duas maneira no **Typescript**.

1. Modelo tradicional.
	```
	function nomeDaFunc(atributo: tipo): tipoDaFunc {...}
	```
1. Modelo _inline_, que é similar a uma _arrow function_ e é interpresante de ser usado em funções mais simples.
	```
	const nomeDaFunc(atributo: tipo) => tipoDaFunc(atributo) => retorno;
	```

![[0021.png]]

AAA