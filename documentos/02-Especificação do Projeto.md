# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1: Gestor de Manutenção </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Responsável por acompanhar e supervisionar as atividades de manutenção preventiva e corretiva dos ativos da empresa.   </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> Monitorar o status e o histórico dos equipamentos. Agendar e acompanhar manutenções preventivas para evitar falhas. Acessar dados de custos e prazos para embasar decisões estratégicas.

</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 2: Gestor de Patrimônio </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Responsável por gerenciar e organizar os bens patrimoniais da empresa, garantindo que sejam utilizados corretamente e mantendo um controle rigoroso sobre sua movimentação.   </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> Acompanhar a localização e movimentação dos bens patrimoniais. 
Manter um registro atualizado de aquisição, incluindo nota fiscal, valor e data de compra.Monitorar a depreciação dos ativos e planejar substituições.  

</td>  
</tr>
</tbody>
</table>



<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 3: Técnico de Manutenção </th>
</tr>
<tr>
<td width="150px"><b> Descrição </b></td>
<td width="600px">Executar e registrar manutenções preventivas e corretivas nos ativos.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Receber e gerenciar ordens de serviço de manutenção de forma eficiente. Registrar a execução das atividades de manutenção e atualizar o histórico dos equipamentos. Relatar falhas e sugerir melhorias nos processos de manutenção. </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 4: Colaborador Usuário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Utilizar os equipamentos e solicitar manutenção quando necessário.</td>
</tr>
<tr>
<td><b>Necessidade </b></td>
<td>Informar falhas ou problemas nos equipamentos de forma rápida e simples. Acompanhar o status das solicitações de manutenção. Ter acesso a informações básicas sobre os equipamentos sob sua responsabilidade. </td>
</tr>
</tbody>
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`   | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|---------------------------|----------------------------------|
| Gestor de Manutenção       | Monitorar cronogramas de manutenção, acompanhar status e histórico de serviços. Configurar alertas automáticos para manutenções preventivas. | Garantir a organização e eficiência da manutenção e evitar falhas. |
| Gestor de Patrimônio       | Gerenciar bens, rastrear movimentação e depreciação, controlar acessos e gerar relatórios          | Manter o controle patrimonial, otimizar recursos, evitar perdas, garantir segurança nos dados e facilitar a gestão financeira.               |
| Técnico de Manutenção      | Gerenciar ordens de serviço, registrar manutenções, acessar manuais e relatar falhas               | Agilizar processos, melhorar a gestão de equipamentos e prevenir falhas recorrentes.                              |
| Colaborador Usuário        | Buscar equipamentos, solicitar e acompanhar manutenções, acessar manuais                           | Gerenciar disponibilidade, garantir bom estado, planejar uso e evitar mau uso dos equipamentos.                                         |
| Gestor de Manutenção       | Visualizar o status em tempo real das ordens de serviço e equipamentos críticos                   | Tomar decisões rápidas, minimizar tempo de inatividade e garantir a continuidade operacional. |
| Técnico de Manutenção      | Receber notificações de novas ordens de serviço com prioridade definida                 | Agilizar os atendimentos, organizar a rotina e responder rapidamente a falhas críticas.       |
| Colaborador Usuário        | Consultar a agenda de uso de equipamentos e reservar com antecedência                              | Evitar conflitos de uso, melhorar o planejamento e garantir acesso aos recursos quando necessário. |
| Gestor de Manutenção       | Gerar relatórios detalhados com datas, custos e fornecedores. | Reduzir custos, otimizar recursos e aumentar a vida útil dos equipamentos. |
## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve permitir ao Administrador cadastrar uma conta.| Alta   | 
| RF-02 |  A aplicação deve permitir ao usuário fazer o login da sua conta.                     | Alta  |
| RF-03 |  A aplicação deve permitir ao usuário fazer o cadastro de patrimônios. | Alta   | 
| RF-04 |  A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar os patrimônios. | Média   | 
| RF-05 |  A aplicação deve permitir o upload de imagem em cada patrimônio.                     | Baixa   | 
| RF-06 |  A aplicação deve permitir ao usuário controlar o status dos bens. .                     | Alta   | 
| RF-07 |  A aplicação deve permitir ao usuário controlar trâmites feitos no patrimônio. | Média   | 
| RF-08 |  A aplicação deve permitir ao usuário cadastrar localizações.                     | Alta   
| RF-09 | A aplicação deve permitir ao usuário cadastrar fornecedores.  | Media |
| RF-10 | A aplicação deve permitir ao usuário cadastrar manutenções no patrimônio. |  Média|
| RF-11 | A aplicação deve permitir ao usuário editar o patrimônio. | Média|
| RF-12 | A aplicação deve permitir ao usuário inserir informações da comprar do patrimônio.  | Média|
| RF-13 | A aplicação deve permitir ao usuário cadastrar o tipo de patrimônio.  | Média|
| RF-14 | A aplicação deve permitir ao usuário visualizar/editar o seu perfil e senha.  | Média|

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  A aplicação deve ser publicada em um ambiente acessível público na Internet.                     | Alta   | 
| RNF-02    |  A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.                     | Alta   | 
| RNF-03    | A interface da aplicação deve ser intuitiva e fácil de usar, com um design amigável que facilite a navegação dos usuários.                      | Alta   | 

**Prioridade: Alta / Média / Baixa. 

