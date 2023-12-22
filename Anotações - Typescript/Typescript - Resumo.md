# Anotações do curso

- Repositório do curso: https://github.com/luizomf/cursojstypescript
- Repositório de estudos: https://github.com/ArthurViniciusL/TYPESCRIPT-ESTUDOS
## Aula 420 - O que é Typescript.

O Typescript é um superset para o Javascript, com tipagem estática, novos recursos e que compila para Javascript puro.

- ### Superset
	Um superset seria uma camada adicional para os recursos implementados dentro do Javascript.
	![[0001.png]]
	Os novos recursos mais significativos e interessantes são: Regras de tipagem e um melhor suporte a orientação a objetos com a inserção de, por exemplo, encapsulamento.
## Começando no Typescript

- ### Inciando um projeto com o node
```
npm init -y 
```

	![[0002.png]]

- ### Instalando o Typescript
```
npm i typescript -D
```

	![[0003.png]]
	O Typescript é instalado como uma dependência do projeto, então para visualizar detalhes sobre ele abra o arquivo "packge-lock.json" e procure pelo objeto "node_modules/typsescript".
	![[0004.png]]

- ### Configurando o ambiente Typescript.
	- #### Compilando o Typescript
	```
	node nome_do_arquivo.ts
	```
	![[0005.png]]
	
	- #### Configurando o VS Code para compilar
		Em termos práticos essa pequena configuração é feita apenas para facilitar o aprendizado no Typescript.
		
		Nesse exemplo a configuração para VS Code executar o código Typscript vai ser feita unicamente para esse projeto.
  
	1. Crie a pasta **.vscode**:
		![[0006.png]]
	2. Crie o arquivo: **settings.json** dentro da pasta:
		![[Pasted image 20231222204034.png]]
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

AA