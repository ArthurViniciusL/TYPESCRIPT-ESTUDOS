# Anotações do curso

- Repositório do curso: https://github.com/luizomf/cursojstypescript
- Repositório de estudos: https://github.com/ArthurViniciusL/TYPESCRIPT-ESTUDOS
- Documentação da linguagem: https://www.typescriptlang.org/docs/
## Sobre
Autor: Arthur Vinicius / Github: https://github.com/ArthurViniciusL

OBS: Esse resumo não foca explicar todos os detalhes de como programar, sendo interessante que você já domine a arte de programar.

Esse resumo também não busca em abraçar todos os detalhes do que é, como funciona e como usar o Typescript. Esse resumo foi feito como um guia de anotações para facilitar o meu entendimento de como trabalhar com Typescript, para o uso dele com React js ou Next js. 
### O que é Typescript.

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

![[imgs-notes/0002.png]]
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
### Declarando no Typescript.

Apesar do **Typescript** também realizar a inferência de tipos, uma das características do **Typescript** é permitir que você tenha mais controle sobre os tipos. 

O **Typescript** possui suporte para todos os tipos mais básicos e declaração de "estruturas" segue o mesmo modelo do Javascript, com _let_ e _var_ para variáveis e _const_ para constantes.

- #### Variáveis e constantes
```
let variavel: tipo = valor;
var ...
const ...
```

- #### Tipos no Typescript
1. **string** : Para trabalhar com texto.
2. **number** : Abrange a implementação de valores inteiros e reais.
3. **boolean** : true ou false.
4. **symbol** : É um pouco similar a String, mas ele usado para criar atributos de identificação (um id).
5. **bigint** : Dá suporte a valores inteiros que ultrapassam a capacidade _bytes_ suportados por um **number**.
6. **void**: O void serve para explicitar que a função não tem um retorno. Outra forma de d definir a função como _void_ é apenas **não declarando** o tipo da função.
7. **any**: Serve para declarar explicitamente que pode ser recebido qualquer coisa.
8. **unknown**: Também serve para explicitar que qualquer coisa pode ser recebida, mas possui uma camada de segurança a mais que te obriga a fazer uma _checagem antes de fazer uma atribuição_. 

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

![[imgs-notes/0021.png]]

### Enum
Um tipo **Enum** funciona como um _objeto_, onde eu tenho uma chave associada a um atributo. Ele serve para situações onde eu quero ter uma categoria de opções e em vez de usar um texto simples ou um valor numérico, eu desejo criar restrições afim de evitar erros.

O **Enum** por padrão não exite não existe no **Javascript**, já é uma implementação criada pelo **Typescript** e a sintaxe é similar a do **Java**.

**Sintaxe:**
```
enum NomeDaClasseEnum {
	ATRIBUTOS,
	...
}
```

	![[0021 1.png]]
	![[0022.png]]

### Type alias
É tipo usado para criar tipos personalizados, um pouco similar a criação de _interfaces_.

**Sintaxe:**
```
type nomeDoTipo = atributos;
```

![[imgs-notes/0024.png]]

### Type assertions
Esse é um recurso do **Typescript** muito útil para se trabalhar, por exemplo, trabalhar com a estrutura DOM do HTML no navegador.

Criar uma _assertion_ é explicitar para o **Typescript** que uma determina propriedade existe e não é nula.

**Sintaxe:**
```
... as HTMLpropriedaElement;
```

![[0025.png]]

### Classes
A estrutura de implementação das classes dentro **Typescript** segue uma estrutura similar a do **Java**.

Com o detalhe de que, sempre que for definir a classe deve ser usado o _export_, para criar uma classe publica, e sempre que for chamar uma classe deve ser usado o _import_. Porque assim como **Javascript**, o **Typescript** entende uma classe como um módulo.

**Sintaxe:***
```
export class NomeDaClasse {
	visibilidade atributo: tipo;
	
	constructor(atributos: tipos) {
		this.atributos;
	}
}
```

- #### Visibilidade dos métodos e atributos:
	1. **public**: Torna os métodos/atributos visíveis para todas as classes.
	2. **private**: Torna os métodos/atributos visíveis apenas dentro da classe.
	3. **protected**: Permite que métodos/atributos sejam visíveis apenas para classes que estendem a classe "mãe".
- #### Implementando uma classe:
	![[0026.png]]
	O uso do **readonly** serve para informar que esse atributo não pode ser modificado a qualquer momento e só deve está aceitável através do construtor da classe.
	![[0027.png]]
	 Instanciando a minha classe.
	![[0028.png]]
	![[0029.png]]
	
	A criação dos objetos poderia ser feita dentro do próprio arquivo com as classes. Mas eu optei por separá-los para trazer uma maior proximidade com a sintaxe do **Java**.
	
	 O nome da classe é definida como _Main()_ e dentro dela temos o método _start():void_ que constrói os objetos. E para que a classe seja inicializada é usado _Main.start();_

### Interfaces
A implementação de uma _interface_ **Typescript** também segue a mesma "linha de pensamento" de uma _interface_ dentro do Java.

**Sintaxe:**
```
interface NomeDaInterface {
	atributos;
}
```

![[0030.png]]

Essa é a forma mais simples de criar uma interface, mas no **Typescript** é possível fazer um _extends_ de várias interfaces em uma interface.  Isso pode ser interessante para fazer uma _union type_, semelhante ao que é feito quando se usa _type alias_.

- #### Implementando interfaces
	![[0031.png]]
	![[0032.png]]
	![[0033.png]]
