
# bd2-docker

Este respositório contém o setup de um ambiente em Docker para o MongoDB e PostgreSQL.

## Pré-requisitos

- Docker instalado ([Instruções](https://docs.docker.com/get-docker/))
- Docker Compose instalado ([Instruções](https://docs.docker.com/compose/install/))

## Como iniciar o ambiente

1. Clone do repositório:
   **Unix (bash/zsh):**
   ```bash
   git clone <url-do-repositório>
   cd bd2-docker
   ```
   **PowerShell:**
   ```powershell
   git clone <url-do-repositório>
   cd bd2-docker
   ```
2. Copiar o ficheiro .env.example para um ficheiro .env:
   **Unix (bash/zsh):**
   ```bash
   cp .env.example .env
   ```
   **PowerShell:**
   ```powershell
   Copy-Item .env.example .env
   ```
3. Editar o ficheiro `.env` conforme necessário.

4. Inicie os containers:
   **Unix (bash/zsh):**
   ```bash
   docker-compose up -d
   ```
   **PowerShell:**
   ```powershell
   docker-compose up -d
   ```


5. As bases de dados serão inicializadas com os scripts em `mongo-init/init.js` e `postgres-init/init.sql`.

> **Nota importante:**
> No ficheiro `mongo-init/init.js`, na linha:
> ```javascript
> db = db.getSiblingDB(''); // Adicionar número mecanográfico aqui
> ```
> deve ser colocado o nome da base de dados como `bd2_IIIII`, onde `IIIII` é o seu número mecanográfico. Por exemplo, para o número mecanográfico 12345, o nome da base de dados deve ser `bd2_12345`.

- Para parar o ambiente:
   **Unix (bash/zsh):**
   ```bash
   docker-compose down
   # Para remover também os volumes:
   docker-compose down -v
   ```
   **PowerShell:**
   ```powershell
   docker-compose down
   # Para remover também os volumes:
   docker-compose down -v
   ```