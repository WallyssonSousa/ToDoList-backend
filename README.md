# ToDoList Backend

Para iniciar o projeto, siga os passos abaixo:

## 1. Criar o arquivo `.env`

Copie o arquivo de exemplo e ajuste se necessário:

```bash
cp .env.example .env
```

2. Subir os containers com Docker
```bash
docker-compose up -d
```
Isso irá iniciar:

Banco de dados MySQL

Backend da aplicação

3. Parar os container 
```bash
docker-compose down
```
Pronto! A aplicação estará rodando e conectada ao banco.
