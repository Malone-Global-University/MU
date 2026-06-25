# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part V: Numerical Differential Equations, Simulation, and Capstone Computing

---

# Chapter 12: Numerical Methods for Ordinary Differential Equations

---

## Purpose

This chapter introduces numerical methods for solving ordinary differential equations. Many differential equations that arise in science, engineering, finance, and physics cannot be solved by symbolic techniques. Even when a closed-form solution exists, numerical simulation often provides the fastest and most practical route to understanding how a system behaves. Students will learn to approximate solutions to initial value problems by computing step-by-step trajectories through the solution space. The methods developed here — Euler's method, the improved Euler method, and the Runge-Kutta family — represent some of the most important and widely used algorithms in all of applied mathematics.

Students who have completed the calculus prerequisites for this course and have some exposure to differential equations will find that numerical ODE methods bring together nearly every idea studied so far: function evaluation, approximation, iteration, error analysis, convergence, and stability. The chapter closes with a discussion of systems of differential equations and stiff equations, preparing students for Chapter 13 and the capstone chapter that follows.

---

## Opening Question

A population of bacteria doubles under ideal conditions, but growth slows as nutrients become scarce. A simple logistic model gives:

$$\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right)$$

where \( r \) is the intrinsic growth rate and \( K \) is the carrying capacity. Suppose \( r = 0.5 \), \( K = 1000 \), and the initial population is \( P(0) = 50 \). What is the population after 10 days?

The logistic equation has an exact closed-form solution. But many models in ecology, epidemiology, fluid mechanics, electrical engineering, and orbital mechanics do not. What do we do when we cannot integrate the differential equation symbolically? We compute numerically, advancing the solution one step at a time. This chapter teaches how.

---

## Why This Chapter Matters

Differential equations are the language of change. Every physical process that evolves over time — the temperature of a cooling object, the velocity of a falling body, the voltage across a capacitor, the concentration of a drug in the bloodstream, the spread of an infectious disease, the trajectory of a spacecraft — can be modeled by a differential equation or a system of differential equations.

Symbolic techniques for solving differential equations cover important cases: linear equations with constant coefficients, separable equations, exact equations, and a handful of others. But most differential equations arising from real scientific and engineering problems are nonlinear, coupled, or otherwise resistant to closed-form analysis. Numerical methods make it possible to simulate the behavior of these systems to whatever accuracy a problem demands.

Understanding numerical ODE methods also builds insight into differential equations themselves. Watching an approximation trace out a solution curve step by step gives an intuition for how solutions behave that symbolic formulas sometimes obscure.

---

## Learning Objectives

By the end of this chapter, students should be able to:

- Identify an initial value problem and state what a numerical solution approximates.
- Apply Euler's method to generate a numerical solution to a first-order initial value problem.
- Apply the improved Euler method (Heun's method) and explain how it improves on Euler's method.
- Apply the classical fourth-order Runge-Kutta method.
- Estimate and discuss local truncation error and global error.
- Choose an appropriate step size by balancing accuracy and computational cost.
- Recognize the difference between a stable and unstable numerical method for a given equation.
- Set up and solve a system of first-order differential equations numerically.
- Identify characteristics of stiff equations and explain why standard methods struggle with them.
- Interpret numerical ODE results in scientific and engineering contexts.

---

## Key Terms

**initial value problem (IVP)** — A differential equation together with a specified value of the solution at an initial point.

**Euler's method** — The simplest numerical ODE solver; advances the solution using the slope at the current point.

**local truncation error** — The error introduced in a single step of a numerical ODE method.

**global error** — The accumulated error in the numerical solution at a given point, resulting from all local errors along the way.

**improved Euler method (Heun's method)** — A second-order method that averages the slope at the beginning and end of each step.

**Runge-Kutta methods** — A family of numerical ODE solvers that use weighted combinations of function evaluations within each step to achieve higher accuracy.

**fourth-order Runge-Kutta (RK4)** — The classical Runge-Kutta method, accurate to order four; arguably the most widely used ODE solver.

**step size** — The increment \( h \) in the independent variable between consecutive approximations.

**order of a method** — The power of \( h \) that governs the local truncation error; a method of order \( p \) has local error proportional to \( h^{p+1} \).

**numerical stability** — The property that small errors do not grow uncontrollably as the method advances.

**stiff equation** — A differential equation in which some solution components decay very rapidly, forcing small step sizes for stability even when accuracy does not require them.

**system of ODEs** — A collection of simultaneous first-order differential equations describing multiple interacting quantities.

---

## 12.1 Why ODEs Need Numerical Methods

A first-order ordinary differential equation expresses a relationship between an unknown function and its derivative:

$$\frac{dy}{dt} = f(t, y)$$

The function \( f(t, y) \) specifies the rate of change of \( y \) at every point in the \((t, y)\)-plane. Solving the equation means finding a function \( y(t) \) whose derivative satisfies this relationship everywhere on an interval of interest.

When \( f(t, y) \) is simple enough — say, \( f(t, y) = ay \) or \( f(t, y) = g(t) \) — symbolic integration yields an exact formula. The exponential growth equation \( y' = ay \) has the exact solution \( y(t) = y_0 e^{at} \). The equation \( y' = \sin(t) \) can be integrated directly.

But consider \( f(t, y) = \sin(y) + t^2 y \), or a logistic model with a seasonal forcing term, or any coupled system describing the interaction of predator and prey populations. No general technique solves these symbolically. Even when numerical analysts can prove that a solution exists and is unique — the Picard-Lindelöf theorem guarantees this under mild conditions on \( f \) — the proof does not supply a formula.

Numerical methods provide a workaround: instead of finding the exact solution function \( y(t) \), we compute a sequence of approximate values

$$y_0 \approx y(t_0),\quad y_1 \approx y(t_1),\quad y_2 \approx y(t_2),\quad \ldots$$

at a discrete set of time points \( t_0 < t_1 < t_2 < \cdots \). These values trace out an approximate solution curve. If the method is well chosen and the step size is small enough, the approximation can be made as accurate as required.

This philosophy — approximate a continuous problem by a discrete one — runs throughout numerical methods. What is new in this chapter is that the approximation must be built step by step, because each approximate value depends on the previous one.

---

## 12.2 Initial Value Problems Review

An **initial value problem** (IVP) consists of:

1. A first-order differential equation: \( \dfrac{dy}{dt} = f(t, y) \)
2. An initial condition: \( y(t_0) = y_0 \)

The initial condition pins down a specific solution from among all the functions satisfying the differential equation. Without it, the general solution contains an arbitrary constant, and we have infinitely many possibilities.

**Example.** The general solution to \( y' = 2t \) is \( y = t^2 + C \). If we require \( y(0) = 3 \), then \( C = 3 \) and the unique solution is \( y = t^2 + 3 \).

For numerical work, the initial condition provides the starting point. We know \( y_0 = y(t_0) \) exactly (or as precisely as the problem permits), and we advance forward in time, computing \( y_1, y_2, \ldots \) at successive time values \( t_1, t_2, \ldots \).

The step size \( h \) is the increment between time values:

$$t_{n+1} = t_n + h$$

A uniform step size is simplest and sufficient for most introductory problems. Adaptive methods, which vary \( h \) automatically, are introduced briefly in Section 12.7.

**Higher-order equations.** A second-order equation such as

$$y'' = f(t, y, y')$$

with initial conditions \( y(t_0) = y_0 \) and \( y'(t_0) = v_0 \) can always be rewritten as a system of two first-order equations. This reduction is important: every method in this chapter applies to first-order equations, so higher-order problems and coupled systems are handled by the same framework after this reduction. Section 12.10 treats systems in detail.

---

## 12.3 Euler's Method

Euler's method is the oldest and simplest numerical ODE solver. It is not the most accurate method studied in this chapter, but it is the most transparent: every idea needed to understand more sophisticated methods — discrete steps, local error, global accumulation, step size control — appears in its simplest form here.

### Derivation

Suppose we know \( y(t_n) \) and we want to estimate \( y(t_{n+1}) \) where \( t_{n+1} = t_n + h \). The Taylor expansion of \( y \) around \( t_n \) gives:

$$y(t_{n+1}) = y(t_n) + h\, y'(t_n) + \frac{h^2}{2}\, y''(t_n) + \cdots$$

Euler's method keeps only the first two terms, replacing the exact derivative \( y'(t_n) \) with the known quantity \( f(t_n, y_n) \):

$$y_{n+1} = y_n + h\, f(t_n, y_n)$$

Geometrically, Euler's method moves along the tangent line to the solution curve at \( (t_n, y_n) \) for a distance \( h \) in the \( t \)-direction. At the new point, it recomputes the slope using \( f(t_{n+1}, y_{n+1}) \) and takes the next step.

**Diagram instruction.** Draw the \( (t, y) \)-plane. Sketch the true solution curve passing through \( (t_0, y_0) \). At \( (t_0, y_0) \), draw the tangent line with slope \( f(t_0, y_0) \). Mark the Euler step landing at \( (t_1, y_1) \). Show how \( y_1 \) differs slightly from the true value \( y(t_1) \). Repeat for the next step, with the gap between the Euler trajectory and the true curve widening slightly.

### Algorithm

**Algorithm: Euler's Method**

- **Purpose:** Approximate the solution of \( y' = f(t, y) \), \( y(t_0) = y_0 \) at \( t_0 + Nh = T \).
- **Inputs:** \( f(t, y) \), \( t_0 \), \( y_0 \), step size \( h \), number of steps \( N \).
- **Steps:**
  1. Set \( t \leftarrow t_0 \), \( y \leftarrow y_0 \).
  2. For \( n = 0, 1, 2, \ldots, N-1 \):
     - Compute \( k \leftarrow f(t, y) \).
     - Update \( y \leftarrow y + h \cdot k \).
     - Update \( t \leftarrow t + h \).
  3. Return \( (t, y) \) pairs as the approximate solution.
- **Stopping criterion:** Loop completes after \( N \) steps, reaching \( t = T \).
- **Output:** Table of \( (t_n, y_n) \) pairs.
- **Reliability notes:** Accuracy degrades as \( h \) increases or the solution curve bends sharply. The method has local truncation error of order \( O(h^2) \) and global error of order \( O(h) \).

---

**Example 12.3.1 — Euler's Method on an Exponential Equation**

**Problem.** Use Euler's method with step size \( h = 0.2 \) to approximate the solution of

$$\frac{dy}{dt} = y, \quad y(0) = 1$$

on the interval \( [0, 1] \). Compare with the exact solution \( y(t) = e^t \).

**Think.** The differential equation says the rate of change of \( y \) equals \( y \) itself. We know the solution is the exponential function. With five steps of size \( h = 0.2 \), we will produce five approximations. At each step we multiply the current value by \( 1 + h = 1.2 \) — effectively compound interest at continuous rate 1.

**Method.** Euler's method: \( y_{n+1} = y_n + h \cdot f(t_n, y_n) = y_n + 0.2 \cdot y_n = 1.2 \, y_n \).

**Compute.**

| \( n \) | \( t_n \) | \( y_n \) | \( f(t_n, y_n) \) | \( h \cdot f \) | Exact \( e^{t_n} \) | Error |
|---|---|---|---|---|---|---|
| 0 | 0.0 | 1.0000 | 1.0000 | 0.2000 | 1.0000 | 0.0000 |
| 1 | 0.2 | 1.2000 | 1.2000 | 0.2400 | 1.2214 | 0.0214 |
| 2 | 0.4 | 1.4400 | 1.4400 | 0.2880 | 1.4918 | 0.0518 |
| 3 | 0.6 | 1.7280 | 1.7280 | 0.3456 | 1.8221 | 0.0941 |
| 4 | 0.8 | 2.0736 | 2.0736 | 0.4147 | 2.2255 | 0.1519 |
| 5 | 1.0 | 2.4883 | — | — | 2.7183 | 0.2300 |

**Check.** At \( t = 1 \), Euler gives \( y_5 = 1.2^5 = 2.4883 \), while the exact value is \( e \approx 2.7183 \). The error is about \( 0.23 \), roughly \( 8.5\% \) of the true value. The error grows with each step because each step starts from a slightly wrong value.

**Interpret.** Euler's method underestimates here because the solution is concave up (accelerating growth) and the tangent line lies below the curve. Halving the step size would roughly halve the global error, consistent with the first-order nature of the method.

---

### Student Warning: Euler's Method Is a Starting Point, Not an Endpoint

Euler's method is presented first because it is easy to understand, not because it is good enough for serious computation. Its first-order global error means that to gain one extra decimal digit of accuracy, you must take ten times as many steps. In practice, Euler's method is rarely used by itself. The methods in Sections 12.4 and 12.5 achieve substantially better accuracy with fewer function evaluations.

---

## 12.4 Improved Euler Method

Euler's method uses the slope at the left endpoint of each interval to step forward. A natural improvement is to use a better estimate of the slope — specifically, an average of the slope at the beginning and end of the interval.

The difficulty is that we do not know \( y(t_{n+1}) \) yet, so we cannot directly compute the slope at the right endpoint. The improved Euler method (also called **Heun's method**) resolves this with a two-stage process:

**Stage 1 (Predictor).** Use Euler's method to produce a preliminary estimate of \( y_{n+1} \):

$$\tilde{y}_{n+1} = y_n + h\, f(t_n, y_n)$$

**Stage 2 (Corrector).** Average the slopes at the beginning and the predicted end:

$$y_{n+1} = y_n + \frac{h}{2}\left[f(t_n, y_n) + f(t_{n+1}, \tilde{y}_{n+1})\right]$$

This is a **predictor-corrector** scheme. The predictor gets us a rough endpoint; the corrector uses that endpoint to improve the slope estimate.

### Why It Works Better

The improved Euler method is equivalent to using the trapezoidal rule to approximate the integral in the exact solution formula:

$$y(t_{n+1}) = y(t_n) + \int_{t_n}^{t_{n+1}} f(t, y(t))\, dt$$

The trapezoidal rule applied to the integrand gives exactly the averaging formula above. Since the trapezoidal rule has local error \( O(h^3) \) compared to the rectangle rule's \( O(h^2) \), the improved Euler method has local truncation error of order \( O(h^3) \) and global error of order \( O(h^2) \). This is the definition of a **second-order method**: halving the step size reduces the global error by a factor of four.

### Algorithm

**Algorithm: Improved Euler Method (Heun's Method)**

- **Purpose:** Second-order approximation to \( y' = f(t, y) \), \( y(t_0) = y_0 \).
- **Inputs:** \( f(t, y) \), \( t_0 \), \( y_0 \), step size \( h \), number of steps \( N \).
- **Steps:**
  1. Set \( t \leftarrow t_0 \), \( y \leftarrow y_0 \).
  2. For \( n = 0, 1, \ldots, N-1 \):
     - Compute \( k_1 \leftarrow f(t, y) \).
     - Compute \( k_2 \leftarrow f(t + h,\; y + h \cdot k_1) \).
     - Update \( y \leftarrow y + \dfrac{h}{2}(k_1 + k_2) \).
     - Update \( t \leftarrow t + h \).
  3. Return table of \( (t_n, y_n) \).
- **Reliability notes:** Global error \( O(h^2) \); requires two function evaluations per step.

---

**Example 12.4.1 — Improved Euler on the Logistic Equation**

**Problem.** Apply the improved Euler method with \( h = 0.5 \) to

$$\frac{dP}{dt} = 0.5P\!\left(1 - \frac{P}{1000}\right), \quad P(0) = 50$$

for two steps.

**Think.** The logistic equation has an exact solution, so we can verify our work. But the calculation also illustrates the predictor-corrector structure on a nonlinear equation.

**Method.** Here \( f(t, P) = 0.5P(1 - P/1000) \).

**Compute — Step 1 (\( t = 0 \) to \( t = 0.5 \)):**

\( k_1 = f(0, 50) = 0.5 \times 50 \times (1 - 50/1000) = 25 \times 0.95 = 23.75 \)

Predictor: \( \tilde{P}_1 = 50 + 0.5 \times 23.75 = 50 + 11.875 = 61.875 \)

\( k_2 = f(0.5, 61.875) = 0.5 \times 61.875 \times (1 - 61.875/1000) = 30.9375 \times 0.938125 \approx 29.028 \)

Corrector: \( P_1 = 50 + \frac{0.5}{2}(23.75 + 29.028) = 50 + 0.25 \times 52.778 = 50 + 13.194 = 63.194 \)

**Compute — Step 2 (\( t = 0.5 \) to \( t = 1.0 \)):**

\( k_1 = f(0.5, 63.194) = 0.5 \times 63.194 \times (1 - 63.194/1000) \approx 31.597 \times 0.93681 \approx 29.600 \)

Predictor: \( \tilde{P}_2 = 63.194 + 0.5 \times 29.600 = 63.194 + 14.800 = 77.994 \)

\( k_2 = f(1.0, 77.994) \approx 0.5 \times 77.994 \times (1 - 0.077994) \approx 38.997 \times 0.922006 \approx 35.955 \)

Corrector: \( P_2 = 63.194 + \frac{0.5}{2}(29.600 + 35.955) = 63.194 + 0.25 \times 65.555 = 63.194 + 16.389 = 79.583 \)

**Check.** The exact solution at \( t = 1 \) (from the logistic formula) is approximately \( P(1) \approx 77.7 \). The improved Euler approximation \( P_2 \approx 79.58 \) is somewhat above the true value with this large step size. With \( h = 0.1 \), the error would be much smaller.

**Interpret.** Even with a step size as large as 0.5, the improved Euler method gives a reasonable approximation. The predictor-corrector structure allows it to capture some curvature in the solution that Euler's method misses entirely.

---

## 12.5 Runge-Kutta Methods

The Euler and improved Euler methods belong to a broad and important family called **Runge-Kutta methods**. These methods approximate the solution by taking weighted combinations of function evaluations within each step. No derivatives of \( f \) are required — only evaluations of \( f \) at strategically chosen points.

The key idea is to match terms in a Taylor expansion of the true solution by choosing evaluation points and weights carefully. A method that matches through the term \( h^p \) in the Taylor expansion is called a **method of order \( p \)**:

- Euler's method: order 1 (matches through \( h^1 \))
- Improved Euler: order 2 (matches through \( h^2 \))
- Classical RK4: order 4 (matches through \( h^4 \))

Higher order means that each step is a better approximation of the true solution increment. For smooth equations, higher order dramatically reduces the number of steps needed to achieve a given accuracy.

### General Structure

A general explicit Runge-Kutta method at each step computes several **stage values** (slopes at intermediate points within the interval \([t_n, t_{n+1}]\)), then combines them in a weighted sum:

$$y_{n+1} = y_n + h\sum_{i=1}^{s} b_i\, k_i$$

where each \( k_i \) is a slope value computed at some interior point. The specific choices of interior points and weights determine the method's order and accuracy properties.

---

## 12.6 Fourth-Order Runge-Kutta

The **classical fourth-order Runge-Kutta method** — almost universally referred to as **RK4** — is one of the most widely used algorithms in all of numerical computation. It achieves fourth-order accuracy using four function evaluations per step, which is an excellent trade-off between accuracy and cost for smooth problems.

### The RK4 Formulas

At each step from \( t_n \) to \( t_{n+1} = t_n + h \), compute:

$$k_1 = f(t_n,\; y_n)$$

$$k_2 = f\!\left(t_n + \frac{h}{2},\; y_n + \frac{h}{2}k_1\right)$$

$$k_3 = f\!\left(t_n + \frac{h}{2},\; y_n + \frac{h}{2}k_2\right)$$

$$k_4 = f(t_n + h,\; y_n + h\, k_3)$$

Then advance the solution:

$$y_{n+1} = y_n + \frac{h}{6}\left(k_1 + 2k_2 + 2k_3 + k_4\right)$$

The weights \( 1/6, \, 2/6, \, 2/6, \, 1/6 \) mirror Simpson's rule from numerical integration — and for good reason: RK4 is essentially applying Simpson's rule to approximate the integral of \( f(t, y(t)) \) over each interval.

**Interpretation of the four slopes:**
- \( k_1 \): slope at the left endpoint (same as Euler's method).
- \( k_2 \): slope at the midpoint, estimated using a half-step with slope \( k_1 \).
- \( k_3 \): slope at the midpoint again, re-estimated using slope \( k_2 \) (a refinement).
- \( k_4 \): slope at the right endpoint, estimated using slope \( k_3 \) for a full step.

The method gives extra weight (factor of 2) to the midpoint slopes because midpoint estimates tend to be more accurate than endpoint estimates.

### Algorithm

**Algorithm: Classical Fourth-Order Runge-Kutta (RK4)**

- **Purpose:** Fourth-order approximation to \( y' = f(t, y) \), \( y(t_0) = y_0 \).
- **Inputs:** \( f(t, y) \), \( t_0 \), \( y_0 \), step size \( h \), number of steps \( N \).
- **Steps:**
  1. Set \( t \leftarrow t_0 \), \( y \leftarrow y_0 \).
  2. For \( n = 0, 1, \ldots, N-1 \):
     - \( k_1 \leftarrow f(t,\; y) \)
     - \( k_2 \leftarrow f\!\left(t + h/2,\; y + (h/2)k_1\right) \)
     - \( k_3 \leftarrow f\!\left(t + h/2,\; y + (h/2)k_2\right) \)
     - \( k_4 \leftarrow f\!\left(t + h,\; y + h\, k_3\right) \)
     - \( y \leftarrow y + (h/6)(k_1 + 2k_2 + 2k_3 + k_4) \)
     - \( t \leftarrow t + h \)
  3. Return table of \( (t_n, y_n) \).
- **Reliability notes:** Local truncation error \( O(h^5) \); global error \( O(h^4) \). Four function evaluations per step. Excellent choice for most smooth, non-stiff problems.

---

**Example 12.6.1 — RK4 on the Exponential Equation**

**Problem.** Apply RK4 with \( h = 0.2 \) to \( y' = y \), \( y(0) = 1 \), and advance one step to \( t = 0.2 \). Compare with the exact value \( e^{0.2} \approx 1.22140 \).

**Think.** For \( f(t, y) = y \), each slope \( k_i \) involves evaluating the function at some point. This equation is clean enough that we can track the algebra carefully.

**Method.** Apply the RK4 formulas with \( h = 0.2 \), \( t_0 = 0 \), \( y_0 = 1 \).

**Compute.**

\( k_1 = f(0, 1) = 1 \)

\( k_2 = f(0.1,\; 1 + 0.1 \times 1) = f(0.1, 1.1) = 1.1 \)

\( k_3 = f(0.1,\; 1 + 0.1 \times 1.1) = f(0.1, 1.11) = 1.11 \)

\( k_4 = f(0.2,\; 1 + 0.2 \times 1.11) = f(0.2, 1.222) = 1.222 \)

$$y_1 = 1 + \frac{0.2}{6}(1 + 2(1.1) + 2(1.11) + 1.222)$$

$$= 1 + \frac{0.2}{6}(1 + 2.2 + 2.22 + 1.222)$$

$$= 1 + \frac{0.2}{6}(6.642)$$

$$= 1 + 0.2 \times 1.1070 = 1 + 0.22140 = 1.22140$$

**Check.** The exact value is \( e^{0.2} = 1.22140 \ldots \). The RK4 answer agrees to five decimal places with a single step of size \( h = 0.2 \). Recall that Euler's method with the same step size gave \( y_1 = 1.2 \), off by about \( 0.021 \).

**Interpret.** RK4 captures the curvature of the exponential function through its multi-slope averaging, achieving nearly exact results for this smooth equation even with a relatively large step. This vividly illustrates the advantage of higher-order methods.

---

**Example 12.6.2 — RK4 on the Logistic Equation**

**Problem.** Use RK4 with \( h = 0.5 \) to advance the logistic equation

$$\frac{dP}{dt} = 0.5P\!\left(1 - \frac{P}{1000}\right), \quad P(0) = 50$$

one step to \( t = 0.5 \).

**Think.** We showed that the improved Euler method gave \( P_1 \approx 63.19 \) for this step. Let us see how RK4 compares.

**Compute.** Let \( f(t, P) = 0.5P(1 - P/1000) \). Note that \( f \) does not depend explicitly on \( t \) (it is an autonomous equation), so we need only track \( P \).

\( k_1 = f(50) = 0.5 \times 50 \times 0.95 = 23.750 \)

\( k_2 = f(50 + 0.25 \times 23.750) = f(55.9375) = 0.5 \times 55.9375 \times (1 - 0.0559375) \)
\( \quad= 27.9688 \times 0.9441 \approx 26.403 \)

\( k_3 = f(50 + 0.25 \times 26.403) = f(56.601) \approx 0.5 \times 56.601 \times (1 - 0.056601) \)
\( \quad= 28.301 \times 0.9434 \approx 26.697 \)

\( k_4 = f(50 + 0.5 \times 26.697) = f(63.349) \approx 0.5 \times 63.349 \times (1 - 0.063349) \)
\( \quad= 31.674 \times 0.9367 \approx 29.668 \)

$$P_1 = 50 + \frac{0.5}{6}(23.750 + 2(26.403) + 2(26.697) + 29.668)$$
$$= 50 + \frac{0.5}{6}(159.618)$$
$$= 50 + 13.302 = 63.302$$

**Check.** The exact value at \( t = 0.5 \) from the logistic formula is approximately \( P(0.5) \approx 62.9 \). RK4 gives \( 63.302 \), quite close. The improved Euler gave \( 63.19 \) — both are reasonable with this large step, but RK4 is somewhat closer to the true trajectory.

---

## 12.7 Step Size and Error

The choice of step size \( h \) is one of the most important decisions in numerical ODE solving. Step size affects accuracy, computational cost, and sometimes stability.

### Local and Global Perspectives

For a method of order \( p \), the **local truncation error** (LTE) is the error introduced in a single step, assuming the previous value is exact:

$$\text{LTE} = y(t_{n+1}) - y_{n+1} = C h^{p+1} + O(h^{p+2})$$

for some constant \( C \) that depends on derivatives of \( y \). The local error shrinks rapidly as \( h \) decreases: a method of order 4 has local error proportional to \( h^5 \), so halving \( h \) reduces the local error by a factor of \( 2^5 = 32 \).

The **global truncation error** (GTE) at a fixed final time \( T = t_0 + Nh \) accumulates over all \( N = (T - t_0)/h \) steps. Since there are \( N \propto 1/h \) steps each contributing \( O(h^{p+1}) \) local error, the global error is:

$$\text{GTE} \approx N \times O(h^{p+1}) = O(h^p)$$

This is why the order of a method refers to the exponent in the global error. For a method of order \( p \):

| Method | Order | Global Error | Effect of halving \( h \) |
|---|---|---|---|
| Euler | 1 | \( O(h) \) | Error halves |
| Improved Euler | 2 | \( O(h^2) \) | Error quarters |
| RK4 | 4 | \( O(h^4) \) | Error drops by factor 16 |

### Choosing Step Size

A good starting strategy is to run the method with some step size \( h \), then run it again with \( h/2 \), and compare the results. If they agree to the desired number of digits, the step size is likely adequate. If not, halve again and repeat. This is called **step doubling** or **Richardson extrapolation** when used systematically.

In practice, the appropriate step size depends on:

- The desired accuracy (how many correct digits are needed).
- The smoothness of \( f(t, y) \) (sharper changes require smaller steps).
- The behavior of the solution (rapidly varying solutions require smaller steps).
- Computational budget (smaller \( h \) means more steps and more time).

As a rule, prefer higher-order methods over tiny step sizes. Using RK4 with \( h = 0.1 \) is generally more efficient than using Euler's method with \( h = 0.001 \) for the same accuracy target.

### Practical Warning: Roundoff Limits Step Size

Step size cannot be made arbitrarily small. As \( h \to 0 \), the number of steps \( N \to \infty \), and roundoff errors accumulate in the many additions and multiplications. There is a practical lower bound on useful step sizes determined by machine precision. For most ODE problems, step sizes smaller than \( 10^{-10} \) or so are counterproductive. This is analogous to the step size issue in numerical differentiation (Chapter 6): too small is as bad as too large.

---

## 12.8 Local and Global Error

Understanding the distinction between local and global error is essential for using and comparing ODE solvers reliably.

### Local Truncation Error

The **local truncation error** measures how much the numerical method deviates from the true solution over a single step, assuming the starting value is exact. It is a property of the method and the equation — it does not account for errors that have accumulated from previous steps.

For RK4, the local truncation error is:

$$\text{LTE} = y(t_{n+1}) - y_{n+1} = \frac{h^5}{120}\, y^{(5)}(\xi_n) + O(h^6)$$

for some \( \xi_n \in [t_n, t_{n+1}] \). The fifth derivative of the exact solution appears because RK4 is exact for polynomials of degree up to four.

### Global Truncation Error

The **global truncation error** at time \( T \) is:

$$E_N = y(T) - y_N$$

where \( y_N \) is the numerical approximation after \( N \) steps. The global error accumulates all local errors, modified by how errors propagate through the equation. If the equation is stable (errors do not grow), the global error is roughly the sum of local errors:

$$|E_N| \lesssim N \cdot \max_n |\text{LTE}_n| \approx \frac{T - t_0}{h} \cdot O(h^{p+1}) = O(h^p)$$

For unstable equations, errors can grow exponentially, and the relationship between local and global error becomes more complicated.

### Verifying Order in Practice

To check that a method is behaving as expected, compute numerical solutions with step sizes \( h \) and \( h/2 \), and compare errors against the exact solution (when known). If the method is order \( p \), the error should decrease by a factor of roughly \( 2^p \) when \( h \) is halved:

$$\frac{|E(h)|}{|E(h/2)|} \approx 2^p$$

This verification is useful for confirming that an implementation is correct and that the step size is in the range where the asymptotic error behavior holds.

---

## 12.9 Numerical Stability

Accuracy and stability are related but distinct concerns. A method can be accurate on one equation and completely unreliable on another, even with the same step size.

### The Test Equation

The standard analysis of numerical stability uses the linear test equation:

$$\frac{dy}{dt} = \lambda y, \quad y(0) = 1$$

where \( \lambda \) is a constant (possibly complex). The exact solution is \( y(t) = e^{\lambda t} \).

If \( \text{Re}(\lambda) < 0 \), the exact solution decays to zero. A numerical method is **absolutely stable** for a particular value of \( h\lambda \) if the numerical solution also decays to zero (or at least does not grow) for that value.

### Euler's Method Stability

Applying Euler's method to the test equation gives:

$$y_{n+1} = y_n + h\lambda y_n = (1 + h\lambda)\, y_n$$

After \( n \) steps:

$$y_n = (1 + h\lambda)^n$$

For the numerical solution to remain bounded, we need \( |1 + h\lambda| \leq 1 \). For real \( \lambda < 0 \), this requires:

$$|1 + h\lambda| \leq 1 \implies -2 \leq h\lambda \leq 0 \implies h \leq \frac{2}{|\lambda|}$$

**Example.** If \( \lambda = -100 \) (a rapidly decaying solution), Euler's method requires \( h \leq 0.02 \) for stability. If we use \( h = 0.05 \), the numerical solution will oscillate and grow without bound, even though the true solution decays rapidly. This is a **stability failure**, not an accuracy problem.

### RK4 Stability

RK4 has a larger stability region than Euler's method. For the test equation, the RK4 update is:

$$y_{n+1} = \left(1 + h\lambda + \frac{(h\lambda)^2}{2} + \frac{(h\lambda)^3}{6} + \frac{(h\lambda)^4}{24}\right) y_n$$

This is the partial sum of the Taylor series for \( e^{h\lambda} \). For real \( \lambda < 0 \), RK4 is stable for \( h|\lambda| \leq 2.785 \) approximately — a larger interval than Euler's \( h|\lambda| \leq 2 \).

### Key Insight

The stability interval scales inversely with \( |\lambda| \). Equations with large negative eigenvalues (or large negative real parts of eigenvalues in the complex case) impose severe step size restrictions on explicit methods. This is the origin of **stiffness**, discussed in Section 12.11.

**Diagram instruction.** Draw the complex \( h\lambda \)-plane. Shade the stability region for Euler's method (a disk centered at \( -1 \)) and for RK4 (a larger, more complex region). Mark the negative real axis and show that RK4 permits a larger segment than Euler.

---

## 12.10 Systems of Differential Equations

Many real systems involve multiple interacting quantities, each governed by its own differential equation. The equations are coupled: the rate of change of each variable depends on the current values of all variables.

### Setting Up a System

A system of \( m \) first-order equations takes the form:

$$\frac{d\mathbf{y}}{dt} = \mathbf{f}(t, \mathbf{y}), \quad \mathbf{y}(t_0) = \mathbf{y}_0$$

where \( \mathbf{y} = (y_1, y_2, \ldots, y_m)^T \) is a vector of unknowns, \( \mathbf{y}_0 \) is a vector of initial values, and \( \mathbf{f} = (f_1, f_2, \ldots, f_m)^T \) is a vector-valued function.

Every ODE method in this chapter applies without essential modification: simply replace the scalar \( y \) and scalar \( f \) with the vector \( \mathbf{y} \) and vector \( \mathbf{f} \). The formulas look the same; the computation requires evaluating all components simultaneously.

### Reducing Higher-Order Equations

A second-order equation \( y'' = g(t, y, y') \) can be reduced to a system by introducing a new variable \( v = y' \):

$$\frac{dy}{dt} = v$$

$$\frac{dv}{dt} = g(t, y, v)$$

This is a system of two first-order equations in the unknowns \( y \) and \( v \). Initial conditions \( y(t_0) = y_0 \) and \( y'(t_0) = v_0 \) specify the starting point.

---

**Example 12.10.1 — The Simple Pendulum**

**Problem.** The angle \( \theta \) of a simple pendulum satisfies (for small and large angles):

$$\frac{d^2\theta}{dt^2} = -\frac{g}{L}\sin(\theta)$$

with \( g/L = 9.8 \) and initial conditions \( \theta(0) = \pi/6 \) (30 degrees), \( \theta'(0) = 0 \) (released from rest). Set up the system and apply one step of Euler's method with \( h = 0.1 \).

**Think.** This is a nonlinear second-order equation. For large angles, there is no closed-form solution, so numerical simulation is essential. Introduce \( \omega = d\theta/dt \) (angular velocity).

**Method.** The system is:

$$\frac{d\theta}{dt} = \omega$$

$$\frac{d\omega}{dt} = -9.8\sin(\theta)$$

Initial conditions: \( \theta_0 = \pi/6 \approx 0.5236 \), \( \omega_0 = 0 \).

**Compute — Euler step:**

\( f_1(\theta, \omega) = \omega = 0 \)

\( f_2(\theta, \omega) = -9.8\sin(0.5236) = -9.8 \times 0.5 = -4.9 \)

\( \theta_1 = 0.5236 + 0.1 \times 0 = 0.5236 \)

\( \omega_1 = 0 + 0.1 \times (-4.9) = -0.49 \)

**Check.** At \( t = 0.1 \), the pendulum is still at about 30 degrees but has acquired a downward angular velocity of \( -0.49 \) rad/s. This makes physical sense: released from rest, the pendulum immediately begins swinging back toward equilibrium.

**Interpret.** With enough steps, this simulation traces the full nonlinear oscillation of the pendulum, including the correct period for large-angle swings — something the linearized formula \( T = 2\pi\sqrt{L/g} \) cannot capture accurately.

---

**Example 12.10.2 — Predator-Prey System (Lotka-Volterra)**

**Problem.** The populations of rabbits \( R(t) \) and foxes \( F(t) \) satisfy:

$$\frac{dR}{dt} = 2R - 0.01RF$$

$$\frac{dF}{dt} = -0.5F + 0.005RF$$

with \( R(0) = 100 \), \( F(0) = 10 \). Apply one step of RK4 with \( h = 0.1 \).

**Think.** This is the classic Lotka-Volterra model. Both populations are coupled nonlinearly. No closed-form solution exists. We apply RK4 treating \( \mathbf{y} = (R, F)^T \) as a two-dimensional vector.

**Compute.** Let \( f_1(R, F) = 2R - 0.01RF \) and \( f_2(R, F) = -0.5F + 0.005RF \).

**Stage k1:**

\( k_{1,R} = f_1(100, 10) = 200 - 10 = 190 \)

\( k_{1,F} = f_2(100, 10) = -5 + 5 = 0 \)

**Stage k2** (midpoint using k1):

\( R^* = 100 + 0.05 \times 190 = 109.5 \)

\( F^* = 10 + 0.05 \times 0 = 10 \)

\( k_{2,R} = f_1(109.5, 10) = 219 - 10.95 = 208.05 \)

\( k_{2,F} = f_2(109.5, 10) = -5 + 5.475 = 0.475 \)

**Stage k3** (midpoint using k2):

\( R^{**} = 100 + 0.05 \times 208.05 = 110.403 \)

\( F^{**} = 10 + 0.05 \times 0.475 = 10.024 \)

\( k_{3,R} = f_1(110.403, 10.024) \approx 220.806 - 11.069 = 209.737 \)

\( k_{3,F} = f_2(110.403, 10.024) \approx -5.012 + 5.520 = 0.508 \)

**Stage k4** (right endpoint using k3):

\( R^{***} = 100 + 0.1 \times 209.737 = 120.974 \)

\( F^{***} = 10 + 0.1 \times 0.508 = 10.051 \)

\( k_{4,R} = f_1(120.974, 10.051) \approx 241.948 - 12.152 = 229.796 \)

\( k_{4,F} = f_2(120.974, 10.051) \approx -5.026 + 6.049 = 1.023 \)

**Update:**

$$R_1 = 100 + \frac{0.1}{6}(190 + 2(208.05) + 2(209.737) + 229.796) = 100 + \frac{0.1}{6}(1255.37) \approx 120.896$$

$$F_1 = 10 + \frac{0.1}{6}(0 + 2(0.475) + 2(0.508) + 1.023) = 10 + \frac{0.1}{6}(2.989) \approx 10.050$$

**Interpret.** After 0.1 time units, the rabbit population has grown from 100 to about 121 (plenty of food, few predators), while the fox population has barely changed (from 10 to 10.05). As more steps are taken, foxes eventually increase as they consume more rabbits, then rabbits decline, then foxes decline — the classic predator-prey oscillation.

---

## 12.11 Stiff Equations as an Introduction

Some differential equations pose a special challenge for explicit methods: even though the solution we care about is well-behaved and slowly changing, the equation also admits rapidly decaying transient solutions. These equations are called **stiff**.

### What Stiffness Means

Consider the system:

$$\frac{d\mathbf{y}}{dt} = A\mathbf{y}$$

where the matrix \( A \) has eigenvalues with very different magnitudes: one eigenvalue might be \( -1 \) (slow decay) and another \( -1000 \) (very fast decay). The fast-decaying component vanishes quickly and is irrelevant to the long-term solution. But explicit methods must use a step size \( h \leq 2/1000 = 0.002 \) to remain stable, even if all we want to resolve is the slow component at large times.

This mismatch between the time scales of stability and the time scales of interest is the defining feature of stiffness. A stiff equation requires tiny steps for stability even when the solution itself is slowly varying.

### Examples of Stiff Problems

Stiff equations arise frequently in:

- **Chemical kinetics:** Reactions with very different rate constants (some reactions complete in nanoseconds while others take hours).
- **Circuit simulation:** Electrical circuits with components operating at very different time scales (capacitors and inductors with extreme values).
- **Structural dynamics:** Mechanical systems with stiff springs or elastic modes at very different frequencies.
- **Biological systems:** Enzyme kinetics, gene regulation networks, and pharmacokinetic models.

### Handling Stiff Equations

Implicit methods (such as the backward Euler method or implicit Runge-Kutta methods) have much larger stability regions and can take large steps on stiff equations without instability. The trade-off is that implicit methods require solving a system of (possibly nonlinear) equations at each step — more computational work per step, but far fewer steps overall.

**Backward Euler method:**

$$y_{n+1} = y_n + h\, f(t_{n+1}, y_{n+1})$$

Notice that \( y_{n+1} \) appears on both sides. This requires solving for \( y_{n+1} \) at each step, often using Newton's method. For linear equations, this is straightforward. For nonlinear equations, it requires iteration.

The backward Euler method is unconditionally stable for the test equation with \( \text{Re}(\lambda) < 0 \) (regardless of step size), making it suitable for stiff problems where explicit methods would require impractically small steps.

> **Note for Further Study.** The study of stiffness, A-stability, L-stability, and stiff solvers belongs more properly to a course in numerical analysis. This section introduces the concept so students recognize stiff behavior when it appears and know that standard explicit methods may fail. Scientific computing libraries typically include automatic stiff-detection and switch to implicit solvers when needed.

---

## 12.12 ODE Solvers in Science and Engineering

The numerical ODE methods developed in this chapter are not abstract exercises. They are computational engines that simulate the behavior of real systems across every area of science, engineering, medicine, finance, and data science.

### Physics and Engineering

Spacecraft trajectories are computed by numerically integrating Newton's second law as a system of differential equations. The Moon landings required accurate numerical ODE solutions for orbital mechanics, attitude control, and fuel consumption — all computed step by step. Modern satellite navigation, mission planning, and deep-space probes rely on the same principles.

The simulation of fluid dynamics, structural mechanics, and electromagnetic fields begins with PDEs (Chapter 13), but solving them in time typically requires ODE methods applied to large systems of coupled equations at each grid point.

### Electrical Engineering

Circuit simulation software (such as SPICE, used to design every integrated circuit) numerically solves the differential equations governing currents and voltages in circuits. Stiff ODE solvers are essential because circuits contain components operating at vastly different time scales.

### Biology and Medicine

Pharmacokinetics — the study of how drugs enter, move through, and leave the body — is modeled by systems of ODEs describing drug concentration in different compartments. Numerical simulation guides dosing schedules and predicts drug interactions.

Epidemiological models such as SIR and SEIR models (compartments for Susceptible, Infected, Recovered populations) are systems of ODEs. During the COVID-19 pandemic, numerical ODE simulation informed public health decisions worldwide.

### Finance

The Black-Scholes equation for option pricing is a PDE, but simplified models for derivative pricing, interest rate dynamics, and portfolio optimization are often formulated as ODEs or SDEs (stochastic differential equations, which involve random forcing). Numerical ODE methods underlie many financial simulation tools.

### Data Science and Machine Learning

Training deep neural networks using gradient descent can be understood as numerically solving a differential equation in continuous time. Research on neural ODEs (where the dynamics of a neural network are described by a differential equation) uses ODE solvers as a core computational component.

---

## 12.13 Common Numerical ODE Mistakes

Students learning to solve ODEs numerically encounter a predictable set of misconceptions and errors. Recognizing these problems early prevents compounding mistakes across longer computations.

**Mistake 1: Using a step size that is too large and accepting the result without checking.**

Numerical ODE methods degrade gracefully as \( h \) increases — at first, accuracy declines; then, for some methods and equations, the solution can become unstable and diverge. Always test the sensitivity of results to step size by running the same computation with \( h/2 \) and checking for agreement.

**Mistake 2: Confusing local error and global error.**

Local truncation error describes a single step. Global error at a fixed time \( T \) accounts for all steps from \( t_0 \) to \( T \). A method with small local error can still accumulate significant global error over many steps, especially if the equation amplifies perturbations.

**Mistake 3: Applying an explicit method to a stiff equation with too large a step.**

The result is catastrophic: the numerical solution grows exponentially when it should decay. The fix is either to use a much smaller step or to switch to an implicit method. If the solution is oscillating or growing without bound for a problem that should decay, suspect stiffness.

**Mistake 4: Not checking physical plausibility.**

Numerical solutions should be checked against known qualitative behavior: conserved quantities, monotonicity, periodicity, asymptotic limits. If the numerical solution of a population model produces negative populations, or a pendulum simulation shows the angle growing without bound, something is wrong.

**Mistake 5: Forgetting to reduce higher-order equations before applying the method.**

Euler's method and RK4 are designed for first-order systems. A second-order equation \( y'' = g(t, y, y') \) must first be converted to a system of two first-order equations. Applying Euler's method directly to \( y'' \) by using \( y_{n+1} = y_n + hy'_n + \frac{h^2}{2}y''_n \) is a different (and less common) approach — the standard framework uses first-order systems.

**Mistake 6: Carrying roundoff errors in hand computations.**

When working examples by hand, round intermediate results carefully. For step-by-step computations with several stages (like RK4), rounding errors in \( k_2 \) affect \( k_3 \), which affects \( k_4 \). Small discrepancies accumulate. Keep extra decimal places in intermediate calculations.

**Mistake 7: Assuming more steps always give better accuracy.**

For most problems and most methods, accuracy improves as \( h \) decreases — until \( h \) becomes so small that roundoff errors dominate. In practice, for hand calculation and even for machine computation, there is an optimal step size below which further reduction is counterproductive.

---

## Chapter Summary

This chapter introduced the fundamental numerical methods for solving ordinary differential equations. The core ideas were:

**Initial value problems** consist of a differential equation and a starting value. The solution traces a curve in the phase plane; numerical methods approximate this curve by discrete steps.

**Euler's method** advances the solution using the slope at the current point. It is first-order, easy to understand, and easy to implement, but often too inaccurate and sometimes too unstable for serious computation.

**The improved Euler method (Heun's method)** uses a predictor-corrector structure, averaging slopes at the beginning and end of each step. It achieves second-order accuracy with two function evaluations per step.

**The classical fourth-order Runge-Kutta method (RK4)** uses four stage evaluations per step to achieve fourth-order accuracy. It is the standard workhorse for smooth, non-stiff problems.

**Step size** governs the trade-off between accuracy and computational cost. Higher-order methods allow larger steps for the same accuracy. Step size must also respect stability limits.

**Local truncation error** measures the error per step; **global error** measures the total accumulated error. For a method of order \( p \), global error is \( O(h^p) \).

**Stability** requires that small errors not grow as the computation proceeds. Explicit methods have limited stability regions. The backward Euler method and other implicit methods have larger stability regions and are preferred for stiff equations.

**Systems of ODEs** are handled by applying the same methods to all components simultaneously, treating \( y \) and \( f \) as vectors. Higher-order equations reduce to first-order systems.

**Stiff equations** contain multiple time scales; explicit methods must use very small steps to remain stable. Implicit methods can take large steps on stiff problems at the cost of solving algebraic equations at each step.

---

## Key Terms Review

| Term | Brief Definition |
|---|---|
| Initial value problem | ODE plus a specified initial condition |
| Euler's method | First-order solver; advances by tangent line |
| Local truncation error | Error in one step, assuming exact start |
| Global error | Total accumulated error to a fixed time |
| Improved Euler / Heun | Second-order predictor-corrector method |
| Runge-Kutta | Family of methods using weighted slope combinations |
| RK4 | Classical fourth-order Runge-Kutta |
| Stage value \( k_i \) | Slope computed at an intermediate point within a step |
| Step size \( h \) | Increment in the independent variable between steps |
| Order of a method | Exponent governing global error in terms of \( h \) |
| Stability | Property of not amplifying errors uncontrollably |
| Test equation | \( y' = \lambda y \); used to analyze stability |
| Stiff equation | Equation with widely separated time scales |
| Implicit method | Solver requiring algebraic equations to be solved at each step |
| System of ODEs | Coupled first-order equations in vector form |

---

## Concept Review Questions

1. What is an initial value problem? What two things must be specified?

2. What mathematical object does Euler's method approximate with a straight line at each step?

3. What does it mean for a numerical ODE method to have global error of order \( O(h^2) \)? What happens to the error if \( h \) is halved?

4. Explain the predictor-corrector structure of the improved Euler method. Why does averaging two slopes improve accuracy?

5. In RK4, what do the four stage values \( k_1, k_2, k_3, k_4 \) represent geometrically?

6. Why are \( k_2 \) and \( k_3 \) given double weight in the RK4 formula compared to \( k_1 \) and \( k_4 \)?

7. What is local truncation error, and how does it relate to global error for a method of order \( p \)?

8. Explain numerical stability using the test equation \( y' = \lambda y \). When does Euler's method produce an unstable numerical solution for real \( \lambda < 0 \)?

9. Why does making \( h \) too small sometimes hurt accuracy in machine computation?

10. How is a second-order ODE converted to a first-order system for numerical solution?

11. What are stiff equations? Why do explicit methods struggle with them?

12. What is the key feature of implicit ODE methods that makes them suitable for stiff equations?

---

## Skill Practice

**1.** Apply Euler's method with \( h = 0.1 \) to \( y' = -y \), \( y(0) = 1 \), for 5 steps. Compare each approximation to the exact value \( e^{-t} \) and compute the error at each step.

**2.** Apply Euler's method with \( h = 0.25 \) to \( y' = t - y \), \( y(0) = 0 \), for 4 steps.

**3.** Apply the improved Euler method with \( h = 0.2 \) to \( y' = y^2 \), \( y(0) = 1 \), for 2 steps. (Note: the exact solution is \( y = 1/(1 - t) \), which blows up at \( t = 1 \). What do you notice as the approximation approaches this singularity?)

**4.** Apply one step of RK4 with \( h = 0.5 \) to \( y' = \cos(t) \cdot y \), \( y(0) = 1 \). Carry four decimal places.

**5.** Apply one step of RK4 with \( h = 0.1 \) to the system:

$$\frac{dx}{dt} = -x + y, \quad \frac{dy}{dt} = x - y$$

with \( x(0) = 2 \), \( y(0) = 0 \).

**6.** Reduce the equation \( y'' + 3y' + 2y = 0 \), \( y(0) = 1 \), \( y'(0) = 0 \), to a first-order system and write out the initial value problem in vector form.

**7.** Apply two steps of Euler's method with \( h = 0.1 \) to the system in Problem 6. The exact solution is \( y(t) = 2e^{-t} - e^{-2t} \). Compute the error at \( t = 0.2 \).

---

## Algorithm Practice

**8.** Write pseudocode for the improved Euler method that outputs a table of \( (t_n, y_n) \) pairs given \( f \), \( t_0 \), \( y_0 \), \( h \), and \( N \).

**9.** Modify the RK4 algorithm so that it automatically checks whether the approximate step size is consistent with a user-specified error tolerance by comparing the result with a half-step computation. Describe in pseudocode how this step-doubling check would work.

**10.** Suppose you must solve the system

$$\frac{d}{dt}\begin{pmatrix} u \\ v \end{pmatrix} = \begin{pmatrix} f_1(t, u, v) \\ f_2(t, u, v) \end{pmatrix}$$

Write the four-stage RK4 update in terms of two-dimensional slope vectors \( \mathbf{k}_1, \mathbf{k}_2, \mathbf{k}_3, \mathbf{k}_4 \). Be explicit about what \( \mathbf{k}_i \) represents.

---

## Computational Interpretation

**11.** A student applies Euler's method to \( y' = 10y \), \( y(0) = 1 \) with \( h = 0.3 \). After a few steps, the approximation begins growing very rapidly. Explain what is happening in terms of stability. What step size would be needed to stabilize Euler's method for this equation?

**12.** A student uses RK4 with \( h = 0.5 \) and gets an approximation \( y(2) \approx 4.731 \). They then use \( h = 0.25 \) and get \( y(2) \approx 4.728 \). What can they conclude about the accuracy of the first approximation? Is \( h = 0.5 \) likely adequate for three-digit accuracy?

**13.** Explain why Euler's method applied to \( y' = -1000y \) will produce wildly oscillating (and growing) values unless \( h < 0.002 \). What term describes equations of this type?

**14.** A predator-prey simulation produces oscillating populations over 20 time units. After 20 units, the numerical rabbit population is negative. What has likely gone wrong, and how should the computation be fixed?

**15.** In the pendulum example, the energy of the system should be conserved. Describe a sanity check for the numerical solution using the formula for total energy \( E = \frac{1}{2}L^2\omega^2 + gL(1 - \cos\theta) \).

---

## Applications

**16. Cooling coffee.** Newton's law of cooling gives \( dT/dt = -k(T - T_{\text{room}}) \) where \( T_{\text{room}} = 20 \)°C and \( k = 0.1 \). The initial coffee temperature is \( T(0) = 90 \)°C. Use Euler's method with \( h = 1 \) minute to estimate the temperature at \( t = 5 \) minutes. Compare with the exact solution.

**17. Free fall with air resistance.** A ball falling under gravity with linear drag satisfies:

$$m\frac{dv}{dt} = mg - bv$$

with \( m = 1 \) kg, \( g = 9.8 \) m/s², \( b = 0.5 \) kg/s, \( v(0) = 0 \). Apply the improved Euler method with \( h = 0.5 \) for 4 steps. The terminal velocity is \( v_\infty = mg/b = 19.6 \) m/s — is the sequence approaching this value?

**18. Drug concentration.** A drug is administered at a constant rate \( R = 5 \) mg/hr and eliminated at rate \( k = 0.2 \) per hour, giving \( dC/dt = R - kC \), \( C(0) = 0 \). Use RK4 with \( h = 1 \) hour to estimate \( C(3) \). The steady-state concentration is \( C_\infty = R/k = 25 \) mg. Confirm the solution is approaching this value.

**19. Logistic growth.** The logistic model \( P' = 0.4P(1 - P/500) \), \( P(0) = 20 \) describes a fish population in a small lake. Use RK4 with \( h = 1 \) to simulate for \( t = 0, 1, 2, \ldots, 10 \). At what time does the population first exceed 250 (half the carrying capacity)?

**20. SIR epidemic model.** A disease spreads in a population of 10,000 according to:

$$\frac{dS}{dt} = -0.0003 S I$$

$$\frac{dI}{dt} = 0.0003 SI - 0.1I$$

$$\frac{dR}{dt} = 0.1I$$

with \( S(0) = 9990 \), \( I(0) = 10 \), \( R(0) = 0 \). Apply Euler's method with \( h = 1 \) day for 5 steps. Does the infected count increase or decrease initially? Explain using the equation.

---

## Error Analysis

**21.** Show algebraically that for \( y' = \lambda y \), Euler's method gives \( y_n = (1 + h\lambda)^n y_0 \). Compare this to the exact value \( e^{n h \lambda} y_0 \) and explain why \( (1 + h\lambda)^n < e^{nh\lambda} \) when \( \lambda > 0 \) and \( h > 0 \).

**22.** Suppose you need to solve an ODE to an accuracy of \( 10^{-4} \) at a fixed final time. Roughly how many steps would Euler's method require? How many would RK4 require? (Express in terms of a reference step size \( h_0 \) at which each method achieves error \( 10^{-1} \).)

**23.** Use step doubling to estimate the global error of your computation in Skill Practice Problem 1. That is, run Euler's method with \( h = 0.1 \) and again with \( h = 0.05 \), and compare the results at \( t = 0.5 \). What does the ratio of errors tell you about the order?

**24.** For the equation \( y' = -y \), \( y(0) = 1 \), the exact solution is \( y = e^{-t} \). Compare the global errors of Euler's method and RK4 at \( t = 1 \) for step sizes \( h = 0.5, 0.25, 0.125 \). For each method, estimate the order by examining how the error changes as \( h \) is halved.

**25.** A student solves \( y' = -100y \), \( y(0) = 1 \), with Euler's method using \( h = 0.03 \). Explain why the numerical solution might oscillate between large positive and negative values even though the true solution decays smoothly to zero. What step size would be needed to avoid this?

---

## Chapter 12 Checkpoint

This checkpoint assesses mastery of the chapter's central ideas and skills.

**Part A: Concepts**

1. Define the local truncation error of a numerical ODE method. How does it differ from global error?

2. What is the order of the improved Euler method? What does this mean for how the global error changes when the step size is halved?

3. Explain why RK4 uses four stages instead of two. What is gained by the extra function evaluations?

4. A numerical solution of \( y' = -50y \) oscillates and grows when Euler's method is applied with \( h = 0.05 \). Explain this behavior.

5. Why is it useful to reduce a second-order ODE to a system of two first-order equations?

**Part B: Skill**

6. Apply Euler's method with \( h = 0.25 \) to \( y' = 1 - y \), \( y(0) = 0 \), for 4 steps. The exact solution is \( y = 1 - e^{-t} \). Compute the error at each step.

7. Apply the improved Euler method with \( h = 0.5 \) to \( y' = y(1 - y) \), \( y(0) = 0.2 \), for 2 steps. (This is a logistic equation with \( K = 1 \).)

8. Apply one RK4 step with \( h = 0.5 \) to \( y' = t^2 + y \), \( y(0) = 1 \).

9. Reduce \( y'' - y = 0 \), \( y(0) = 1 \), \( y'(0) = 1 \), to a first-order system and apply one Euler step with \( h = 0.1 \).

**Part C: Analysis**

10. The logistic equation \( P' = rP(1 - P/K) \) has exact solution

$$P(t) = \frac{K}{1 + \left(\frac{K - P_0}{P_0}\right)e^{-rt}}$$

Use the exact solution to compute \( P(1) \) with \( r = 0.5 \), \( K = 1000 \), \( P_0 = 50 \). Compare to any numerical approximation you computed earlier in this chapter. How many digits of agreement do you see?

11. You are told that a certain ODE solver has global error \( 4.3 \times 10^{-3} \) with \( h = 0.1 \) and global error \( 1.1 \times 10^{-3} \) with \( h = 0.05 \). Estimate the order of the method.

12. Describe a strategy for determining whether a given step size is small enough for a particular ODE problem without knowing the exact solution.

---

## Bridge Note: Toward PDEs and Scientific Computing

The methods developed in this chapter — Euler's method, the improved Euler method, and RK4 — solve ordinary differential equations: equations in one independent variable (usually time). In Chapter 13, we extend numerical approximation to partial differential equations, where the unknown function depends on both space and time. The heat equation, the wave equation, and Laplace's equation describe temperature distributions, wave propagation, and electrostatic fields — all continuous functions of spatial coordinates and time.

Numerical PDE methods discretize both the spatial domain and the time variable, reducing the continuous problem to a large system of algebraic equations (for steady-state problems) or to a large system of ODEs (for time-dependent problems). The ODE methods from this chapter then apply to each grid point simultaneously — often resulting in systems of thousands or millions of coupled equations, solved in parallel on modern computers.

The ideas of stability you encountered here — specifically, the CFL (Courant-Friedrichs-Lewy) condition in Chapter 13 — are direct extensions of the stability analysis for ODE methods. The same question appears: how small must the time step be (relative to the spatial grid spacing) for the numerical solution to remain stable?

Chapter 14, the capstone chapter, asks you to put all of these tools together: error analysis, root-finding, interpolation, differentiation, integration, linear algebra, eigenvalue methods, optimization, ODE solvers, and PDE approximations. Scientific computing means not just running algorithms but choosing appropriate methods, documenting assumptions, testing convergence, estimating uncertainty, and communicating results.

---

> **MGU Library Connection.** This chapter connects to:
>
> - *MGU Differential Equations* — for analytical ODE techniques (separation of variables, integrating factors, linear systems)
> - *MGU Linear Algebra* — for matrix-vector systems and eigenvalues relevant to ODE system analysis
> - *MGU Numerical Methods: Chapter 2* — for error analysis foundations underlying all ODE error estimates
> - *MGU Numerical Methods: Chapter 9* — for the linear algebra involved in implicit ODE methods
> - *MGU Scientific Computing Guide* — for ODE solver libraries and adaptive methods in Python (SciPy), MATLAB, Julia, and R
> - *MGU Physics: Mechanics* — for the pendulum, projectile motion, and orbital mechanics applications of ODE solvers
> - *MGU Data Science Foundations* — for connections between ODE models, neural ODEs, and dynamical system learning

---

*End of Chapter 12*
