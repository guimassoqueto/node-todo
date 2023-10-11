## Desafio Todo APP


### Requisitos
* Docker
* Docker Compose
* [Opcional] Node20+ (caso deseje executar o app localmente sem o auxilio de containers)


### Como executar
1. Gere o arquivo .env a partir do arquivo .env.sample:
```shell
make env
```

2. Suba os containeres da aplicação e do banco:
```shell
make
```

3. Abra o navegador em `http://localhost:8000/api-docs` para ver a documentação da API


### Detalhes Adicionais
A aplicação tenta seguir à risca os princípios S.O.L.I.D. e da Arquitetura Limpa. Está completamente independente de frameworks ou banco de dados. Podemos adaptar a app para rodar com Fastify ou Postgres sem maiores dificuldades.

### Sobre testes
Pensei em montar toda a aplicação seguindo o desenvolvimento orientado a testes (TDD), porém iria estourar o prazo, por essa razão optei em não fazê-lo. Em todo caso, a aplicação pode ser facilmente testada.

### Sobre Bugs
A aplicação apresenta alguns bugs, como por exemplo, ela não valida os tipos dos campos no corpo da requisição, não valida email nem a força da senha.