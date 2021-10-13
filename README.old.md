# Burger Queen (API Client)

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
- [6. Pistas, tips e leituras complementares](#6-pistas-tips-e-leituras-complementares)

## 4. Considerações gerais


O aplicativo deve ser um _Single Page App_. Os pedidos serão enviados por meio
de um _tablet_, mas **não queremos um aplicativo nativo**, mas sim um aplicativo
Web que seja **mobile-first**.

#### [Historia de usuario 1] Garçom/Garçonete deve poder entrar no sistema, caso o admin já lhe tenha dado as credenciais

Eu, como garçom/garçonete quero entrar no sistema de pedidos.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

- Acessar uma tela de login.
- Inserir email e senha.
- Receber mensagens de erros compreensíveis, conforme o erro e as informações inseridas.
- Entrar no sistema de pedidos caso as credenciais forem corretas.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

- Você deve ter recebido _code review_ de pelo menos uma parceira.
- Fez _testes_ unitários e, além disso, testou seu produto manualmente.
- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo e marcou sua versão (tag git).

---

#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

- Anotar o nome do cliente.
- Adicionar produtos aos pedidos.
- Excluir produtos.
- Ver resumo e o total da compra.
- Enviar o pedido para a cozinha (guardar em algum banco de dados).
- Funcionar bem em um _tablet_.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

- Você deve ter recebido _code review_ de pelo menos uma parceira.
- Fez _testes_ unitários e, além disso, testou seu produto manualmente.
- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo e marcou sua versão (tag git).

---

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder
marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido
está pronto para ser entregue ao cliente.

##### Critérios de aceitação

- Ver os pedidos ordenados à medida em que são feitos.
- Marcar os pedidos que foram preparados e estão prontos para serem servidos.
- Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado
  como concluído.

##### Definição de pronto

- Você deve ter recebido _code review_ de pelo menos uma parceira.
- Fez _testes_ unitários e, além disso, testou seu produto manualmente.
- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo e marcou sua versão (tag git).

---

#### [Historia de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los
rapidamente aos clientes.

##### Critérios de aceitação

- Ver a lista de pedidos prontos para servir.
- Marcar os pedidos que foram entregues.

##### Definição de pronto

- Você deve ter recebido _code review_ de pelo menos uma parceira.
- Fez _testes_ unitários e, além disso, testou seu produto manualmente.
- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo e marcou sua versão (tag git).
- Os dados devem ser mantidos intactos, mesmo depois que um pedido for
  finalizado. Tudo isso para poder ter estatísticas no futuro.

---
