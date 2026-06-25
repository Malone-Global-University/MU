# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part III: Numerical Calculus

---

# Chapter 7: Numerical Integration

---

## Purpose

Chapter 7 develops the theory and practice of approximating definite integrals using finite computational methods. Students who have studied calculus know that the definite integral of a function represents accumulated change, area under a curve, total work, total probability, or any quantity built up continuously over an interval. They also know, from the Fundamental Theorem of Calculus, that definite integrals can sometimes be evaluated exactly by finding antiderivatives. But many integrals that arise in science, engineering, finance, and data analysis cannot be evaluated symbolically — either because no closed-form antiderivative exists, because the function is known only from measured data, or because exact evaluation would be impractical. Numerical integration, sometimes called numerical quadrature, replaces the continuous accumulation process with a structured finite sum that approximates the integral to within a controllable error.

This chapter introduces the major families of numerical integration rules: the rectangle rules, the midpoint rule, the trapezoidal rule, and Simpson's rule. It develops composite versions of these rules for greater accuracy, derives error bounds so students can judge reliability, introduces adaptive integration as an idea, and applies numerical integration to problems from physics, finance, engineering, and data science. Throughout, the chapter connects numerical integration to the Riemann sum interpretation of the definite integral from calculus and to the error analysis framework from Chapter 2.

---

## Opening Question

A materials scientist measures the specific heat capacity of a new alloy at eleven temperature values between 300 K and 800 K. She needs the total thermal energy absorbed as the alloy heats from 300 K to 800 K, which equals

$$Q = \int_{300}^{800} c_p(T)\, dT$$

where $c_p(T)$ is the measured specific heat capacity in joules per gram per kelvin. She has eleven data values — not a formula. No antiderivative exists. How can she compute the integral reliably from discrete measurements? How accurate will her answer be? These are the central questions of numerical integration.

---

## Why This Chapter Matters

The ability to evaluate integrals numerically is one of the most broadly useful tools in applied mathematics. Probability distributions that cannot be integrated symbolically — including the normal distribution — are evaluated numerically. Engineering simulations compute forces, energies, and fluxes by numerical quadrature. Financial models compute option prices, expected values, and risk measures using integrals over probability distributions. Signal processing computes transforms and convolutions numerically. Scientific computing packages from astrophysics to climate modeling rely on efficient, reliable numerical integration at every step.

Numerical integration is also foundational to the numerical solution of differential equations. Euler's method and Runge-Kutta methods, which students will study in Chapter 12, are built from the same ideas as numerical integration rules. Understanding how and why numerical integration works prepares students for the much more complex algorithms that appear in scientific computing.

---

## Learning Objectives

Upon completing this chapter, students should be able to:

1. Explain why numerical integration is necessary when exact symbolic antiderivatives are unavailable.
2. Apply the left rectangle, right rectangle, and midpoint rules to approximate definite integrals.
3. Apply the trapezoidal rule and explain its geometric interpretation.
4. Apply Simpson's rule and explain why it achieves higher accuracy.
5. Construct composite versions of these rules for greater accuracy over longer intervals.
6. State and apply error bounds for the trapezoidal rule and Simpson's rule.
7. Apply numerical integration to data given in tabular form.
8. Explain the idea of adaptive integration and when it is useful.
9. Identify common mistakes and failure cases in numerical integration.
10. Apply numerical integration methods to problems from physics, engineering, finance, and data science.

---

## Key Terms

**numerical integration** — the approximation of a definite integral by a finite weighted sum of function values

**quadrature** — a classical term for numerical integration, used widely in scientific computing

**nodes** (or quadrature points) — the values of $x$ at which the integrand is evaluated

**weights** — the coefficients multiplying function values in a quadrature formula

**left rectangle rule** — approximation using function values at the left endpoint of each subinterval

**right rectangle rule** — approximation using function values at the right endpoint of each subinterval

**midpoint rule** — approximation using function values at the midpoint of each subinterval

**trapezoidal rule** — approximation that replaces the integrand by linear interpolants on each subinterval

**Simpson's rule** — approximation that replaces the integrand by quadratic interpolants over pairs of subintervals

**composite rule** — a quadrature rule applied repeatedly over many subintervals

**step size** — the width of each subinterval, denoted $h$

**error bound** — an upper bound on the absolute error of a quadrature approximation

**truncation error** — the error introduced by replacing the integrand with an approximating polynomial

**adaptive integration** — a strategy that uses narrower subintervals where the integrand changes rapidly

**integrand** — the function being integrated

---

## 7.1 Why Numerical Integration Is Needed

The Fundamental Theorem of Calculus gives an elegant formula for the definite integral:

$$\int_a^b f(x)\, dx = F(b) - F(a)$$

where $F$ is any antiderivative of $f$. This formula is powerful, but it requires finding $F$ in closed form. Not every function has a closed-form antiderivative. Some functions are defined only by data. Others have antiderivatives that exist theoretically but cannot be expressed in terms of elementary functions.

Consider the following examples:

**Example 1.** The Gaussian function $e^{-x^2}$ has no elementary antiderivative. Yet the integral

$$\int_0^x e^{-t^2}\, dt$$

is fundamental to probability, statistics, and physics. Numerical integration is the only practical way to evaluate it.

**Example 2.** The arc length of the ellipse with semi-axes $a$ and $b$ requires evaluating an elliptic integral that has no closed form in general.

**Example 3.** In signal processing, the frequency content of a measured signal is computed by integrating the signal multiplied by trigonometric functions. The signal exists only as discrete samples, so the integral must be approximated numerically.

**Example 4.** In finance, the price of an option depends on an integral over a log-normal probability distribution. Although the integrand is known, the bounds and parameters make closed-form evaluation impractical in many settings.

In all of these cases, numerical integration provides a way to approximate the integral to any desired accuracy, given sufficient function evaluations.

The fundamental idea behind every numerical integration method is the same: replace the continuous integral, which sums infinitely many infinitesimal contributions, with a finite weighted sum of function values at selected points. The art of numerical integration lies in choosing those points and weights to achieve the best possible accuracy with the fewest function evaluations.

---

## 7.2 Definite Integrals as Accumulation

Before developing the approximation methods, it is worth reviewing the geometric and physical meaning of the definite integral, because these meanings guide the intuition behind the approximation rules.

The definite integral $\int_a^b f(x)\, dx$ can be interpreted in at least three ways that support numerical thinking:

**Geometric interpretation.** When $f(x) \geq 0$, the definite integral equals the area of the region bounded by the curve $y = f(x)$, the $x$-axis, and the vertical lines $x = a$ and $x = b$. When $f$ changes sign, the integral gives the signed area, counting regions below the axis as negative.

**Accumulation interpretation.** The integral accumulates the continuous quantity $f(x)\, dx$ over the interval $[a, b]$. If $f(x)$ represents a rate of change — velocity, power, density, population growth rate — then $\int_a^b f(x)\, dx$ gives the total accumulated quantity — displacement, energy, mass, total population change.

**Riemann sum interpretation.** The definite integral is defined as the limit of Riemann sums. Partition $[a, b]$ into $n$ subintervals of equal width $h = (b - a)/n$. Choose a sample point $x_i^*$ in each subinterval $[x_{i-1}, x_i]$. Then

$$\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*)\, h$$

Numerical integration methods are finite Riemann sums. They stop before taking the limit, using a finite number of subintervals. The key insight is that for smooth functions, a well-chosen finite sum gives an excellent approximation.

The Riemann sum interpretation makes clear what numerical integration is doing: it is cutting the interval into pieces, approximating $f$ over each piece by something simple (a constant, a line, or a parabola), summing the approximate contributions, and reporting the total as an approximation to the true integral.

---

## 7.3 Left and Right Rectangle Rules

The simplest numerical integration rules approximate the integrand by a constant on each subinterval. This is the same as using a single-term Riemann sum on each piece.

### Setup

Partition $[a, b]$ into $n$ subintervals of equal width:

$$h = \frac{b - a}{n}, \qquad x_i = a + ih, \quad i = 0, 1, 2, \ldots, n$$

The partition points are $x_0 = a$, $x_1 = a + h$, $x_2 = a + 2h$, $\ldots$, $x_n = b$.

### Left Rectangle Rule

On each subinterval $[x_{i-1}, x_i]$, approximate the integrand by the constant $f(x_{i-1})$, which is the function value at the left endpoint. This gives the rectangle with base $h$ and height $f(x_{i-1})$.

Summing over all $n$ subintervals:

$$L_n = h \sum_{i=1}^n f(x_{i-1}) = h\left[f(x_0) + f(x_1) + \cdots + f(x_{n-1})\right]$$

### Right Rectangle Rule

On each subinterval $[x_{i-1}, x_i]$, approximate the integrand by the constant $f(x_i)$, the value at the right endpoint:

$$R_n = h \sum_{i=1}^n f(x_i) = h\left[f(x_1) + f(x_2) + \cdots + f(x_n)\right]$$

### Geometric Interpretation

**Diagram instruction:** Draw a smooth increasing curve $y = f(x)$ over an interval $[a, b]$. Shade five rectangles whose heights are determined by the left endpoint of each subinterval. Each rectangle sits under or crosses the curve, illustrating how the left rule underestimates an increasing function and overestimates a decreasing one.

For an increasing function, the left rule underestimates because each rectangle lies below the curve. The right rule overestimates for the same reason. For a decreasing function, the roles reverse. For functions that neither consistently increase nor decrease, the errors partially cancel.

### Error Behavior

The left and right rectangle rules are first-order methods: the error decreases proportionally to $h$ as the step size decreases. Doubling $n$ (halving $h$) approximately halves the error. These rules are simple but relatively slow to converge. They are mainly useful as conceptual tools and as the basis for understanding better methods.

---

**Example 7.3.1 — Left and Right Rectangle Rules**

*Problem.* Approximate $\displaystyle\int_0^1 x^2\, dx$ using the left and right rectangle rules with $n = 4$ subintervals. The exact value is $1/3$.

*Think.* With $n = 4$ and the interval $[0, 1]$, the step size is $h = 1/4 = 0.25$. The partition points are $x_0 = 0$, $x_1 = 0.25$, $x_2 = 0.5$, $x_3 = 0.75$, $x_4 = 1.0$.

*Method.* Left rule uses $f(x_0), f(x_1), f(x_2), f(x_3)$. Right rule uses $f(x_1), f(x_2), f(x_3), f(x_4)$.

*Compute.*

Function values:

| $x$ | $f(x) = x^2$ |
|-----|--------------|
| 0.00 | 0.0000 |
| 0.25 | 0.0625 |
| 0.50 | 0.2500 |
| 0.75 | 0.5625 |
| 1.00 | 1.0000 |

Left rule:

$$L_4 = 0.25\times (0.0000 + 0.0625 + 0.2500 + 0.5625) = 0.25 \times 0.875 = 0.21875$$

Right rule:

$$R_4 = 0.25 \times (0.0625 + 0.2500 + 0.5625 + 1.0000) = 0.25 \times 1.875 = 0.46875$$

*Check.* Exact value: $1/3 \approx 0.33333$.

Errors: $|L_4 - 1/3| \approx 0.115$, $|R_4 - 1/3| \approx 0.135$.

Note that $f(x) = x^2$ is increasing on $[0,1]$, so the left rule underestimates and the right rule overestimates, as expected.

*Interpret.* With only four subintervals, the rectangle rules give errors around 10–14%. The average $(L_4 + R_4)/2 = 0.34375$ is closer to the true value, which foreshadows the trapezoidal rule.

---

## 7.4 Midpoint Rule

The midpoint rule improves on the rectangle rules by evaluating the integrand at the midpoint of each subinterval rather than at the endpoints. The midpoint value better represents the average of the integrand over a smooth subinterval.

### Formula

Let $m_i = (x_{i-1} + x_i)/2 = x_{i-1} + h/2$ denote the midpoint of the $i$-th subinterval. The midpoint rule is:

$$M_n = h \sum_{i=1}^n f(m_i) = h\left[f(m_1) + f(m_2) + \cdots + f(m_n)\right]$$

### Why the Midpoint Works Better

The midpoint rule is a second-order method: its error decreases proportionally to $h^2$. This is a substantial improvement over the $O(h)$ convergence of the left and right rules. The reason is geometric: the midpoint approximation happens to match a tangent-line approximation at the midpoint, and by a symmetry argument, the overestimate on one side of the midpoint cancels the underestimate on the other side more effectively than either endpoint.

This can be understood from Taylor series. If $f$ is smooth over $[x_{i-1}, x_i]$, then

$$\int_{x_{i-1}}^{x_i} f(x)\, dx = h\, f(m_i) + \frac{h^3}{24} f''(m_i) + O(h^5)$$

The error on each subinterval is proportional to $h^3$. Summing over $n = (b-a)/h$ subintervals gives a global error proportional to $h^2$.

---

**Example 7.4.1 — Midpoint Rule**

*Problem.* Approximate $\displaystyle\int_0^1 x^2\, dx$ using the midpoint rule with $n = 4$ subintervals.

*Compute.* Midpoints: $m_1 = 0.125$, $m_2 = 0.375$, $m_3 = 0.625$, $m_4 = 0.875$.

| Midpoint $m_i$ | $f(m_i) = m_i^2$ |
|----------------|------------------|
| 0.125 | 0.015625 |
| 0.375 | 0.140625 |
| 0.625 | 0.390625 |
| 0.875 | 0.765625 |

$$M_4 = 0.25 \times (0.015625 + 0.140625 + 0.390625 + 0.765625) = 0.25 \times 1.3125 = 0.328125$$

*Check.* Exact: $1/3 \approx 0.33333$. Error: $|0.328125 - 0.33333| \approx 0.00521$.

The midpoint rule with $n = 4$ is more than twenty times more accurate than the left or right rectangle rules.

*Interpret.* Evaluating the function at midpoints rather than endpoints significantly reduces the error for the same computational cost.

---

## 7.5 Trapezoidal Rule

The trapezoidal rule replaces the constant approximation of the rectangle rules with a linear approximation on each subinterval. On each subinterval $[x_{i-1}, x_i]$, it draws the trapezoid whose two parallel sides have heights $f(x_{i-1})$ and $f(x_i)$.

### Formula for a Single Interval

On a single interval $[a, b]$ with $n = 1$:

$$T = \frac{b - a}{2}\left[f(a) + f(b)\right]$$

This is the area of the trapezoid with base $(b-a)$ and two heights $f(a)$ and $f(b)$.

### Composite Trapezoidal Rule

For $n$ subintervals of width $h = (b-a)/n$:

$$T_n = \frac{h}{2}\left[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)\right]$$

Notice the pattern: the endpoints $x_0$ and $x_n$ each receive a weight of 1, while all interior points receive a weight of 2. Dividing by $h/2$ (equivalently multiplying by $h$) gives the weighted sum.

This formula arises naturally by applying the single-interval trapezoidal rule to each subinterval and summing:

$$T_n = \sum_{i=1}^n \frac{h}{2}\left[f(x_{i-1}) + f(x_i)\right]$$

Adjacent subintervals share an interior point, so interior function values appear in two trapezoids and are counted twice.

### Geometric Interpretation

**Diagram instruction:** Draw a smooth curve over several subintervals. On each subinterval, draw the trapezoid connecting the curve values at the two endpoints by a straight line segment. Shade the trapezoids. Show that where the curve is concave up, the trapezoidal approximation overestimates; where the curve is concave down, it underestimates.

The trapezoidal rule is also a second-order method: its error decreases proportionally to $h^2$, the same rate as the midpoint rule. For a fixed $n$, however, the midpoint rule is typically about twice as accurate as the trapezoidal rule for smooth functions (see Section 7.8 for error bounds). The trapezoidal rule has the practical advantage that it requires only the partition points, making it ideal when data are available only at equally spaced points.

---

**Example 7.5.1 — Trapezoidal Rule**

*Problem.* Approximate $\displaystyle\int_0^1 x^2\, dx$ using the composite trapezoidal rule with $n = 4$ subintervals.

*Compute.* Step size $h = 0.25$. Partition points and function values are the same as Example 7.3.1.

$$T_4 = \frac{0.25}{2}\left[f(0) + 2f(0.25) + 2f(0.5) + 2f(0.75) + f(1)\right]$$

$$= 0.125\left[0 + 2(0.0625) + 2(0.25) + 2(0.5625) + 1\right]$$

$$= 0.125\left[0 + 0.125 + 0.5 + 1.125 + 1\right]$$

$$= 0.125 \times 2.75 = 0.34375$$

*Check.* Exact: $1/3 \approx 0.33333$. Error: $|0.34375 - 0.33333| \approx 0.01042$.

*Interpret.* The trapezoidal rule gives a much better result than the left or right rectangle rules, but about twice the error of the midpoint rule for the same $n$.

---

**Example 7.5.2 — Trapezoidal Rule on a Non-Elementary Integral**

*Problem.* Use the composite trapezoidal rule with $n = 6$ to approximate $\displaystyle\int_0^1 e^{-x^2}\, dx$.

*Think.* This integral has no elementary antiderivative. Numerical integration is necessary.

*Compute.* $h = 1/6 \approx 0.16667$. Partition points: $x_i = i/6$ for $i = 0, 1, \ldots, 6$.

| $i$ | $x_i$ | $f(x_i) = e^{-x_i^2}$ | Weight |
|-----|--------|------------------------|--------|
| 0 | 0.0000 | 1.00000 | 1 |
| 1 | 0.1667 | 0.97237 | 2 |
| 2 | 0.3333 | 0.89484 | 2 |
| 3 | 0.5000 | 0.77880 | 2 |
| 4 | 0.6667 | 0.64118 | 2 |
| 5 | 0.8333 | 0.49958 | 2 |
| 6 | 1.0000 | 0.36788 | 1 |

Weighted sum: $1(1.00000) + 2(0.97237) + 2(0.89484) + 2(0.77880) + 2(0.64118) + 2(0.49958) + 1(0.36788)$

$= 1.00000 + 1.94474 + 1.78968 + 1.55760 + 1.28236 + 0.99916 + 0.36788 = 8.94142$

$$T_6 = \frac{0.16667}{2} \times 8.94142 = 0.08333 \times 8.94142 \approx 0.74508$$

*Check.* The true value (from tables or high-precision computation) is approximately $0.74682$. Error $\approx 0.00174$.

*Interpret.* The trapezoidal rule provides a good approximation even for this non-elementary integral, and the error could be reduced further by increasing $n$.

---

## 7.6 Simpson's Rule

Simpson's rule achieves higher accuracy than the trapezoidal rule by replacing the linear approximation on each pair of subintervals with a quadratic approximation. Instead of connecting two consecutive points by a line, it fits a parabola through three consecutive points.

### Derivation

On the interval $[x_0, x_2]$ with midpoint $x_1 = x_0 + h$, fit a parabola $p(x)$ through the three points $(x_0, f(x_0))$, $(x_1, f(x_1))$, $(x_2, f(x_2))$. The integral of this parabola over $[x_0, x_2]$ equals:

$$\int_{x_0}^{x_2} p(x)\, dx = \frac{h}{3}\left[f(x_0) + 4f(x_1) + f(x_2)\right]$$

This formula is Simpson's rule applied to a single pair of subintervals. The weight pattern is $1, 4, 1$, which can be remembered as the weights assigned to the left endpoint, midpoint, and right endpoint of each double-subinterval.

### Composite Simpson's Rule

For $n$ subintervals (where $n$ must be even) of width $h = (b - a)/n$:

$$S_n = \frac{h}{3}\left[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + 2f(x_4) + \cdots + 4f(x_{n-1}) + f(x_n)\right]$$

The weight pattern across the full interval is: $1, 4, 2, 4, 2, 4, \ldots, 4, 2, 4, 1$. The endpoints receive weight 1. Interior points at odd indices receive weight 4. Interior points at even indices receive weight 2.

> **Student note:** Simpson's rule requires an even number of subintervals $n$. If you have an odd number of intervals or data points, you cannot apply standard composite Simpson's rule directly. In practice, you may use the trapezoidal rule on the extra interval or apply a modified rule.

### Order of Accuracy

Simpson's rule is a fourth-order method: its error decreases proportionally to $h^4$. Halving the step size reduces the error by a factor of approximately $2^4 = 16$. This is a dramatic improvement over the second-order trapezoidal and midpoint rules.

The high accuracy of Simpson's rule comes from the fact that a parabola exactly integrates any cubic polynomial (not just any quadratic). This is because the $1, 4, 1$ weighting pattern happens to cancel the third-order error term as well as the second-order one.

### Why Simpson's Rule Is So Widely Used

For smooth functions, Simpson's rule offers an excellent balance of accuracy and simplicity. It requires evaluating the function only at the partition points and the midpoints of pairs of subintervals — the same points used by the trapezoidal rule — but achieves $h^4$ convergence at essentially no additional computational cost. For this reason, Simpson's rule is one of the most widely implemented quadrature formulas in scientific computing.

---

**Example 7.6.1 — Simpson's Rule**

*Problem.* Approximate $\displaystyle\int_0^1 x^2\, dx$ using composite Simpson's rule with $n = 4$ subintervals.

*Compute.* $h = 0.25$. Using the same partition points and function values as before:

$$S_4 = \frac{0.25}{3}\left[f(0) + 4f(0.25) + 2f(0.5) + 4f(0.75) + f(1)\right]$$

$$= \frac{0.25}{3}\left[0 + 4(0.0625) + 2(0.25) + 4(0.5625) + 1\right]$$

$$= \frac{0.25}{3}\left[0 + 0.25 + 0.5 + 2.25 + 1\right]$$

$$= \frac{0.25}{3} \times 4 = \frac{1}{3}$$

*Check.* The exact answer is $1/3$. Simpson's rule gives the exact answer for $x^2$ because $x^2$ is a polynomial of degree two, and Simpson's rule integrates polynomials up to degree three exactly.

*Interpret.* For polynomial integrands of low degree, Simpson's rule is exact. The power of the method appears more clearly with non-polynomial or more complex integrands.

---

**Example 7.6.2 — Simpson's Rule on a Non-Elementary Integral**

*Problem.* Use composite Simpson's rule with $n = 6$ to approximate $\displaystyle\int_0^1 e^{-x^2}\, dx$.

*Compute.* $h = 1/6 \approx 0.16667$. Use the same function values as Example 7.5.2.

Weight pattern for $n = 6$: $1, 4, 2, 4, 2, 4, 1$.

$$S_6 = \frac{h}{3}\left[1(1.00000) + 4(0.97237) + 2(0.89484) + 4(0.77880) + 2(0.64118) + 4(0.49958) + 1(0.36788)\right]$$

$$= \frac{0.16667}{3}\left[1.00000 + 3.88948 + 1.78968 + 3.11520 + 1.28236 + 1.99832 + 0.36788\right]$$

$$= 0.05556 \times 13.44292 \approx 0.74683$$

*Check.* True value $\approx 0.74682$. Error $\approx 0.00001$.

*Interpret.* Simpson's rule with $n = 6$ is about 170 times more accurate than the trapezoidal rule with the same $n$. This illustrates the power of higher-order methods for smooth integrands.

---

## 7.7 Composite Numerical Integration

The methods in the previous sections are most powerful when applied as composite rules: the same basic rule is applied repeatedly over $n$ small subintervals. This section makes the structure of composite rules explicit and discusses how to choose $n$.

### The Logic of Composite Rules

The key observation is:

$$\int_a^b f(x)\, dx = \sum_{i=1}^n \int_{x_{i-1}}^{x_i} f(x)\, dx$$

If you have a good rule for approximating the integral over a single small interval, applying it to every subinterval and summing the results gives a good approximation for the whole integral. The more subintervals, the smaller the error — but also the more function evaluations required.

### Summary of Composite Rules

For $n$ subintervals of width $h = (b - a)/n$:

**Composite Midpoint Rule:**

$$M_n = h\sum_{i=1}^n f\!\left(\frac{x_{i-1} + x_i}{2}\right)$$

**Composite Trapezoidal Rule:**

$$T_n = \frac{h}{2}\left[f(x_0) + 2f(x_1) + \cdots + 2f(x_{n-1}) + f(x_n)\right]$$

**Composite Simpson's Rule** (requires $n$ even):

$$S_n = \frac{h}{3}\left[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \cdots + 4f(x_{n-1}) + f(x_n)\right]$$

### Choosing the Number of Subintervals

Choosing $n$ requires balancing accuracy against computational cost. More subintervals give more accuracy but require more function evaluations. For hand computation, $n$ between 4 and 20 is typical. For computer computation, $n$ may be hundreds or thousands.

A practical approach is to compute the approximation for one value of $n$, then double $n$ and recompute. If the two results agree to the desired number of decimal places, the approximation has likely converged. This doubling strategy is related to adaptive integration, discussed in Section 7.10.

---

## 7.8 Error in Numerical Integration

Every numerical integration method introduces an error called the truncation error: the error that would remain even if arithmetic were performed exactly. Understanding and bounding this error is essential for judging the reliability of an approximation.

### Sources of Error

There are two sources of error in numerical integration:

**Truncation error** arises from replacing the true integrand with an approximating function (a constant, line, or parabola). This error depends on how smooth the integrand is and how small the subintervals are.

**Roundoff error** arises from the finite precision of arithmetic. In practice, roundoff error is usually small relative to truncation error unless $n$ is extremely large. For most applications, truncation error dominates, and the analysis below focuses on it.

### Error Terms

For a function $f$ with bounded derivatives on $[a, b]$:

**Composite Trapezoidal Rule Error:**

$$\left|\int_a^b f(x)\, dx - T_n\right| \leq \frac{(b-a)^3}{12n^2}\, \max_{a \leq x \leq b} |f''(x)|$$

Equivalently, using $h = (b-a)/n$:

$$\left|E_T\right| \leq \frac{(b-a)}{12} h^2 \max |f''|$$

**Composite Midpoint Rule Error:**

$$\left|E_M\right| \leq \frac{(b-a)}{24} h^2 \max |f''|$$

Note: the midpoint rule's error bound is exactly half the trapezoidal rule's error bound. This confirms that the midpoint rule is approximately twice as accurate as the trapezoidal rule for smooth functions.

**Composite Simpson's Rule Error:**

$$\left|\int_a^b f(x)\, dx - S_n\right| \leq \frac{(b-a)^5}{180n^4}\, \max_{a \leq x \leq b} |f^{(4)}(x)|$$

Equivalently:

$$\left|E_S\right| \leq \frac{(b-a)}{180} h^4 \max |f^{(4)}|$$

The $h^4$ factor explains why Simpson's rule converges so much faster than the trapezoidal or midpoint rules as $n$ increases.

### Using Error Bounds

Error bounds tell you the worst-case error. In practice, the actual error is usually much smaller. The bounds are most useful for:

1. **Estimating $n$ needed** to achieve a given accuracy before computing.
2. **Certifying** that the computed approximation is within a required tolerance.
3. **Comparing methods** to understand which is more efficient.

---

**Example 7.8.1 — Using an Error Bound to Choose $n$**

*Problem.* How many subintervals are needed to guarantee that the composite trapezoidal rule approximates $\displaystyle\int_0^1 e^x\, dx$ with error less than $0.0001$?

*Think.* Find $\max|f''(x)|$ on $[0, 1]$, then solve the error bound inequality for $n$.

*Compute.* $f(x) = e^x$, $f''(x) = e^x$. Since $e^x$ is increasing on $[0, 1]$:

$$\max_{0 \leq x \leq 1} |f''(x)| = e^1 = e \approx 2.71828$$

Error bound for trapezoidal rule:

$$\left|E_T\right| \leq \frac{(1 - 0)^3}{12n^2} \cdot e = \frac{e}{12n^2}$$

Set this less than $0.0001$:

$$\frac{e}{12n^2} < 0.0001 \implies n^2 > \frac{e}{0.0012} \approx 2265.2 \implies n > 47.6$$

So $n = 48$ subintervals guarantees error less than $0.0001$.

*Check.* For Simpson's rule with the same integral, the error bound involves $f^{(4)}(x) = e^x$, and the bound is proportional to $1/n^4$. Solving analogously would show that far fewer subintervals are needed. This illustrates the practical advantage of higher-order methods.

*Interpret.* Before computing, the error bound gives a principled way to choose $n$. This is preferable to guessing or using unnecessarily large $n$.

---

## 7.9 Error Bounds

This section consolidates the error bound formulas and discusses their practical interpretation.

### Summary of Error Bounds

| Method | Order | Error Bound |
|--------|-------|-------------|
| Rectangle rules (left/right) | $O(h)$ | $\displaystyle\frac{(b-a)^2}{2n}\max|f'|$ |
| Midpoint rule | $O(h^2)$ | $\displaystyle\frac{(b-a)^3}{24n^2}\max|f''|$ |
| Trapezoidal rule | $O(h^2)$ | $\displaystyle\frac{(b-a)^3}{12n^2}\max|f''|$ |
| Simpson's rule | $O(h^4)$ | $\displaystyle\frac{(b-a)^5}{180n^4}\max|f^{(4)}|$ |

### Practical Notes on Error Bounds

**The bounds require derivative information.** To apply a bound, you must be able to estimate or bound the relevant derivative of $f$ over $[a, b]$. If $f$ is given only by data, exact derivative bounds are unavailable, and you must estimate them from the data or rely on convergence checking instead.

**The bounds are often pessimistic.** The true error may be much smaller than the bound, especially if $f$ does not achieve its maximum derivative value throughout the interval. The bounds are worst-case guarantees, not typical behavior.

**Smooth functions converge faster.** The error bounds assume that the relevant derivative is bounded. If $f$ has singularities or rapid oscillations, convergence may be much slower than the bounds suggest.

**Error bounds do not account for roundoff.** In finite-precision arithmetic, making $n$ extremely large will eventually cause roundoff error to grow, offsetting the benefit of smaller subintervals. For most applications, there is a practical limit on useful $n$.

---

**Example 7.9.1 — Comparing Methods by Error Bound**

*Problem.* For $\displaystyle\int_0^{\pi} \sin x\, dx = 2$, compare the error bounds for the trapezoidal rule and Simpson's rule with $n = 10$ subintervals.

*Compute.*

$f(x) = \sin x$, $f''(x) = -\sin x$, $f^{(4)}(x) = \sin x$.

$\max_{[0,\pi]}|f''(x)| = 1$. $\max_{[0,\pi]}|f^{(4)}(x)| = 1$.

$h = \pi/10$.

**Trapezoidal bound:**

$$\left|E_T\right| \leq \frac{\pi^3}{12 \times 100} = \frac{\pi^3}{1200} \approx \frac{31.006}{1200} \approx 0.02584$$

**Simpson's bound:**

$$\left|E_S\right| \leq \frac{\pi^5}{180 \times 10000} = \frac{\pi^5}{1{,}800{,}000} \approx \frac{306.02}{1{,}800{,}000} \approx 0.000170$$

*Interpret.* Simpson's rule is more than 150 times more accurate for the same $n = 10$. For this smooth integrand, the higher-order method is dramatically more efficient.

---

## 7.10 Adaptive Integration as an Introduction

All of the methods developed so far use equally spaced subintervals. But many integrands behave very differently in different parts of the interval: nearly constant in some regions, rapidly changing in others. Using equally spaced subintervals wastes computational effort where the integrand is smooth and risks inaccuracy where it changes rapidly.

**Adaptive integration** allocates subintervals based on the behavior of the integrand. Where the integrand is smooth and nearly linear or quadratic, fewer subintervals suffice. Where the integrand is rapidly changing or nearly singular, more subintervals are needed.

### The Basic Idea

Most adaptive integration algorithms work as follows:

1. Apply a basic quadrature rule (often Simpson's rule or a related pair of rules) to a given subinterval.
2. Estimate the error on that subinterval by comparing two approximations of different order or step size.
3. If the error estimate is below the desired tolerance, accept the approximation for that subinterval.
4. If the error estimate exceeds the tolerance, split the subinterval in half and apply the procedure recursively to each half.

This process continues until the estimated error over every subinterval is below the tolerance. The total integral is the sum of the accepted approximations.

### Why Adaptive Integration Matters

Adaptive integration is the strategy used by most practical scientific computing libraries. Functions like `quad` in Python's SciPy, `integral` in MATLAB, and analogous functions in R, Julia, and Mathematica all use adaptive strategies. When you call such a function, the algorithm is automatically concentrating computational effort where the integrand is hardest to resolve.

### When Adaptive Integration Is Needed

Adaptive integration is particularly valuable for:

- Integrands with near-singularities or sharp peaks
- Integrands that are nearly constant in most of the interval but rapidly changing in a small region
- Integrals where the desired accuracy is not known in advance
- Situations where function evaluations are inexpensive relative to the cost of programming decisions

### Limitations

Adaptive integration requires a way to estimate the error on each subinterval. If the integrand is pathologically oscillatory, very slowly varying, or poorly represented by polynomial approximation, adaptive strategies may require many subintervals and still fail to achieve the desired accuracy.

> **MGU Library Connection:** Adaptive integration algorithms are described in detail in the MGU Scientific Computing Reference. The connection between adaptive quadrature and adaptive ODE solvers is developed further in Chapter 12 and in the Numerical Analysis pathway.

---

## 7.11 Integrating Data from Tables

In many applications, the integrand is not given by a formula. It is measured at discrete points: experimental data, sensor readings, financial returns, weather observations. Numerical integration of tabular data requires adapting the rules developed above to situations where the function is known only at the given data points.

### Equally Spaced Data

When data are given at equally spaced points $x_0, x_1, \ldots, x_n$ with spacing $h$, the trapezoidal rule and Simpson's rule apply directly.

**Trapezoidal rule** requires function values at all $n + 1$ partition points. Since the data are already at these points, no additional function evaluations are needed.

**Simpson's rule** requires an even number of subintervals (an odd number of data points). If the data have an even number of points, apply Simpson's rule to all but the last pair and use the trapezoidal rule on the final interval — or apply a modified endpoint correction.

### Unequally Spaced Data

If the data are not equally spaced, the standard composite formulas do not apply directly. Options include:

1. Apply the trapezoidal rule on each subinterval with its own width: $T = \sum_{i=1}^n \frac{x_i - x_{i-1}}{2}[f(x_{i-1}) + f(x_i)]$.
2. Fit an interpolating polynomial or spline through the data and integrate the interpolant (see Chapter 4 and Chapter 5).
3. Use a specialized rule for non-uniform data.

---

**Example 7.11.1 — Trapezoidal Rule from Tabular Data**

*Problem.* A rocket's thrust is measured at the following times and values. Estimate the total impulse (integral of thrust over time) from $t = 0$ to $t = 5$ seconds.

| $t$ (s) | $F(t)$ (kN) |
|---------|------------|
| 0.0 | 0.0 |
| 1.0 | 22.4 |
| 2.0 | 47.3 |
| 3.0 | 39.1 |
| 4.0 | 18.6 |
| 5.0 | 0.0 |

*Think.* The data are equally spaced with $h = 1$. Apply the composite trapezoidal rule.

*Compute.*

$$T = \frac{1}{2}\left[0.0 + 2(22.4) + 2(47.3) + 2(39.1) + 2(18.6) + 0.0\right]$$

$$= \frac{1}{2}\left[0 + 44.8 + 94.6 + 78.2 + 37.2 + 0\right]$$

$$= \frac{1}{2} \times 254.8 = 127.4 \text{ kN·s}$$

*Check.* The thrust begins and ends at zero, with a peak in the middle — consistent with a typical rocket burn. The answer is physically reasonable.

*Interpret.* The total impulse is approximately 127,400 Newton-seconds. Without a formula for $F(t)$, numerical integration is the only way to obtain this estimate.

---

**Example 7.11.2 — Applying Simpson's Rule to Tabular Data**

*Problem.* Use composite Simpson's rule on the same rocket data (six data points give $n = 5$ intervals, which is odd). Use Simpson's rule for the first four intervals and the trapezoidal rule for the last.

*Compute.*

For $i = 0$ to $4$ (Simpson's with $n = 4$, even):

$$S_4 = \frac{1}{3}[F(0) + 4F(1) + 2F(2) + 4F(3) + F(4)]$$

$$= \frac{1}{3}[0 + 4(22.4) + 2(47.3) + 4(39.1) + 18.6]$$

$$= \frac{1}{3}[0 + 89.6 + 94.6 + 156.4 + 18.6] = \frac{359.2}{3} \approx 119.73 \text{ kN·s}$$

For $i = 4$ to $5$ (trapezoidal):

$$T_1 = \frac{1}{2}[F(4) + F(5)] = \frac{1}{2}[18.6 + 0] = 9.3 \text{ kN·s}$$

Total: $119.73 + 9.3 = 129.03$ kN·s.

*Interpret.* The mixed rule gives a slightly different estimate from the pure trapezoidal rule. With only six data points, both are reasonable approximations, and the true value lies somewhere between or near these estimates.

---

## 7.12 Numerical Integration in Physics, Finance, and Engineering

Numerical integration appears throughout quantitative science. The following examples illustrate its breadth.

### Physics: Work and Energy

In mechanics, the work done by a force $F(x)$ acting over a displacement from $a$ to $b$ is

$$W = \int_a^b F(x)\, dx$$

If $F(x)$ is measured experimentally (for example, from a strain gauge), the integral must be approximated numerically. In thermodynamics, the heat absorbed or released by a substance as its temperature changes from $T_1$ to $T_2$ is

$$Q = \int_{T_1}^{T_2} c_p(T)\, dT$$

where $c_p(T)$ is the specific heat capacity, often given by empirical data.

### Finance: Discounting and Option Pricing

The present value of a continuous income stream $r(t)$ over a period $[0, T]$ at discount rate $\delta$ is

$$PV = \int_0^T r(t)\, e^{-\delta t}\, dt$$

When $r(t)$ depends on economic conditions and is not given by a simple formula, this integral must be computed numerically.

In the Black-Scholes framework for option pricing, the price of a European call option requires evaluating the cumulative normal distribution:

$$N(d) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^d e^{-t^2/2}\, dt$$

Since $e^{-t^2/2}$ has no closed-form antiderivative, this integral is approximated numerically to high precision using composite Simpson's rule or adaptive quadrature.

### Engineering: Signal Processing and Control

In signal processing, the energy of a signal $x(t)$ over a time window $[0, T]$ is

$$E = \int_0^T [x(t)]^2\, dt$$

Measured signals are discrete sequences, so the integral is approximated by the trapezoidal rule or Simpson's rule over the sample points.

In feedback control systems, the integral of the error signal determines the "I" term in a PID controller. Numerical integration of the error at each time step is essential for real-time control.

### Data Science: Probability and Expected Value

In probability and statistics, the probability that a random variable $X$ with density $f(x)$ falls between $a$ and $b$ is

$$P(a \leq X \leq b) = \int_a^b f(x)\, dx$$

For distributions like the normal, beta, gamma, or Student's $t$, these integrals must be approximated numerically. Statistical tables, confidence intervals, hypothesis test p-values, and credible intervals in Bayesian analysis all depend on numerical integration of probability densities.

---

## 7.13 Common Numerical Integration Mistakes

Students learning numerical integration frequently make errors of two kinds: computational errors in applying the formulas, and conceptual errors in interpreting or choosing methods. The following list addresses the most common problems.

**Mistake 1: Forgetting the weight pattern in Simpson's rule.**

The pattern $1, 4, 2, 4, 2, \ldots, 4, 1$ must be applied correctly. A common error is to use the pattern $1, 4, 1, 4, 1, \ldots$ throughout, without alternating the 4 and 2 for interior points.

**Mistake 2: Using an odd number of subintervals for Simpson's rule.**

Standard composite Simpson's rule requires $n$ even. If you use odd $n$, the formula does not apply. Check this before computing.

**Mistake 3: Confusing the number of subintervals with the number of data points.**

For $n$ subintervals, there are $n + 1$ data points ($x_0, x_1, \ldots, x_n$). Forgetting this off-by-one leads to missing or duplicate function values.

**Mistake 4: Using the wrong value of $h$.**

The step size $h = (b - a)/n$. A common error is to compute $h$ incorrectly when the interval $[a, b]$ does not start at zero.

**Mistake 5: Assuming more subintervals always gives more accuracy.**

For smooth functions and exact arithmetic, more subintervals do improve accuracy. But for very large $n$ with finite-precision arithmetic, roundoff error can begin to grow. There is a practical optimum.

**Mistake 6: Applying composite formulas to data that are not equally spaced.**

The composite trapezoidal and Simpson's rules as stated assume equal spacing $h$. If data are unevenly spaced, each interval must be handled with its own width.

**Mistake 7: Ignoring error bounds.**

An approximation without any error estimate is often insufficient in scientific practice. Always ask: how accurate is this result likely to be?

**Mistake 8: Applying numerical integration without checking whether the integrand is bounded.**

If the integrand has a singularity (infinite value) inside $[a, b]$ or at the endpoints, standard composite rules may fail entirely or give misleading results. Singular integrals require special treatment (change of variables, splitting the interval, or specialized rules).

**Mistake 9: Applying Simpson's rule when the fourth derivative is very large.**

The error bound for Simpson's rule involves $\max|f^{(4)}|$. If the fourth derivative is very large — for example, near a steep peak or rapid oscillation — Simpson's rule may not converge as fast as expected.

**Mistake 10: Failing to interpret the result physically or contextually.**

A numerical answer without interpretation is incomplete. Always check whether the answer has the right magnitude, the right units, and the right behavior compared to what you expect.

---

## 7.14 Preparing for Differential Equation Methods

Chapter 7 closes the Part III development of numerical calculus. Students have now studied numerical differentiation (Chapter 6) and numerical integration (Chapter 7). These two tools are the computational foundation for the most important application of numerical calculus: solving differential equations.

### From Integration to ODE Solvers

The initial value problem $y' = f(t, y)$, $y(t_0) = y_0$ can be rewritten in integral form:

$$y(t) = y_0 + \int_{t_0}^t f(s, y(s))\, ds$$

To advance from $t_n$ to $t_{n+1} = t_n + h$, a numerical ODE solver approximates:

$$y_{n+1} = y_n + \int_{t_n}^{t_{n+1}} f(s, y(s))\, ds$$

Euler's method uses the rectangle rule to approximate this integral:

$$y_{n+1} \approx y_n + h\, f(t_n, y_n)$$

The improved Euler method and Runge-Kutta methods use higher-order approximations — analogous to the midpoint rule and Simpson's rule — to achieve better accuracy per step. The entire theory of ODE solver accuracy, step size selection, and stability grows directly from the numerical integration ideas developed in this chapter.

### From Taylor Series to ODE Methods

Chapter 8 will develop Taylor polynomials and series as another family of approximation tools. Taylor-based ODE methods explicitly use derivative information to achieve high-order accuracy. These methods connect the local polynomial approximation ideas of Chapters 6–8 to the ODE solver framework of Chapter 12.

### Connecting Error Concepts

The local truncation error and global error of ODE solvers parallel the subinterval error and total error of composite integration rules. The stability concepts developed for ODE solvers are direct extensions of the stability ideas introduced in Chapter 2.

Students who understand how and why composite trapezoidal and Simpson's rules work — and how to bound and control their errors — are well prepared for the much richer theory of ODE solvers.

---

## Chapter Summary

This chapter introduced numerical integration: the approximation of definite integrals by finite weighted sums of function values.

The **definite integral** accumulates a continuous quantity and can always be interpreted as a limit of Riemann sums. Numerical integration provides finite approximations to this limit.

The **left and right rectangle rules** are first-order methods that approximate the integrand by a constant on each subinterval. They are conceptually simple but relatively inaccurate.

The **midpoint rule** is a second-order method that evaluates the integrand at the midpoint of each subinterval. For the same number of subintervals, it is approximately twice as accurate as the trapezoidal rule.

The **trapezoidal rule** is also a second-order method that replaces the integrand by a linear function on each subinterval. Its composite form weights interior points by 2 and endpoints by 1.

**Simpson's rule** is a fourth-order method that approximates the integrand by a quadratic function over pairs of subintervals. Its composite form uses the alternating weight pattern $1, 4, 2, 4, 2, \ldots, 4, 1$. Simpson's rule is far more accurate than the trapezoidal rule for smooth functions and is one of the most widely used quadrature formulas in scientific computing.

**Error bounds** quantify the worst-case accuracy of each method. The trapezoidal rule's error is proportional to $h^2 \max|f''|$; Simpson's rule's error is proportional to $h^4 \max|f^{(4)}|$.

**Adaptive integration** concentrates computational effort where the integrand changes rapidly, achieving high accuracy efficiently.

**Tabular integration** applies these methods to data given at discrete points, using the trapezoidal rule directly and Simpson's rule when applicable.

Numerical integration is essential throughout physics, engineering, finance, statistics, and data science, and it provides the conceptual foundation for the numerical ODE methods studied in Chapter 12.

---

## Key Terms Review

| Term | Definition |
|------|------------|
| numerical integration | approximation of a definite integral by a finite weighted sum |
| quadrature | classical term for numerical integration |
| nodes | evaluation points in a quadrature formula |
| weights | coefficients multiplying function values in a quadrature formula |
| midpoint rule | quadrature using function values at subinterval midpoints |
| trapezoidal rule | quadrature using linear interpolation on each subinterval |
| Simpson's rule | quadrature using quadratic interpolation over pairs of subintervals |
| composite rule | repeated application of a basic rule over many subintervals |
| step size | subinterval width $h = (b-a)/n$ |
| error bound | worst-case bound on the absolute error of a quadrature formula |
| truncation error | error from replacing the integrand by an approximating function |
| adaptive integration | a strategy that uses narrower subintervals where the integrand changes rapidly |

---

## Concept Review Questions

1. Why does the Fundamental Theorem of Calculus not solve every definite integral problem? Give two distinct reasons why numerical integration is necessary.

2. Explain in your own words what a quadrature rule is. What are nodes and weights?

3. What is the difference between the left rectangle rule and the right rectangle rule? When does the left rule overestimate, and when does it underestimate?

4. Why does the midpoint rule outperform the endpoint rectangle rules? Give both a geometric and a quantitative reason.

5. Explain the geometric meaning of the trapezoidal rule. Why does the trapezoidal rule overestimate when the integrand is concave up?

6. Why does Simpson's rule require an even number of subintervals? What can you do if your data have an even number of points (odd number of intervals)?

7. What does it mean for a method to be second-order versus fourth-order? How does this affect convergence as $n$ increases?

8. Describe the weight pattern in composite Simpson's rule. How are endpoint, odd-indexed interior, and even-indexed interior points weighted?

9. What two quantities appear in the error bound for the trapezoidal rule? What does this tell you about when the trapezoidal rule is most reliable?

10. What is adaptive integration, and why is it more efficient than a fixed composite rule for integrands that vary widely across the interval?

---

## Skill Practice

**S1.** Apply the left rectangle rule with $n = 5$ to approximate $\displaystyle\int_1^3 \frac{1}{x}\, dx$. Compare to the exact value $\ln 3 \approx 1.0986$.

**S2.** Apply the right rectangle rule with $n = 5$ to the same integral. Compare to the exact value.

**S3.** Apply the midpoint rule with $n = 4$ to approximate $\displaystyle\int_0^2 \sqrt{x}\, dx$. Exact value: $\frac{4}{3}\sqrt{2} \approx 1.8856$.

**S4.** Apply the composite trapezoidal rule with $n = 6$ to approximate $\displaystyle\int_0^{\pi} \sin x\, dx = 2$.

**S5.** Apply composite Simpson's rule with $n = 6$ to the same integral. Compare the errors of the two methods.

**S6.** Apply composite Simpson's rule with $n = 4$ to approximate $\displaystyle\int_0^1 \frac{1}{1 + x^2}\, dx = \frac{\pi}{4} \approx 0.7854$.

**S7.** Write out the full composite trapezoidal rule formula with $n = 8$ for $\displaystyle\int_2^4 x^3\, dx$. Compute the approximation and compare to the exact value of $60$.

**S8.** Apply composite Simpson's rule with $n = 8$ to the integral in S7. Explain why the error is much smaller than for the trapezoidal rule.

---

## Algorithm Practice

**A1.** Write pseudocode for the composite trapezoidal rule that takes inputs $f$, $a$, $b$, $n$ and returns the approximation $T_n$.

**A2.** Write pseudocode for composite Simpson's rule that includes a check that $n$ is even before computing.

**A3.** Write pseudocode for an iterative convergence check: compute $T_n$ and $T_{2n}$, compare, and continue doubling until $|T_{2n} - T_n| < \varepsilon$ for a given tolerance $\varepsilon$.

**A4.** Trace the composite trapezoidal pseudocode for $f(x) = x^2$, $a = 0$, $b = 1$, $n = 4$. Verify that the output matches Example 7.5.1.

---

## Computational Interpretation

**C1.** The following table gives the velocity (in meters per second) of an object at 1-second intervals from $t = 0$ to $t = 5$.

| $t$ (s) | $v(t)$ (m/s) |
|---------|-------------|
| 0 | 0.0 |
| 1 | 4.9 |
| 2 | 9.8 |
| 3 | 14.7 |
| 4 | 19.6 |
| 5 | 24.5 |

Use the composite trapezoidal rule to estimate the total displacement from $t = 0$ to $t = 5$. (The exact answer for $v(t) = 9.8t$ is $\int_0^5 9.8t\, dt = 122.5$ m.) Explain why the trapezoidal rule is exact here.

**C2.** A particle moves with velocity $v(t) = \sin(\pi t)$ meters per second from $t = 0$ to $t = 2$ seconds. Use composite Simpson's rule with $n = 4$ to estimate the total distance traveled. Compare to the exact value.

**C3.** The power consumption of an industrial process (in kilowatts) is measured every 10 minutes over an hour:

| $t$ (min) | $P(t)$ (kW) |
|-----------|------------|
| 0 | 120 |
| 10 | 145 |
| 20 | 162 |
| 30 | 155 |
| 40 | 140 |
| 50 | 132 |
| 60 | 118 |

Use the composite trapezoidal rule to estimate the total energy consumed (in kilowatt-minutes) over the hour. Convert to kilowatt-hours.

**C4.** Explain why the left and right rectangle rules give poor estimates for $\displaystyle\int_0^1 \sqrt{x}\, dx$ even for moderate $n$. What property of the integrand causes difficulty?

---

## Applications

**App1.** A probability density function is given by $f(x) = \frac{6}{5}(x - x^2)$ on $[0, 1]$ and zero elsewhere. Use composite Simpson's rule with $n = 4$ to estimate $P(0.2 \leq X \leq 0.8) = \int_{0.2}^{0.8} f(x)\, dx$. Compare to the exact value.

**App2.** In a physics experiment, the force on a spring (in Newtons) is measured at five equally spaced positions:

| $x$ (m) | $F(x)$ (N) |
|---------|-----------|
| 0.0 | 0.0 |
| 0.5 | 12.0 |
| 1.0 | 20.5 |
| 1.5 | 25.0 |
| 2.0 | 18.0 |

Estimate the work done in extending the spring from $x = 0$ to $x = 2$ m using the composite trapezoidal rule.

**App3.** A company's marginal cost function is $MC(q) = 3q^2 - 12q + 20$ dollars per unit. Use composite Simpson's rule with $n = 6$ to estimate the total variable cost of producing 6 units: $\int_0^6 MC(q)\, dq$. Compare to the exact value.

**App4.** An investor receives continuous cash flows at rate $r(t) = 1000e^{0.05t}$ dollars per year from $t = 0$ to $t = 5$. The present value at discount rate $\delta = 0.08$ is $PV = \int_0^5 r(t)e^{-0.08t}\, dt$. Use composite Simpson's rule with $n = 10$ to estimate this present value.

---

## Error Analysis

**E1.** For $\displaystyle\int_0^2 e^x\, dx = e^2 - 1 \approx 6.3891$:

(a) Compute $T_4$ (trapezoidal, $n = 4$) and $S_4$ (Simpson's, $n = 4$).

(b) Compute the actual errors $|T_4 - \text{exact}|$ and $|S_4 - \text{exact}|$.

(c) Apply the error bound formulas to find upper bounds for each error. How do the actual errors compare to the bounds?

**E2.** Using the error bound for the trapezoidal rule, determine the minimum $n$ needed to approximate $\displaystyle\int_0^1 \sin x\, dx$ with error less than $5 \times 10^{-6}$.

**E3.** Using the error bound for Simpson's rule, determine the minimum even $n$ needed to approximate $\displaystyle\int_0^1 e^x\, dx$ with error less than $10^{-8}$.

**E4.** Suppose you double $n$ for the composite trapezoidal rule. By what approximate factor should the error decrease? What about for Simpson's rule? Verify your answer numerically using $\displaystyle\int_0^{\pi} \cos x\, dx = 0$ with $n = 4$ and $n = 8$.

**E5.** Explain why the error bound for Simpson's rule involves $\max|f^{(4)}|$ rather than $\max|f''|$. What does this imply about applying Simpson's rule to a function whose fourth derivative is very large?

---

## Chapter 7 Checkpoint

The following problems assess mastery of the major ideas of Chapter 7. Attempt each problem independently.

**Checkpoint 1.** Apply the composite trapezoidal rule with $n = 4$ to approximate $\displaystyle\int_1^3 \ln x\, dx$. Compare your result to the exact value $[x\ln x - x]_1^3 = 3\ln 3 - 2 \approx 1.2958$.

**Checkpoint 2.** Apply composite Simpson's rule with $n = 4$ to the same integral. Compare the errors of the two methods.

**Checkpoint 3.** The following data give a measured fluid flow rate $Q(t)$ in liters per second:

| $t$ (s) | $Q(t)$ (L/s) |
|---------|-------------|
| 0 | 3.2 |
| 2 | 5.8 |
| 4 | 8.1 |
| 6 | 7.4 |
| 8 | 4.0 |

Use the composite trapezoidal rule to estimate the total fluid volume (in liters) flowing from $t = 0$ to $t = 8$ seconds.

**Checkpoint 4.** Determine whether composite Simpson's rule can be applied directly to the data in Checkpoint 3. If not, explain why and describe an alternative approach.

**Checkpoint 5.** Find the minimum $n$ for composite Simpson's rule to approximate $\displaystyle\int_0^2 x^4\, dx$ with error less than $0.001$. (Exact value: $32/5 = 6.4$.)

**Checkpoint 6.** Explain why numerical integration is essential even for students who know symbolic calculus. Give two specific examples from different fields.

**Checkpoint 7.** A student applies composite Simpson's rule with $n = 5$ (an odd number) to an integral and reports a result. What is wrong with this approach? What should the student do instead?

**Checkpoint 8.** For a smooth integrand, if you halve the step size $h$ in the composite trapezoidal rule, what happens to the expected error? What if you halve $h$ in composite Simpson's rule?

---

## Bridge Note

Chapter 7 completes the numerical calculus triad begun in Chapter 6. Together, numerical differentiation (Chapter 6) and numerical integration (Chapter 7) provide the computational tools for quantitative analysis of any function that can be evaluated, measured, or sampled.

**Chapter 8** will develop Taylor polynomials and Taylor series as a systematic method for approximating functions by polynomials centered at a point. Taylor polynomials are closely related to numerical integration: they explain why quadrature rules based on polynomial approximation achieve the orders of accuracy stated in the error bounds of this chapter. Taylor's theorem, with its explicit remainder term, gives the mathematical underpinning of every error bound in Chapter 7.

**Chapter 12** will develop the numerical methods for ordinary differential equations that make direct use of the integration ideas from this chapter. Euler's method is a rectangle rule applied to the integral form of an ODE. The improved Euler and Runge-Kutta methods are higher-order quadrature rules adapted to the setting where the integrand $f(t, y)$ depends on the unknown solution $y$. Students who understand why Simpson's rule is more accurate than the trapezoidal rule will understand why fourth-order Runge-Kutta is preferred over Euler's method.

In scientific computing and engineering practice, numerical integration is ubiquitous. Every Monte Carlo simulation, every finite element analysis, every probability calculation for a non-standard distribution, and every continuous signal processing algorithm rests on the ideas developed in this chapter.

> **MGU Library Connection:** See the MGU Numerical Integration Formula Sheet (Appendix K) for a compact reference of all composite rules and error bounds developed in this chapter. See the MGU Scientific Computing Technology Guide (Appendix R) for guidance on using numerical integration functions in Python (SciPy), MATLAB, Julia, and R. See the MGU Numerical ODE Solver Reference (Appendix P) for the connection between numerical integration and ODE solver methods.

---

*End of Chapter 7*

---

**Numerical Methods | MGU Mathematics Series | Library Textbook Edition**
