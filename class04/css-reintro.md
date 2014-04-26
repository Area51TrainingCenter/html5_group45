# CSS: Basics

---

# Cómo escribirlo
```css
selector {
	property: value;
}
```

---

# Ejemplo:
```css
h1 {
	color: #000;
	margin-bottom: 20px;
	padding: 10px;
}
```

---


# 3 modos de aplicar CSS
- Inline.
- Internal.
- External.

---

# Inline
```html
<p style="color: red;">Texto</p>
```

<!-- Tip: Normalmente, Javascript inserta código de este modo para aplicar cambios inmediatos, como presentar u ocultar botones, o mover objetos de posición. -->

---

# Internal
```html
<head>
	<style>
		p { color: red; }
	</style>
</head>
```

---

# External
```html
<link rel="stylesheet" href="style.css">
```

---

# [fit] Y siempre recuerda...

---

# Indenta tu código.
### Un código ordenado es un código feliz.