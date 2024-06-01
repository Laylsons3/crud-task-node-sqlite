# Documentação do CRUD - Sistema de Login

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
