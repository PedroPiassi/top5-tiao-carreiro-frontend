# Projeto: Músicas Mais Tocadas de Tião Carreiro e Pardinho

Esta aplicação web exibe uma lista das músicas mais populares da icônica dupla caipira **Tião Carreiro e Pardinho**. Além disso, o sistema permite que os usuários se cadastrem para sugerir novas músicas, informando um link válido do YouTube.

## Funcionalidades

1. **Gestão de Usuários**

   - Usuários podem criar contas, realizar login e sugerir novos links para músicas.

2. **Painel Administrativo**

   - Um administrador tem acesso a um painel exclusivo onde pode:
     - Aprovar ou reprovar links sugeridos pelos usuários.
     - Adicionar, editar e excluir links diretamente no sistema.

3. **Seeder de Dados para Usuário Administrador**
   - Ao rodar a seeder no projeto backend, um usuário administrador padrão é gerado automaticamente com as seguintes credenciais:
     - **Email:** `admin@gmail.com`
     - **Senha:** `123`

### Como rodar o frontend - Passo a passo

Clone o Repositório

```sh
git clone https://github.com/PedroPiassi/top5-tiao-carreiro-frontend.git
```

Abra a pasta que você clonou o projeto.

Tire o .example do .env.exemple, para que fiue apenas .env.

```sh
.env.example => .env
```

Rode o comando a baixo no terminal para subir o container do projeto

Observação: você precisa ter o docker instalado em sua máquina.

```sh
docker-compose up -d
```

Acesse o website em:
```sh
http://localhost:8081/
```

Para rodar os testes, rode o comando a baixo no terminal:
```sh
npm run test
```
