# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part III — Numerical Calculus

---

# Chapter 8: Taylor Series and Function Approximation

---

## Purpose

This chapter develops Taylor polynomials and Taylor series as fundamental tools of numerical approximation. Students will learn how calculus generates local polynomial models for complicated functions, how to estimate and control the error those models produce, and how these ideas underlie algorithms throughout numerical analysis, scientific computing, physics, and engineering.

Taylor approximation is not merely a technique from Calculus II. It is the mathematical foundation of why finite difference formulas work, why Euler's method steps forward in time, why Newton's method converges, and why numerical algorithms for exponentials, trigonometric functions, and logarithms can be evaluated to arbitrary precision. Students who understand Taylor polynomials deeply will find that many numerical methods make far more sense.

---

## Opening Question

A computer needs to evaluate \(\cos(0.1)\). It has no table of cosine values and no geometric meaning to invoke. What it has is arithmetic: addition, subtraction, multiplication, and division. How can a complicated transcendental function like cosine be reduced to a sequence of arithmetic operations?

The answer is polynomial approximation. Near any point where a function is smooth enough, a polynomial can be constructed that matches the function's value, slope, curvature, and higher derivatives. On a small enough interval, that polynomial is indistinguishable from the function itself — at least for practical purposes. Taylor's theorem makes this idea precise, tells us how well the polynomial fits, and tells us when the approximation is trustworthy.

---

## Why This Chapter Matters

Every calculator, every scientific software library, and every programming language needs to evaluate functions like \(e^x\), \(\sin(x)\), \(\cos(x)\), and \(\ln(x)\). None of these are polynomials. But all of them can be approximated by polynomials to any desired precision, using Taylor polynomials. Taylor approximation explains:

- how computers evaluate transcendental functions using only basic arithmetic,
- why the error formulas for finite difference formulas (Chapter 6) have the form they do,
- how the step-by-step structure of Euler's method (Chapter 12) is justified,
- how Newton's method achieves its rapid convergence (Chapter 3),
- how error bounds can be placed on numerical approximations using derivatives,
- how local models of smooth functions underlie nearly every numerical algorithm.

This chapter also develops careful mathematical reasoning about approximation error — reasoning that is used throughout the rest of the book.

---

## Learning Objectives

By the end of this chapter, students should be able to:

1. State what a Taylor polynomial approximates and explain why polynomial approximation is useful.
2. Construct Taylor polynomials of any specified degree centered at a given point.
3. Construct Maclaurin polynomials for standard functions including \(e^x\), \(\sin(x)\), \(\cos(x)\), and \(\ln(1 + x)\).
4. State and apply the Taylor Remainder Theorem to estimate approximation error.
5. Determine the degree of Taylor polynomial needed to achieve a specified accuracy.
6. Explain how Taylor series extend Taylor polynomials and discuss convergence informally.
7. Use Taylor polynomials to understand and derive finite difference formulas.
8. Identify when Taylor approximation is reliable and when it may mislead.
9. Apply Taylor polynomial thinking to problems in computation, physics, and engineering.

---

## Key Terms

Taylor polynomial, Maclaurin polynomial, Taylor series, Maclaurin series, degree, center, remainder, Taylor Remainder Theorem, Lagrange remainder, error bound, radius of convergence, local approximation, global approximation, transcendental function, alternating series, approximation error, order of approximation

---

## 8.1 Why Taylor Approximation Matters

Mathematics is full of functions that resist exact evaluation. The exponential \(e^x\), the sine and cosine, logarithms, the square root, the arctangent — these are transcendental functions, meaning they cannot be expressed as finite combinations of algebraic operations on \(x\). A computer cannot evaluate \(e^{0.5}\) directly from the definition \(e^x = \lim_{n \to \infty}\left(1 + \frac{x}{n}\right)^n\). The limit requires taking \(n\) to infinity, which is impossible in finite computation.

Polynomials, by contrast, are completely arithmetic. Evaluating a polynomial at a point requires only addition, subtraction, and multiplication — operations that all computers perform exactly (up to floating-point limits). If we can replace a complicated function with a polynomial that is close enough to it, we have turned an analytically difficult problem into a series of arithmetic steps.

This is the purpose of Taylor approximation. Given a smooth function \(f\) and a center point \(a\), Taylor's theorem tells us how to build a polynomial \(P_n(x)\) of degree \(n\) that matches \(f\) at the point \(a\) in the strongest possible way: the polynomial and the function agree in value, slope, curvature, and all derivatives up to order \(n\). Near the center \(a\), the polynomial behaves almost exactly like the function. Further from \(a\), the approximation may degrade, but Taylor's theorem gives a formula for bounding the error.

**Why this matters for numerical methods specifically.** In Chapter 6, the finite difference formula for the derivative was

\[
f'(x) \approx \frac{f(x+h) - f(x)}{h}
\]

Where did the error term come from? Taylor's theorem. In Chapter 3, Newton's method was

\[
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
\]

Why does it converge so fast? Because Newton's method is derived by dropping the quadratic and higher terms from the Taylor expansion of \(f\) near the root. In Chapter 12, Euler's method advances the solution of a differential equation using only the first derivative. Its error analysis comes from the second-order term in Taylor's theorem.

Taylor polynomials are not a topic from calculus that numerical methods happens to use. They are the mathematical skeleton of numerical approximation itself.

---

## 8.2 Local Linear Approximation Review

Before building higher-degree Taylor polynomials, it helps to recall the simplest case, which students have already encountered in calculus under the name *linearization* or *tangent line approximation*.

If \(f\) is differentiable at \(a\), then the tangent line to the graph of \(f\) at the point \((a, f(a))\) has equation

\[
L(x) = f(a) + f'(a)(x - a)
\]

The function \(L\) is a degree-1 polynomial. Near \(x = a\), the function \(f(x)\) and the linear approximation \(L(x)\) are close. Specifically, \(L(a) = f(a)\) and \(L'(a) = f'(a)\): the polynomial matches \(f\) in both value and slope at the center.

**Example 8.1 — Linear Approximation of \(\sqrt{x}\) Near \(x = 4\).**

*Problem.* Use the linear approximation of \(f(x) = \sqrt{x}\) centered at \(a = 4\) to estimate \(\sqrt{4.1}\).

*Think.* The function \(\sqrt{x}\) is smooth near \(x = 4\), and \(f(4) = 2\) exactly. The point \(4.1\) is close to the center \(4\), so the tangent line should give a good approximation.

*Method.* Compute \(f(a)\) and \(f'(a)\), then form \(L(x) = f(a) + f'(a)(x - a)\).

*Compute.*

\[
f(x) = x^{1/2}, \quad f'(x) = \frac{1}{2}x^{-1/2}
\]

At \(a = 4\):

\[
f(4) = 2, \quad f'(4) = \frac{1}{2}(4)^{-1/2} = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}
\]

So:

\[
L(x) = 2 + \frac{1}{4}(x - 4)
\]

At \(x = 4.1\):

\[
L(4.1) = 2 + \frac{1}{4}(0.1) = 2 + 0.025 = 2.025
\]

*Check.* The true value is \(\sqrt{4.1} \approx 2.02485\). The error is \(|2.025 - 2.02485| \approx 0.00015\). Very small.

*Interpret.* The tangent line at \(x = 4\) gives a good approximation to \(\sqrt{4.1}\). The function is smooth and the interval is small, so linear approximation works well.

**The limitation of linear approximation.** The linear approximation captures value and slope, but ignores curvature. If the function curves significantly over the interval of interest, the tangent line drifts away. To do better, we need polynomials of higher degree that also match the second derivative, third derivative, and so on. This is exactly what Taylor polynomials do.

---

## 8.3 Quadratic and Higher-Order Approximation

Suppose we want to approximate \(f(x)\) near \(x = a\) with a polynomial \(P_2(x)\) of degree 2:

\[
P_2(x) = c_0 + c_1(x - a) + c_2(x - a)^2
\]

We want \(P_2\) to agree with \(f\) not just in value and slope, but also in curvature. We enforce:

\[
P_2(a) = f(a), \quad P_2'(a) = f'(a), \quad P_2''(a) = f''(a)
\]

Computing the derivatives of \(P_2\):

\[
P_2'(x) = c_1 + 2c_2(x - a), \quad P_2''(x) = 2c_2
\]

Setting \(x = a\):

\[
P_2(a) = c_0 = f(a) \implies c_0 = f(a)
\]

\[
P_2'(a) = c_1 = f'(a) \implies c_1 = f'(a)
\]

\[
P_2''(a) = 2c_2 = f''(a) \implies c_2 = \frac{f''(a)}{2}
\]

So the degree-2 Taylor polynomial is:

\[
P_2(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2}(x - a)^2
\]

Notice the pattern. The coefficient of \((x - a)^k\) is \(\frac{f^{(k)}(a)}{k!}\). This pattern continues to any order.

**Example 8.2 — Quadratic Approximation of \(\cos(x)\) Near \(x = 0\).**

*Problem.* Construct the degree-2 Taylor polynomial for \(f(x) = \cos(x)\) centered at \(a = 0\). Use it to estimate \(\cos(0.2)\).

*Think.* Near \(x = 0\), the cosine is a smooth, even function that starts at 1 and curves downward. The quadratic polynomial should capture that curvature.

*Method.* Compute the first and second derivatives, evaluate at 0, form \(P_2(x)\).

*Compute.*

\[
f(x) = \cos(x), \quad f'(x) = -\sin(x), \quad f''(x) = -\cos(x)
\]

At \(a = 0\):

\[
f(0) = 1, \quad f'(0) = 0, \quad f''(0) = -1
\]

So:

\[
P_2(x) = 1 + 0 \cdot x + \frac{-1}{2}x^2 = 1 - \frac{x^2}{2}
\]

At \(x = 0.2\):

\[
P_2(0.2) = 1 - \frac{(0.2)^2}{2} = 1 - \frac{0.04}{2} = 1 - 0.02 = 0.98
\]

*Check.* The true value is \(\cos(0.2) \approx 0.98007\). The error is about \(0.00007\). The quadratic approximation is already much better than a linear approximation would be near this even function, since the linear term vanishes.

*Interpret.* The quadratic captures the symmetric curvature of cosine near zero. The approximation \(1 - x^2/2\) is useful in physics (small-angle approximation) and throughout applied mathematics.

---

## 8.4 Taylor Polynomials

The pattern from Sections 8.2 and 8.3 generalizes cleanly.

**Definition — Taylor Polynomial of Degree \(n\) Centered at \(a\).**

Suppose \(f\) has \(n\) derivatives at the point \(a\). The *Taylor polynomial of degree \(n\)* for \(f\) centered at \(a\) is:

\[
P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k
\]

Expanding this:

\[
P_n(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n
\]

By construction, \(P_n^{(k)}(a) = f^{(k)}(a)\) for \(k = 0, 1, \ldots, n\). That is, the Taylor polynomial of degree \(n\) agrees with \(f\) in all derivatives up to order \(n\) at the center point. No other polynomial of degree \(n\) has this matching property.

The notation \(f^{(k)}(a)\) denotes the \(k\)th derivative of \(f\), evaluated at \(a\). By convention, \(f^{(0)}(a) = f(a)\), the function value itself.

**Example 8.3 — Taylor Polynomial for \(e^x\) Centered at \(a = 0\).**

*Problem.* Find the Taylor polynomial of degree 4 for \(f(x) = e^x\) centered at \(a = 0\).

*Think.* The exponential function has the remarkable property that all its derivatives equal \(e^x\). At \(x = 0\), all derivatives equal 1.

*Compute.*

\[
f(x) = e^x \implies f^{(k)}(x) = e^x \implies f^{(k)}(0) = 1 \text{ for all } k
\]

So:

\[
P_4(x) = \frac{1}{0!} + \frac{1}{1!}x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 + \frac{1}{4!}x^4
\]

\[
P_4(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24}
\]

*Interpret.* Each term adds another correction to the approximation. For \(x\) near 0, the terms decrease rapidly and the polynomial is a superb approximation. For larger \(|x|\), more terms are needed.

**Diagram instruction:** Plot \(e^x\) and \(P_1(x)\), \(P_2(x)\), \(P_3(x)\), \(P_4(x)\) on the same axes for \(x \in [-2, 2]\). Show how each higher-degree polynomial hugs the exponential curve over a wider interval.

---

## 8.5 Maclaurin Polynomials

A *Maclaurin polynomial* is simply a Taylor polynomial centered at \(a = 0\). The name distinguishes the special case of expansion at the origin from the general case centered at an arbitrary point.

\[
P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \cdots + \frac{f^{(n)}(0)}{n!}x^n
\]

The most important Maclaurin polynomials in numerical methods are those for \(e^x\), \(\sin(x)\), \(\cos(x)\), and \(\ln(1+x)\). These appear throughout scientific computing and form the basis of many numerical algorithms.

**Computing Maclaurin Polynomials for Standard Functions.**

*For \(f(x) = e^x\):*

All derivatives at 0 equal 1. The Maclaurin polynomial of degree \(n\) is:

\[
P_n(x) = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!}
\]

*For \(f(x) = \sin(x)\):*

\[
f(0) = 0,\; f'(0) = 1,\; f''(0) = 0,\; f'''(0) = -1,\; f^{(4)}(0) = 0,\; f^{(5)}(0) = 1, \ldots
\]

The pattern: zero for even derivatives, alternating \(\pm 1\) for odd derivatives. So:

\[
P_{2n+1}(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots + (-1)^n \frac{x^{2n+1}}{(2n+1)!}
\]

*For \(f(x) = \cos(x)\):*

\[
f(0) = 1,\; f'(0) = 0,\; f''(0) = -1,\; f'''(0) = 0,\; f^{(4)}(0) = 1, \ldots
\]

The pattern: zero for odd derivatives, alternating \(\pm 1\) for even derivatives. So:

\[
P_{2n}(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots + (-1)^n \frac{x^{2n}}{(2n)!}
\]

*For \(f(x) = \ln(1+x)\):*

\[
f(0) = 0,\; f'(0) = 1,\; f''(0) = -1,\; f'''(0) = 2,\; f^{(4)}(0) = -6, \ldots
\]

In general, \(f^{(k)}(0) = (-1)^{k+1}(k-1)!\) for \(k \geq 1\). So:

\[
P_n(x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots + (-1)^{n+1}\frac{x^n}{n}
\]

This is valid for \(|x| \leq 1\), \(x \neq -1\). (Convergence of the full series requires \(-1 < x \leq 1\).)

**Example 8.4 — Evaluating \(\sin(0.3)\) Using a Maclaurin Polynomial.**

*Problem.* Use the degree-5 Maclaurin polynomial for \(\sin(x)\) to estimate \(\sin(0.3)\).

*Think.* The value \(0.3\) radians is close to 0. The degree-5 polynomial should capture the sine accurately here.

*Compute.*

\[
P_5(x) = x - \frac{x^3}{6} + \frac{x^5}{120}
\]

At \(x = 0.3\):

\[
P_5(0.3) = 0.3 - \frac{(0.3)^3}{6} + \frac{(0.3)^5}{120}
\]

\[
= 0.3 - \frac{0.027}{6} + \frac{0.00243}{120}
\]

\[
= 0.3 - 0.0045 + 0.00002025
\]

\[
\approx 0.2955203
\]

*Check.* The true value is \(\sin(0.3) \approx 0.29552\). The error is less than \(0.000001\).

*Interpret.* Three terms of the Maclaurin series give six decimal places of accuracy at \(x = 0.3\). This is why computers can evaluate trigonometric functions using a handful of arithmetic operations.

**Student note.** Maclaurin polynomials always center at zero. If you need to approximate a function near a different point — for example, \(\ln(x)\) near \(x = 1\) rather than near \(x = 0\) — you need a Taylor polynomial with a non-zero center.

---

## 8.6 Taylor Series as an Introduction

A Taylor polynomial uses a finite number of terms. A *Taylor series* uses infinitely many terms, summing to the exact function value (within the radius of convergence).

The Taylor series for \(f\) centered at \(a\) is the formal infinite sum:

\[
\sum_{k=0}^{\infty} \frac{f^{(k)}(a)}{k!}(x - a)^k = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots
\]

For the standard functions, the Taylor series converge to the function exactly on their intervals of convergence.

| Function | Maclaurin Series | Converges For |
|----------|-----------------|---------------|
| \(e^x\) | \(\displaystyle\sum_{k=0}^{\infty} \frac{x^k}{k!}\) | All real \(x\) |
| \(\sin(x)\) | \(\displaystyle\sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}\) | All real \(x\) |
| \(\cos(x)\) | \(\displaystyle\sum_{k=0}^{\infty} (-1)^k \frac{x^{2k}}{(2k)!}\) | All real \(x\) |
| \(\ln(1+x)\) | \(\displaystyle\sum_{k=1}^{\infty} (-1)^{k+1} \frac{x^k}{k}\) | \(-1 < x \leq 1\) |
| \(\frac{1}{1-x}\) | \(\displaystyle\sum_{k=0}^{\infty} x^k\) | \(|x| < 1\) |

Convergence of an infinite series is not guaranteed everywhere. For \(\ln(1 + x)\), the series only converges for \(-1 < x \leq 1\). Outside this interval, the partial sums do not approach the function value, regardless of how many terms are taken.

For numerical work, what matters is not the infinite series but the finite polynomial approximation — and the size of the error left over when we truncate after finitely many terms. That is the subject of the next section.

---

## 8.7 Remainder and Error Bounds

When we truncate a Taylor series after \(n\) terms, we are using the Taylor polynomial \(P_n(x)\) to approximate \(f(x)\). The difference between the true value and the polynomial approximation is called the *remainder* or *truncation error*:

\[
R_n(x) = f(x) - P_n(x)
\]

Taylor's theorem gives us an explicit formula for bounding this remainder. This result is among the most important theorems in numerical analysis.

**Taylor's Remainder Theorem (Lagrange Form).** Suppose \(f\) has \(n+1\) continuous derivatives on an interval containing \(a\) and \(x\). Then there exists a number \(c\) between \(a\) and \(x\) such that:

\[
R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}
\]

We do not know \(c\) exactly — it depends on \(f\), \(a\), \(x\), and \(n\) in a way that is generally inaccessible. But if we can bound \(|f^{(n+1)}(c)|\) over the interval of interest, we can bound the error.

**Error Bound Formula.** If \(|f^{(n+1)}(t)| \leq M\) for all \(t\) between \(a\) and \(x\), then:

\[
|R_n(x)| \leq \frac{M}{(n+1)!} |x - a|^{n+1}
\]

This bound has a clear structure. The numerator \(M\) captures how much the function curves at high order. The denominator grows as a factorial, which decreases very rapidly. The factor \(|x - a|^{n+1}\) captures how far we are from the center.

**What the bound tells us.** As \(n\) increases (more terms), \((n+1)!\) grows faster than any power of \(|x - a|\), so the error bound decreases to zero — as long as the \((n+1)\)th derivative does not grow too rapidly. This explains why adding more terms to the Taylor polynomial improves the approximation for well-behaved functions.

**Example 8.5 — Error Bound for the Maclaurin Polynomial of \(e^x\).**

*Problem.* Estimate the error when the degree-4 Maclaurin polynomial for \(e^x\) is used to approximate \(e^{0.5}\).

*Think.* We need to bound \(|R_4(0.5)|\). The fifth derivative of \(e^x\) is still \(e^x\). We need its maximum on the interval \([0, 0.5]\).

*Method.* Apply the Lagrange error bound with \(n = 4\), \(a = 0\), \(x = 0.5\).

*Compute.*

\[
f^{(5)}(t) = e^t
\]

On \([0, 0.5]\), the maximum of \(e^t\) occurs at \(t = 0.5\): \(e^{0.5} < 2\). Use \(M = 2\) (a safe overestimate).

\[
|R_4(0.5)| \leq \frac{2}{5!}(0.5)^5 = \frac{2}{120} \cdot \frac{1}{32} = \frac{2}{3840} \approx 0.000521
\]

*Check.* The true value is \(e^{0.5} \approx 1.64872\). The degree-4 approximation gives:

\[
P_4(0.5) = 1 + 0.5 + \frac{0.25}{2} + \frac{0.125}{6} + \frac{0.0625}{24}
= 1 + 0.5 + 0.125 + 0.02083 + 0.002604 = 1.648438
\]

Actual error: \(|1.64872 - 1.64844| \approx 0.00028\). This is well within the bound of \(0.000521\).

*Interpret.* The error bound is not tight — it overestimates the actual error because we used a conservative \(M\). But it gives a reliable guarantee: the actual error cannot exceed the bound. This is the practical value of Taylor remainder bounds in numerical analysis.

---

## 8.8 Approximating \(e^x\)

The exponential function \(e^x\) is one of the most computed functions in mathematics and science. Its Maclaurin series converges for all real \(x\):

\[
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots
\]

A computer evaluating \(e^x\) typically does not sum this series directly. Instead, it uses a combination of argument reduction (rewriting \(e^x = e^{m} \cdot e^r\) where \(m\) is an integer and \(r\) is a small remainder), polynomial approximation for the small remainder, and stored values for the integer part. But the mathematical foundation is the Maclaurin series, and understanding it clarifies how the computation works.

**How many terms are needed?** For \(x\) near 0, the terms \(x^k/k!\) decrease rapidly because the factorial in the denominator grows faster than the power in the numerator. For larger \(|x|\), more terms are needed.

**Example 8.6 — Determining Degree for Required Accuracy.**

*Problem.* How many terms of the Maclaurin series for \(e^x\) are needed to estimate \(e^{1}\) to within \(0.0001\)?

*Think.* We want \(|R_n(1)| < 0.0001\). Use the error bound with \(a = 0\), \(x = 1\), and the bound \(M = e < 3\).

*Method.* Apply the error bound and find the smallest \(n\) satisfying it.

*Compute.* The bound is:

\[
|R_n(1)| \leq \frac{3}{(n+1)!}
\]

We want this less than \(0.0001\). Try values of \(n\):

| \(n\) | \(\frac{3}{(n+1)!}\) |
|--------|----------------------|
| 5 | \(3/720 \approx 0.00417\) |
| 6 | \(3/5040 \approx 0.000595\) |
| 7 | \(3/40320 \approx 0.0000744\) |

At \(n = 7\), the bound is \(0.0000744 < 0.0001\).

*Interpret.* Eight terms (degree-7 polynomial) are sufficient to estimate \(e\) to within \(0.0001\). The Maclaurin series converges quickly near \(x = 0\), making it practical for computation.

---

## 8.9 Approximating Trigonometric Functions

The Maclaurin series for sine and cosine have elegant alternating structures that make them convenient for computation.

**Sine approximation:**

\[
\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots
\]

**Cosine approximation:**

\[
\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots
\]

Both series converge for all real \(x\). Convergence is fast for small \(|x|\) and slower for large \(|x|\). In practice, argument reduction is used to map any input angle into a small interval (such as \([0, \pi/4]\)) before evaluating the series.

**Alternating Series Error Bound.** When the terms of a series alternate in sign and decrease in absolute value to zero, a special, simpler error bound applies. For such alternating series, the error from truncating after \(n\) terms is no larger in absolute value than the first omitted term:

\[
|R_n(x)| \leq \left| \frac{(\text{first omitted term})}{1} \right|
\]

This is the *Alternating Series Estimation Theorem* and often gives a sharper bound than the Lagrange form.

**Example 8.7 — Bounding the Error for \(\cos(0.4)\).**

*Problem.* Use the degree-4 Maclaurin polynomial for cosine to estimate \(\cos(0.4)\), and bound the error using the alternating series bound.

*Compute.*

\[
P_4(x) = 1 - \frac{x^2}{2} + \frac{x^4}{24}
\]

At \(x = 0.4\):

\[
P_4(0.4) = 1 - \frac{0.16}{2} + \frac{0.0256}{24} = 1 - 0.08 + 0.001067 = 0.921067
\]

The next omitted term is \(-\frac{(0.4)^6}{720} = -\frac{0.004096}{720} \approx -0.0000057\).

Error bound: \(|R_4(0.4)| \leq 0.0000057\).

*Check.* True value: \(\cos(0.4) \approx 0.92106\). Actual error: \(\approx 0.000007\). The bound is confirmed.

*Interpret.* The alternating structure of the cosine series makes it easy to estimate error. Each new term in the sum provides a correction, and the next term after that bounds the error from the correction.

---

## 8.10 Approximating Logarithmic Functions

The logarithm has no single Maclaurin expansion valid everywhere. The function \(\ln(x)\) is not defined at \(x = 0\), so it has no Taylor series centered at 0. Instead, we expand \(\ln(1 + x)\) near \(x = 0\), valid for \(-1 < x \leq 1\).

\[
\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{k=1}^{\infty} (-1)^{k+1} \frac{x^k}{k}
\]

This series converges slowly for \(x\) near 1. For \(x = 1\), the partial sums converge to \(\ln(2) \approx 0.6931\), but many terms are needed. For \(x\) near 0, convergence is much faster.

**Alternative expansion for faster convergence.** Writing

\[
\ln(x) = \ln\left(\frac{1 + t}{1 - t}\right) = 2\left(t + \frac{t^3}{3} + \frac{t^5}{5} + \cdots\right), \quad t = \frac{x - 1}{x + 1}
\]

this alternative gives rapid convergence for all \(x > 0\) and is preferred in many numerical implementations.

**Example 8.8 — Approximating \(\ln(1.2)\).**

*Problem.* Use a degree-4 polynomial to estimate \(\ln(1.2)\).

*Compute.* With \(x = 0.2\):

\[
P_4(0.2) = 0.2 - \frac{(0.2)^2}{2} + \frac{(0.2)^3}{3} - \frac{(0.2)^4}{4}
\]

\[
= 0.2 - 0.02 + 0.002667 - 0.0004 = 0.182267
\]

*Check.* True value: \(\ln(1.2) \approx 0.18232\). Error: approximately \(0.000055\).

By the alternating series bound, the error is at most the fifth term: \(\frac{(0.2)^5}{5} = \frac{0.00032}{5} = 0.000064\). The bound holds.

*Interpret.* The series for \(\ln(1 + x)\) converges for small \(x\). For values of \(x\) close to 1 (computing \(\ln(2)\), for example), convergence is slow and more terms are needed.

---

## 8.11 Choosing Polynomial Degree

A recurring practical question in numerical work is: how many Taylor polynomial terms are enough? The answer depends on three factors:

1. **How far from the center.** The error bound grows as \(|x - a|^{n+1}\). For \(x\) far from the center, more terms are needed to overcome the large power factor.

2. **How large the higher derivatives are.** The bound involves \(M = \max |f^{(n+1)}|\). For functions whose higher derivatives grow (like \(e^x\) for large positive \(x\)), more terms may be needed. For functions whose higher derivatives are bounded (like sine and cosine), the factorial denominator dominates and convergence is fast.

3. **How much accuracy is required.** A computation requiring 10 decimal digits needs more terms than one requiring 2 decimal digits.

**General strategy for choosing degree.**

1. Write the Lagrange remainder bound: \(|R_n(x)| \leq \frac{M}{(n+1)!}|x - a|^{n+1}\).
2. Bound \(M\) by the maximum of \(|f^{(n+1)}|\) on the interval.
3. Find the smallest \(n\) such that the bound is less than the desired tolerance.

For alternating series, the strategy is simpler: find the first term whose absolute value is less than the desired tolerance.

**Example 8.9 — How Many Terms for \(\sin(0.5)\) to Within \(10^{-6}\)?**

*Problem.* How many terms of the Maclaurin series for \(\sin(x)\) are needed to estimate \(\sin(0.5)\) to within \(10^{-6}\)?

*Compute.* By the alternating series bound, we need the first omitted term to satisfy:

\[
\frac{(0.5)^{2n+3}}{(2n+3)!} < 10^{-6}
\]

Try values:

- \(n = 2\): First omitted term is \(\frac{(0.5)^7}{5040} = \frac{0.0078125}{5040} \approx 1.55 \times 10^{-6}\). Not yet small enough.
- \(n = 3\): First omitted term is \(\frac{(0.5)^9}{362880} = \frac{0.001953}{362880} \approx 5.4 \times 10^{-9}\). Sufficient.

*Interpret.* Four terms (\(x - x^3/6 + x^5/120 - x^7/5040\)) are sufficient. That is, the degree-7 polynomial approximates \(\sin(0.5)\) to better than six decimal places.

---

## 8.12 Taylor Methods in Computation and Physics

Taylor polynomials appear throughout science and engineering in forms that students often encounter without recognizing the connection.

**Small-angle approximation.** In physics, the exact equation of motion for a simple pendulum is

\[
\theta'' + \frac{g}{L}\sin(\theta) = 0
\]

For small angles \(\theta\), the approximation \(\sin(\theta) \approx \theta\) (the first Taylor term) simplifies this to a linear equation with known exact solutions. This is the *linearization* of the pendulum equation, and it is valid when the second Maclaurin term, \(\theta^3/6\), is negligibly small.

**Finite difference formulas revisited.** In Chapter 6, the forward difference formula

\[
f'(x) \approx \frac{f(x+h) - f(x)}{h}
\]

was derived from the definition of the derivative. The Taylor polynomial perspective gives the error term directly. Expanding \(f(x+h)\) in a Taylor polynomial centered at \(x\):

\[
f(x+h) = f(x) + f'(x)h + \frac{f''(x)}{2}h^2 + \frac{f'''(x)}{6}h^3 + \cdots
\]

Solving for \(f'(x)\):

\[
f'(x) = \frac{f(x+h) - f(x)}{h} - \frac{f''(x)}{2}h - \cdots
\]

The leading error term is \(-\frac{f''(x)}{2}h\), which is proportional to \(h\). This is why the forward difference formula has *first-order accuracy*: halving the step size \(h\) halves the error. The Taylor expansion makes this explicit.

The central difference formula

\[
f'(x) \approx \frac{f(x+h) - f(x-h)}{2h}
\]

can similarly be derived. Expanding both \(f(x+h)\) and \(f(x-h)\) and subtracting:

\[
f(x+h) - f(x-h) = 2f'(x)h + \frac{2f'''(x)}{6}h^3 + \cdots
\]

Dividing by \(2h\):

\[
f'(x) = \frac{f(x+h) - f(x-h)}{2h} - \frac{f'''(x)}{6}h^2 - \cdots
\]

The leading error term is now proportional to \(h^2\), so the central difference formula has *second-order accuracy*: halving \(h\) reduces the error by a factor of four. This is a direct consequence of the Taylor expansion.

**Euler's method.** In Chapter 12, Euler's method for solving the initial value problem \(y' = f(t, y)\) is

\[
y_{n+1} = y_n + h f(t_n, y_n)
\]

This is exactly the first-order Taylor polynomial for the true solution \(y(t_{n+1})\) expanded around \(t_n\):

\[
y(t_{n+1}) = y(t_n) + y'(t_n)h + \frac{y''(t_n)}{2}h^2 + \cdots
\]

Euler's method takes only the first correction and drops the \(h^2\) and higher terms. The local error is therefore proportional to \(h^2\), and the global error is proportional to \(h\). More accurate ODE methods (Runge-Kutta) match higher-order Taylor terms without requiring explicit derivatives.

**Numerical integration and midpoint rule accuracy.** The midpoint rule approximates \(\int_a^b f(x)\,dx\) by \((b - a) f\!\left(\frac{a+b}{2}\right)\). Its error analysis uses the Taylor expansion of \(f\) centered at the midpoint and shows that the leading error term is proportional to \(h^2\), where \(h = b - a\). Taylor expansions are the universal tool for deriving error formulas in numerical integration.

---

## 8.13 Common Taylor Approximation Mistakes

Students learning Taylor polynomials and their applications in numerical methods frequently make a set of recurring errors. Understanding these mistakes in advance helps avoid them.

**Mistake 1: Forgetting that Taylor polynomials are local.**

A Taylor polynomial of degree \(n\) centered at \(a\) is a good approximation near \(a\). Away from \(a\), the approximation may degrade rapidly. Students sometimes apply a Taylor polynomial at a point far from the center and expect high accuracy. Unless the function has very well-controlled higher derivatives, accuracy cannot be guaranteed far from the center.

*Warning.* Always check that the approximation point is within the region where the remainder bound is small enough. If the error bound is large, either use more terms or recenter the Taylor polynomial.

**Mistake 2: Confusing the degree with the number of terms.**

The degree-4 Maclaurin polynomial for \(\sin(x)\) is

\[
P_4(x) = x - \frac{x^3}{6}
\]

This has only two nonzero terms, even though the degree is 4. (The even-degree terms vanish because \(\sin\) is odd.) Students sometimes count terms instead of degree and either overcount or undercount.

**Mistake 3: Using the wrong center.**

If you need to approximate a function near \(x = 5\), centering the Taylor polynomial at \(a = 0\) may give a poor approximation, even at high degree. Center the polynomial near the point of interest.

**Mistake 4: Applying the error bound without bounding the derivative.**

The Lagrange remainder involves \(f^{(n+1)}(c)\) for an unknown \(c\). Students sometimes set \(c = a\) or \(c = x\) without justification. The correct procedure is to bound \(|f^{(n+1)}|\) over the entire interval between \(a\) and \(x\), then use that bound.

**Mistake 5: Forgetting the factorial.**

The coefficients of a Taylor polynomial include factorials in the denominator. A common error is writing \(P_3(x) = 1 + x + x^2 + x^3\) for \(e^x\) instead of the correct \(1 + x + x^2/2 + x^3/6\). Always include the \(k!\) in the denominator.

**Mistake 6: Assuming more terms always means better accuracy everywhere.**

Adding more terms to a Taylor polynomial improves accuracy near the center. But if the full series diverges outside the radius of convergence, adding more terms outside that radius will not help and may make the approximation worse. For \(\ln(1 + x)\), the series diverges for \(|x| > 1\) regardless of how many terms are added.

**Mistake 7: Treating the alternating series bound as a general rule.**

The alternating series error bound (first omitted term bounds the error) applies only when the terms are decreasing in absolute value and alternating in sign. It does not apply to the series for \(e^x\), which has all positive terms.

---

## 8.14 Preparing for Numerical Differential Equations

This chapter has developed Taylor polynomials as the mathematical foundation of local approximation. The central ideas are:

- a smooth function can be matched, to any desired order, by a polynomial near any point in its domain;
- the match is exact in value and all derivatives up to the chosen degree;
- the Lagrange remainder formula bounds how much error is left;
- adding more terms improves accuracy near the center;
- convergence of the full Taylor series depends on the function and the distance from the center.

These ideas carry directly into the study of numerical ordinary differential equations in Chapter 12. Euler's method, the Runge-Kutta family, and their error analyses are all rooted in Taylor expansion. The order of a numerical ODE method — the power of \(h\) in its error term — is determined by how many terms of the Taylor expansion the method matches.

Students who understand Taylor polynomials well will find that numerical ODE methods are natural extensions of local polynomial approximation applied to differential equations. Chapter 12 builds on this foundation.

---

## Chapter Summary

Taylor polynomials are the primary tool for replacing complicated smooth functions with polynomials in a mathematically controlled way. The Taylor polynomial of degree \(n\) centered at \(a\) is the unique polynomial that matches \(f\) in value, slope, and all derivatives up to order \(n\) at the center. Maclaurin polynomials are the special case centered at zero and are used to derive the computational formulas for \(e^x\), \(\sin(x)\), \(\cos(x)\), and \(\ln(1+x)\).

Taylor's Remainder Theorem provides a bound on the error from truncating the series at degree \(n\). The bound decreases as \(n\) increases, as the interval shrinks around the center, or as the \((n+1)\)th derivative decreases. The alternating series error bound offers a simpler estimate for alternating series.

Taylor polynomials underlie many numerical methods. Finite difference formulas, Euler's method, Newton's method, and integration rules all derive their error terms from Taylor expansions. Understanding the Taylor remainder theorem is essential for understanding the accuracy and order of convergence of these algorithms.

---

## Key Terms Review

**Taylor polynomial.** A polynomial \(P_n(x)\) that matches a smooth function \(f\) and its first \(n\) derivatives at a center point \(a\).

**Maclaurin polynomial.** A Taylor polynomial centered at \(a = 0\).

**Taylor series.** The infinite version of the Taylor polynomial, summing all derivative-coefficient terms.

**Remainder \(R_n(x)\).** The error \(f(x) - P_n(x)\) when the function is approximated by its degree-\(n\) Taylor polynomial.

**Lagrange remainder.** The formula \(R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}\) for some \(c\) between \(a\) and \(x\).

**Error bound.** An upper bound on \(|R_n(x)|\) obtained by maximizing \(|f^{(n+1)}|\) over the interval.

**Alternating series estimation.** For an alternating series with decreasing terms, the error from truncating after \(n\) terms is bounded by the absolute value of the first omitted term.

**Radius of convergence.** The distance from the center beyond which a Taylor series diverges.

**Order of approximation.** The highest power of \((x - a)\) correctly modeled by the Taylor polynomial.

---

## Concept Review Questions

1. What properties does the Taylor polynomial of degree \(n\) share with the function \(f\) at the center \(a\)?

2. Why is the Maclaurin polynomial convenient for computing values of \(e^x\), \(\sin(x)\), and \(\cos(x)\)?

3. What does the Lagrange remainder formula tell us that the polynomial sum alone cannot?

4. Why does the Taylor series for \(\ln(1 + x)\) not converge for all \(x\)?

5. How does the degree of a Taylor polynomial affect the accuracy of the approximation, and what other factors matter?

6. A student uses the degree-3 Maclaurin polynomial for \(\sin(x)\) to estimate \(\sin(3.0)\). Why might this give a poor result?

7. How do Taylor polynomials appear in the error analysis of finite difference formulas?

8. What does it mean to say that Euler's method is a first-order method, in terms of Taylor polynomials?

---

## Skill Practice

**Problem 8.1.** Find the Taylor polynomial of degree 3 for \(f(x) = e^{-x}\) centered at \(a = 0\). Use it to estimate \(e^{-0.3}\).

**Problem 8.2.** Find the Taylor polynomial of degree 4 for \(f(x) = \sin(x)\) centered at \(a = \pi/6\). (Use the values \(\sin(\pi/6) = 1/2\), \(\cos(\pi/6) = \sqrt{3}/2\).)

**Problem 8.3.** Find the Maclaurin polynomial of degree 5 for \(f(x) = \cos(x)\). Use it to estimate \(\cos(0.5)\).

**Problem 8.4.** Find the Maclaurin polynomial of degree 4 for \(f(x) = \ln(1 + x)\). Estimate \(\ln(1.1)\) and bound the error using the alternating series bound.

**Problem 8.5.** Verify that for \(f(x) = x^3 + 2x - 1\), the Taylor polynomial of degree 3 centered at any point \(a\) equals \(f(x)\) exactly. Explain why this must be true.

**Problem 8.6.** Construct the Maclaurin polynomial of degree 6 for \(f(x) = e^{x^2}\) by substituting \(u = x^2\) into the series for \(e^u\).

**Problem 8.7.** Use the error bound to determine how many terms of the Maclaurin series for \(e^x\) are needed to estimate \(e^{0.2}\) to within \(10^{-8}\).

**Problem 8.8.** The function \(f(x) = \frac{1}{1-x}\) has Maclaurin series \(\sum_{k=0}^\infty x^k\), valid for \(|x| < 1\). Write the degree-4 polynomial and estimate \(f(0.3)\). Compare with the exact value.

---

## Algorithm Practice

**Problem 8.9 (Algorithm box).** Write pseudocode for the following algorithm and test it by hand:

**Algorithm: Maclaurin Evaluation.**
- Input: a function name (from \(\{e^x, \sin(x), \cos(x)\}\)), a value \(x\), a degree \(n\).
- Steps: Compute the sum \(\sum_{k=0}^{n} c_k x^k\) where \(c_k = f^{(k)}(0)/k!\).
- Output: the polynomial approximation.

Evaluate the algorithm by hand for \(\sin(0.4)\) with \(n = 5\).

**Problem 8.10 (Horner's Method).** The polynomial \(P_4(x) = 1 + x + x^2/2 + x^3/6 + x^4/24\) can be rewritten to minimize multiplications using Horner's method:

\[
P_4(x) = 1 + x\!\left(1 + x\!\left(\frac{1}{2} + x\!\left(\frac{1}{6} + x \cdot \frac{1}{24}\right)\right)\right)
\]

Evaluate \(P_4(0.5)\) using this form, computing from the innermost parentheses outward. Show each step. Compare the number of multiplications used with direct evaluation.

---

## Computational Interpretation Problems

**Problem 8.11.** A calculator evaluates \(\cos(2.0)\) using the Maclaurin series for \(\cos(x)\). How many terms (what degree polynomial) are needed to guarantee 4 decimal places of accuracy?

**Problem 8.12.** The Taylor expansion of \(f(x + h)\) centered at \(x\) gives:

\[
f(x + h) = f(x) + f'(x)h + \frac{f''(x)}{2}h^2 + \frac{f'''(x)}{6}h^3 + \cdots
\]

Use this to derive the three-point forward difference formula for \(f'(x)\):

\[
f'(x) \approx \frac{-3f(x) + 4f(x+h) - f(x+2h)}{2h}
\]

and identify the order of its truncation error.

**Problem 8.13.** Euler's method for \(y' = -y\) with \(y(0) = 1\) produces \(y_1 = y_0 + h(-y_0) = 1 - h\). The true solution is \(y(h) = e^{-h}\). Using the Maclaurin series for \(e^{-h}\), show that the error in Euler's method for this step is \(\frac{h^2}{2} - \frac{h^3}{6} + \cdots\) and explain why the local truncation error is \(O(h^2)\).

**Problem 8.14.** The Maclaurin series for \(\arctan(x)\) is

\[
\arctan(x) = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots, \quad |x| \leq 1
\]

Since \(\arctan(1) = \pi/4\), the series at \(x = 1\) gives a formula for \(\pi\). How many terms are needed to estimate \(\pi\) to within \(0.001\)? Is this a practical algorithm? Explain.

---

## Applications

**Problem 8.15 (Physics — Small-Angle Approximation).** The period of a simple pendulum of length \(L\) for small angles is approximated by \(T = 2\pi\sqrt{L/g}\), using \(\sin(\theta) \approx \theta\). For a pendulum with \(L = 1\) m and \(g = 9.8\) m/s², compute \(T\) using this approximation. The exact period uses the complete elliptic integral, which is approximated to second order as

\[
T \approx 2\pi\sqrt{\frac{L}{g}}\left(1 + \frac{\theta_0^2}{16}\right)
\]

for initial angle \(\theta_0\). For \(\theta_0 = 0.4\) radians, what is the error from using only the zeroth-order approximation?

**Problem 8.16 (Finance — Continuous Compounding).** The value of an investment with continuous compounding is \(A = Pe^{rt}\). Using a first-order Taylor approximation of \(e^{rt}\) near \(r = 0\), derive the simple interest formula \(A \approx P(1 + rt)\). For \(P = 1000\), \(r = 0.05\), \(t = 1\), compute both approximations and the exact value. What does the difference represent?

**Problem 8.17 (Engineering — Beam Deflection).** The exact formula for beam curvature involves \(1/\sqrt{1 + (y')^2}\). For small deflections where \(y'\) is small, use the Taylor expansion of \((1 + u)^{-1/2}\) near \(u = 0\) to justify the small-deflection approximation \(\kappa \approx y''\). What order of approximation is this?

**Problem 8.18 (Computing — Relative Error in \(e^x\) Evaluation).** Suppose a computer evaluates \(e^{10}\) using the 10th-degree Maclaurin polynomial. Estimate the relative error in the result using the Lagrange remainder bound, with \(M = e^{10} \approx 22026\). What does this tell you about the practicality of direct Maclaurin evaluation for large arguments?

---

## Error Analysis

**Problem 8.19.** A student uses the degree-3 Maclaurin polynomial for \(\sin(x)\) to estimate \(\sin(1.5)\). Use the Lagrange remainder to bound the error. Is the bound less than \(0.01\)?

**Problem 8.20.** Find the Taylor polynomial of degree 2 for \(f(x) = \sqrt{1 + x}\) centered at \(a = 0\). Apply the error bound to estimate the error when this polynomial is used to approximate \(\sqrt{1.5}\). Is the approximation trustworthy?

**Problem 8.21.** For the Maclaurin series of \(e^x\), derive a formula for how many terms are needed to evaluate \(e^x\) to \(k\) decimal places, as a function of \(|x|\). Verify your formula for \(x = 0.5\) and tolerance \(10^{-5}\).

**Problem 8.22 (Challenge).** Compare the Lagrange error bound and the alternating series bound for the degree-5 Maclaurin approximation of \(\sin(0.5)\). Which gives a tighter estimate? Does the actual error confirm both bounds?

---

## Methods Reference

| Function | Maclaurin Polynomial of Degree \(n\) | Domain |
|----------|--------------------------------------|--------|
| \(e^x\) | \(\sum_{k=0}^{n} \frac{x^k}{k!}\) | All \(x\) |
| \(\sin(x)\) | \(\sum_{k=0}^{\lfloor(n-1)/2\rfloor} (-1)^k \frac{x^{2k+1}}{(2k+1)!}\) | All \(x\) |
| \(\cos(x)\) | \(\sum_{k=0}^{\lfloor n/2 \rfloor} (-1)^k \frac{x^{2k}}{(2k)!}\) | All \(x\) |
| \(\ln(1+x)\) | \(\sum_{k=1}^{n} (-1)^{k+1} \frac{x^k}{k}\) | \(-1 < x \leq 1\) |

**Lagrange Error Bound:**

\[
|R_n(x)| \leq \frac{M}{(n+1)!} |x - a|^{n+1}
\]

where \(M = \max_{t \text{ between } a \text{ and } x} |f^{(n+1)}(t)|\).

**Alternating Series Bound:** If the series alternates in sign with decreasing terms, then \(|R_n(x)|\) is at most the absolute value of the first omitted term.

---

## Chapter 8 Checkpoint

The following problems are representative of the skills and understanding covered in this chapter. Answer them to verify your readiness for the next chapter.

**Checkpoint 8.1.** Write the degree-3 Maclaurin polynomial for \(f(x) = e^{-2x}\) and use it to estimate \(e^{-0.4}\). Does your answer agree with the true value to within three decimal places?

**Checkpoint 8.2.** Find the Taylor polynomial of degree 2 for \(f(x) = \cos(x)\) centered at \(a = \pi/3\). Use it to estimate \(\cos(1.1)\). Note: \(\pi/3 \approx 1.047\), so \(1.1\) is close to this center.

**Checkpoint 8.3.** Using the degree-5 Maclaurin polynomial for \(\sin(x)\), estimate \(\sin(0.6)\). Then use the alternating series bound to estimate the error.

**Checkpoint 8.4.** Determine the degree \(n\) needed to estimate \(\cos(0.3)\) to within \(10^{-8}\) using the Maclaurin series. Use the alternating series bound.

**Checkpoint 8.5.** Derive the second-order central difference formula

\[
f''(x) \approx \frac{f(x+h) - 2f(x) + f(x-h)}{h^2}
\]

by expanding \(f(x+h)\) and \(f(x-h)\) as Taylor polynomials centered at \(x\), adding them, and solving for \(f''(x)\). What is the leading error term?

**Checkpoint 8.6.** A numerical algorithm needs to evaluate \(e^{0.1}\) to 10 decimal places. Using the Lagrange error bound with \(M = 2\) (a conservative overestimate), determine the degree of Maclaurin polynomial required.

---

## Bridge Note

Taylor polynomials connect this chapter backward and forward across the textbook.

Looking backward: Taylor's theorem justifies the finite difference formulas derived in Chapter 6 and provides their error terms. It underlies Newton's method (Chapter 3), whose quadratic convergence comes from the second-order Taylor expansion of \(f\) near a root. It explains why the midpoint and Simpson's rules in Chapter 7 have higher accuracy than the rectangle rule — they cancel the leading Taylor remainder terms.

Looking forward: Chapter 12 uses Taylor's theorem to derive and analyze numerical ODE methods. Euler's method is a first-order Taylor step. The Runge-Kutta family achieves higher-order accuracy by matching more Taylor terms without computing explicit higher derivatives. The error analysis of every ODE solver in Chapter 12 depends on the remainder formula developed in this chapter.

Beyond this course, Taylor polynomials appear throughout numerical analysis, signal processing, control theory, approximation theory, and physics. In scientific computing, Chebyshev polynomials and other orthogonal polynomial families are used instead of Taylor polynomials when global (not merely local) approximation is needed — but the motivation for polynomial approximation is the same. Students who understand Taylor polynomials are well prepared for numerical analysis courses in Chebyshev approximation, polynomial interpolation theory, spectral methods, and function approximation.

---

> **MGU Library Connection.** This chapter connects to the MGU Dictionary entry on *Taylor Series*, the Formula Reference for *Maclaurin Polynomials*, the Calculus chapter on *Sequences and Series*, the Differential Equations chapter on *Power Series Solutions*, and the Scientific Computing guide on *Function Evaluation Algorithms*. Students preparing for numerical analysis should also see the Advanced Numerical Analysis Readiness Check in Appendix T.
