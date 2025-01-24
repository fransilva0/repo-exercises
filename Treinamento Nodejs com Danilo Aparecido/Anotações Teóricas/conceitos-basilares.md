# Variáveis, Tipos, Operadores Lógicos, Operador Ternário, Estruturas de Decisão e Loops

## Variáveis e Tipos

Em Node.js, você pode declarar variáveis usando `var`, `let` ou `const`. Os tipos de dados básicos incluem:

- **String**: Texto, por exemplo, `"Olá, mundo!"`.
- **Number**: Números, tanto inteiros quanto decimais, por exemplo, `42` e `3.14`.
- **Boolean**: Valores booleanos, `true` ou `false`.
- **Array**: Coleção ordenada de valores, por exemplo, `[1, 2, 3]`.
- **Object**: Estrutura de dados complexa, por exemplo, `{nome: "Maria", idade: 30}`.

### Exemplo:

```javascript
let nome = "Danilo";
const idade = 25;
let isEstudante = true;
let notas = [10, 8, 9];
let pessoa = {
  nome: "Maria",
  idade: 30
};
```

## Operadores Lógicos

Operadores lógicos são usados para realizar operações lógicas sobre variáveis e valores.

- **&& (AND)**: Retorna true se ambos os operandos forem verdadeiros.

- **|| (OR):** Retorna true se pelo menos um dos operandos for verdadeiro.

- **! (NOT):** Inverte o valor booleano do operando.

### Exemplo:

```javascript
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false
```

## Operador Ternário

O operador ternário é uma maneira concisa de realizar uma condição e retornar um valor com base nessa condição.

### Sintaxe:

```
condição ? valorSeVerdadeiro : valorSeFalso;
```

### Exemplo:

```javascript
let idade = 18;
let podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
console.log(podeVotar); // "Pode votar"
```

## Estruturas de Decisão

Estruturas de decisão permitem que você execute diferentes blocos de código com base em certas condições.

### If e ELSE

```javascript
let nota = 75;

if (nota >= 60) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

### SWITCH

```javascript
let dia = 3;
let nomeDoDia;

switch (dia) {
  case 1:
    nomeDoDia = "Domingo";
    break;
  case 2:
    nomeDoDia = "Segunda-feira";
    break;
  case 3:
    nomeDoDia = "Terça-feira";
    break;
  default:
    nomeDoDia = "Dia inválido";
}

console.log(nomeDoDia); // "Terça-feira"
```

## Loops

Loops são usados para executar um bloco de código várias vezes.

### FOR

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

### WHILE

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4
```

### Do... WHILE

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0, 1, 2, 3, 4
```