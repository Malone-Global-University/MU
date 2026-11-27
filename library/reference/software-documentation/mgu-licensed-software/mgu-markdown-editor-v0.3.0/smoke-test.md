# MGU Markdown Editor v0.3.0 — Smoke Test

## Extended Markdown

**Bold**, *italic*, ***both***, ~~strikethrough~~, and `inline code`.

| Component | Status | Value |
| :--- | :---: | ---: |
| Renderer | Ready | 3 |
| Editor | Ready | 16 |
| Preview | Ready | 18 |

```javascript
const university = "MGU";
console.log(university);
// Code must remain literal: $x^2$ and <script>
```

Inline math: $E=mc^2$ and \(x^2+y^2=z^2\).

$$
\frac{a}{b}+\sqrt{x^2+y^2}
$$

\[
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}
\]

The price is $5 and the second price is $10.

---

:::mgu-double-rule

## Workspace and source integrity

This is a long line for testing the Word Wrap toggle and independent typography controls; changing display settings must not change the actual Markdown, insert line breaks, alter saved state, disable editing, or prevent scrolling through the document and matching corresponding content in the rendered preview.

- [Malone Global University](https://maloneuniversity.org/) — styled but inactive in preview.
- ![External image](https://example.com/test.png) — must not load.
- Unicode: 日本語, 中文, العربية, École supérieure, π, Σ, ∞.

<script>alert("This must not execute");</script>

Invalid formula (should display literal notation and a warning): $\notARealCommand{x}$.

## End of smoke test

The original Markdown source is authoritative. Save a disposable copy and reopen it to verify content preservation.
