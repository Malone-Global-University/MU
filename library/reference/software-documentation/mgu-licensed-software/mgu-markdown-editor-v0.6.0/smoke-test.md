# MGU PDF Publishing Test

This document checks the publication workflow. Use a technical or academic style, enable the optional cover and linked contents, enter a running header/footer, and export to PDF. Inspect the PDF in a reader.

## Formatting and table

**Bold** and *italic* text, ~~obsolete~~ notation, and a [reference](https://maloneuniversity.org/).

| Feature | Expected result |
| --- | --- |
| Tables | Clear rows and headers |
| Math | Readable notation |
| Unicode | 日本語, 中文, العربية, École |
| Source | Preserved during export |

$$
\int_0^1 x^2\,dx=\frac{1}{3}
$$

```javascript
const university = "Malone Global University";
console.log(university);
```

:::mgu-double-rule

:::mgu-page-break

## Second content page

This heading should start a new printed page. Selectable text and the linked contents should be checked in the resulting PDF. Page numbers and running text depend on print-engine support.

### Safe preview

<script>alert("not executed")</script>

[Unsafe](javascript:alert%281%29)

Save this document under a disposable filename and reopen it to confirm file operations still function.


## Local recovery smoke test

Append a disposable sentence, wait for the local recovery indicator, refresh and confirm the sentence remains. Keep a draft, open it from Drafts & recent, and save to a disposable file. Change font and print settings and verify persistence after refresh.
