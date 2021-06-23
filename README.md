# NLW Valoriza


## Regras

- Cadastro de Usuario

[] User.email unique

[] User.email required

- Cadastro de Tag

[] Tag.name unique

[] Tag.name required

[] Apenas User.admin = true podem cadastrar Tag

- Cadastro de Elogios

[] Não é permitido cadastrar um elogio a si mesmo

[] o usuario precisa estar autenticado na aplicação