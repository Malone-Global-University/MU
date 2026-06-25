# Numerical Methods

## MGU Mathematics Series | Library Textbook Edition

---

# Back Matter

## Appendices, Glossary, Answer Key, Index, and MGU Library Connections

---

> This back matter supports the fourteen chapters of *Numerical Methods* in the MGU Mathematics Series. It provides readiness reviews, formula references, algorithm summaries, pseudocode guides, a comprehensive glossary, an answer key framework, a full index, and connections to the broader MGU Library. Students and instructors should treat this section as a working reference, returning to it regularly as the course progresses.

---

# Appendix A: Calculus Readiness Review

Numerical methods assumes fluency with single-variable calculus at the level of a first course. This appendix reviews the ideas most frequently used in this textbook. Students who feel uncertain about any of these topics are encouraged to review the MGU *Calculus* volume before or alongside the early chapters of this book.

## A.1 Functions and Their Behavior

A function \( f : \mathbb{R} \to \mathbb{R} \) assigns to each input \( x \) exactly one output \( f(x) \). Numerical methods treats functions as the objects being evaluated, approximated, differentiated, integrated, or solved. Students should be comfortable evaluating functions at specific inputs, understanding domain and range, reading function graphs, and recognizing continuity.

A function is **continuous** at \( x = a \) if \( \lim_{x \to a} f(x) = f(a) \). Continuity matters in root-finding (the Intermediate Value Theorem requires it), interpolation (smooth functions behave better), and ODE solvers (existence and uniqueness theorems depend on it).

## A.2 Limits

The **limit** \( \lim_{x \to a} f(x) = L \) means that \( f(x) \) can be made arbitrarily close to \( L \) by taking \( x \) sufficiently close to \( a \). Key limit ideas used in this textbook include:

- Limits as the foundation of derivatives and integrals.
- Limits of sequences: \( \lim_{n \to \infty} a_n = L \) describes convergence of iterative methods.
- One-sided limits and their role in piecewise functions and boundary behavior.

## A.3 Derivatives

The **derivative** of \( f \) at \( x \) is defined by:

\[
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
\]

This definition is the direct ancestor of the finite difference formulas studied in Chapter 6. Students should be comfortable with:

- Derivative rules: power, product, quotient, chain.
- Derivatives of \( e^x \), \( \ln x \), \( \sin x \), \( \cos x \), \( \tan x \).
- Interpreting the derivative as a rate of change and as the slope of a tangent line.
- Higher-order derivatives \( f''(x) \), \( f'''(x) \), and their interpretations.
- Critical points, increasing and decreasing behavior, and concavity.

Newton's method (Chapter 3) uses \( f'(x) \) to locate roots. Taylor polynomials (Chapter 8) use higher-order derivatives to build local approximations. Numerical differentiation (Chapter 6) estimates \( f'(x) \) from function values when symbolic derivatives are unavailable.

## A.4 The Mean Value Theorem

The **Mean Value Theorem** states that if \( f \) is continuous on \( [a, b] \) and differentiable on \( (a, b) \), then there exists \( c \in (a, b) \) such that:

\[
f'(c) = \frac{f(b) - f(a)}{b - a}
\]

This theorem underlies error estimates for nearly every numerical method in this book. Error bounds for the trapezoidal rule, Simpson's rule, finite differences, and Taylor polynomials all invoke the Mean Value Theorem or its relatives.

## A.5 The Intermediate Value Theorem

If \( f \) is continuous on \( [a, b] \) and \( f(a) \) and \( f(b) \) have opposite signs, then there exists at least one \( c \in (a, b) \) such that \( f(c) = 0 \). This theorem guarantees that the bisection method (Chapter 3) can always be started when a sign change is observed.

## A.6 Definite Integrals

The **definite integral** \( \int_a^b f(x)\, dx \) represents the net signed area under the graph of \( f \) on \( [a, b] \), defined rigorously as a limit of Riemann sums:

\[
\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\, \Delta x
\]

Numerical integration (Chapter 7) replaces this limit with a finite sum. Students should be comfortable with:

- The Fundamental Theorem of Calculus.
- Basic integration rules: power rule, substitution.
- Integrals of \( e^x \), \( \sin x \), \( \cos x \).
- Interpreting integrals as accumulation, area, and total change.

## A.7 Taylor's Theorem

**Taylor's Theorem** states that if \( f \) has \( n+1 \) continuous derivatives near \( a \), then:

\[
f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n + R_n(x)
\]

where the **remainder** \( R_n(x) \) satisfies \( R_n(x) = \dfrac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1} \) for some \( c \) between \( a \) and \( x \). Taylor's Theorem is the single most important calculus result in this textbook. It drives error analysis for finite differences, numerical integration, ODE solvers, and function approximation.

## A.8 Sequences and Series

A **sequence** \( \{a_n\} \) is a list of numbers indexed by \( n \). A sequence **converges** if \( \lim_{n \to \infty} a_n = L \) for some finite \( L \). Iterative numerical methods produce sequences of approximations, and convergence of those sequences is the central question of Chapters 3, 9, 10, and 12.

A **series** is a sum \( \sum_{n=0}^{\infty} a_n \). Power series and Taylor series (Chapter 8) express functions as infinite sums of polynomial terms. Students should be familiar with geometric series and the basic concept of convergence.

---

# Appendix B: Linear Algebra Readiness Review

Several chapters of this textbook, particularly Chapters 4, 5, 9, and 10, rely on linear algebra. This appendix reviews the essential ideas.

## B.1 Vectors and Matrices

A **vector** in \( \mathbb{R}^n \) is an ordered list of \( n \) real numbers. A **matrix** of size \( m \times n \) has \( m \) rows and \( n \) columns. Matrix-vector multiplication \( \mathbf{A}\mathbf{x} \) maps a vector in \( \mathbb{R}^n \) to a vector in \( \mathbb{R}^m \).

Students should be comfortable with matrix addition, scalar multiplication, and matrix multiplication. The identity matrix \( \mathbf{I} \) satisfies \( \mathbf{A}\mathbf{I} = \mathbf{I}\mathbf{A} = \mathbf{A} \).

## B.2 Systems of Linear Equations

A **linear system** \( \mathbf{A}\mathbf{x} = \mathbf{b} \) collects \( m \) linear equations in \( n \) unknowns. Row reduction (Gaussian elimination) transforms the augmented matrix \( [\mathbf{A} \mid \mathbf{b}] \) into row echelon form to identify solutions. Students should know:

- When a system has a unique solution, no solution, or infinitely many solutions.
- Back-substitution to extract solutions from row echelon form.
- The role of the coefficient matrix determinant in deciding invertibility.

Chapter 9 extends this to numerical linear algebra, where exact row reduction is replaced by floating-point computation with pivoting and error control.

## B.3 Matrix Inverse

The **inverse** \( \mathbf{A}^{-1} \) of a square matrix \( \mathbf{A} \) satisfies \( \mathbf{A}\mathbf{A}^{-1} = \mathbf{I} \). The system \( \mathbf{A}\mathbf{x} = \mathbf{b} \) has the unique solution \( \mathbf{x} = \mathbf{A}^{-1}\mathbf{b} \) when \( \mathbf{A} \) is invertible. Computing matrix inverses directly is expensive for large matrices; numerical methods use LU decomposition or iterative methods instead.

## B.4 Eigenvalues and Eigenvectors

A nonzero vector \( \mathbf{v} \) is an **eigenvector** of matrix \( \mathbf{A} \) with **eigenvalue** \( \lambda \) if:

\[
\mathbf{A}\mathbf{v} = \lambda \mathbf{v}
\]

Eigenvalues are the roots of the **characteristic polynomial** \( \det(\mathbf{A} - \lambda \mathbf{I}) = 0 \). For large matrices, finding exact eigenvalues symbolically is impractical. Chapter 10 presents numerical methods for approximating the dominant eigenvalues of a matrix.

## B.5 Inner Products and Norms

The **dot product** (inner product) of vectors \( \mathbf{u} \) and \( \mathbf{v} \) is \( \mathbf{u} \cdot \mathbf{v} = \sum_i u_i v_i \). The **Euclidean norm** (length) of a vector is \( \|\mathbf{v}\| = \sqrt{\mathbf{v} \cdot \mathbf{v}} \). Matrix norms and vector norms are used in Chapter 9 to measure the size of errors and to define the condition number of a matrix.

---

# Appendix C: Differential Equations Readiness Review

Chapters 12 and 13 apply numerical methods to differential equations. This appendix reviews the necessary background.

## C.1 Ordinary Differential Equations

An **ordinary differential equation** (ODE) involves a function \( y(t) \) of a single variable and its derivatives. The general first-order ODE is:

\[
\frac{dy}{dt} = f(t, y)
\]

An **initial value problem** (IVP) pairs this ODE with an initial condition \( y(t_0) = y_0 \). Students should know:

- What a solution to a differential equation means.
- Simple separable and linear first-order ODEs.
- The exponential growth/decay equation \( y' = ky \) and its solution \( y = Ce^{kt} \).
- The concept of a slope field or direction field.

## C.2 Existence and Uniqueness

If \( f(t, y) \) is continuous and satisfies a Lipschitz condition in \( y \), then the IVP \( y' = f(t,y) \), \( y(t_0) = y_0 \) has a unique solution near \( t_0 \). This guarantees that numerical ODE solvers (Chapter 12) are approximating a genuine solution.

## C.3 Higher-Order ODEs and Systems

A second-order ODE \( y'' = f(t, y, y') \) can be rewritten as a system of two first-order ODEs by introducing \( v = y' \). Chapter 12 shows how Euler's method and Runge-Kutta methods extend naturally to systems of first-order equations.

## C.4 Partial Differential Equations

A **partial differential equation** (PDE) involves a function of two or more variables and its partial derivatives. The three classical equations encountered in Chapter 13 are:

- **Heat equation:** \( \dfrac{\partial u}{\partial t} = \alpha \dfrac{\partial^2 u}{\partial x^2} \) — models diffusion and heat flow.
- **Wave equation:** \( \dfrac{\partial^2 u}{\partial t^2} = c^2 \dfrac{\partial^2 u}{\partial x^2} \) — models vibrating strings and sound.
- **Laplace equation:** \( \dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} = 0 \) — models steady-state temperature distributions.

Students are not expected to have studied PDEs formally before Chapter 13. The chapter is written as an accessible introduction.

---

# Appendix D: Programming and Pseudocode Reference

This textbook presents algorithms in language-neutral pseudocode. This appendix explains the notation used throughout the book.

## D.1 Pseudocode Conventions

Pseudocode describes an algorithm's logic without binding it to any specific programming language. The following conventions are used throughout this textbook.

**Assignment:** The symbol \( \leftarrow \) means "assign the value on the right to the variable on the left."

```
x ← 1.5
```

**Arithmetic:** Standard symbols \( +, -, \times, / \) are used. Exponentiation is written as \( x^n \) or \( x\mathbf{\hat{}}n \).

**Conditionals:**

```
if condition then
    execute this block
else
    execute this block
end if
```

**Loops:**

```
for k = 1, 2, ..., N do
    execute this block
end for

while condition do
    execute this block
end while
```

**Functions:** A function is called as \( f(x) \). When defining a custom function:

```
function myFunction(input1, input2)
    ...
    return output
end function
```

**Print or Output:**

```
output x
```

**Absolute value:** \( |x| \)

**Stopping criteria** are written in the loop condition or as a break statement:

```
if |x_new - x_old| < tolerance then
    stop
end if
```

## D.2 Translating Pseudocode to Code

The pseudocode in this textbook can be translated directly to Python, MATLAB, Julia, R, C, or any other language. Students using Python should note that Python uses `=` for assignment, `**` for exponentiation, and `abs()` for absolute value. All other logical structures (if/else, for, while, functions, return) map almost directly to the pseudocode shown here.

## D.3 Common Algorithmic Patterns in Numerical Methods

**Iteration loop:** Compute a new approximation, test whether it is close enough to the previous one, and stop if the stopping criterion is met.

```
x ← initial guess
repeat
    x_old ← x
    x ← update formula
until |x - x_old| < tolerance or maximum iterations reached
output x
```

**Root-finding with bracket:** Maintain an interval \( [a, b] \) containing a root, narrow the interval at each step.

```
while b - a > tolerance do
    m ← (a + b) / 2
    if f(a) * f(m) < 0 then
        b ← m
    else
        a ← m
    end if
end while
output (a + b) / 2
```

**Summation loop:** Accumulate a sum over \( n \) terms.

```
S ← 0
for k = 0, 1, ..., n do
    S ← S + term(k)
end for
output S
```

**Table filling:** Store a sequence of approximations in a table indexed by step number.

```
t[0] ← t0
y[0] ← y0
for k = 0, 1, ..., N-1 do
    y[k+1] ← y[k] + h * f(t[k], y[k])
    t[k+1] ← t[k] + h
end for
```

## D.4 Error Checking in Code

Every numerical algorithm should include a check for failure conditions:

- Maximum iterations exceeded without convergence.
- Division by zero (especially in Newton's method when \( f'(x) = 0 \)).
- NaN or infinity in floating-point results.
- Loss of bracket in bisection (should not occur if implemented correctly).

Students implementing algorithms should always print or log the approximation at each iteration during testing, so convergence (or failure to converge) is visible.

---

# Appendix E: Error Analysis Reference

This appendix consolidates the error formulas and definitions used throughout the textbook.

## E.1 Basic Error Definitions

Let \( p \) be the exact value and \( p^* \) be an approximation.

**Absolute error:**

\[
E_{\text{abs}} = |p - p^*|
\]

**Relative error:**

\[
E_{\text{rel}} = \frac{|p - p^*|}{|p|}, \quad p \neq 0
\]

**Percent error:**

\[
E_{\%} = \frac{|p - p^*|}{|p|} \times 100\%
\]

## E.2 Rounding and Truncation Error

**Rounding error** arises when a number is rounded to fit a finite representation. For a number rounded to \( d \) decimal places, the absolute rounding error is at most \( 0.5 \times 10^{-d} \).

**Truncation error** arises when an infinite process (a series, an integral, a limit) is replaced by a finite approximation. For example, replacing \( f'(x) \) with a difference quotient introduces truncation error bounded by terms involving higher derivatives and the step size \( h \).

## E.3 Taylor Remainder Bound

If \( f \) has \( n+1 \) continuous derivatives, the error in the \( n \)-th degree Taylor polynomial at \( x \) expanded around \( a \) satisfies:

\[
|R_n(x)| \leq \frac{M}{(n+1)!} |x - a|^{n+1}
\]

where \( M = \max |f^{(n+1)}(c)| \) for \( c \) between \( a \) and \( x \).

## E.4 Finite Difference Error Summary

| Formula | Order of Accuracy |
|---|---|
| Forward difference: \( f'(x) \approx \dfrac{f(x+h) - f(x)}{h} \) | \( O(h) \) |
| Backward difference: \( f'(x) \approx \dfrac{f(x) - f(x-h)}{h} \) | \( O(h) \) |
| Central difference: \( f'(x) \approx \dfrac{f(x+h) - f(x-h)}{2h} \) | \( O(h^2) \) |
| Second derivative central: \( f''(x) \approx \dfrac{f(x+h) - 2f(x) + f(x-h)}{h^2} \) | \( O(h^2) \) |

## E.5 Numerical Integration Error Summary

| Rule | Error bound |
|---|---|
| Midpoint rule (composite, \( n \) subintervals) | \( \dfrac{(b-a)^3}{24n^2} f''(c) \) |
| Trapezoidal rule (composite) | \( \dfrac{(b-a)^3}{12n^2} f''(c) \) |
| Simpson's rule (composite) | \( \dfrac{(b-a)^5}{180n^4} f^{(4)}(c) \) |

In each case, \( c \) is some point in \( [a, b] \) whose value is typically unknown; the bound uses \( \max |f^{(k)}(x)| \) over the interval.

## E.6 ODE Error Definitions

For numerical ODE solvers applied to \( y' = f(t, y) \) with step size \( h \):

- **Local truncation error (LTE):** the error introduced in a single step, assuming exact values at the start of the step.
- **Global error:** the accumulated error at a given time after many steps.

| Method | LTE order | Global error order |
|---|---|---|
| Euler's method | \( O(h^2) \) | \( O(h) \) |
| Improved Euler (Heun) | \( O(h^3) \) | \( O(h^2) \) |
| Fourth-order Runge-Kutta | \( O(h^5) \) | \( O(h^4) \) |

## E.7 Bisection Error Bound

After \( n \) bisection steps starting from an interval of length \( b - a \), the guaranteed error bound is:

\[
|p - p_n| \leq \frac{b - a}{2^n}
\]

This is independent of the function; it depends only on the initial interval and the number of steps.

---

# Appendix F: Floating-Point Arithmetic Reference

## F.1 Floating-Point Representation

A floating-point number in base 2 is represented as:

\[
x = \pm (1.b_1 b_2 b_3 \cdots b_t) \times 2^e
\]

where \( b_i \in \{0, 1\} \) are mantissa bits and \( e \) is the exponent. The **IEEE 754 double-precision standard** uses 53 bits for the mantissa and 11 bits for the exponent, giving approximately 15–17 significant decimal digits and a range of roughly \( 10^{-308} \) to \( 10^{308} \).

## F.2 Machine Epsilon

**Machine epsilon** \( \epsilon_{\text{mach}} \) is the smallest positive floating-point number such that:

\[
1 + \epsilon_{\text{mach}} \neq 1
\]

in floating-point arithmetic. For IEEE 754 double precision, \( \epsilon_{\text{mach}} \approx 2.22 \times 10^{-16} \).

Machine epsilon is not the smallest positive floating-point number; it is the relative spacing between 1 and the next representable number. It sets the floor for relative rounding errors.

## F.3 Roundoff Error in Arithmetic

Every floating-point operation introduces a small relative error bounded by \( \epsilon_{\text{mach}} \). Over many operations, these errors accumulate. For \( n \) sequential floating-point additions, the accumulated relative error is approximately \( n\epsilon_{\text{mach}} \), which becomes significant when \( n \) is large.

## F.4 Loss of Significance (Catastrophic Cancellation)

When two nearly equal numbers are subtracted, their leading significant digits cancel, leaving a result with far fewer accurate digits. Example: if \( a = 1.23456789 \) and \( b = 1.23456788 \), then \( a - b = 0.00000001 \), which has only one significant digit despite both inputs having nine.

Loss of significance is avoided by algebraically reformulating the computation before performing it numerically.

## F.5 Overflow and Underflow

**Overflow** occurs when a computed result exceeds the largest representable floating-point number (approximately \( 1.8 \times 10^{308} \) for double precision). The result is represented as \( \pm\infty \) or causes an error.

**Underflow** occurs when a computed result is closer to zero than the smallest nonzero representable number (approximately \( 5 \times 10^{-324} \) for double precision). The result is rounded to zero, which may cause division-by-zero errors downstream.

## F.6 Floating-Point Arithmetic Rules

Floating-point arithmetic is not exactly associative or distributive. The following identities may fail in floating-point:

- \( (a + b) + c \neq a + (b + c) \) in general.
- \( a \times (b + c) \neq a \times b + a \times c \) in general.

Students implementing algorithms should be aware that changing the order of operations can change the floating-point result and its accuracy.

---

# Appendix G: Root-Finding Method Reference

## G.1 Bisection Method

**Purpose:** Find a root of \( f(x) = 0 \) on \( [a, b] \) given that \( f(a) \) and \( f(b) \) have opposite signs.

**Algorithm:**

```
while (b - a) / 2 > tolerance do
    m ← (a + b) / 2
    if f(m) = 0 then
        return m
    else if f(a) * f(m) < 0 then
        b ← m
    else
        a ← m
    end if
end while
return (a + b) / 2
```

**Convergence:** Linear. Error halves each step.

**Error bound after \( n \) steps:** \( |p - p_n| \leq (b-a)/2^n \).

**Fails when:** \( f \) has no sign change across the root (even-multiplicity root), or the bracket is incorrect.

## G.2 Newton's Method

**Purpose:** Find a root of \( f(x) = 0 \) starting from an initial guess \( x_0 \), using the derivative \( f'(x) \).

**Iteration:**

\[
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
\]

**Convergence:** Quadratic near a simple root. Requires \( f'(x_n) \neq 0 \).

**Fails when:** \( f'(x_n) = 0 \), the initial guess is poor, or the function has multiple roots or oscillatory behavior near the root.

## G.3 Secant Method

**Purpose:** Find a root without computing \( f'(x) \), using two recent approximations.

**Iteration:**

\[
x_{n+1} = x_n - f(x_n) \cdot \frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}
\]

**Convergence:** Superlinear (order approximately 1.618). Slower than Newton but requires no derivative.

**Fails when:** \( f(x_n) \approx f(x_{n-1}) \), causing near-division by zero.

## G.4 Fixed-Point Iteration

**Purpose:** Find a fixed point of \( g(x) \), where \( g(x) = x \) corresponds to the root of \( f(x) = x - g(x) = 0 \).

**Iteration:** \( x_{n+1} = g(x_n) \)

**Convergence:** Linear if \( |g'(x^*)| < 1 \) near the fixed point \( x^* \). Diverges if \( |g'(x^*)| > 1 \).

## G.5 Comparison of Root-Finding Methods

| Method | Convergence | Requires | Reliable |
|---|---|---|---|
| Bisection | Linear | Sign change, continuity | Yes, always |
| Fixed-Point | Linear | \( |g'| < 1 \) | Only if condition holds |
| Newton | Quadratic | \( f' \), good initial guess | Usually, near root |
| Secant | Superlinear | Two initial guesses | Usually |

---

# Appendix H: Interpolation Formula Reference

## H.1 Linear Interpolation

Given two points \( (x_0, f_0) \) and \( (x_1, f_1) \), the linear interpolant at \( x \) is:

\[
P(x) = f_0 + \frac{f_1 - f_0}{x_1 - x_0}(x - x_0)
\]

**Error:** \( |f(x) - P(x)| \leq \dfrac{M_2}{8}(x_1 - x_0)^2 \), where \( M_2 = \max |f''(x)| \) on \( [x_0, x_1] \).

## H.2 Lagrange Interpolating Polynomial

Given \( n+1 \) data points \( (x_0, f_0), \ldots, (x_n, f_n) \) with distinct \( x_i \), the Lagrange polynomial is:

\[
P(x) = \sum_{k=0}^{n} f_k \, L_k(x)
\]

where the **Lagrange basis polynomials** are:

\[
L_k(x) = \prod_{\substack{j=0 \\ j \neq k}}^{n} \frac{x - x_j}{x_k - x_j}
\]

Each \( L_k(x_i) = \delta_{ki} \) (equals 1 at node \( x_k \), 0 at all other nodes).

## H.3 Newton Divided Differences

The **divided difference table** for \( f \) at nodes \( x_0, x_1, \ldots, x_n \):

\[
f[x_i] = f(x_i)
\]

\[
f[x_i, x_{i+1}] = \frac{f[x_{i+1}] - f[x_i]}{x_{i+1} - x_i}
\]

\[
f[x_i, x_{i+1}, x_{i+2}] = \frac{f[x_{i+1}, x_{i+2}] - f[x_i, x_{i+1}]}{x_{i+2} - x_i}
\]

The Newton interpolating polynomial is:

\[
P(x) = f[x_0] + f[x_0,x_1](x-x_0) + f[x_0,x_1,x_2](x-x_0)(x-x_1) + \cdots
\]

## H.4 Interpolation Error

For the \( n \)-th degree interpolating polynomial through nodes \( x_0, \ldots, x_n \):

\[
|f(x) - P_n(x)| \leq \frac{M_{n+1}}{(n+1)!} \prod_{k=0}^{n} |x - x_k|
\]

where \( M_{n+1} = \max |f^{(n+1)}(t)| \) over the interval containing all nodes and \( x \).

## H.5 Runge's Phenomenon

When interpolating using equally spaced nodes with high-degree polynomials, large oscillations may appear near the ends of the interval even if the target function is smooth. The classic example is \( f(x) = \dfrac{1}{1 + 25x^2} \) on \( [-1, 1] \): high-degree polynomial interpolation at equally spaced nodes produces wild oscillations that grow with degree. Using Chebyshev nodes or piecewise interpolation avoids this.

---

# Appendix I: Least Squares Reference

## I.1 The Least Squares Problem

Given data points \( (x_1, y_1), \ldots, (x_m, y_m) \) and a model function \( \phi(x; \mathbf{c}) \) depending on parameters \( \mathbf{c} = (c_0, c_1, \ldots, c_n) \), the least squares fit minimizes:

\[
S(\mathbf{c}) = \sum_{i=1}^{m} \left( y_i - \phi(x_i; \mathbf{c}) \right)^2
\]

## I.2 Linear Least Squares (Straight Line)

For the model \( \phi(x) = c_0 + c_1 x \):

\[
c_1 = \frac{m\sum x_i y_i - (\sum x_i)(\sum y_i)}{m\sum x_i^2 - (\sum x_i)^2}, \qquad c_0 = \bar{y} - c_1\bar{x}
\]

where \( \bar{x} = \frac{1}{m}\sum x_i \) and \( \bar{y} = \frac{1}{m}\sum y_i \).

## I.3 Normal Equations

For the polynomial model \( \phi(x) = c_0 + c_1 x + \cdots + c_n x^n \), the least squares coefficients satisfy the **normal equations**:

\[
\mathbf{A}^T \mathbf{A}\, \mathbf{c} = \mathbf{A}^T \mathbf{y}
\]

where \( \mathbf{A} \) is the **Vandermonde-like design matrix** with entries \( A_{ij} = x_i^j \) and \( \mathbf{y} = (y_1, \ldots, y_m)^T \). For large or poorly conditioned systems, solving the normal equations numerically may require pivoting or alternative factorizations (QR decomposition).

## I.4 Residuals

The **residual** at data point \( i \) is:

\[
r_i = y_i - \phi(x_i; \mathbf{c})
\]

The **residual sum of squares** \( S = \sum r_i^2 \) measures total misfit. A small \( S \) does not always mean the model is correct; checking the residual pattern reveals systematic model error.

---

# Appendix J: Numerical Differentiation Formula Sheet

## J.1 First Derivative Approximations

**Forward difference (first order):**

\[
f'(x) \approx \frac{f(x+h) - f(x)}{h}, \quad \text{error } O(h)
\]

**Backward difference (first order):**

\[
f'(x) \approx \frac{f(x) - f(x-h)}{h}, \quad \text{error } O(h)
\]

**Central difference (second order):**

\[
f'(x) \approx \frac{f(x+h) - f(x-h)}{2h}, \quad \text{error } O(h^2)
\]

## J.2 Second Derivative Approximation

**Central difference (second order):**

\[
f''(x) \approx \frac{f(x+h) - 2f(x) + f(x-h)}{h^2}, \quad \text{error } O(h^2)
\]

## J.3 Step Size Selection

For forward/backward differences, the optimal step size balancing truncation and roundoff error is approximately \( h \approx \sqrt{\epsilon_{\text{mach}}} \approx 10^{-8} \).

For central differences, the optimal \( h \approx \epsilon_{\text{mach}}^{1/3} \approx 10^{-5} \).

Using \( h \) too small causes roundoff error to dominate. Using \( h \) too large causes truncation error to dominate.

## J.4 Warning

Numerical differentiation amplifies noise. For noisy data, smoothing or regularization before differentiation is often necessary.

---

# Appendix K: Numerical Integration Formula Sheet

## K.1 Rectangle Rules

**Left rectangle rule:**

\[
\int_a^b f(x)\, dx \approx h \sum_{i=0}^{n-1} f(x_i), \quad h = \frac{b-a}{n}
\]

**Right rectangle rule:**

\[
\int_a^b f(x)\, dx \approx h \sum_{i=1}^{n} f(x_i)
\]

## K.2 Midpoint Rule

\[
\int_a^b f(x)\, dx \approx h \sum_{i=0}^{n-1} f\!\left(\frac{x_i + x_{i+1}}{2}\right), \quad \text{error } O(h^2)
\]

## K.3 Trapezoidal Rule

**Simple (single interval):**

\[
\int_a^b f(x)\, dx \approx \frac{b-a}{2}[f(a) + f(b)]
\]

**Composite (n subintervals, \( h = (b-a)/n \)):**

\[
T_n = \frac{h}{2}\left[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)\right]
\]

**Error:** \( -\dfrac{(b-a)^3}{12n^2} f''(c) \) for some \( c \in (a,b) \).

## K.4 Simpson's Rule

**Simple (single pair of subintervals):**

\[
\int_a^b f(x)\, dx \approx \frac{b-a}{6}\left[f(a) + 4f\!\left(\frac{a+b}{2}\right) + f(b)\right]
\]

**Composite (n even subintervals, \( h = (b-a)/n \)):**

\[
S_n = \frac{h}{3}\left[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \cdots + 4f(x_{n-1}) + f(x_n)\right]
\]

**Error:** \( -\dfrac{(b-a)^5}{180n^4} f^{(4)}(c) \) for some \( c \in (a,b) \).

## K.5 Accuracy Comparison

| Rule | Error order |
|---|---|
| Rectangle (left/right) | \( O(h) \) |
| Midpoint | \( O(h^2) \) |
| Trapezoidal | \( O(h^2) \) |
| Simpson's | \( O(h^4) \) |

Simpson's rule is exact for polynomials of degree 3 or less, even though it is derived from parabolic approximation.

---

# Appendix L: Taylor Approximation Reference

## L.1 Taylor Polynomial

The \( n \)-th degree Taylor polynomial of \( f \) centered at \( a \):

\[
T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k
\]

## L.2 Maclaurin Polynomials (Taylor at \( a = 0 \))

\[
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + R_n(x)
\]

\[
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots + \frac{(-1)^n x^{2n+1}}{(2n+1)!} + R_{2n+2}(x)
\]

\[
\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots + \frac{(-1)^n x^{2n}}{(2n)!} + R_{2n+1}(x)
\]

\[
\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots, \quad |x| < 1
\]

\[
\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots, \quad |x| < 1
\]

## L.3 Taylor Remainder (Lagrange Form)

\[
R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}
\]

for some \( c \) between \( a \) and \( x \).

**Remainder bound:**

\[
|R_n(x)| \leq \frac{M}{(n+1)!}|x-a|^{n+1}, \quad M = \max_{t \text{ between } a \text{ and } x} |f^{(n+1)}(t)|
\]

## L.4 Using Taylor Approximations in Computation

Taylor polynomials are the foundation of many numerical algorithms. Finite difference formulas are derived by writing Taylor expansions of \( f(x+h) \) and \( f(x-h) \) and combining them to isolate a derivative term. ODE error analysis uses Taylor expansion of the solution \( y(t+h) \) to derive local truncation error expressions. Function evaluation routines in scientific computing libraries often use polynomial approximations based on Taylor or Chebyshev series.

---

# Appendix M: Numerical Linear Algebra Reference

## M.1 Gaussian Elimination

Gaussian elimination reduces \( \mathbf{A}\mathbf{x} = \mathbf{b} \) to upper triangular form using row operations, then solves by back-substitution.

**Algorithm:**

```
Form augmented matrix [A | b]
for pivot column k = 1 to n-1 do
    for row i = k+1 to n do
        factor ← A[i,k] / A[k,k]
        row i ← row i - factor * row k
    end for
end for
Back-substitute to find x[n], x[n-1], ..., x[1]
```

**Partial pivoting:** Before eliminating column \( k \), swap row \( k \) with the row having the largest \( |A[i,k]| \) for \( i \geq k \). This reduces roundoff error.

## M.2 LU Decomposition

If \( \mathbf{A} = \mathbf{L}\mathbf{U} \) where \( \mathbf{L} \) is lower triangular (with ones on the diagonal) and \( \mathbf{U} \) is upper triangular, then \( \mathbf{A}\mathbf{x} = \mathbf{b} \) is solved in two steps:

1. Solve \( \mathbf{L}\mathbf{y} = \mathbf{b} \) by forward substitution.
2. Solve \( \mathbf{U}\mathbf{x} = \mathbf{y} \) by back substitution.

LU decomposition is valuable when the same coefficient matrix \( \mathbf{A} \) must be solved with many different right-hand sides \( \mathbf{b} \).

## M.3 Condition Number

The **condition number** of a matrix \( \mathbf{A} \) is:

\[
\kappa(\mathbf{A}) = \|\mathbf{A}\| \cdot \|\mathbf{A}^{-1}\|
\]

A large condition number (much greater than 1) indicates a **poorly conditioned** system: small changes in \( \mathbf{b} \) cause large changes in the solution \( \mathbf{x} \). The relative error in the computed solution satisfies approximately:

\[
\frac{\|\mathbf{x} - \hat{\mathbf{x}}\|}{\|\mathbf{x}\|} \lesssim \kappa(\mathbf{A}) \cdot \frac{\|\mathbf{b} - \hat{\mathbf{b}}\|}{\|\mathbf{b}\|}
\]

## M.4 Jacobi and Gauss-Seidel Iteration

For a diagonally dominant system, iterative methods may converge faster than direct methods for large sparse systems.

**Jacobi:** Update all components of \( \mathbf{x} \) simultaneously using values from the previous iteration.

**Gauss-Seidel:** Update each component immediately, using the most recently computed values within the same iteration.

Both methods converge if \( \mathbf{A} \) is strictly diagonally dominant.

---

# Appendix N: Eigenvalue Method Reference

## N.1 Power Method

**Purpose:** Approximate the dominant eigenvalue (largest in absolute value) and its eigenvector.

**Algorithm:**

```
Start with initial vector v (not orthogonal to dominant eigenvector)
repeat
    w ← A * v
    lambda ← max component of w (or norm of w)
    v ← w / lambda
until change in lambda < tolerance
return lambda, v
```

**Convergence:** Linear, with rate \( |\lambda_2 / \lambda_1| \), where \( \lambda_1 \) is the dominant eigenvalue and \( \lambda_2 \) is the second largest.

**Fails when:** The two largest eigenvalues are equal in magnitude.

## N.2 Inverse Iteration

**Purpose:** Approximate the smallest eigenvalue by applying the power method to \( \mathbf{A}^{-1} \).

**Iteration:** Solve \( \mathbf{A}\mathbf{w} = \mathbf{v} \) at each step, then normalize.

## N.3 Shifted Inverse Iteration

**Purpose:** Approximate the eigenvalue nearest to a given shift \( \mu \).

**Iteration:** Apply inverse iteration to \( (\mathbf{A} - \mu \mathbf{I})^{-1} \). This requires solving \( (\mathbf{A} - \mu \mathbf{I})\mathbf{w} = \mathbf{v} \) at each step.

## N.4 QR Method (Preview)

The QR iteration decomposes \( \mathbf{A} = \mathbf{Q}\mathbf{R} \) (orthogonal times upper triangular) and forms \( \mathbf{A}_{\text{new}} = \mathbf{R}\mathbf{Q} \). Repeated iterations drive \( \mathbf{A} \) toward upper triangular form whose diagonal entries converge to eigenvalues. The QR algorithm is the basis of most professional eigenvalue solvers. Full treatment belongs to a course in numerical linear algebra.

---

# Appendix O: Numerical Optimization Reference

## O.1 One-Dimensional Methods

**Golden Section Search:** Narrows the interval \( [a, b] \) containing a minimum by evaluating the function at two interior points placed at the golden ratio. Requires only function values, no derivative.

**Newton's Method for Optimization:** Applied to minimize \( f(x) \) by finding a zero of \( f'(x) \):

\[
x_{n+1} = x_n - \frac{f'(x_n)}{f''(x_n)}
\]

Converges quadratically near a minimum. Requires \( f''(x_n) \neq 0 \) and \( f''(x_n) > 0 \) (to ensure a minimum, not maximum).

## O.2 Gradient Descent

For a multivariable function \( F(\mathbf{x}) \):

\[
\mathbf{x}_{n+1} = \mathbf{x}_n - \alpha \nabla F(\mathbf{x}_n)
\]

where \( \alpha > 0 \) is the **step size** (or learning rate). The gradient \( \nabla F \) points in the direction of steepest ascent; subtracting it moves toward a minimum.

**Convergence:** Depends on the choice of \( \alpha \) and the curvature of \( F \). Too large an \( \alpha \) causes divergence; too small causes slow convergence.

## O.3 Stopping Criteria for Optimization

- \( |x_{n+1} - x_n| < \epsilon \) (step size small)
- \( |f(x_{n+1}) - f(x_n)| < \epsilon \) (function value change small)
- \( |f'(x_n)| < \epsilon \) (gradient nearly zero)

All three should be checked together in practice.

## O.4 Local vs. Global Optima

Gradient descent and Newton's method find **local** optima. Global optimization requires either exhaustive search, multiple starting points, or specialized methods (simulated annealing, genetic algorithms, branch and bound) that lie beyond the scope of this textbook.

---

# Appendix P: Numerical ODE Solver Reference

## P.1 Initial Value Problem Setup

\[
y' = f(t, y), \quad y(t_0) = y_0, \quad t \in [t_0, T]
\]

Step size: \( h = (T - t_0)/N \), so that \( t_k = t_0 + kh \).

## P.2 Euler's Method

\[
y_{k+1} = y_k + h\, f(t_k, y_k)
\]

Local truncation error: \( O(h^2) \). Global error: \( O(h) \).

## P.3 Improved Euler Method (Heun's Method)

**Predictor:**

\[
\tilde{y}_{k+1} = y_k + h\, f(t_k, y_k)
\]

**Corrector:**

\[
y_{k+1} = y_k + \frac{h}{2}\left[f(t_k, y_k) + f(t_{k+1}, \tilde{y}_{k+1})\right]
\]

Global error: \( O(h^2) \).

## P.4 Fourth-Order Runge-Kutta (RK4)

\[
k_1 = f(t_k,\, y_k)
\]

\[
k_2 = f\!\left(t_k + \tfrac{h}{2},\, y_k + \tfrac{h}{2}k_1\right)
\]

\[
k_3 = f\!\left(t_k + \tfrac{h}{2},\, y_k + \tfrac{h}{2}k_2\right)
\]

\[
k_4 = f(t_k + h,\, y_k + h\,k_3)
\]

\[
y_{k+1} = y_k + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)
\]

Global error: \( O(h^4) \). RK4 is the standard workhorse for non-stiff ODEs.

## P.5 Stiff Equations

A **stiff** ODE has solutions containing rapidly decaying transients alongside slowly evolving components. Explicit methods (Euler, RK4) require extremely small step sizes to remain stable for stiff problems. **Implicit methods** (backward Euler, Crank-Nicolson, implicit Runge-Kutta) solve a nonlinear equation at each step but allow much larger step sizes for stiff problems. Professional ODE solvers (such as those found in scientific computing environments) detect stiffness and switch methods automatically.

## P.6 Systems of ODEs

A system of \( m \) first-order ODEs is written as:

\[
\mathbf{y}' = \mathbf{f}(t, \mathbf{y}), \quad \mathbf{y}(t_0) = \mathbf{y}_0
\]

where \( \mathbf{y} \in \mathbb{R}^m \). All methods extend to systems by replacing scalar \( y_k \) with vector \( \mathbf{y}_k \) and scalar \( f \) with the vector-valued function \( \mathbf{f} \).

---

# Appendix Q: Numerical PDE Preview Reference

## Q.1 Finite Difference Approximation on a Grid

A one-dimensional grid on \( [0, L] \) with \( M \) interior points uses spacing \( \Delta x = L/(M+1) \) and grid nodes \( x_i = i\, \Delta x \) for \( i = 0, 1, \ldots, M+1 \). The function value at node \( i \) is approximated as \( U_i \approx u(x_i) \).

Second derivative approximation:

\[
\frac{\partial^2 u}{\partial x^2}\bigg|_{x_i} \approx \frac{U_{i-1} - 2U_i + U_{i+1}}{(\Delta x)^2}
\]

## Q.2 Heat Equation (Forward Difference / FTCS)

\[
\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}
\]

Discretized with time step \( \Delta t \) and spatial step \( \Delta x \):

\[
U_i^{n+1} = U_i^n + r(U_{i-1}^n - 2U_i^n + U_{i+1}^n), \quad r = \frac{\alpha\, \Delta t}{(\Delta x)^2}
\]

**Stability condition (von Neumann):** \( r \leq \dfrac{1}{2} \). If \( r > 1/2 \), the scheme is unstable and errors grow catastrophically.

## Q.3 Laplace Equation (Steady-State)

\[
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
\]

On a two-dimensional grid with equal spacing \( h \):

\[
U_{i+1,j} + U_{i-1,j} + U_{i,j+1} + U_{i,j-1} - 4U_{i,j} = 0
\]

The resulting linear system is solved iteratively using Jacobi, Gauss-Seidel, or successive over-relaxation (SOR).

## Q.4 Wave Equation

\[
\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}
\]

Explicit finite difference:

\[
U_i^{n+1} = 2U_i^n - U_i^{n-1} + s^2(U_{i+1}^n - 2U_i^n + U_{i-1}^n), \quad s = \frac{c\,\Delta t}{\Delta x}
\]

**CFL condition (stability):** \( s \leq 1 \).

## Q.5 Boundary Conditions

- **Dirichlet:** The solution value is prescribed at the boundary. \( U_0 = g(t) \).
- **Neumann:** The derivative (flux) is prescribed at the boundary. Approximated using a one-sided finite difference.
- **Periodic:** The solution wraps around: \( U_0 = U_M \).

---

# Appendix R: Scientific Computing Technology Guide

## R.1 Choosing a Computing Environment

Numerical methods are implemented in a variety of programming environments. The choice depends on the application, available tools, team norms, and performance requirements.

**Python (with NumPy, SciPy, Matplotlib):** A readable, general-purpose language with extensive numerical and scientific libraries. Recommended for students new to scientific computing. SciPy provides functions for root-finding, integration, ODE solving, linear algebra, optimization, and more. Matplotlib provides visualization.

**MATLAB:** A commercial environment widely used in engineering and applied mathematics. Syntax is matrix-oriented and concise. Many universities provide student licenses. Comparable open-source alternative: GNU Octave.

**Julia:** A high-performance language designed for scientific computing, combining ease of use with speed approaching compiled languages. Growing in use in research and numerical analysis.

**R:** Primarily a statistical computing environment, but capable of numerical methods through packages such as `pracma` (practical math) and `deSolve` (ODE solvers).

**C and Fortran:** Used when performance is critical. Most high-performance numerical libraries (BLAS, LAPACK, FFTW) are written in C or Fortran and called from higher-level languages.

## R.2 Key Software Libraries

| Library | Language | Purpose |
|---|---|---|
| NumPy | Python | Array operations, linear algebra |
| SciPy | Python | Optimization, integration, ODE, interpolation |
| Matplotlib | Python | 2D and 3D visualization |
| SymPy | Python | Symbolic mathematics |
| LAPACK | Fortran/C | Dense linear algebra |
| BLAS | Fortran/C | Basic linear algebra subroutines |
| PETSc | C | Parallel sparse linear algebra and PDE solvers |
| GSL | C | GNU Scientific Library |

## R.3 Verification and Validation

**Verification** asks whether the algorithm was implemented correctly: does the code produce the correct result for test cases with known answers?

**Validation** asks whether the mathematical model represents the physical system correctly: does the numerical solution match experimental or observational data?

Both are essential. A correctly implemented algorithm applied to the wrong model produces wrong answers reliably.

## R.4 Reproducibility

Scientific computing requires reproducibility. To make numerical results reproducible:

- Record the version of every library and software tool used.
- Fix random seeds when stochastic algorithms are used.
- Save input data and parameter settings.
- Store all intermediate results when possible.
- Provide runnable code alongside published results.

## R.5 Visualization Best Practices

- Label all axes with variable name and units.
- Include a title that describes what is being shown.
- Use a legend when multiple curves appear on one plot.
- Show error bounds when available.
- Use logarithmic axes when displaying quantities that vary over several orders of magnitude.
- Never omit the scale.

---

# Appendix S: Capstone Project Rubric

The capstone project described in Chapter 14 asks students to select a numerical problem, choose an appropriate method, implement the algorithm, estimate and discuss error, and present results clearly. The following rubric guides both student self-assessment and instructor evaluation.

## S.1 Rubric Categories

**Problem Formulation (20 points)**

| Score | Description |
|---|---|
| 18–20 | Problem is clearly stated with all relevant parameters, domain, and boundary or initial conditions. The mathematical formulation is precise and complete. |
| 14–17 | Problem is adequately stated. Minor details are missing or imprecise. |
| 10–13 | Problem statement is incomplete or ambiguous. Some parameters or conditions are missing. |
| Below 10 | Problem is not clearly formulated. It is unclear what is being computed or why. |

**Method Selection and Justification (20 points)**

| Score | Description |
|---|---|
| 18–20 | Method choice is justified by comparing alternatives, discussing applicability conditions, expected convergence, and computational cost. |
| 14–17 | Method is appropriate. Justification is partial. |
| 10–13 | Method is chosen with little or no justification. |
| Below 10 | Method is inappropriate for the problem or not clearly stated. |

**Implementation (20 points)**

| Score | Description |
|---|---|
| 18–20 | Algorithm is implemented correctly and completely. Stopping criteria are clearly defined. Results are organized in a readable table or equivalent. |
| 14–17 | Algorithm is largely correct with minor errors. Results are presented. |
| 10–13 | Algorithm has significant errors or is incomplete. |
| Below 10 | Implementation is missing or substantially incorrect. |

**Error Analysis (20 points)**

| Score | Description |
|---|---|
| 18–20 | Error is estimated using a formal bound, Richardson extrapolation, or comparison to a reference solution. Convergence behavior is described. |
| 14–17 | Error is discussed qualitatively with some quantitative evidence. |
| 10–13 | Error is mentioned but not estimated or analyzed. |
| Below 10 | No discussion of error. |

**Communication and Presentation (20 points)**

| Score | Description |
|---|---|
| 18–20 | Results are clearly presented with graphs, tables, and explanatory text. Conclusions are stated in context. Uncertainty is acknowledged. |
| 14–17 | Results are presented adequately. Minor clarity issues. |
| 10–13 | Presentation is difficult to follow. Results are shown without interpretation. |
| Below 10 | Results are missing, disorganized, or uninterpretable. |

## S.2 Capstone Project Checklist

Students should verify the following before submitting:

- [ ] The mathematical problem is written down precisely, not just described in words.
- [ ] The chosen numerical method is named, stated algorithmically, and justified.
- [ ] The implementation (code or worked computation) is included.
- [ ] A convergence table or error estimate is included.
- [ ] Results are visualized or tabulated.
- [ ] Conclusions are stated in context: what does the numerical answer mean for the original problem?
- [ ] Sources of error are identified: truncation, roundoff, model error.
- [ ] Limitations of the method are acknowledged.
- [ ] The report is legible, organized, and complete.

---

# Appendix T: Advanced Numerical Analysis and Scientific Computing Readiness Check

This appendix helps students assess their readiness to continue from this textbook into advanced numerical analysis, scientific computing, computational mathematics, or related applied fields.

## T.1 Core Competencies

Students who have completed this textbook should be able to do the following. Rate your confidence: **Strong**, **Developing**, or **Needs Review**.

**Error and floating-point awareness**
- [ ] Define absolute error, relative error, and percent error.
- [ ] Explain machine epsilon and its significance.
- [ ] Identify conditions that cause loss of significance.
- [ ] Distinguish truncation error from roundoff error.
- [ ] Explain what conditioning means for a mathematical problem.

**Root-finding**
- [ ] Implement bisection and explain its guaranteed error bound.
- [ ] Apply Newton's method and predict its convergence rate.
- [ ] Recognize when Newton's method may fail.
- [ ] Compare bisection, Newton, secant, and fixed-point methods.

**Interpolation and approximation**
- [ ] Construct a Lagrange interpolating polynomial for small data sets.
- [ ] Build a Newton divided difference table.
- [ ] Estimate interpolation error using the standard bound.
- [ ] Explain Runge's phenomenon and how to avoid it.
- [ ] Explain the difference between interpolation and least squares fitting.

**Numerical calculus**
- [ ] Derive the forward, backward, and central difference formulas from Taylor series.
- [ ] Explain the step size tradeoff in numerical differentiation.
- [ ] Apply the trapezoidal rule and Simpson's rule to approximate definite integrals.
- [ ] Estimate integration error using the standard bounds.
- [ ] Construct and bound a Taylor polynomial approximation.

**Numerical linear algebra**
- [ ] Perform Gaussian elimination with partial pivoting.
- [ ] Explain what LU decomposition accomplishes.
- [ ] Interpret the condition number of a matrix.
- [ ] Carry out one or two iterations of the Jacobi or Gauss-Seidel method.
- [ ] Apply the power method to approximate the dominant eigenvalue.

**Optimization**
- [ ] Identify an objective function and explain what minimizing it means.
- [ ] Apply gradient descent with a fixed step size.
- [ ] Explain the difference between local and global optima.
- [ ] Apply Newton's method to a one-dimensional optimization problem.

**ODE and PDE solvers**
- [ ] Apply Euler's method to an initial value problem.
- [ ] Apply RK4 to an initial value problem.
- [ ] Explain the difference between local and global truncation error.
- [ ] Discretize the heat equation on a one-dimensional grid.
- [ ] State the stability condition for the explicit heat equation method.

**Scientific computing practice**
- [ ] Explain what reproducibility means in numerical computing.
- [ ] List three things that should be documented in a numerical study.
- [ ] Describe what verification and validation mean.
- [ ] Present numerical results with appropriate axis labels and error estimates.

## T.2 Recommended Next Steps

Students who have completed this textbook are prepared to study:

**Numerical Analysis** — a rigorous treatment of approximation theory, convergence proofs, functional analysis background, and advanced algorithms for integration, linear algebra, and differential equations. Standard texts include Burden & Faires *Numerical Analysis* and Trefethen & Bau *Numerical Linear Algebra*.

**Scientific Computing** — emphasizes implementation, performance, parallel computation, and large-scale systems. Students learn to use high-performance computing environments and numerical libraries at scale.

**Computational Physics** — applies numerical ODE and PDE methods to mechanics, electromagnetism, quantum mechanics, fluid dynamics, and thermodynamics.

**Computational Mathematics and Applied Mathematics** — develops deeper theory of optimization, inverse problems, data assimilation, stochastic simulation, and mathematical modeling.

**Data Science and Machine Learning** — gradient descent, optimization, least squares, and linear algebra underlie the numerical machinery of model training, regularization, dimensionality reduction, and prediction.

**Financial Mathematics and Quantitative Finance** — numerical integration, Monte Carlo simulation, PDE methods for option pricing, and optimization are core tools in quantitative finance.

**Operations Research** — optimization methods, including linear programming, integer programming, network flows, and stochastic optimization.

---

# Glossary

This glossary defines the key terms used throughout *Numerical Methods* in the MGU Mathematics Series. Page references will be added in the final print edition. Terms appear alphabetically.

**Absolute error** — The magnitude of the difference between the true value and an approximation: \( |p - p^*| \).

**Adaptive integration** — A numerical integration strategy that automatically refines the subdivision of the interval in regions where the integrand changes rapidly, concentrating computational effort where it is most needed.

**Algorithm** — A finite, ordered sequence of well-defined instructions that takes specified inputs, performs computations, and produces an output or approximation.

**Back-substitution** — The process of solving an upper triangular linear system by starting with the last equation and working upward, substituting already-known values.

**Bisection method** — A bracketing root-finding method that halves the interval containing a root at each step, exploiting a sign change of the function.

**Boundary condition** — A constraint specifying the value or derivative of a function at the boundary of its domain. Essential for uniquely specifying solutions to boundary value problems and PDEs.

**Bracketing method** — A root-finding method that maintains an interval guaranteed to contain a root, typically by enforcing a sign change at the endpoints.

**Catastrophic cancellation** — See *loss of significance*.

**Central difference formula** — An approximation to \( f'(x) \) using \( f(x+h) \) and \( f(x-h) \), with error \( O(h^2) \). More accurate than forward or backward differences of the same step size.

**CFL condition** — The Courant-Friedrichs-Lewy stability condition for explicit PDE solvers: a constraint relating time step size and spatial grid spacing to ensure numerical stability.

**Composite rule** — A numerical integration rule applied over a partition of the interval into many subintervals, each treated by a simple rule (trapezoidal, Simpson's, etc.).

**Condition number** — A measure of the sensitivity of a mathematical problem's solution to perturbations in the data. A large condition number indicates an ill-conditioned problem.

**Convergence** — A sequence \( \{x_n\} \) converges to \( L \) if \( \lim_{n\to\infty} x_n = L \). In numerical methods, convergence describes whether successive approximations approach the true answer.

**Cubic spline** — A piecewise cubic polynomial that interpolates given data points while satisfying smoothness conditions (continuity of function, first derivative, and second derivative) across each junction.

**Curve fitting** — Finding a function from a specified family (linear, polynomial, exponential, etc.) that approximates a data set in the least squares sense. Distinct from interpolation, which passes exactly through data points.

**Dirichlet boundary condition** — A boundary condition specifying the value of the solution at the boundary.

**Divided difference** — A recursive table of quotients used in Newton's interpolating polynomial. The \( k \)-th order divided difference approximates the \( k \)-th derivative of the underlying function.

**Dominant eigenvalue** — The eigenvalue of a matrix that is largest in absolute value. The power method converges to the dominant eigenvalue.

**Euler's method** — The simplest explicit numerical method for solving initial value problems: \( y_{n+1} = y_n + h f(t_n, y_n) \). Has global error \( O(h) \).

**Finite difference** — An approximation to a derivative using values of the function at a discrete set of points. Examples include forward, backward, and central differences.

**Fixed-point iteration** — An iterative method that computes \( x_{n+1} = g(x_n) \), seeking a fixed point \( x^* \) where \( g(x^*) = x^* \). Converges if \( |g'(x^*)| < 1 \).

**Floating-point arithmetic** — Computer arithmetic using a finite-precision representation of real numbers. Introduces rounding errors in every arithmetic operation.

**Forward difference formula** — An approximation to \( f'(x) \) using \( f(x+h) \) and \( f(x) \), with error \( O(h) \).

**Gauss-Seidel method** — An iterative method for solving linear systems that updates each component of the solution using the most recently computed values. Often converges faster than Jacobi iteration.

**Gaussian elimination** — A direct method for solving linear systems by systematically applying row operations to reduce the augmented matrix to upper triangular form.

**Global error** — The cumulative error in a numerical ODE solver after many steps. Distinguished from local truncation error, which is the error in a single step.

**Gradient descent** — An iterative optimization algorithm that updates the current point by subtracting a multiple of the gradient: \( \mathbf{x}_{n+1} = \mathbf{x}_n - \alpha \nabla F(\mathbf{x}_n) \).

**Grid** — A discrete set of points in one or more spatial dimensions used to discretize a PDE domain. Also called a mesh.

**Heat equation** — The PDE \( u_t = \alpha u_{xx} \) modeling diffusion of heat (or any diffusing quantity) in one spatial dimension.

**IEEE 754** — The international standard for floating-point arithmetic used by virtually all modern computers. Defines double-precision (64-bit) representation with about 15–17 significant decimal digits.

**Ill-conditioned** — A problem or matrix is ill-conditioned when small perturbations in the input produce large changes in the output. Quantified by a large condition number.

**Initial value problem (IVP)** — An ODE together with initial conditions specifying the solution at a starting point: \( y' = f(t,y) \), \( y(t_0) = y_0 \).

**Interpolation** — The construction of a function that passes exactly through a given set of data points. Distinct from approximation or regression, which allow the function to miss data points.

**Iteration** — The repeated application of a formula or algorithm, using the output of each step as the input for the next.

**Jacobi method** — An iterative method for solving linear systems in which all components of the solution are updated simultaneously using values from the previous iteration.

**Lagrange interpolating polynomial** — The unique polynomial of degree at most \( n \) passing through \( n+1 \) data points, written as a sum of Lagrange basis polynomials.

**Laplace equation** — The PDE \( u_{xx} + u_{yy} = 0 \) describing steady-state temperature distributions, electrostatic potentials, and other physical equilibria.

**Least squares** — A criterion for fitting a model to data by minimizing the sum of squared residuals. Produces the best fit in the \( L^2 \) sense.

**Linear convergence** — Convergence where the error decreases by a constant factor at each step: \( |e_{n+1}| \leq C|e_n| \) with \( C < 1 \).

**Linear interpolation** — Connecting two data points with a straight line and reading off values between them.

**Linear spline** — A piecewise linear interpolant: a sequence of straight-line segments connecting consecutive data points.

**Local truncation error (LTE)** — The error introduced in a single step of a numerical ODE solver, assuming exact values at the start of the step.

**Loss of significance** — The catastrophic reduction in significant digits that occurs when two nearly equal numbers are subtracted. Also called catastrophic cancellation.

**LU decomposition** — The factorization \( \mathbf{A} = \mathbf{L}\mathbf{U} \) of a matrix into a lower triangular factor and an upper triangular factor, used to solve linear systems efficiently.

**Machine epsilon** — The smallest positive floating-point number \( \epsilon \) such that \( 1 + \epsilon \neq 1 \) in floating-point arithmetic. Approximately \( 2.22 \times 10^{-16} \) for IEEE 754 double precision.

**Maclaurin polynomial** — A Taylor polynomial centered at \( a = 0 \).

**Matrix norm** — A measure of the "size" of a matrix, used to quantify errors and condition numbers. Common norms include the 1-norm, 2-norm, and infinity-norm.

**Mesh** — See *grid*.

**Midpoint rule** — A numerical integration rule that evaluates the integrand at the midpoint of each subinterval.

**Newton divided differences** — See *divided difference*.

**Newton's method** — An iterative root-finding method using the tangent line: \( x_{n+1} = x_n - f(x_n)/f'(x_n) \). Converges quadratically near a simple root.

**Newton's method for optimization** — An iterative method applying Newton's method to \( f'(x) = 0 \): \( x_{n+1} = x_n - f'(x_n)/f''(x_n) \).

**Neumann boundary condition** — A boundary condition specifying the derivative (flux) of the solution at the boundary.

**Normal equations** — The linear system \( \mathbf{A}^T\mathbf{A}\mathbf{c} = \mathbf{A}^T\mathbf{y} \) whose solution gives the least squares fit coefficients.

**Numerical analysis** — The mathematical study of algorithms for continuous mathematics, including questions of convergence, stability, error analysis, and computational complexity. The graduate-level extension of numerical methods.

**Numerical differentiation** — The estimation of derivatives from function values using finite difference formulas.

**Numerical integration** — The approximation of definite integrals using finite sums. Also called numerical quadrature.

**Numerical stability** — The property of an algorithm that prevents small perturbations (from rounding or initial errors) from growing to dominate the computed result.

**Objective function** — In optimization, the function \( F(\mathbf{x}) \) whose minimum (or maximum) is sought.

**Overflow** — A floating-point error that occurs when a computed value exceeds the largest representable number.

**Overfitting** — Fitting a model with too many parameters to noisy data, producing a model that fits the training data closely but fails to generalize to new data.

**Partial pivoting** — A strategy in Gaussian elimination that swaps rows to place the largest available pivot element in the diagonal position, reducing roundoff error.

**Piecewise approximation** — A method of approximation that uses different formulas (polynomials, splines) on different subintervals of the domain.

**Pivoting** — See *partial pivoting*.

**Power method** — An iterative algorithm for approximating the dominant eigenvalue and eigenvector of a matrix.

**Pseudocode** — A language-neutral, readable description of an algorithm that specifies its logic without binding to a specific programming language.

**QR decomposition** — The factorization of a matrix \( \mathbf{A} = \mathbf{Q}\mathbf{R} \) into an orthogonal factor and an upper triangular factor. The basis of the QR algorithm for computing eigenvalues.

**Quadratic convergence** — Convergence where the error satisfies approximately \( |e_{n+1}| \leq C|e_n|^2 \). The number of correct digits roughly doubles at each step. Characteristic of Newton's method near a simple root.

**Relative error** — The absolute error divided by the magnitude of the true value: \( |p - p^*|/|p| \).

**Residual** — The difference between an observed value and the value predicted by a model: \( r_i = y_i - \phi(x_i) \).

**Root** — A value \( x^* \) such that \( f(x^*) = 0 \). Also called a zero of \( f \).

**Rounding error** — The error introduced when a real number is rounded to fit a finite floating-point representation.

**Runge-Kutta methods** — A family of explicit ODE solvers that use multiple function evaluations within each step to achieve higher-order accuracy. RK4 (fourth-order Runge-Kutta) is the most widely used.

**Runge's phenomenon** — The oscillation near the endpoints that can occur when approximating a smooth function by a high-degree polynomial at equally spaced nodes.

**Secant method** — A root-finding method using a finite difference approximation to the derivative: \( x_{n+1} = x_n - f(x_n)(x_n - x_{n-1})/(f(x_n) - f(x_{n-1})) \).

**Significant digits** — The number of meaningful decimal digits in a numerical approximation, starting from the first nonzero digit.

**Simpson's rule** — A numerical integration rule that approximates the integrand on each pair of subintervals by a parabola, giving exact results for polynomials up to degree 3.

**Spline** — A piecewise polynomial function with specified smoothness conditions at the junction points (knots).

**Stability** — See *numerical stability*. In ODE methods, also describes whether the method correctly tracks the decay of decaying solutions.

**Step size** — The spacing \( h \) between successive nodes or time steps in a numerical method. Choosing \( h \) too large causes accuracy problems; too small causes efficiency and roundoff problems.

**Stiff equation** — An ODE containing solution components that evolve on very different time scales, causing explicit methods to require extremely small step sizes to remain stable.

**Stopping criterion** — A condition tested at each iteration to decide when to stop the algorithm. Common criteria include absolute or relative change in the approximation, function value, gradient norm, or maximum number of iterations.

**Taylor polynomial** — A polynomial approximation to \( f(x) \) centered at \( a \), using the function's derivatives at that point.

**Taylor remainder** — The error in approximating \( f(x) \) by its \( n \)-th degree Taylor polynomial, bounded using the \( (n+1) \)-th derivative.

**Trapezoidal rule** — A numerical integration rule that approximates the integrand on each subinterval by a straight line, giving error \( O(h^2) \) per step.

**Truncation error** — The error caused by replacing an infinite mathematical process (a series, a limit, an integral) with a finite approximation.

**Underfitting** — Fitting a model with too few parameters to data, producing a model that cannot capture the underlying pattern.

**Underflow** — A floating-point error that occurs when a computed value is smaller in magnitude than the smallest representable nonzero number, causing the result to be rounded to zero.

**Validation** — The process of checking whether a numerical model correctly represents the physical or mathematical system it is meant to simulate.

**Verification** — The process of checking whether a numerical algorithm is implemented correctly, typically by testing against problems with known exact solutions.

**von Neumann stability analysis** — A method for determining the stability condition of finite difference schemes for PDEs by analyzing the growth of Fourier modes under the discretization.

**Wave equation** — The PDE \( u_{tt} = c^2 u_{xx} \) modeling wave propagation in one spatial dimension.

**Well-conditioned** — A problem is well-conditioned if small perturbations in the data produce proportionally small changes in the solution. Has a small condition number.

---

# Answer Key

The answer key for this textbook is organized by chapter and section. Full solutions for worked examples appear in the body of the text. This key provides answers and brief solution notes for the practice problems at the end of each chapter.

> **Note to students:** Numerical methods problems often admit several correct approaches, and numerical answers may differ slightly depending on rounding choices made during computation. If your answer agrees with the key to the number of significant digits specified in the problem, it is correct. If your numerical answer differs in later digits, recheck whether the discrepancy is due to rounding of intermediate results, different stopping criteria, or a different (but equally valid) iteration path.

> **Note to instructors:** This answer key provides final answers and selected intermediate steps for skill practice, computational, and application problems. Full worked solutions for error analysis and challenge problems are available in the Instructor's Manual, which may be requested through the MGU Library.

---

## Chapter 1 Answer Key

**Concept Review Questions**

1. Numerical methods provide approximations to mathematical answers when exact formulas are unavailable, computationally impractical, unstable, or too expensive to compute.

2. A *discrete* approximation to a *continuous* problem replaces values defined at every point (a function, an integral, a derivative) with values defined at a finite set of points (a table, a sum, a difference quotient).

3. An algorithm requires: a precisely stated set of inputs; a finite number of well-defined steps; a stopping criterion or termination condition; and a well-defined output.

4. Iteration produces a sequence of approximations. Convergence means the sequence approaches a limiting value. Without convergence, iteration does not produce a useful answer.

5. Numerical answers can mislead when errors are larger than the apparent precision of the output, when a poorly conditioned problem amplifies small errors, when the algorithm is applied outside its domain of validity, or when results are reported without uncertainty estimates.

**Exact-versus-Approximate Practice:** Answers will vary by problem. Students should identify which quantities have exact symbolic answers and which require approximation, and explain why.

**Iteration Practice:** Tables of iterated values should show convergence toward a limit. Students should note the rate at which the sequence stabilizes.

---

## Chapter 2 Answer Key

**Absolute and Relative Error Practice**

1a. Absolute error: \( |3.14159 - 3.14| = 0.00159 \). Relative error: \( 0.00159 / 3.14159 \approx 0.000506 \). Percent error: approximately \( 0.051\% \).

1b. Absolute error: \( |\sqrt{2} - 1.414| \approx 0.000214 \). Relative error: \( \approx 0.0001513 \). Percent error: \( \approx 0.015\% \).

2. Relative error is more informative when comparing approximations of quantities of very different magnitudes. An absolute error of 0.01 is negligible when the true value is 1000 but large when the true value is 0.01.

**Floating-Point Interpretation**

Students should recognize that \( 1 + 10^{-17} = 1 \) in IEEE 754 double precision because \( 10^{-17} < \epsilon_{\text{mach}} \approx 2.22 \times 10^{-16} \). This does not mean the two quantities are mathematically equal.

**Stability Questions:** Answers should explain whether errors in the given scenario grow (unstable) or remain bounded (stable) under iteration.

---

## Chapter 3 Answer Key

**Bisection Practice**

For a typical problem finding a root of \( f(x) = x^3 - x - 1 \) on \( [1, 2] \):

Step 1: \( m = 1.5 \). \( f(1.5) = 1.5^3 - 1.5 - 1 = 3.375 - 2.5 = 0.875 > 0 \). New bracket: \( [1, 1.5] \).

Step 2: \( m = 1.25 \). \( f(1.25) = 1.953125 - 1.25 - 1 = -0.296875 < 0 \). New bracket: \( [1.25, 1.5] \).

Step 3: \( m = 1.375 \). \( f(1.375) \approx 0.224609 > 0 \). New bracket: \( [1.25, 1.375] \).

The root (the real solution of \( x^3 - x - 1 = 0 \), the *plastic constant*) is approximately \( 1.3247 \).

**Error bound after \( n \) steps:** \( |p - p_n| \leq 1/2^n \) (starting from an interval of length 1).

**Newton's Method Practice:** Students should show the formula applied iteratively. For \( f(x) = x^3 - x - 1 \), \( f'(x) = 3x^2 - 1 \). Starting from \( x_0 = 1.5 \): \( x_1 = 1.5 - 0.875/5.75 \approx 1.3478 \). Continue until convergence.

---

## Chapters 4–14 Answer Key

*Answers for Chapters 4 through 14 follow the same structure: direct answers for concept questions, final numerical values for computation problems, and brief solution notes for error analysis problems. These will appear in the completed print edition and in the MGU Library digital instructor resources.*

*Selected answers are provided here for representative problems from each chapter.*

**Chapter 4 (Interpolation):** For Lagrange interpolation through \( (0, 1), (1, 2), (3, 0) \), the interpolating polynomial is:

\[
P(x) = 1 \cdot \frac{(x-1)(x-3)}{(0-1)(0-3)} + 2 \cdot \frac{(x-0)(x-3)}{(1-0)(1-3)} + 0 \cdot (\cdots) = \frac{x^2 - 4x + 3}{3} + \frac{-2x^2 + 6x}{2}
\]

Simplify to obtain \( P(x) \). Check: \( P(0) = 1 \), \( P(1) = 2 \), \( P(3) = 0 \). ✓

**Chapter 7 (Numerical Integration):** For \( \int_0^1 e^x\, dx = e - 1 \approx 1.71828 \), the trapezoidal rule with \( n = 4 \) gives:

\[
T_4 = \frac{0.25}{2}[e^0 + 2e^{0.25} + 2e^{0.5} + 2e^{0.75} + e^1] \approx 1.72722
\]

Absolute error: \( |1.72722 - 1.71828| \approx 0.00893 \).

**Chapter 12 (ODEs):** For \( y' = y \), \( y(0) = 1 \), \( h = 0.1 \), exact solution \( y(t) = e^t \):

| \( t \) | Euler \( y_n \) | Exact \( e^t \) | Error |
|---|---|---|---|
| 0.0 | 1.0000 | 1.0000 | 0 |
| 0.1 | 1.1000 | 1.1052 | 0.0052 |
| 0.2 | 1.2100 | 1.2214 | 0.0114 |
| 0.3 | 1.3310 | 1.3499 | 0.0189 |

Error grows as expected at \( O(h) \) rate.

---

# Index

The index below is organized alphabetically. Major entries list the chapter (Ch.) and section (§) where the concept is first introduced or most fully developed. Secondary entries list additional appearances.

*The full index with page numbers will be completed in the print edition. This preview index provides chapter and section references.*

---

**A**

Absolute error — Ch. 2, §2.2; Appendix E

Adaptive integration — Ch. 7, §7.10; Appendix K

Algorithm — Ch. 1, §1.4; Appendix D

Algorithm boxes — Throughout (see individual chapters)

Approximation — Ch. 1, §1.2; Ch. 4; Ch. 5; Ch. 8

**B**

Back-substitution — Ch. 9, §9.3; Appendix M

Backward difference formula — Ch. 6, §6.5; Appendix J

Bisection method — Ch. 3, §3.5; Appendix G

Boundary conditions (PDEs) — Ch. 13, §13.5; Appendix Q

Bracketing methods — Ch. 3, §3.4

**C**

Capstone project — Ch. 14, §14.11; Appendix S

Catastrophic cancellation — Ch. 2, §2.10; Appendix F

Central difference formula — Ch. 6, §6.6; Appendix J

CFL condition — Ch. 13, §13.7; Appendix Q

Composite rules (integration) — Ch. 7, §7.7; Appendix K

Condition number — Ch. 9, §9.8; Appendix M

Conditioning — Ch. 2, §2.12

Convergence — Ch. 1, §1.5; Ch. 3; Ch. 9; Ch. 10; Ch. 12

Cubic splines — Ch. 5, §5.5; Appendix I

Curve fitting — Ch. 5, §5.6; Appendix I

**D**

Dirichlet boundary condition — Ch. 13, §13.5; Appendix Q

Divided differences — Ch. 4, §4.6; Appendix H

Dominant eigenvalue — Ch. 10, §10.3; Appendix N

**E**

Eigenvalues — Ch. 10; Appendix N

Error analysis — Ch. 2; Appendix E

Error bounds — Ch. 2; Ch. 3, §3.6; Ch. 7, §7.9; Ch. 8, §8.7; Appendix E

Euler's method — Ch. 12, §12.3; Appendix P

**F**

Finite differences — Ch. 6; Ch. 13; Appendix J; Appendix Q

Fixed-point iteration — Ch. 3, §3.7; Appendix G

Floating-point arithmetic — Ch. 2, §2.8; Appendix F

Forward difference formula — Ch. 6, §6.4; Appendix J

**G**

Gauss-Seidel method — Ch. 9, §9.11; Appendix M

Gaussian elimination — Ch. 9, §9.3; Appendix M

Global error (ODE) — Ch. 12, §12.8; Appendix P

Gradient descent — Ch. 11, §11.7; Appendix O

Grid (PDE) — Ch. 13, §13.2; Appendix Q

**H**

Heat equation — Ch. 13, §13.6; Appendix Q

**I**

IEEE 754 — Ch. 2, §2.8; Appendix F

Initial value problem — Ch. 12, §12.2; Appendix P

Interpolation — Ch. 4; Appendix H

Iteration — Ch. 1, §1.5; Ch. 3

**J**

Jacobi method — Ch. 9, §9.10; Appendix M

**L**

Lagrange interpolating polynomial — Ch. 4, §4.5; Appendix H

Laplace equation — Ch. 13, §13.9; Appendix Q

Least squares — Ch. 5, §5.8; Appendix I

Linear convergence — Ch. 3, §3.7; Appendix G

Linear interpolation — Ch. 4, §4.3; Appendix H

Local truncation error — Ch. 12, §12.8; Appendix P

Loss of significance — Ch. 2, §2.10; Appendix F

LU decomposition — Ch. 9, §9.6; Appendix M

**M**

Machine epsilon — Ch. 2, §2.9; Appendix F

Maclaurin polynomials — Ch. 8, §8.5; Appendix L

Matrix norm — Ch. 9, §9.7; Appendix M

Midpoint rule — Ch. 7, §7.4; Appendix K

**N**

Neumann boundary condition — Ch. 13, §13.5; Appendix Q

Newton divided differences — Ch. 4, §4.6; Appendix H

Newton's method (root-finding) — Ch. 3, §3.8; Appendix G

Newton's method (optimization) — Ch. 11, §11.6; Appendix O

Normal equations — Ch. 5, §5.11; Appendix I

Numerical differentiation — Ch. 6; Appendix J

Numerical integration — Ch. 7; Appendix K

Numerical stability — Ch. 2, §2.13; Ch. 12, §12.9

**O**

Objective function — Ch. 11, §11.3; Appendix O

Optimization — Ch. 11; Appendix O

Overfitting — Ch. 5, §5.12

Overflow — Ch. 2, §2.8; Appendix F

**P**

Partial pivoting — Ch. 9, §9.4; Appendix M

Percent error — Ch. 2, §2.4; Appendix E

Piecewise approximation — Ch. 5, §5.2

Pivoting — Ch. 9, §9.4; Appendix M

Power method — Ch. 10, §10.4; Appendix N

Pseudocode — Appendix D; Throughout

**Q**

QR method (preview) — Ch. 10, §10.9; Appendix N

Quadratic convergence — Ch. 3, §3.8; Appendix G

**R**

Relative error — Ch. 2, §2.3; Appendix E

Residuals — Ch. 5, §5.7; Appendix I

Root-finding — Ch. 3; Appendix G

Rounding error — Ch. 2, §2.6; Appendix F

Runge-Kutta methods — Ch. 12, §12.5; Appendix P

Runge's phenomenon — Ch. 4, §4.9; Appendix H

**S**

Scientific computing — Ch. 14; Appendix R

Secant method — Ch. 3, §3.10; Appendix G

Significant digits — Ch. 2, §2.5; Appendix E

Simpson's rule — Ch. 7, §7.6; Appendix K

Splines — Ch. 5, §5.3–5.5; Appendix I

Stability — Ch. 2, §2.13; Ch. 12, §12.9; Ch. 13, §13.7; Appendix E

Step size — Ch. 6, §6.9; Ch. 12, §12.7

Stiff equations — Ch. 12, §12.11; Appendix P

Stopping criterion — Ch. 3, §3.11; Appendix D; Appendix G

**T**

Taylor polynomial — Ch. 8; Appendix L

Taylor remainder — Ch. 8, §8.7; Appendix L; Appendix E

Trapezoidal rule — Ch. 7, §7.5; Appendix K

Truncation error — Ch. 2, §2.7; Appendix E

**U**

Underfitting — Ch. 5, §5.12

Underflow — Ch. 2, §2.8; Appendix F

**V**

Validation — Ch. 14, §14.3; Appendix R

Verification — Ch. 14, §14.8; Appendix R

von Neumann stability analysis — Ch. 13, §13.7; Appendix Q

**W**

Wave equation — Ch. 13, §13.8; Appendix Q

Well-conditioned — Ch. 2, §2.12; Appendix M

---

# MGU Library Connections

This section identifies connections between *Numerical Methods* and other volumes, resource pages, and reference collections in the MGU Library. Students and instructors are encouraged to explore these connections as they progress through the course.

## Connected MGU Textbooks

**Calculus** (MGU Mathematics Series)
The prerequisite for this textbook. Limits, derivatives, integrals, Taylor series, and sequences are reviewed in Appendix A of this volume. Students who need a deeper review should consult the MGU *Calculus* volume directly, particularly its chapters on differentiation rules, the Fundamental Theorem of Calculus, Taylor's Theorem, and sequences and series.

**Linear Algebra** (MGU Mathematics Series)
Chapters 9 and 10 of this textbook draw directly on linear systems, matrix factorizations, eigenvalues, and norms. Students who want deeper treatment of Gaussian elimination, LU decomposition, eigenvalue theory, and iterative methods should consult the MGU *Linear Algebra* volume.

**Differential Equations** (MGU Mathematics Series)
Chapters 12 and 13 apply numerical methods to ODEs and PDEs. The MGU *Differential Equations* volume provides the symbolic theory (exact solutions, existence-uniqueness theorems, qualitative analysis) that complements the numerical treatment here.

**Probability and Statistics** (MGU Mathematics Series)
The least squares fitting in Chapter 5 connects directly to linear regression as studied in statistics. Students interested in data modeling, residual analysis, and model selection should consult the MGU *Probability and Statistics* volume.

**Discrete Mathematics** (MGU Mathematics Series)
Algorithms, pseudocode logic, recurrence relations, and the formal study of algorithm complexity connect numerical methods to discrete mathematics. The MGU *Discrete Mathematics* volume develops algorithm design and analysis.

**Computer Science Foundations** (MGU)
Floating-point arithmetic, algorithm implementation, computational complexity, and data structures are developed further in the MGU Computer Science sequence. Students planning to implement numerical algorithms in production code should consult these resources.

## MGU Library Reference Pages

The following MGU Library reference pages are directly connected to this textbook. These pages are available in the MGU digital library and may be updated as the library expands.

- **Error Analysis Reference Page** — definitions, formulas, and worked examples for absolute error, relative error, truncation error, rounding, and floating-point effects.
- **Root-Finding Algorithm Reference** — algorithm cards for bisection, Newton, secant, and fixed-point methods with pseudocode and convergence tables.
- **Interpolation Formula Reference** — Lagrange and Newton formulas with worked examples and error estimates.
- **Numerical Integration Formula Sheet** — trapezoidal, midpoint, and Simpson rules with composite forms and error bounds.
- **Numerical Differentiation Formula Sheet** — forward, backward, and central difference formulas with step size guidance.
- **Taylor Series Reference** — common Maclaurin series with remainder bounds.
- **Numerical Linear Algebra Reference** — Gaussian elimination, LU decomposition, condition number, and iterative method summaries.
- **Numerical ODE Solver Reference** — Euler, Heun, and RK4 formulas with local and global error orders.
- **Numerical PDE Reference** — finite difference stencils for heat, wave, and Laplace equations with stability conditions.
- **Scientific Computing Technology Guide** — language and library recommendations for Python, MATLAB, Julia, and R environments.
- **Capstone Project Guide and Rubric** — project description, rubric, and examples from the MGU capstone archive.

## MGU Dictionary Entries

The MGU Mathematics Dictionary contains entries for every key term in this textbook. Students who want a quick definition or conceptual clarification should search the dictionary. Important entries connected to this volume include:

*Algorithm, Approximation, Bisection, Condition number, Convergence, Divided difference, Eigenvalue, Error bound, Finite difference, Fixed-point iteration, Floating-point arithmetic, Gaussian elimination, Gradient descent, Ill-conditioned, Interpolation, Iterative method, Lagrange polynomial, Least squares, Linear convergence, Loss of significance, LU decomposition, Machine epsilon, Newton's method, Normal equations, Numerical differentiation, Numerical integration, Numerical stability, Quadratic convergence, Relative error, Runge's phenomenon, Secant method, Simpson's rule, Spline, Stiff ODE, Taylor polynomial, Trapezoidal rule, Truncation error, Well-conditioned.*

## Pathways Forward

Students who complete *Numerical Methods* in the MGU Mathematics Series are prepared to pursue any of the following directions in the MGU curriculum or in broader academic and professional study:

**Advanced Numerical Analysis** — A rigorous graduate-level treatment of approximation theory, spectral methods, advanced quadrature, and the functional analysis foundations of numerical algorithms.

**Scientific Computing** — Large-scale computation, parallel algorithms, high-performance computing environments, and numerical software development.

**Computational Physics and Engineering** — Application of ODE and PDE methods to fluid dynamics, structural mechanics, electromagnetic simulation, quantum chemistry, and systems modeling.

**Data Science and Machine Learning** — The numerical foundations of regression, optimization, dimensionality reduction, neural network training, and probabilistic modeling.

**Quantitative Finance** — Monte Carlo simulation, PDE methods for option pricing, numerical optimization of portfolios, and interest rate modeling.

**Operations Research** — Linear programming, integer programming, network optimization, and stochastic simulation.

**Applied Mathematics** — Inverse problems, control theory, optimal transport, numerical bifurcation analysis, and mathematical modeling across scientific disciplines.

---

> *Numerical Methods* is part of the MGU Mathematics Series Library Textbook Edition.
> © Malone Global University. All rights reserved.
> This edition is intended for use within the MGU Library and affiliated educational programs.
> Students and instructors with questions about this volume or its companion resources should contact the MGU Library through the official MGU portal.

---

*End of Back Matter*
