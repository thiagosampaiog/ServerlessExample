🚀 ServerlessExample
====================

Projeto de exemplo criado com **Serverless Framework**, **AWS Lambda** e **Node.js**  
Baseado no curso de Ariel Weinberger

[![Node.js](https://img.shields.io/badge/node.js-18.x-green)]()
[![Serverless Framework](https://img.shields.io/badge/Serverless-Framework-FD5750)]()
[![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-orange)]()

📚 Sobre o Projeto
-------------------

Este repositório contém um projeto de estudo do **Serverless Framework**, criado durante o curso [Serverless Framework Bootcamp: Node.js, AWS & Microservices](https://www.udemy.com/course/serverless-framework-bootcamp-nodejs-aws-microservices/) de **Ariel Weinberger**.

A proposta é simular um ambiente real de microsserviços na AWS com deploy automatizado, uso de funções Lambda, API Gateway e banco DynamoDB, aplicando boas práticas do desenvolvimento serverless.

🛠️ Tecnologias Utilizadas
---------------------------

- Node.js
- Serverless Framework
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB
- YAML (para configuração do serverless.yml)

⚙️ Pré-requisitos
------------------

- Conta na AWS
- Node.js instalado na máquina
- Serverless Framework instalado globalmente:

  npm install -g serverless

- Credenciais da AWS configuradas (usando `aws configure`)

▶️ Como Executar
-----------------

1. Clone o repositório:

   git clone https://github.com/thiagosampaiog/ServerlessExample.git
   cd ServerlessExample

2. Instale as dependências:

   npm install

3. Faça o deploy da aplicação para a AWS:

   sls deploy

4. Verifique os endpoints gerados no terminal após o deploy.

📂 Estrutura do Projeto
------------------------

ServerlessExample/

├── handler.js       # Funções Lambda

├── serverless.yml           # Configuração do Serverless Framework

├── package.json          # Dependências

└── README.md             # Este arquivo

👨‍🏫 Créditos
--------------

Este projeto foi baseado nas aulas do curso:

**Serverless Framework Bootcamp: Node.js, AWS & Microservices**  
por **Ariel Weinberger**  


📌 Observações
---------------

Este projeto é apenas para fins de aprendizado. O código pode ser adaptado e expandido.
