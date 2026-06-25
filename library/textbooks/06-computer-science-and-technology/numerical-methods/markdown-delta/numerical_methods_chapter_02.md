# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part I: Foundations of Numerical Thinking and Error

---

# Chapter 2: Error, Floating-Point Arithmetic, and Stability

---

## Purpose

Every numerical method produces an approximation. That approximation differs from the exact answer by some amount, and that amount matters. Before students can responsibly use any numerical technique, they must understand how errors arise, how they are measured, how they propagate through computation, and how the structure of a computation can either control errors or allow them to grow out of hand.

This chapter introduces the language and tools of numerical error analysis. Students will learn to distinguish absolute error from relative error, rounding error from truncation error, and a well-conditioned problem from an ill-conditioned one. They will encounter floating-point arithmetic, the system by which computers represent real numbers, and they will see that this system introduces subtle but consequential limitations. They will study how errors propagate through arithmetic operations, what it means for an algorithm to be stable or unstable, and how to judge whether the answer a method produces can be trusted.

This chapter is not a detour. It is the foundation on which every later chapter rests. Bisection, Newton's method, numerical integration, linear system solvers, ODE methods — every technique in this book must be understood through the lens of error, stability, and reliability. A numerical answer without error awareness is not mathematics. It is a number without meaning.

---

## Opening Question

Suppose a student uses a calculator to evaluate the expression

$$\frac{1}{1 - \cos x}$$

for a small value of $x$, say $x = 0.001$ radians. The calculator returns a large number. The student refines the computation and gets a slightly different large number. A third computation, using a slightly different algebraic form of the same expression, gives a third answer. All three answers look reasonable, but they cannot all be correct.

What is happening? Why does a straightforward mathematical expression produce inconsistent results? And how can a student know which answer, if any, to trust?

The answer lies in floating-point arithmetic, loss of significance, and the sensitivity of the computation to small errors in the inputs. By the end of this chapter, students will understand exactly why this happens, how to detect it, and in many cases, how to avoid it.

---

## Why This Chapter Matters

Students who study calculus learn to produce exact answers using symbolic rules: the derivative of $\sin x$ is $\cos x$, the integral of $e^x$ is $e^x + C$. These exact rules are elegant, but they do not describe how a computer actually stores, computes, or returns a number. Computers work with finite representations of real numbers, and those finite representations are imperfect. Every computation introduces a small error, and those small errors accumulate.

Understanding error is not pessimism about computation. It is professionalism. Engineers designing aircraft, scientists modeling climate systems, and data scientists training algorithms must all understand what their computed answers mean — and what they do not mean. A number printed to twelve decimal places is not necessarily accurate to twelve decimal places. Significant digits, floating-point representation, conditioning, and stability together determine whether a computed answer is reliable.

---

## Learning Objectives

After completing this chapter, students should be able to:

- Define and compute absolute error, relative error, and percent error.
- Identify the number of significant digits in a computed result.
- Distinguish between rounding error and truncation error and explain when each occurs.
- Explain how real numbers are stored in floating-point format and why this representation is inexact.
- Describe machine precision and explain what it means for numerical computation.
- Identify loss of significance and explain why it is dangerous.
- Compute and interpret error propagation through arithmetic operations.
- Explain what it means for a problem to be well-conditioned or ill-conditioned.
- Distinguish between a stable algorithm and an unstable one.
- Apply error concepts to judge the reliability of numerical results.

---

## Key Terms

absolute error, relative error, percent error, significant digits, rounding error, truncation error, floating-point arithmetic, mantissa, exponent, machine precision (machine epsilon), underflow, overflow, loss of significance, catastrophic cancellation, error propagation, condition number, well-conditioned problem, ill-conditioned problem, stable algorithm, unstable algorithm, forward error, backward error

---

## 2.1 Why Error Analysis Matters

In symbolic mathematics, when we write $\sqrt{2}$, we mean the unique positive real number whose square is exactly 2. This number is irrational: its decimal expansion never terminates and never repeats. A computer cannot store this number exactly. It stores an approximation, perhaps $1.41421356237310$, and uses that approximation in every subsequent calculation.

This gap between the exact mathematical value and the stored numerical value is a *representation error*, and it exists for nearly every real number. By itself, this gap is small enough to be harmless for most purposes. The danger arises when these tiny representation errors combine, amplify, and accumulate through many steps of computation.

Consider the following situations, each of which can cause an initially tiny error to become large:

- Subtracting two nearly equal numbers (the small difference amplifies relative error dramatically).
- Dividing by a very small number (any error in the numerator is multiplied).
- Applying a function that is highly sensitive to small input changes.
- Repeating a computation thousands of times, where each step introduces a small error that accumulates.

Error analysis gives students the tools to detect these dangers before they trust a result. The goal is not to make students afraid of computation. It is to make them careful and informed.

> **Student Note:** Error analysis is not a sign that numerical methods are weak. It is evidence that numerical methods are honest. Symbolic algebra can produce exact answers only because it avoids representing those answers as finite decimal numbers. The moment any computation happens in a computer, approximation enters. Error analysis is the discipline of understanding that approximation rigorously.

---

## 2.2 Absolute Error

Let $p$ denote the exact value of a quantity and let $p^*$ denote an approximation to $p$. The **absolute error** of the approximation is

$$
E_{\text{abs}} = |p - p^*|
$$

Absolute error measures the size of the discrepancy between the exact value and the approximate value, using the same units as the quantity itself.

**Example 2.2.1 — Computing Absolute Error**

*Problem:* Suppose the exact value of a physical constant is $p = 3.14159265\ldots$ (this is $\pi$), and a student uses the approximation $p^* = 3.14$. What is the absolute error?

*Think:* The exact value of $\pi$ is known to many decimal places. The approximation $3.14$ truncates the decimal expansion after two places. The error is the magnitude of their difference.

*Compute:*

$$
E_{\text{abs}} = |3.14159265\ldots - 3.14| = |0.00159265\ldots| \approx 0.00159
$$

*Interpret:* The approximation $p^* = 3.14$ differs from $\pi$ by about $0.00159$ in absolute terms. Whether this error is acceptable depends entirely on the application. For a rough area estimate, it may be fine. For a precision engineering calculation, it may not be.

---

Absolute error is intuitive and easy to compute, but it has a limitation: it does not account for the scale of the quantity being approximated. An absolute error of $0.001$ is negligible if we are measuring distances in kilometers, but it is enormous if we are measuring atomic radii in nanometers.

This limitation motivates relative error.

---

## 2.3 Relative Error

The **relative error** of an approximation $p^*$ to an exact value $p \neq 0$ is

$$
E_{\text{rel}} = \frac{|p - p^*|}{|p|}
$$

Relative error expresses the error as a fraction of the exact value, making it scale-independent. When multiplied by 100, relative error gives the percent error.

**Example 2.3.1 — Relative Error Depends on Scale**

*Problem:* Consider two measurements. In the first, an exact distance is $p_1 = 1000$ meters and the approximation is $p_1^* = 999$ meters. In the second, an exact length is $p_2 = 0.005$ millimeters and the approximation is $p_2^* = 0.004$ millimeters. Compare the absolute and relative errors.

*Compute:*

For the first measurement:
$$
E_{\text{abs},1} = |1000 - 999| = 1 \text{ meter}
$$
$$
E_{\text{rel},1} = \frac{1}{1000} = 0.001 = 0.1\%
$$

For the second measurement:
$$
E_{\text{abs},2} = |0.005 - 0.004| = 0.001 \text{ mm}
$$
$$
E_{\text{rel},2} = \frac{0.001}{0.005} = 0.2 = 20\%
$$

*Interpret:* The second measurement has a much smaller absolute error ($0.001$ mm versus $1$ m), yet its relative error is vastly larger ($20\%$ versus $0.1\%$). For the application, the second approximation is far worse, even though the raw number looks small. Relative error captures this distinction correctly.

---

> **Reliability Note:** When comparing the accuracy of two approximations, always consider relative error unless there is a specific reason that absolute error is the appropriate measure.

---

## 2.4 Percent Error

The **percent error** is the relative error expressed as a percentage:

$$
E_{\%} = \frac{|p - p^*|}{|p|} \times 100\%
$$

Percent error is widely used in science and engineering because it is immediately interpretable: a $2\%$ error means the approximation differs from the exact value by about $2$ parts per hundred.

**Example 2.4.1 — Percent Error in a Physical Measurement**

*Problem:* A student estimates the acceleration due to gravity as $9.75 \text{ m/s}^2$. The accepted value is $9.81 \text{ m/s}^2$. What is the percent error?

*Compute:*

$$
E_{\%} = \frac{|9.81 - 9.75|}{9.81} \times 100\% = \frac{0.06}{9.81} \times 100\% \approx 0.61\%
$$

*Interpret:* The estimate differs from the accepted value by less than $1\%$. In most classroom physics applications, this would be acceptable. For precision engineering, it might not be.

---

## 2.5 Significant Digits

The concept of **significant digits** (also called significant figures) describes how many digits of a number are reliably meaningful. When a number is the result of a measurement or computation, not all digits in its decimal representation are trustworthy.

The rules for counting significant digits are:

- All nonzero digits are significant.
- Zeros between nonzero digits are significant.
- Leading zeros (zeros before the first nonzero digit) are not significant.
- Trailing zeros in a decimal number are significant.
- Trailing zeros in a whole number are ambiguous unless a decimal point is written explicitly.

**Example 2.5.1 — Counting Significant Digits**

| Number | Significant Digits | Count |
|--------|-------------------|-------|
| $3.14159$ | all digits | 6 |
| $0.00407$ | $4, 0, 7$ | 3 |
| $1200$ | ambiguous | 2, 3, or 4 |
| $1200.$ | $1, 2, 0, 0$ | 4 |
| $0.05030$ | $5, 0, 3, 0$ | 4 |

---

In numerical computation, the number of significant digits in a result reflects the precision of the computation. When a result has fewer significant digits than expected, it often signals that significant digits have been lost due to the arithmetic operations involved — particularly subtraction of nearly equal numbers.

**Definition:** We say that the approximation $p^*$ **approximates $p$ to $t$ significant digits** if

$$
\frac{|p - p^*|}{|p|} < 5 \times 10^{-t}
$$

This formal definition captures the idea that $t$ correct significant digits means the relative error is less than half a unit in the $t$th decimal place.

---

## 2.6 Rounding Error

**Rounding error** arises when a number with more digits than a system can store is rounded to fit within the available precision. Every time a real number is stored in a computer's floating-point system, a rounding error may occur. This error is small but unavoidable.

Rounding occurs in two standard ways:

- **Round-to-nearest:** The stored value is the floating-point number closest to the exact value.
- **Chopping (truncation toward zero):** The stored value is the floating-point number obtained by simply dropping all digits beyond the available precision.

**Example 2.6.1 — Rounding Versus Chopping**

*Problem:* Store the number $\pi = 3.14159265\ldots$ with five significant decimal digits using (a) rounding and (b) chopping.

*Compute:*

(a) The fifth significant digit is $5$, and the next digit is $9 \geq 5$, so we round up:
$$
p^*_{\text{round}} = 3.1416
$$

(b) Chopping simply drops digits after the fifth:
$$
p^*_{\text{chop}} = 3.1415
$$

*Errors:*
$$
E_{\text{round}} = |3.14159265\ldots - 3.1416| \approx 0.0000074
$$
$$
E_{\text{chop}} = |3.14159265\ldots - 3.1415| \approx 0.0000926
$$

*Interpret:* Rounding introduces less error than chopping on average, which is why round-to-nearest is the standard in modern computing systems.

---

> **Student Warning:** Rounding errors in individual computations are typically tiny. Their danger comes from accumulation. In a computation involving thousands of operations, each contributing a tiny rounding error, the total accumulated error can become significant. This is one reason why the stability of an algorithm matters greatly.

---

## 2.7 Truncation Error

**Truncation error** is fundamentally different from rounding error. It arises not from the limitations of number storage, but from replacing an infinite or exact mathematical process with a finite approximation.

The clearest example comes from Taylor series. The exponential function can be written as an infinite series:

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots
$$

If we compute $e^x$ using only the first four terms, we introduce a **truncation error**: the error caused by cutting off (truncating) an infinite process at a finite number of terms.

Similarly, the derivative of a function $f$ at a point $x$ is defined as the limit

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

If a computer approximates this limit using a small but nonzero $h$, say $h = 0.001$, the approximation

$$
f'(x) \approx \frac{f(x + 0.001) - f(x)}{0.001}
$$

introduces a truncation error: we have stopped the limit at $h = 0.001$ rather than actually taking $h \to 0$.

**The key distinction:**

| Error Type | Source | Can be reduced by |
|-----------|--------|------------------|
| Rounding error | Finite digit storage | Using higher precision arithmetic |
| Truncation error | Finite approximation of infinite process | Using more terms, smaller steps, higher-order methods |

Both types of error are present in most numerical computations, and they interact in ways that Chapter 6 (Numerical Differentiation) will study carefully.

---

## 2.8 Floating-Point Arithmetic

Real computers do not work with real numbers in the mathematical sense. They work with **floating-point numbers**: a finite set of rational numbers that approximates the real number line.

A floating-point number in base $\beta$ with $t$ digits of precision has the form

$$
\pm \, d_1.d_2 d_3 \cdots d_t \times \beta^e
$$

where:
- $\beta$ is the **base** (almost always $2$ in modern computers, but sometimes $10$ for decimal arithmetic systems),
- $d_1.d_2 d_3 \cdots d_t$ is the **mantissa** (also called the significand), with $d_1 \neq 0$ in a normalized representation,
- $e$ is the **exponent**, an integer in some range $[e_{\min}, e_{\max}]$.

This representation can store a wide range of magnitudes (controlled by the exponent) with a fixed number of significant digits (controlled by the mantissa length $t$).

**The IEEE 754 Standard**

Modern computers overwhelmingly use the IEEE 754 standard for floating-point arithmetic. The two most common formats are:

- **Single precision (32-bit):** approximately 7 significant decimal digits, exponent range roughly $10^{-38}$ to $10^{38}$.
- **Double precision (64-bit):** approximately 15–16 significant decimal digits, exponent range roughly $10^{-308}$ to $10^{308}$.

Most numerical software uses double precision by default.

**Example 2.8.1 — Floating-Point Representation in Base 10**

*Problem:* Express the number $-0.00432$ in normalized floating-point form in base 10 with 4 significant digits.

*Solution:*

$$
-0.00432 = -4.320 \times 10^{-3}
$$

The mantissa is $4.320$, the exponent is $-3$, the sign is negative. The stored number has four significant digits.

---

**What floating-point arithmetic cannot represent exactly**

Because floating-point systems have finitely many members, most real numbers are not representable exactly. The number $\frac{1}{3} = 0.333\ldots$ has no terminating binary or decimal representation and is always approximated. Even the simple decimal number $0.1$ does not have an exact binary floating-point representation — this surprises many students, but it follows directly from the fact that $\frac{1}{10}$ in binary is an infinitely repeating fraction.

**Overflow and Underflow**

When a computation produces a number larger than the maximum representable floating-point number, **overflow** occurs. The result is typically represented as $\infty$ (infinity) in IEEE 754 systems, which poisons subsequent calculations.

When a computation produces a nonzero number smaller in magnitude than the smallest representable positive floating-point number, **underflow** occurs. The result is typically rounded to zero (gradual underflow to a denormalized number is also possible), which can cause division-by-near-zero disasters downstream.

> **Student Warning:** Never assume that a computer will automatically warn you when overflow or underflow occurs. Some programming environments do; many do not. Part of responsible numerical work is monitoring the magnitude of intermediate results.

---

## 2.9 Machine Precision

Among the most important concepts in floating-point arithmetic is **machine precision** (also called machine epsilon), denoted $\varepsilon_{\text{mach}}$ or $\mathbf{u}$.

Machine precision is defined as the smallest positive floating-point number $\varepsilon$ such that

$$
1 + \varepsilon \neq 1
$$

in floating-point arithmetic. Equivalently, it is the gap between $1$ and the next larger floating-point number.

For IEEE 754 double precision (64-bit), machine epsilon is approximately

$$
\varepsilon_{\text{mach}} \approx 2.22 \times 10^{-16}
$$

This number quantifies the fundamental precision limitation of double-precision computation. Any relative error smaller than $\varepsilon_{\text{mach}}$ is simply unresolvable in double-precision arithmetic; such errors are indistinguishable from zero at that precision level.

**What machine epsilon means in practice**

If a computed result has a relative error smaller than $\varepsilon_{\text{mach}}$, the computation is as accurate as the floating-point system allows. This is the best one can do without switching to higher-precision arithmetic. On the other hand, if a computed result has a relative error close to $1$ — meaning the result has essentially no correct significant digits — then something has gone badly wrong, and the culprit is usually loss of significance or a poorly conditioned problem.

---

## 2.10 Loss of Significance

One of the most dangerous phenomena in floating-point arithmetic is **loss of significance**, also called **catastrophic cancellation**. It occurs when two nearly equal floating-point numbers are subtracted, causing the significant digits to cancel and leaving a result dominated by rounding error.

**Example 2.10.1 — Catastrophic Cancellation**

*Problem:* Suppose we compute $a - b$ where $a = 1.000000001$ and $b = 1.000000000$ using a floating-point system with 8 significant decimal digits.

*Compute:*

Both $a$ and $b$ are stored with 8 significant digits. The difference is

$$
a - b = 0.000000001 = 1 \times 10^{-9}
$$

But if each of $a$ and $b$ was rounded during storage, say to

$$
a^* = 1.0000000\mathbf{0} \quad b^* = 1.0000000\mathbf{0}
$$

(where the rounding happened in the ninth digit, which is beyond 8-digit precision), then

$$
a^* - b^* = 0
$$

The result has lost all significant digits. The computed answer is zero, while the exact answer is $10^{-9}$. The relative error is $100\%$.

---

**The opening question revisited**

This is precisely what happens in the expression $\frac{1}{1 - \cos x}$ for small $x$. When $x$ is small, $\cos x$ is very close to $1$, so $1 - \cos x$ is the difference of two nearly equal numbers. That subtraction loses significance, producing a result with few reliable significant digits. Dividing by that small inaccurate number amplifies the error dramatically.

The remedy is to rewrite the expression algebraically before computing. Using the identity $1 - \cos x = 2 \sin^2(x/2)$,

$$
\frac{1}{1 - \cos x} = \frac{1}{2 \sin^2(x/2)}
$$

This form avoids the catastrophic subtraction entirely and produces an accurate result for small $x$.

> **Key Principle:** When a computation requires subtracting two quantities that may be nearly equal, look for an algebraically equivalent form that avoids the subtraction. This is one of the most practical skills in numerical computing.

---

**Example 2.10.2 — The Quadratic Formula and Loss of Significance**

*Problem:* Use the quadratic formula to find the roots of $x^2 - 1000x + 1 = 0$.

*Compute using the standard formula:*

$$
x = \frac{1000 \pm \sqrt{1000^2 - 4}}{2} = \frac{1000 \pm \sqrt{999996}}{2}
$$

$$
\sqrt{999996} \approx 999.998000
$$

$$
x_1 = \frac{1000 + 999.998000}{2} \approx 999.999000
$$

$$
x_2 = \frac{1000 - 999.998000}{2} = \frac{0.002000}{2} = 0.001000
$$

*Analysis:* The computation of $x_1$ is fine. But $x_2$ requires subtracting $1000$ and $999.998000$, two nearly equal numbers. Small rounding errors in $\sqrt{999996}$ will produce a result for $x_2$ with far fewer reliable significant digits than the inputs.

*Remedy:* For the smaller root, use the alternative form derived from the identity $x_1 \cdot x_2 = \frac{c}{a} = 1$ (from Vieta's formulas):

$$
x_2 = \frac{1}{x_1} \approx \frac{1}{999.999000} \approx 0.0010000010
$$

This avoids catastrophic cancellation entirely and gives a reliable answer for $x_2$.

---

## 2.11 Error Propagation

Errors do not stay fixed when we perform arithmetic with approximate numbers. They **propagate**: when we add, subtract, multiply, or divide approximate quantities, the errors in those quantities combine to produce an error in the result.

**Addition and Subtraction**

Let $x^*$ approximate $x$ with error $\delta x = x - x^*$, and let $y^*$ approximate $y$ with error $\delta y = y - y^*$. Then

$$
(x + y) - (x^* + y^*) = \delta x + \delta y
$$

The absolute error in a sum or difference is at most the sum of the absolute errors:

$$
|\delta(x \pm y)| \leq |\delta x| + |\delta y|
$$

For sums, absolute errors add. This is why adding many approximate numbers can accumulate significant total error.

**Multiplication and Division**

The relative error in a product satisfies approximately (for small relative errors):

$$
\frac{|\delta(xy)|}{|xy|} \approx \frac{|\delta x|}{|x|} + \frac{|\delta y|}{|y|}
$$

Similarly for division:

$$
\frac{|\delta(x/y)|}{|x/y|} \approx \frac{|\delta x|}{|x|} + \frac{|\delta y|}{|y|}
$$

Relative errors add in multiplication and division. This means that multiplying or dividing approximate quantities does not amplify errors more than the sum of the input relative errors.

**Functions of one variable**

For a smooth function $f$, the error in $f(x^*)$ as an approximation to $f(x)$ is approximately

$$
|f(x) - f(x^*)| \approx |f'(x)| \cdot |x - x^*|
$$

The derivative $|f'(x)|$ is an **amplification factor**: if $|f'(x)|$ is large near the point of evaluation, even a small input error can produce a large output error.

**Example 2.11.1 — Error in a Function Evaluation**

*Problem:* Suppose $x = 2.00$ is an approximation to an exact value somewhere in the interval $[1.99, 2.01]$, so $|\delta x| \leq 0.01$. Estimate the resulting error in $f(x) = x^3$.

*Compute:*

$$
f'(x) = 3x^2
$$

At $x = 2$: $f'(2) = 12$.

$$
|\delta f| \approx |f'(2)| \cdot |\delta x| = 12 \cdot 0.01 = 0.12
$$

*Interpret:* An input error of at most $0.01$ produces an output error of at most approximately $0.12$ in $x^3$. The function amplifies the input error by a factor of about $12$ at this point.

---

## 2.12 Conditioning

A fundamental distinction in numerical analysis is between the **difficulty of a problem** and the **quality of the algorithm used to solve it**. Some problems are inherently sensitive: small changes in input produce large changes in output, regardless of what algorithm is used. These problems are called **ill-conditioned**.

The **condition number** of a problem measures this inherent sensitivity. For a function $f$ evaluated at a point $x \neq 0$, the condition number is defined as

$$
\kappa = \frac{|x \cdot f'(x)|}{|f(x)|}
$$

This is the ratio of the relative change in output to the relative change in input. A large condition number means the problem is ill-conditioned: small relative errors in the input produce large relative errors in the output.

- If $\kappa \approx 1$, the problem is **well-conditioned**: errors in input are not significantly amplified.
- If $\kappa \gg 1$, the problem is **ill-conditioned**: small input errors produce large output errors, and the computed result may be unreliable regardless of the algorithm used.

> **Critical Distinction:** Conditioning is a property of the **problem**, not the algorithm. Even a perfect algorithm, with no rounding error whatsoever, will produce an inaccurate result when applied to an ill-conditioned problem if the input data are not exact.

**Example 2.12.1 — Condition Number of a Function**

*Problem:* Estimate the condition number of $f(x) = \sqrt{x}$ near $x = 4$.

*Compute:*

$$
f'(x) = \frac{1}{2\sqrt{x}}, \quad f(4) = 2, \quad f'(4) = \frac{1}{4}
$$

$$
\kappa = \frac{|4 \cdot \frac{1}{4}|}{|2|} = \frac{1}{2}
$$

*Interpret:* The condition number is $\frac{1}{2}$, which is less than $1$. The function $\sqrt{x}$ near $x = 4$ is well-conditioned: a $1\%$ relative error in $x$ produces only about a $0.5\%$ relative error in $\sqrt{x}$.

---

**Example 2.12.2 — An Ill-Conditioned Problem**

*Problem:* Consider $f(x) = \ln x$ near $x = 0.001$.

*Compute:*

$$
f'(x) = \frac{1}{x}, \quad f(0.001) = \ln(0.001) = -3\ln 10 \approx -6.908
$$

$$
\kappa = \frac{|0.001 \cdot \frac{1}{0.001}|}{|-6.908|} = \frac{1}{6.908} \approx 0.145
$$

The condition number here is not dramatic. But consider instead solving a linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ when the matrix $\mathbf{A}$ is nearly singular. In that case, the matrix condition number (studied in Chapter 9) can be $10^{10}$ or larger, meaning a relative error of $10^{-16}$ in the input data can produce a relative error approaching $10^{-6}$ in the solution — a loss of ten significant digits.

---

## 2.13 Stability of Algorithms

Where conditioning describes sensitivity of the **problem**, stability describes sensitivity of the **algorithm**. Two different algorithms may solve the same problem, with the same conditioning, but one may amplify rounding errors at each step while the other keeps them under control.

**Definition:** An algorithm is **stable** if small perturbations in the input (or small rounding errors introduced during computation) produce only small perturbations in the output. An algorithm is **unstable** if rounding errors introduced during the computation grow and eventually dominate the result.

This distinction is subtle but important. An unstable algorithm applied to a well-conditioned problem will still produce garbage. A stable algorithm applied to an ill-conditioned problem will produce the most accurate answer the problem allows — but that may still not be very accurate.

**Forward and Backward Error**

Two complementary ways of measuring algorithm error:

- **Forward error:** The difference between the computed answer and the exact answer: $|p^* - p|$. This is what we usually mean by "error."
- **Backward error:** How much would we have to change the input so that the computed answer would be the exact answer to the perturbed problem? A small backward error means "my algorithm solved a problem very close to the one I intended."

A **backward stable** algorithm is one whose backward error is small — roughly the size of machine epsilon. This is often the most practical goal: find a stable algorithm that produces a result which is the exact answer to a slightly perturbed version of the input problem.

**Example 2.13.1 — Instability in Recurrence Relations**

*Problem:* The integrals $E_n = \int_0^1 x^n e^x \, dx$ satisfy the recurrence relation

$$
E_n = e - n E_{n-1}
$$

This can be derived by integration by parts. Suppose we compute $E_0 = e - 1 \approx 1.71828$ and use the recurrence to generate $E_1, E_2, \ldots, E_{10}$.

*Analysis:*

In exact arithmetic, this recurrence is mathematically correct. But observe that each step multiplies the previous result by $-n$, where $n$ grows. Any small rounding error in $E_0$ is multiplied by $-1, -2, -3, \ldots, -10$ through ten iterations. An initial error of $\varepsilon$ becomes an error of magnitude $10! \cdot \varepsilon$ after ten steps.

For $\varepsilon \approx 10^{-16}$ (machine epsilon), the error after ten steps is approximately $10! \times 10^{-16} = 3628800 \times 10^{-16} \approx 3.6 \times 10^{-10}$. This is small, so the forward recurrence happens to be stable enough here. But for $n = 30$, the error becomes $30! \times 10^{-16}$, which is astronomical.

The backward recurrence — starting from a known approximation for large $n$ and working downward — is stable, because the factor $(-n)^{-1}$ contracts errors at each step. This is a case where the direction of computation matters profoundly.

> **Key Insight:** Stability is not a property of a formula. It is a property of how the formula is evaluated. The same mathematical recurrence, run forward or backward, can be stable in one direction and unstable in the other.

---

## 2.14 Common Error Analysis Mistakes

Students encountering numerical error analysis for the first time make certain characteristic mistakes. Recognizing these now will prevent much confusion later.

**Mistake 1: Confusing rounding error and truncation error.**

Rounding error comes from the finite precision of the floating-point system. Truncation error comes from using a finite approximation for an infinite mathematical process. They coexist in nearly every numerical computation and must be managed separately.

**Mistake 2: Assuming more decimal digits means more accuracy.**

A computed answer printed to 15 decimal places is not accurate to 15 decimal places unless the entire computation was carefully controlled. If loss of significance occurred early in the computation, only the first few digits may be reliable. Always think about where significant digits could have been lost.

**Mistake 3: Assuming that reducing step size always improves accuracy.**

In numerical differentiation and integration, reducing the step size $h$ reduces truncation error but increases rounding error (because we must subtract nearly equal numbers). There is an optimal step size, and making $h$ too small actually worsens the result. Chapter 6 analyzes this tradeoff in detail.

**Mistake 4: Confusing conditioning and stability.**

Conditioning describes the problem; stability describes the algorithm. A well-conditioned problem solved by an unstable algorithm will give a bad answer. An ill-conditioned problem solved by a stable algorithm will give the best answer the problem allows — which may still not be good.

**Mistake 5: Ignoring error in the final result because individual errors seem small.**

Tiny errors accumulate. A computation with $10^6$ steps, each introducing a rounding error of $10^{-16}$, could produce an accumulated error of order $10^{-10}$. For high-precision applications, this matters.

**Mistake 6: Treating the condition number as a property of the algorithm.**

The condition number is a property of the mathematical problem, not of any particular method for solving it. An algorithm cannot improve a problem's conditioning; it can only solve the problem well or poorly given that conditioning.

---

## Practice Problems

### Concept Check

1. In your own words, explain the difference between absolute error and relative error. Give an example where relative error is a more informative measure than absolute error.

2. Explain why $\frac{1}{3}$ cannot be stored exactly in a base-10 decimal floating-point system with finitely many digits. Is there a floating-point base in which $\frac{1}{3}$ could be stored exactly?

3. State the definition of machine epsilon in words. What does it measure?

4. Explain what catastrophic cancellation is and give a situation in which it might arise.

5. What is the difference between a well-conditioned problem and a stable algorithm? Why does it matter to distinguish them?

### Skill Practice

6. For each of the following, compute the absolute error, relative error, and percent error.

   (a) Exact value $p = 2.71828\ldots$ ($e$), approximation $p^* = 2.718$.
   
   (b) Exact value $p = 100$, approximation $p^* = 97.3$.
   
   (c) Exact value $p = 0.000125$, approximation $p^* = 0.000130$.

7. How many significant digits are in each of the following numbers?

   (a) $0.004050$
   
   (b) $30000$ (no decimal point shown)
   
   (c) $30000.$
   
   (d) $1.00320$

8. Round each of the following to four significant digits.

   (a) $3.14159265$
   
   (b) $0.00271828$
   
   (c) $149600000$ (the approximate distance from Earth to the Sun in kilometers)

9. A floating-point system in base 10 stores four significant decimal digits with exponents from $-5$ to $5$. 

   (a) What is the largest positive number this system can represent?
   
   (b) What is the smallest positive normalized number this system can represent?
   
   (c) Represent $0.003476$ in normalized form in this system.
   
   (d) What happens if you try to store $12345$ in this system?

10. In double-precision floating-point arithmetic, machine epsilon is approximately $2.22 \times 10^{-16}$. Approximately how many significant decimal digits does a double-precision computation carry?

### Algorithm and Error Propagation Practice

11. Let $f(x) = x^2 - x$. Suppose $x^* = 2.01$ is used in place of the exact value $x = 2$.

    (a) Compute the absolute error in $x$.
    
    (b) Use the linear approximation $\delta f \approx f'(x) \cdot \delta x$ to estimate the error in $f$.
    
    (c) Compute $f(2)$ and $f(2.01)$ and find the actual absolute error in $f$. Compare with your estimate.

12. Let $a^* = 1.23 \pm 0.01$ and $b^* = 4.56 \pm 0.02$ be two measured quantities with the given absolute errors.

    (a) Estimate the absolute error in $a^* + b^*$.
    
    (b) Estimate the relative error in $a^* \cdot b^*$.
    
    (c) Estimate the relative error in $a^* / b^*$.

13. The expression $\sqrt{x+1} - \sqrt{x}$ is prone to loss of significance for large $x$.

    (a) Explain why this is a problem for large $x$.
    
    (b) Show that $\sqrt{x+1} - \sqrt{x} = \frac{1}{\sqrt{x+1} + \sqrt{x}}$.
    
    (c) For $x = 1000$, compute both forms numerically (using a calculator or by hand) and compare. Which form gives a more reliable result?

14. Compute the condition number of $f(x) = e^x$ at $x = 1$ and at $x = 10$. Interpret what these numbers mean for the relative error in evaluating $f$.

### Computational Interpretation

15. A student computes the derivative of $f(x) = \cos x$ at $x = 0$ using the forward difference formula

    $$\frac{f(h) - f(0)}{h} = \frac{\cos h - 1}{h}$$
    
    for $h = 0.001$. This requires computing $\cos(0.001) - 1$, which is the difference of two nearly equal numbers.
    
    (a) Identify the source of potential error in this computation.
    
    (b) How could the computation be restructured to reduce loss of significance? (Hint: consider the Taylor series for $\cos h$ near $h = 0$.)

16. A calculation uses the recurrence $a_{n+1} = 2a_n - 1$ starting from $a_0 = 0.5$. 

    (a) What is the exact value of $a_n$ for all $n$?
    
    (b) Suppose $a_0 = 0.5 + \varepsilon$ for a small error $\varepsilon$. What is $a_n$ as a function of $n$ and $\varepsilon$?
    
    (c) Is this recurrence stable? Explain.

### Applications

17. A surveyor measures a distance as $d^* = 152.3$ meters with an absolute error of at most $0.1$ meters. The surveyor squares this distance to compute an area.

    (a) Estimate the absolute error in the computed area.
    
    (b) Estimate the relative error in the computed area. Compare it to the relative error in the measured distance.

18. A medication dosing formula requires computing $e^{-0.693t}$ for several values of $t$ from $0$ to $10$. The exponent coefficient $-0.693$ is itself an approximation (it is $-\ln 2$, rounded to three decimal places).

    (a) Estimate the relative error in the exponent at $t = 10$ due to this rounding.
    
    (b) Estimate the resulting relative error in $e^{-0.693 \cdot 10}$.
    
    (c) Is this level of error likely to be acceptable for dosing calculations? Discuss briefly.

19. Consider two algorithms for evaluating the polynomial $p(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$:

    **Algorithm A:** Evaluate each term $a_k x^k$ separately, requiring a separate power computation for each, and add all terms.
    
    **Algorithm B (Horner's method):** Rewrite as $p(x) = (\cdots((a_n x + a_{n-1})x + a_{n-2})x + \cdots + a_1)x + a_0$ and evaluate from the inside out.
    
    (a) Count the number of multiplications each algorithm requires for a degree-$n$ polynomial.
    
    (b) Why does Horner's method tend to introduce less rounding error? (Consider how many floating-point operations each method performs.)

### Error Analysis

20. Explain in two to three sentences why reducing the number of floating-point operations in a computation tends to reduce total rounding error.

21. Suppose a numerical algorithm applied to a well-conditioned problem (condition number $\kappa \approx 1$) produces a result with a relative error of $10^{-3}$, even though double-precision arithmetic with $\varepsilon_{\text{mach}} \approx 10^{-16}$ is used. What might explain this discrepancy?

22. Suppose a numerical algorithm applied to an ill-conditioned problem (condition number $\kappa = 10^8$) produces a result with a relative error of $10^{-8}$. Is this surprising? Is it acceptable? What is the best achievable relative error given double-precision arithmetic?

---

## Real-World Applications

**Climate modeling.** Global climate simulations involve billions of floating-point operations per timestep, run over thousands of timesteps. Even tiny systematic rounding errors can accumulate to produce measurable discrepancies in long-range simulations. Climate scientists use error analysis to determine how long their simulations remain reliable and at what point error accumulation dominates the physical signal.

**Financial computation.** Interest rate models, option pricing formulas, and portfolio optimization calculations often involve near-cancellation of large quantities. A bond's price sensitivity to interest rate changes (its "duration") requires differencing nearly equal values. Financial engineers use reformulations and higher-precision arithmetic to avoid catastrophic cancellation in these calculations.

**GPS and navigation.** GPS satellite signals must be corrected for relativistic effects using numerical computations sensitive to the difference of nearly equal quantities. The time dilation from special relativity (satellite moving faster than ground) and from general relativity (satellite farther from Earth's gravitational well) nearly cancel, and computing their net effect requires careful attention to loss of significance.

**Machine learning.** Gradient descent algorithms train neural networks by computing gradients — small differences of computed function values. In deep networks, gradients can become extremely small (the "vanishing gradient" problem) or extremely large (the "exploding gradient" problem), both of which are manifestations of numerical instability in the algorithm's design.

---

## Chapter Summary

This chapter introduced the fundamental concepts of numerical error analysis. The central ideas are:

**Error measurement.** Absolute error $|p - p^*|$ measures the size of the discrepancy. Relative error $|p - p^*|/|p|$ measures it relative to the scale of the exact value. Significant digits express the number of reliably accurate digits in an approximation.

**Sources of error.** Rounding error arises from the finite precision of floating-point representation. Truncation error arises from replacing an infinite mathematical process with a finite approximation. Both are present in most numerical computations.

**Floating-point arithmetic.** Computers represent real numbers using floating-point systems: a mantissa times a base raised to an exponent, with finite precision. Machine epsilon $\varepsilon_{\text{mach}} \approx 2.22 \times 10^{-16}$ (double precision) quantifies the fundamental limitation of this representation.

**Loss of significance.** Subtracting two nearly equal floating-point numbers can destroy significant digits catastrophically. Algebraic reformulation is often the remedy.

**Error propagation.** Errors in input data propagate to errors in computed results. The derivative of the function amplifies or attenuates errors: $|\delta f| \approx |f'(x)| \cdot |\delta x|$. Relative errors add through multiplication and division.

**Conditioning.** A problem's condition number measures how sensitively the output responds to perturbations in the input. High condition numbers indicate ill-conditioned problems where reliable computation may be fundamentally limited.

**Stability.** An algorithm is stable if rounding errors introduced during its execution do not grow to dominate the result. Conditioning and stability are distinct: conditioning is a property of the problem, stability is a property of the algorithm.

---

## Key Terms Review

- **Absolute error:** $|p - p^*|$, the magnitude of the difference between exact and approximate values.
- **Relative error:** $|p - p^*|/|p|$, the absolute error as a fraction of the exact value.
- **Significant digits:** The number of reliably correct digits in an approximation.
- **Rounding error:** Error from storing a number with fewer digits than it has.
- **Truncation error:** Error from replacing an infinite process with a finite approximation.
- **Floating-point number:** A finite representation of a real number using a fixed-precision mantissa and integer exponent.
- **Machine epsilon:** The smallest positive number $\varepsilon_{\text{mach}}$ such that $1 + \varepsilon_{\text{mach}} \neq 1$ in floating-point arithmetic.
- **Loss of significance / catastrophic cancellation:** Destruction of significant digits when nearly equal numbers are subtracted.
- **Error propagation:** How input errors combine to produce output errors in arithmetic and function evaluation.
- **Condition number:** A measure of how sensitive a problem's output is to small changes in input.
- **Well-conditioned:** A problem with small condition number; input errors are not greatly amplified.
- **Ill-conditioned:** A problem with large condition number; small input errors may produce large output errors.
- **Stable algorithm:** An algorithm in which rounding errors introduced during computation remain controlled and do not dominate the result.
- **Unstable algorithm:** An algorithm in which rounding errors grow through the computation and may dominate the final result.
- **Forward error:** The difference between the computed answer and the exact answer.
- **Backward error:** The size of the perturbation to the input that would make the computed answer exact.

---

## Concept Review Questions

1. Define absolute error and relative error. Which is more informative when comparing two approximations of the same quantity at very different magnitudes?

2. What is the difference between rounding error and truncation error? Give an original example of each.

3. Explain in your own words what machine epsilon represents. If machine epsilon for a system is $10^{-7}$, approximately how many significant decimal digits does the system carry?

4. Describe catastrophic cancellation. Under what arithmetic circumstance does it arise?

5. A student says: "My result agrees with the exact answer to 10 decimal places, so my algorithm must be stable." Why might this reasoning be incomplete?

6. Explain the difference between a well-conditioned problem and a stable algorithm. Is it possible to have a well-conditioned problem solved by an unstable algorithm? An ill-conditioned problem solved by a stable algorithm? What are the consequences in each case?

7. What does it mean for errors to propagate through a computation? In what type of operation (addition, subtraction, multiplication, division, function evaluation) can errors be most dramatically amplified?

8. Define backward error. Why is backward error often a more useful measure of algorithmic quality than forward error?

---

## Methods Reference

$$
E_{\text{abs}} = |p - p^*|
$$

$$
E_{\text{rel}} = \frac{|p - p^*|}{|p|}
$$

$$
E_{\%} = \frac{|p - p^*|}{|p|} \times 100\%
$$

Approximation to $t$ significant digits: $\dfrac{|p - p^*|}{|p|} < 5 \times 10^{-t}$

Error in function evaluation: $|f(x) - f(x^*)| \approx |f'(x)| \cdot |x - x^*|$

Condition number of $f$ at $x$: $\kappa = \dfrac{|x \cdot f'(x)|}{|f(x)|}$

Absolute error propagation in sums: $|\delta(x \pm y)| \leq |\delta x| + |\delta y|$

Relative error propagation in products: $\dfrac{|\delta(xy)|}{|xy|} \approx \dfrac{|\delta x|}{|x|} + \dfrac{|\delta y|}{|y|}$

IEEE 754 double precision machine epsilon: $\varepsilon_{\text{mach}} \approx 2.22 \times 10^{-16}$

---

## Chapter 2 Checkpoint

The checkpoint problems below cover the major ideas of this chapter. They are designed to test conceptual understanding, skill with computation, and ability to interpret numerical results.

**Checkpoint 2.1.** The exact value of $\ln 3$ is approximately $1.09861228867\ldots$ A student uses the approximation $1.099$.

(a) Compute the absolute error, relative error, and percent error of this approximation.

(b) How many significant digits does the approximation have?

**Checkpoint 2.2.** Explain in your own words why the expression $\cos x - 1$ for small $x$ is prone to loss of significance, and describe a strategy to evaluate it accurately.

**Checkpoint 2.3.** The formula $p(x) = (x-1)^6$ expands to $x^6 - 6x^5 + 15x^4 - 20x^3 + 15x^2 - 6x + 1$.

(a) Evaluate $p(1.0001)$ using the expanded form with a 6-digit decimal calculator (round each intermediate result to 6 significant digits).

(b) Evaluate $p(1.0001)$ using the factored form $(x-1)^6$.

(c) Compare the two results and explain any discrepancy.

**Checkpoint 2.4.** Suppose $f(x) = \tan x$.

(a) Compute the condition number of $f$ at $x = \pi/4$.

(b) Compute the condition number of $f$ near $x = \pi/2 - 0.01$ (close to where $\tan x$ diverges).

(c) What do these condition numbers suggest about the reliability of computing $\tan x$ near $\pi/2$?

**Checkpoint 2.5.** Consider the recurrence $y_n = 10 y_{n-1} - 9$ with $y_0 = 1$.

(a) Show that the exact solution is $y_n = 1$ for all $n$.

(b) Start with $y_0 = 1 + \varepsilon$ for a small error $\varepsilon$ and compute how the error grows with $n$.

(c) Is this recurrence stable? What does this imply for using it in floating-point arithmetic starting from $y_0 = 1.000000000000001$?

---

## Bridge Note

The error concepts introduced in this chapter will reappear in every chapter that follows. In Chapter 3, stopping criteria for root-finding methods depend directly on absolute and relative error tolerances. In Chapters 4 and 5, interpolation error bounds describe how polynomial approximations deviate from the true function. In Chapters 6 and 7, the tradeoff between truncation error and rounding error determines how to choose step sizes in numerical differentiation and integration. In Chapter 8, Taylor remainder terms provide truncation error bounds for polynomial approximations. In Chapter 9, the condition number of a matrix determines how accurately a linear system can be solved numerically. In Chapters 12 and 13, local and global errors describe the accuracy of ODE and PDE solvers. And in Chapter 14, responsible scientific computing requires communicating error honestly.

Error analysis is not a topic studied once in Chapter 2 and then set aside. It is the thread connecting the entire discipline of numerical methods.

> **MGU Library Connection:** This chapter connects to the MGU Dictionary entries for *floating-point arithmetic*, *significant figures*, *condition number*, *algorithm stability*, and *numerical precision*. It also connects to the MGU Calculus chapter on Taylor series (Chapter 8 of this text) and to the MGU Computer Science Foundations unit on binary number representation and IEEE 754 arithmetic. Formula references are collected in Appendix E (Error Analysis Reference) and Appendix F (Floating-Point Arithmetic Reference) at the back of this text.

---

*End of Chapter 2*

---
*Numerical Methods | MGU Mathematics Series | Library Textbook Edition*
