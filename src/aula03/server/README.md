## Servidor

### Requisitos
- [Node.js](https://nodejs.org/en/)

### Instruções para rodar
No terminal rodar:
```
npm i
npm start
```
Servidor ficará disponível em http://localhost:3001

### Endpoints
- GET /hello → "olar mundo"
- GET /create → todo conteúdo de [db.json](./db.json)
- POST /create nome=bruce+wayne → salva o conteúdo do body em [db.json](./db.json) e retorna html de sucesso