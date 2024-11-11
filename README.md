# Projeto de Review e Críticas de Filmes

![image](https://github.com/user-attachments/assets/b393a3f4-b8c7-45a1-bd0d-1142d5afd3c7)


Bem-vindo ao repositório do **Projeto de Review e Críticas de Filmes**! Este projeto é uma aplicação web que permite aos usuários explorar críticas de filmes e reviews, projetado para simular um site com o estilo de um catálogo de cinema. O projeto foi desenvolvido utilizando Node.js, JavaScript, EJS, HTML e CSS.

## Descrição do Projeto

O objetivo deste projeto é proporcionar uma experiência imersiva para leitura de críticas e visualização de filmes com um layout bem estruturado e moderno. Ele conta com páginas dedicadas para diferentes filmes, agrupados em catálogos, e inclui uma interface de fácil navegação.

## Estrutura do Projeto

```plaintext
├── controllers
│   └── homeController.js     # Lida com a lógica principal das rotas da página inicial
├── node_modules              # Módulos do Node.js
├── public                    # Arquivos estáticos
│   ├── css                   # Folhas de estilo do projeto
│   │   ├── catalogoCss       # CSS específico para as páginas do catálogo
│   │   └── filmesCss         # CSS específico para as páginas de filmes
│   └── imagens               # Imagens usadas no projeto
├── router
│   └── router.js             # Define as rotas do projeto
├── views                     # Arquivos de visualização EJS
│   ├── catalogo              # Páginas EJS específicas para os catálogos
│   │   ├── narnia1.ejs
│   │   ├── narnia2.ejs
│   │   ├── predador1.ejs
│   │   ├── predador2.ejs
│   │   └── senhorAneis.ejs
│   └── filmes                # Páginas EJS para outras funcionalidades de filmes
│       ├── inicio.ejs        # Página inicial de filmes
│       ├── senha.ejs         # Página de autenticação/senha
│       ├── sobreNos.ejs      # Página "Sobre Nós"
│       └── visualizacao.ejs  # Página de visualização de um filme específico
├── .gitattributes            # Configurações de atributos do Git
├── .gitignore                # Arquivos e pastas ignorados pelo Git
├── index.js                  # Arquivo principal que inicia o servidor
├── package-lock.json         # Detalhes das dependências do projeto
├── package.json              # Informações e dependências do projeto
└── README.md                 # Documentação do projeto
````
## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução de JavaScript no lado do servidor.
- **Express.js**: Framework para criação de rotas e gerenciamento de solicitações HTTP.
- **EJS (Embedded JavaScript)**: Template engine para renderização de HTML dinâmico.
- **HTML5 e CSS3**: Para estruturação e estilização das páginas.
- **JavaScript**: Para funcionalidades dinâmicas no lado do cliente.
- **Git**: Controle de versão para gerenciar o código-fonte.
- **Nodemon** (opcional): Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

