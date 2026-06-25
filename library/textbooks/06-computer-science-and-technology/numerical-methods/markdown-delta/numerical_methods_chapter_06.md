# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part III — Numerical Calculus

---

# Chapter 6: Numerical Differentiation

---

## Purpose

Chapter 6 introduces numerical differentiation: the art and science of estimating derivatives from function values or data when exact symbolic differentiation is unavailable, impractical, or simply not the right tool. Students who have studied calculus know that the derivative of a function is defined as the limit of a difference quotient. Numerical differentiation replaces that limit with a carefully chosen finite approximation — one that is close enough to be useful but subject to errors that must be understood and managed.

This chapter develops the three fundamental finite difference formulas — forward, backward, and central — and analyzes their accuracy using Taylor series. It explores what happens when the step size is too large, too small, or poorly chosen. It connects numerical differentiation to interpolation, to real data, and to the specific challenges that arise when measurements are noisy. By the end, students should be able to estimate derivatives from function values, judge the accuracy of their approximations, choose step sizes thoughtfully, and recognize when numerical differentiation is reliable and when it requires caution.

---

## Opening Question

A weather monitoring station records temperature every ten minutes throughout the day. A meteorologist wants to know how quickly the temperature is rising at noon. There is no algebraic formula for the temperature — only a table of recorded values.

How do you estimate a rate of change when you have data but no formula? How close is your estimate to the true rate of change? And if the measurements contain small errors — as real sensor data always does — how do those errors affect your answer?

These are the central questions of numerical differentiation.

---

## Why This Chapter Matters

Derivatives appear everywhere in mathematics, science, engineering, and data analysis. They describe velocity, acceleration, rates of reaction, marginal cost, signal change, heat flow, and countless other quantities. Calculus teaches us to compute derivatives exactly when we have an explicit formula for a function. But in practice, exact formulas are often unavailable. We may have:

- experimental data recorded at discrete time points,
- the output of a simulation that produces numbers but no symbolic expression,
- a function so complicated that symbolic differentiation is correct but useless for practical computation,
- a system where only function evaluations are available, not derivatives.

In all of these situations, numerical differentiation provides a principled way to estimate derivatives from function values. Understanding this chapter prepares students for numerical integration (Chapter 7), Taylor approximation (Chapter 8), numerical ODE solvers (Chapter 12), and scientific computing workflows where derivatives must be estimated rather than computed symbolically.

---

## Learning Objectives

By the end of Chapter 6, students should be able to:

1. Explain what numerical differentiation is and why it is needed.
2. Derive the forward difference, backward difference, and central difference formulas from the definition of the derivative or from Taylor series.
3. Apply these formulas to estimate first derivatives from function values or data.
4. Identify the order of accuracy of each formula using Taylor series error analysis.
5. Explain the tradeoff between truncation error and roundoff error in choosing a step size.
6. Apply higher-order finite difference formulas for second derivatives and improved accuracy.
7. Discuss how noisy data affects numerical differentiation and describe strategies for managing this.
8. Recognize common mistakes in numerical differentiation and know how to avoid them.
9. Connect numerical differentiation to interpolation, Taylor series, and scientific computing.

---

## Key Terms

- **Numerical differentiation**: the estimation of a derivative from function values rather than symbolic computation
- **Finite difference**: a discrete approximation to a derivative, formed from differences of function values
- **Forward difference formula**: an approximation to \( f'(x) \) using \( f(x) \) and \( f(x+h) \)
- **Backward difference formula**: an approximation to \( f'(x) \) using \( f(x) \) and \( f(x-h) \)
- **Central difference formula**: an approximation to \( f'(x) \) using \( f(x+h) \) and \( f(x-h) \)
- **Step size**: the spacing \( h \) between evaluation points in a finite difference formula
- **Truncation error**: the error caused by replacing a limit with a finite difference
- **Roundoff error**: the error caused by limited floating-point precision in representing function values
- **Order of accuracy**: the rate at which truncation error decreases as the step size shrinks; a method of order \( p \) has error proportional to \( h^p \)
- **Second-order method**: a method whose truncation error is \( O(h^2) \), meaning the error shrinks by a factor of 4 when \( h \) is halved
- **Higher-order difference formula**: a finite difference approximation using more evaluation points to achieve better accuracy
- **Noisy data**: data containing measurement errors that distort numerical differentiation

---

## 6.1 Why Numerical Differentiation Is Needed

Calculus defines the derivative of a function \( f \) at a point \( x \) as:

\[
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
\]

This definition is elegant, precise, and exact. Given a formula for \( f \), we can differentiate symbolically and compute \( f'(x) \) exactly. But this approach requires several things that are not always available:

**A symbolic formula for \( f \).** If \( f \) is defined by experimental measurements, simulation output, or a black-box computer program, there is no formula to differentiate. We have only a table of numbers.

**Differentiability in a form we can exploit.** Even when a symbolic formula exists, it may be so complicated — products of exponentials, trigonometric functions, and implicit constraints — that symbolic differentiation is correct but cumbersome to compute, verify, or communicate.

**Access to the derivative of each component.** In some computation pipelines, a subroutine computes \( f(x) \) for any input \( x \), but does not return derivative information. The only way to estimate \( f'(x) \) is to call the subroutine at two or more nearby points and compare the outputs.

Numerical differentiation solves all of these problems in the same way: it evaluates \( f \) at one or more nearby points and forms a finite difference — a ratio of changes — to approximate the derivative. The derivative definition says that as \( h \to 0 \), the difference quotient approaches \( f'(x) \). Numerical differentiation uses a small but nonzero \( h \) and accepts a correspondingly small approximation error.

The challenge, as we will see throughout this chapter, is choosing \( h \) wisely. Too large, and the approximation is inaccurate. Too small, and roundoff error corrupts the result. This tension is the defining feature of numerical differentiation.

### Where Numerical Differentiation Appears

Numerical differentiation arises in:

- **Scientific computing**: estimating rates of change from simulation output or sensor data.
- **Numerical ODE solvers**: approximating derivatives to step forward in time.
- **Optimization**: estimating gradients when the objective function has no symbolic form.
- **Signal processing**: detecting edges, peaks, or changes in digital signals.
- **Finance**: estimating sensitivities (the Greeks) of option prices to underlying parameters.
- **Engineering**: computing stresses, strains, flow rates, and reaction rates from measured field data.

In every case, the core idea is the same: replace the limiting operation with a computable finite approximation, and analyze the resulting error.

---

## 6.2 Derivatives from Data

Before introducing formal formulas, it helps to think about what a derivative means when all we have is data.

Suppose we know the position \( s(t) \) of a moving object at several times:

| \( t \) (seconds) | \( s(t) \) (meters) |
|---|---|
| 0.0 | 0.00 |
| 0.5 | 1.23 |
| 1.0 | 2.48 |
| 1.5 | 3.72 |
| 2.0 | 4.95 |

We want to estimate the velocity \( s'(t) \) at \( t = 1.0 \).

The velocity is the rate of change of position with respect to time. Between \( t = 1.0 \) and \( t = 1.5 \), the position increases by \( 3.72 - 2.48 = 1.24 \) meters over \( 0.5 \) seconds. The average rate of change over this interval is \( 1.24 / 0.5 = 2.48 \) m/s. Between \( t = 0.5 \) and \( t = 1.0 \), the change is \( 2.48 - 1.23 = 1.25 \) meters over \( 0.5 \) seconds, giving \( 1.25 / 0.5 = 2.50 \) m/s.

Both of these are reasonable estimates of the velocity at \( t = 1.0 \). If we use the interval symmetric around \( t = 1.0 \) — from \( t = 0.5 \) to \( t = 1.5 \) — the change is \( 3.72 - 1.23 = 2.49 \) meters over \( 1.0 \) second, giving \( 2.49 / 1.0 = 2.49 \) m/s.

Each of these three estimates is a finite difference approximation to \( s'(1.0) \). The formulas we develop in this chapter will give these estimates a precise mathematical form and will allow us to say exactly how large the approximation error can be.

---

## 6.3 Difference Quotients

The derivative definition begins with the difference quotient:

\[
\frac{f(x+h) - f(x)}{h}
\]

This is called a difference quotient because the numerator is a difference of function values and the denominator is the spacing \( h \). As \( h \to 0 \), this approaches \( f'(x) \). For any fixed nonzero \( h \), it is an approximation to \( f'(x) \) with some error.

There are several natural ways to form a difference quotient, depending on which nearby points we choose:

**Forward difference**: use \( f(x) \) and \( f(x+h) \), stepping forward from \( x \).

\[
\frac{f(x+h) - f(x)}{h}
\]

**Backward difference**: use \( f(x-h) \) and \( f(x) \), stepping backward to \( x \).

\[
\frac{f(x) - f(x-h)}{h}
\]

**Central difference**: use \( f(x-h) \) and \( f(x+h) \), straddling \( x \) symmetrically.

\[
\frac{f(x+h) - f(x-h)}{2h}
\]

All three approach \( f'(x) \) as \( h \to 0 \). They differ in accuracy, in which points they require, and in how their errors behave. The next three sections develop each one carefully.

---

## 6.4 Forward Difference Formula

The forward difference formula for the first derivative is:

\[
f'(x) \approx \frac{f(x+h) - f(x)}{h}
\]

To understand its accuracy, we use a Taylor series expansion of \( f(x+h) \) around \( x \):

\[
f(x+h) = f(x) + h f'(x) + \frac{h^2}{2} f''(x) + \frac{h^3}{6} f'''(x) + \cdots
\]

Subtracting \( f(x) \) from both sides and dividing by \( h \):

\[
\frac{f(x+h) - f(x)}{h} = f'(x) + \frac{h}{2} f''(x) + \frac{h^2}{6} f'''(x) + \cdots
\]

This shows that the forward difference formula approximates \( f'(x) \) with an error equal to:

\[
\text{error} = \frac{h}{2} f''(x) + O(h^2)
\]

The dominant term in the error is \( \frac{h}{2} f''(x) \), which is proportional to \( h \). This means the forward difference formula is a **first-order method**: when \( h \) is halved, the truncation error is approximately halved.

We write the error formally as \( O(h) \), read "big O of h," meaning the error is proportional to \( h \) for small \( h \):

\[
\frac{f(x+h) - f(x)}{h} = f'(x) + O(h)
\]

### Worked Example 6.4.1: Forward Difference for a Known Function

**Problem**: Estimate \( f'(1) \) for \( f(x) = e^x \) using the forward difference formula with \( h = 0.1 \). Compare with the exact value.

**Think**: The exact derivative is \( f'(x) = e^x \), so \( f'(1) = e \approx 2.71828 \). The forward difference formula uses \( f(1) \) and \( f(1.1) \).

**Method**: Apply the forward difference formula:
\[
f'(1) \approx \frac{f(1.1) - f(1)}{0.1}
\]

**Compute**:
\[
f(1) = e^1 \approx 2.71828
\]
\[
f(1.1) = e^{1.1} \approx 3.00417
\]
\[
\frac{f(1.1) - f(1)}{0.1} = \frac{3.00417 - 2.71828}{0.1} = \frac{0.28589}{0.1} = 2.8589
\]

**Check**: The exact value is \( e \approx 2.71828 \). The absolute error is:
\[
|2.8589 - 2.71828| = 0.1406
\]

The relative error is about \( 5.2\% \). The error is indeed proportional to \( h = 0.1 \), as the theory predicts.

**Interpret**: With \( h = 0.1 \), the forward difference formula gives a reasonable estimate but with about \( 5\% \) error. Reducing \( h \) to \( 0.01 \) would reduce the error to roughly \( 0.5\% \).

---

### Reducing \( h \) and Watching the Error

If we repeat the calculation with smaller step sizes:

| \( h \) | Forward Difference Estimate | Absolute Error |
|---|---|---|
| 0.1 | 2.8589 | 0.14062 |
| 0.05 | 2.7871 | 0.06882 |
| 0.01 | 2.7319 | 0.01362 |
| 0.001 | 2.7196 | 0.00132 |

Each time \( h \) is divided by 10, the error is also approximately divided by 10. This confirms that the forward difference formula is first-order accurate.

---

## 6.5 Backward Difference Formula

The backward difference formula is:

\[
f'(x) \approx \frac{f(x) - f(x-h)}{h}
\]

Using the Taylor expansion of \( f(x-h) \) around \( x \):

\[
f(x-h) = f(x) - h f'(x) + \frac{h^2}{2} f''(x) - \frac{h^3}{6} f'''(x) + \cdots
\]

Rearranging:

\[
\frac{f(x) - f(x-h)}{h} = f'(x) - \frac{h}{2} f''(x) + O(h^2) = f'(x) + O(h)
\]

The backward difference formula is also first-order accurate, with the same magnitude of error as the forward difference formula. The error term has opposite sign: where the forward difference overestimates by \( \frac{h}{2}f''(x) \), the backward difference underestimates by the same amount (when \( f'' > 0 \)).

**When to use the backward difference formula**: It is useful when the point \( x \) is at the right end of a data table, where \( f(x+h) \) is not available. The backward formula requires only \( f(x) \) and \( f(x-h) \), both to the left of or at \( x \).

### Worked Example 6.5.1: Backward Difference at an Endpoint

**Problem**: A data table records \( f(x) \) at \( x = 0.0, 0.2, 0.4, 0.6, 0.8, 1.0 \). Estimate \( f'(1.0) \) using the backward difference formula with \( h = 0.2 \), given \( f(0.8) = 3.41 \) and \( f(1.0) = 3.95 \).

**Think**: Since \( x = 1.0 \) is the last point in the table, we cannot use a forward difference. The backward difference formula is appropriate.

**Method**:
\[
f'(1.0) \approx \frac{f(1.0) - f(0.8)}{0.2}
\]

**Compute**:
\[
f'(1.0) \approx \frac{3.95 - 3.41}{0.2} = \frac{0.54}{0.2} = 2.70
\]

**Interpret**: Without knowing the true function, we accept \( f'(1.0) \approx 2.70 \) with the understanding that the error is \( O(0.2) \), roughly \( 10\% \) for a typical function. A smaller spacing \( h \) would give a more accurate estimate.

---

## 6.6 Central Difference Formula

The central difference formula is:

\[
f'(x) \approx \frac{f(x+h) - f(x-h)}{2h}
\]

It uses function values symmetrically placed around \( x \). To analyze its accuracy, expand both \( f(x+h) \) and \( f(x-h) \):

\[
f(x+h) = f(x) + h f'(x) + \frac{h^2}{2} f''(x) + \frac{h^3}{6} f'''(x) + \frac{h^4}{24} f^{(4)}(x) + \cdots
\]

\[
f(x-h) = f(x) - h f'(x) + \frac{h^2}{2} f''(x) - \frac{h^3}{6} f'''(x) + \frac{h^4}{24} f^{(4)}(x) - \cdots
\]

Subtracting the second from the first:

\[
f(x+h) - f(x-h) = 2h f'(x) + \frac{2h^3}{6} f'''(x) + \cdots = 2h f'(x) + \frac{h^3}{3} f'''(x) + \cdots
\]

Dividing by \( 2h \):

\[
\frac{f(x+h) - f(x-h)}{2h} = f'(x) + \frac{h^2}{6} f'''(x) + \cdots = f'(x) + O(h^2)
\]

**The central difference formula is second-order accurate.** The leading error term is proportional to \( h^2 \), not \( h \). When \( h \) is halved, the truncation error decreases by a factor of 4 — a significant improvement over the first-order forward and backward formulas.

The reason for this improvement is symmetry. When we expand \( f(x+h) - f(x-h) \), all even-order terms cancel (since \( h^2 \), \( h^4 \), \( \ldots \) appear with the same sign in both expansions). Only the odd-order terms survive, and the first surviving error term is \( h^3 \), giving error \( O(h^2) \) after dividing by \( 2h \).

### Worked Example 6.6.1: Central Difference for a Known Function

**Problem**: Estimate \( f'(1) \) for \( f(x) = e^x \) using the central difference formula with \( h = 0.1 \). Compare with the forward difference result and the exact value.

**Think**: The central difference formula uses \( f(0.9) \) and \( f(1.1) \).

**Compute**:
\[
f(0.9) = e^{0.9} \approx 2.45960
\]
\[
f(1.1) = e^{1.1} \approx 3.00417
\]
\[
\frac{f(1.1) - f(0.9)}{2(0.1)} = \frac{3.00417 - 2.45960}{0.2} = \frac{0.54457}{0.2} = 2.72285
\]

**Check**: Exact value is \( e \approx 2.71828 \). Absolute error is \( |2.72285 - 2.71828| = 0.00457 \).

Comparing the three formulas at \( h = 0.1 \):

| Formula | Estimate | Absolute Error |
|---|---|---|
| Forward difference | 2.8589 | 0.14062 |
| Backward difference | 2.6271 | 0.09118 |
| Central difference | 2.72285 | 0.00457 |

The central difference formula is dramatically more accurate, with error about 30 times smaller than the forward difference. This is the power of second-order accuracy.

**Interpret**: Whenever both \( f(x+h) \) and \( f(x-h) \) are available, the central difference formula should be preferred over the forward or backward formulas. Its second-order accuracy provides substantially better estimates at the same step size.

---

## 6.7 Higher-Order Difference Approximations

The central difference formula achieves \( O(h^2) \) accuracy by exploiting the symmetry of Taylor series. But we can do better by using more function evaluation points and combining them to cancel additional error terms.

### Second Derivative by Central Differences

The second derivative \( f''(x) \) measures the rate of change of the rate of change. To approximate it, add the two Taylor expansions:

\[
f(x+h) + f(x-h) = 2f(x) + h^2 f''(x) + \frac{h^4}{12} f^{(4)}(x) + \cdots
\]

Solving for \( f''(x) \):

\[
f''(x) \approx \frac{f(x+h) - 2f(x) + f(x-h)}{h^2}
\]

This is the **central difference formula for the second derivative**. Its truncation error is \( O(h^2) \):

\[
\frac{f(x+h) - 2f(x) + f(x-h)}{h^2} = f''(x) + O(h^2)
\]

This formula uses three points and is second-order accurate. It appears frequently in numerical ODE and PDE solvers.

### Worked Example 6.7.1: Second Derivative Approximation

**Problem**: Estimate \( f''(1) \) for \( f(x) = \sin(x) \) using \( h = 0.1 \).

**Compute**:
\[
f(0.9) = \sin(0.9) \approx 0.78333
\]
\[
f(1.0) = \sin(1.0) \approx 0.84147
\]
\[
f(1.1) = \sin(1.1) \approx 0.89121
\]
\[
\frac{f(1.1) - 2f(1.0) + f(0.9)}{(0.1)^2} = \frac{0.89121 - 2(0.84147) + 0.78333}{0.01} = \frac{-0.00840}{0.01} = -0.840
\]

**Check**: The exact second derivative is \( f''(x) = -\sin(x) \), so \( f''(1) = -\sin(1) \approx -0.84147 \). The absolute error is approximately \( 0.0015 \), consistent with \( O(h^2) \) accuracy.

---

### Higher-Order Formula for the First Derivative

Using four points, we can construct a fourth-order approximation to \( f'(x) \):

\[
f'(x) \approx \frac{-f(x+2h) + 8f(x+h) - 8f(x-h) + f(x-2h)}{12h}
\]

This formula has truncation error \( O(h^4) \): halving \( h \) reduces the error by a factor of 16. It is derived by taking a linear combination of two central difference formulas of different step sizes and eliminating the \( h^2 \) error term.

Higher-order formulas are especially valuable when:
- The function is very smooth (high derivatives exist and are bounded),
- High accuracy is needed without using an extremely small step size,
- The function evaluations are expensive and fewer steps are preferable.

The four-point formula above is standard in scientific computing libraries and is sometimes called **Richardson extrapolation** in its general form.

> **MGU Library Connection**: Richardson extrapolation is a general technique for improving the accuracy of finite difference approximations by combining results at different step sizes. It appears in the MGU Numerical Analysis page and the Scientific Computing guide.

---

## 6.8 Taylor Series and Error Terms

The Taylor series is the foundation of finite difference error analysis. Every finite difference formula is an approximation obtained by:

1. Expanding each function value in a Taylor series around the point of differentiation.
2. Forming the finite difference combination.
3. Identifying which terms cancel and which terms survive as the leading error.

This process is systematic. Given any proposed formula for \( f'(x) \) or \( f''(x) \) using values at points \( x + a_i h \) for various constants \( a_i \), we can determine its order of accuracy by expanding each term in a Taylor series and collecting the result.

### Formal Error Statement

For the central difference formula for the first derivative:

\[
\frac{f(x+h) - f(x-h)}{2h} = f'(x) + \frac{h^2}{6} f'''(x) + O(h^4)
\]

This means the error is exactly \( \frac{h^2}{6} f'''(x) + O(h^4) \), where the leading term is controlled by the third derivative of \( f \).

If we know that \( |f'''(x)| \leq M \) on an interval, then the absolute truncation error satisfies:

\[
\left| \frac{f(x+h) - f(x-h)}{2h} - f'(x) \right| \leq \frac{h^2}{6} M + O(h^4)
\]

This gives an explicit bound on the truncation error in terms of \( h \) and the third derivative.

### Worked Example 6.8.1: Bounding the Error

**Problem**: Suppose \( f(x) = e^x \) and we use the central difference formula with \( h = 0.1 \) to estimate \( f'(1) \). Bound the truncation error.

**Think**: The formula is \( \frac{f(1.1) - f(0.9)}{0.2} \). The error bound is \( \frac{h^2}{6} |f'''(\xi)| \) for some \( \xi \in (0.9, 1.1) \). Since \( f'''(x) = e^x \) and \( e^{1.1} \approx 3.004 \):

\[
\text{error bound} \leq \frac{(0.1)^2}{6} \cdot 3.004 = \frac{0.01}{6} \cdot 3.004 \approx 0.00501
\]

**Interpret**: The actual error was \( 0.00457 \), which is less than \( 0.00501 \). The bound is tight, confirming that the error formula is reliable.

---

## 6.9 Step Size and Roundoff Error

So far, the analysis has assumed that function values can be computed exactly. In practice, every floating-point computation introduces a small roundoff error. This changes the picture when \( h \) is very small.

### The Two Sources of Error

When we compute the central difference formula \( \frac{f(x+h) - f(x-h)}{2h} \), two types of error are at work:

**Truncation error** arises from replacing the limit with a finite difference. It is approximately \( \frac{h^2}{6} |f'''(x)| \) for the central difference formula. Truncation error **decreases** as \( h \) decreases.

**Roundoff error** arises because \( f(x+h) \) and \( f(x-h) \) are computed with limited precision. If each function value is computed with an error of at most \( \epsilon_{\text{mach}} |f(x)| \) (machine precision times the value), then the error in the difference \( f(x+h) - f(x-h) \) can be as large as \( 2 \epsilon_{\text{mach}} |f(x)| \). After dividing by \( 2h \), the roundoff contribution to the total error is:

\[
\text{roundoff error} \approx \frac{\epsilon_{\text{mach}} |f(x)|}{h}
\]

Roundoff error **increases** as \( h \) decreases. When \( h \) is very small, we are dividing a tiny difference by a tiny number \( 2h \), and any error in the function values gets magnified.

### Total Error and Optimal Step Size

The total error in the central difference formula is approximately:

\[
\text{total error} \approx \frac{h^2}{6} |f'''(x)| + \frac{\epsilon_{\text{mach}} |f(x)|}{h}
\]

This is a sum of two competing terms: one decreasing in \( h \), one increasing in \( h \). There is an optimal step size that minimizes the total error. Setting the derivative with respect to \( h \) equal to zero gives:

\[
h_{\text{opt}} \approx \left( \frac{3 \epsilon_{\text{mach}} |f(x)|}{|f'''(x)|} \right)^{1/3}
\]

For double-precision arithmetic, \( \epsilon_{\text{mach}} \approx 10^{-16} \). If \( f(x) \) and \( f'''(x) \) are both of order 1, then:

\[
h_{\text{opt}} \approx (3 \times 10^{-16})^{1/3} \approx 10^{-5}
\]

This means that for typical smooth functions in double precision, the optimal step size for the central difference formula is around \( h = 10^{-5} \). Using \( h = 10^{-10} \), for example, might seem like it should give more accuracy, but in fact it produces worse results because roundoff error dominates.

### Worked Example 6.9.1: Observing the Step Size Effect

**Problem**: Estimate \( f'(1) \) for \( f(x) = e^x \) using the central difference formula with varying \( h \). Observe how the error changes.

| \( h \) | Central Difference Estimate | Absolute Error |
|---|---|---|
| 0.1 | 2.72285 | 0.00457 |
| 0.01 | 2.71832 | 0.00004 |
| 0.001 | 2.71828 | ~0.0000004 |
| 0.0001 | 2.71828 | ~0.000000002 |
| 0.00001 | 2.71828 | ~0.000000002 |
| 0.000001 | 2.71829 | 0.00001 |
| 0.0000001 | 2.71835 | 0.00007 |

**Interpret**: The error decreases as \( h \) shrinks from \( 0.1 \) to about \( 10^{-5} \), then increases as roundoff error takes over. The minimum error occurs near the optimal step size of about \( 10^{-5} \). Choosing \( h \) much smaller than this does not improve accuracy; it makes things worse.

> **Student Warning**: Never assume that a smaller step size always gives a more accurate numerical derivative. Below the optimal step size, roundoff error dominates and the estimate deteriorates. In computational practice, step sizes like \( h = 10^{-5} \) or \( h = 10^{-6} \) are typical for central differences in double precision.

---

## 6.10 Differentiating Interpolating Polynomials

Another approach to numerical differentiation is through interpolation. If we have data at \( n+1 \) points, we can construct an interpolating polynomial through those points (as in Chapter 4) and then differentiate the polynomial exactly.

Suppose we have three equally spaced points: \( x_0 \), \( x_1 = x_0 + h \), \( x_2 = x_0 + 2h \). The quadratic polynomial through these three points can be differentiated to give:

\[
f'(x_0) \approx \frac{-3f(x_0) + 4f(x_1) - f(x_2)}{2h}
\]

\[
f'(x_1) \approx \frac{f(x_2) - f(x_0)}{2h}
\]

\[
f'(x_2) \approx \frac{f(x_0) - 4f(x_1) + 3f(x_2)}{2h}
\]

The middle formula is the familiar central difference formula. The first and last formulas are called **three-point endpoint formulas** — they use function values at three points to estimate the derivative at an endpoint where the central difference is unavailable.

### Three-Point Endpoint Formula

The three-point formula for the derivative at the left endpoint:

\[
f'(x_0) \approx \frac{-3f(x_0) + 4f(x_1) - f(x_2)}{2h}
\]

has truncation error \( O(h^2) \), like the central difference formula. This is useful when we need second-order accuracy at a data table endpoint.

### Worked Example 6.10.1: Endpoint Formula

**Problem**: A function is measured at \( x = 0, 0.5, 1.0 \) with values \( f(0) = 1.000 \), \( f(0.5) = 1.649 \), \( f(1.0) = 2.718 \). Estimate \( f'(0) \) using the three-point endpoint formula with \( h = 0.5 \).

**Compute**:
\[
f'(0) \approx \frac{-3(1.000) + 4(1.649) - (2.718)}{2(0.5)} = \frac{-3.000 + 6.596 - 2.718}{1.0} = \frac{0.878}{1.0} = 0.878
\]

**Check**: These appear to be values of \( f(x) = e^x \), for which \( f'(0) = 1.000 \). The absolute error is \( |0.878 - 1.000| = 0.122 \).

**Interpret**: The three-point endpoint formula gives reasonable accuracy at the boundary. The error is \( O(h^2) = O(0.25) \) in this case, which accounts for the size of the error. A smaller \( h \) would improve the estimate substantially.

---

## 6.11 Numerical Differentiation with Noisy Data

Everything in the preceding sections assumed that function values could be computed to high precision. In scientific and engineering applications, data often comes from physical measurements, which always contain noise. Numerical differentiation of noisy data is one of the most challenging problems in applied mathematics.

### Why Noise Is Especially Damaging

Differentiation amplifies high-frequency variation. If a signal \( f(x) \) contains a small noise component \( \eta(x) \) that oscillates rapidly, then the derivative of the noise oscillates even more rapidly and can be much larger than the true derivative. A central difference computation:

\[
\frac{f(x+h) - f(x-h)}{2h} = \frac{[f_{\text{true}}(x+h) + \eta(x+h)] - [f_{\text{true}}(x-h) + \eta(x-h)]}{2h}
\]

gives the true derivative contribution plus a noise contribution:

\[
= f'_{\text{true}}(x) + O(h^2) + \frac{\eta(x+h) - \eta(x-h)}{2h}
\]

The noise in the derivative estimate is \( \frac{\eta(x+h) - \eta(x-h)}{2h} \). If the noise amplitude is \( \delta \), the noise in the derivative estimate can be as large as \( \delta/h \). As \( h \) decreases, the noise contribution **grows**, even as the truncation error decreases.

This creates a fundamental difficulty: for clean data, a smaller \( h \) is better (up to the roundoff limit). For noisy data, a smaller \( h \) is worse, because it magnifies the noise.

### Strategies for Noisy Data

Several approaches exist for differentiating noisy data:

**Use a larger step size**: Accept some truncation error in exchange for reduced noise amplification. This is practical when the noise level is known.

**Smooth the data first**: Apply a moving average, Gaussian filter, or other smoothing method to reduce noise before differentiating. This reduces noise but also smooths the true signal.

**Fit a polynomial or spline and differentiate the fit**: Rather than differentiating the raw data, fit a smooth model to the data (as in Chapter 5) and differentiate the fitted model. The fit absorbs some of the noise, and the derivative of the fitted model is smooth and well-defined.

**Use regularization**: More advanced methods add a smoothness penalty to the derivative estimate, trading reduced noise sensitivity for a slight bias. These methods are common in signal processing and image analysis.

> **Reliability Note**: When differentiating measured data, always ask: how large is the noise, and how does it compare to the true variation in the function? If the noise amplitude is comparable to the function values, numerical differentiation is unreliable and smoothing is required before differentiation.

### Worked Example 6.11.1: Effect of Noise on Differentiation

**Problem**: The true function is \( f(x) = \sin(x) \) with \( f'(x) = \cos(x) \). At \( x = 1 \), \( f'(1) = \cos(1) \approx 0.5403 \). Suppose the measurements of \( f \) have random noise of amplitude \( \pm 0.01 \). Estimate the noise contribution to the central difference approximation with \( h = 0.01 \).

**Think**: The noise in \( f(x+h) - f(x-h) \) can be as large as \( 2 \times 0.01 = 0.02 \) in the worst case. After dividing by \( 2h = 0.02 \), the noise contribution to the derivative estimate can be as large as:

\[
\frac{0.02}{0.02} = 1.00
\]

**Interpret**: The true derivative is about \( 0.54 \), but the noise can contribute an error as large as \( 1.00 \) — nearly twice the true value. With this noise level and this step size, the derivative estimate is completely unreliable. A much larger step size, such as \( h = 0.5 \), would reduce the noise contribution to \( 0.02 / 1.0 = 0.02 \), much more manageable.

---

## 6.12 Numerical Derivatives in Science and Engineering

Numerical differentiation appears throughout applied mathematics and the sciences. Here are several representative applications.

### Velocity from Position Data

A GPS device records the position of a vehicle at one-second intervals. Numerical differentiation of the position data gives velocity. The central difference formula at interior points and the three-point endpoint formula at the first and last points provide a complete velocity estimate from the position record.

If the GPS device has position accuracy of \( \pm 1 \) meter, the noise level is \( \delta = 1 \) m. For a step size of \( h = 1 \) second, the noise in the velocity estimate is approximately \( \delta / h = 1 \) m/s. For a vehicle moving at 30 m/s, this is about \( 3\% \) error in velocity — acceptable for most purposes.

### Signal Processing: Edge Detection

In digital image processing, edges in an image correspond to rapid changes in pixel intensity. Numerically differentiating the intensity function across a row of pixels detects these rapid changes. The gradient magnitude \( |\nabla I| \) at each pixel is estimated by finite differences of the intensity values. Large gradient magnitudes correspond to edges.

The Sobel operator, a standard edge detection algorithm, is essentially a set of finite difference formulas applied to a digital image grid.

### Finite Element and Finite Difference Methods

In engineering simulations — modeling heat transfer, fluid flow, or structural stress — the governing equations are often partial differential equations involving spatial derivatives. Finite difference methods replace these derivatives with finite difference approximations on a computational grid, turning the differential equations into algebraic equations that can be solved numerically. (We will develop this fully in Chapter 13.)

### Sensitivity Analysis in Finance

A financial derivative's value depends on several parameters: the current price of the underlying asset, volatility, interest rates, and time to expiration. The sensitivities of the derivative price to these parameters — the Greeks — can be estimated by finite difference. For example, the delta of an option:

\[
\Delta \approx \frac{V(S+h) - V(S-h)}{2h}
\]

estimates how much the option price \( V \) changes as the stock price \( S \) changes by a small amount \( h \).

> **MGU Library Connection**: Applications of numerical differentiation in engineering, signal processing, and scientific computing are developed further in the MGU Engineering Mathematics and Scientific Computing pages.

---

## 6.13 Common Numerical Differentiation Mistakes

Students new to numerical differentiation often make several predictable mistakes. Recognizing them in advance prevents wasted effort and incorrect answers.

**Mistake 1: Choosing \( h \) too small and trusting the result.**
As Section 6.9 demonstrated, reducing \( h \) below the optimal step size worsens the result due to roundoff error. Many students expect that smaller \( h \) always means better accuracy. This is true for truncation error but false overall.

*Prevention*: Use \( h \approx 10^{-5} \) to \( 10^{-6} \) for central differences in double precision. Do not use \( h = 10^{-12} \) or smaller without expecting roundoff degradation.

**Mistake 2: Using a first-order formula when a second-order formula is available.**
When both \( f(x+h) \) and \( f(x-h) \) are available, always use the central difference formula rather than the forward or backward formula. The central difference is second-order accurate with no additional cost.

*Prevention*: Default to central differences at interior points. Use endpoint formulas only when necessary.

**Mistake 3: Applying finite differences directly to noisy data with a small step size.**
This magnifies noise and produces a useless estimate.

*Prevention*: Before differentiating noisy data, check the noise level. If \( \delta / h \) is comparable to or larger than the expected derivative, increase \( h \) or smooth the data first.

**Mistake 4: Confusing order of accuracy with absolute accuracy.**
A second-order formula is more accurate than a first-order formula for the same \( h \), but a first-order formula with very small \( h \) can sometimes outperform a second-order formula with large \( h \). Order describes how accuracy scales with \( h \), not the absolute value of the error.

*Prevention*: Always check the actual error estimate, not just the order of the formula.

**Mistake 5: Assuming the formula is valid everywhere.**
Finite difference formulas require that \( f \) be sufficiently smooth — that high-order derivatives be bounded. Near discontinuities, corners, or rapid oscillations, finite difference formulas may give misleading results.

*Prevention*: Verify that the function is smooth at the point of interest before trusting a finite difference estimate.

**Mistake 6: Using unequal spacing without adjusting the formula.**
The standard formulas in this chapter assume equal spacing \( h \) between evaluation points. If data is irregularly spaced, these formulas do not apply and must be replaced by interpolation-based formulas derived specifically for the given spacing.

*Prevention*: Check whether data is equally spaced before applying standard finite difference formulas.

---

## 6.14 Preparing for Numerical Integration

Numerical differentiation estimates rates of change from function values. Numerical integration, the subject of Chapter 7, estimates accumulated totals from function values. The two are mathematically inverse operations, but their numerical properties differ in an important way.

Numerical differentiation is **noise-amplifying**: small errors in function values produce proportionally larger errors in derivative estimates, especially with small \( h \). This makes numerical differentiation a delicate operation that requires careful step size selection.

Numerical integration is **noise-averaging**: the errors in function values tend to cancel when summed, making integration more stable and forgiving than differentiation. This is why numerical integration is generally easier to perform reliably than numerical differentiation.

Chapter 7 develops the rectangle rules, midpoint rule, trapezoidal rule, and Simpson's rule. The Taylor series framework we used in this chapter — expanding function values around a central point and analyzing error terms — will reappear in identical form as the basis for analyzing integration error. The methods of Chapter 6 and Chapter 7 are mirror images of each other.

> **Bridge Note**: The finite difference formulas in this chapter are the foundation for numerical ODE solvers (Chapter 12) and numerical PDE methods (Chapter 13). When an ODE solver steps forward in time, it is essentially computing a derivative approximation and using it to predict the next function value. When a finite difference PDE solver discretizes a spatial domain, it replaces every spatial derivative in the governing equation with a finite difference formula. Everything in Chapter 6 will reappear in that larger context.

---

## Chapter Summary

Numerical differentiation estimates the derivative of a function from its values at discrete points. It is needed whenever a symbolic formula for the derivative is unavailable — in experimental data, simulation output, or black-box computation pipelines.

The three fundamental formulas are:

- **Forward difference**: \( f'(x) \approx \dfrac{f(x+h) - f(x)}{h} \), first-order accurate, error \( O(h) \).
- **Backward difference**: \( f'(x) \approx \dfrac{f(x) - f(x-h)}{h} \), first-order accurate, error \( O(h) \).
- **Central difference**: \( f'(x) \approx \dfrac{f(x+h) - f(x-h)}{2h} \), second-order accurate, error \( O(h^2) \).

The second derivative can be approximated by:

\[
f''(x) \approx \frac{f(x+h) - 2f(x) + f(x-h)}{h^2}, \quad \text{error } O(h^2)
\]

Higher-order formulas achieve \( O(h^4) \) or better by using more evaluation points and canceling additional Taylor series error terms.

The step size \( h \) must be chosen carefully. Truncation error decreases as \( h \) decreases. Roundoff error increases as \( h \) decreases. The optimal step size balances these two effects; for the central difference in double precision, the optimal \( h \) is approximately \( 10^{-5} \).

Noisy data presents a special challenge: differentiation amplifies noise, and a small step size worsens rather than improves the estimate. Smoothing, fitting, or using a larger step size may be necessary before differentiating noisy measurements.

The Taylor series is the tool for deriving and analyzing all finite difference formulas. By expanding each function value around the point of interest, we can identify exactly which terms cancel, what the leading error term is, and what conditions must hold for the formula to be reliable.

---

## Key Terms Review

| Term | Definition |
|---|---|
| Numerical differentiation | Estimation of a derivative from function values |
| Finite difference | A discrete approximation to a derivative |
| Forward difference | \( [f(x+h) - f(x)] / h \) |
| Backward difference | \( [f(x) - f(x-h)] / h \) |
| Central difference | \( [f(x+h) - f(x-h)] / (2h) \) |
| Step size | The spacing \( h \) between evaluation points |
| Truncation error | Error from replacing a limit with a finite approximation |
| Roundoff error | Error from limited floating-point precision |
| Order of accuracy | How quickly error decreases as \( h \) shrinks |
| Second-order method | Error \( O(h^2) \); error shrinks by factor of 4 when \( h \) is halved |

---

## Concept Review Questions

1. What is numerical differentiation, and when is it needed instead of symbolic differentiation?

2. State the forward, backward, and central difference formulas for the first derivative. What is the order of accuracy of each?

3. How does Taylor series analysis reveal the truncation error of a finite difference formula? Illustrate with the central difference formula.

4. Why is the central difference formula more accurate than the forward or backward difference formula for the same step size?

5. Why does decreasing \( h \) toward zero eventually make a numerical derivative estimate worse rather than better?

6. What is the optimal step size for the central difference formula in double-precision arithmetic, and what principle determines it?

7. Why is numerical differentiation especially difficult when the data is noisy?

8. What is the formula for the second derivative using central differences? State its order of accuracy.

9. When would you use a three-point endpoint formula rather than the central difference formula?

10. How does numerical differentiation connect to numerical integration, ODE solvers, and PDE methods?

---

## Skill Practice

### Concept Check

1. Without computing, explain why the central difference formula is more accurate than the forward difference formula for the same step size.

2. A student computes a central difference estimate with \( h = 10^{-10} \) and obtains a less accurate result than with \( h = 10^{-5} \). Explain why this happens.

3. At which points in a uniformly spaced data table can you apply the central difference formula? What formula would you use at the endpoints?

4. State two situations where numerical differentiation of data is unreliable.

### Skill Practice

5. Compute the forward difference approximation to \( f'(0) \) for \( f(x) = \cos(x) \) with \( h = 0.2 \). State the absolute error.

6. Compute the backward difference approximation to \( f'(2) \) for \( f(x) = \ln(x) \) with \( h = 0.1 \). State the absolute error.

7. Compute the central difference approximation to \( f'(1) \) for \( f(x) = x^3 - 2x \) with \( h = 0.1 \). Compare with the exact value.

8. Estimate \( f''(0) \) for \( f(x) = e^x \) using the second-derivative central difference formula with \( h = 0.1 \). State the exact value and the error.

9. Using the values \( f(0) = 0 \), \( f(0.5) = 0.479 \), \( f(1.0) = 0.841 \), estimate \( f'(0.5) \) using all three first-derivative formulas. Compare the estimates.

10. Repeat Problem 9 but estimate \( f'(0) \) using the three-point endpoint formula. What additional information does this require compared to the central difference?

### Algorithm Practice

11. Write pseudocode for a function that takes as input an array of equally spaced function values and a step size, and returns an array of central difference derivative estimates, using endpoint formulas at the first and last points.

```
Algorithm: Numerical Derivative from Data
Purpose: Estimate f'(x) at each point in a uniformly spaced data set
Inputs: y[0..n], h (step size)
Steps:
  d[0] = (-3*y[0] + 4*y[1] - y[2]) / (2*h)  {three-point endpoint}
  for i from 1 to n-1:
    d[i] = (y[i+1] - y[i-1]) / (2*h)         {central difference}
  d[n] = (y[n-2] - 4*y[n-1] + 3*y[n]) / (2*h) {three-point endpoint}
Output: d[0..n]
```

12. Describe how you would modify the algorithm in Problem 11 to detect noisy data and flag points where the derivative estimate may be unreliable.

### Computational Interpretation

13. A researcher uses the forward difference formula to estimate \( f'(x) \) with \( h = 0.01 \) and obtains the estimate 3.456. She then uses \( h = 0.001 \) and obtains 3.312. What does the change in the estimate suggest about the accuracy of each?

14. The central difference estimates of \( f'(1) \) with \( h = 0.1, 0.05, 0.025 \) are 2.3421, 2.3367, 2.3354. Is this behavior consistent with second-order accuracy? Explain.

15. A student computes central difference estimates with \( h = 10^{-5}, 10^{-7}, 10^{-9}, 10^{-11} \) and finds that the estimates first improve and then get worse. At what step size does the improvement stop, and what is responsible for the deterioration?

---

## Applications

16. **GPS Velocity**: A GPS receiver records positions (in meters) at one-second intervals: \( s(0) = 0 \), \( s(1) = 12.3 \), \( s(2) = 24.7 \), \( s(3) = 37.1 \), \( s(4) = 49.5 \). Estimate the velocity at each time using central differences at interior points and endpoint formulas at the boundaries.

17. **Temperature Rate of Change**: A sensor records temperatures at 30-minute intervals: \( T(0) = 15.2 \)°C, \( T(0.5) = 16.8 \)°C, \( T(1.0) = 18.9 \)°C, \( T(1.5) = 21.4 \)°C, \( T(2.0) = 23.0 \)°C. Estimate the rate of temperature change at each time point.

18. **Population Growth Rate**: A population study records population (in thousands) at five-year intervals: \( P(0) = 100 \), \( P(5) = 118 \), \( P(10) = 139 \), \( P(15) = 164 \), \( P(20) = 193 \). Estimate the population growth rate (in thousands per year) at each time.

19. **Option Sensitivity**: An option pricing model gives option values \( V(S) \) for different stock prices \( S \): \( V(48) = 3.82 \), \( V(50) = 4.56 \), \( V(52) = 5.34 \). Estimate the option delta \( \Delta = dV/dS \) at \( S = 50 \) using the central difference formula.

20. **Signal Derivative**: A digital signal has values at sample points \( f(0) = 1.00 \), \( f(1) = 2.14 \), \( f(2) = 3.57 \), \( f(3) = 4.98 \), \( f(4) = 6.22 \) (arbitrary units, uniform spacing). Estimate the derivative at each sample point.

---

## Error Analysis

21. For the forward difference formula applied to \( f(x) = e^x \) at \( x = 0 \):
    (a) Compute the absolute error for \( h = 0.5, 0.1, 0.05, 0.01 \).
    (b) Verify that the error is approximately proportional to \( h \).
    (c) Estimate the value of \( h \) that would give an absolute error of \( 0.001 \).

22. For the central difference formula applied to \( f(x) = \sin(x) \) at \( x = \pi/4 \):
    (a) Compute the absolute error for \( h = 0.5, 0.1, 0.05, 0.01 \).
    (b) Verify that the error is approximately proportional to \( h^2 \).
    (c) Bound the truncation error using the formula \( \frac{h^2}{6}|f'''(x)| \) and compare with the actual error.

23. A function satisfies \( |f'''(x)| \leq 5 \) on the interval \( [0, 2] \). What step size \( h \) is needed so that the central difference formula for \( f'(x) \) has truncation error less than \( 0.001 \)?

24. Suppose function values are computed with relative error \( 10^{-8} \) (eight significant digits) and \( |f(x)| \approx 1 \). Estimate the optimal step size for the central difference formula and the corresponding minimum total error.

25. A student uses the forward difference formula with \( h = 0.001 \) to estimate \( f'(x) \) from data with noise amplitude \( \pm 0.005 \). Estimate the noise contribution to the derivative error and determine whether the estimate is reliable.

---

## Chapter 6 Checkpoint

The checkpoint assesses readiness to proceed to Chapter 7. Complete the following problems without reference to notes. Answers may be placed in the answer key.

**Part A: Formulas and Definitions**

C6.1 Write the central difference formula for \( f'(x) \) and state its order of accuracy.

C6.2 Write the central difference formula for \( f''(x) \) and state its order of accuracy.

C6.3 State the two types of error in numerical differentiation and describe how each depends on step size.

**Part B: Computation**

C6.4 Given \( f(x) = x^2 + 3x \), estimate \( f'(2) \) using the central difference formula with \( h = 0.1 \). Compare with the exact value.

C6.5 Given \( f(x) = \ln(x) \), estimate \( f''(1) \) using the second-derivative central difference formula with \( h = 0.1 \). Compare with the exact value.

C6.6 Given data \( f(0) = 2.00 \), \( f(0.5) = 2.38 \), \( f(1.0) = 2.72 \), estimate \( f'(0.5) \) using the central difference formula and \( f'(0) \) using the three-point endpoint formula.

**Part C: Error and Interpretation**

C6.7 A student estimates \( f'(1) \) as 4.327 using \( h = 0.1 \) and as 4.321 using \( h = 0.05 \). What does this tell us about the order of accuracy of the formula being used?

C6.8 Why is numerical differentiation of noisy data with a small step size unreliable? What strategy would you recommend?

C6.9 For \( f(x) = e^{2x} \), bound the truncation error of the central difference approximation to \( f'(0) \) with \( h = 0.1 \).

---

## Bridge Note

Chapter 6 established the framework of finite difference approximation: replacing derivatives with computable ratios of function values, analyzing accuracy through Taylor series, and managing the competing effects of truncation error and roundoff. These ideas will reappear throughout the remainder of the book.

**Chapter 7: Numerical Integration** takes the same building blocks — function values at discrete points, Taylor series error analysis, and step size tradeoffs — and applies them to the opposite problem: estimating accumulated totals rather than rates of change. The connection between differentiation and integration will appear in the error analysis of composite rules, where the Taylor expansion structure is essentially the same as in this chapter.

**Chapter 12: Numerical ODEs** uses finite difference ideas to step forward in time. Euler's method, the improved Euler method, and Runge-Kutta methods all compute derivative approximations to predict the next value of a differential equation solution. The step size analysis in that chapter echoes the truncation-versus-roundoff tradeoff of Chapter 6.

**Chapter 13: Numerical PDEs** replaces derivatives in space and time with finite difference formulas on a computational grid. Every second-derivative central difference formula in Chapter 6 reappears in the discretization of the heat equation, wave equation, and Laplace equation.

Students entering numerical analysis, scientific computing, computational engineering, signal processing, or quantitative finance will encounter numerical differentiation at every turn. The habit of asking — what is the order of accuracy, what is the step size, what is the noise level, how large is the error — is the central discipline that Chapter 6 is designed to build.

> **MGU Library Connection**: For extended discussion of Richardson extrapolation, Romberg integration (which uses similar extrapolation ideas for integrals), adaptive finite differences, automatic differentiation as an alternative approach, and spectral differentiation for periodic functions, see the MGU Advanced Numerical Methods and Scientific Computing pages.

---

*End of Chapter 6*

---

*Numerical Methods | MGU Mathematics Series | Library Textbook Edition*
