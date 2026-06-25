# Numerical Methods

## MGU Mathematics Series | Library Textbook Edition

---

# Part V: Numerical Differential Equations, Simulation, and Capstone Computing

---

# Chapter 13: Numerical Methods for Partial Differential Equations

---

## Purpose

This chapter introduces numerical methods for partial differential equations as an accessible, carefully paced preview. Partial differential equations describe phenomena that change across both space and time simultaneously — heat flowing through a rod, waves traveling through water, temperature settling across a metal plate. These equations are among the most important mathematical tools in physics, engineering, biology, climate science, and computational modeling. They are also, in most cases, impossible to solve exactly. Numerical methods turn them into something computable.

Chapter 12 showed how to approximate solutions to ordinary differential equations step by step in time. This chapter extends that idea into two dimensions: we will approximate solutions that depend on both position and time, or on two spatial coordinates at once. The central tool is the finite difference method, which replaces continuous derivatives with differences computed on a grid of discrete points.

This chapter is intentionally a preview, not a full PDE course. The goal is to give students a clear and honest picture of how numerical PDE methods work, what they can do, what can go wrong, and where the subject leads. Students who continue into numerical analysis, scientific computing, computational physics, or engineering will develop these ideas in much greater depth. Here, the emphasis is on understanding the structure of the problem, the geometry of the grid, and the logic of the approximation.

---

## Opening Question

A metal rod is heated at one end and held at a fixed temperature at the other. Heat flows along the rod over time. How does the temperature at each interior point change from one moment to the next? You know from calculus that temperature satisfies a partial differential equation, the heat equation. But that equation has no simple closed-form solution for a general initial temperature profile. How could you compute approximate temperatures at each point of the rod at each moment in time?

This is the kind of question numerical PDE methods answer.

---

## Why This Chapter Matters

Every applied field that studies continuous physical systems eventually encounters partial differential equations. Structural engineers model stress in bridges using elliptic PDEs. Meteorologists simulate atmospheric temperature and pressure using hyperbolic PDEs. Climate scientists track heat flow through ocean layers using parabolic PDEs. Medical imaging reconstructs tissue density by solving inverse PDE problems numerically. Financial derivatives are priced using the Black-Scholes PDE.

None of these problems can be solved analytically for realistic domains and initial conditions. Numerical PDE methods make them computable. A student who understands how a finite difference method discretizes a PDE, what stability means in this context, and how grid spacing and time steps control accuracy is prepared to read, use, and critically evaluate the computational models that underlie modern science and engineering.

---

## Learning Objectives

By the end of this chapter, students should be able to:

- Explain what a partial differential equation is and how it differs from an ordinary differential equation
- Describe what a grid or mesh is and why numerical PDE methods require one
- Explain the concept of discretizing space and time
- Derive finite difference approximations for first and second partial derivatives
- Apply the explicit finite difference method to the heat equation
- State the stability condition for the explicit heat equation method
- Describe the structure of the wave equation approximation
- Describe the structure of the Laplace equation and the iterative grid method for solving it
- Interpret boundary conditions and initial conditions in a numerical setting
- Identify common failure modes in numerical PDE computation
- Explain in plain language what a numerical PDE solution represents

---

## Key Terms

partial differential equation (PDE), ordinary differential equation (ODE), grid, mesh, node, grid spacing, time step, discretization, finite difference method, explicit method, implicit method, boundary condition, initial condition, Dirichlet boundary condition, Neumann boundary condition, heat equation, parabolic PDE, wave equation, hyperbolic PDE, Laplace equation, elliptic PDE, stability, CFL condition, numerical diffusion, convergence, truncation error, iterative grid method, Gauss-Seidel iteration on a grid

---

## 13.1 Why PDEs Need Numerical Methods

An ordinary differential equation involves a function of a single variable and its derivatives with respect to that variable. We write things like

$$\frac{dy}{dt} = f(t, y)$$

and seek a function $y(t)$ that depends only on time. Chapter 12 showed how Euler's method and Runge-Kutta methods approximate solutions to such equations.

A partial differential equation involves a function of two or more variables and its partial derivatives with respect to those variables. The simplest examples involve a function $u$ that depends on both position $x$ and time $t$, and we write expressions like

$$\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}$$

This is the one-dimensional heat equation. The function $u(x,t)$ represents temperature at position $x$ and time $t$, and the equation says that the rate at which temperature changes in time is proportional to the second derivative of temperature in space. Heat diffuses from regions of high temperature to regions of low temperature, and the equation captures that process exactly.

The difficulty is that even this simple-looking equation is rarely solvable in closed form except for very special initial and boundary conditions. For realistic problems — irregular domains, complex boundary conditions, nonlinear terms, multiple spatial dimensions — analytical solutions are essentially unavailable. This is the fundamental reason numerical PDE methods exist.

**Why PDEs are harder than ODEs.** An ODE asks for a function of one variable. A PDE asks for a function of two, three, or four variables simultaneously. The solution surface is far more complex. The space of possible initial and boundary conditions is far richer. The interactions between spatial structure and temporal evolution require that we track not just one evolving quantity but an entire field of quantities at every point in space at every moment in time.

Numerical methods handle this by replacing the continuous field $u(x,t)$ with a finite array of values $u_i^n$, where $i$ indexes the position in space and $n$ indexes the moment in time. The PDE becomes a system of algebraic equations relating these values, and we solve that system step by step.

**Three fundamental PDE types.** This chapter focuses on three classical PDEs, each representing a different physical and mathematical structure:

The heat equation is a parabolic PDE. It describes diffusion processes: heat flowing, substances spreading, probability distributions evolving.

The wave equation is a hyperbolic PDE. It describes propagation processes: sound waves, electromagnetic waves, vibrations in strings and membranes.

The Laplace equation is an elliptic PDE. It describes equilibrium or steady-state processes: temperature in a plate at steady state, electrostatic potential, fluid flow.

Each type requires a different numerical strategy. Understanding why each strategy fits its PDE type is a key goal of this chapter.

---

## 13.2 Grids and Meshes

The first step in any numerical PDE method is to lay down a grid — a discrete set of points in the domain where we will compute the approximate solution.

**What a grid is.** Consider a one-dimensional spatial domain: a rod of length $L$ running from $x = 0$ to $x = L$. We divide this interval into $N$ equal subintervals of width

$$h = \frac{L}{N}$$

The grid points are the positions $x_i = i \cdot h$ for $i = 0, 1, 2, \ldots, N$. At each of these positions we will track an approximate temperature value.

Now add time. Suppose we want to compute the temperature from time $t = 0$ to time $t = T$. We divide the time interval into $M$ equal steps of width

$$k = \frac{T}{M}$$

The time levels are $t_n = n \cdot k$ for $n = 0, 1, 2, \ldots, M$.

The result is a two-dimensional grid of points $(x_i, t_n)$, with $i$ ranging over space positions and $n$ ranging over time levels. At each grid point, we compute an approximation $u_i^n \approx u(x_i, t_n)$.

**Diagram instruction.** Draw a rectangle with the horizontal axis labeled $x$ (running from $0$ to $L$) and the vertical axis labeled $t$ (running from $0$ to $T$). Mark vertical grid lines at $x_0 = 0$, $x_1 = h$, $x_2 = 2h$, and so on. Mark horizontal grid lines at $t_0 = 0$, $t_1 = k$, $t_2 = 2k$, and so on. At each intersection, mark a node. Shade the bottom row (the initial condition $t = 0$) and the left and right columns (the boundary conditions). Label an interior node $(x_i, t_n)$ and its neighbors $(x_{i-1}, t_n)$, $(x_{i+1}, t_n)$, and $(x_i, t_{n+1})$.

**Two-dimensional spatial grids.** When the problem involves two spatial dimensions — a flat plate, for example — the grid becomes a mesh of points $(x_i, y_j)$ covering a rectangular domain. The solution $u_{i,j}^n$ now has three indices: two for space and one for time. The ideas are the same, but the arrays are larger and the stencils involve more neighbors.

**Grid spacing and accuracy.** Smaller grid spacing $h$ and smaller time step $k$ generally produce more accurate approximations but require more computation. Choosing appropriate grid spacing involves a tradeoff between accuracy and cost. But there is also a deeper constraint: for some methods, the ratio $k/h^2$ must stay below a certain threshold to prevent the computation from becoming unstable. This is the stability issue we will examine carefully in Section 13.7.

**Terminology note.** The points on a grid are called nodes or grid points. The values computed at those points are called nodal values. The spacing $h$ is sometimes called the mesh size or grid spacing. The time step is usually called $k$ or $\Delta t$. The spatial step is usually called $h$ or $\Delta x$.

---

## 13.3 Discretizing Space and Time

Once the grid is established, the next step is to replace the continuous partial derivatives in the PDE with finite difference approximations computed at grid points. This process is called discretization.

**Discretizing the first derivative in time.** The forward difference approximation for the first partial derivative of $u$ with respect to $t$ at the point $(x_i, t_n)$ is

$$\frac{\partial u}{\partial t}\bigg|_{(x_i, t_n)} \approx \frac{u_i^{n+1} - u_i^n}{k}$$

This is a forward difference in time. It is first-order accurate: the truncation error is $O(k)$.

**Discretizing the second derivative in space.** The central difference approximation for the second partial derivative of $u$ with respect to $x$ at the point $(x_i, t_n)$ is

$$\frac{\partial^2 u}{\partial x^2}\bigg|_{(x_i, t_n)} \approx \frac{u_{i-1}^n - 2u_i^n + u_{i+1}^n}{h^2}$$

This is a centered difference in space. It uses the values at the left neighbor, the current node, and the right neighbor, all at the same time level $t_n$. It is second-order accurate: the truncation error is $O(h^2)$.

**Where these formulas come from.** Both formulas follow directly from Taylor series, exactly as in Chapter 6. Expanding $u(x_i, t_{n+1})$ and $u(x_i, t_{n-1})$ in Taylor series centered at $(x_i, t_n)$, and expanding $u(x_{i-1}, t_n)$ and $u(x_{i+1}, t_n)$ in Taylor series centered at $(x_i, t_n)$, gives the approximations above along with explicit error terms. The details are the same as the numerical differentiation analysis in Chapter 6, extended to partial derivatives.

**Stencil notation.** The set of grid points used in a finite difference approximation is called a stencil. The central difference second derivative uses a three-point stencil: the node itself and its two immediate spatial neighbors. For time-stepping schemes, the stencil specifies which time levels appear in the formula.

**What discretization accomplishes.** By replacing partial derivatives with finite differences, we transform the PDE — an equation relating continuous functions — into a system of algebraic equations relating discrete nodal values. Instead of asking for a function $u(x,t)$, we ask for a large array of numbers $\{u_i^n\}$. The PDE becomes a rule for computing each new row of this array from the previous rows.

---

## 13.4 Finite Difference Approximations

Before applying finite differences to specific PDEs, we collect the key formulas and their accuracy.

**Forward difference in time (first order):**

$$\frac{\partial u}{\partial t}\bigg|_i^n \approx \frac{u_i^{n+1} - u_i^n}{k}, \quad \text{error } O(k)$$

**Backward difference in time (first order):**

$$\frac{\partial u}{\partial t}\bigg|_i^n \approx \frac{u_i^n - u_i^{n-1}}{k}, \quad \text{error } O(k)$$

**Centered difference in time (second order):**

$$\frac{\partial u}{\partial t}\bigg|_i^n \approx \frac{u_i^{n+1} - u_i^{n-1}}{2k}, \quad \text{error } O(k^2)$$

**Centered difference for second spatial derivative (second order):**

$$\frac{\partial^2 u}{\partial x^2}\bigg|_i^n \approx \frac{u_{i-1}^n - 2u_i^n + u_{i+1}^n}{h^2}, \quad \text{error } O(h^2)$$

**Centered difference for first spatial derivative (second order):**

$$\frac{\partial u}{\partial x}\bigg|_i^n \approx \frac{u_{i+1}^n - u_{i-1}^n}{2h}, \quad \text{error } O(h^2)$$

These formulas are the building blocks for all the numerical PDE methods in this chapter. They should feel familiar from Chapter 6. The difference here is that $u$ has two indices — one for space, one for time — and we apply difference quotients to one index while holding the other fixed.

**Interpretation note.** When we write $u_i^n$, we mean the approximate value of the solution at the $i$-th spatial grid point at the $n$-th time step. The superscript is a time index, not an exponent. This notation takes some getting used to but is standard in numerical PDE literature.

---

## 13.5 Boundary Conditions

A PDE alone does not have a unique solution. It requires boundary conditions that specify what the solution does at the edges of the domain, and for time-dependent problems, initial conditions that specify the solution at time $t = 0$.

**Initial conditions.** For a time-dependent PDE on the interval $[0, L]$, the initial condition specifies the value of the solution at every spatial point at time zero:

$$u(x, 0) = f(x) \quad \text{for } 0 \leq x \leq L$$

In the discrete setting, this means we know all values $u_i^0 = f(x_i)$ for $i = 0, 1, \ldots, N$. These values fill the bottom row of our grid and serve as the starting point for all subsequent time steps.

**Dirichlet boundary conditions.** A Dirichlet boundary condition specifies the value of the solution at the boundary. For a rod with fixed temperatures at both ends:

$$u(0, t) = \alpha \quad \text{and} \quad u(L, t) = \beta \quad \text{for all } t \geq 0$$

In the discrete setting, this means $u_0^n = \alpha$ and $u_N^n = \beta$ for all time steps $n$. These values are fixed throughout the computation; we never update the boundary nodes using the interior scheme.

**Neumann boundary conditions.** A Neumann boundary condition specifies the derivative of the solution at the boundary. For a rod with an insulated right end (no heat flux), we have

$$\frac{\partial u}{\partial x}(L, t) = 0 \quad \text{for all } t \geq 0$$

In the discrete setting, this is implemented using a one-sided finite difference at the boundary. A common approach is to introduce a ghost point just outside the domain and use the zero-derivative condition to relate the ghost point value to its interior neighbor.

**Mixed boundary conditions** specify the value at one end and the derivative at the other. Many physical problems have mixed boundary conditions.

**Why boundary conditions matter numerically.** Boundary conditions are not merely mathematical formalities. They constrain the solution and, in the numerical setting, they determine the values held fixed throughout the computation. An incorrect or inconsistent boundary condition will corrupt the entire computation, not just the boundary rows. Checking that boundary conditions are correctly implemented is one of the first things to verify when a numerical PDE solution looks wrong.

**Diagram instruction.** Revisit the space-time grid from Section 13.2. Highlight the bottom row in blue and label it "initial condition: $u_i^0 = f(x_i)$." Highlight the left column in red and label it "left boundary: $u_0^n = \alpha$." Highlight the right column in red and label it "right boundary: $u_N^n = \beta$." Shade the interior nodes in gray and note that these are computed by the finite difference scheme.

---

## 13.6 Heat Equation Approximation

The one-dimensional heat equation is

$$\frac{\partial u}{\partial t} = \kappa \frac{\partial^2 u}{\partial x^2}$$

where $u(x,t)$ is temperature at position $x$ and time $t$, and $\kappa > 0$ is the thermal diffusivity, a positive constant that describes how quickly heat flows through the material. The equation says: the rate of temperature change at a point equals $\kappa$ times the concavity of the temperature distribution at that point. Where the temperature profile is concave down, the temperature will fall; where it is concave up, the temperature will rise.

**The explicit finite difference method.** Substituting the forward difference in time and the centered difference in space into the heat equation gives

$$\frac{u_i^{n+1} - u_i^n}{k} = \kappa \frac{u_{i-1}^n - 2u_i^n + u_{i+1}^n}{h^2}$$

Solving for the unknown $u_i^{n+1}$:

$$u_i^{n+1} = u_i^n + r\left(u_{i-1}^n - 2u_i^n + u_{i+1}^n\right)$$

where we define the dimensionless parameter

$$r = \frac{\kappa k}{h^2}$$

This formula is explicit: every quantity on the right side is known (it comes from the current or previous time level), so $u_i^{n+1}$ can be computed directly without solving any system of equations. We apply this formula for every interior node $i = 1, 2, \ldots, N-1$, holding the boundary values $u_0^n$ and $u_N^n$ fixed, and advance one time step at a time.

**What the formula says intuitively.** The update formula says that the new temperature at node $i$ is the old temperature at $i$ plus $r$ times the second difference of the current temperatures. The second difference $u_{i-1}^n - 2u_i^n + u_{i+1}^n$ is the discrete analog of the second derivative. It is positive when the profile is concave up (the node is below its neighbors), pulling the temperature up. It is negative when the profile is concave down, pulling the temperature down. This is exactly the physical idea of heat diffusion.

**Algorithm: Explicit Heat Equation Method**

```
Algorithm: Explicit Finite Difference for the Heat Equation

Purpose:
  Approximate u(x,t) satisfying u_t = kappa * u_xx
  with given initial and Dirichlet boundary conditions.

Inputs:
  kappa   — thermal diffusivity (positive constant)
  L       — length of spatial domain [0, L]
  T       — total time to simulate
  N       — number of spatial subintervals
  M       — number of time steps
  f(x)    — initial condition function, u(x, 0) = f(x)
  alpha   — left boundary value, u(0, t) = alpha
  beta    — right boundary value, u(L, t) = beta

Compute:
  h = L / N
  k = T / M
  r = kappa * k / h^2

Check stability:
  If r > 0.5, issue a warning: method may be unstable.

Initialize:
  For i = 0 to N:
    u[i] = f(i * h)
  u[0] = alpha
  u[N] = beta

Time-stepping loop:
  For n = 0 to M-1:
    For i = 1 to N-1:
      u_new[i] = u[i] + r * (u[i-1] - 2*u[i] + u[i+1])
    u_new[0] = alpha
    u_new[N] = beta
    Replace u with u_new

Output:
  The array u, representing the approximate solution at time T.

Reliability notes:
  The method is first-order accurate in time and second-order accurate in space.
  Stability requires r <= 0.5.
  Smaller h and k improve accuracy but increase computational cost.
```

**Worked Example 13.1: Explicit Heat Equation**

*Problem.* A metal rod of length $L = 1$ has initial temperature $u(x, 0) = \sin(\pi x)$ for $0 \leq x \leq 1$. The endpoints are held at $u(0,t) = 0$ and $u(1,t) = 0$ for all $t \geq 0$. The thermal diffusivity is $\kappa = 1$. Approximate the solution using the explicit method with $N = 4$ spatial subintervals and a time step $k = 0.01$. Compute the first two time steps.

*Think.* The initial temperature profile is a sine arch peaking at $x = 0.5$ with maximum temperature $1$. The endpoints are fixed at zero. Heat should diffuse symmetrically, with the interior cooling over time. Since we have the exact solution $u(x,t) = e^{-\pi^2 t} \sin(\pi x)$ for this simple case, we can check our approximation.

*Method.* Use the explicit finite difference method with parameters:
$$h = \frac{1}{4} = 0.25, \quad k = 0.01, \quad r = \frac{1 \cdot 0.01}{0.25^2} = \frac{0.01}{0.0625} = 0.16$$

Since $r = 0.16 \leq 0.5$, the stability condition is satisfied.

*Compute.*

Initial values at $t = 0$:
$$u_0^0 = \sin(0) = 0, \quad u_1^0 = \sin(0.25\pi) \approx 0.7071$$
$$u_2^0 = \sin(0.5\pi) = 1.0000, \quad u_3^0 = \sin(0.75\pi) \approx 0.7071, \quad u_4^0 = \sin(\pi) = 0$$

Apply the update formula $u_i^{n+1} = u_i^n + r(u_{i-1}^n - 2u_i^n + u_{i+1}^n)$ with $r = 0.16$:

**Time step 1** ($n = 0$ to $n = 1$):

For $i = 1$: $u_1^1 = 0.7071 + 0.16(0 - 2(0.7071) + 1.0000) = 0.7071 + 0.16(-0.4142) = 0.7071 - 0.0663 = 0.6408$

For $i = 2$: $u_2^1 = 1.0000 + 0.16(0.7071 - 2(1.0000) + 0.7071) = 1.0000 + 0.16(-0.5858) = 1.0000 - 0.0937 = 0.9063$

For $i = 3$: By symmetry, $u_3^1 = u_1^1 = 0.6408$

Boundaries: $u_0^1 = 0$, $u_4^1 = 0$.

**Time step 2** ($n = 1$ to $n = 2$):

For $i = 2$: $u_2^2 = 0.9063 + 0.16(0.6408 - 2(0.9063) + 0.6408) = 0.9063 + 0.16(-0.5310) = 0.9063 - 0.0850 = 0.8213$

*Check.* The exact solution at $t = 0.02$ gives $u(0.5, 0.02) = e^{-\pi^2 (0.02)}\sin(0.5\pi) = e^{-0.1974} \approx 0.8209$. Our approximation gives $u_2^2 \approx 0.8213$, an error of about $0.0004$. The method is working correctly.

*Interpret.* The interior temperature is decreasing, as expected: heat is flowing to the cold boundaries. The numerical solution correctly captures the diffusion process. With a coarse grid of only 4 subintervals, the approximation is already reasonably close to the exact value.

---

## 13.7 Stability in Heat Equation Methods

The stability condition $r \leq \frac{1}{2}$ is not a suggestion — it is a requirement. If this condition is violated, the explicit method produces oscillations that grow without bound, completely corrupting the computed solution even though the true solution is smooth and well-behaved.

**What happens when the method is unstable.** Suppose we use $h = 0.25$ but choose a time step $k = 0.05$, giving $r = 1 \cdot 0.05 / 0.0625 = 0.8 > 0.5$. Even starting from the smooth sine initial condition, the computed temperatures will oscillate and blow up within a few steps. The update formula amplifies small errors rather than damping them. The computed solution has no physical meaning.

**Why the condition is $r \leq \frac{1}{2}$.** This condition can be derived rigorously using Fourier analysis of the error. Each spatial Fourier mode of the error is multiplied by a factor called the amplification factor at each time step. For the explicit heat equation method, the amplification factor for mode $m$ is

$$G_m = 1 - 4r\sin^2\left(\frac{m\pi h}{2L}\right)$$

For stability, we require $|G_m| \leq 1$ for all modes $m$. The most restrictive mode gives the condition $|1 - 4r| \leq 1$, which simplifies to

$$r \leq \frac{1}{2}$$

This is called a von Neumann stability condition after the mathematician John von Neumann, who developed this analysis method in the 1940s.

**Practical consequences.** If you halve the spatial step $h$, you must reduce $k$ by a factor of four to maintain $r \leq 0.5$, since $r = \kappa k / h^2$. This means that achieving twice the spatial resolution requires four times as many time steps. The cost of explicit methods for the heat equation grows rapidly as the grid is refined.

**Implicit methods as an alternative.** One way to escape the stability constraint is to use an implicit method, where the spatial differences are evaluated at the new time level $t_{n+1}$ rather than the old time level $t_n$. The Crank-Nicolson method, for example, averages the spatial differences at both time levels:

$$\frac{u_i^{n+1} - u_i^n}{k} = \frac{\kappa}{2}\left(\frac{u_{i-1}^n - 2u_i^n + u_{i+1}^n}{h^2} + \frac{u_{i-1}^{n+1} - 2u_i^{n+1} + u_{i+1}^{n+1}}{h^2}\right)$$

This method is unconditionally stable for any $r > 0$, at the cost of requiring the solution of a tridiagonal linear system at each time step. The trade-off is algorithmic complexity for freedom from the time step constraint. Implicit methods are central to professional PDE solvers but require linear algebra tools beyond what this introductory chapter develops in detail.

**Student warning.** Never choose a time step for the heat equation without checking the stability condition $r = \kappa k / h^2 \leq 1/2$. A numerical solution that looks smooth in the early steps but develops wild oscillations later is a classic sign of instability. Stability must be checked analytically before any computation begins, not discovered after the computation fails.

---

## 13.8 Wave Equation Approximation as an Introduction

The one-dimensional wave equation is

$$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$$

where $u(x,t)$ represents the displacement of a vibrating string at position $x$ and time $t$, and $c > 0$ is the wave speed. Unlike the heat equation, which has a single first derivative in time, the wave equation has a second derivative in time. This means we need two initial conditions: the initial displacement $u(x, 0) = f(x)$ and the initial velocity $\frac{\partial u}{\partial t}(x, 0) = g(x)$.

**Discretizing the wave equation.** Using the centered second difference in both time and space:

$$\frac{u_i^{n+1} - 2u_i^n + u_i^{n-1}}{k^2} = c^2 \frac{u_{i-1}^n - 2u_i^n + u_{i+1}^n}{h^2}$$

Solving for the new time level $u_i^{n+1}$:

$$u_i^{n+1} = 2u_i^n - u_i^{n-1} + \lambda^2\left(u_{i-1}^n - 2u_i^n + u_{i+1}^n\right)$$

where $\lambda = \frac{ck}{h}$ is the Courant number.

**The starting problem.** The formula for $u_i^{n+1}$ requires both $u_i^n$ (the current level) and $u_i^{n-1}$ (the previous level). At the first time step, $n = 1$, we need $u_i^0 = f(x_i)$ and $u_i^{-1}$, which represents the solution before the start of the simulation. We handle this using the initial velocity condition: a first-order approximation gives

$$u_i^{-1} \approx u_i^0 - k \cdot g(x_i)$$

Substituting into the update formula at the first step produces a workable starting rule. Higher-order starting rules are available and used in more careful implementations.

**The CFL stability condition.** For the explicit wave equation method, stability requires

$$\lambda = \frac{ck}{h} \leq 1$$

This is the Courant-Friedrichs-Lewy condition, usually called the CFL condition after its three discoverers. It has a beautiful physical interpretation: the numerical domain of dependence must contain the physical domain of dependence. The value $ck$ is the distance a wave travels in one time step, and $h$ is the grid spacing. If the wave travels more than one grid spacing per time step, information propagates faster than the grid can track it, and the method becomes unstable.

**Behavior of wave solutions.** Unlike the heat equation, which smooths out initial profiles over time, the wave equation preserves sharp features. A triangular initial displacement propagates as two triangular waves traveling in opposite directions. If the wave equation method is working correctly, these features should be maintained without artificial smoothing or oscillation. Numerical diffusion — the artificial spreading of sharp features — is a concern in wave equation computation, and higher-order methods are used in practice to minimize it.

**Diagram instruction.** Draw a time sequence of displacement profiles for a string with a triangular initial displacement. Show three snapshots: the initial triangle at $t = 0$; two smaller triangles moving in opposite directions at an intermediate time $t_1$; the two triangles reaching the boundaries and reflecting at a later time $t_2$. Label the wave speed $c$ and indicate the direction of propagation.

---

## 13.9 Laplace Equation Approximation

The Laplace equation is

$$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$$

This equation governs steady-state problems: temperature in a plate after it has reached thermal equilibrium, electrostatic potential, pressure in an incompressible fluid. Unlike the heat and wave equations, the Laplace equation has no time variable. The solution $u(x,y)$ depends only on position in a two-dimensional domain.

**Physical interpretation.** A function satisfying the Laplace equation is called harmonic. Harmonic functions have the mean-value property: the value at any interior point equals the average of the values at all surrounding points. This is the mathematical expression of equilibrium. Each interior point takes the average of its neighbors.

**Discretizing the Laplace equation.** On a uniform grid with spacing $h$ in both the $x$ and $y$ directions, the centered second differences in $x$ and $y$ give

$$\frac{u_{i-1,j} - 2u_{i,j} + u_{i+1,j}}{h^2} + \frac{u_{i,j-1} - 2u_{i,j} + u_{i,j+1}}{h^2} = 0$$

Multiplying through by $h^2$ and rearranging:

$$u_{i,j} = \frac{1}{4}\left(u_{i-1,j} + u_{i+1,j} + u_{i,j-1} + u_{i,j+1}\right)$$

This is the five-point stencil for the discrete Laplace equation. It says: the value at each interior node equals the average of its four neighbors (left, right, below, above). This discrete mean-value property perfectly mirrors the continuous mean-value property.

**Diagram instruction.** Draw a small portion of a two-dimensional grid. Highlight the five-point stencil: a center node $(i,j)$ and its four immediate neighbors $(i-1,j)$, $(i+1,j)$, $(i,j-1)$, $(i,j+1)$. Label all five nodes. Draw arrows from the four neighbors pointing toward the center, indicating that the center value is the average of its neighbors.

**Boundary conditions for the Laplace equation.** The Laplace equation requires boundary conditions on all four sides of the rectangular domain. Dirichlet conditions fix the value of $u$ on each side. For example, a metal plate might be held at $u = 100$ on one side and $u = 0$ on the other three sides. The numerical solution finds the steady-state temperature distribution in the interior.

**The linear system.** The discrete Laplace equation gives one equation for each interior node: the value at that node equals the average of its four neighbors. If the domain has $M \times N$ interior nodes, the system has $MN$ equations and $MN$ unknowns. The system is large but sparse: each equation involves only five of the $MN$ unknowns. This structure can be exploited by both direct and iterative solvers.

---

## 13.10 Iterative Grid Methods

For the Laplace equation on a large grid, the system of $MN$ equations can be solved iteratively. The discrete mean-value property suggests an elegant iterative approach: start with an initial guess for the interior values, then update each node to be the average of its current four neighbors, and repeat until the values converge.

**Jacobi iteration for the Laplace equation.** In the Jacobi method, all interior nodes are updated simultaneously using the current values of all neighbors:

$$u_{i,j}^{(k+1)} = \frac{1}{4}\left(u_{i-1,j}^{(k)} + u_{i+1,j}^{(k)} + u_{i,j-1}^{(k)} + u_{i,j+1}^{(k)}\right)$$

The superscript $(k)$ denotes the iteration number. We start with an initial guess — often all interior values set to zero or to the average of the boundary values — and iterate until

$$\max_{i,j} \left|u_{i,j}^{(k+1)} - u_{i,j}^{(k)}\right| < \varepsilon$$

for a chosen tolerance $\varepsilon$.

**Gauss-Seidel iteration.** In the Gauss-Seidel method, updated values are used immediately as they become available during the sweep:

$$u_{i,j}^{(k+1)} = \frac{1}{4}\left(u_{i-1,j}^{(k+1)} + u_{i+1,j}^{(k)} + u_{i,j-1}^{(k+1)} + u_{i,j+1}^{(k)}\right)$$

Because the updated left and lower neighbors are available immediately, Gauss-Seidel typically converges roughly twice as fast as Jacobi for this problem. The method is directly analogous to the Gauss-Seidel iteration for linear systems studied in Chapter 9.

**Algorithm: Gauss-Seidel for Laplace Equation**

```
Algorithm: Gauss-Seidel Iteration for the Laplace Equation

Purpose:
  Approximate the solution to u_xx + u_yy = 0 on a rectangular domain
  with Dirichlet boundary conditions.

Inputs:
  N, M      — number of grid points in x and y directions
  h         — uniform grid spacing (same in both directions)
  BC values — boundary values on all four sides
  tolerance — convergence threshold epsilon
  max_iter  — maximum number of iterations

Initialize:
  Set all interior values u[i][j] = 0 (or boundary average)
  Fix boundary values (do not update them)

Iteration loop:
  For iteration = 1 to max_iter:
    max_change = 0
    For i = 1 to N-1:
      For j = 1 to M-1:
        u_old = u[i][j]
        u[i][j] = 0.25 * (u[i-1][j] + u[i+1][j] + u[i][j-1] + u[i][j+1])
        max_change = max(max_change, |u[i][j] - u_old|)
    If max_change < tolerance:
      Stop; convergence achieved.

Output:
  The array u[i][j], representing the approximate steady-state solution.

Reliability notes:
  Convergence is guaranteed for the Laplace equation with Dirichlet BCs.
  Convergence can be slow for large grids; many professional codes use
  acceleration techniques (SOR, multigrid) not covered here.
```

**Worked Example 13.2: Laplace Equation on a Small Grid**

*Problem.* Consider a square plate with corners at $(0,0)$, $(1,0)$, $(1,1)$, $(0,1)$. Boundary conditions: $u = 100$ on the top edge ($y = 1$), and $u = 0$ on the other three edges. Use a grid with $h = 0.5$, giving one interior node at $(0.5, 0.5)$.

*Think.* With only one interior node, the problem reduces to a single equation. The mean-value property says the interior value equals the average of its four boundary neighbors.

*Method.* The four neighbors of the interior node $(0.5, 0.5)$ are:
- Left: $(0, 0.5)$ — on the left boundary, $u = 0$
- Right: $(1, 0.5)$ — on the right boundary, $u = 0$
- Bottom: $(0.5, 0)$ — on the bottom boundary, $u = 0$
- Top: $(0.5, 1)$ — on the top boundary, $u = 100$

*Compute.*

$$u_{1,1} = \frac{1}{4}(0 + 0 + 0 + 100) = 25$$

*Check.* This is the exact discrete solution for this grid. The exact continuous solution at the center of the plate is close to 25, consistent with the boundary conditions.

*Interpret.* The interior temperature is $25$ out of $100$, the average of the four boundary values. Only the top edge is hot; the other three are at zero. The single interior node correctly reflects that most of the plate is closer to the cold boundaries than to the hot one.

---

## 13.11 Visualization of PDE Solutions

One of the distinguishing features of PDE computation is that the solution is a field, not a single number. For a one-dimensional time-dependent problem, the solution is an array of temperatures at every grid point at every time step. For a two-dimensional steady-state problem, the solution is a matrix of values covering the spatial domain.

**Space-time plots for 1D time-dependent problems.** A space-time plot displays the solution as a surface or contour plot over the space-time grid. The horizontal axis represents position $x$, the vertical axis represents time $t$, and color or height represents the value of $u(x,t)$. For the heat equation, this plot shows the temperature profile smoothing and decaying toward the steady state. For the wave equation, it shows characteristic lines propagating from the initial profile.

**Snapshot plots.** A simpler alternative is to plot the solution $u(x, t_n)$ as a function of $x$ at several chosen time levels $t_n$. Each snapshot is a curve showing the spatial profile at one moment. Overlaying several snapshots on the same axes gives a clear picture of how the solution evolves.

**Heatmaps and contour plots for 2D problems.** For two-dimensional steady-state problems, the solution $u(x,y)$ is naturally displayed as a heatmap or contour plot over the spatial domain. Contour lines connect points of equal solution value, analogous to elevation contours on a topographic map. For the Laplace equation on a plate with one hot side, the contour lines bow toward the cold boundaries, showing how heat spreads through the interior.

**Diagram instruction.** For the heat equation example: draw a series of six curves on the same axes, each showing the temperature profile $u(x, t_n)$ as a function of $x$ at a different time $t_n$. The first curve is a sine arch (the initial condition). Each subsequent curve is a flatter, shorter arch, showing the temperature decaying toward zero as heat flows to the boundaries. Label the time level on each curve.

**Checking solutions visually.** Visualization is not merely decorative — it is a diagnostic tool. A numerical PDE solution should be checked visually against physical expectations: Does the heat equation solution decay smoothly? Does the wave equation solution preserve wave shape? Does the Laplace equation solution satisfy the mean-value property qualitatively? Solutions that look physically wrong almost certainly have an error somewhere in the numerical implementation.

---

## 13.12 PDE Simulation in Physics and Engineering

Partial differential equations are the mathematical language of the physical sciences. The applications of numerical PDE methods are vast, and understanding even the basics of this chapter connects students to major areas of scientific computing.

**Heat and mass transfer.** The heat equation models heat flow in solids, convection in fluids, and diffusion of chemical species. Engineers use numerical PDE solvers to design heat sinks for electronics, insulation for buildings, and cooling systems for reactors. The explicit and implicit methods studied here are foundational; industrial codes add convection terms, nonlinear material properties, and three-dimensional domains.

**Structural mechanics.** The elasticity equations, a system of elliptic PDEs, describe stress and strain in solid structures. Finite element methods — a generalization of finite difference methods adapted to irregular domains — are used to analyze bridges, aircraft, and biomedical implants. The condition $\nabla^2 u = 0$ (the Laplace equation) appears as a special case in problems of steady stress or potential flow.

**Fluid dynamics.** The Navier-Stokes equations, a nonlinear system of PDEs, describe fluid motion. Computational fluid dynamics (CFD) is one of the most computationally demanding fields of applied science, consuming enormous computing resources to simulate aircraft aerodynamics, weather patterns, ocean circulation, and blood flow. The finite difference ideas in this chapter are the conceptual ancestors of CFD methods.

**Wave propagation.** The wave equation governs acoustic waves, electromagnetic waves, seismic waves, and quantum mechanical wave functions. Seismologists use numerical wave equation solvers to model earthquake propagation and locate subsurface oil reservoirs. Antenna engineers use them to simulate electromagnetic radiation patterns.

**Finance.** The Black-Scholes equation for option pricing is a parabolic PDE closely related to the heat equation, after a change of variables. Banks and trading firms use numerical PDE solvers to price options and other derivatives when closed-form solutions are unavailable.

**Climate modeling.** Global climate models solve coupled systems of PDEs for temperature, pressure, wind velocity, ocean currents, and atmospheric chemistry on grids covering the entire Earth. These models represent some of the largest computational problems ever attempted.

---

## 13.13 Common Numerical PDE Mistakes

Students working with numerical PDE methods encounter several recurring errors. Recognizing them early prevents wasted computation and misinterpreted results.

**Violating the stability condition.** The most common mistake is choosing a time step $k$ without checking the stability condition. For the explicit heat equation method, the condition $r = \kappa k / h^2 \leq 1/2$ must be satisfied. For the wave equation, the CFL condition $\lambda = ck/h \leq 1$ must be satisfied. Choosing a time step that is too large produces numerical instability, which looks like rapidly growing oscillations in the solution. Always check stability conditions before computing.

**Confusing indices.** The notation $u_i^n$ uses a spatial index $i$ as a subscript and a time index $n$ as a superscript. In code, these become array indices, typically $u[i][n]$ or $u[n][i]$ depending on how the array is organized. Transposing these indices produces wrong results that may not be obviously wrong. Write out the stencil carefully before implementing it.

**Applying the update formula at boundary nodes.** The update formula for interior nodes must not be applied at boundary nodes. Boundary values are fixed by the boundary conditions; overwriting them with the interior update formula corrupts the solution. Always check that the loop over interior nodes excludes the boundary indices.

**Forgetting the initial condition for the wave equation.** The wave equation requires both $u(x, 0) = f(x)$ (initial displacement) and $\frac{\partial u}{\partial t}(x, 0) = g(x)$ (initial velocity). Students working from the heat equation sometimes forget that a second initial condition is needed for the wave equation. The standard starting rule uses the initial velocity to construct a ghost time level $u_i^{-1}$.

**Using too coarse a grid and trusting the result.** A coarse grid with $N = 4$ or $N = 5$ spatial points may give a rough approximation but will miss fine structure. Always test a method by comparing solutions on progressively finer grids. If the solution changes significantly when the grid is refined, the coarse grid result cannot be trusted.

**Not checking physical plausibility.** A numerical PDE solution should make physical sense. Heat should flow from hot regions to cold regions. Wave amplitudes should be conserved in the wave equation without damping. The Laplace equation solution should be smooth and satisfy the mean-value property. If the solution does not pass a basic physical plausibility check, something is wrong.

**Confusing truncation error with round-off error.** Truncation error comes from the finite difference approximation itself (the terms dropped in the Taylor series). Roundoff error comes from floating-point arithmetic. In PDE computation, truncation error is usually dominant. Making the grid very fine does reduce truncation error, but it also increases the number of arithmetic operations, eventually amplifying roundoff error. In practice, a balance must be found.

---

## 13.14 Preparing for Capstone Simulation

This chapter has introduced the major ideas of numerical PDE computation: grids, discretization, finite differences, boundary conditions, stability, the explicit heat equation method, the wave equation method, the Laplace equation, and iterative grid methods. The examples have been deliberately simple — one-dimensional domains, uniform grids, Dirichlet boundary conditions — so that the core ideas are clear.

Chapter 14 brings together the entire numerical methods course in a capstone context. Students will see how to choose among methods, manage error, document computations, visualize results, and communicate numerical findings. The numerical PDE methods of this chapter will appear as one important part of that broader computational toolkit.

Students who continue into advanced numerical analysis will encounter:

- Higher-order finite difference methods
- Finite element methods for irregular domains and complex geometries
- Spectral methods based on global Fourier or polynomial expansions
- Implicit methods, alternating direction implicit (ADI) methods, and splitting schemes
- Adaptive mesh refinement
- Solvers for nonlinear PDE systems, including the Navier-Stokes equations
- Multigrid methods for efficient solution of large elliptic systems
- Parallel computing methods for very large-scale PDE simulation

The foundation built in this chapter — understanding what a PDE is, why numerical methods are needed, how a grid works, how finite differences discretize derivatives, and what stability means — supports all of these advanced topics.

---

## Chapter Summary

A partial differential equation (PDE) involves a function of two or more variables and its partial derivatives. Unlike ordinary differential equations, PDEs cannot generally be solved in closed form for realistic problems. Numerical methods approximate the solution by working on a discrete grid of points.

A grid divides the spatial domain into $N$ subintervals of width $h$ and the time domain into $M$ steps of width $k$. The grid points $(x_i, t_n)$ are the nodes where approximate solution values $u_i^n$ are computed.

Discretization replaces continuous partial derivatives with finite difference approximations. The centered second difference $\frac{u_{i-1} - 2u_i + u_{i+1}}{h^2}$ approximates $\frac{\partial^2 u}{\partial x^2}$ with second-order accuracy. The forward difference $\frac{u_i^{n+1} - u_i^n}{k}$ approximates $\frac{\partial u}{\partial t}$ with first-order accuracy.

The heat equation $u_t = \kappa u_{xx}$ is a parabolic PDE describing diffusion. The explicit finite difference method advances the solution one time step at a time using the formula $u_i^{n+1} = u_i^n + r(u_{i-1}^n - 2u_i^n + u_{i+1}^n)$ with $r = \kappa k / h^2$. The method is stable only when $r \leq 1/2$.

The wave equation $u_{tt} = c^2 u_{xx}$ is a hyperbolic PDE describing propagation. The explicit method uses centered differences in both time and space and is stable when the CFL condition $\lambda = ck/h \leq 1$ holds.

The Laplace equation $u_{xx} + u_{yy} = 0$ is an elliptic PDE describing steady-state problems. The discrete five-point stencil says each interior node equals the average of its four neighbors. Iterative methods such as Gauss-Seidel solve the resulting system by repeated averaging until convergence.

Boundary conditions specify the solution behavior at the domain boundary and must be correctly implemented throughout the computation. Initial conditions specify the starting state for time-dependent problems.

Visualization is an essential tool for checking PDE solutions. Solutions should be examined for physical plausibility, smooth behavior, and consistent behavior under grid refinement.

---

## Key Terms Review

**partial differential equation (PDE):** An equation involving a function of two or more variables and its partial derivatives.

**grid / mesh:** A discrete set of points covering the domain at which the approximate solution is computed.

**node:** A single point on the grid, identified by spatial index $i$ and time index $n$ for time-dependent problems.

**grid spacing $h$:** The uniform distance between adjacent spatial nodes.

**time step $k$:** The uniform distance between adjacent time levels.

**discretization:** The process of replacing a continuous PDE with a system of algebraic equations on a grid.

**finite difference method:** A numerical method for PDEs that uses finite difference approximations for derivatives.

**explicit method:** A time-stepping scheme in which new values are computed directly from known values at the current and previous time levels.

**implicit method:** A time-stepping scheme in which new values at the next time level are coupled, requiring the solution of a linear system at each step.

**initial condition:** The specification of the solution at time $t = 0$.

**Dirichlet boundary condition:** A boundary condition that specifies the value of the solution on the boundary.

**Neumann boundary condition:** A boundary condition that specifies the derivative of the solution on the boundary.

**heat equation:** The PDE $u_t = \kappa u_{xx}$, a model of diffusion.

**wave equation:** The PDE $u_{tt} = c^2 u_{xx}$, a model of wave propagation.

**Laplace equation:** The PDE $u_{xx} + u_{yy} = 0$, a model of steady-state equilibrium.

**parabolic PDE:** A PDE type associated with diffusion; the heat equation is the canonical example.

**hyperbolic PDE:** A PDE type associated with wave propagation; the wave equation is the canonical example.

**elliptic PDE:** A PDE type associated with steady-state phenomena; the Laplace equation is the canonical example.

**stability:** The property of a numerical method that small errors do not grow without bound during computation.

**CFL condition:** The Courant-Friedrichs-Lewy stability condition for wave equation methods: $ck/h \leq 1$.

**von Neumann stability condition:** A stability criterion for PDE methods derived from Fourier analysis of the error amplification factor.

**five-point stencil:** The discrete Laplace operator that computes a weighted average of a node and its four immediate spatial neighbors.

**iterative grid method:** An iterative method for solving the discrete Laplace equation by repeatedly updating each node to be the average of its neighbors.

---

## Concept Review Questions

1. What is a partial differential equation, and how does it differ from an ordinary differential equation? Give an example of a physical phenomenon described by each.

2. What is a grid or mesh in the context of numerical PDE methods? What information does a grid point carry?

3. What are the spatial step $h$ and the time step $k$, and why does their choice matter?

4. Write the centered second difference approximation for $\partial^2 u / \partial x^2$. What is its order of accuracy?

5. What is a Dirichlet boundary condition? What is a Neumann boundary condition? Give a physical example of each.

6. Write the explicit finite difference update formula for the heat equation. What does each term represent?

7. What is the stability condition for the explicit heat equation method? What happens if it is violated?

8. Explain in physical terms why the CFL condition $ck/h \leq 1$ makes sense for the wave equation.

9. What is the discrete five-point stencil for the Laplace equation? What physical principle does it express?

10. Describe the Gauss-Seidel iterative method for the Laplace equation. When does it stop?

11. What is a parabolic PDE? A hyperbolic PDE? An elliptic PDE? Give one example of each.

12. Why is visualization important in numerical PDE computation? What should a student look for when examining a PDE solution?

---

## Method and Algorithm Practice

1. For the explicit heat equation method with $\kappa = 2$, $h = 0.1$, and $k = 0.002$, compute the parameter $r$. Is the method stable?

2. For the explicit heat equation method with $\kappa = 1$, $h = 0.2$, determine the maximum stable time step $k$.

3. For the wave equation method with $c = 3$, $h = 0.25$, determine the maximum stable time step $k$ from the CFL condition.

4. A grid has $N = 5$ spatial subintervals on $[0, 1]$. List all grid points $x_i$ and identify which are boundary nodes and which are interior nodes.

5. Write out the five-point stencil equation for an interior node $(i, j)$ in the discrete Laplace equation. Solve it for $u_{i,j}$ in terms of its neighbors.

6. A square plate has $h = 1/3$, giving an interior of $2 \times 2$ nodes. Boundary values: top $= 80$, bottom $= 0$, left $= 0$, right $= 0$. Set up the system of four equations (one per interior node) using the five-point stencil.

---

## Computation Practice

1. **Heat equation by hand.** The rod $[0, 1]$ has initial temperature $u(x, 0) = 4x(1-x)$ and boundary conditions $u(0,t) = u(1,t) = 0$. Use $N = 4$, $\kappa = 1$, and $k = 0.03$ (check stability first). Compute $u_i^1$ for all $i$.

2. **Heat equation stability check.** Repeat the computation of Problem 1 with $k = 0.04$. Observe what happens and explain why.

3. **Laplace equation iteration.** For the plate described in the algorithm example (all boundary values zero except the top edge at 100), with a $3 \times 3$ interior grid (spacing $h = 0.25$), perform two iterations of Jacobi iteration starting from all interior values $= 0$.

4. **Wave equation starting step.** For the wave equation with $c = 1$, $h = 0.5$, $k = 0.25$ on $[0, 2]$, initial displacement $f(x) = x(2-x)$, and initial velocity $g(x) = 0$, compute the values at $t_1 = k$ for all interior nodes.

---

## Applications

1. **Heat flow in a rod.** A steel rod of length 0.5 m has one end maintained at 200°C and the other at 50°C. The initial temperature throughout the rod is 50°C. The thermal diffusivity of steel is approximately $\kappa = 1.2 \times 10^{-5}$ m²/s. Describe how you would set up an explicit finite difference model to find the temperature distribution after 60 seconds. What grid spacing and time step would you choose?

2. **Vibrating string.** A string of length 1 m is plucked at its center, creating an initial triangular displacement with maximum height 0.02 m at the midpoint. The wave speed is $c = 10$ m/s. Set up the wave equation model and determine a stable time step for a grid with $N = 20$ spatial subintervals.

3. **Steady heat in a plate.** A square metal plate has its left edge at 0°C, right edge at 0°C, bottom edge at 0°C, and top edge at a temperature profile $u(x, 1) = 100\sin(\pi x)$. Explain how the five-point stencil and iterative method would be used to find the steady-state interior temperatures.

4. **Black-Scholes connection.** The Black-Scholes equation for option pricing is

   $$\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS\frac{\partial V}{\partial S} - rV = 0$$

   where $V(S,t)$ is the option price, $S$ is the stock price, $\sigma$ is volatility, and $r$ is the interest rate. Identify which type of PDE this resembles (parabolic, hyperbolic, or elliptic) and explain why numerical PDE methods are needed to solve it for realistic boundary conditions.

---

## Error Analysis

1. Show from the Taylor expansion that the centered second difference $\frac{u_{i-1} - 2u_i + u_{i+1}}{h^2}$ approximates $u''(x_i)$ with error $O(h^2)$.

2. The explicit heat equation method has truncation error $O(k) + O(h^2)$. If you halve $h$ and choose $k$ to satisfy the stability condition $r = 1/4$, what happens to the time step? How does the total error change?

3. For the heat equation with $\kappa = 1$ and the exact solution $u(x,t) = e^{-\pi^2 t}\sin(\pi x)$, compute the exact value at $x = 0.5$, $t = 0.01$. Compare this with the explicit method approximation for $N = 10$ and $k = 0.0045$. Estimate the error.

4. In Gauss-Seidel iteration for the Laplace equation, the maximum change per iteration is used as a convergence criterion. If the tolerance is $\varepsilon = 0.001$ and the initial maximum change is $50$, roughly how many iterations might be needed for a grid where the convergence factor is approximately $0.9$ per iteration? (Use the geometric series.)

---

## Chapter Checkpoint

**Part A: Concepts**

1. Define the three PDE types covered in this chapter and give one physical example of each.

2. What is a stencil in the context of finite difference methods? Describe the stencil used in the explicit heat equation method.

3. Explain in your own words what the CFL condition $ck/h \leq 1$ means physically.

4. Why does the discrete Laplace equation produce a linear system? Why is an iterative method often used to solve it?

**Part B: Computation**

5. A rod $[0,2]$ has $N = 4$ subintervals, $\kappa = 0.5$, and time step $k = 0.1$.
   - (a) Find $h$ and $r$.
   - (b) Check whether the method is stable.
   - (c) If the initial temperature is $u(x, 0) = x(2-x)$ and the boundary conditions are $u(0,t) = u(2,t) = 0$, compute $u_i^1$ for $i = 1, 2, 3$.

6. A square plate has all boundary values equal to zero except the right edge, where $u = 60$. The grid spacing is $h = 1/2$, giving one interior node. Use the five-point stencil to find the steady-state temperature at the interior node.

**Part C: Analysis**

7. A student uses the explicit heat equation method with $r = 0.6$ and finds that after 20 time steps the computed temperatures include values of $+10000$ and $-8000$ even though the initial temperatures were between $0$ and $100$. Diagnose the problem and explain what the student should do.

8. Explain why an explicit method for the heat equation requires the time step $k$ to decrease as $h^2$ when $h$ is halved, while an implicit method allows any time step. What is the practical implication for large-scale computations?

---

## Bridge Note

*Numerical Methods in Advanced Numerical Analysis, Scientific Computing, and Engineering Simulation*

This chapter has introduced numerical PDE methods as a carefully structured preview. The three model equations — heat, wave, and Laplace — are the simplest representatives of their PDE types, chosen because their mathematical behavior is well understood and their numerical treatment illustrates the core ideas cleanly.

Students who continue into advanced courses will encounter a dramatically expanded landscape. **Finite element methods** generalize finite differences to handle irregular domains, curved boundaries, and unstructured meshes — essential for engineering structures with complex geometry. **Spectral methods** use global Fourier or polynomial expansions rather than local finite differences and achieve very high accuracy for smooth solutions on simple domains. **Adaptive mesh refinement** automatically concentrates grid points in regions where the solution is changing rapidly, greatly improving efficiency for solutions with localized features.

For time-dependent problems, **operator splitting** and **alternating direction implicit (ADI) methods** extend implicit stability benefits to multidimensional problems efficiently. **Multigrid methods** are among the most powerful iterative solvers for elliptic equations, converging in a number of iterations essentially independent of the grid size.

Beyond these numerical developments, the applications multiply. **Computational fluid dynamics** solves the nonlinear Navier-Stokes equations for aerodynamics, weather prediction, and ocean modeling. **Computational electromagnetics** solves Maxwell's equations for antenna design and photonics. **Computational structural mechanics** uses finite element PDE solvers for materials under stress, vibration, and fracture. **Computational biology** models reaction-diffusion PDEs for pattern formation and neural activity.

The ideas in this chapter — grid construction, discretization, stability analysis, iterative solution, and visualization — are the conceptual foundation for all of these advanced applications. A student who understands why $r \leq 1/2$ ensures stability for the explicit heat equation also understands the principle behind CFL analysis in CFD. A student who understands the five-point stencil and Gauss-Seidel iteration also understands the conceptual basis of multigrid methods.

Chapter 14 will draw the entire numerical methods course together into a capstone synthesis, showing how to choose, apply, test, document, and communicate numerical methods as an integrated computational practice.

---

> **MGU Library Connection.** This chapter connects to: *Appendix Q: Numerical PDE Preview Reference*, *Appendix P: Numerical ODE Solver Reference* (for comparison with time-stepping methods), *Appendix D: Programming and Pseudocode Reference* (for implementation guidance), *Appendix J: Numerical Differentiation Formula Sheet* (finite difference formulas), *MGU Physics Library: Heat Conduction and Wave Motion*, and *MGU Engineering Library: Introduction to Finite Element Methods*. Students preparing for scientific computing courses should also consult *Appendix R: Scientific Computing Technology Guide*.

---

*End of Chapter 13*
