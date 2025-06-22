# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

---

| Caso de Teste                                | CT-01 - Cadastro de Administrador                                                               |
| :------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-01                                                                                           |
| Objetivo do Teste                            | Verificar se o administrador consegue cadastrar uma conta com dados válidos                            |
| Passos                                       | 1. Acessar tela de cadastro <br> 2. Informar nome, e-mail e senha <br> 3. Clicar em "Cadastrar" |
| Critérios de êxito                           | Conta de administrador criada com sucesso e redirecionamento para login                         |
| Responsável pela elaboração do caso de Teste | Lara Silva                                                                                      |

---

| Caso de Teste                                | CT-02 - Login de Usuário                                                       |
| :------------------------------------------- | :----------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-02                                                                          |
| Objetivo do Teste                            | Verificar se o usuário consegue realizar login com e-mail e senha válidos      |
| Passos                                       | 1. Acessar aplicação <br> 2. Inserir e-mail e senha <br> 3. Clicar em "Entrar" |
| Critérios de êxito                           | Usuário autenticado e redirecionado para o menu principal                      |
| Responsável pela elaboração do caso de Teste | Lucas Marques                                                                  |

---

| Caso de Teste                                | CT-03 - Cadastro de Patrimônio                                                                 |
| :------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-03                                                                                          |
| Objetivo do Teste                            | Verificar se o usuário consegue cadastrar um novo patrimônio com dados válidos                 |
| Passos                                       | 1. Acessar tela de cadastro de patrimônio <br> 2. Preencher campos obrigatórios <br> 3. Salvar |
| Critérios de êxito                           | Patrimônio salvo com sucesso e exibido na listagem                                             |
| Responsável pela elaboração do caso de Teste | Lara Silva                                                                                     |

---

| Caso de Teste                                | CT-04 - Filtro/Pesquisa de Patrimônios                                                             |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-04                                                                                              |
| Objetivo do Teste                            | Validar a funcionalidade de busca e filtros na listagem de patrimônios                             |
| Passos                                       | 1. Acessar listagem <br> 2. Inserir termo no campo de busca ou usar filtros <br> 3. Observar dados |
| Critérios de êxito                           | Patrimônios filtrados corretamente conforme critérios inseridos                                    |
| Responsável pela elaboração do caso de Teste | Julia Silva                                                                                        |

---

| Caso de Teste                                | CT-05 - Upload de Imagem no Patrimônio                                      |
| :------------------------------------------- | :-------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-05                                                                       |
| Objetivo do Teste                            | Verificar se o sistema permite associar uma imagem ao patrimônio            |
| Passos                                       | 1. Acessar tela de cadastro/edição <br> 2. Selecionar imagem <br> 3. Salvar |
| Critérios de êxito                           | Imagem exibida corretamente junto aos dados do patrimônio                   |
| Responsável pela elaboração do caso de Teste | Lucas Marques                                                               |

---

| Caso de Teste                                | CT-06 - Controle de Status de Patrimônio                                                            |
| :------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-06                                                                                               |
| Objetivo do Teste                            | Validar se o usuário consegue alterar o status de um patrimônio                                     |
| Passos                                       | 1. Acessar patrimônio <br> 2. Selecionar novo status (ativo, manutenção, inativo) <br> 3. Salvar |
| Critérios de êxito                           | Status atualizado e refletido corretamente na listagem                                              |
| Responsável pela elaboração do caso de Teste | Julia Silva                                                                                         |

---

| Caso de Teste                                | CT-07 - Registro de Trâmites                                             |
| :------------------------------------------- | :----------------------------------------------------------------------- |
| Requisitos Associados                        | RF-07                                                                    |
| Objetivo do Teste                            | Testar o registro de movimentações/trâmites relacionados a um patrimônio |
| Passos                                       | 1. Selecionar patrimônio <br> 2. Inserir novo trâmite <br> 3. Salvar     |
| Critérios de êxito                           | Trâmite aparece no histórico com informações corretas                    |
| Responsável pela elaboração do caso de Teste | Lara Silva                                                               |

---

| Caso de Teste                                | CT-08 - Cadastro de Localizações                                                    |
| :------------------------------------------- | :---------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-08                                                                               |
| Objetivo do Teste                            | Verificar se o sistema permite o cadastro de localizações (salas, prédios, setores) |
| Passos                                       | 1. Acessar menu de localizações <br> 2. Inserir dados <br> 3. Salvar                |
| Critérios de êxito                           | Localização salva e disponível para associação                                      |
| Responsável pela elaboração do caso de Teste | Julia Silva                                                                         |

---

| Caso de Teste                                | CT-09 - Cadastro de Fornecedores                                       |
| :------------------------------------------- | :--------------------------------------------------------------------- |
| Requisitos Associados                        | RF-09                                                                  |
| Objetivo do Teste                            | Verificar se o sistema permite o cadastro de fornecedores              |
| Passos                                       | 1. Acessar menu de fornecedores <br> 2. Preencher dados <br> 3. Salvar |
| Critérios de êxito                           | Fornecedor salvo corretamente e listado                                |
| Responsável pela elaboração do caso de Teste | Lucas Marques                                                          |

---

| Caso de Teste                                | CT-10 - Registro de Manutenção                                                 |
| :------------------------------------------- | :----------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-10                                                                          |
| Objetivo do Teste                            | Verificar se o usuário pode registrar manutenções em patrimônios               |
| Passos                                       | 1. Selecionar patrimônio <br> 2. Inserir detalhes da manutenção <br> 3. Salvar |
| Critérios de êxito                           | Dados da manutenção salvos e visíveis no histórico                             |
| Responsável pela elaboração do caso de Teste | Lara Silva                                                                     |

---

| Caso de Teste                                | CT-11 - Edição de Patrimônio                                                    |
| :------------------------------------------- | :------------------------------------------------------------------------------ |
| Requisitos Associados                        | RF-11                                                                           |
| Objetivo do Teste                            | Verificar se o sistema permite editar dados de um patrimônio                    |
| Passos                                       | 1. Acessar patrimônio existente <br> 2. Alterar campos desejados <br> 3. Salvar |
| Critérios de êxito                           | Alterações são salvas e exibidas corretamente                                   |
| Responsável pela elaboração do caso de Teste | Lucas Marques                                                                   |

---

| Caso de Teste                                | CT-12 - Inserção de Dados da Compra                                                                  |
| :------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-12                                                                                                |
| Objetivo do Teste                            | Verificar se o sistema permite inserir informações sobre a compra de um patrimônio                   |
| Passos                                       | 1. Selecionar patrimônio <br> 2. Preencher dados da compra (nota fiscal, valor, data) <br> 3. Salvar |
| Critérios de êxito                           | Dados ficam visíveis corretamente nas informações do patrimônio                                      |
| Responsável pela elaboração do caso de Teste | Lara Silva                                                                                           |

---

| Caso de Teste                                | CT-13 - Cadastro do Tipo de Patrimônio                                      |
| :------------------------------------------- | :-------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-13                                                                       |
| Objetivo do Teste                            | Verificar se o sistema permite o cadastro de diferentes tipos de patrimônio |
| Passos                                       | 1. Acessar tela de tipos <br> 2. Inserir nome do tipo <br> 3. Salvar        |
| Critérios de êxito                           | Tipo cadastrado aparece como opção para novos patrimônios                   |
| Responsável pela elaboração do caso de Teste | Lucas Marques                                                               |

---

| Caso de Teste                                | CT-14 - Edição de Perfil e Senha do Usuário                                                |
| :------------------------------------------- | :----------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-14                                                                                      |
| Objetivo do Teste                            | Verificar se o usuário pode visualizar e editar seu perfil e senha                         |
| Passos                                       | 1. Estar logado <br> 2. Acessar opção "Perfil" <br> 3. Editar dados e senha <br> 4. Salvar |
| Critérios de êxito                           | Dados atualizados corretamente e válidos para novo login                                   |
| Responsável pela elaboração do caso de Teste | Julia Silva                                                                                |

---

> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script


