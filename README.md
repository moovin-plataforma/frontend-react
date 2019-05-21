# Frontend <img src="https://www.moovin.com.br/img/logo_moovin.png" width="50">

### Desafio

Desenvolver um painel em React integrado com uma API, seguindo o modelo de layout proposto.

### Como realizar o teste

Faça o fork desse repositório, realize os seus commits e ao final envie o link do seu repositório para o e-mail rh@moovin.com.br.

### Layout

https://xd.adobe.com/spec/21e60bfc-8b67-4f93-7e70-0434b8eafbd6-57d7/

### Instruções & Dicas

1. Comece fazendo o sistema de acesso (estilo e API)

```
Dicas: 
  Comece por esse item, sem ele vai ser dificil fazer os outros ;P
  Receber um e-mail e buscar na API se está cadastrado
  Não permita passar dessa parte se o e-mail não existir na API (aff, meio obviu :|)
  Salvar o id desse usuário (cookie?) para utilizar na consulta de posts (spoiler do próximo item ;))
```
2. Avance para a listagem de posts cujo o usuário que entrou é o autor (estilo e API)

```
Dicas: 
  Você vai precisar do item anterior ;X
  Consultar apenas os posts do usuário que inseriou um e-mail válido (lembra do spoiler?)
  Ninguém pode visualizar essa tela caso não tenha informado um e-mail 
```
3. Finalize com o formulário de cadastro de usuário (estilo e API)
```
Dicas: 
  Deixe esse item para o final, os dois itens anteriores já são ótimos para avaliação ;D
  Após um cadastro bem sucedido, mostre para o usuário os seus posts (não precisa informar e-mail novamente né?)
```
*Os itens acima estão em ordem de prioridade, sendo necessário fazer ao menos um deles (estilo e API) para avaliação. Quanto mais itens realizar mais informação teremos para avaliação ;)*

### API & Exemplos

- Documentação: https://gorest.co.in/
- Endpoint: https://gorest.co.in/public-api/
- Token: Será enviado por e-mail ao candidato 

#### Consulta de usuário: 
```perl
GET https://gorest.co.in/public-api/users?_format=json&access-token={{token}}&email={{email}}
```

#### Consulta de postagens: 
```perl
GET https://gorest.co.in/public-api/posts?_format=json&access-token={{token}}&user_id={{user_id}}
```

#### Cadastro de usuário: 
```perl
POST https://gorest.co.in/public-api/users?_format=json&access-token={{token}}
```
```json
{
  "email":"teste@teste.com",
  "first_name":"Teste",
  "last_name":"Teste",
  "gender":"male"
}
```

### Dúvidas

Em caso de dúvida entre em contato pelo skype **matheusmoovin**
