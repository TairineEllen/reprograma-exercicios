# Exercício 01

## HTML & CSS

HTML e CSS, junto com JavaScript, são as linguagens que dominam a internet. A aparência de todo e qualquer site é determinada por HTML e CSS que, embora sejam linguagens bem próximas, possuem funções diferentes.

- HTML adiciona significado ao conteúdo ao realizar marcações;
- CSS formata o conteúdo marcado.

De outra forma, pode-se dizer que HTML corresponde aos textos e imagens por trás de uma página da internet, e CSS corresponde à página que de fato vai ser exibida no navegador.

**Exemplo**

Com HTML, marcamos um determinado texto como um título com as tags h1:

```html
<h1>Esse texto é um título</h1>
```

E com o CSS, mudamos o tamanho e a cor da fonte:

```css
h1{
  font-size: 24px;
  color: red:
}
```

## HTML5

HTML - HyperText Markup Language - é uma linguagem de marcação utilizada para descrever a estrutura da página que usa uma sintaxe especial para organizar e fornecer informações ao navegador.
Como visto no exemplo anterior, os conteúdos geralmente são escritos entre tags de abertura <>  e de fechamento </>.
As páginas geralmente contém documentos estáticos que referenciam outros documentos. Essas referências contém links de hipertexto usados pelo navegador para que o usuário navegue entre os documentos sem precisar pesquisá-los manualmente.
À medida que as páginas web e as aplicações ficam mais complexas, o [World Wide Web Consortium (W3C)](https://www.w3c.br/ "World Wide Web Consortium (W3C)") atualiza as especificações do HTML para que os conteúdos apareçam em qualquer navegador. A versão mais atualizada do HTML é HTML5.
A versão HTML5 trouxe novas tags como `<header> `para cabeçalhos, `<nav>` para menus, `<video>` e `<audio>` para os respectivos elementos, além de apresentar uma sintaxe mais simples.
Uma página HTML é composta por alguns elementos básicos:

1. A declaração do tipo do documento;
2. A tag `<html>`, que armazenará todo o conteúdo da página;
3. O cabeçalho, que armazenará informações estruturais da página;
4. O corpo, que armazenará os conteúdos e formatações da página.

## CSS

CSS - Cascading Style Sheet - são as chamadas folhas de estilo em cascata, um conjunto de regras de formatação que controla a aparência de uma página web, informando ao navegador como exibir o conteúdo escrito em HTML.
O efeito cascata atua seguindo prioridades na lista abaixo, da menor para maior:
+ folha de estilo padrão do navegador
+ folha de estilo do usuário
+ folha de estilo do desenvolvedor:
	+ externo (importado)
	+ incorporado (definido no head)
	+ inline (dentro de um elemento)
+ marcado com !important

#### Declaração de códigos CSS

**1. Inline**
É feita diretamente na tag com o atribulo style.
```html
<div style = "heigth: 50px">
	Essa div possui altura de 50 pixels
</div>
<p style = "color: red">
	Texto vermelho
</p>
```
**2. Tag `<style>`**
CSS é declarado diretamente no HTML e as formatações de todos os elementos ficam entre as tags `<style></style>`

**3. Importação**
O estilo é importado através de um arquivo .css separado e vai ser chamado através de um link entre as tags `<head></head>`
```html
<head>
	<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
```


A ideia do CSS é utilizar um seletor para indicar em qual elemento HTML do DOM (Document Object Model) os estilos serão aplicados e exibidos no navegador.
Além das tags, pode-se utilizar ID's e classes como seletores.
- IDs são identificadores únicos declarados com #
- classes são grupos de elementos declarados com .

**Exemplo**

```html
<h1 id="titulo">
	Hello World
</h1>

<p class="texto">
	Vamos reprogramar o mundo!
</p>
```

Utilizando os seletores, podemos estilizar o código acima da seguinte forma:

```css
#titulo{
	color: purple;
}

.texto{
	font-size: 20px;
}
```

## Fontes

- [Introduction - HTML & CSS Is Hard](https://www.internetingishard.com/html-and-css/introduction/ "Introduction - HTML & CSS Is Hard")
- [Basic HTML and HTML5](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/ "Basic HTML and HTML5")
