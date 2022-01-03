---
name: Pull request template
about: Pull request template
title: feat, bug, chore
labels: ''
assignees: ''

---

# Template - Pull request

## Task no JIRA

- [NMD-5669](https://outinvest.atlassian.net/browse/NMD-5669)

## Evidências

_Tire print das telas se tiver_

## Como testar

_Como testar a implementação de uma visão do usuário final, colocar usuário de teste, link do backoffice, etc_

- Abrir a tela de Customer
- Procurar pelo customer_id = '07b878f8-1683-4c88-805b-f3586caf944a' e clicar em "Detalhes"

## Permissionamento novo

_Inserir permissionamentos e checar se os mesmos foram criados em PROD_

- Tela de transfer: `read:transfers:page`

## PR migrations

_Copie os links dos PR's de migrations caso tenha e verifique se o deploy foi feito antes de fazer o deploy do backoffice_

- [Migrations transfer](https://github.com/nomad-bank/nomad_migrations/pull/563)
- [Migrations statements](https://github.com/nomad-bank/nomad_migrations/pull/563)

## Impacto das tasks

- Tela de transfer
- Alertas no header
- Card de Banking nos detalhes do customer
