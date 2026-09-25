# Guia de Uso CSS: `mix-blend-mode: multiply`

## 📌 O que é e para que serve?
A propriedade CSS `mix-blend-mode: multiply` define como os pixels de uma imagem (ou outro elemento) se misturam com o conteúdo que está posicionado logo atrás dela no HTML.

## ⚙️ Como funciona tecnicamente?
O modo de mesclagem **multiply** (multiplicação) pega a cor de cada pixel da imagem e multiplica pelo valor do pixel de fundo:

* **Pixels brancos puros** ($RGB(255, 255, 255)$): Atuam como o valor neutro na multiplicação ($1$), tornando-se invisíveis sobre fundos claros (efeito de transparência instantânea).
* **Pixels pretos puros** ($RGB(0, 0, 0)$): Atuam como zero ($0$), permanecendo pretos independente do fundo.
* **Cores intermediárias** (ex: o tom vermelho do d20): Fundem-se com a cor subjacente, aplicando um efeito de sobreposição natural.

---

## 💻 Exemplo de Implementação

```html
<div class="card">
  <img src="d20.jpg" alt="Dado D20 Vermelho" class="d20-img" />
</div>
```

```css
.d20-img {
  width: 200px;
  height: auto;
  mix-blend-mode: multiply;
}
```

---

## ✅ Quando usar?
* **Solução Rápida:** Ideal para aplicar rapidamente imagens de produto com fundo branco em páginas web de fundo claro/branco sem a necessidade de editar a imagem no Photoshop ou exportar PNGs pesados.

## ⚠️ Limitações e Cuidados
1. **Layouts Escuros (Dark Mode):** Não funciona bem em fundos escuros, pois o quadrado branco da imagem irá escurecer a área em vez de ficar transparente.
2. **Alternativas para Fundos Dinâmicos:** Para fundos escuros, gradientes ou com estampas, o mais recomendado é utilizar um **PNG com canal Alpha transparente** ou um ícone **SVG vetorial**.