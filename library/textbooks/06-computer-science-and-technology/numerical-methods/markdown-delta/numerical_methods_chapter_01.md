# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part I: Foundations of Numerical Thinking and Error

---

# Chapter 1: What Numerical Methods Study

---

## Purpose

This chapter opens the study of numerical methods by explaining what the subject is, why it exists, and why it matters to every branch of quantitative science. Students entering this course often expect to encounter a collection of calculator shortcuts or programming recipes. What they will find instead is a coherent mathematical discipline built around a central problem: how do we compute reliable answers to mathematical questions when exact symbolic answers are unavailable, impractical, or impossible?

Numerical methods are not a concession to weakness. They are the mathematics that makes modern science, engineering, finance, and data analysis possible. This chapter establishes the philosophical foundation for everything that follows. It places numerical methods in context, introduces the vocabulary of approximation and algorithm, and begins to prepare students to think carefully about reliability, error, and convergence—ideas that will appear in every subsequent chapter.

---

## Opening Question

Suppose you need to know the value of the integral

$$\int_0^1 e^{-x^2} \, dx$$

You recognize that this is a perfectly well-defined mathematical object. The function $e^{-x^2}$ is smooth, positive, and bounded. The integral clearly has a value somewhere between 0 and 1. But if you sit down to compute it symbolically—to find an antiderivative in closed form—you will quickly discover that no elementary antiderivative exists. The Fundamental Theorem of Calculus gives you a framework, but it does not give you a formula.

How do you find the number? How close can you get? How do you know when you are close enough? How do you communicate how reliable your answer is?

These are the questions numerical methods are designed to answer.

---

## Why This Chapter Matters

Before studying specific algorithms, students should understand what kind of mathematics numerical methods is. Without this foundation, the methods that follow can feel like disconnected tricks. With it, each method takes on meaning: it is a structured strategy for turning an intractable exact problem into a tractable sequence of approximations, and for controlling the error that approximation introduces.

This chapter also introduces vocabulary—approximation, algorithm, iteration, convergence, discrete, continuous, stability—that will be used throughout the book. Encountering these terms here, in context and with explanation, prepares students to read every later chapter more fluently.

---

## Learning Objectives

By the end of this chapter, students should be able to:

- Describe what numerical methods study and why the subject exists
- Distinguish between exact symbolic answers and numerical approximations
- Explain why approximation is necessary in realistic mathematical problems
- Define algorithm, iteration, convergence, and discrete approximation
- Explain how numerical methods connect to calculus, linear algebra, and differential equations
- Identify situations where numerical answers can mislead
- Name real-world fields where numerical methods are essential
- Recognize and correct common early misunderstandings about numerical methods

---

## Key Terms

approximation, exact solution, numerical solution, algorithm, iteration, convergence, divergence, discretization, floating-point arithmetic, error, stability, conditioning, truncation, rounding, scientific computing, mathematical modeling

---

## 1.1 What Numerical Methods Study

Mathematics has two broad modes of answering questions. In the first mode, we seek an exact symbolic answer—a formula, an expression, a closed form that represents the solution precisely. The quadratic formula, for example, gives the exact roots of any quadratic equation. The Fundamental Theorem of Calculus gives exact antiderivatives for many functions. Gaussian elimination solves linear systems exactly, up to arithmetic.

In the second mode, we accept that an exact symbolic answer is unavailable, impractical, or unnecessary, and we seek a reliable numerical approximation—a number, or sequence of numbers, that is as close to the true answer as the problem requires, accompanied by an honest assessment of how close that approximation actually is.

Numerical methods is the study of this second mode. It asks: how do we systematically compute reliable approximations to mathematical quantities? How do we measure, control, and communicate the error in those approximations? How do we design algorithms that are efficient, stable, and trustworthy?

The subject draws from calculus, algebra, linear algebra, differential equations, and computer science. It is motivated by the enormous range of mathematical problems in science, engineering, economics, physics, finance, data analysis, and computation that resist exact symbolic solution.

Numerical methods does not abandon the precision of mathematics. It applies that precision to the problem of approximation itself. The goal is never to guess carelessly; it is to approximate rigorously.

---

## 1.2 Exact Answers and Approximate Answers

To appreciate why numerical methods exist, it helps to be clear about what an exact answer is and when one is available.

An exact answer to a mathematical problem is a symbolic expression that satisfies the problem's conditions precisely. The exact roots of $x^2 - 5x + 6 = 0$ are $x = 2$ and $x = 3$. The exact value of $\int_0^1 x^2 \, dx$ is $\frac{1}{3}$. The exact solution to the system $2x + y = 5$, $x - y = 1$ is $x = 2$, $y = 1$. These answers are represented symbolically, carry no error, and can be verified by substitution or algebraic manipulation.

A numerical answer, by contrast, is a number produced by a computational process. It approximates the true answer to within some tolerance. The numerical approximation of $\int_0^1 e^{-x^2} \, dx$ might be given as $0.74682$, with the understanding that the true value lies within some small distance of that figure.

The important thing to understand is that numerical answers are not inferior answers. In many situations, a numerical answer is the only answer available. More importantly, a numerical answer accompanied by an honest error estimate is far more useful than an exact formula that cannot be evaluated or communicated.

**Example 1.2.1.** The exact value of $\sqrt{2}$ is the positive real number whose square is 2. Its decimal expansion $1.41421356\ldots$ is infinite and non-repeating. When a calculator displays $1.41421356$, it is giving a numerical approximation accurate to eight decimal places. The answer is not exact, but it is reliable and useful, and the error is known to be less than $10^{-8}$.

**Example 1.2.2.** The eigenvalues of a general $100 \times 100$ matrix cannot be written as closed-form symbolic expressions. They must be approximated numerically. Numerical linear algebra provides methods for computing these approximations reliably.

The distinction between exact and approximate is real, but it should not be overstated. In practice, almost every numerical computation—even one that begins from an exact formula—involves floating-point arithmetic that introduces rounding errors. The question is not whether error is present, but whether it is understood and controlled.

---

## 1.3 Why Approximation Is Necessary

Students who have studied calculus and algebra might wonder why approximation is ever necessary. If mathematics provides exact tools—derivatives, integrals, inverses, series—why should we ever settle for an approximation?

The answer is that exact symbolic tools do not always produce usable answers. There are several distinct reasons for this.

**Nonexistent closed forms.** Many functions that arise naturally in science and engineering do not have antiderivatives expressible in elementary functions. The Gaussian integral $\int e^{-x^2} \, dx$, the error function, and many integrals from physics fall into this category. Calculus guarantees that the integral exists; it does not guarantee that we can write it in terms of polynomials, exponentials, logarithms, and trigonometric functions.

**Nonlinear equations.** Solving a nonlinear equation like $\cos(x) = x$ exactly is impossible using standard algebraic methods. The equation has a solution (a number near $0.739$), but finding it requires iteration and approximation.

**Large systems.** Solving a system of ten thousand linear equations exactly by hand is humanly impossible. Even on a computer, the cost of exact symbolic computation for large systems can be prohibitive, while numerical methods can find reliable approximations very efficiently.

**Differential equations.** Most differential equations that arise in practice do not have exact closed-form solutions. Even simple-looking equations like $y' = e^{x^2}$ resist symbolic solution. The solutions exist (by standard theorems), but they cannot be written in elementary form. Numerical ODE solvers approximate these solutions step by step.

**Sensitivity and instability.** Some exact formulas are mathematically correct but numerically disastrous because small errors in inputs produce large errors in outputs. Computing the exact formula may be worse than using a carefully designed numerical approximation.

**Data-driven problems.** When inputs come from physical measurements—temperature sensors, satellite readings, market prices—the data are not exact symbolic expressions. They are floating-point numbers with measurement uncertainty. There is no symbolic computation to perform; numerical methods are the only option.

Approximation is not a failure of mathematical ambition. It is the appropriate response to the realistic limits of what symbolic computation can produce.

---

## 1.4 Algorithms as Mathematical Procedures

The word *algorithm* appears throughout numerical methods, and it is worth establishing its meaning carefully.

An algorithm is a finite, well-defined sequence of steps that takes specified inputs, performs calculations or logical operations, and produces an output. The steps must be unambiguous: at each stage, there must be a clear rule for what to do next. The algorithm must terminate in a finite number of steps or reach a stopping condition.

This is not merely a programming concept. Mathematical algorithms predate computers by centuries. Euclid's algorithm for the greatest common divisor is an algorithm. Long division is an algorithm. Gaussian elimination is an algorithm. Newton's method for finding square roots, which has been known since antiquity, is an algorithm.

In numerical methods, algorithms have a distinctive structure. They typically:

- accept a mathematical problem as input (a function, an interval, a matrix, an initial condition),
- perform a sequence of arithmetic operations or logical tests,
- produce a sequence of approximate answers that improve with each step,
- stop when a specified accuracy criterion is met or a step limit is reached,
- return the final approximation and, ideally, an error estimate.

**Algorithm 1.4.1: Computing $\sqrt{a}$ by Repeated Averaging (Babylonian Method)**

```
Purpose: Approximate the square root of a positive number a.
Input:    a > 0, an initial guess x_0 > 0, tolerance tol > 0
Steps:
  1. Set n = 0.
  2. Compute x_{n+1} = (x_n + a / x_n) / 2.
  3. If |x_{n+1} - x_n| < tol, stop. Return x_{n+1}.
  4. Set n = n + 1. Return to step 2.
Output:   An approximation of sqrt(a) within tolerance tol.
Reliability note: This method converges for any positive starting guess.
  Each step roughly doubles the number of correct digits.
```

This ancient algorithm is a genuine numerical method. It is iterative (it repeats a step), it converges (the approximations approach the true answer), it has a stopping criterion (the change between successive values becomes smaller than a tolerance), and it produces a reliable approximation with a known quality.

Notice that understanding the algorithm requires understanding what it is trying to compute, why the averaging step moves the guess closer to the answer, and why the stopping criterion is appropriate. Algorithms in numerical methods are not magic recipes; they are mathematical procedures with reasons.

---

## 1.5 Iteration and Convergence

Most numerical algorithms are *iterative*: they generate a sequence of approximations $x_0, x_1, x_2, x_3, \ldots$ with the goal that the sequence approaches the true answer as the index increases.

An iterative method begins from an initial guess $x_0$ (sometimes called a starting value or seed). It then applies a rule to produce $x_1$ from $x_0$, $x_2$ from $x_1$, and so on. The rule is applied repeatedly until a stopping condition is satisfied.

**Convergence** means that the sequence of approximations approaches the true value as the iteration progresses. Formally, the sequence $\{x_n\}$ converges to a value $L$ if

$$\lim_{n \to \infty} x_n = L$$

In numerical practice, we never run an iteration infinitely. We stop when the approximation is good enough—when successive approximations differ by less than some tolerance, or when the residual (the error remaining in the equation) is small enough.

**Divergence** means the sequence does not approach a fixed value. The approximations might grow without bound, oscillate, or wander. A divergent iteration has failed to produce a reliable answer.

The speed of convergence matters as well. Some methods converge slowly—each new step adds only a little accuracy. Others converge rapidly—each step may double or quadruple the number of correct digits. Understanding convergence rate helps students choose methods wisely.

**Example 1.5.1.** Suppose we use the Babylonian algorithm to approximate $\sqrt{2}$, starting with $x_0 = 1$.

| Step $n$ | $x_n$ | $\|x_n - \sqrt{2}\|$ |
|---|---|---|
| 0 | 1.000000 | 0.41421 |
| 1 | 1.500000 | 0.08579 |
| 2 | 1.416667 | 0.00245 |
| 3 | 1.414216 | 0.0000006 |
| 4 | 1.414214 | $< 10^{-12}$ |

The convergence here is extremely rapid. After four steps, the approximation is correct to twelve decimal places. This remarkable speed is characteristic of Newton-type methods, which we will study in Chapter 3.

**Student note.** Convergence is a mathematical property of the sequence the algorithm produces, not simply a property of how long you run it. Before trusting an iterative computation, ask: does this method converge for this type of problem? How fast does it converge? How do I know when I am close enough?

---

## 1.6 Discrete Approximations to Continuous Problems

Calculus is the mathematics of the continuous. Derivatives measure instantaneous rates of change. Integrals accumulate over continuous intervals. Solutions to differential equations are continuous functions.

Computers, by contrast, work with finite collections of numbers. They cannot store infinitely many digits or perform infinitely many operations. Bridging the gap between continuous mathematics and discrete computation is one of the central challenges of numerical methods.

A *discrete approximation* replaces a continuous mathematical object with a finite collection of values. Instead of computing a function at all points, we compute it at finitely many sample points. Instead of integrating over a continuous interval, we sum over finitely many subintervals. Instead of following the exact solution of a differential equation, we track approximate values at finitely many time steps.

This replacement introduces *truncation error*—the error introduced by approximating a continuous limit by a finite process. Managing truncation error is one of the core skills in numerical methods.

**Example 1.6.1: Approximating an Integral by a Sum.**

The definite integral $\int_a^b f(x) \, dx$ is defined as a limit of Riemann sums:

$$\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{k=1}^n f(x_k^*) \cdot \Delta x$$

A numerical method for integration never takes this limit. Instead, it evaluates the sum at a large but finite $n$. The result is an approximation of the integral, and the error is the difference between the finite sum and the true limit. Choosing $n$ wisely—large enough for accuracy, small enough for efficiency—is a recurring theme.

**Diagram description.** Draw the graph of a smooth positive function $f(x)$ over the interval $[a, b]$. Divide the interval into four equal subintervals. Draw four rectangles whose heights equal the function value at the left endpoint of each subinterval. The total area of the rectangles is a discrete approximation of the continuous area under the curve. The shaded regions between the curve and the tops of the rectangles represent the truncation error.

The passage from continuous to discrete is not just an engineering compromise. It is the key mathematical move that makes computation possible. The quality of a numerical method depends largely on how accurately and efficiently it performs this passage.

---

## 1.7 Numerical Methods and Calculus

Calculus is the direct prerequisite for this course, and numerical methods is in many ways the computational counterpart of calculus. The connections are deep and specific.

**Derivatives and difference quotients.** The derivative $f'(x)$ is defined as the limit of the difference quotient:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

Numerical differentiation approximates this limit for a small but nonzero $h$:

$$f'(x) \approx \frac{f(x+h) - f(x)}{h}$$

This is both simpler and more limited than the symbolic derivative. It does not take the limit; it freezes $h$ at a small value. The error introduced is exactly the cost of not taking the limit, and it can be estimated using Taylor series—themselves a calculus tool. Chapter 6 develops this idea fully.

**Integrals and numerical sums.** As seen in Section 1.6, the definite integral is a limit of finite sums. Numerical integration methods—the midpoint rule, the trapezoidal rule, Simpson's rule—are structured ways of forming these sums efficiently. The error in each method is controlled by the smoothness of the integrand, which is again a calculus concept. Chapter 7 develops numerical integration systematically.

**Taylor series and local approximation.** Taylor series, which students encountered at the end of a calculus course, are the primary tool for deriving and analyzing numerical methods. The idea that any sufficiently smooth function can be approximated locally by a polynomial underlies finite difference formulas, error estimates for integration rules, and the convergence analysis of Newton's method. Chapter 8 develops Taylor approximation as a numerical tool.

**Newton's method.** Students who studied calculus may have encountered Newton's method for solving equations: start with a guess, draw the tangent line, and use the $x$-intercept of the tangent line as the next guess. This is a numerical method grounded in calculus. Chapter 3 develops it carefully.

**Differential equations.** Calculus provides the framework for differential equations—equations relating a function to its derivatives. Numerical methods provides the computational tools for approximating solutions when exact formulas do not exist. Chapters 12 and 13 cover ordinary and partial differential equations respectively.

The connection between calculus and numerical methods is not accidental. Many of the most powerful numerical methods are direct computational realizations of calculus ideas.

---

## 1.8 Numerical Methods and Linear Algebra

Students who have studied linear algebra will find it appearing throughout this textbook. Numerical methods and linear algebra are deeply intertwined.

**Linear systems.** Many applied problems reduce to solving a system of linear equations $\mathbf{A}\mathbf{x} = \mathbf{b}$, where $\mathbf{A}$ is a matrix of coefficients and $\mathbf{b}$ is a vector of known quantities. Gaussian elimination solves such systems exactly when the arithmetic is exact. But when the matrix is large—thousands or millions of rows—exact symbolic methods become impractical. Numerical linear algebra provides efficient, stable algorithms for large systems. Chapter 9 covers this.

**Least squares.** When data are noisy and overdetermined—more equations than unknowns—no exact solution exists. The least squares method finds the best approximate solution. It is formulated as a linear algebra problem and solved numerically. Chapter 5 covers curve fitting and least squares.

**Eigenvalues.** The eigenvalues of a matrix encode fundamental information about dynamical systems, vibrations, stability, networks, and data. Computing eigenvalues symbolically is only possible for very small matrices. For matrices arising in practice, numerical eigenvalue methods are essential. Chapter 10 covers this.

**Matrix conditioning.** Not all linear systems are created equal. A well-conditioned system changes its solution predictably when inputs change slightly. An ill-conditioned system has solutions that are extremely sensitive to small input perturbations. Understanding conditioning is essential to understanding when numerical linear algebra methods can be trusted. Chapter 9 introduces conditioning and Chapter 2 lays the groundwork.

Linear algebra provides the language and structure for a large part of numerical methods. Students who remember their matrix operations, dot products, and vector spaces will find this course reinforces and extends that knowledge.

---

## 1.9 Numerical Methods and Differential Equations

Differential equations describe change. The equations that govern heat flow, fluid dynamics, population growth, electrical circuits, chemical reactions, orbital mechanics, and economic models are almost all differential equations. Many of them do not have exact closed-form solutions.

Numerical methods for differential equations simulate change step by step. Given an initial state and a rule describing how the state changes (the differential equation), a numerical ODE solver computes the approximate state at each subsequent time step. The simulation is an approximation—the true continuous trajectory is replaced by a discrete sequence of computed states—but it can be made arbitrarily accurate by choosing a small enough step size, at the cost of more computation.

**Example 1.9.1.** The logistic differential equation

$$\frac{dy}{dt} = ry\left(1 - \frac{y}{K}\right)$$

models population growth with limited resources. Here $r$ is the growth rate and $K$ is the carrying capacity. For this particular equation, an exact symbolic solution exists:

$$y(t) = \frac{K}{1 + \left(\frac{K - y_0}{y_0}\right)e^{-rt}}$$

But for more complicated ecological models—involving multiple interacting species, seasonal variation, and stochastic effects—no such formula exists. Numerical ODE solvers compute approximate population trajectories in those cases.

Chapter 12 covers numerical methods for ordinary differential equations in full detail, including Euler's method, improved Euler's method, and the fourth-order Runge-Kutta method. Chapter 13 gives an accessible preview of numerical methods for partial differential equations, which govern phenomena distributed in space as well as time.

---

## 1.10 Computation, Technology, and Scientific Modeling

Numerical methods became practically indispensable with the development of electronic computers in the mid-twentieth century. Methods that had been known for centuries—Newton's method, the trapezoidal rule, Gaussian elimination—could suddenly be applied to problems of enormous scale and complexity.

Today, scientific computing is a major discipline that bridges mathematics, computer science, and applications. Numerical methods are embedded in every scientific computing environment: MATLAB, Python (with NumPy, SciPy), R, Julia, Fortran, C++, and many specialized engineering packages. Understanding numerical methods means understanding what these tools are doing and when to trust them.

This book is a mathematics textbook, not a programming manual. The algorithms it presents are described in mathematical terms and pseudocode, not in a specific programming language. However, students should be aware that the numerical ideas they learn here correspond directly to functions and libraries they will use in practice.

**Scientific modeling** is the use of mathematics to represent and simulate real phenomena. A model translates a physical, economic, or biological situation into equations. Numerical methods allow those equations to be solved or simulated even when exact solutions do not exist. The quality of a simulation depends on the quality of the model (does it capture the important features of reality?) and the quality of the numerical method (does it approximate the mathematical solution reliably?). Both questions require careful thinking.

**Example 1.10.1.** Weather forecasting uses numerical methods to simulate the atmosphere. The governing equations (the Navier-Stokes equations for fluid dynamics, coupled with thermodynamics) are partial differential equations with no general closed-form solution. Weather forecasting centers run numerical simulations on supercomputers, approximating the state of the atmosphere on a three-dimensional grid, advancing in small time steps, to produce multi-day forecasts. The accuracy of the forecast depends on the quality of the numerical methods, the resolution of the grid, the accuracy of the initial data, and the inherent limits of predictability in chaotic systems.

This example illustrates both the power and the limits of numerical computation. Numerical methods can produce remarkably accurate simulations—but the simulation is never the same as the phenomenon it models, and understanding the sources of error is essential.

---

## 1.11 When Numerical Answers Can Mislead

Numerical methods, carelessly applied, can produce confidently wrong answers. Students entering this subject should develop healthy skepticism—not toward numerical methods in general, but toward any specific numerical computation that has not been properly checked.

There are several common ways numerical computations go wrong.

**Catastrophic cancellation.** When two nearly equal numbers are subtracted, the result may have far fewer significant digits than either operand. For example, $1.000001 - 1.000000 = 0.000001$: the result has only one significant digit even if the operands had seven. This loss of significance can propagate and amplify in subsequent calculations. Section 2.10 covers this in detail.

**Ill-conditioning.** Some problems are inherently sensitive: small changes in inputs produce large changes in outputs. No numerical method can overcome this sensitivity; it is a property of the problem itself. Attempting to solve a highly ill-conditioned problem numerically without recognizing the conditioning produces unreliable results.

**Method divergence.** Not all iterative methods converge for all inputs. Newton's method can diverge if the initial guess is poor or if the function has unusual behavior. Bisection is more reliable but slower. Choosing an inappropriate method—or an inappropriate starting point—can produce a sequence that never approaches the correct answer.

**Insufficient resolution.** In integration or differential equations, using too large a step size means the discrete approximation misses important features of the continuous function or trajectory. The computed answer may be confidently precise (many decimal places) while being wildly inaccurate.

**Accumulated roundoff.** Each arithmetic operation on a computer introduces a tiny rounding error. In a short computation, this is negligible. In a computation involving millions of operations, the rounding errors can accumulate to a significant total error.

**Misinterpretation of results.** A numerical answer that looks reasonable can still be wrong if the problem was set up incorrectly, the stopping criterion was too loose, or the output was misread. Numerical methods require careful problem formulation, method selection, error estimation, and result interpretation—not just computation.

Learning to recognize these failure modes is as important as learning the methods themselves. Chapter 2 develops the vocabulary and concepts needed to analyze error, stability, and conditioning in any numerical computation.

---

## 1.12 Numerical Methods in Science, Engineering, Finance, and Data

To appreciate the scope of numerical methods, consider the range of problems they address in different fields.

**Physics and astronomy.** Calculating the orbit of a spacecraft requires solving a system of differential equations (Newton's laws of motion) over long time periods. No closed-form solution exists for three or more bodies. Numerical ODE solvers have been essential to every planetary mission. The same mathematics governs simulations of the Big Bang, black hole mergers, and quantum mechanical systems.

**Engineering.** Structural engineers analyze whether a bridge or building will withstand stress by solving large systems of linear equations arising from finite element models. Fluid dynamics simulations—used in aircraft design, automotive engineering, and pipeline management—solve partial differential equations on computational grids. Control systems use eigenvalue analysis to ensure stability.

**Finance.** Option pricing models (such as the Black-Scholes model) involve partial differential equations and stochastic processes. Numerical methods—finite difference methods, Monte Carlo simulation—are used to price options and assess risk. Portfolio optimization requires numerical optimization over high-dimensional spaces.

**Biology and medicine.** Epidemic models use differential equations to predict the spread of disease. Biomedical imaging (MRI, CT scanning) uses numerical algorithms—particularly linear algebra and Fourier analysis—to reconstruct images from measurement data. Protein structure prediction involves optimization in spaces with thousands of variables.

**Data science and machine learning.** Training a neural network is a high-dimensional numerical optimization problem. Gradient descent—one of the simplest numerical optimization methods—is the fundamental algorithm behind deep learning. Linear regression, logistic regression, and matrix factorization (used in recommendation systems) all involve numerical linear algebra.

**Climate science.** Climate models simulate the coupled atmosphere-ocean system using partial differential equations on global grids. Running a century-scale simulation at sufficient resolution requires massive computational resources and careful numerical methods that remain stable over thousands of time steps.

In each of these fields, numerical methods are not accessories to the mathematics—they are how the mathematics is actually applied. A student who understands numerical methods understands the computational tools that drive modern quantitative science.

---

## 1.13 Common Early Numerical Methods Misunderstandings

Students often bring misconceptions to numerical methods that, if left uncorrected, can interfere with learning. Here are several of the most common ones.

**Misunderstanding 1: Numerical methods are just for people who can't do "real" mathematics.**
This misunderstanding confuses the goal of exact symbolic computation with the goal of reliable computation. Numerical methods are not a fallback for the mathematically weak. They are a rigorous discipline applied precisely because exact symbolic computation is insufficient for the problems we care about most.

**Misunderstanding 2: A more decimal places in an answer means it is more accurate.**
A computation can produce a result with sixteen decimal places that is completely wrong. Precision (how many digits are shown) is not the same as accuracy (how close the answer is to the true value). A numerical answer is only useful when accompanied by an honest error estimate.

**Misunderstanding 3: A smaller step size always gives a better answer.**
In numerical integration and numerical differentiation, making the step size very small introduces roundoff errors that compete with the truncation error. There is an optimal step size—often surprisingly large—beyond which making steps smaller actually worsens the result. Chapter 6 explores this tradeoff carefully.

**Misunderstanding 4: If the computation converges, it must be converging to the right answer.**
An iterative method can converge to a local minimum instead of a global one, to a nearby root instead of the desired one, or to a spurious solution introduced by the algorithm itself. Convergence means the sequence settles; it does not automatically mean the sequence settles at the correct value.

**Misunderstanding 5: Numerical methods are not real mathematics—they are just approximations.**
Every approximation in numerical methods is surrounded by precise mathematical statements about error bounds, convergence rates, and stability conditions. The study of these statements is rigorous, beautiful mathematics. Numerical analysis is a serious mathematical field with deep connections to analysis, algebra, and computation.

**Misunderstanding 6: You only need numerical methods when you don't know the formula.**
Even when an exact formula is known, evaluating it numerically can introduce problems if the formula is not computed carefully. Numerical methods also include the study of how to evaluate exact formulas reliably in finite-precision arithmetic.

Keeping these misunderstandings in mind will help students engage more honestly and productively with the material.

---

## 1.14 Preparing for Error Analysis

The subject of Chapter 2 is error—how it arises, how it is measured, how it propagates, and how it is controlled. This section prepares students for that discussion by introducing the central question.

Every numerical computation produces an approximate answer. Let us call the true answer $p$ and the computed approximation $p^*$. The *absolute error* is

$$|p - p^*|$$

the distance between the true value and the computed value. The *relative error* is

$$\frac{|p - p^*|}{|p|}$$

the absolute error expressed as a fraction of the true value.

These simple definitions raise many questions. How large is the error? Where does it come from? Does it grow as the computation proceeds, or does it stay bounded? How can we estimate the error when we don't know the true value? What features of the problem or the algorithm make error easier or harder to control?

Chapter 2 answers these questions systematically. It introduces the vocabulary and tools for error analysis that will be applied in every subsequent chapter. Before that chapter begins, students should carry a basic insight: every step of a numerical computation either introduces new error or transforms existing error. Understanding where error comes from and where it goes is the core discipline of numerical methods.

**Motivating example for Chapter 2.** Suppose you use the formula $f'(x) \approx \frac{f(x+h) - f(x)}{h}$ to estimate the derivative of $f(x) = e^x$ at $x = 1$. The true value is $f'(1) = e \approx 2.71828$.

Using $h = 0.1$: the approximation is $\frac{e^{1.1} - e^1}{0.1} \approx 2.8588$. Error: about $0.140$.

Using $h = 0.01$: the approximation is $\frac{e^{1.01} - e^1}{0.01} \approx 2.7319$. Error: about $0.014$.

Using $h = 0.001$: the approximation is $\approx 2.7196$. Error: about $0.0014$.

The error decreases as $h$ decreases—but not without limit. At very small values of $h$, floating-point roundoff begins to dominate and the error increases again. Chapter 2 will explain exactly why this happens and how to predict it.

---

## Chapter Summary

Numerical methods is the study of systematic computation of reliable approximations to mathematical quantities. It exists because many important mathematical problems—nonlinear equations, complicated integrals, large linear systems, differential equations without closed-form solutions—resist exact symbolic treatment.

A numerical method is typically iterative: it produces a sequence of approximations $x_0, x_1, x_2, \ldots$ that converge toward the true answer. The algorithm specifies how each approximation is computed from the previous one, when to stop, and how to estimate the error in the final result.

Numerical methods connects deeply to calculus (through derivatives, integrals, and Taylor series), linear algebra (through linear systems, least squares, and eigenvalue problems), and differential equations (through ODE and PDE solvers). It is not a substitute for these subjects but a computational counterpart to them.

The subject applies across science, engineering, finance, biology, data science, and machine learning. It is not a collection of calculator tricks; it is a rigorous discipline for computing reliably under conditions where exact formulas are unavailable.

The central discipline of numerical methods is error analysis: understanding how approximation errors arise, how they propagate, and how they can be controlled. Chapter 2 begins this analysis.

---

## Key Terms Review

**Approximation.** A value that is close to, but not exactly equal to, the true value of a mathematical quantity.

**Algorithm.** A finite, well-defined sequence of steps that takes inputs and produces outputs.

**Iteration.** The process of repeatedly applying a rule to generate successive approximations.

**Convergence.** The property of a sequence approaching a limiting value as the iteration proceeds.

**Divergence.** The failure of a sequence to approach a limiting value.

**Discretization.** The process of replacing a continuous mathematical problem with a finite collection of values.

**Truncation error.** The error introduced by approximating a continuous limit with a finite process.

**Rounding error.** The error introduced by representing real numbers with finite precision in a computer.

**Stability.** The property of an algorithm that prevents small errors from growing uncontrollably.

**Conditioning.** The sensitivity of a mathematical problem's solution to small changes in its inputs.

**Scientific computing.** The use of computers and numerical methods to simulate and solve mathematical models of real phenomena.

---

## Concept Review Questions

1. What is the difference between an exact answer and a numerical approximation? Give an example of a mathematical problem where an exact closed-form answer exists, and one where it does not.

2. Name four reasons why approximation may be necessary even when a mathematical problem has a well-defined exact answer.

3. What is an algorithm? What features must a procedure have to count as an algorithm?

4. Explain what it means for a sequence of approximations to converge. Why does convergence not guarantee that the limit is the correct answer?

5. What is the difference between truncation error and rounding error? Give an intuitive description of each.

6. Explain in your own words why making the step size very small does not always improve the accuracy of a numerical derivative estimate.

7. Describe one way in which numerical methods connects to calculus, and one way it connects to linear algebra.

8. Name three fields in which numerical methods play an essential role, and briefly describe the type of problem that numerical methods solves in each.

9. What is the difference between precision and accuracy in a numerical computation?

10. What is meant by the conditioning of a problem? Why does a well-designed numerical method not automatically overcome poor conditioning?

---

## Skill Practice

**1.** The Babylonian algorithm for $\sqrt{a}$ uses the update rule $x_{n+1} = \frac{1}{2}\left(x_n + \frac{a}{x_n}\right)$.

(a) Starting with $x_0 = 2$, apply three iterations to approximate $\sqrt{5}$.
(b) How large is the error after three iterations? (Use $\sqrt{5} \approx 2.2360679\ldots$)
(c) Describe the rate at which the error appears to decrease with each step.

**2.** Decide for each integral whether you expect an exact closed-form antiderivative to exist. If yes, find it. If no, explain why not.

(a) $\int x^3 e^x \, dx$
(b) $\int e^{x^2} \, dx$
(c) $\int \frac{1}{1 + x^2} \, dx$
(d) $\int \cos(x^2) \, dx$

**3.** Consider the equation $x = \cos(x)$.

(a) Show graphically or by evaluating at a few points that this equation has exactly one solution in $[0, 1]$.
(b) Give a rough numerical estimate of the solution. (You may use a calculator.)
(c) Why is an exact symbolic solution not possible using standard algebraic techniques?

**4.** Use the forward difference formula $f'(x) \approx \frac{f(x+h) - f(x)}{h}$ to estimate $f'(2)$ for $f(x) = x^3$ using:

(a) $h = 0.1$
(b) $h = 0.01$
(c) $h = 0.001$

The exact answer is $f'(2) = 12$. Compute the absolute error in each case. What do you observe about the error as $h$ decreases?

**5.** Describe in words (not code) an algorithm for finding the smallest integer $n$ such that $2^n > 1000$. Identify the input, the steps, the stopping criterion, and the output.

---

## Computational Interpretation Problems

**6.** A numerical computation returns the value $3.14159$. The true value is $\pi = 3.14159265\ldots$

(a) What is the absolute error?
(b) What is the relative error?
(c) How many significant digits does the approximation agree with?

**7.** Two numbers are nearly equal: $a = 1.000043$ and $b = 1.000037$.

(a) Compute $a - b$.
(b) How many significant digits does the result have?
(c) Why might this subtraction be problematic in a longer computation?

**8.** The sequence $x_0 = 1.5, x_1 = 1.4167, x_2 = 1.4142, x_3 = 1.4142\ldots$ is produced by the Babylonian algorithm applied to some value $a$.

(a) What value of $a$ appears to be the target of this computation?
(b) Is the sequence converging? Justify your answer.
(c) After step $x_2$, what is the absolute error?

---

## Applications

**9. Orbital mechanics.** The time for a satellite to travel between two points in an elliptical orbit cannot in general be expressed as a closed formula in elementary functions (this is related to Kepler's equation). Describe in general terms how numerical methods could be used to determine the transit time.

**10. Medical imaging.** In a CT scan, the device measures X-ray absorption along many different lines through the body. The mathematical problem is to reconstruct a two-dimensional cross-section of tissue from these line measurements. This is an inverse problem involving a large linear system. Why might numerical methods be necessary here? What challenges would arise from attempting an exact symbolic solution?

**11. Climate modeling.** A climate researcher is simulating the atmosphere over a $1000 \times 1000$ km region using a grid with one measurement point every $10$ km in each direction.

(a) How many grid points are in the horizontal plane?
(b) If the researcher tracks five atmospheric variables (temperature, pressure, humidity, wind speed east-west, wind speed north-south) at each grid point, how many numbers must be updated at each time step?
(c) Describe qualitatively why exact symbolic computation is not feasible for this problem.

**12. Finance.** An analyst prices a financial option using a numerical method and obtains the value $\$47.32$. The method is known to introduce an error of at most $\pm\$0.50$.

(a) What is the range of plausible true values?
(b) If the current market price of the option is $\$47.00$, should the analyst conclude the option is underpriced? What considerations matter?

---

## Error Analysis

**13.** The forward difference formula gives $f'(1) \approx 2.741$ when $f(x) = e^x$ and $h = 0.1$. The true value is $e \approx 2.71828$.

(a) Compute the absolute error.
(b) Compute the relative error (as a percentage).
(c) If you halved $h$ to $0.05$, roughly what absolute error would you expect? (Assume the error is proportional to $h$.)

**14.** Consider two algorithms $A$ and $B$ for approximating the same quantity. After 10 iterations, algorithm $A$ gives an error of $0.001$ and algorithm $B$ gives an error of $0.0001$.

(a) Which algorithm is more accurate after 10 iterations?
(b) After 20 iterations, algorithm $A$ has error $0.000001$ and algorithm $B$ has error $0.00000001$. What can you say about the relative convergence speeds?
(c) If each iteration takes twice as long for $B$ as for $A$, which algorithm would you prefer for a result accurate to $10^{-6}$? Explain.

---

## Chapter 1 Checkpoint

The checkpoint below covers the main ideas of this chapter. It is designed to test conceptual understanding, not computational speed.

**C1.** Explain in two or three sentences what numerical methods studies and why it exists as a mathematical discipline.

**C2.** Give an example of a mathematical problem that has an exact closed-form solution and one that does not. Explain why the second example resists exact treatment.

**C3.** Identify the four components of an algorithm: input, steps, stopping criterion, and output. Illustrate each with the Babylonian square root algorithm.

**C4.** The sequence $3, 3.1, 3.14, 3.141, 3.1415, 3.14159, \ldots$ is offered as a numerical approximation of $\pi$.

(a) Is this sequence converging? Explain.
(b) What is the absolute error after the sixth term?
(c) How many terms are needed to achieve an absolute error less than $0.001$?

**C5.** Describe one way numerical methods can produce a misleading answer. What practice or check would help prevent the misleading interpretation?

**C6.** Choose one field from Section 1.12 (science, engineering, finance, or data) and explain in your own words what type of mathematical problem numerical methods solves in that field.

---

## Bridge Note

Chapter 1 has introduced numerical methods as the mathematics of reliable approximation. The next step is to develop the tools for measuring, describing, and controlling the errors that approximation inevitably introduces.

**Chapter 2: Error, Floating-Point Arithmetic, and Stability** builds the analytical vocabulary that will be used in every subsequent chapter. It covers absolute error, relative error, significant digits, rounding error, truncation error, floating-point representation, machine precision, loss of significance, error propagation, conditioning, and algorithmic stability.

After Chapter 2, students will have both a conceptual foundation (what numerical methods is and why it exists) and an analytical foundation (how to measure and discuss error). Together, these two chapters make up Part I of the textbook, and they establish the perspective that should accompany every numerical computation: *What am I approximating? How close am I? Can I trust this answer?*

---

> **MGU Library Connection.** This chapter connects to the following MGU Library resources:
> - *Calculus* — Chapter 1 (functions, limits), Chapter 4 (derivatives and their meaning), Chapter 5 (the definite integral and accumulation), Chapter 10 (series and Taylor polynomials)
> - *Linear Algebra* — Chapter 1 (matrices and linear systems), Chapter 5 (eigenvalues and eigenvectors)
> - *Differential Equations* — Chapter 1 (introduction to ODEs), Chapter 2 (first-order equations)
> - *Numerical Methods Appendix D* — Programming and Pseudocode Reference
> - *Numerical Methods Appendix E* — Error Analysis Reference
>
> Students who would like to review calculus fundamentals before continuing should consult the *Calculus Readiness Review* in Appendix A of this textbook.

---

*End of Chapter 1*
