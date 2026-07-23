# Guia de edição do site

Este documento explica como alterar o site sem precisar criar um painel administrativo.

## 1. Antes de editar

Faça uma cópia de segurança da pasta do projeto. Depois, abra a pasta no Visual Studio Code.

Os três arquivos principais são:

- `index.html`: estrutura, textos institucionais e contatos.
- `assets/css/style.css`: cores, tamanhos, espaçamentos e aparência.
- `assets/js/script.js`: listas de serviços, hub e clientes.

## 2. Alterar telefone, WhatsApp ou e-mail

Abra `index.html` e procure por:

```text
5532988419009
```

Esse é o número usado no link do WhatsApp, com código do país e DDD, sem espaços ou sinais.

Procure também por:

```text
jlsegurancadigital@gmail.com
```

Altere todas as ocorrências necessárias e teste os botões antes de publicar.

## 3. Adicionar um serviço

Abra `assets/js/script.js` e localize a lista `services`.

Adicione um novo objeto antes do fechamento da lista:

```javascript
{
  icon: "🖥️",
  title: "Manutenção preventiva",
  text: "Revisão de computadores, organização e recomendações de melhoria."
}
```

Cada item precisa ter:

- `icon`: ícone ou emoji.
- `title`: nome do serviço.
- `text`: descrição curta.

Use vírgula entre os objetos.

## 4. Adicionar uma etapa ao Hub JL

No mesmo arquivo, localize `hubServices` e adicione:

```javascript
{
  title: "Documentação",
  text: "Registro das melhorias realizadas e recomendações para o cliente."
}
```

A numeração será criada automaticamente pelo JavaScript.

## 5. Adicionar cliente, parceiro ou estabelecimento

### 5.1 Preparar a imagem

1. Peça autorização para usar a foto ou logomarca.
2. Prefira os formatos `.webp`, `.jpg` ou `.png`.
3. Dê um nome simples, sem espaços ou acentos.
4. Coloque o arquivo em `assets/images/`.

Exemplo:

```text
assets/images/padaria-modelo.webp
```

### 5.2 Cadastrar no JavaScript

Em `assets/js/script.js`, localize a lista `clients` e adicione:

```javascript
{
  name: "Padaria Modelo",
  category: "Padaria e lanchonete",
  description: "Estabelecimento atendido pela JL Segurança Digital.",
  image: "assets/images/padaria-modelo.webp"
}
```

Quando o campo `image` estiver vazio, o site mostrará o marcador padrão “JL”.

```javascript
image: ""
```

## 6. Remover um item

Remova todo o objeto correspondente, incluindo as chaves `{ }`. Confira se as vírgulas entre os itens continuam corretas.

Exemplo de lista válida:

```javascript
const exemplo = [
  { title: "Primeiro" },
  { title: "Segundo" }
];
```

## 7. Alterar cores e aparência

Abra `assets/css/style.css`. No início do arquivo existem variáveis de cores dentro de `:root`.

Exemplo:

```css
:root {
  --navy: #06244c;
  --cyan: #0795aa;
}
```

Altere somente depois de anotar os valores anteriores. Evite cores com pouco contraste, pois dificultam a leitura.

## 8. Alterar o banner principal

Substitua o arquivo:

```text
assets/images/banner-jl.png
```

Mantenha o mesmo nome para não precisar alterar o HTML. Caso use outro nome, atualize o caminho em `index.html`.

## 9. Testar antes de publicar

Confira:

- Menu no computador e no celular.
- Botões do WhatsApp e e-mail.
- Seção de serviços.
- Fotos e logomarcas.
- Textos e ortografia.
- Botão “Voltar ao início”.
- Visualização em telas menores.

Pressione `Ctrl + F5` para forçar o navegador a carregar a versão atualizada.

## 10. Boas práticas para imagens

- Reduza o tamanho do arquivo antes de publicar.
- Evite imagens acima de 1 MB quando possível.
- Use nomes como `cliente-autopecas.webp`.
- Não use espaços, acentos ou caracteres especiais no nome.
- Não publique imagens ou marcas sem autorização.

## 11. Erros comuns

### A imagem não aparece

Verifique se o nome, a extensão e o caminho estão exatamente iguais. Em servidores Linux, `Logo.png` e `logo.png` são arquivos diferentes.

### O site mostra uma tela em branco

Abra o console do navegador com `F12` e veja se existe erro no JavaScript. Normalmente isso ocorre por vírgula, aspas ou chave ausente.

### Uma atualização não aparece

Use `Ctrl + F5`, confira se o arquivo foi salvo e verifique se o novo commit foi enviado ao GitHub.
