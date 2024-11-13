# Plusoft - FrontEnd

Esta é uma implementação do FrontEnd responsável por implementar a API de inserção de usuários
do [Backend] (https://github.com/diegomonteiro/plusoft_backend) referente a fase de entrevista
da vaga divulgada pela Plusoft.

# Framework

Foi selecionado o Vue.js como Framework Javascript pela facilidade de implantação e montagem do FrontEnd aliado as tecnologias mais modernas.

# Arquitetura Escolhida

Como modelo de estruturação de projeto foi selecionado o Clean Architeture, de modo que
o projeto foi organizado levando em consideração tal arquitetura, onde o conjunto de pastas,
objetos e regras de negócios são organizados.

# Banco de dados

Para o armazenamento dos dados foi escolhido o SQLite como banco de dados local, facilitando assim
o processo de implantação do sistema em qualquer ambiente ou sistema operacional.

## Inicialização do Projeto

Para a instalação da Stack de desenvolvimento Javascript Vue.js. [Veja] (https://vuejs.org/guide/quick-start.html)

```sh
npm create vue@latest # Para inicialização do projeto
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

## Implantação/Configuração do projeto

```sh
npm install    # Para instalação das dependencias definidas no Package.json
npm run serve  # Para execução do projeto
npm run dev    # Para execução do projeto em modo de desenvolvimento (Hot-Reload)
npm run build  # Para compilar as classes e minificar os arquivos para Produção
```
