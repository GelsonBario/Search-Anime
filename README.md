# Projeto Anime View App

Este projeto é um aplicativo mobile desenvolvido com **React Native** e **Expo**, que consome uma **API RESTful local** para exibir uma lista de animes.

## Tecnologias Utilizadas

### Frontend (App Mobile)
* **React Native**: Framework para desenvolvimento de aplicações móveis multiplataforma (Android e iOS).
* **Expo**: Ferramenta que simplifica o desenvolvimento em React Native, oferecendo acesso a APIs do dispositivo e um ambiente de execução rápido e fácil de configurar.
* **Axios**: Cliente HTTP baseado em Promessas para fazer requisições à API.

### Backend (API Local)
* **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, utilizada tanto no frontend quanto no backend.
* **Node.js**: Ambiente de execução para o JavaScript no servidor.
* **Express**: Framework web para Node.js, utilizado para construir a API REST.
* **`dotenv`**: Módulo para carregar variáveis de ambiente de um arquivo `.env`.

## Arquitetura do Projeto

O projeto é dividido em duas partes principais:

1.  **Backend (API)**: Uma API local que gerencia os dados de animes. Ela foi criada usando **Node.js** com **Express** e define rotas para listar, buscar, adicionar, atualizar e deletar animes. Os dados são armazenados em um arquivo local (`database.ts`) para simular um banco de dados.

2.  **Frontend (App Mobile)**: O aplicativo mobile que se conecta à API. Ele exibe os dados dos animes em um componente visual (`CardView`) e permite a navegação entre os itens. A comunicação com a API é feita através do **Axios**.

## Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter o Node.js, npm (ou yarn) e o Expo CLI instalados em sua máquina.

### 1. Rodar a API (Backend)

Primeiro, você precisa iniciar o servidor da API.

1.  Navegue até o diretório do seu projeto da API (onde estão os arquivos `server.ts`, `routes.ts`, `database.ts`).
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Compile e inicie o servidor:
    ```bash
    npm start
    ```
    O servidor será iniciado na porta 3000, e você verá uma mensagem no console: `Servidor rodando em http://localhost:3000/api/animes`.

### 2. Rodar o Aplicativo (Frontend)

Com a API rodando, inicie o aplicativo mobile.

1.  Navegue até o diretório do projeto React Native (onde está o arquivo `App.tsx`).
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento do Expo:
    ```bash
    npm start
    ```
    Isso abrirá uma nova guia no seu navegador. Você pode escanear o código QR com o aplicativo Expo Go no seu celular ou rodar o aplicativo em um emulador de Android ou iOS.

---

### **Observação Importante**

Para que o aplicativo se conecte à API, eles devem estar na mesma rede. Certifique-se de que a `API_URL` no arquivo `anime.ts` esteja apontando para o endereço IP local da sua máquina (por exemplo, `http://192.168.x.x:3000/api/animes`), não para `localhost`, a menos que você esteja usando um emulador.