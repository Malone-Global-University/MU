# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part II: Roots, Interpolation, and Approximation of Functions

---

# Chapter 4: Interpolation and Polynomial Approximation

---

## Purpose

This chapter introduces interpolation as one of the most fundamental and widely used ideas in numerical mathematics. Interpolation answers a deceptively simple question: given a collection of known data points, what value does the underlying function take between them?

In calculus, students work primarily with functions given by explicit formulas. But in science, engineering, finance, and data analysis, functions are rarely known in formula form. Instead, they appear as tables of measurements: temperatures recorded at discrete hours, pressures sampled at specific depths, voltages read at particular time steps, or population figures gathered in census years. Between those recorded values, the function's behavior is unknown. Interpolation provides a systematic, mathematically principled way to estimate it.

This chapter develops the theory and practice of polynomial interpolation from its foundations. Students will study linear interpolation, general polynomial interpolation, Lagrange's classical formula, Newton's divided difference construction, the interpolation error formula, the consequences of choosing interpolation points poorly, the troubling behavior known as Runge's phenomenon, and piecewise interpolation as a remedy. Throughout, the central theme is the same: interpolation is controlled estimation between known values, and that control requires understanding what guarantees an interpolating polynomial provides and where it can break down.

---

## Opening Question

A civil engineer measures the deflection of a bridge deck at five support points. The deck is continuous, but instruments record data only at the five sensor locations. The engineer needs to estimate the deflection at a point midway between two sensors to verify that safety tolerances are met.

No formula describes the bridge's deformation under this particular load. There is only the table of five measured values. How should the engineer estimate the deflection at the unmeasured location? How confident should that estimate be? What happens if the estimation method is poorly chosen?

These questions are the questions of interpolation.

---

## Why This Chapter Matters

Interpolation sits at the intersection of almost every numerical application. Root-finding methods in Chapter 3 sometimes depend on interpolated estimates. The spline and least-squares methods in Chapter 5 extend interpolation into the noisy-data setting. Numerical differentiation in Chapter 6 and numerical integration in Chapter 7 both use interpolating polynomials to derive their formulas. Taylor approximation in Chapter 8 is a special kind of local polynomial approximation. ODE and PDE solvers in Chapters 12 and 13 use interpolation to reconstruct continuous solutions from discrete steps.

Beyond its role within this textbook, interpolation appears in graphics rendering, signal reconstruction, medical imaging, satellite navigation, financial modeling, machine learning feature engineering, and the construction of mathematical tables used by embedded systems and calculators. The interpolating polynomial is not a relic; it remains one of the most productive mathematical tools in computational practice.

---

## Learning Objectives

After completing this chapter, students should be able to:

- Explain what interpolation is and why it is needed.
- Construct a linear interpolant between two data points.
- Explain the existence and uniqueness of the interpolating polynomial for a given set of distinct data points.
- Construct the Lagrange interpolating polynomial for a small set of data points.
- Build and use a divided difference table to construct Newton's interpolating polynomial.
- State the interpolation error formula and use it to estimate the error in a polynomial interpolant.
- Explain why interpolation points matter and describe the effect of poor choices.
- Describe Runge's phenomenon and explain why high-degree polynomial interpolation over equally spaced points can fail.
- Construct a piecewise linear interpolant and explain why piecewise methods are often preferred.
- Identify situations where polynomial interpolation is unsafe or unreliable.

---

## Key Terms

interpolation, interpolating polynomial, data point, node, interpolation node, linear interpolation, polynomial approximation, Lagrange interpolation, basis polynomial, Newton interpolation, divided difference, divided difference table, interpolation error, remainder term, Runge's phenomenon, equidistant nodes, Chebyshev nodes, piecewise interpolation, piecewise linear interpolant, extrapolation

---

## 4.1 What Interpolation Does

Interpolation is the process of constructing a function that passes exactly through a given set of known data points and then using that function to estimate values at locations where the function is not directly known.

The word comes from the Latin *interpolare*, meaning to refurbish or alter something between its endpoints. In mathematics, interpolation inserts estimated values between known ones.

The fundamental setup is this. Suppose that measurements or calculations have produced a collection of data points. Each point consists of an input value and a corresponding output value:

$$
(x_0, y_0), \quad (x_1, y_1), \quad (x_2, y_2), \quad \ldots, \quad (x_n, y_n)
$$

The input values \( x_0, x_1, \ldots, x_n \) are called **interpolation nodes** or simply **nodes**. They must be distinct: no two nodes may have the same \( x \)-value. The output values \( y_0, y_1, \ldots, y_n \) are the function values at those nodes. In practice, these values might come from measurements, physical experiments, simulations, or mathematical tables.

An interpolant is any function \( p \) that satisfies:

$$
p(x_i) = y_i \quad \text{for each } i = 0, 1, 2, \ldots, n
$$

That is, the interpolant passes exactly through every data point. Once an interpolant is constructed, it can be evaluated at any input value \( x \) lying between the nodes, producing an estimated function value. This estimate is the interpolated value.

It is important to notice what interpolation does not require. It does not require knowing the formula for the underlying function. It does not require understanding why the data takes the values it does. Interpolation works from the data alone.

**The distinction between interpolation and extrapolation.** When the input value \( x \) lies between the smallest and largest nodes, the process is interpolation. When \( x \) lies outside that range, the process is called **extrapolation**. Extrapolation is far less reliable than interpolation. A polynomial or other interpolant that behaves reasonably between the nodes may diverge wildly outside them. Students should treat extrapolation with considerable caution and should always state clearly when an estimate relies on it.

**The choice of interpolant.** Many kinds of functions could serve as an interpolant: polynomials, piecewise polynomials, trigonometric functions, rational functions, and others. This chapter focuses primarily on **polynomial interpolation**, because polynomials are easy to construct, evaluate, differentiate, and integrate. Later sections introduce piecewise polynomials, and Chapter 5 extends the discussion to splines and least-squares approximation.

---

## 4.2 Data Points and Function Values

Before building any interpolant, it is worth pausing to think carefully about the data itself. Where does interpolation data come from? What assumptions are hidden in the setup?

**Sources of interpolation data.** Data points for interpolation arise in several ways.

They may come from physical measurements: a thermometer records temperature at specific hours, a strain gauge measures deflection at specific loads, a flow meter records velocity at specific depths. Between those measurements, the physical quantity varies continuously, but the instrument only recorded values at the chosen moments or locations.

They may come from function tables: before electronic computation, enormous tables of values of \( \sin x \), \( \ln x \), \( e^x \), and other functions were published for use in calculations. To find a function value at an argument not listed in the table, a reader interpolated between the nearest table entries.

They may come from computational simulations: a finite element solver computes temperature at mesh nodes, and the temperature between nodes must be inferred by interpolation. An ODE solver computes a solution at discrete time steps, and continuous values at other times are recovered by interpolation.

They may come from deliberately chosen evaluation points: when approximating a complicated function by a simpler one, a student might evaluate the complicated function at \( n+1 \) chosen nodes and then use those \( n+1 \) values to construct a polynomial that approximates it.

**The assumption of a well-behaved underlying function.** Interpolation works best when the underlying function is smooth: continuously differentiable, without sharp corners, sudden jumps, or violent oscillations. When the underlying function is rough or discontinuous, polynomial interpolation between smooth nodes can produce estimates that are far from the true values.

**The role of the spacing of nodes.** The choice of where to place the interpolation nodes has a significant effect on the accuracy of the interpolant. This effect is studied carefully in later sections of this chapter.

**A word about notation.** The nodes are labeled \( x_0, x_1, \ldots, x_n \) and they need not be equally spaced. The corresponding function values are \( y_0 = f(x_0), y_1 = f(x_1), \ldots, y_n = f(x_n) \), where \( f \) denotes the underlying function if it is known, or simply the measured values if it is not.

---

## 4.3 Linear Interpolation

The simplest and most familiar form of interpolation uses two data points and a straight line.

**Setup.** Suppose two data points \( (x_0, y_0) \) and \( (x_1, y_1) \) are known, with \( x_0 \neq x_1 \). The linear interpolant through these two points is the unique line passing through both. Its formula is:

$$
p_1(x) = y_0 + \frac{y_1 - y_0}{x_1 - x_0}(x - x_0)
$$

This is simply the point-slope form of a line, with slope \( \dfrac{y_1 - y_0}{x_1 - x_0} \).

To estimate the function value at an intermediate point \( x \) with \( x_0 < x < x_1 \), evaluate \( p_1(x) \).

**Geometric meaning.** Graphically, linear interpolation connects the two known data points with a straight line segment and reads off the height of that segment at the desired input. The segment assumes that the function changes at a constant rate between \( x_0 \) and \( x_1 \).

**Reliability.** Linear interpolation is reliable when the underlying function is nearly linear over the interval \( [x_0, x_1] \). It is unreliable when the function curves significantly. The smaller the interval \( [x_0, x_1] \), the more likely the linear approximation is to be accurate, because any smooth function looks approximately linear at a sufficiently small scale.

---

**Example 4.1: Linear Interpolation from a Temperature Table**

**Problem.** A weather station records temperatures at 8:00 AM and 10:00 AM as follows:

| Time (hours after midnight) | Temperature (°C) |
|---|---|
| 8 | 14.2 |
| 10 | 18.6 |

Estimate the temperature at 9:00 AM.

**Think.** The station has two data points: \( (8, 14.2) \) and \( (10, 18.6) \). The desired time, 9 AM, lies between them. Linear interpolation is appropriate as a first estimate.

**Method.** Use the linear interpolation formula with \( x_0 = 8 \), \( y_0 = 14.2 \), \( x_1 = 10 \), \( y_1 = 18.6 \), and \( x = 9 \).

**Compute.**

$$
p_1(9) = 14.2 + \frac{18.6 - 14.2}{10 - 8}(9 - 8)
= 14.2 + \frac{4.4}{2}(1)
= 14.2 + 2.2
= 16.4
$$

**Check.** The estimate 16.4°C lies halfway between 14.2 and 18.6, which makes sense because 9:00 AM lies halfway between 8:00 AM and 10:00 AM. The result is geometrically consistent.

**Interpret.** The estimated temperature at 9:00 AM is approximately 16.4°C, assuming the temperature changes approximately linearly over this two-hour window. Whether this is an accurate estimate depends on how well the assumption of linearity reflects actual temperature behavior in that region on that day.

---

> **Interpretation Note.** Linear interpolation is an approximation, not a measurement. The estimate 16.4°C says only that if the temperature changed at a constant rate between 8 AM and 10 AM, then the 9 AM value would be 16.4°C. The actual temperature might differ if the warming rate accelerated, decelerated, or fluctuated during those two hours.

---

## 4.4 Polynomial Interpolation

Linear interpolation uses one polynomial of degree 1 to pass through two data points. The natural generalization is to use a polynomial of higher degree to pass through more data points.

**The main result.** Given \( n + 1 \) distinct nodes \( x_0, x_1, \ldots, x_n \) and corresponding values \( y_0, y_1, \ldots, y_n \), there exists exactly one polynomial \( p_n \) of degree at most \( n \) satisfying:

$$
p_n(x_i) = y_i \quad \text{for each } i = 0, 1, \ldots, n
$$

This polynomial is called the **interpolating polynomial** for the given data. Its existence and uniqueness are proven in numerical analysis courses; for this textbook, students should accept the result and focus on how to construct and use the polynomial.

**Why degree at most \( n \)?** With \( n + 1 \) data points, a polynomial of degree \( n \) has \( n + 1 \) free coefficients: the coefficients of \( x^0, x^1, x^2, \ldots, x^n \). Setting those coefficients to satisfy \( n + 1 \) interpolation conditions determines the polynomial uniquely. A polynomial of degree higher than \( n \) would have extra free parameters and would not be uniquely determined.

**The challenge: constructing the polynomial efficiently.** One approach is to set up and solve a system of \( n + 1 \) linear equations in \( n + 1 \) unknowns: the coefficients of the polynomial. For small datasets this is manageable, but it becomes computationally inefficient for large \( n \) and numerically problematic when the system is ill-conditioned. The methods introduced in the following sections — Lagrange interpolation and Newton divided differences — offer better computational approaches to the same problem.

**One polynomial, many representations.** There is only one interpolating polynomial for a given dataset, but it can be written in different algebraic forms. Lagrange's formula and Newton's divided difference formula produce the same polynomial written in different ways. Students should think of these as two representations of one underlying mathematical object, not two different polynomials.

---

## 4.5 Lagrange Interpolation

The Lagrange form of the interpolating polynomial expresses it as a sum of carefully chosen basis polynomials. It is elegant and theoretically important, even though Newton's form is often more efficient for computation.

**The Lagrange basis polynomials.** For each index \( i = 0, 1, \ldots, n \), define the **Lagrange basis polynomial** \( L_i(x) \) by:

$$
L_i(x) = \prod_{\substack{j=0 \\ j \neq i}}^{n} \frac{x - x_j}{x_i - x_j}
$$

This product runs over all indices \( j \) from \( 0 \) to \( n \), except \( j = i \). Written out for small cases:

$$
L_0(x) = \frac{(x - x_1)(x - x_2)\cdots(x - x_n)}{(x_0 - x_1)(x_0 - x_2)\cdots(x_0 - x_n)}
$$

$$
L_1(x) = \frac{(x - x_0)(x - x_2)\cdots(x - x_n)}{(x_1 - x_0)(x_1 - x_2)\cdots(x_1 - x_n)}
$$

**Key property.** The Lagrange basis polynomials satisfy the cardinal condition:

$$
L_i(x_j) = \begin{cases} 1 & \text{if } j = i \\ 0 & \text{if } j \neq i \end{cases}
$$

This property is exactly what makes them useful. At node \( x_i \), the basis polynomial \( L_i \) equals one. At every other node, it equals zero. This is sometimes expressed by saying that \( L_i \) "picks out" node \( i \).

**The Lagrange interpolating polynomial.** The interpolating polynomial is then assembled as:

$$
p_n(x) = \sum_{i=0}^{n} y_i L_i(x) = y_0 L_0(x) + y_1 L_1(x) + \cdots + y_n L_n(x)
$$

**Verification.** At any node \( x_k \), the sum becomes:

$$
p_n(x_k) = \sum_{i=0}^{n} y_i L_i(x_k) = y_k \cdot 1 + \sum_{i \neq k} y_i \cdot 0 = y_k
$$

The interpolant passes through every data point exactly.

---

**Example 4.2: Lagrange Interpolation Through Three Points**

**Problem.** Three data points are given:

$$
(1, 2), \quad (3, 8), \quad (5, 14)
$$

Construct the Lagrange interpolating polynomial and estimate the value at \( x = 2 \).

**Think.** Three data points determine a polynomial of degree at most 2. The Lagrange formula will produce a quadratic (or possibly simpler) polynomial.

**Method.** Identify the nodes and values, construct the three Lagrange basis polynomials, and assemble the interpolant.

**Compute.**

The nodes are \( x_0 = 1 \), \( x_1 = 3 \), \( x_2 = 5 \), with values \( y_0 = 2 \), \( y_1 = 8 \), \( y_2 = 14 \).

Construct \( L_0(x) \):

$$
L_0(x) = \frac{(x - 3)(x - 5)}{(1 - 3)(1 - 5)} = \frac{(x-3)(x-5)}{(-2)(-4)} = \frac{(x-3)(x-5)}{8}
$$

Construct \( L_1(x) \):

$$
L_1(x) = \frac{(x - 1)(x - 5)}{(3 - 1)(3 - 5)} = \frac{(x-1)(x-5)}{(2)(-2)} = \frac{(x-1)(x-5)}{-4}
$$

Construct \( L_2(x) \):

$$
L_2(x) = \frac{(x - 1)(x - 3)}{(5 - 1)(5 - 3)} = \frac{(x-1)(x-3)}{(4)(2)} = \frac{(x-1)(x-3)}{8}
$$

Assemble the interpolant:

$$
p_2(x) = 2 \cdot \frac{(x-3)(x-5)}{8} + 8 \cdot \frac{(x-1)(x-5)}{-4} + 14 \cdot \frac{(x-1)(x-3)}{8}
$$

Evaluate at \( x = 2 \):

$$
L_0(2) = \frac{(2-3)(2-5)}{8} = \frac{(-1)(-3)}{8} = \frac{3}{8}
$$

$$
L_1(2) = \frac{(2-1)(2-5)}{-4} = \frac{(1)(-3)}{-4} = \frac{3}{4}
$$

$$
L_2(2) = \frac{(2-1)(2-3)}{8} = \frac{(1)(-1)}{8} = \frac{-1}{8}
$$

$$
p_2(2) = 2 \cdot \frac{3}{8} + 8 \cdot \frac{3}{4} + 14 \cdot \frac{-1}{8}
= \frac{6}{8} + 6 + \frac{-14}{8}
= \frac{6 - 14}{8} + 6
= \frac{-8}{8} + 6
= -1 + 6 = 5
$$

**Check.** Notice that the three data points \( (1, 2), (3, 8), (5, 14) \) all lie on the line \( y = 3x - 1 \). Indeed, \( 3(2) - 1 = 5 \). The interpolating polynomial passes through three collinear points, so it reduces to a degree-1 polynomial, and the estimate is exact. This is a useful self-check: when data lies exactly on a line, the quadratic interpolant degenerates to the line.

**Interpret.** The estimated value at \( x = 2 \) is \( p_2(2) = 5 \).

---

> **Student Warning.** Constructing Lagrange basis polynomials by hand becomes tedious for large datasets. The Lagrange form is most useful for theoretical analysis and for situations with a small number of points. For practical computation with many nodes, Newton's divided difference form, introduced in the next section, is more efficient.

---

**Algorithm: Lagrange Interpolation**

```
Algorithm: Lagrange Interpolation
Purpose: Evaluate the interpolating polynomial at a given point x
Inputs:
  nodes x_0, x_1, ..., x_n (distinct)
  values y_0, y_1, ..., y_n
  evaluation point x
Steps:
  Set result = 0
  For each i from 0 to n:
    Set L_i = 1
    For each j from 0 to n:
      If j ≠ i:
        Set L_i = L_i * (x - x_j) / (x_i - x_j)
    Set result = result + y_i * L_i
Output: result (the interpolated value at x)
Reliability notes:
  Works for any number of distinct nodes.
  Numerical cancellation can occur when x is far from the nodes.
  Adding a new data point requires recomputing all basis polynomials.
```

---

## 4.6 Newton Divided Differences

Newton's divided difference method constructs the interpolating polynomial in a form that is efficient to compute and easy to update when new data points are added. It is the preferred method for hand calculations with more than two or three points, and it underpins many advanced numerical methods.

**Divided differences.** The key idea is to define quantities called **divided differences** that encode how the function values change as the nodes spread out.

The **zeroth-order divided difference** of \( f \) at a single node \( x_i \) is simply the function value:

$$
f[x_i] = y_i
$$

The **first-order divided difference** of \( f \) at two nodes \( x_i \) and \( x_{i+1} \) is the slope of the line through the two points:

$$
f[x_i, x_{i+1}] = \frac{f[x_{i+1}] - f[x_i]}{x_{i+1} - x_i}
$$

The **second-order divided difference** at three nodes \( x_i, x_{i+1}, x_{i+2} \) is:

$$
f[x_i, x_{i+1}, x_{i+2}] = \frac{f[x_{i+1}, x_{i+2}] - f[x_i, x_{i+1}]}{x_{i+2} - x_i}
$$

In general, the **\( k \)-th order divided difference** is defined recursively:

$$
f[x_i, x_{i+1}, \ldots, x_{i+k}] = \frac{f[x_{i+1}, \ldots, x_{i+k}] - f[x_i, \ldots, x_{i+k-1}]}{x_{i+k} - x_i}
$$

Each divided difference is the difference of two lower-order divided differences divided by the spread of the outer nodes.

**The divided difference table.** The computation is organized into a triangular table. The first column contains the nodes \( x_i \). The second column contains the zeroth-order divided differences \( f[x_i] = y_i \). The third column contains the first-order divided differences. The fourth column contains the second-order divided differences. Each entry in a column is computed from two adjacent entries in the preceding column.

**Newton's interpolating polynomial.** The interpolating polynomial is then written as:

$$
p_n(x) = f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \cdots
$$

$$
+ f[x_0, x_1, \ldots, x_n](x - x_0)(x - x_1)\cdots(x - x_{n-1})
$$

Written more compactly using the notation \( \omega_k(x) = (x - x_0)(x - x_1)\cdots(x - x_{k-1}) \) for \( k \geq 1 \) and \( \omega_0(x) = 1 \):

$$
p_n(x) = \sum_{k=0}^{n} f[x_0, x_1, \ldots, x_k] \cdot \omega_k(x)
$$

The coefficients of Newton's polynomial are the divided differences along the top row of the divided difference table. This form is called **Newton's forward divided difference interpolation** or simply Newton's interpolating polynomial.

---

**Example 4.3: Newton's Divided Differences**

**Problem.** Given the data:

| \( x \) | \( f(x) \) |
|---|---|
| 1.0 | 0.0 |
| 1.5 | 0.405 |
| 2.0 | 0.693 |
| 2.5 | 0.916 |

Construct Newton's interpolating polynomial and estimate \( f(1.8) \).

*(Note: These values are approximately those of \( \ln x \), rounded to three decimal places.)*

**Think.** Four data points will yield a polynomial of degree at most 3. Build the divided difference table, identify the top-row coefficients, write Newton's polynomial, and evaluate at \( x = 1.8 \).

**Method.** Construct the divided difference table systematically.

**Compute.**

**Step 1: First-order divided differences.**

$$
f[x_0, x_1] = \frac{0.405 - 0.000}{1.5 - 1.0} = \frac{0.405}{0.5} = 0.810
$$

$$
f[x_1, x_2] = \frac{0.693 - 0.405}{2.0 - 1.5} = \frac{0.288}{0.5} = 0.576
$$

$$
f[x_2, x_3] = \frac{0.916 - 0.693}{2.5 - 2.0} = \frac{0.223}{0.5} = 0.446
$$

**Step 2: Second-order divided differences.**

$$
f[x_0, x_1, x_2] = \frac{0.576 - 0.810}{2.0 - 1.0} = \frac{-0.234}{1.0} = -0.234
$$

$$
f[x_1, x_2, x_3] = \frac{0.446 - 0.576}{2.5 - 1.5} = \frac{-0.130}{1.0} = -0.130
$$

**Step 3: Third-order divided difference.**

$$
f[x_0, x_1, x_2, x_3] = \frac{-0.130 - (-0.234)}{2.5 - 1.0} = \frac{0.104}{1.5} \approx 0.0693
$$

**The divided difference table:**

| \( x_i \) | \( f[x_i] \) | 1st order | 2nd order | 3rd order |
|---|---|---|---|---|
| 1.0 | 0.000 | | | |
| 1.5 | 0.405 | 0.810 | | |
| 2.0 | 0.693 | 0.576 | −0.234 | |
| 2.5 | 0.916 | 0.446 | −0.130 | 0.0693 |

**Step 4: Coefficients.** The top-row coefficients read from left to right along the leading diagonal:

$$
c_0 = 0.000, \quad c_1 = 0.810, \quad c_2 = -0.234, \quad c_3 = 0.0693
$$

**Step 5: Newton's polynomial.**

$$
p_3(x) = 0.000 + 0.810(x - 1.0) - 0.234(x - 1.0)(x - 1.5) + 0.0693(x - 1.0)(x - 1.5)(x - 2.0)
$$

**Step 6: Evaluate at \( x = 1.8 \).**

$$
(1.8 - 1.0) = 0.8
$$
$$
(1.8 - 1.5) = 0.3
$$
$$
(1.8 - 2.0) = -0.2
$$

$$
p_3(1.8) = 0 + 0.810(0.8) - 0.234(0.8)(0.3) + 0.0693(0.8)(0.3)(-0.2)
$$

$$
= 0.648 - 0.05616 + 0.0693(-0.048)
$$

$$
= 0.648 - 0.05616 - 0.003326
$$

$$
\approx 0.5888
$$

**Check.** The true value of \( \ln(1.8) \approx 0.5878 \). The estimate 0.5888 differs by about 0.001, which is reasonable for a degree-3 interpolation with step size 0.5 in the nodes.

**Interpret.** Newton's interpolating polynomial estimates \( f(1.8) \approx 0.5888 \). The estimate is accurate to about 3 decimal places for this smooth function.

---

> **Reliability Note.** The divided difference computation can accumulate roundoff error, particularly in the higher-order differences when the function values are nearly equal. Students should retain sufficient decimal places throughout the table to avoid premature rounding.

---

**Algorithm: Newton's Divided Difference Interpolation**

```
Algorithm: Newton Divided Difference Interpolation
Purpose: Construct and evaluate the interpolating polynomial using divided differences
Inputs:
  nodes x_0, x_1, ..., x_n (distinct, in any order)
  values y_0, y_1, ..., y_n
  evaluation point x
Steps:
  Initialize divided difference table with column 0 = y_i values
  For order k from 1 to n:
    For i from 0 to n-k:
      dd[i][k] = (dd[i+1][k-1] - dd[i][k-1]) / (x_{i+k} - x_i)
  Extract coefficients: c_k = dd[0][k] for k = 0, 1, ..., n
  Evaluate Newton's polynomial at x:
    Set result = c_n
    For k from n-1 down to 0:
      result = result * (x - x_k) + c_k
Output: result (the interpolated value at x)
Reliability notes:
  Adding a new node x_{n+1} requires only one new column in the table.
  Horner's method (nested evaluation) reduces floating-point operations.
  Coefficients depend on node ordering; the polynomial does not.
```

---

## 4.7 Interpolation Error

Constructing an interpolating polynomial is only part of the problem. The other part is understanding how good the interpolant is. When the data comes from an underlying function \( f \), the interpolation error is the difference between the true function value and the polynomial's estimate.

**The interpolation error formula.** Suppose \( f \) is a function with \( n+1 \) continuous derivatives on an interval \( [a, b] \) containing all the nodes. The error in the interpolating polynomial \( p_n \) at any point \( x \in [a, b] \) is:

$$
f(x) - p_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \cdot (x - x_0)(x - x_1)\cdots(x - x_n)
$$

where \( \xi \) is some point in the open interval containing \( x \) and all the nodes. The point \( \xi \) depends on \( x \) and is not generally known.

This formula resembles the Taylor remainder. The key features are:

- The error involves \( f^{(n+1)} \), the derivative of order \( n+1 \) of the true function. If the function has a large \( (n+1) \)-th derivative, the error can be large even with many interpolation points.
- The error involves the product \( \omega(x) = (x - x_0)(x - x_1)\cdots(x - x_n) \), which depends on how far \( x \) is from the nodes and how the nodes are distributed.
- The error is zero at each node \( x_i \), because the product \( \omega(x_i) = 0 \). This confirms that the interpolant passes exactly through the data.

**Using the error formula in practice.** Since \( \xi \) is unknown, the error formula is used to produce an upper bound. Students identify the maximum of \( |f^{(n+1)}(x)| \) over the interval, and bound \( |\omega(x)| \) over the interval, to obtain:

$$
|f(x) - p_n(x)| \leq \frac{\max_\xi |f^{(n+1)}(\xi)|}{(n+1)!} \cdot \max_x |\omega(x)|
$$

This bound provides a theoretical guarantee on the worst-case error.

---

**Example 4.4: Bounding the Interpolation Error**

**Problem.** Suppose \( f(x) = \sin x \) is interpolated by a polynomial at four equally spaced nodes over \( [0, \pi] \). Bound the maximum interpolation error over \( [0, \pi] \).

**Think.** Four nodes yield a polynomial of degree at most 3. The error formula involves the fourth derivative \( f^{(4)}(x) = \sin x \), so the maximum of its absolute value over \( [0, \pi] \) is 1.

**Method.** Apply the interpolation error bound. The nodes are equally spaced with step \( h = \pi/3 \).

**Compute.** For equally spaced nodes over \( [0, \pi] \) with \( n+1 = 4 \) nodes, it can be shown that the maximum of \( |\omega(x)|  \) over the interval is bounded approximately by:

$$
\max_x |\omega(x)| \leq \frac{n!}{4} h^{n+1} = \frac{3!}{4} \left(\frac{\pi}{3}\right)^4 \approx \frac{6}{4} \cdot \frac{97.4}{81} \approx 1.80
$$

(This bound uses a standard result for equally spaced nodes; the details belong to a numerical analysis course.)

The error bound is:

$$
|f(x) - p_3(x)| \leq \frac{1}{4!} \cdot 1.80 = \frac{1.80}{24} \approx 0.075
$$

**Check.** Actual computation shows the maximum error is approximately 0.05, which is below the bound of 0.075. The bound is valid but not tight.

**Interpret.** Over the interval \( [0, \pi] \), the cubic interpolating polynomial for \( \sin x \) with four equally spaced nodes has an error of at most about 0.075. Using more nodes or better-placed nodes would reduce this error.

---

> **Student Warning.** The interpolation error formula requires knowledge of \( f^{(n+1)} \). When the underlying function \( f \) is unknown (as is typically the case with real measurement data), this bound cannot be computed directly. Practitioners must then rely on other strategies, such as comparing interpolants of different degrees or checking whether adding more nodes changes the result significantly.

---

## 4.8 Choosing Interpolation Points

The placement of interpolation nodes has a profound effect on the accuracy of the interpolant. This is not immediately obvious: one might expect that more nodes always give a better interpolant, regardless of where they are placed. Experience and theory both show this expectation is wrong.

**Equally spaced nodes.** The most natural choice is to space the nodes uniformly across an interval. If the interval is \( [a, b] \) and there are \( n+1 \) nodes, equally spaced nodes are:

$$
x_i = a + i \cdot \frac{b-a}{n}, \quad i = 0, 1, \ldots, n
$$

Equally spaced nodes are convenient to work with, but they have a serious drawback: for large \( n \), the interpolating polynomial may oscillate wildly near the endpoints of the interval even when the underlying function is smooth. This is Runge's phenomenon, discussed in the next section.

**Chebyshev nodes.** A better distribution of nodes for polynomial interpolation over \( [a, b] \) is given by the **Chebyshev nodes**. These are the projections onto the interval \( [a, b] \) of equally spaced points on the upper half of a circle. For \( n+1 \) nodes on \( [-1, 1] \), the Chebyshev nodes are:

$$
x_i = \cos\left(\frac{(2i+1)\pi}{2(n+1)}\right), \quad i = 0, 1, \ldots, n
$$

These nodes are more densely clustered near the endpoints than near the center of the interval. This clustering counteracts the tendency of high-degree polynomials to oscillate at the edges.

Chebyshev nodes minimize the maximum of \( |\omega(x)| \) over \( [-1, 1] \), which minimizes the theoretical worst-case interpolation error. For smooth functions, using Chebyshev nodes instead of equally spaced nodes can dramatically improve interpolation accuracy at high degree.

**General principle.** When students have the freedom to choose where to evaluate a function (for example, when constructing a polynomial approximation to a known formula), they should prefer Chebyshev nodes over equally spaced nodes. When the nodes are determined by external factors (measurement locations, sensor positions, table spacing), students have no choice, and they should be alert to the risk that the interpolant may behave poorly far from the dense parts of the data.

---

## 4.9 Runge's Phenomenon as an Introduction

Runge's phenomenon is one of the most instructive surprises in numerical analysis. It demonstrates that using a higher-degree interpolating polynomial does not always mean greater accuracy.

**The setup.** In 1901, the German mathematician Carl Runge studied polynomial interpolation of the function:

$$
f(x) = \frac{1}{1 + 25x^2}
$$

over the interval \( [-1, 1] \) using equally spaced nodes. He found that as the number of nodes increased, the interpolating polynomial became increasingly accurate near the center of the interval but oscillated violently near the endpoints, with errors growing rapidly rather than decreasing.

**The effect in practice.** For a small number of equally spaced nodes, the interpolating polynomial provides a reasonable approximation everywhere. As the number of nodes increases past a threshold, the polynomial begins to show large oscillations near \( x = \pm 1 \). The maximum error over \( [-1, 1] \) actually increases as \( n \to \infty \), even though the underlying function \( f \) is smooth and even analytic on \( [-1, 1] \).

This behavior is Runge's phenomenon.

**Why it happens.** The error formula involves the product \( \omega(x) = (x - x_0)(x - x_1)\cdots(x - x_n) \). For equally spaced nodes, this product grows very large near the endpoints, amplifying any errors in the interpolant there. The derivatives \( f^{(n+1)}(x) \) also grow rapidly for Runge's function, compounding the effect.

**The remedy.** Using Chebyshev nodes instead of equally spaced nodes controls the growth of \( |\omega(x)| \) near the endpoints. With Chebyshev nodes, the interpolating polynomial for Runge's function converges uniformly to the true function as \( n \to \infty \).

**What students should remember.** High-degree polynomial interpolation over equally spaced nodes is not always better. When large numbers of nodes are required, piecewise interpolation (discussed in the next section) or Chebyshev-spaced nodes are safer choices. Students should always examine the behavior of the interpolant over the entire interval, not just at the nodes.

**Diagram instruction.** Draw two graphs of \( f(x) = 1/(1+25x^2) \) over \( [-1, 1] \). In the first graph, overlay an interpolating polynomial using 5 equally spaced nodes; the polynomial should fit reasonably well. In the second graph, overlay an interpolating polynomial using 11 equally spaced nodes; the polynomial should match near the center but show pronounced oscillations near \( x = \pm 1 \), with the oscillations reaching far above and below the true function. Label the oscillations as Runge's phenomenon.

---

> **Student Warning.** Runge's phenomenon is not a pathological curiosity affecting only one unusual function. It is a real risk in any application that uses high-degree polynomial interpolation over equally spaced nodes on a large interval. Engineers, scientists, and analysts who use interpolation routinely must be aware of it.

---

## 4.10 Piecewise Interpolation

The remedy for Runge's phenomenon that is most widely used in practice is **piecewise interpolation**: instead of fitting one high-degree polynomial to all the data, fit a sequence of low-degree polynomials, each defined on a small subinterval between consecutive nodes.

**Piecewise linear interpolation.** The simplest piecewise interpolant connects each pair of consecutive data points with a straight line. On the subinterval \( [x_i, x_{i+1}] \), the interpolant is:

$$
p(x) = y_i + \frac{y_{i+1} - y_i}{x_{i+1} - x_i}(x - x_i), \quad x_i \leq x \leq x_{i+1}
$$

This produces a continuous but generally not smooth function: the piecewise linear interpolant has corners at each interior node where two line segments meet. The first derivative is typically discontinuous at the nodes.

**Advantages of piecewise interpolation.**

- Piecewise interpolants do not suffer from Runge's phenomenon. Each piece uses only a small number of points from a local region, so there is no tendency to oscillate far from the data.
- Adding a new data point affects only the pieces adjacent to the new node, not the entire interpolant.
- The method works well even when the data is unevenly spaced.
- Low-degree pieces are easy to evaluate, differentiate, and integrate.

**The tradeoff.** The cost of piecewise interpolation is that the interpolant is typically not smooth at the interior nodes. A piecewise linear interpolant is continuous but has corners. For applications that require a smooth interpolant (one with a continuous first or second derivative), piecewise linear interpolation is insufficient. The solution — piecewise cubic splines — is developed in Chapter 5.

**Error in piecewise linear interpolation.** On each subinterval \( [x_i, x_{i+1}] \) of width \( h = x_{i+1} - x_i \), the error in piecewise linear interpolation is bounded by:

$$
|f(x) - p(x)| \leq \frac{h^2}{8} \max_{x_i \leq t \leq x_{i+1}} |f''(t)|
$$

This bound decreases as \( h^2 \): halving the subinterval width reduces the maximum error by a factor of 4. This is a desirable convergence property that high-degree global polynomials do not guarantee for all smooth functions over large intervals.

---

**Example 4.5: Piecewise Linear Interpolation**

**Problem.** A function is sampled at the following equally spaced nodes:

| \( x \) | \( f(x) \) |
|---|---|
| 0.0 | 1.000 |
| 0.5 | 0.878 |
| 1.0 | 0.540 |
| 1.5 | 0.071 |
| 2.0 | −0.416 |

*(These are approximately values of \( \cos x \).)*

Use piecewise linear interpolation to estimate \( f(0.75) \) and \( f(1.25) \).

**Think.** For \( x = 0.75 \), the relevant subinterval is \( [0.5, 1.0] \). For \( x = 1.25 \), the relevant subinterval is \( [1.0, 1.5] \).

**Method.** Apply the linear interpolation formula on each subinterval.

**Compute.**

For \( f(0.75) \): nodes \( x_i = 0.5 \), \( x_{i+1} = 1.0 \), values \( 0.878 \) and \( 0.540 \):

$$
p(0.75) = 0.878 + \frac{0.540 - 0.878}{1.0 - 0.5}(0.75 - 0.5)
= 0.878 + \frac{-0.338}{0.5}(0.25)
= 0.878 - 0.169 = 0.709
$$

For \( f(1.25) \): nodes \( x_i = 1.0 \), \( x_{i+1} = 1.5 \), values \( 0.540 \) and \( 0.071 \):

$$
p(1.25) = 0.540 + \frac{0.071 - 0.540}{1.5 - 1.0}(1.25 - 1.0)
= 0.540 + \frac{-0.469}{0.5}(0.25)
= 0.540 - 0.2345 = 0.3055
$$

**Check.** The true values are \( \cos(0.75) \approx 0.7317 \) and \( \cos(1.25) \approx 0.3153 \). The errors are approximately \( 0.023 \) and \( 0.010 \) respectively, which are small given the step size of 0.5. The estimate at 0.75 is slightly less accurate because \( \cos x \) curves more there.

**Interpret.** Piecewise linear interpolation gives \( f(0.75) \approx 0.709 \) and \( f(1.25) \approx 0.306 \), accurate to about 2 decimal places with equally spaced nodes of width 0.5.

---

## 4.11 Interpolation in Tables, Sensors, and Engineering Data

The abstract theory of this chapter connects directly to practical applications across many fields.

**Mathematical tables.** Before electronic computation, mathematical tables were the primary way practitioners accessed function values. Books of sine, logarithm, exponential, and Bessel function tables listed values at discrete arguments. To find a value at an argument between table entries, the reader applied linear or higher-order interpolation. Even today, interpolation from tables remains important in engineering handbooks, thermodynamic property tables, material property databases, and meteorological data.

**Sensor data and instrumentation.** Engineering systems record physical quantities (temperature, pressure, flow rate, displacement, voltage) at discrete sample times or locations. Between samples, the continuous quantity must be estimated. Piecewise linear interpolation provides the simplest reconstruction; more sophisticated methods like cubic splines (Chapter 5) provide smoother reconstructions suitable for applications where derivative information matters.

**Geographic information systems.** Elevation models, climate maps, and oceanographic charts represent continuously varying quantities (altitude, temperature, salinity) at discrete measurement points. Interpolation fills in values between measurement stations, creating the smooth spatial fields shown in maps and visualizations.

**Computer graphics and animation.** Motion paths for animated characters, camera trajectories, and object deformations are defined by key frames at discrete time steps. Interpolation — typically cubic spline interpolation — constructs smooth continuous motion between the key frames.

**Signal reconstruction.** Digital audio and video store signals as discrete samples. Playback requires reconstructing a continuous signal from those samples. Interpolation is at the heart of this reconstruction, and the choice of interpolation method significantly affects the quality of the result.

**Scientific computing.** Finite element and finite difference solvers compute solutions at mesh points. Post-processing and visualization require interpolating those solutions to denser grids or to arbitrary evaluation points. Many solver packages use built-in interpolation routines derived from the theory of this chapter.

---

## 4.12 When Interpolation Is Unsafe

Despite its broad applicability, polynomial interpolation can produce dangerously misleading results in several situations. Students should develop the habit of checking whether interpolation is appropriate before trusting an interpolated value.

**Extrapolation.** As mentioned in Section 4.1, interpolation gives reliable estimates only when the evaluation point lies within the range of the nodes. Outside that range, the polynomial may diverge from the underlying function rapidly. The further from the nodes, the less reliable the estimate. Students should avoid extrapolation with polynomial interpolants, or treat extrapolated values with explicit skepticism and stated uncertainty.

**Highly oscillatory or discontinuous underlying functions.** If the underlying function oscillates rapidly (high frequency), polynomial interpolation may completely miss those oscillations between the nodes. If the function has a jump discontinuity between two nodes, the interpolant will try to bridge the discontinuity smoothly and will be wildly inaccurate near it. Polynomial interpolation is appropriate only for smooth underlying functions.

**Too few nodes relative to variation.** If the function varies significantly over the interpolation interval but the nodes are widely spaced, the interpolant may not capture the variation. Practitioners should ask whether the sampling density is adequate for the variation they expect.

**Runge's phenomenon in high-degree global interpolation.** As discussed in Section 4.9, high-degree polynomial interpolation over equally spaced nodes on a large interval may produce oscillatory interpolants that are far less accurate than lower-degree piecewise interpolants. Students should not assume that adding more nodes to a global polynomial interpolant will always reduce error.

**Noisy data.** When the data values contain measurement error or noise, an interpolant that passes exactly through all data points will fit the noise as well as the signal. In this case, approximation methods such as least squares (Chapter 5) are more appropriate than exact interpolation.

**Multivariate interpolation.** This chapter considers only one-dimensional interpolation. Interpolation in two or more dimensions introduces additional complexities that require careful treatment and are not fully addressed here.

---

## 4.13 Common Interpolation Mistakes

Students learning interpolation encounter several recurring misunderstandings. Each is worth examining carefully before proceeding to Chapter 5.

**Mistake 1: Confusing interpolation with extrapolation.**
Interpolation estimates function values between known data points. Extrapolation estimates beyond them. Polynomial interpolants may diverge rapidly outside the range of the nodes, making extrapolation unreliable. Students should always check that the evaluation point lies inside the range of the nodes before reporting an interpolated value without qualification.

**Mistake 2: Assuming more nodes always means more accuracy.**
This is the lesson of Runge's phenomenon. For global polynomial interpolation over equally spaced nodes, adding more nodes can make the interpolant worse, not better, near the endpoints. Accuracy improves reliably only when the function is smooth, the nodes are well-placed (such as Chebyshev nodes), and the degree is not excessive.

**Mistake 3: Believing the interpolant passes through points between the nodes exactly.**
The interpolating polynomial passes exactly through the given data points. It does not pass through the true function values at other points. Between the nodes, the interpolant is an approximation, not an exact reconstruction.

**Mistake 4: Omitting the error analysis.**
Students sometimes construct an interpolating polynomial and report the interpolated value without considering the error. The interpolation error formula provides an essential check on how much the polynomial value may differ from the true function value. Error analysis is not optional; it is part of responsible numerical practice.

**Mistake 5: Confusing the Lagrange and Newton forms.**
The Lagrange formula and Newton's divided difference formula produce the same polynomial. They are two representations of one object, not two different approximations. If the computation is correct, both forms will give the same interpolated value at any evaluation point.

**Mistake 6: Using interpolation for noisy data.**
Exact interpolation through noisy data fits the noise, not the signal. When data values contain measurement error, students should use least-squares approximation rather than interpolation.

---

## 4.14 Preparing for Splines and Least Squares

Chapter 4 has developed the theory and practice of exact polynomial interpolation: given data points, construct a polynomial that passes exactly through all of them.

Chapter 5 extends these ideas in two directions.

The first direction is **piecewise polynomial interpolation with smooth joints**, known as spline interpolation. A piecewise linear interpolant from this chapter is continuous but has corners at the interior nodes. A cubic spline goes further: it is a piecewise cubic polynomial that is not only continuous but also has a continuous first and second derivative everywhere, including at the interior nodes. Cubic splines produce smooth curves that feel natural to the eye and behave well for numerical differentiation and integration. They are among the most widely used interpolants in practice.

The second direction is **least-squares curve fitting**. When the data contains noise or measurement error, exact interpolation is counterproductive: the polynomial passes exactly through the noise rather than approximating the underlying signal. Least-squares fitting constructs an approximating function that minimizes the total squared error between the function and the data, rather than requiring the function to pass through every data point exactly. This approach is more appropriate for noisy or redundant data.

Together, splines and least squares represent the two main practical alternatives to exact polynomial interpolation, and they address the two most common reasons exact interpolation is insufficient: sharp corners at the nodes, and noisy data.

---

## Chapter Summary

Interpolation is the construction of a function that passes through a given set of data points and is used to estimate function values between those points. The central result of polynomial interpolation is that for \( n+1 \) distinct nodes, there exists exactly one polynomial of degree at most \( n \) passing through all \( n+1 \) data points.

Linear interpolation connects two data points with a straight line. The Lagrange formula expresses the interpolating polynomial as a sum of basis polynomials, each equal to one at one node and zero at all others. Newton's divided difference formula constructs the same polynomial in a computationally efficient way using a triangular table of divided differences.

The interpolation error formula provides a bound on how far the interpolating polynomial may lie from the true function. The error depends on how large the function's higher derivatives are and on how the nodes are distributed.

Equally spaced nodes are convenient but may lead to Runge's phenomenon: as the degree increases, the polynomial oscillates wildly near the endpoints even for smooth functions. Chebyshev nodes, clustered near the endpoints, avoid this problem for global polynomial interpolation. Piecewise interpolation avoids Runge's phenomenon by using low-degree polynomials on small subintervals; its error decreases reliably as the subinterval width decreases.

Interpolation is unsafe when the evaluation point lies outside the range of the nodes (extrapolation), when the underlying function is not smooth, when the data is noisy, or when the degree is too high relative to the function's behavior. Chapter 5 addresses the two main practical improvements: smooth splines that eliminate corners, and least-squares fitting for noisy data.

---

## Key Terms Review

**interpolation** — the process of estimating function values between known data points by constructing a function passing through those points.

**interpolation node** — one of the input values \( x_i \) at which the function is known.

**linear interpolation** — interpolation using a line through two data points.

**Lagrange basis polynomial** — a polynomial \( L_i(x) \) that equals 1 at node \( x_i \) and 0 at all other nodes.

**Lagrange interpolating polynomial** — the unique interpolating polynomial expressed as \( p_n(x) = \sum_i y_i L_i(x) \).

**divided difference** — a recursive measure of the rate of change of a function over a set of nodes, used to build Newton's interpolating polynomial.

**Newton's interpolating polynomial** — the interpolating polynomial expressed using divided differences, in a form efficient for computation and easy to update.

**interpolation error** — the difference between the true function value and the interpolated polynomial value.

**Runge's phenomenon** — the oscillation of high-degree polynomial interpolants near the endpoints of an interval when equally spaced nodes are used.

**Chebyshev nodes** — interpolation nodes clustered near the endpoints of an interval, designed to minimize the worst-case interpolation error.

**piecewise interpolation** — interpolation using a different low-degree polynomial on each subinterval between consecutive nodes.

**extrapolation** — estimation outside the range of the interpolation nodes; generally unreliable.

---

## Concept Review Questions

1. What is the difference between interpolation and extrapolation? Why is extrapolation less reliable?

2. State the existence and uniqueness result for polynomial interpolation. What conditions are required on the nodes?

3. Explain in words what the Lagrange basis polynomial \( L_i(x) \) does. What is its value at node \( x_i \)? What is its value at any other node?

4. What is a divided difference? How is a second-order divided difference computed from first-order divided differences?

5. What does the interpolation error formula tell a student? What information is needed to apply it?

6. Explain Runge's phenomenon in your own words. What causes it, and how can it be avoided?

7. What is the advantage of using Chebyshev nodes instead of equally spaced nodes for polynomial interpolation?

8. Compare global polynomial interpolation with piecewise linear interpolation. What does piecewise interpolation gain? What does it lose?

9. In what situations is polynomial interpolation unsafe or unreliable?

10. Why is interpolation inappropriate for noisy data? What should be used instead?

---

## Skill Practice

**4.1.** Two data points are given: \( (2, 5) \) and \( (6, 13) \). Use linear interpolation to estimate the function value at \( x = 4 \).

**4.2.** Three data points are \( (0, 1) \), \( (1, 2) \), \( (3, 10) \). Construct the Lagrange interpolating polynomial \( p_2(x) \).

**4.3.** Four data points are \( (0, 1) \), \( (1, e) \), \( (2, e^2) \), \( (3, e^3) \) (using \( e \approx 2.718 \)). Construct the divided difference table.

**4.4.** Using the divided difference table from Problem 4.3, write Newton's interpolating polynomial and evaluate it at \( x = 1.5 \).

**4.5.** Verify that the Lagrange basis polynomials for three nodes \( x_0, x_1, x_2 \) satisfy \( L_0(x_0) = 1 \), \( L_0(x_1) = 0 \), and \( L_0(x_2) = 0 \).

**4.6.** Suppose a function is interpolated by a polynomial at four equally spaced nodes on \( [0, 1] \). If \( |f^{(4)}(x)| \leq 5 \) on \( [0, 1] \), bound the interpolation error.

**4.7.** Apply piecewise linear interpolation using the data:

| \( x \) | \( f(x) \) |
|---|---|
| 0 | 0 |
| 1 | 1 |
| 4 | 2 |
| 9 | 3 |

Estimate \( f(2) \) and \( f(6) \).

**4.8.** Four nodes are equally spaced on \( [-1, 1] \). Describe qualitatively how the interpolating polynomial for \( f(x) = 1/(1+25x^2) \) would behave near \( x = \pm 1 \) compared to near \( x = 0 \). What is this called?

---

## Algorithm Practice

**4.9.** Apply the Lagrange interpolation algorithm by hand to estimate \( f(2.5) \) using the data \( (1, 0) \), \( (2, 0.693) \), \( (3, 1.099) \). Show all intermediate values of the basis polynomials \( L_0, L_1, L_2 \) at \( x = 2.5 \).

**4.10.** Build the divided difference table for the data \( (0, 0) \), \( (1, 1) \), \( (2, 8) \), \( (3, 27) \). What pattern do the entries in the third-order column suggest about the underlying function?

**4.11.** Write out the steps of Newton's interpolation algorithm in full for the data \( (1, 2) \), \( (2, 3) \), \( (4, 5) \). Evaluate the polynomial at \( x = 3 \).

**4.12.** Verify that Newton's interpolating polynomial and the Lagrange interpolating polynomial produce the same result at \( x = 2.5 \) for the data \( (1, 1) \), \( (2, 4) \), \( (3, 9) \).

---

## Computational Interpretation

**4.13.** A student constructs a degree-5 interpolating polynomial through six data points and finds that the polynomial oscillates between values of \( -50 \) and \( +60 \) near the right endpoint, while the data values are all between 0 and 10. What is likely happening? What should the student do?

**4.14.** A table of values of \( \sqrt{x} \) is given at \( x = 1, 4, 9, 16, 25 \). Explain why the spacing of these nodes is not uniform. Does this affect the validity of polynomial interpolation? Does it affect the divided difference construction?

**4.15.** Two engineers use the same data to construct interpolants: Engineer A uses a single degree-8 polynomial with equally spaced nodes; Engineer B uses piecewise linear interpolation with the same 9 nodes. In what situations would Engineer A's approach be more accurate? In what situations would Engineer B's approach be more reliable?

**4.16.** A student evaluates an interpolating polynomial at a point 20% beyond the range of the nodes and reports the result confidently. What is the mathematical term for this estimation, and what caution should the student express about the reliability of the result?

---

## Applications

**4.17.** *(Engineering.)* A structural engineer records the displacement of a beam at five points along its length:

| Position (m) | Displacement (mm) |
|---|---|
| 0.0 | 0.00 |
| 0.5 | 2.34 |
| 1.0 | 4.12 |
| 1.5 | 3.87 |
| 2.0 | 0.00 |

Use piecewise linear interpolation to estimate the displacement at \( x = 0.75 \) m and at \( x = 1.25 \) m.

**4.18.** *(Physics.)* A physics experiment records the pressure of a gas at several temperatures:

| Temperature (K) | Pressure (kPa) |
|---|---|
| 200 | 120 |
| 250 | 150 |
| 300 | 180 |
| 350 | 210 |

Apply Newton's divided differences to estimate the pressure at 275 K. What degree polynomial does the divided difference table suggest the data follows?

**4.19.** *(Finance.)* The closing price of a stock is recorded on five trading days:

| Day | Price (USD) |
|---|---|
| 1 | 102.50 |
| 3 | 104.20 |
| 5 | 101.80 |
| 7 | 106.50 |
| 9 | 108.00 |

Use linear interpolation to estimate the price on Day 4. Explain why polynomial interpolation of stock prices carries significant uncertainty regardless of the method used.

**4.20.** *(Computer graphics.)* An animation studio defines a camera path by five key-frame positions at times \( t = 0, 1, 2, 3, 4 \) seconds. The horizontal coordinate values are 10, 14, 20, 18, 22. Apply Lagrange interpolation to estimate the camera position at \( t = 2.5 \) seconds. What concern about interpolation should the studio's technical team keep in mind?

---

## Error Analysis

**4.21.** Suppose \( f(x) = e^x \) is interpolated using two nodes \( x_0 = 0 \) and \( x_1 = 1 \). Write the interpolation error formula for this linear interpolant. Bound the maximum error on \( [0, 1] \).

**4.22.** For the data in Example 4.3, the true function was \( f(x) = \ln x \). The estimate at \( x = 1.8 \) was 0.5888, while the true value is approximately 0.5878. Calculate the absolute and relative errors.

**4.23.** A student uses a degree-3 polynomial to interpolate a function on \( [0, 4] \) with four equally spaced nodes. The student estimates that \( |f^{(4)}(x)| \leq 24 \) on \( [0, 4] \). Bound the maximum interpolation error on \( [0, 4] \).

**4.24.** Piecewise linear interpolation is applied to a function on \( [0, 1] \) with ten equally spaced subintervals. If \( |f''(x)| \leq 4 \) on \( [0, 1] \), bound the maximum error in the piecewise linear interpolant. If twenty subintervals are used instead, how does the error bound change?

---

## Chapter 4 Checkpoint

The following problems integrate the key ideas of this chapter.

**C4.1.** A function is known at the points \( (0, 1) \), \( (1, 3) \), \( (2, 7) \), \( (3, 13) \).

(a) Build the divided difference table for this data.

(b) Write Newton's interpolating polynomial.

(c) Evaluate the polynomial at \( x = 1.5 \) and \( x = 2.5 \).

(d) What degree does the interpolating polynomial actually have? What pattern in the divided differences reveals this?

(e) Identify the underlying function suggested by the data.

**C4.2.** A bridge deck is measured at six equally spaced points. The measured deflections are 0.0, 1.2, 2.8, 3.5, 2.9, 1.3 mm at positions 0, 1, 2, 3, 4, 5 m.

(a) Use piecewise linear interpolation to estimate the deflection at 2.5 m.

(b) Explain why a structural engineer might prefer piecewise cubic spline interpolation over piecewise linear interpolation for this problem.

(c) Explain why exact polynomial interpolation through all six nodes might be problematic.

**C4.3.** Explain in a written paragraph why Runge's phenomenon occurs, what its practical consequences are, and what strategies a numerical analyst can use to avoid it. Your explanation should be clear enough for a classmate who has completed this chapter but not yet studied numerical analysis beyond this course.

**C4.4.** A climate scientist has temperature data at ten irregularly spaced weather stations across a valley. She wants to estimate the temperature at five additional unmeasured locations.

(a) Describe the interpolation strategy she should use. Should she use one global polynomial? Piecewise linear interpolation? Explain her reasoning.

(b) What assumptions about the temperature field must hold for her interpolated estimates to be meaningful?

(c) What would she need to do differently if the stations recorded data with significant measurement noise?

---

## Methods Reference

**Linear Interpolation**

$$
p_1(x) = y_0 + \frac{y_1 - y_0}{x_1 - x_0}(x - x_0)
$$

**Lagrange Interpolating Polynomial**

$$
p_n(x) = \sum_{i=0}^{n} y_i L_i(x), \quad L_i(x) = \prod_{j \neq i} \frac{x - x_j}{x_i - x_j}
$$

**Newton's Interpolating Polynomial**

$$
p_n(x) = f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x-x_0)(x-x_1) + \cdots
$$

**Divided Difference (recursive)**

$$
f[x_i, \ldots, x_{i+k}] = \frac{f[x_{i+1}, \ldots, x_{i+k}] - f[x_i, \ldots, x_{i+k-1}]}{x_{i+k} - x_i}
$$

**Interpolation Error**

$$
f(x) - p_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)(x-x_1)\cdots(x-x_n)
$$

**Piecewise Linear Error Bound (on each subinterval of width \( h \))**

$$
|f(x) - p(x)| \leq \frac{h^2}{8}\max|f''|
$$

---

## Bridge Note

The polynomial interpolation developed in this chapter is the gateway to most of the remaining numerical methods in this textbook.

In Chapter 5, piecewise polynomial interpolation is extended to cubic splines, which add smoothness conditions at the joints between pieces. Least-squares fitting replaces exact interpolation for noisy data, using the same polynomial building blocks but optimizing a different objective.

In Chapter 6, numerical differentiation formulas are derived by differentiating interpolating polynomials. The same divided differences that build Newton's polynomial are used to construct finite difference approximations to derivatives.

In Chapter 7, numerical integration rules — including the trapezoidal rule and Simpson's rule — are derived by integrating interpolating polynomials over subintervals.

In Chapter 8, Taylor polynomials appear as special interpolating polynomials whose nodes coalesce to a single point, producing local approximations rather than global fits.

Beyond this textbook, polynomial interpolation is foundational to spectral methods in scientific computing, finite element analysis, Gaussian quadrature, collocation methods for differential equations, signal processing, computer graphics, and the construction of the mathematical function libraries that underlie every calculator, computer, and scientific instrument. The ideas of this chapter are not preliminary material; they are the substance of numerical mathematics.

---

> **MGU Library Connection.** For additional practice with Lagrange interpolation and divided difference tables, see the *MGU Numerical Methods Formula Reference* and the *Algorithm Reference: Polynomial Interpolation*. Students who have completed the Linear Algebra track may find it instructive to revisit interpolation through the lens of the Vandermonde system, in which polynomial interpolation is recast as a linear algebra problem. That connection is developed in the *MGU Linear Algebra and Applications* companion chapter. Students preparing for scientific computing courses will benefit from examining how interpolation is implemented in libraries such as SciPy (Python) or MATLAB's `interp1` function, which use the piecewise and spline methods developed in Chapter 5.

---

*End of Chapter 4*
