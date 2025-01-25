# Projeto Conceitual de Banco de Dados de um E-Commerce

Este projeto é uma implementação de um sistema de gerenciamento de banco de dados para e-commerce de forma conceitual, através de um diagrama EER (Entity-Relationship Diagram) detalhado que modela as relações entre essas entidades e suas propriedades.

## Estrutura do projeto

### Entidades Principais

- cliente: Armazena informações básicas do cliente.
  - idCliente | INT
  - nomeCompleto | VARCHAR(50)
  - endereco | VARCHAR(50)
  - telefone | INT
  - email | VARCHAR(30)

- clientePessoaFisica: Contém informações específicas de clientes pessoa física.
  - idclientePessoaFisica | INT
  - CPF | INT
  - nascimento | DATETIME

- clientePessoaJuridica: Contém informações específicas de clientes pessoa jurídica.
  - idClientePessoaJuridica | INT
  - CNPJ | INT
  - razaoSocial | VARCHAR(50)
  - nomeFantasia | VARCHAR(50)

- pedido: Representa um pedido realizado por um cliente.
  - idpedido | INT
  - statusPedido | VARCHAR(45)
  - descricao | VARCHAR(45)
  - frete | FLOAT
  
- formaPagamento: Armazena informações sobre as formas de pagamento.
  - idformaPagamento | INT
  - tipoPagamento | VARCHAR(20)
  - detalhes | VARCHAR(50)
  - numeroCartao | INT
  - nomeTitulas | VARCHAR(50)
  - dataValidade | DATETIME

- entrega: Armazena informações sobre a entrega de pedidos.
  - identrega | INT
  - status | VARCHAR(45)
  - rastreio | VARCHAR(45)

- produto: Armazena informações sobre produtos.
  - idproduto | INT
  - categoria | VARCHAR(45)
  - descricao | VARCHAR(45)
  - nome | VARCHAR(45)
  - preco | VARCHAR(45)

- estoque: Armazena informações sobre o estoque dos produtos.
  - idestoque | INT
  - local | VARCHAR(45)

- produtoPorPedido: Tabela de relacionamento entre pedido e produto.
  - produto_idproduto | INT
  - pedido_idpedido | INT
  - quantidade | INT

- produto_has_estoque: Tabela de relacionamento entre produto e estoque.
  - produto_idproduto | INT
  - estoque_idestoque | INT
  - quantidade | INT

- disponibilizaProduto: Tabela de relacionamento entre clientePessoaJuridica e produto.
  - clientePessoaJuridica_idClientePessoaJuridica | INT
  - produto_idproduto | INT

### Relacionamentos

- Um cliente pode ser uma pessoa física ou uma pessoa jurídica.
- Um pedido é realizado por um cliente e pode incluir múltiplos produtos.
- Cada pedido tem um status de entrega e informações de rastreamento.
- As formas de pagamento estão associadas aos clientes.
- Os produtos são armazenados em locais de estoque.
- A disponibilidade dos produtos é gerenciada por clientes jurídicos.

## Considerações finais

Este projeto proporciona uma base sólida para gerenciar informações de clientes, produtos, pedidos e entregas, permitindo escalabilidade e extensibilidade para futuras necessidades de negócios.

## Diagrama

![Diagrama EER](/img/EER-diagram-ecommerce.png)