# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part II: Roots, Interpolation, and Approximation of Functions

---

# Chapter 3: Solving Nonlinear Equations Numerically

---

## Purpose

This chapter teaches numerical methods for finding roots of nonlinear equations. Many equations that arise naturally in science, engineering, economics, and mathematics cannot be solved by algebraic formulas. The quadratic formula solves degree-two polynomials, but there is no general formula for degree-five polynomials. There is no formula that isolates \( x \) in an equation like \( e^x = 3x \) or \( x \cos x = 1 \). For these problems, numerical root-finding methods create controlled sequences of approximations that converge to a solution.

Students will study four major methods in this chapter: the bisection method, fixed-point iteration, Newton's method, and the secant method. Each method approaches root-finding differently, and each carries its own trade-offs of reliability, speed, and required information. By the end of the chapter, students should understand not only how to apply these methods, but why they work, when they fail, and how to judge whether a numerical root is trustworthy.

---

## Opening Question

An engineer designing a cable suspension bridge needs to find the horizontal tension in a cable whose shape follows the equation

$$
\frac{T}{w} \cosh\!\left(\frac{wx}{T}\right) = H
$$

where \( T \) is the unknown tension, \( w \) is the weight per unit length, \( x \) is a horizontal distance, and \( H \) is a known height. This equation cannot be solved algebraically for \( T \). A formula does not exist. Yet the engineer must find \( T \) to design the bridge safely.

How does mathematics solve a problem like this?

The answer is iteration. Instead of finding an exact symbolic solution, a numerical method creates a sequence of better and better approximations. If the sequence converges, the approximations approach the true answer. The engineer accepts an approximation that is close enough within a specified tolerance. This is numerical root-finding.

---

## Why This Chapter Matters

Root-finding is one of the most fundamental computational tasks in mathematics. Every time a scientist, engineer, economist, or data analyst encounters a system where an equation has no closed-form solution, a root-finding algorithm is likely involved. The methods in this chapter are also the conceptual foundation for Newton's method in optimization, fixed-point methods in iterative linear algebra, and ODE solver stepping, all of which appear in later chapters.

Understanding root-finding also builds critical numerical thinking. Students will encounter convergence, divergence, stopping criteria, error bounds, and failure modes here for the first time in a structured algorithmic setting. These ideas will recur throughout the rest of the book.

---

## Learning Objectives

By the end of this chapter, students should be able to:

- Recognize a root-finding problem and distinguish it from a symbolic equation-solving problem.
- Explain the role of the Intermediate Value Theorem in bracketing methods.
- Apply the bisection method, compute error bounds, and determine the number of steps needed to achieve a given tolerance.
- Apply fixed-point iteration, recognize convergence conditions, and identify diverging cases.
- Apply Newton's method, interpret it geometrically, and identify cases where it fails.
- Apply the secant method and explain how it approximates Newton's method without requiring derivatives.
- Apply appropriate stopping criteria to terminate root-finding iterations.
- Compare root-finding methods by reliability, speed, and required information.
- Identify common mistakes in numerical root-finding and interpret reliability warnings.

---

## Key Terms

**Root** — A value \( x = r \) such that \( f(r) = 0 \).

**Zero of a function** — Another term for a root; the input at which the function output equals zero.

**Bracketing method** — A method that maintains an interval \([a, b]\) known to contain a root.

**Bisection method** — A bracketing method that halves the interval at each step.

**Fixed-point** — A value \( x \) such that \( g(x) = x \) for some function \( g \).

**Fixed-point iteration** — An iterative method that repeatedly applies a function \( g \) to approximate a fixed point.

**Newton's method** — An iterative method using tangent lines to approximate roots; also called the Newton–Raphson method.

**Secant method** — A root-finding method that approximates the derivative using two previous function values.

**Convergence** — The property that a sequence of approximations approaches a limiting value.

**Divergence** — The failure of a sequence to approach a limiting value.

**Stopping criterion** — A condition used to decide when iteration has produced a sufficiently accurate approximation.

**Absolute error** — The absolute value of the difference between the approximation and the true value, \( |p_n - r| \).

**Tolerance** — The acceptable magnitude of error in a numerical result.

**Order of convergence** — A measure of how quickly error decreases per iteration.

---

## 3.1 What a Root-Finding Problem Is

A root-finding problem begins with a function \( f \) and asks: for what input value \( r \) does \( f(r) = 0 \)?

This question is central to mathematics and its applications. Solving an equation like \( g(x) = h(x) \) is equivalent to finding the root of \( f(x) = g(x) - h(x) \). Finding where a curve crosses a horizontal level is a root problem. Computing equilibrium states, break-even points, resonance frequencies, and phase transitions all reduce to root problems.

When the function \( f \) is linear, the root is immediate: if \( f(x) = ax + b \), then \( r = -b/a \). When \( f \) is quadratic, the quadratic formula applies. But the quadratic formula does not generalize. For polynomials of degree five or higher, no general algebraic formula for the roots exists. This is a deep result in algebra called the Abel–Ruffini theorem. For transcendental functions like \( f(x) = e^x - 3x \) or \( f(x) = \cos x - x \), there is similarly no general algebraic procedure.

Numerical root-finding replaces the missing formula with a systematic approximation process. An algorithm generates a sequence of values \( p_0, p_1, p_2, \ldots \) that, under the right conditions, converges to a root \( r \). Each value is computable, and each is closer to \( r \) than the previous.

The numerical analyst's job is not simply to run the algorithm. It is to understand when the algorithm will converge, how fast it will converge, how much error remains at any step, and when it will fail.

---

## 3.2 Roots, Zeros, and Solutions

The terms **root**, **zero**, and **solution** are often used interchangeably in root-finding, but their usage reflects slightly different framings:

- A **zero** of \( f \) is a value \( r \) where \( f(r) = 0 \). This is function language.
- A **root** of the equation \( f(x) = 0 \) is a value \( r \) satisfying the equation. This is equation language.
- A **solution** of \( g(x) = h(x) \) is a value \( r \) satisfying the equation, which becomes a root of \( f(x) = g(x) - h(x) \).

These framings are equivalent in practice. Root-finding algorithms are designed to find zeros of \( f \).

An important subtlety: a root has a **multiplicity**. If \( f(x) = (x - r)^m \cdot q(x) \) where \( q(r) \neq 0 \), then \( r \) is a root of multiplicity \( m \). Simple roots (multiplicity 1) behave well under most numerical methods. Repeated roots (multiplicity greater than 1) create difficulties, as will be noted in later sections.

**Example 3.2.1.** The function \( f(x) = x^3 - 2x - 5 \) has a root near \( x = 2.09 \). Note that \( f(2) = 8 - 4 - 5 = -1 < 0 \) and \( f(3) = 27 - 6 - 5 = 16 > 0 \), so the root lies somewhere in \( (2, 3) \). Finding it exactly is not straightforward, but the sign change gives useful starting information.

---

## 3.3 Graphical Root Estimates

Before applying an algorithm, it helps to sketch or reason about the behavior of \( f \) near its roots. A graph can reveal:

- The approximate location of roots (where the curve crosses the \( x \)-axis).
- Whether roots are simple or repeated (the curve either crosses or touches the axis).
- Whether there are multiple roots in a region.
- Whether the function is well-behaved (smooth, slowly varying) or difficult (steep, oscillating, nearly tangent to the axis).

Graphical analysis is not a substitute for computation, but it is an essential first step. A numerical method that starts far from a root, or in a region with no root, can fail or converge to the wrong root.

**Diagram instruction:** Draw a smooth curve representing \( f(x) \) crossing the \( x \)-axis at approximately \( x = r \). The curve should be clearly negative to the left of \( r \) and positive to the right. Label \( r \) as the root. Also draw a second case where the curve is tangent to the axis (a repeated root), showing that it touches zero without crossing.

The Intermediate Value Theorem provides rigorous support for graphical intuition. Recall from calculus:

> **Intermediate Value Theorem.** If \( f \) is continuous on \( [a, b] \) and \( f(a) \) and \( f(b) \) have opposite signs, then there exists at least one \( c \in (a, b) \) such that \( f(c) = 0 \).

This theorem guarantees the existence of a root but does not locate it. Numerical methods provide the location.

**Student warning.** Graphical methods can miss roots that are close together, roots where the function nearly touches zero, or roots in regions not shown by the graph. Always supplement graphical analysis with analytical reasoning about the function's behavior.

---

## 3.4 Bracketing Methods

A bracketing method maintains an interval \([a, b]\) that is known to contain a root. The key requirement is the **bracket condition**: \( f(a) \) and \( f(b) \) must have opposite signs.

$$
f(a) \cdot f(b) < 0
$$

When this condition holds and \( f \) is continuous, the Intermediate Value Theorem guarantees a root in \( (a, b) \). The bracket is gradually narrowed, trapping the root in a smaller and smaller interval.

Bracketing methods are **reliable**: they always converge to a root as long as the initial bracket is valid and the function is continuous. They do not require derivative information. They cannot jump past the root or diverge.

The trade-off is speed. Bracketing methods generally converge more slowly than methods that use derivative information.

**Establishing an initial bracket.** Before applying a bracketing method, the analyst must find an interval \([a, b]\) where \( f(a) \) and \( f(b) \) have opposite signs. Strategies include:

- Evaluating \( f \) at a sequence of points to find a sign change.
- Using graphical estimates.
- Using physical knowledge of the problem to constrain likely root locations.

---

## 3.5 Bisection Method

The bisection method is the simplest and most reliable bracketing method. At each step, it evaluates \( f \) at the midpoint of the current bracket and replaces one endpoint with the midpoint, keeping the bracket condition satisfied.

**Algorithm: Bisection Method**

```
Algorithm: Bisection
Purpose: Find a root of f on [a, b] within tolerance tol
Inputs: Continuous function f, bracket [a, b] with f(a)*f(b) < 0, tolerance tol, maximum iterations N
Steps:
  1. Check that f(a) * f(b) < 0. If not, stop: no guaranteed root in [a, b].
  2. For n = 1, 2, ..., N:
       a. Compute midpoint: p = (a + b) / 2
       b. Compute f(p).
       c. If |b - a| / 2 < tol, or f(p) = 0: accept p as the root. Stop.
       d. If f(a) * f(p) < 0: set b = p.  (root is in left half)
          Else: set a = p.                (root is in right half)
  3. If maximum iterations reached, report best approximation p with a warning.
Stopping criterion: |b - a| / 2 < tol, or f(p) = 0
Output: Approximation p of the root
Reliability notes: Guaranteed to converge if f is continuous and initial bracket is valid.
                   Convergence is linear: each step halves the interval.
```

**Diagram instruction:** Draw a bracket \([a, b]\) on the \( x \)-axis with \( f(a) < 0 \) and \( f(b) > 0 \). Mark the midpoint \( p_1 \). Show that \( f(p_1) > 0 \), so the new bracket is \([a, p_1]\). Mark the new midpoint \( p_2 \). Continue for one more step to show the narrowing interval.

---

**Example 3.5.1.** Apply the bisection method to \( f(x) = x^3 - 2x - 5 \) on \([2, 3]\) with tolerance \( 0.01 \).

*Think.* We confirmed in Section 3.2 that \( f(2) = -1 < 0 \) and \( f(3) = 16 > 0 \). The bracket condition is satisfied.

*Method.* Bisection. Each step halves the interval. We continue until the interval width falls below 0.01.

*Compute.*

| Step | \( a \) | \( b \) | \( p \) | \( f(p) \) | New bracket |
|------|---------|---------|---------|------------|-------------|
| 1 | 2.000 | 3.000 | 2.500 | 5.625 | \([2.000, 2.500]\) |
| 2 | 2.000 | 2.500 | 2.250 | 1.891 | \([2.000, 2.250]\) |
| 3 | 2.000 | 2.250 | 2.125 | 0.346 | \([2.000, 2.125]\) |
| 4 | 2.000 | 2.125 | 2.063 | −0.351 | \([2.063, 2.125]\) |
| 5 | 2.063 | 2.125 | 2.094 | −0.009 | \([2.094, 2.125]\) |
| 6 | 2.094 | 2.125 | 2.109 | 0.167 | \([2.094, 2.109]\) |
| 7 | 2.094 | 2.109 | 2.102 | 0.079 | \([2.094, 2.102]\) |

At step 7, the interval width is \( 2.102 - 2.094 = 0.008 < 0.01 \). We accept \( p \approx 2.094 \).

*Check.* The true root is approximately \( r \approx 2.0946 \). Our approximation differs by about \( 0.0006 \), well within tolerance.

*Interpret.* The bisection method found the root of \( x^3 - 2x - 5 = 0 \) in the interval \( (2, 3) \) to within a tolerance of \( 0.01 \) in seven steps. The method narrowed a length-1 interval to length 0.008 by halving repeatedly.

---

## 3.6 Error Bounds for Bisection

One of bisection's most valuable properties is that the error bound at each step is known exactly, without knowing the true root.

After \( n \) steps, the root is guaranteed to lie within the \( n \)-th interval. The length of this interval is

$$
\frac{b - a}{2^n}
$$

where \( [a, b] \) is the original bracket. The midpoint \( p_n \) of this interval satisfies

$$
|p_n - r| \leq \frac{b - a}{2^n}
$$

This is the **bisection error bound**. It decreases by a factor of 2 at each step, which is called **linear convergence**.

**How many steps are needed?** If the desired tolerance is \( \varepsilon \), we need

$$
\frac{b - a}{2^n} < \varepsilon
$$

Solving for \( n \):

$$
2^n > \frac{b - a}{\varepsilon} \implies n > \log_2\!\left(\frac{b - a}{\varepsilon}\right)
$$

This gives the minimum number of bisection steps required before the guaranteed error is below \( \varepsilon \).

**Example 3.6.1.** For the interval \( [2, 3] \) and tolerance \( \varepsilon = 0.0001 \):

$$
n > \log_2\!\left(\frac{1}{0.0001}\right) = \log_2(10000) \approx 13.3
$$

So 14 steps are sufficient to guarantee error below \( 0.0001 \).

**Interpretation.** The bisection error bound is a guaranteed maximum error. In practice, the true error may be smaller. But the bound tells us we need at most 14 steps, and we can plan the computation accordingly without running the algorithm first to see whether it converges.

**Student note.** Linear convergence is slow compared to methods like Newton's, which converge quadratically. However, bisection never diverges when started with a valid bracket. For problems where safety is paramount and derivative information is unavailable, bisection is the method of choice.

---

## 3.7 Fixed-Point Iteration

A different approach to root-finding is to reformulate \( f(x) = 0 \) as a **fixed-point problem**: find \( x \) such that

$$
g(x) = x
$$

A value \( p \) satisfying \( g(p) = p \) is called a **fixed point** of \( g \). The connection to root-finding is direct: if we write \( g(x) = x - f(x) \), then \( g(p) = p \) exactly when \( f(p) = 0 \).

There are many ways to rewrite \( f(x) = 0 \) in the form \( g(x) = x \), and different rewritings produce different fixed-point iterations with very different convergence properties.

**Fixed-point iteration** starts from an initial guess \( p_0 \) and computes

$$
p_{n+1} = g(p_n)
$$

repeatedly. If the sequence \( p_0, p_1, p_2, \ldots \) converges to a value \( p \), and if \( g \) is continuous, then

$$
p = \lim_{n \to \infty} p_{n+1} = \lim_{n \to \infty} g(p_n) = g\!\left(\lim_{n \to \infty} p_n\right) = g(p)
$$

so \( p \) is a fixed point of \( g \), and therefore a root of \( f \).

**When does fixed-point iteration converge?**

The key condition involves the derivative of \( g \). If \( g \) is continuously differentiable and \( |g'(x)| < 1 \) for all \( x \) in an interval containing the fixed point \( p \), then fixed-point iteration converges for any starting point in that interval. This is a consequence of the **Contraction Mapping Theorem** (also called the Banach Fixed-Point Theorem).

Intuitively, \( |g'(x)| < 1 \) means the function \( g \) compresses distances: iterates get closer to the fixed point rather than spreading apart.

**Algorithm: Fixed-Point Iteration**

```
Algorithm: Fixed-Point Iteration
Purpose: Find a fixed point of g(x) = x, i.e., a root of f(x) = 0 rewritten as g(x) = x
Inputs: Function g, initial guess p_0, tolerance tol, maximum iterations N
Steps:
  1. For n = 0, 1, 2, ..., N-1:
       a. Compute p_{n+1} = g(p_n).
       b. If |p_{n+1} - p_n| < tol: accept p_{n+1} as the fixed point. Stop.
  2. If maximum iterations reached, report best approximation with a warning.
Stopping criterion: |p_{n+1} - p_n| < tol
Output: Approximation of fixed point p
Reliability notes: Converges when |g'(x)| < 1 near the fixed point.
                   May diverge or converge to wrong value if |g'(x)| >= 1.
                   The choice of g dramatically affects convergence.
```

---

**Example 3.7.1.** Find a root of \( f(x) = x^3 - 2x - 5 \) using fixed-point iteration.

*Think.* We need to rewrite \( f(x) = 0 \) as \( g(x) = x \). One approach: from \( x^3 = 2x + 5 \), divide both sides by \( x^2 \) (assuming \( x \neq 0 \)):

$$
x = \frac{2x + 5}{x^2} = g(x)
$$

Another approach: solve for \( x \) in \( x^3 = 2x + 5 \) by taking the cube root:

$$
x = (2x + 5)^{1/3} = g(x)
$$

Let us try \( g(x) = (2x + 5)^{1/3} \) with initial guess \( p_0 = 2 \).

*Method.* Fixed-point iteration with \( g(x) = (2x + 5)^{1/3} \).

*Check convergence condition first.* We compute \( g'(x) = \frac{2}{3}(2x + 5)^{-2/3} \). Near \( x \approx 2.09 \):

$$
g'(2.09) = \frac{2}{3}(4.18 + 5)^{-2/3} = \frac{2}{3}(9.18)^{-2/3} \approx \frac{2}{3}(0.228) \approx 0.152
$$

Since \( |g'(2.09)| \approx 0.152 < 1 \), convergence is expected.

*Compute.*

| \( n \) | \( p_n \) | \( g(p_n) \) | \( |p_{n+1} - p_n| \) |
|--------|----------|--------------|----------------------|
| 0 | 2.0000 | 2.0801 | 0.0801 |
| 1 | 2.0801 | 2.0924 | 0.0123 |
| 2 | 2.0924 | 2.0942 | 0.0018 |
| 3 | 2.0942 | 2.0945 | 0.0003 |
| 4 | 2.0945 | 2.0946 | 0.0001 |

*Check.* The accepted value \( p \approx 2.0946 \) matches the known root to four decimal places. The differences between successive iterates decreased by roughly a factor of 7 at each step, consistent with \( |g'| \approx 0.15 \).

*Interpret.* Fixed-point iteration converged to the root in four steps from \( p_0 = 2 \), faster than bisection. The convergence depended critically on choosing a \( g \) with small derivative near the root.

---

**Divergence example.** If we had chosen \( g(x) = \frac{2x + 5}{x^2} \), compute \( g'(x) = \frac{2x^2 - 2x(2x+5)}{x^4} = \frac{-2x - 10}{x^3} \). Near \( x = 2.09 \):

$$
g'(2.09) \approx \frac{-14.18}{9.13} \approx -1.55
$$

Since \( |g'(2.09)| \approx 1.55 > 1 \), this iteration would diverge from the root. The choice of rewriting matters enormously.

---

## 3.8 Newton's Method

Newton's method is one of the most important and widely used algorithms in all of numerical mathematics. It converges much faster than bisection or fixed-point iteration, typically requiring very few iterations to achieve high accuracy.

The idea comes directly from calculus. Near a root \( r \), the function \( f \) can be approximated by its tangent line at the current estimate \( p_n \):

$$
L(x) = f(p_n) + f'(p_n)(x - p_n)
$$

Setting \( L(x) = 0 \) and solving for \( x \) gives the next estimate:

$$
0 = f(p_n) + f'(p_n)(x - p_n)
$$

$$
x - p_n = -\frac{f(p_n)}{f'(p_n)}
$$

$$
p_{n+1} = p_n - \frac{f(p_n)}{f'(p_n)}
$$

This is the **Newton–Raphson formula**.

**Algorithm: Newton's Method**

```
Algorithm: Newton's Method (Newton–Raphson)
Purpose: Find a root of f(x) = 0
Inputs: Differentiable function f, derivative f', initial guess p_0, tolerance tol, maximum iterations N
Steps:
  1. For n = 0, 1, 2, ..., N-1:
       a. Compute f(p_n) and f'(p_n).
       b. If f'(p_n) = 0: stop. Derivative is zero; Newton's method cannot proceed.
       c. Compute p_{n+1} = p_n - f(p_n) / f'(p_n).
       d. If |p_{n+1} - p_n| < tol or |f(p_{n+1})| < tol: accept p_{n+1}. Stop.
  2. If maximum iterations reached, report best approximation with a warning.
Stopping criterion: |p_{n+1} - p_n| < tol or |f(p_{n+1})| < tol
Output: Approximation of root r
Reliability notes: Fast convergence (quadratic) near simple roots.
                   Requires f'(p_n) ≠ 0.
                   Starting point must be close enough to root.
                   Slow or fails at repeated roots. May cycle or diverge for bad starts.
```

---

**Example 3.8.1.** Apply Newton's method to \( f(x) = x^3 - 2x - 5 \) with \( p_0 = 2 \) and tolerance \( 0.0001 \).

*Think.* We need \( f'(x) = 3x^2 - 2 \). The Newton iteration is:

$$
p_{n+1} = p_n - \frac{p_n^3 - 2p_n - 5}{3p_n^2 - 2}
$$

*Method.* Newton–Raphson.

*Compute.*

| \( n \) | \( p_n \) | \( f(p_n) \) | \( f'(p_n) \) | \( p_{n+1} \) |
|--------|----------|--------------|----------------|----------------|
| 0 | 2.0000 | −1.0000 | 10.0000 | 2.1000 |
| 1 | 2.1000 | 0.2610 | 11.2300 | 2.0767 |
| 2 | 2.0767 | 0.0067 | 10.9339 | 2.0946 |
| 3 | 2.0946 | 0.0000 | 11.1577 | 2.0946 |

After three steps, \( p_3 \approx 2.0946 \) with \( |f(p_3)| < 10^{-7} \).

*Check.* The known root is \( r \approx 2.09455 \). Newton's method achieved four-decimal accuracy in three steps from \( p_0 = 2 \), compared to seven steps by bisection to achieve accuracy of only \( 0.01 \).

*Interpret.* Newton's method converged dramatically faster than bisection. Each step roughly doubled the number of correct decimal places. This is quadratic convergence.

---

## 3.9 Tangent Line Interpretation of Newton's Method

The geometric meaning of Newton's method is clear and elegant. At each step:

1. We are at the current estimate \( p_n \).
2. We draw the tangent line to \( y = f(x) \) at the point \( (p_n, f(p_n)) \).
3. We find where the tangent line crosses the \( x \)-axis.
4. That crossing point is the next estimate \( p_{n+1} \).

The tangent line is the best local linear approximation to \( f \). It points toward the root. If the curve is well-behaved and the starting point is close enough to the root, the tangent line crossing is much closer to the true root than the starting point.

**Diagram instruction:** Draw a smooth curve \( y = f(x) \) crossing the \( x \)-axis at \( r \). Choose a starting point \( p_0 \) to the right of \( r \) on the curve. Draw the tangent line at \( (p_0, f(p_0)) \). Mark where the tangent crosses the \( x \)-axis as \( p_1 \). Draw the tangent at \( (p_1, f(p_1)) \) and mark \( p_2 \). Show the iterates converging rapidly toward \( r \).

**Why Newton's method can fail.** The tangent line interpretation also reveals the failure modes:

- If \( f'(p_n) = 0 \), the tangent line is horizontal and never crosses the \( x \)-axis.
- If \( p_0 \) is far from the root, the tangent line may cross far away, leading to divergence or convergence to a different root.
- If the curve has an inflection point or oscillates rapidly, Newton's method can cycle or diverge.
- At a repeated root, where \( f(r) = 0 \) and \( f'(r) = 0 \), the convergence slows dramatically.

**Convergence rate.** Newton's method exhibits **quadratic convergence** near a simple root: there exists a constant \( C \) such that

$$
|p_{n+1} - r| \leq C \cdot |p_n - r|^2
$$

If the error at step \( n \) is \( 0.01 \), the error at step \( n+1 \) is roughly \( C \cdot 0.0001 \). Roughly speaking, each step doubles the number of correct decimal digits. This is extraordinarily fast compared to bisection's one additional binary digit per step.

---

## 3.10 Secant Method

Newton's method requires evaluating both \( f(p_n) \) and \( f'(p_n) \) at each step. In some applications, the derivative is difficult or expensive to compute. The function may be defined only at data points, not by an explicit formula.

The **secant method** approximates the derivative using two previous function values:

$$
f'(p_n) \approx \frac{f(p_n) - f(p_{n-1})}{p_n - p_{n-1}}
$$

Substituting into the Newton formula:

$$
p_{n+1} = p_n - f(p_n) \cdot \frac{p_n - p_{n-1}}{f(p_n) - f(p_{n-1})}
$$

The secant method requires two starting values, \( p_0 \) and \( p_1 \), rather than one starting value and a derivative formula.

**Diagram instruction:** Draw a smooth curve \( y = f(x) \). Choose two starting points \( (p_0, f(p_0)) \) and \( (p_1, f(p_1)) \) on the curve. Draw the secant line connecting them. Mark where the secant line crosses the \( x \)-axis as \( p_2 \). Then draw the secant line through \( (p_1, f(p_1)) \) and \( (p_2, f(p_2)) \) and mark \( p_3 \). Compare to Newton tangent lines to visualize the approximation.

**Algorithm: Secant Method**

```
Algorithm: Secant Method
Purpose: Find a root of f(x) = 0 without requiring f'
Inputs: Function f, two initial guesses p_0 and p_1, tolerance tol, maximum iterations N
Steps:
  1. For n = 1, 2, ..., N:
       a. Compute q_0 = f(p_{n-1}), q_1 = f(p_n).
       b. If q_1 - q_0 = 0: stop. Division by zero; secant method cannot proceed.
       c. Compute p_{n+1} = p_n - q_1 * (p_n - p_{n-1}) / (q_1 - q_0).
       d. If |p_{n+1} - p_n| < tol: accept p_{n+1}. Stop.
  2. If maximum iterations reached, report best approximation with a warning.
Stopping criterion: |p_{n+1} - p_n| < tol
Output: Approximation of root r
Reliability notes: No derivative required; approximates Newton's method.
                   Superlinear convergence (order ~1.618).
                   May diverge if starting values are poorly chosen.
                   Does not maintain a bracket; not guaranteed to converge.
```

---

**Example 3.10.1.** Apply the secant method to \( f(x) = x^3 - 2x - 5 \) with \( p_0 = 2 \), \( p_1 = 3 \), tolerance \( 0.0001 \).

*Think.* We use the secant formula directly. No derivative is needed.

*Method.* Secant method.

*Compute.*

| \( n \) | \( p_{n-1} \) | \( p_n \) | \( f(p_{n-1}) \) | \( f(p_n) \) | \( p_{n+1} \) |
|--------|--------------|----------|-----------------|--------------|----------------|
| 1 | 2.0000 | 3.0000 | −1.0000 | 16.0000 | 2.0588 |
| 2 | 3.0000 | 2.0588 | 16.0000 | −0.3908 | 2.0943 |
| 3 | 2.0588 | 2.0943 | −0.3908 | −0.0108 | 2.0946 |
| 4 | 2.0943 | 2.0946 | −0.0108 | 0.0001 | 2.0946 |

*Check.* After four steps, \( p_4 \approx 2.0946 \), accurate to four decimal places. The secant method converged nearly as fast as Newton's method, without requiring the derivative.

*Interpret.* The secant method used \( p_0 = 2 \) and \( p_1 = 3 \) as its two starting points and converged to the root in four steps. The method is slower than Newton's in theory but often performs comparably in practice, especially when derivatives are expensive.

**Convergence rate.** The secant method converges at a **superlinear** rate of order approximately \( 1.618 \) (the golden ratio). Each step does not quite double the correct digits, but nearly so. It is substantially faster than bisection and nearly as fast as Newton.

---

## 3.11 Stopping Criteria

A fundamental question in any iterative algorithm is: when do we stop? Running too few iterations leaves unacceptable error. Running more iterations than necessary wastes computation. Several stopping criteria are commonly used in root-finding.

**Criterion 1: Absolute change in the approximation.**

$$
|p_{n+1} - p_n| < \varepsilon
$$

This tests whether successive iterates are close. When iterates stop moving, the algorithm has effectively converged. However, this criterion can be satisfied even when the approximation is far from the root if the function is very flat.

**Criterion 2: Relative change.**

$$
\frac{|p_{n+1} - p_n|}{|p_{n+1}|} < \varepsilon
$$

This is more appropriate when the root is large in magnitude, since absolute change of \( 0.0001 \) means something very different if the root is near \( 0.001 \) versus near \( 1000 \).

**Criterion 3: Function value.**

$$
|f(p_{n+1})| < \varepsilon
$$

This tests whether the current approximation is a near-root, meaning \( f \) is nearly zero there. It is a direct test of whether the equation is nearly satisfied.

**Criterion 4: Interval width (bisection only).**

$$
\frac{b - a}{2^n} < \varepsilon
$$

For bisection, this gives a rigorous error bound.

**Combining criteria.** In practice, it is safest to combine two criteria: stop when the change in the approximation is small **and** the function value is small. Satisfying only one may be misleading.

**Maximum iteration limit.** Every iterative algorithm should also have a maximum number of iterations as a safety measure. If the algorithm has not converged after \( N \) steps, it should report the best approximation found along with a warning that convergence was not confirmed.

**Student warning.** Never rely on function value alone. A function can be nearly zero far from a root if it is very flat, and can have a small value at a point that is not close to any root. Always check at least two convergence conditions when possible.

---

## 3.12 Comparing Root-Finding Methods

Having studied four methods, students should understand how they differ in reliability, speed, required information, and applicability.

**Bisection.** Guaranteed to converge for any continuous function on a valid bracket. Requires no derivative. Convergence is linear: the error is halved at each step. Needs a sign-change bracket to start. Slow but completely reliable.

**Fixed-point iteration.** Requires a clever reformulation of \( f(x) = 0 \) as \( g(x) = x \). Converges when \( |g'| < 1 \) near the fixed point. Convergence rate is linear and determined by \( |g'| \): if \( |g'| \) is small, convergence is fast. Easy to implement but sensitive to the choice of \( g \). Can diverge.

**Newton's method.** Requires both \( f \) and \( f' \). Converges quadratically near simple roots, meaning error roughly squares at each step. Fastest of the methods when it converges. Requires a good starting point. Fails when \( f'(p_n) = 0 \). Convergence is not guaranteed.

**Secant method.** Requires only \( f \) values, no derivative formula. Uses two previous iterates to approximate the derivative. Converges at order approximately \( 1.618 \), faster than linear but slower than quadratic. Requires two starting values. Does not maintain a bracket. Can diverge but usually performs nearly as well as Newton.

| Method | Guarantee | Speed | Requires | Main failure mode |
|--------|-----------|-------|----------|-------------------|
| Bisection | Yes (with valid bracket) | Linear | \( f \), sign change | Slow for high accuracy |
| Fixed-point | Conditional | Linear (varies) | \( f \), \( g \) | Diverges if \( |g'| \geq 1 \) |
| Newton | No | Quadratic | \( f \), \( f' \) | Bad start, \( f'=0 \), repeated roots |
| Secant | No | Superlinear | \( f \), two starts | Bad starts, \( f(p_n) = f(p_{n-1}) \) |

**Practical strategy.** In practice, analysts often combine methods. A few bisection steps locate the root roughly and confirm it lies in a small interval. Newton's method or the secant method then refines the approximation quickly. This hybrid approach combines bisection's reliability with Newton's speed.

---

## 3.13 Common Root-Finding Mistakes

**Mistake 1: Starting without checking the bracket condition.**
Beginning bisection without verifying \( f(a) \cdot f(b) < 0 \) can mean no root exists in the interval, or the Intermediate Value Theorem does not apply.

**Mistake 2: Applying Newton's method far from the root.**
Newton's method requires a starting point close to the root. A poor starting point can lead to divergence, cycling, or convergence to a different root. Graphical inspection or a few bisection steps should precede Newton's method when the root location is uncertain.

**Mistake 3: Choosing the wrong fixed-point reformulation.**
A fixed-point iteration diverges when \( |g'| \geq 1 \) near the root. Checking the derivative before iterating can save significant wasted computation.

**Mistake 4: Using only function-value stopping criterion.**
If a function is very flat, \( |f(p_n)| \) can be small even when \( p_n \) is far from the root. Always combine function-value and approximation-change criteria.

**Mistake 5: Forgetting that convergence can be to the wrong root.**
Iterative methods without brackets may converge to a root different from the one intended. Graph the function first to understand how many roots exist and where they lie.

**Mistake 6: Concluding that slow convergence means the method is failing.**
Bisection converges slowly by design. For a tolerance of \( 10^{-10} \), it requires about 33 steps from a length-1 bracket. This is expected behavior, not a failure.

**Mistake 7: Applying Newton's method to a repeated root without modification.**
At a root of multiplicity \( m > 1 \), Newton's method converges only linearly, not quadratically. Modified Newton methods can restore quadratic convergence but require knowing or estimating the multiplicity.

---

## 3.14 Preparing for Interpolation and Approximation

Root-finding is our first deep encounter with iterative algorithms, convergence, stopping criteria, and reliability in numerical methods. The ideas introduced here reappear throughout the rest of the book.

In Part II, we now turn to a different class of problems: given data at known points, how do we estimate values at other points? This is the problem of **interpolation**. Chapter 4 develops the theory and methods for constructing polynomial functions that pass through specified data, and Chapter 5 extends this to splines, curve fitting, and least squares, where exact interpolation is replaced by optimal approximation.

Readers who want deeper practice with root-finding algorithms before continuing should review the back matter of this chapter thoroughly, particularly the error analysis problems and algorithm comparison questions.

**MGU Library Connection.** The Numerical Methods Formula Reference page contains the Newton–Raphson formula, bisection error bound, and secant iteration formula for quick reference. The Calculus chapter on derivatives supports the tangent line interpretation of Newton's method. The Linear Algebra chapter on iterative methods contains fixed-point methods in a higher-dimensional setting.

---

## Chapter Summary

Chapter 3 introduced numerical methods for solving equations of the form \( f(x) = 0 \) when exact algebraic solutions are unavailable.

The **bisection method** maintains a bracket \( [a, b] \) containing a root, halves the interval at each step, and guarantees convergence. The error after \( n \) steps satisfies \( |p_n - r| \leq (b-a)/2^n \), and the number of steps needed for tolerance \( \varepsilon \) is at most \( \lceil \log_2((b-a)/\varepsilon) \rceil \). Convergence is linear.

**Fixed-point iteration** rewrites \( f(x) = 0 \) as \( g(x) = x \) and iterates \( p_{n+1} = g(p_n) \). Convergence requires \( |g'(x)| < 1 \) near the fixed point. The rate of convergence is linear and depends on the magnitude of \( |g'| \).

**Newton's method** uses the tangent line at the current estimate to locate the next estimate:

$$
p_{n+1} = p_n - \frac{f(p_n)}{f'(p_n)}
$$

It converges quadratically near simple roots, roughly doubling the number of correct digits at each step. It requires both \( f \) and \( f' \), a good starting point, and fails at zeros of the derivative or repeated roots.

The **secant method** replaces the derivative with a finite difference using two previous iterates:

$$
p_{n+1} = p_n - f(p_n) \cdot \frac{p_n - p_{n-1}}{f(p_n) - f(p_{n-1})}
$$

It converges at superlinear order approximately 1.618, requires no derivative formula, and uses two starting values.

Stopping criteria combine absolute change, relative change, and function value tests with a maximum iteration limit. Reliability is judged by convergence behavior, error bounds when available, and cross-checks with alternative methods.

---

## Key Terms Review

**Root / Zero:** A value \( r \) where \( f(r) = 0 \).

**Bracket:** An interval \( [a, b] \) where \( f(a) \cdot f(b) < 0 \), guaranteeing a root.

**Bisection method:** Halves the bracket at each step; linear convergence; guaranteed.

**Fixed-point iteration:** Iterates \( g(x) = x \); converges when \( |g'| < 1 \) near root.

**Newton's method:** Tangent-line iteration; quadratic convergence; requires \( f' \).

**Secant method:** Finite-difference approximation to Newton; superlinear convergence; no \( f' \) required.

**Convergence:** Iterates approach a limiting value.

**Linear convergence:** Error decreases by a constant factor per step.

**Quadratic convergence:** Error roughly squares per step.

**Stopping criterion:** Condition for terminating iteration.

**Multiplicity:** Order of a root; affects convergence behavior.

---

## Concept Review Questions

1. What condition must be satisfied before bisection can begin? What theorem guarantees a root under this condition?

2. Explain in your own words why bisection always converges but Newton's method may not.

3. What does \( |g'(x)| < 1 \) mean geometrically, and why does it ensure convergence of fixed-point iteration?

4. The Newton formula involves \( f'(p_n) \) in the denominator. What goes wrong when \( f'(p_n) = 0 \)?

5. Describe the tangent line interpretation of Newton's method. Why does the tangent line crossing approximate the root better when the starting point is close to the root?

6. How does the secant method approximate the derivative? What is the geometric interpretation?

7. A student applies Newton's method and obtains \( p_5 = 1.99999 \) with \( f(p_5) = 10^{-6} \). The student declares success. What else should be checked?

8. Why is it recommended to combine bisection and Newton's method in practice?

9. What does it mean for convergence to be quadratic versus linear? Give a numerical illustration.

10. A root has multiplicity 2. What happens to Newton's method at such a root?

---

## Method Practice

**Bisection Practice**

1. Apply the bisection method to \( f(x) = \cos x - x \) on \( [0, 1] \) for four steps. Compute the error bound after four steps.

2. For \( f(x) = e^x - 2 \) on \( [0, 1] \), determine how many bisection steps are required to guarantee error below \( 10^{-5} \).

3. Apply bisection to \( f(x) = x^4 - 3 \) on \( [1, 2] \) for five steps. Record each midpoint and error bound.

**Fixed-Point Practice**

4. Verify that \( g(x) = \cos x \) has a fixed point near \( x = 0.739 \). Apply fixed-point iteration starting from \( p_0 = 0.7 \) for five steps. Compute \( g'(0.739) \) and verify the convergence condition.

5. For \( f(x) = x^2 - 3 \), write two different fixed-point reformulations. Compute \( g'(x) \) for each near \( x = \sqrt{3} \approx 1.732 \) and determine which will converge.

6. Apply fixed-point iteration to \( f(x) = x^3 - x - 1 \) using \( g(x) = (x + 1)^{1/3} \) from \( p_0 = 1.3 \) for five steps.

**Newton's Method Practice**

7. Apply Newton's method to \( f(x) = x^3 - x - 1 \) with \( p_0 = 1.5 \), tolerance \( 10^{-6} \). Record all iterates.

8. Apply Newton's method to \( f(x) = \sin x - x/2 \) with \( p_0 = 2 \) for four steps.

9. Apply Newton's method to \( f(x) = x^2 - 2 \) starting from \( p_0 = 1 \). Recognize this as the classical algorithm for computing \( \sqrt{2} \).

**Secant Method Practice**

10. Apply the secant method to \( f(x) = x^3 - x - 1 \) with \( p_0 = 1.0 \), \( p_1 = 1.5 \), tolerance \( 10^{-4} \). Record all iterates.

11. Apply the secant method to \( f(x) = e^x - 3x \) with \( p_0 = 0 \), \( p_1 = 1 \) for four steps. Compare with bisection on the same function.

---

## Algorithm Practice

12. Write the bisection algorithm in pseudocode starting from first principles. Identify each step's purpose.

13. Write the Newton iteration for \( f(x) = x^5 - x - 1 \) explicitly. Compute \( f'(x) \) and write the full iteration formula.

14. Explain why the secant method requires two starting values while Newton's method requires only one.

15. Design a stopping criterion that combines absolute change and function value, and explain the rationale for combining both.

---

## Computational Interpretation

16. A root-finding algorithm produces the following iterates: \( 1.5, 1.8, 2.0, 2.09, 2.094, 2.0946 \). Without knowing the method, estimate the order of convergence from the error reductions.

17. An engineer computes \( f(p_{10}) = 10^{-8} \) and concludes the root is accurate to eight decimal places. Is this conclusion valid? What additional information is needed?

18. Two methods are applied to find a root. Method A takes 50 steps but always converges. Method B takes 5 steps but fails 10% of the time. Discuss when each is preferable.

19. A function satisfies \( f(a) = -0.001 \) and \( f(b) = 0.001 \) for \( a = 1.99 \) and \( b = 2.01 \). Discuss whether a root must exist between them and estimate its location.

---

## Applications

20. A projectile is launched at angle \( \theta \) with initial speed \( v_0 = 50 \) m/s. The range is \( R(\theta) = (v_0^2/g) \sin 2\theta \). Find the angle \( \theta \) (in degrees) that achieves a range of \( R = 220 \) m, given \( g = 9.8 \) m/s². Use Newton's method.

21. The equation \( e^{-x} = x \) arises in certain equilibrium problems. Show that it has a root in \( (0, 1) \) and find it using the bisection method to four decimal places.

22. In economics, a supply-demand model gives \( S(p) = p^2 + 2p \) and \( D(p) = 50 - 3p \). The equilibrium price satisfies \( S(p) = D(p) \). Reformulate as a root problem and solve using Newton's method.

23. The function \( f(x) = x - \cos x \) arises frequently in numerical analysis examples. Show that it has exactly one root and find it using both bisection and Newton's method, comparing the number of steps.

24. Interest rate \( r \) satisfying a present-value equation satisfies \( 1000(1+r)^{10} - 2000 = 0 \). Solve for \( r \) using Newton's method. Interpret the result financially.

---

## Error Analysis

25. For the bisection method applied to \( f(x) = x^3 - 2x - 5 \) on \( [2, 3] \):
    a. Compute the guaranteed error bound after 5, 10, and 20 steps.
    b. How many steps are needed to guarantee accuracy of \( 10^{-8} \)?

26. The fixed-point iteration \( g(x) = (x+3)/4 \) is applied to find a root near \( x = 1 \). Compute \( g'(1) \) and estimate the ratio of successive errors.

27. Newton's method is applied to \( f(x) = x^2 - a \) to compute \( \sqrt{a} \). Derive the Newton formula explicitly and demonstrate quadratic convergence for \( a = 2 \), \( p_0 = 1 \).

28. Explain why Newton's method converges only linearly at a double root \( f(x) = (x - r)^2 \). Compute the derivative ratio that determines the linear convergence constant.

29. Compare the number of function evaluations required by bisection and Newton's method to achieve error below \( 10^{-8} \), starting from an interval of length 1 (bisection) or a starting point within distance 0.5 of the root (Newton).

---

## Challenge and Extension

30. Research problem: Newton's method can be applied in the complex plane to find complex roots of polynomials. Describe what a **Newton fractal** is and why it arises. (No computation required; conceptual description.)

31. Modified Newton's method: For a root of multiplicity \( m \), the modified iteration is \( p_{n+1} = p_n - m \cdot f(p_n)/f'(p_n) \). Verify that this restores quadratic convergence for \( f(x) = (x - 1)^2 \) with \( m = 2 \).

32. Brent's method combines bisection, secant, and inverse quadratic interpolation to get the reliability of bisection with near-Newton speed. Research its basic idea and describe how it avoids the failure modes of each individual method.

33. Apply Newton's method to \( f(x) = x^3 - 2x + 2 \) starting from \( p_0 = 0 \). What happens? Explain the behavior in terms of the graph of \( f \).

---

## Chapter 3 Checkpoint

This checkpoint assesses core skills from Chapter 3. It should be completed without reference to the worked examples.

**Problem 1.** Apply the bisection method to \( f(x) = x^3 + x - 1 \) on \( [0, 1] \) for five steps. Record \( a \), \( b \), \( p \), \( f(p) \), and the error bound at each step.

**Problem 2.** For the function in Problem 1, determine how many bisection steps are required to guarantee accuracy within \( 10^{-6} \).

**Problem 3.** Reformulate \( f(x) = x^3 + x - 1 = 0 \) as a fixed-point problem \( g(x) = x \). Compute \( g'(x) \) and determine whether fixed-point iteration will converge from \( p_0 = 0.7 \).

**Problem 4.** Apply Newton's method to \( f(x) = x^3 + x - 1 \) with \( p_0 = 0.7 \) and tolerance \( 10^{-5} \). Record all iterates and the stopping step.

**Problem 5.** Apply the secant method to \( f(x) = x^3 + x - 1 \) with \( p_0 = 0 \) and \( p_1 = 1 \) for four steps.

**Problem 6.** Compare the three methods (bisection, Newton, secant) for this function. Which converged fastest? Which is safest? Justify your answers.

**Problem 7.** A student reports that Newton's method gave \( p_3 = 0.6823 \) for a root of \( f(x) = x^3 + x - 1 \). Verify this by computing \( f(0.6823) \) and the bisection bound from Problem 2. Is the answer trustworthy?

---

## Bridge Note

Root-finding is the numerical analog of solving equations, one of the most fundamental tasks in mathematics. The methods in this chapter—bisection, fixed-point iteration, Newton's method, and the secant method—appear throughout the rest of this book in modified forms.

In Chapter 4, interpolation will be used to construct polynomial functions from data, and the ideas of iteration and convergence will reappear in analyzing how well interpolating polynomials approximate a function. In Chapter 9, iterative methods for linear systems such as Jacobi and Gauss-Seidel are fixed-point iterations in a higher-dimensional setting. In Chapter 11, Newton's method for optimization is a direct extension of the root-finding Newton method applied to \( f'(x) = 0 \). In Chapter 12, ODE solvers use Newton-like iterations to step forward in time.

Beyond this course, root-finding connects to the theory of dynamical systems (the study of what happens when iterated maps are applied repeatedly), complex analysis (Newton fractals), functional analysis (the Banach Fixed-Point Theorem in infinite-dimensional spaces), and high-performance scientific computing (parallel solvers, automatic differentiation). Students who continue into numerical analysis will study convergence theory more rigorously, including order of convergence proofs, basin of attraction analysis, and methods for ill-conditioned root problems.

The most important lesson of this chapter is not any single formula, but the habit of thinking carefully about convergence, error, reliability, and the conditions under which an algorithm can be trusted.

---

*Answers to selected problems may be placed in the answer key.*

*Chapter 3 — Solving Nonlinear Equations Numerically | Numerical Methods | MGU Mathematics Series | Library Textbook Edition*
