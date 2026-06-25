# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part IV: Linear Systems, Eigenvalues, and Optimization

---

# Chapter 11: Numerical Optimization

---

## Purpose

Every field of applied mathematics eventually encounters the same fundamental question: among all possible choices, which one is best? That question is the domain of optimization. In calculus, students learn to find maxima and minima by setting derivatives equal to zero and solving. That approach is powerful when functions are simple enough to differentiate symbolically and when the resulting equations can be solved exactly. But in real applications, objective functions are often complicated, multivariable, noisy, or entirely lacking a symbolic formula. Exact differentiation may be unavailable. Exact equation-solving may be computationally impossible. In those situations, numerical optimization takes over.

This chapter introduces the core ideas of numerical optimization: how to search for best values when exact formulas are unavailable or impractical. Students will review optimization from calculus, then study one-dimensional search methods, Newton's method applied to optimization problems, gradient descent, multivariable optimization, and a preview of constrained optimization. Applications range from engineering design to financial portfolio modeling to machine learning.

Numerical optimization should feel like intelligent, structured mathematical searching. The goal is always to find a value—an input, a parameter, a decision—that makes some measure of performance as good as possible, while managing error, convergence, and the ever-present risk of finding only a local optimum rather than a global one.

---

## Opening Question

An engineer is designing a cylindrical storage tank with a fixed volume of 1000 cubic meters. The cost of material depends on the surface area: the curved side costs twice as much per square meter as the flat top and bottom. What radius and height minimize the total material cost?

If you set up the cost function, substitute the volume constraint, and differentiate, you can find an exact answer in this case. But suppose the cost relationship between the curved surface and the flat ends is not a simple ratio—suppose it depends on manufacturing tolerances, which themselves depend on the radius in a nonlinear way given by an empirical table. There is no longer a clean symbolic formula. You cannot differentiate and set equal to zero. You must search numerically.

That is the situation numerical optimization was built for.

---

## Why This Chapter Matters

Optimization is embedded in nearly every quantitative field. Engineers minimize weight, maximize strength, or balance cost against performance. Economists maximize utility subject to budget constraints. Statisticians minimize the sum of squared residuals to fit models to data. Machine learning algorithms minimize loss functions over millions of parameters. Financial analysts maximize expected return for a given level of risk. Climate modelers optimize parameters to match observational data.

In all these fields, the mathematical problems are too complex, too large, or too data-dependent for symbolic calculus alone. Numerical optimization provides the computational tools to find answers.

Beyond applications, optimization deepens understanding of calculus. Every root-finding method from Chapter 3 can be interpreted as an optimization step. Taylor approximations from Chapter 8 underlie Newton's optimization method. The linear algebra of Chapter 9 appears in multivariable gradient computations. Numerical optimization is where much of the mathematics from earlier chapters comes together into a unified computational practice.

---

## Learning Objectives

By the end of this chapter, students should be able to:

1. Explain the goal of numerical optimization and when it is needed instead of symbolic calculus.
2. Define and identify objective functions, feasible regions, local minima, global minima, and convergence.
3. Apply one-dimensional search methods, including golden section search, to find approximate minima.
4. Apply Newton's method to optimization problems using first and second derivative information.
5. Explain and implement gradient descent for minimization, including the role of step size and learning rate.
6. Describe the challenges of multivariable optimization and explain what a gradient and Hessian represent.
7. Recognize local and global optima and explain why numerical methods can get trapped.
8. Describe constrained optimization as a preview and identify when constraints change the problem.
9. Apply numerical optimization ideas to engineering, finance, and machine learning examples.
10. Identify common mistakes and failure modes in numerical optimization.

---

## Key Terms

**objective function** — the function being minimized or maximized.

**feasible region** — the set of all inputs satisfying the problem constraints.

**global minimum** — the smallest value of the objective function over the entire feasible region.

**local minimum** — a point where the objective function is smaller than at all nearby points, but not necessarily the smallest overall.

**gradient** — the vector of partial derivatives of a multivariable function; points in the direction of steepest increase.

**gradient descent** — an iterative method that moves in the direction opposite the gradient to minimize a function.

**learning rate** — the step size used in gradient descent; controls how far each iteration moves.

**Newton's method for optimization** — an iterative method using both first and second derivatives to find where the gradient equals zero.

**Hessian matrix** — the matrix of second-order partial derivatives of a multivariable function; describes curvature.

**golden section search** — a one-dimensional search method that narrows a bracketing interval without requiring derivatives.

**convergence** — the property that a sequence of iterates approaches a fixed limit.

**stopping criterion** — a condition used to decide when to terminate an iterative optimization algorithm.

**constrained optimization** — optimization in which the feasible region is restricted by equality or inequality constraints.

**overshoot** — when a step size is too large, causing the iterate to move past the minimum.

---

## 11.1 What Numerical Optimization Does

Optimization is the process of finding the input value, or collection of input values, that makes a function as large or as small as possible. The function being optimized is called the **objective function**. When seeking the smallest possible value, the problem is a **minimization problem**. When seeking the largest possible value, it is a **maximization problem**.

In calculus, these problems are solved by finding critical points: values where the derivative equals zero or fails to exist, then testing to determine whether each critical point is a maximum, minimum, or neither. This strategy works beautifully for well-behaved functions of one variable, and extends to several variables using partial derivatives and the second derivative test.

Numerical optimization addresses the situation when this symbolic strategy is unavailable, impractical, or too slow. There are several reasons this happens.

The objective function may have no closed-form expression. It may be defined by a simulation, a measurement process, or a table of data. There is no formula to differentiate.

The objective function may be differentiable in principle, but the derivative may be impossible to compute analytically because the function is composed from complicated subroutines or numerical integrations.

The objective function may have thousands or millions of variables. Finding and solving the system of equations from setting all partial derivatives to zero would be computationally prohibitive.

The objective function may be nonconvex, meaning it has many local minima scattered across the domain. No single derivative condition identifies the global minimum.

In all these cases, numerical optimization searches for a good value by generating a sequence of trial inputs, evaluating the objective function at each, and using that information to guide the next trial. Different methods generate the sequence differently, using various amounts of function value information, derivative information, and geometric reasoning.

The fundamental challenge of numerical optimization is that finding the global minimum requires examining, at least indirectly, the entire feasible region. For difficult problems, this is computationally expensive or even impossible. Practical numerical optimization frequently settles for finding a good local minimum quickly, with some awareness of the risk that the global minimum has not been found.

---

## 11.2 Optimization from Calculus Review

Before turning to numerical methods, it is worth reviewing the exact framework from calculus, because numerical methods are designed to approximate exactly what calculus would do if it could.

For a differentiable function \( f(x) \) of a single variable, a **critical point** is a value \( x^* \) where

\[
f'(x^*) = 0
\]

or where \( f'(x^*) \) does not exist. At a critical point, the function is neither increasing nor decreasing; it is momentarily flat. The **second derivative test** then classifies the critical point:

- If \( f''(x^*) > 0 \), the function is concave up at \( x^* \), so it is a local minimum.
- If \( f''(x^*) < 0 \), the function is concave down at \( x^* \), so it is a local maximum.
- If \( f''(x^*) = 0 \), the test is inconclusive.

For a function of several variables, \( f(x_1, x_2, \ldots, x_n) \), a critical point requires that all partial derivatives vanish simultaneously:

\[
\frac{\partial f}{\partial x_1} = 0, \quad \frac{\partial f}{\partial x_2} = 0, \quad \ldots, \quad \frac{\partial f}{\partial x_n} = 0
\]

The **gradient** of \( f \) is the vector of all partial derivatives:

\[
\nabla f = \left(\frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \ldots, \frac{\partial f}{\partial x_n}\right)
\]

A critical point satisfies \( \nabla f = \mathbf{0} \), the zero vector. Whether that critical point is a minimum, maximum, or saddle point is determined by the **Hessian matrix**, which contains all second-order partial derivatives.

Numerical optimization methods are, in essence, structured ways to find a point where the gradient is zero—or close enough to zero to be acceptable—without needing to solve the gradient equation symbolically.

**Interpretation note.** Every numerical optimization method implicitly relies on the same calculus principle: at a minimum, the function stops decreasing. Methods differ in how they detect that moment, how efficiently they approach it, and how reliably they avoid being fooled by a local minimum.

---

## 11.3 Objective Functions

An **objective function** is the mathematical expression of what is being optimized. Defining the objective function carefully is often the most important and most underappreciated step in any optimization problem. A poorly defined objective function will produce an answer that is mathematically optimal but practically wrong.

**Structure of an objective function.** An objective function takes some input—a number, a vector, a set of parameters—and returns a scalar value representing performance, cost, error, likelihood, or whatever quantity the problem seeks to optimize. The choice of what to measure and how to measure it encodes the problem's values.

In a curve-fitting problem, the objective function might be the sum of squared residuals between a model and data. In an engineering design problem, it might be the total weight of a structure subject to strength requirements. In a finance problem, it might be the expected portfolio return minus a penalty for variance. In a machine learning problem, it might be the cross-entropy loss between predicted probabilities and true labels.

**Properties that matter for optimization.** Whether a numerical method will work well depends heavily on the properties of the objective function.

A function is **smooth** if it has continuous first and second derivatives. Smooth functions are easier to optimize because gradient and curvature information is reliable.

A function is **convex** if the line segment connecting any two points on its graph lies above or on the graph. A convex function has only one local minimum, which is automatically the global minimum. Convexity is a valuable property that makes optimization much more reliable.

A function is **unimodal** on an interval if it has exactly one local minimum there. Unimodal functions are tractable for one-dimensional search methods.

A function is **multimodal** if it has several local minima. Multimodal objective functions are the hardest to optimize because any local search method risks converging to a local minimum rather than the global one.

**Warning.** In applied problems, objective functions are frequently nonconvex and multimodal. Numerical optimization can find a local minimum efficiently, but finding the global minimum of a multimodal function generally requires specialized global search strategies—random restarts, population-based methods, or simulated annealing—that are beyond the scope of this chapter. Students should be aware that "the optimization converged" does not mean "the global minimum was found."

---

## 11.4 One-Dimensional Search

The simplest numerical optimization problem is minimizing a function of a single variable over a bounded interval. Even this simple case requires care. If the function is not differentiable, or if its derivative is unavailable, methods that rely only on function values must be used.

**Bracket reduction.** The key idea in one-dimensional search is **bracket reduction**: maintaining an interval \( [a, b] \) that is known to contain a minimum, then shrinking it step by step until the minimum is located to within a desired tolerance.

For this strategy to work, the function must be **unimodal** on the initial interval. A function \( f \) is unimodal on \( [a, b] \) if there exists a unique minimum \( x^* \in [a, b] \) such that \( f \) is decreasing on \( [a, x^*] \) and increasing on \( [x^*, b] \). If the function is unimodal, then comparing function values at two interior points provides useful information about which side of the interval contains the minimum.

**Comparing two interior points.** Suppose \( c \) and \( d \) are two points with \( a < c < d < b \). There are two cases.

If \( f(c) < f(d) \): the minimum must lie in \( [a, d] \), because if the function is unimodal and lower on the left interior point than the right, the minimum cannot be to the right of \( d \).

If \( f(c) > f(d) \): the minimum must lie in \( [c, b] \) by symmetric reasoning.

If \( f(c) = f(d) \): the minimum lies in \( [c, d] \).

After each comparison, the interval shrinks. Repeating this process many times locates the minimum to arbitrary precision.

The question is how to choose \( c \) and \( d \) optimally to shrink the interval as fast as possible with as few function evaluations as possible. Golden section search answers this question.

---

## 11.5 Golden Section Search as an Introduction

**Golden section search** is a bracket-reduction method for one-dimensional unimodal minimization that uses the golden ratio to place interior evaluation points optimally. The key feature of golden section search is that it reduces the interval by a constant factor at each step while reusing one of the two function evaluations from the previous step.

**The golden ratio.** The golden ratio is

\[
\varphi = \frac{1 + \sqrt{5}}{2} \approx 1.618
\]

Its reciprocal is

\[
\rho = \frac{1}{\varphi} = \varphi - 1 = \frac{\sqrt{5} - 1}{2} \approx 0.618
\]

Golden section search places the two interior points at distances \( \rho(b - a) \) from each end of the interval:

\[
c = a + (1 - \rho)(b - a), \qquad d = a + \rho(b - a)
\]

**Why the golden ratio?** After one comparison and interval reduction, one of the old interior points becomes an endpoint of the new interval, and the other old interior point lies exactly in the golden ratio position within the new interval. This means only one new function evaluation is needed per step, making the method efficient.

**Reduction rate.** Each step of golden section search reduces the interval to a fraction \( \rho \approx 0.618 \) of its previous length. After \( n \) steps, the interval has width approximately \( \rho^n (b - a) \).

**Algorithm: Golden Section Search**

```
Algorithm: Golden Section Search
Purpose:  Find the minimum of a unimodal function f on [a, b]
Inputs:   f (function), a (left endpoint), b (right endpoint), tol (tolerance)
Steps:
  Set rho = (sqrt(5) - 1) / 2
  Set c = a + (1 - rho) * (b - a)
  Set d = a + rho * (b - a)
  Evaluate fc = f(c), fd = f(d)
  While (b - a) > tol:
    If fc < fd:
      Set b = d
      Set d = c, fd = fc
      Set c = a + (1 - rho) * (b - a)
      Evaluate fc = f(c)
    Else:
      Set a = c
      Set c = d, fc = fd
      Set d = a + rho * (b - a)
      Evaluate fd = f(d)
  Return (a + b) / 2 as approximate minimizer
Stopping criterion: interval width (b - a) < tol
Output: approximate location of minimum
Reliability notes:
  - Requires unimodality on [a, b]
  - Does not require derivatives
  - Converges linearly; each step reduces interval by factor 0.618
  - Cannot distinguish local from global minimum if function is multimodal
```

**Example 11.5.1: Minimizing a Simple Function**

*Problem.* Use golden section search to find the minimum of \( f(x) = (x - 2)^2 + 1 \) on \( [0, 4] \) with tolerance 0.1.

*Think.* The function is a parabola with vertex at \( x = 2 \). The true minimum is \( f(2) = 1 \). Golden section search should converge to \( x \approx 2 \).

*Method.* Apply golden section search with \( a = 0 \), \( b = 4 \), \( \rho \approx 0.618 \).

*Compute.*

Step 1:
\[
c = 0 + (1 - 0.618)(4) = 0.382 \times 4 = 1.528
\]
\[
d = 0 + 0.618 \times 4 = 2.472
\]
\[
f(1.528) = (1.528 - 2)^2 + 1 = 0.223 + 1 = 1.223
\]
\[
f(2.472) = (2.472 - 2)^2 + 1 = 0.223 + 1 = 1.223
\]

Since \( f(c) = f(d) \), set \( a = c = 1.528 \), \( b = d = 2.472 \). Interval width: \( 2.472 - 1.528 = 0.944 > 0.1 \). Continue.

Step 2: New \( a = 1.528 \), \( b = 2.472 \).
\[
c = 1.528 + 0.382 \times 0.944 = 1.528 + 0.361 = 1.889
\]
\[
d = 1.528 + 0.618 \times 0.944 = 1.528 + 0.583 = 2.111
\]
\[
f(1.889) = (1.889 - 2)^2 + 1 = 0.012 + 1 = 1.012
\]
\[
f(2.111) = (2.111 - 2)^2 + 1 = 0.012 + 1 = 1.012
\]

Again equal by symmetry. New interval: \( [1.889, 2.111] \), width \( 0.222 > 0.1 \). Continue.

Step 3: New \( a = 1.889 \), \( b = 2.111 \).
\[
c = 1.889 + 0.382 \times 0.222 = 1.889 + 0.085 = 1.974
\]
\[
d = 1.889 + 0.618 \times 0.222 = 1.889 + 0.137 = 2.026
\]
\[
f(1.974) = (1.974 - 2)^2 + 1 = 0.000676 + 1 = 1.000676
\]
\[
f(2.026) = (2.026 - 2)^2 + 1 = 0.000676 + 1 = 1.000676
\]

New interval: \( [1.974, 2.026] \), width \( 0.052 < 0.1 \). Stop.

*Approximate minimizer:* \( \hat{x} = (1.974 + 2.026)/2 = 2.000 \).

*Check.* True minimum is at \( x = 2 \). The method found it exactly in this symmetric case.

*Interpret.* Golden section search located the minimum to within a tolerance of 0.052 using only 6 function evaluations (2 per step, but with reuse, effectively fewer). For functions without a clean formula, this derivative-free approach is valuable.

---

## 11.6 Newton's Method for Optimization

When the objective function is smooth and derivatives are available, **Newton's method for optimization** is far more efficient than golden section search. The idea is to use both the first and second derivative to model the function locally as a parabola, then jump directly to the minimum of that parabola.

**Derivation.** Let \( x_n \) be the current estimate of the minimizer. Near \( x_n \), the Taylor expansion of \( f \) is approximately

\[
f(x) \approx f(x_n) + f'(x_n)(x - x_n) + \frac{1}{2}f''(x_n)(x - x_n)^2
\]

This quadratic approximation has its minimum where its derivative with respect to \( x \) equals zero:

\[
f'(x_n) + f''(x_n)(x - x_n) = 0
\]

Solving for \( x \):

\[
x_{n+1} = x_n - \frac{f'(x_n)}{f''(x_n)}
\]

This is the **Newton step for optimization**. Notice that it is equivalent to applying Newton's root-finding method (from Chapter 3) to the equation \( f'(x) = 0 \), because finding a minimum means finding a root of the derivative.

**Algorithm: Newton's Method for Optimization**

```
Algorithm: Newton's Method for Optimization
Purpose:  Find a local minimum of a smooth function f
Inputs:   f', f'' (first and second derivatives), x0 (initial guess), tol
Steps:
  Set n = 0
  Repeat:
    Compute f'(x_n) and f''(x_n)
    If f''(x_n) <= 0: warn (not near a minimum; second derivative non-positive)
    Set x_{n+1} = x_n - f'(x_n) / f''(x_n)
    Set n = n + 1
  Until |x_n - x_{n-1}| < tol or |f'(x_n)| < tol
Output: x_n as approximate minimizer
Reliability notes:
  - Requires f'' > 0 near the minimum (positive curvature)
  - Converges quadratically near a minimum when f'' is nonzero
  - Can diverge or find a maximum if started poorly
  - Not reliable for multimodal functions without a good starting point
```

**Convergence.** When started near a minimum where \( f''(x^*) \neq 0 \), Newton's method for optimization converges **quadratically**: the number of correct decimal places roughly doubles at each step. This is much faster than the linear convergence of golden section search.

**Requirement.** Newton's method requires that \( f''(x_n) > 0 \) at each iterate. If \( f''(x_n) \leq 0 \), the method is not near a minimum; it may be near a maximum or a saddle point. The step would move toward a maximum rather than a minimum.

**Example 11.6.1: Newton's Method Applied to an Optimization Problem**

*Problem.* Minimize \( f(x) = x^4 - 4x^2 + x \) starting at \( x_0 = 2 \).

*Think.* The function has multiple local extrema. Starting at \( x_0 = 2 \), we are likely near a local minimum in the positive region.

*Method.* Compute \( f'(x) = 4x^3 - 8x + 1 \) and \( f''(x) = 12x^2 - 8 \). Apply Newton's iteration.

*Compute.*

Step 1: \( x_0 = 2 \).
\[
f'(2) = 4(8) - 16 + 1 = 32 - 16 + 1 = 17
\]
\[
f''(2) = 12(4) - 8 = 48 - 8 = 40
\]
\[
x_1 = 2 - \frac{17}{40} = 2 - 0.425 = 1.575
\]

Step 2: \( x_1 = 1.575 \).
\[
f'(1.575) = 4(1.575)^3 - 8(1.575) + 1 \approx 4(3.908) - 12.600 + 1 = 15.632 - 12.600 + 1 = 4.032
\]
\[
f''(1.575) = 12(1.575)^2 - 8 \approx 12(2.481) - 8 = 29.772 - 8 = 21.772
\]
\[
x_2 = 1.575 - \frac{4.032}{21.772} \approx 1.575 - 0.185 = 1.390
\]

Step 3: \( x_2 = 1.390 \).
\[
f'(1.390) = 4(1.390)^3 - 8(1.390) + 1 \approx 4(2.686) - 11.120 + 1 = 10.744 - 11.120 + 1 = 0.624
\]
\[
f''(1.390) = 12(1.390)^2 - 8 \approx 12(1.932) - 8 = 23.184 - 8 = 15.184
\]
\[
x_3 = 1.390 - \frac{0.624}{15.184} \approx 1.390 - 0.041 = 1.349
\]

After a few more steps, the iterate converges to approximately \( x^* \approx 1.34 \), where \( f'(x^*) \approx 0 \) and \( f''(x^*) > 0 \), confirming a local minimum.

*Check.* Verify that \( f'(1.34) \approx 0 \) and \( f''(1.34) > 0 \). A second local minimum exists near \( x \approx -1.4 \); this method found only the one near the starting point.

*Interpret.* Newton's method converged to a local minimum efficiently using second derivative information. Starting at a different initial point could find the other local minimum. Neither can be confirmed as global without additional analysis.

---

## 11.7 Gradient Descent

For functions of several variables, the gradient generalizes the derivative. The negative gradient points in the direction of steepest decrease. **Gradient descent** follows this direction iteratively, moving toward a local minimum step by step.

**The update rule.** Given a current point \( \mathbf{x}_n \), the gradient descent update is

\[
\mathbf{x}_{n+1} = \mathbf{x}_n - \alpha \nabla f(\mathbf{x}_n)
\]

where \( \alpha > 0 \) is the **step size** or **learning rate**, and \( \nabla f(\mathbf{x}_n) \) is the gradient vector evaluated at the current point.

**Intuition.** Imagine standing on a hilly landscape and wanting to reach the lowest point. At each step, you look at the slope of the ground beneath you and take a step in the direction the hill descends most steeply. That is gradient descent. The step size determines how far you step each time.

**For one variable.** In one dimension, \( \nabla f(x) = f'(x) \), and the update becomes

\[
x_{n+1} = x_n - \alpha f'(x_n)
\]

**Algorithm: Gradient Descent**

```
Algorithm: Gradient Descent
Purpose:  Find a local minimum of f by following the negative gradient
Inputs:   f (objective function), grad_f (gradient function), x0 (initial point),
          alpha (step size), tol (tolerance), max_iter (maximum iterations)
Steps:
  Set n = 0, x = x0
  Repeat:
    Compute g = grad_f(x)
    Set x_new = x - alpha * g
    If ||x_new - x|| < tol or ||g|| < tol: stop
    Set x = x_new
    Set n = n + 1
    If n >= max_iter: stop with warning (convergence not confirmed)
Output: x as approximate minimizer
Reliability notes:
  - Convergence rate depends heavily on alpha and the problem's curvature
  - Too large alpha causes oscillation or divergence; too small causes slow convergence
  - Finds a local minimum; global minimum not guaranteed
  - Works in any number of dimensions
```

**Convergence.** Gradient descent converges **linearly** when the step size is chosen well. Near the minimum, each step reduces the error by a fixed factor. Convergence is slower when the function has elongated level curves—meaning the curvature is very different in different directions. In that case, gradient descent zigzags inefficiently toward the minimum.

**Gradient descent is the engine of machine learning.** In training neural networks, the objective function is a loss function over millions of parameters. Gradient descent (and variants like stochastic gradient descent) repeatedly updates the parameters to reduce the loss. Understanding gradient descent is therefore essential for understanding modern machine learning.

**Example 11.7.1: Gradient Descent in One Dimension**

*Problem.* Minimize \( f(x) = x^2 - 4x + 5 \) using gradient descent starting at \( x_0 = 0 \) with step size \( \alpha = 0.3 \). The true minimum is at \( x^* = 2 \).

*Think.* The gradient (derivative) is \( f'(x) = 2x - 4 \). At \( x = 0 \), the gradient is \( -4 \), meaning the function decreases to the right. The update moves right.

*Compute.*

| Step | \( x_n \) | \( f'(x_n) \) | \( x_{n+1} \) |
|------|-----------|---------------|---------------|
| 0 | 0.000 | -4.000 | 1.200 |
| 1 | 1.200 | -1.600 | 1.680 |
| 2 | 1.680 | -0.640 | 1.872 |
| 3 | 1.872 | -0.256 | 1.949 |
| 4 | 1.949 | -0.102 | 1.980 |
| 5 | 1.980 | -0.040 | 1.992 |

*Check.* The iterates approach \( x^* = 2 \) steadily. With \( \alpha = 0.3 \), convergence is stable and linear.

*Interpret.* Each step reduces the error by a factor of approximately \( |1 - 2\alpha| = |1 - 0.6| = 0.4 \), consistent with linear convergence. After 5 steps, the iterate is within 0.008 of the true minimum.

---

## 11.8 Step Size and Learning Rate

The step size \( \alpha \) in gradient descent is the single most consequential parameter in the algorithm. Choosing it well is an art as much as a science, and a great deal of practical optimization expertise concerns getting it right.

**Too large a step size.** If \( \alpha \) is too large, the update \( \mathbf{x}_{n+1} = \mathbf{x}_n - \alpha \nabla f(\mathbf{x}_n) \) overshoots the minimum. The iterates may oscillate across the minimum, alternating between two sides without converging. If the overshoot is severe enough, the iterates may actually diverge, moving farther from the minimum with each step.

**Too small a step size.** If \( \alpha \) is too small, the iterates move correctly toward the minimum but very slowly. Each step makes only tiny progress. A method that would converge in 100 steps with a good \( \alpha \) may require 100,000 steps with an \( \alpha \) that is 1000 times too small. This is wasteful computationally.

**Effect of curvature.** The optimal step size depends on the curvature of the objective function. If \( f''(x) \) is large (sharp curvature), a smaller \( \alpha \) is needed. If \( f''(x) \) is small (flat curvature), a larger \( \alpha \) can be used safely. For one-dimensional problems, the optimal fixed step size is \( \alpha = 1/f''(x^*) \), matching the Newton step.

**Strategies for step size selection.**

A **fixed step size** is the simplest strategy. It requires tuning by trial and error and may not work well across different parts of the optimization landscape.

**Line search** is a more sophisticated strategy that chooses \( \alpha \) at each iteration by approximately minimizing \( f(\mathbf{x}_n - \alpha \nabla f(\mathbf{x}_n)) \) as a function of \( \alpha \). This adds computational cost per step but greatly improves reliability.

**Adaptive learning rates** adjust \( \alpha \) automatically based on the history of gradients. Methods such as Adam and RMSProp, widely used in machine learning, implement sophisticated adaptive strategies. These are beyond the scope of this chapter but are grounded in the same principles.

**Diagram instruction.** Draw three plots side by side showing gradient descent trajectories on a bowl-shaped (convex) function. In the left plot, a small \( \alpha \) produces a slow but steady descent. In the middle plot, a well-chosen \( \alpha \) produces rapid convergence in a few steps. In the right plot, a large \( \alpha \) produces oscillation, jumping back and forth across the minimum.

**Warning.** In machine learning, the word "learning rate" is preferred over "step size," but the concept is identical. When reading about machine learning, students can translate "learning rate" directly to "step size in gradient descent."

**Example 11.8.1: Comparing Step Sizes**

*Problem.* Apply gradient descent to \( f(x) = x^2 \) starting at \( x_0 = 4 \) with three step sizes: \( \alpha = 0.1 \), \( \alpha = 0.9 \), and \( \alpha = 1.1 \).

*The update rule:* \( x_{n+1} = x_n - \alpha \cdot 2x_n = x_n(1 - 2\alpha) \).

With \( \alpha = 0.1 \): factor \( (1 - 0.2) = 0.8 \). Iterates: 4, 3.2, 2.56, 2.048, \ldots Converges to 0 steadily.

With \( \alpha = 0.9 \): factor \( (1 - 1.8) = -0.8 \). Iterates: 4, -3.2, 2.56, -2.048, \ldots Oscillates but converges since \( |{-0.8}| < 1 \).

With \( \alpha = 1.1 \): factor \( (1 - 2.2) = -1.2 \). Iterates: 4, -4.8, 5.76, -6.912, \ldots Diverges since \( |{-1.2}| > 1 \).

*Interpret.* Convergence requires \( |1 - 2\alpha| < 1 \), which means \( 0 < \alpha < 1 \). Outside this range, the method diverges. This simple example shows that step size selection is not arbitrary.

---

## 11.9 Local and Global Optima

The distinction between local and global optima is among the most important ideas in optimization, and it is where many practical applications face their hardest challenges.

**Local minimum.** A point \( x^* \) is a **local minimum** of \( f \) if \( f(x^*) \leq f(x) \) for all \( x \) in some neighborhood of \( x^* \). The function is smaller at \( x^* \) than at all nearby points, but there may be distant points where the function is even smaller.

**Global minimum.** A point \( x^* \) is the **global minimum** of \( f \) if \( f(x^*) \leq f(x) \) for all \( x \) in the entire feasible region. The function is smallest everywhere, not just locally.

**Convex functions.** For a **convex** function, every local minimum is the global minimum. This is the great advantage of convexity: any optimization method that finds a local minimum has found the best possible answer. Least squares problems, linear regression, and many machine learning objectives are convex.

**Nonconvex functions.** For nonconvex functions, local minima may be many, scattered across the domain, and far from the global minimum. A gradient-based method started at one initial point will find one local minimum. Started at another initial point, it may find a different local minimum. Without additional information, there is no guarantee which is best.

**Strategies for nonconvex problems.** Several practical strategies help address nonconvexity.

**Multiple random restarts:** run the optimization from many different starting points and take the best result found. This does not guarantee finding the global minimum but reduces the chance of settling for a very poor local minimum.

**Simulated annealing:** a probabilistic method that occasionally accepts uphill steps to escape local minima. The probability of accepting a bad step decreases over time, analogous to a physical cooling process.

**Evolutionary algorithms:** population-based methods that maintain many candidate solutions simultaneously and combine them in ways inspired by biological evolution.

These advanced strategies are mentioned here for awareness. This chapter focuses on methods that find local minima reliably.

**Diagram instruction.** Draw the graph of a function with two local minima and one global minimum on an interval. Mark each local minimum with a dot. Label the global minimum clearly. Shade the basin of attraction around each local minimum to show where gradient descent from different starting points would converge.

**Warning.** "The algorithm converged" is not the same as "the global minimum was found." Students should always verify whether the problem is convex before trusting a numerical minimum as globally optimal.

---

## 11.10 Multivariable Optimization as an Introduction

When the objective function depends on two or more variables, the geometry becomes richer and the algorithms more involved.

**The gradient in multiple dimensions.** For a function \( f(x_1, x_2, \ldots, x_n) \), the gradient

\[
\nabla f = \left(\frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \ldots, \frac{\partial f}{\partial x_n}\right)
\]

is a vector that points in the direction of steepest increase of \( f \). Moving in the direction of \( -\nabla f \) decreases \( f \) most rapidly. At a local minimum, \( \nabla f = \mathbf{0} \): all partial derivatives vanish.

**Gradient descent in multiple dimensions.** The gradient descent update in multiple dimensions is

\[
\mathbf{x}_{n+1} = \mathbf{x}_n - \alpha \nabla f(\mathbf{x}_n)
\]

where \( \mathbf{x}_n \) is now a vector and \( \nabla f(\mathbf{x}_n) \) is the gradient vector at \( \mathbf{x}_n \). This is the same formula as before, but now applied to vectors.

**The Hessian matrix.** The second-order information in a multivariable function is captured by the **Hessian matrix**, whose entry in row \( i \) and column \( j \) is the second mixed partial derivative:

\[
H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}
\]

The Hessian plays the role of the second derivative in the multivariable second derivative test. If the Hessian at a critical point is **positive definite** (all eigenvalues positive), then the critical point is a local minimum. If any eigenvalue is negative, the critical point is a saddle point.

**Newton's method in multiple dimensions.** The multivariable version of Newton's optimization method uses the Hessian:

\[
\mathbf{x}_{n+1} = \mathbf{x}_n - H(\mathbf{x}_n)^{-1} \nabla f(\mathbf{x}_n)
\]

This requires computing and inverting the Hessian at each step, which is computationally expensive for large \( n \) but converges very quickly near the minimum.

**Example 11.10.1: Two-Variable Gradient Descent**

*Problem.* Minimize \( f(x, y) = (x - 1)^2 + 4(y - 2)^2 \) starting at \( (x_0, y_0) = (0, 0) \) with step size \( \alpha = 0.1 \).

*Think.* The minimum is at \( (1, 2) \) where \( f(1, 2) = 0 \). The gradient is \( \nabla f = (2(x-1), 8(y-2)) \).

*Compute.*

Step 0: \( \mathbf{x}_0 = (0, 0) \).
\[
\nabla f(0, 0) = (2(0-1), 8(0-2)) = (-2, -16)
\]
\[
\mathbf{x}_1 = (0, 0) - 0.1(-2, -16) = (0.2, 1.6)
\]

Step 1: \( \mathbf{x}_1 = (0.2, 1.6) \).
\[
\nabla f(0.2, 1.6) = (2(0.2-1), 8(1.6-2)) = (-1.6, -3.2)
\]
\[
\mathbf{x}_2 = (0.2, 1.6) - 0.1(-1.6, -3.2) = (0.36, 1.92)
\]

Step 2: \( \mathbf{x}_2 = (0.36, 1.92) \).
\[
\nabla f(0.36, 1.92) = (2(-0.64), 8(-0.08)) = (-1.28, -0.64)
\]
\[
\mathbf{x}_3 = (0.36, 1.92) - 0.1(-1.28, -0.64) = (0.488, 1.984)
\]

*Check.* After 3 steps: \( (0.488, 1.984) \). The \( y \)-component is converging faster than the \( x \)-component because the curvature in the \( y \)-direction (coefficient 4) is larger. True minimum: \( (1, 2) \).

*Interpret.* With a fixed step size, gradient descent converges more slowly in the direction of lower curvature. The iterates will eventually reach \( (1, 2) \), but convergence in the \( x \)-direction is slower. This illustrates why curvature mismatch (ill-conditioning) makes gradient descent inefficient.

**Ill-conditioning in optimization.** When the curvature of \( f \) differs greatly in different directions, gradient descent zigzags inefficiently toward the minimum. This is related to the conditioning concepts from Chapter 9. Methods that account for the Hessian, such as Newton's method, handle ill-conditioning much better by rescaling the gradient step according to the local curvature.

---

## 11.11 Constrained Optimization as a Preview

So far, all optimization problems have been **unconstrained**: the minimizer can be any point in the domain. Many real problems impose **constraints**: restrictions on which inputs are allowed.

**Types of constraints.**

An **equality constraint** requires that a function of the variables equals a specified value:

\[
g(x_1, x_2, \ldots, x_n) = 0
\]

An **inequality constraint** requires that a function of the variables satisfies an inequality:

\[
h(x_1, x_2, \ldots, x_n) \leq 0
\]

The set of all points satisfying all constraints is the **feasible region**. The constrained minimum is the smallest value of \( f \) over the feasible region, which may be different from the unconstrained minimum.

**Why constraints matter.** In engineering, design parameters are constrained by physical limits: a beam cannot be thinner than a manufacturing minimum, a budget cannot be exceeded. In finance, a portfolio must be fully invested and individual positions cannot be negative (if short-selling is prohibited). In machine learning, regularization constraints prevent parameters from growing too large.

**Lagrange multipliers (preview).** For equality-constrained optimization, **Lagrange multipliers** provide an elegant method from calculus. At a constrained minimum of \( f \) subject to \( g = 0 \), the gradients of \( f \) and \( g \) must be parallel:

\[
\nabla f = \lambda \nabla g
\]

for some scalar \( \lambda \) called the **Lagrange multiplier**. This condition, combined with the constraint equation, gives a system of equations to solve for the minimizer and the multiplier. Numerical methods for constrained optimization extend this idea to handle inequality constraints, nonlinear constraints, and large-scale problems.

**Sequential Quadratic Programming (preview).** One important numerical approach to constrained optimization is **Sequential Quadratic Programming (SQP)**, which solves a sequence of quadratic approximations to the constrained problem. Each subproblem is easier to solve than the original, and the sequence converges to the constrained minimum. SQP is widely used in engineering optimization.

**Penalty methods (preview).** Another approach converts a constrained problem into an unconstrained one by adding a **penalty term** to the objective function that grows large when constraints are violated:

\[
\tilde{f}(\mathbf{x}) = f(\mathbf{x}) + \mu \sum_i [g_i(\mathbf{x})]^2
\]

As the penalty parameter \( \mu \) increases, minimizing \( \tilde{f} \) forces the minimizer toward the feasible region. Penalty methods are conceptually simple but can be numerically sensitive.

Constrained optimization is a rich subject. This preview is sufficient to recognize when a problem requires constraints and to understand that constrained problems require different algorithms than unconstrained ones.

---

## 11.12 Optimization in Engineering, Finance, and Machine Learning

Numerical optimization is not an abstract exercise. It is one of the most widely applied areas of mathematics. The following examples illustrate the breadth and importance of the field.

**Engineering design optimization.** An aerospace engineer designs a wing shape to minimize drag while maintaining sufficient lift. The design variables are parameters describing the wing cross-section geometry: curvature, thickness, and angle. The objective function is drag, computed by a computational fluid dynamics simulation at each candidate design. Constraints require lift to exceed a minimum, stress to remain below material limits, and manufacturing tolerances to be satisfied. The optimization problem has dozens to hundreds of variables and nonlinear constraints. Gradient-based methods with adjoint sensitivity analysis are used to compute gradients efficiently despite the complexity of the simulation.

**Portfolio optimization in finance.** A fund manager selects portfolio weights \( w_1, w_2, \ldots, w_n \) for \( n \) assets to maximize expected return minus a penalty for risk:

\[
\text{maximize} \quad \mathbf{r}^T \mathbf{w} - \lambda \mathbf{w}^T \Sigma \mathbf{w}
\]

where \( \mathbf{r} \) is the vector of expected returns, \( \Sigma \) is the covariance matrix of asset returns, and \( \lambda \) controls the trade-off between return and risk. The constraint \( \sum_i w_i = 1 \) requires full investment. This is a **quadratic programming** problem: the objective is quadratic and the constraints are linear. Efficient algorithms solve it in milliseconds for typical portfolio sizes.

**Machine learning loss minimization.** Training a neural network means finding model parameters \( \mathbf{w} \) (weights and biases) that minimize a loss function:

\[
L(\mathbf{w}) = \frac{1}{N} \sum_{i=1}^{N} \ell(f(\mathbf{x}_i; \mathbf{w}), y_i)
\]

where \( \ell \) measures the discrepancy between the model's prediction \( f(\mathbf{x}_i; \mathbf{w}) \) and the true label \( y_i \) for training example \( i \). The parameter vector \( \mathbf{w} \) may have millions or billions of components. **Stochastic gradient descent (SGD)** and its variants minimize this loss by computing gradients on random subsets (mini-batches) of the training data at each step, rather than the full dataset. This makes each gradient computation affordable even when \( N \) is enormous.

**Structural optimization.** A civil engineer designs a truss structure with minimum total weight subject to stress constraints at every joint. This is a topology optimization problem: the design variables determine not just the sizes of members but their very presence in the structure. Modern topology optimization uses iterative algorithms that alternately update the design and solve the structural equations.

**Calibration and inverse problems.** Scientists frequently observe data and want to find the parameters of a physical model that best explain the observations. This is a **parameter estimation** or **inverse problem**, solved by minimizing the discrepancy between model predictions and observations. Numerical optimization is the tool that makes this minimization computationally feasible.

---

## 11.13 Common Numerical Optimization Mistakes

Students learning numerical optimization encounter a characteristic set of mistakes. Awareness of these pitfalls is as important as mastery of the algorithms.

**Mistake 1: Assuming convergence means global optimality.** When a gradient-based method converges, it has found a local minimum where the gradient is approximately zero. For nonconvex problems, this local minimum may not be the global minimum. Never report a local minimum as globally optimal without justification.

*Remedy:* For nonconvex problems, use multiple starting points. For convex problems, justify convexity and state it explicitly.

**Mistake 2: Choosing step size without testing.** A fixed step size may be too large (causing divergence) or too small (causing unnecessarily slow convergence). Students sometimes run gradient descent with an untested step size and either get divergence or get a result that appears to converge but actually hasn't moved close enough to the minimum.

*Remedy:* Test convergence by checking whether the iterates stabilize and whether the gradient is near zero. If convergence is slow, try larger \( \alpha \). If oscillation or divergence occurs, try smaller \( \alpha \).

**Mistake 3: Ignoring whether the second derivative is positive.** Newton's method for optimization requires \( f'' > 0 \) (or positive definite Hessian in multiple dimensions). If \( f'' < 0 \), the Newton step moves toward a maximum, not a minimum.

*Remedy:* Check the sign of \( f''(x_n) \) at each iteration. If it is not positive, the method is not near a minimum.

**Mistake 4: Failing to check whether the problem has constraints.** Students sometimes apply an unconstrained minimization algorithm to a problem that has implicit physical constraints (non-negative values, bounded ranges, normalization), then report an answer that violates those constraints.

*Remedy:* Identify all constraints before choosing an algorithm. Use constrained optimization methods when constraints are present.

**Mistake 5: Confusing a minimum with a maximum.** Maximization is equivalent to minimizing the negative of the objective function. Students sometimes minimize when they should maximize, or forget to negate the objective.

*Remedy:* Always restate the problem as minimization or maximization explicitly and check whether the computed critical point is the type wanted.

**Mistake 6: Stopping too early.** Stopping based on a small step size \( \|x_{n+1} - x_n\| \) can give the illusion of convergence when the algorithm is making small steps for the wrong reason—such as an excessively small learning rate rather than proximity to the minimum.

*Remedy:* Use multiple stopping checks: small gradient norm, small function change, and small iterate change. Verify that the gradient is actually near zero at the reported solution.

**Mistake 7: Not specifying what is being optimized.** A numerical answer is useless if the objective function was set up wrong. Minimizing the wrong function perfectly is not a success.

*Remedy:* Before computing, write out the objective function explicitly, verify its units and interpretation, and check that it correctly represents the problem being solved.

---

## Chapter Summary

Numerical optimization is the mathematical process of finding the input values that make an objective function as small or as large as possible, using iterative computational methods when exact symbolic solutions are unavailable or impractical.

The chapter opened with the distinction between unconstrained and constrained optimization, and reviewed the calculus framework of critical points and the gradient condition \( \nabla f = \mathbf{0} \). The objective function must be chosen carefully before any algorithm is applied.

**Golden section search** provides a derivative-free method for one-dimensional unimodal minimization. It reduces a bracketing interval by a factor of \( \rho \approx 0.618 \) per step, requiring only one new function evaluation per iteration by exploiting the golden ratio's geometric properties.

**Newton's method for optimization** uses both the first and second derivative to model the objective function as a quadratic and step directly toward the minimum. It converges quadratically near a minimum but requires \( f'' > 0 \) and a good starting point.

**Gradient descent** extends optimization to multiple dimensions by iterating in the direction of the negative gradient. The update rule \( \mathbf{x}_{n+1} = \mathbf{x}_n - \alpha \nabla f(\mathbf{x}_n) \) is simple but sensitive to the choice of step size. Too large a step causes divergence; too small causes slow convergence.

**Step size selection** is a central practical challenge. Fixed step sizes, line search methods, and adaptive strategies each address the balance between speed and stability.

**Local versus global optima** is the central conceptual challenge of nonconvex optimization. Gradient-based methods converge to local minima reliably, but global optimality is guaranteed only for convex problems.

**Multivariable optimization** uses the gradient and Hessian to extend all one-variable ideas to multiple dimensions. Ill-conditioning of the Hessian causes gradient descent to zigzag inefficiently; Newton's method handles curvature directly.

**Constrained optimization** modifies these ideas when the feasible region is restricted by equality or inequality constraints. Lagrange multipliers, penalty methods, and Sequential Quadratic Programming are previewed as strategies.

Applications in engineering, finance, and machine learning demonstrate that numerical optimization is one of the most widely used tools in modern science, technology, and data analysis.

---

## Key Terms Review

**objective function** — what is being minimized or maximized.

**gradient** — the vector of partial derivatives; points in the direction of steepest increase.

**gradient descent** — iterative minimization following the negative gradient.

**learning rate** — the step size \( \alpha \) in gradient descent.

**Newton's method for optimization** — uses \( f'' \) to step toward the minimum quadratically.

**golden section search** — derivative-free bracket reduction using the golden ratio.

**unimodal** — having exactly one local minimum on an interval.

**local minimum** — smaller than all nearby values; not necessarily globally smallest.

**global minimum** — smallest over the entire feasible region.

**convex function** — all local minima are global minima.

**Hessian matrix** — matrix of second partial derivatives; describes curvature in multiple dimensions.

**constrained optimization** — optimization over a restricted feasible region.

**Lagrange multipliers** — conditions at equality-constrained minima relating gradients of objective and constraint.

**stopping criterion** — the condition used to end an iterative optimization algorithm.

**convergence** — the property that iterates approach a fixed limiting value.

---

## Concept Review Questions

1. Explain in your own words why numerical optimization is needed even when calculus provides exact methods for finding critical points.

2. What does it mean for an objective function to be convex? Why is convexity valuable in optimization?

3. Describe the difference between a local minimum and a global minimum. Give an example of an objective function that has multiple local minima.

4. What property of the objective function does golden section search require? Why does the method need this property?

5. Explain why Newton's method for optimization requires \( f''(x_n) > 0 \). What goes wrong if \( f''(x_n) < 0 \)?

6. In gradient descent, what does the learning rate control? What are the consequences of choosing it too large or too small?

7. What does the gradient \( \nabla f \) represent geometrically? In which direction should each gradient descent step move?

8. Explain the role of the Hessian matrix in multivariable optimization. How does it relate to the second derivative in one dimension?

9. What is a constrained optimization problem? Give two real-world examples where constraints arise naturally.

10. Why does "the algorithm converged" not necessarily mean "the global minimum was found"?

---

## Method and Algorithm Practice

**1.** Apply golden section search to minimize \( f(x) = x^2 - 6x + 10 \) on \( [0, 6] \). Perform 4 iterations and record the interval at each step.

**2.** Apply golden section search to minimize \( f(x) = |x - 3| + (x - 3)^2 \) on \( [0, 6] \). After 4 iterations, how wide is the bracketing interval?

**3.** Let \( f(x) = x^3 - 3x \). Compute \( f'(x) \) and \( f''(x) \). Apply Newton's method for optimization starting at \( x_0 = 2 \) and \( x_0 = -2 \). What does each starting point find?

**4.** Apply Newton's method for optimization to \( f(x) = e^x - 3x \) starting at \( x_0 = 1 \). Perform 3 iterations and estimate the minimizer.

**5.** Apply gradient descent to minimize \( f(x) = (x - 5)^2 \) starting at \( x_0 = 0 \) with step size \( \alpha = 0.4 \). Perform 5 iterations.

**6.** Apply gradient descent to \( f(x, y) = x^2 + y^2 \) starting at \( (3, 4) \) with \( \alpha = 0.2 \). Perform 3 iterations.

**7.** For \( f(x, y) = (x - 2)^2 + 9(y - 1)^2 \), compute the gradient at \( (0, 0) \). Perform two gradient descent steps with \( \alpha = 0.1 \). After two steps, which variable has converged more: \( x \) or \( y \)?

**8.** Apply gradient descent to minimize \( f(x) = x^2 \) with \( x_0 = 3 \) and each of: \( \alpha = 0.5 \), \( \alpha = 1.0 \), \( \alpha = 1.5 \). Determine which converge and which diverge, using the formula for the iterate as a closed-form sequence.

---

## Computation Practice

**9.** The function \( f(x) = \sin(x) + 0.1x^2 \) has a local minimum near \( x = 1.5 \). Apply Newton's method for optimization starting at \( x_0 = 1.5 \). After 3 iterations, estimate the minimizer.

**10.** Use golden section search to minimize \( f(x) = \cos(x) + x^2/4 \) on \( [0, 2] \) with tolerance 0.05. Report the approximate minimizer.

**11.** The function \( f(x_1, x_2) = x_1^2 + 4x_2^2 - 2x_1x_2 \) has its minimum at the origin. Apply gradient descent starting at \( (2, 1) \) with \( \alpha = 0.05 \). Perform 4 iterations.

**12.** Set up but do not fully solve: minimize the total cost of a cylindrical can with volume 500 cubic centimeters, where the top and bottom cost twice as much per unit area as the side. Write the objective function as a function of radius \( r \) only, after substituting the volume constraint.

---

## Applications

**13. Engineering.** A manufacturer wants to cut a rectangular piece of metal from a square sheet of side 12 cm by cutting equal squares of side \( x \) from each corner and folding up the sides. Write the volume of the resulting open box as a function of \( x \). Apply Newton's method for optimization to find the optimal cut size.

**14. Finance.** A simple portfolio has two assets with expected returns \( r_1 = 0.08 \) and \( r_2 = 0.12 \), and variances \( \sigma_1^2 = 0.04 \) and \( \sigma_2^2 = 0.09 \), with correlation \( \rho = 0.2 \). Write the portfolio variance as a function of the weight \( w \) allocated to asset 1 (with weight \( 1-w \) to asset 2). Find the minimum variance portfolio weight using calculus or Newton's method.

**15. Data fitting.** A researcher collects the data: \( (1, 2.1), (2, 3.9), (3, 6.2), (4, 7.8) \). Fit a linear model \( y = ax + b \) by minimizing the sum of squared residuals. Set up the objective function \( S(a, b) \), compute \( \partial S/\partial a \) and \( \partial S/\partial b \), and solve the resulting system.

**16. Machine learning interpretation.** A logistic regression model predicts the probability that email is spam. The loss function is the cross-entropy loss \( L(w) \) over 1000 training emails. A gradient descent update reduces \( L \) from 0.693 to 0.650 in one step with step size \( \alpha = 0.01 \). Estimate the norm of the gradient \( \|\nabla L\| \) at the starting point.

**17. Physics.** A ball is rolling in a potential energy landscape described by \( U(x) = x^4 - 3x^2 + x \). The ball tends to roll toward energy minima. Find all local minima numerically using Newton's method starting from \( x_0 = -1.5 \) and \( x_0 = 1.5 \).

---

## Error Analysis

**18.** After 10 steps of golden section search on an interval of initial width 5, what is the approximate width of the bracketing interval? How many additional steps are needed to reduce it below \( 10^{-4} \)?

**19.** Gradient descent is applied to \( f(x) = x^2 \) with step size \( \alpha \). Show algebraically that the error at step \( n \) satisfies \( |x_n - 0| = |1 - 2\alpha|^n |x_0| \). For what values of \( \alpha \) does this converge? What value of \( \alpha \) gives the fastest convergence?

**20.** Newton's method for optimization applied to a smooth strongly convex function converges quadratically. If the initial error is \( |x_0 - x^*| = 0.5 \), approximately how many iterations are needed to reduce the error below \( 10^{-8} \)?

**21.** A gradient descent algorithm is stopped when \( |x_{n+1} - x_n| < 10^{-4} \). Explain why this stopping criterion might declare convergence prematurely for a very small step size \( \alpha \). What additional check should be applied?

**22.** The Hessian of \( f(x, y) = x^2 + 4y^2 \) has eigenvalues 2 and 8. The condition number of the Hessian is \( \kappa = 8/2 = 4 \). The worst-case convergence factor for gradient descent with optimal step size is approximately \( (\kappa - 1)/(\kappa + 1) \). Compute this factor and estimate how many gradient descent iterations are needed to reduce the error by a factor of \( 10^{-6} \).

---

## Chapter Checkpoint

The checkpoint assesses command of the key ideas and skills of Chapter 11.

**Part A: Concepts**

1. Define local minimum and global minimum. Explain why they differ and when they coincide.

2. State the gradient descent update rule. Explain what each symbol represents.

3. Explain the role of convexity in guaranteeing that a numerical method finds the globally best answer.

4. What property of the function is required for golden section search to work correctly?

5. State Newton's method for optimization and explain when it converges faster than gradient descent.

**Part B: Calculations**

6. Apply golden section search to minimize \( f(x) = (x-3)^2 + 2 \) on \( [1, 5] \). Perform 3 iterations. What is the width of the bracketing interval after each step?

7. Apply Newton's method for optimization to minimize \( f(x) = x^2 - 2\ln(x) \) for \( x > 0 \), starting at \( x_0 = 0.5 \). Perform 3 iterations.

8. Apply gradient descent to minimize \( f(x, y) = (x-1)^2 + (y+2)^2 \) starting at \( (0, 0) \) with \( \alpha = 0.5 \). Perform 2 iterations.

**Part C: Applications and Interpretation**

9. A company's profit function is \( P(q) = -0.01q^2 + 5q - 200 \), where \( q \) is the quantity produced. Use Newton's method for optimization to find the output level maximizing profit. (Hint: maximize \( P \) by minimizing \( -P \).)

10. An engineer is running a gradient descent algorithm to minimize a smooth function. After 50 iterations, the iterate changes by \( 10^{-5} \) per step. The gradient norm is 0.3. Interpret this situation. Has the algorithm converged? What should the engineer do?

**Part D: Error Analysis**

11. Gradient descent is applied to \( f(x) = 5x^2 \) with \( x_0 = 10 \) and step size \( \alpha = 0.1 \). Determine whether the method converges and compute the error after 5 steps.

12. Golden section search is applied to a unimodal function on \( [0, 10] \). After 15 steps, what is the approximate length of the bracketing interval?

---

## Bridge Note

**Numerical optimization in advanced mathematics, science, and engineering.**

The ideas in this chapter are entry points into a vast and active field. In advanced mathematics, **convex optimization** studies the rich theory of optimization over convex sets and functions, with guaranteed global convergence and deep duality theory. Applications include compressed sensing, semidefinite programming, and optimal transport.

In scientific computing, **large-scale optimization** addresses problems with millions or billions of variables. Stochastic gradient descent, quasi-Newton methods (which approximate the Hessian without computing it explicitly), and conjugate gradient methods are standard tools for problems at this scale.

In machine learning, virtually every training procedure is an optimization algorithm. Understanding gradient descent, adaptive learning rates, and the geometry of loss landscapes is fundamental to understanding why neural networks work and how to train them effectively.

In operations research, **linear programming** and **integer programming** optimize linear and integer-valued objectives over polyhedral feasible regions. The **simplex method** and **interior point methods** solve these problems at industrial scale in logistics, scheduling, and resource allocation.

In control theory, **optimal control** minimizes a cost functional over the trajectory of a dynamical system, extending optimization ideas to differential equations and time evolution. This connects directly to Chapter 12's numerical ODE methods.

Students continuing in data science, engineering, computational science, or applied mathematics will encounter numerical optimization at every level. The methods introduced here—gradient descent, Newton's method, golden section search, constrained optimization—are the conceptual foundation for all that follows.

> **MGU Library Connection.** See the *Numerical Optimization Reference* (Appendix O) for a summary of method comparisons, convergence rates, and stopping criteria. The *Scientific Computing Technology Guide* (Appendix R) describes optimization libraries and software. Students interested in machine learning applications should see the MGU *Data Science Foundations* pathway. Students interested in constrained optimization theory should see the MGU *Advanced Numerical Analysis* readiness materials in Appendix T.

---

*Numerical Methods — MGU Mathematics Series — Library Textbook Edition*
*Chapter 11: Numerical Optimization*
