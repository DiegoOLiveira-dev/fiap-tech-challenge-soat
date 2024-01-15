# Tech Challenge - Pós Graduação Software Architecture - FiAP

Este projeto foi desenvolvido durante a realização do curso de Pós Graduação de Software Architecture, ministrado pela FIAP. Englobando os conhecimentos obtidos em todas as disciplinas.

Desenvolvido em grupo, conta com os membros:
- Diego Luis RM352001
- Paulo Alves RM352011
- Rosangela Silva RM352014

## Índice

* [1. Objetivo](#1-objetivo)
* [2. Métodos Utilizados](#2-métodos-utilizados)
* [3. Instalação do projeto](#3-instalação-do-projeto)
* [4. Utilização](#4-utilização)
* [5. Acessando a database](#5-acessando-a-database)
* [6. Considerações finais](#6-considerações-finais)

## 1. Objetivo:

Prover um sistema de autoatendimento de uma lachonete.

## 2. Métodos Utilizados

[Miro](https://miro.com/app/board/uXjVMlKvwf0=/)

[Notion](https://www.notion.so/d473ae027b1140c6915ba85c0e87dcbc?v=66a8f70c96af43418355a530584d995d)

[NestJS](https://docs.nestjs.com/)

[Docker](https://docs.docker.com/)

## 3. Instalação do projeto

```bash
$ npm install
```

## 4. Utilização

Via docker compose é somente rodar o comando abaixo e ja estara pronto para utilziar via insomnia ou postman

```bash
$ docker-compose up
```

## 5. Acessando a database

Para acessar a base de dados do mongo basta acessar http://localhost:8081/ (user: admin, pass: pass), database fiap, na database estarao todas as collections com seus dados gerado numa carga inicial.

## 6. Subindo projeto no K8s

acessando a pasta k8s na raiz do projeto temos acesso aos arquivos de manifesto yaml e devemos aplicar eles na seguinte ordem: 

Comando para aplicar o arquivo no cluster kubernets: 

```bash
$ kubectl apply -f path_do_arquivo
```

ordem: 

1 - metrics.yaml
2 - arquivos de configmap (db-configmap e node-configmap)
3 - mogno (db.yaml e db-service.yaml)
4 - node (deployment.yaml e service.yaml)
5 - arquivos de hpa (scaler.yaml)

com todos arquivos aplicados podemos consultar se os pods estao de pe: 

```bash
$  kubectl get pods
```

estando todos de pe podemos chamar via insomnia com a colection anexa.


## 6. Considerações finais