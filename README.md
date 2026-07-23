# JL Segurança Digital — Site Institucional

Site estático desenvolvido para apresentar a **JL Segurança Digital**, divulgar seu hub de serviços e criar uma vitrine para estabelecimentos, clientes e parceiros.

O projeto utiliza somente **HTML, CSS e JavaScript**, sem banco de dados, painel administrativo ou dependências de instalação.

![Banner da JL Segurança Digital](assets/images/banner-jl.png)

## Demonstração

Após publicar com o GitHub Pages, substitua o endereço abaixo pelo link real do site:

```text
https://SEU-USUARIO.github.io/jl-seguranca-digital/
```

## Objetivos do projeto

- Apresentar a JL Segurança Digital de forma profissional.
- Centralizar os serviços em um hub simples e acessível.
- Facilitar o contato por WhatsApp e e-mail.
- Divulgar fotos, logomarcas e informações de clientes autorizados.
- Manter o conteúdo sob controle exclusivo do proprietário do repositório.

## Funcionalidades

- Layout responsivo para computador, tablet e celular.
- Menu de navegação com acesso às principais seções.
- Apresentação dos serviços da JL.
- Hub com etapas de atendimento e acompanhamento.
- Vitrine de clientes e parceiros.
- Botões de contato por WhatsApp e e-mail.
- Menu móvel em JavaScript.
- Botão “Voltar ao início”.
- Ano do rodapé atualizado automaticamente.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
- Google Fonts — Inter
- Git e GitHub
- GitHub Pages

## Estrutura de pastas

```text
jl-site-estatico/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── banner-jl.png
│   └── js/
│       └── script.js
├── docs/
│   ├── GUIA_DE_EDICAO.md
│   └── PUBLICACAO_GITHUB_PAGES.md
├── .gitignore
├── .nojekyll
├── CHANGELOG.md
├── index.html
└── README.md
```

## Como executar no computador

Não é necessário instalar Node.js, npm ou banco de dados.

1. Baixe ou clone o projeto.
2. Abra a pasta `jl-site-estatico`.
3. Dê dois cliques no arquivo `index.html`.
4. O site será aberto no navegador padrão.

Também é possível abrir a pasta no Visual Studio Code e usar a extensão **Live Server**.

## Como editar o conteúdo

Os textos dos serviços, do hub e dos clientes ficam no arquivo:

```text
assets/js/script.js
```

As imagens devem ser colocadas em:

```text
assets/images/
```

As informações institucionais, links, telefone e e-mail ficam principalmente no arquivo:

```text
index.html
```

Consulte o [Guia de edição](docs/GUIA_DE_EDICAO.md) para exemplos completos.

## Como publicar no GitHub Pages

O projeto pode ser publicado gratuitamente pelo GitHub Pages usando a branch `main` e a pasta raiz `/root`.

Consulte o tutorial detalhado em [Publicação no GitHub Pages](docs/PUBLICACAO_GITHUB_PAGES.md).

## Atualização do site publicado

Depois da primeira publicação, cada alteração pode ser enviada com:

```bash
git add .
git commit -m "Atualiza conteúdo do site"
git push
```

O GitHub Pages fará uma nova publicação automaticamente após o envio para a branch configurada.

## Segurança e privacidade

Este projeto é estático e não possui tela de login, cadastro de usuários ou banco de dados. Apenas pessoas com acesso de gravação ao repositório conseguem alterar os arquivos oficiais.

Antes de publicar fotos, logomarcas, depoimentos ou dados de estabelecimentos, obtenha autorização do cliente. Não publique senhas, documentos, informações financeiras, dados internos, endereços privados ou imagens sem permissão.

## Melhorias futuras

- Página individual para cada serviço.
- Filtros para a vitrine de clientes.
- Formulário integrado a um serviço externo.
- Política de privacidade.
- Domínio próprio.
- Otimização adicional de imagens e SEO.

## Autor

**Jorge Luiz Silva**  
JL Segurança Digital  
E-mail: jlsegurancadigital@gmail.com  
WhatsApp: (32) 98841-9009

## Uso do projeto

Projeto institucional da JL Segurança Digital. O código pode ser estudado e adaptado pelo proprietário, mas as marcas, imagens e informações de clientes devem ser usadas somente com autorização.
