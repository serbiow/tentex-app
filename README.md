# Tentex App - Site Institucional

Este repositório contém o código-fonte para o novo site institucional da Tentex, com o objetivo de modernizar e aprimorar a presença online da empresa, que já possui um site em [http://www.tentex.com.br](http://www.tentex.com.br).



## Descrição do Projeto

O Tentex App é um projeto de site institucional desenvolvido para a empresa Tentex, que atua no setor têxtil. O objetivo principal deste novo site é oferecer uma experiência mais moderna, responsiva e rica em conteúdo para os visitantes, superando as limitações do site atual. Ele servirá como um ponto central para apresentar os produtos, serviços, representadas e a história da Tentex de forma mais eficaz e visualmente atraente.



## Tecnologias Utilizadas

O projeto Tentex App é construído utilizando as seguintes tecnologias:

*   **Vite**: Um empacotador de módulos rápido e leve para desenvolvimento web.
*   **React**: Uma biblioteca JavaScript para construção de interfaces de usuário interativas.
*   **JavaScript**: Linguagem de programação principal para o desenvolvimento front-end.
*   **CSS**: Para estilização e design responsivo.
*   **HTML**: Para a estrutura do conteúdo web.



## Como Começar

Para configurar e executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados em sua máquina.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/serbiow/tentex-app.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd tentex-app
    ```
3.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível).



## Estrutura do Projeto

A estrutura do projeto segue uma organização padrão para aplicações React/Vite:

```
tentex-app/
├── public/
│   └── ... (arquivos estáticos)
├── src/
│   ├── assets/
│   │   └── ... (imagens, ícones, etc.)
│   ├── components/
│   │   └── ... (componentes React reutilizáveis)
│   ├── pages/
│   │   └── ... (páginas principais do site)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```



## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, por favor, siga estas diretrizes:

1.  Faça um fork do repositório.
2.  Crie uma nova branch para sua feature (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e commit (`git commit -m 'feat: Adiciona nova feature'`).
4.  Envie para a branch original (`git push origin feature/sua-feature`).
5.  Abra um Pull Request detalhando suas alterações.



## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

