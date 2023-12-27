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
	