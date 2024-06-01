# CRUD - Sistema de Login

## Introdução

Este sistema de CRUD (Create, Read, Update, Delete) é implementado em Node.js usando Express, SQLite3 e Nodemon, seguindo o padrão MVC. Ele permite a gestão de usuários e tarefas.

## Estrutura do Banco de Dados

### Tabela `usuarios`:

- `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT): Identificador único do usuário.
- `username` (TEXT, UNIQUE): Nome de usuário.
- `password` (TEXT): Senha do usuário.

### Tabela `tasks`:

- `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT): Identificador único da tarefa.
- `task` (TEXT): Descrição da tarefa.
- `autor` (INTEGER, FOREIGN KEY): Identificador do autor (usuário) da tarefa.
- `data` (TEXT): Data da criação da tarefa.

## Endpoints

### Usuários

#### 1. Criar um Novo Usuário

**Rota:** `POST /api/users`

**Descrição:** Cria um novo usuário.

**Parâmetros da Requisição:**

- `username` (string): Nome de usuário.
- `password` (string): Senha do usuário.

**Corpo da Requisição (JSON):**

```json
{
  "username": "novo_usuario",
  "password": "senha_segura"
}
```

**Respostas:**

- `201` Created: Usuário criado com sucesso.
- `500` Internal Server Error: Erro ao criar usuário.

#### 2. Buscar Todos os Usuários

Rota: `GET /api/users`

Descrição: Retorna todos os usuários.

**Respostas:**

- `200` OK: Lista de usuários.
- `500` Internal Server Error: Erro ao buscar usuários.

#### 3. Buscar Usuário por Nome de Usuário

Rota: `GET /api/users/:username`

Descrição: Retorna um usuário específico pelo nome de usuário.

Parâmetros da URL:

username (string): Nome de usuário.

**Respostas:**

- `200` OK: Usuário encontrado.
- `500` Internal Server Error: Erro ao buscar usuário.

## Tarefas

1. Criar uma Nova Tarefa
   Rota: `POST /api/tasks`

Descrição: Cria uma nova tarefa.

Parâmetros da Requisição:

- `task (string)`: Descrição da tarefa.
- `autor (integer)`: Identificador do autor (usuário).
- `data (string)`: Data no formato YYYY-MM-DD.
- Corpo da Requisição `(JSON)`:
