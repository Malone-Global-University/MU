# Numerical Methods
## MGU Mathematics Series — Library Textbook Edition

---

# Part II — Roots, Interpolation, and Approximation of Functions

---

# Chapter 5: Splines, Curve Fitting, and Least Squares

---

## Purpose

Chapter 4 introduced interpolation as the construction of a polynomial that passes exactly through a given set of data points. That approach works well in many situations, but it carries hidden risks: a high-degree polynomial may oscillate wildly between data points, the model may be sensitive to small changes in the data, and when data contain measurement noise, forcing a curve to pass through every point exactly is not modeling at all — it is memorizing noise.

This chapter extends the idea of approximation beyond exact interpolation. Students will study two major families of methods: **splines**, which join low-degree polynomial pieces smoothly across intervals, and **least squares fitting**, which finds a curve that passes close to data without passing through every point exactly. Both approaches reflect a mature understanding of what approximation means: not perfect agreement with every datum, but a smooth, reliable, interpretable model that captures the structure of the data.

By the end of this chapter, students should understand splines as piecewise polynomial models designed to be smooth and well-behaved, understand least squares as a principled way to balance fit and simplicity, distinguish between interpolation and approximation as different answers to different questions, and recognize overfitting and underfitting as the two failure modes of curve fitting.

---

## Opening Question

A structural engineer measures the deflection of a bridge beam at five equally spaced points along its length. She obtains the values:

| Position (m) | Deflection (mm) |
|:---:|:---:|
| 0 | 0.00 |
| 1 | 2.31 |
| 2 | 3.84 |
| 3 | 3.15 |
| 4 | 0.00 |

She needs a smooth curve that describes how the beam deflects at every point between the measurements — not just at the five measured locations. She also needs confidence that the curve will not produce wild oscillations between her measurements, since the beam's deflection is physically smooth.

Should she use the degree-4 interpolating polynomial that passes through all five points exactly? Or should she use a different kind of model?

This chapter answers that question — and along the way develops the mathematical ideas that make modern curve fitting and data modeling possible.

---

## Why This Chapter Matters

Exact polynomial interpolation has real limitations. When data are noisy, a curve that fits every measurement exactly will not smooth out the noise — it will reproduce it. When many data points are needed across a long interval, the interpolating polynomial must be of very high degree, and high-degree polynomials are prone to oscillation.

Real-world data modeling therefore requires two important generalizations:

- **Splines** join low-degree polynomial pieces smoothly, avoiding the oscillation problems of high-degree global polynomials while still producing smooth curves that pass through the data points.

- **Least squares fitting** finds a curve that minimizes total error across all data points rather than eliminating error at each data point. This approach is designed for noisy data and for modeling relationships rather than perfectly reproducing measurements.

These ideas appear everywhere in modern science and engineering. Computer graphics uses splines to produce smooth curves and surfaces. Statistics uses least squares regression to identify trends in data. Signal processing, machine learning, structural analysis, financial modeling, and experimental physics all depend on some form of the ideas developed in this chapter.

---

## Learning Objectives

After completing Chapter 5, students should be able to:

1. Explain why exact polynomial interpolation is not always the best approximation method.
2. Construct and evaluate linear splines from given data.
3. Describe the properties that quadratic and cubic splines are designed to achieve.
4. Define residuals and explain what they measure.
5. State the least squares criterion and explain its mathematical meaning.
6. Set up and solve a linear least squares problem for a line or low-degree polynomial.
7. Interpret the normal equations as the system that minimizes the sum of squared residuals.
8. Distinguish between overfitting and underfitting and explain the tradeoffs involved.
9. Identify common mistakes in curve fitting and explain how to avoid them.
10. Apply the problem-solving method — Understand, Model, Choose Method, Compute, Estimate Error, Check, Explain — to spline and least squares problems.

---

## Key Terms

**spline** — a piecewise polynomial function designed to be smooth at the points where the pieces join

**knot** — a point where two pieces of a spline meet

**linear spline** — a piecewise linear function that interpolates data by connecting data points with straight line segments

**quadratic spline** — a piecewise quadratic polynomial function with continuous slope at knots

**cubic spline** — a piecewise cubic polynomial function with continuous slope and curvature at knots; the most widely used spline type

**natural cubic spline** — a cubic spline with the additional condition that the second derivative is zero at the two endpoints

**curve fitting** — the process of finding a mathematical function that approximates the relationship described by data

**residual** — the difference between an observed data value and the value predicted by a model; \( r_i = y_i - \hat{y}_i \)

**least squares criterion** — the principle that the best-fitting curve minimizes the sum of the squares of the residuals

**normal equations** — the system of linear equations whose solution gives the least squares coefficients

**linear least squares** — least squares fitting in which the model is linear in its unknown coefficients

**polynomial regression** — least squares fitting with a polynomial model

**overfitting** — using a model that is too complex, so that it fits the noise in the data rather than the underlying structure

**underfitting** — using a model that is too simple, so that it misses real structure in the data

**condition number** — a measure of how sensitive a linear system or matrix is to small changes in its inputs; important in least squares problems

---

## 5.1 Why Exact Interpolation Is Not Always Best

Interpolation constructs a function that passes through every given data point exactly. This is appropriate when the data points themselves are exact — when they represent precise values of a known function, or when the measurement process is highly controlled and essentially error-free.

But in many practical situations, data are not exact. Physical measurements carry experimental error. Sensor readings fluctuate. Survey data are rounded. Economic observations are imprecise estimates. When data carry error, insisting that a curve pass through every data point exactly means forcing the model to reproduce the error faithfully — which is precisely the wrong thing to do.

Even when data are exact, polynomial interpolation faces a structural problem: the degree of the interpolating polynomial grows with the number of data points. Ten data points require a degree-9 polynomial. Fifty data points require a degree-49 polynomial. High-degree polynomials are mathematically unstable and tend to oscillate between data points, sometimes producing approximations that are wildly inaccurate at points between the data.

These problems suggest two important alternative strategies:

1. **Splines** keep the degree of each polynomial piece low (typically degree 1, 2, or 3) and join many low-degree pieces together smoothly. The result passes through the data points exactly but avoids the oscillation problems of high-degree global polynomials.

2. **Least squares fitting** allows the curve to miss the data points by small residuals, seeking instead a smooth model that captures the trend in the data rather than every individual measurement.

Understanding when each strategy is appropriate requires thinking carefully about the source, quality, and purpose of the data — a habit of mind that separates mature numerical reasoning from algorithmic button-pushing.

---

## 5.2 Piecewise Approximation

The fundamental idea behind splines is simple: rather than using a single polynomial of high degree over the entire interval, divide the interval into smaller subintervals and use a separate low-degree polynomial on each subinterval.

Suppose data points are given at \( x_0 < x_1 < x_2 < \cdots < x_n \). The interval \([x_0, x_n]\) is divided into \( n \) subintervals:

\[
[x_0, x_1], \quad [x_1, x_2], \quad \ldots, \quad [x_{n-1}, x_n]
\]

On each subinterval \([x_{i-1}, x_i]\), a separate polynomial \( S_i(x) \) is used to approximate the function. Collectively, these polynomials define the **piecewise polynomial approximation**.

The points \( x_0, x_1, \ldots, x_n \) where the pieces join are called **knots**. At each knot, adjacent polynomial pieces must agree on the function value (they must both pass through the data point at that knot). Depending on the type of spline, they may also be required to agree on the derivative and even on the second derivative.

Piecewise approximation is extremely flexible. By using many short subintervals, any smooth function can be approximated well — even with low-degree polynomial pieces. The key is enforcing enough smoothness conditions at the knots so that the pieces join together without visible breaks, corners, or kinks.

---

## 5.3 Linear Splines

The simplest piecewise polynomial approximation is the **linear spline**, also called the piecewise linear interpolant. On each subinterval \([x_{i-1}, x_i]\), the linear spline is simply the straight line connecting the two data points \((x_{i-1}, y_{i-1})\) and \((x_i, y_i)\).

The formula on subinterval \([x_{i-1}, x_i]\) is:

\[
S_i(x) = y_{i-1} + \frac{y_i - y_{i-1}}{x_i - x_{i-1}} (x - x_{i-1})
\]

This is just the point-slope form of a line through the two endpoints of the subinterval.

**Properties of the linear spline:**

- **Exact at data points:** \( S_i(x_{i-1}) = y_{i-1} \) and \( S_i(x_i) = y_i \) for each piece.
- **Continuous:** The pieces join without gaps, since each piece is defined to match the data value at both of its endpoints.
- **Not differentiable at knots:** The slope changes abruptly at each knot. The linear spline has corners at the data points, which may be undesirable if the underlying function is smooth.

Linear splines are easy to construct and useful for many purposes — approximating integrals (as in the trapezoidal rule), displaying data, and basic interpolation. When a smoother approximation is needed, quadratic or cubic splines are used instead.

---

### Example 5.3.1 — Constructing a Linear Spline

**Problem:** Data are given at three points:

| \( x \) | \( y \) |
|:---:|:---:|
| 1 | 2 |
| 3 | 6 |
| 5 | 3 |

Construct the linear spline and evaluate it at \( x = 2 \) and \( x = 4 \).

**Think:** The linear spline connects consecutive data points with straight lines. There are two subintervals: \([1, 3]\) and \([3, 5]\). The spline uses a different formula on each subinterval.

**Method:** Construct the linear formula on each subinterval using the slope between the two endpoints.

**Compute:**

On \([1, 3]\):

\[
S_1(x) = 2 + \frac{6 - 2}{3 - 1}(x - 1) = 2 + 2(x - 1)
\]

On \([3, 5]\):

\[
S_2(x) = 6 + \frac{3 - 6}{5 - 3}(x - 3) = 6 - \frac{3}{2}(x - 3)
\]

Evaluating at \( x = 2 \) (using \( S_1 \)):

\[
S_1(2) = 2 + 2(2 - 1) = 2 + 2 = 4
\]

Evaluating at \( x = 4 \) (using \( S_2 \)):

\[
S_2(4) = 6 - \frac{3}{2}(4 - 3) = 6 - 1.5 = 4.5
\]

**Check:** At \( x = 3 \), both formulas should give \( y = 6 \). Checking \( S_1(3) = 2 + 2(2) = 6 \) ✓ and \( S_2(3) = 6 - 0 = 6 \) ✓. The spline is continuous at the knot.

**Interpret:** Between \( x = 1 \) and \( x = 3 \), the function is increasing rapidly; at \( x = 2 \), the estimated value is 4. Between \( x = 3 \) and \( x = 5 \), the function is decreasing; at \( x = 4 \), the estimated value is 4.5. The linear spline captures the overall shape but has a sharp corner at \( x = 3 \).

---

## 5.4 Quadratic Splines as an Introduction

Linear splines are continuous but not smooth — they have corners at each knot. If a smooth curve is needed, the pieces must agree not only on function values at the knots but also on slopes.

A **quadratic spline** uses a quadratic polynomial on each subinterval. Given \( n \) subintervals, there are \( n \) quadratic pieces, each determined by 3 coefficients, for a total of \( 3n \) unknowns.

The conditions imposed are:

1. **Data fit:** Each piece passes through the two data points at its endpoints. This gives \( 2n \) equations.
2. **Continuity of the derivative:** At each interior knot \( x_1, x_2, \ldots, x_{n-1} \), adjacent pieces have equal slopes. This gives \( n - 1 \) equations.

Counting: \( 2n + (n-1) = 3n - 1 \) equations for \( 3n \) unknowns. There is one degree of freedom remaining. A common choice is to set the slope of the first piece at the first data point to a specified value (for instance, zero or a value estimated from the data).

Quadratic splines are smoother than linear splines but still have a limitation: the second derivative (curvature) may jump discontinuously at knots. For applications where curvature must be smooth — mechanical design, animation, geometric modeling — cubic splines are preferred.

---

## 5.5 Cubic Splines as an Introduction

The **cubic spline** is the most widely used spline in scientific and engineering computing. It uses a cubic polynomial on each subinterval and enforces continuity of the function value, the first derivative, and the second derivative at each interior knot.

Given \( n + 1 \) data points \((x_0, y_0), (x_1, y_1), \ldots, (x_n, y_n)\) defining \( n \) subintervals, the cubic spline consists of \( n \) cubic pieces. Each cubic piece on \([x_{i-1}, x_i]\) has the form:

\[
S_i(x) = a_i + b_i(x - x_{i-1}) + c_i(x - x_{i-1})^2 + d_i(x - x_{i-1})^3
\]

with 4 unknowns per piece, giving \( 4n \) unknowns total.

The conditions are:

1. **Data fit at left endpoints:** \( S_i(x_{i-1}) = y_{i-1} \) for \( i = 1, 2, \ldots, n \). This gives \( n \) equations.
2. **Data fit at right endpoints:** \( S_i(x_i) = y_i \) for \( i = 1, 2, \ldots, n \). This gives \( n \) equations.
3. **Continuity of first derivative at interior knots:** \( S_i'(x_i) = S_{i+1}'(x_i) \) for \( i = 1, \ldots, n-1 \). This gives \( n - 1 \) equations.
4. **Continuity of second derivative at interior knots:** \( S_i''(x_i) = S_{i+1}''(x_i) \) for \( i = 1, \ldots, n-1 \). This gives \( n - 1 \) equations.

Total equations so far: \( 2n + 2(n-1) = 4n - 2 \). Two more equations are needed to uniquely determine all \( 4n \) coefficients.

These two additional conditions are **boundary conditions**. The most common choice produces the **natural cubic spline**, which requires:

\[
S_1''(x_0) = 0 \quad \text{and} \quad S_n''(x_n) = 0
\]

These conditions mean the curvature is zero at the two endpoints — a physically natural condition for a flexible beam that is free at its ends.

With these conditions, the cubic spline is fully determined. Computing it requires solving a tridiagonal linear system, which can be done efficiently with the methods of Chapter 9.

**Why cubic splines are preferred:**

- They are smooth through the second derivative, so they look smooth to the eye and to measuring instruments.
- Each piece is only degree 3, so they do not oscillate like high-degree polynomials.
- The system of equations for the coefficients is well-conditioned and efficiently solvable.
- Cubic splines provide the smoothest possible interpolant in a mathematically precise sense: among all twice-differentiable functions that pass through the data, the natural cubic spline minimizes the integral of the squared second derivative — a measure of total curvature.

---

### Diagram Instruction

Draw five data points connected by a smooth curve. Between each consecutive pair of data points, label the subinterval and indicate that a separate cubic polynomial piece is used. At each interior data point (knot), mark the smooth join — the curve passes through without a corner or kink. Label the first and last data points as the endpoints where the natural spline has zero curvature. Contrast this with a sketch of a high-degree polynomial that oscillates between the same data points.

---

### Interpretive Note: Splines and Physical Bending

The word "spline" comes from a tool used by draftsmen and shipbuilders before the age of computers. A physical spline was a thin, flexible strip of wood or metal that could be bent and pinned to pass through a set of points. The strip naturally took on the shape that minimized its internal bending energy — which turns out to be mathematically equivalent to the natural cubic spline. When engineers and mathematicians speak of cubic splines, they are using a mathematical model that captures exactly this physical behavior.

---

## 5.6 Curve Fitting

Splines are useful when the data are precise and a smooth interpolating curve is needed. But many real datasets do not meet this requirement. Physical measurements contain experimental uncertainty. Economic data are estimates. Survey measurements are rounded or biased. Sensor readings fluctuate around the true value.

When data are noisy, the goal changes. Rather than finding a curve that passes through every data point exactly, the goal is to find a curve that **fits the trend** in the data — passing close to the points without reproducing every fluctuation. This is the problem of **curve fitting**.

Curve fitting asks: given a collection of data points \((x_1, y_1), (x_2, y_2), \ldots, (x_m, y_m)\), find a function \( f(x) \) from some family of functions (lines, polynomials, exponentials, and so on) that best represents the overall relationship.

The key difference from interpolation is this: the number of data points \( m \) may be much larger than the number of parameters in the model, so it will generally be impossible to find a model that passes through every data point exactly. Instead, the model passes close to all the data points, with the definition of "close" made precise by a criterion.

---

## 5.7 Residuals

When a model \( f(x) \) is fitted to data, the **residual** for each data point measures how far the model is from the observed value.

For data point \((x_i, y_i)\) and model prediction \( \hat{y}_i = f(x_i) \), the residual is:

\[
r_i = y_i - \hat{y}_i = y_i - f(x_i)
\]

A positive residual means the model underpredicts at that point; a negative residual means it overpredicts. A residual of zero means the model passes exactly through the data point.

The full collection of residuals \( r_1, r_2, \ldots, r_m \) describes the error of the model across all data. A good fit means the residuals are small and scattered without obvious patterns. A poor fit means the residuals are large, or they show a systematic pattern (such as all positive in one region and all negative in another), indicating that the model is missing structure in the data.

Residuals play the role in curve fitting that absolute error plays in root-finding and interpolation: they are the direct measure of how well the model agrees with the data.

---

## 5.8 Least Squares Criterion

Given residuals \( r_1, r_2, \ldots, r_m \), how should they be combined into a single measure of goodness of fit? Several options come to mind:

- **Sum of residuals:** \( \sum_{i=1}^m r_i \). This is not useful, because positive and negative residuals cancel, and a model can have a zero sum of residuals while fitting very poorly.

- **Sum of absolute values:** \( \sum_{i=1}^m |r_i| \). This measures total deviation without cancellation, but the absolute value function is not differentiable everywhere, which makes optimization harder.

- **Sum of squared residuals:** \( \sum_{i=1}^m r_i^2 \). Squaring avoids cancellation, weights large residuals more heavily than small ones, and produces a smooth objective function that can be minimized using calculus.

The **least squares criterion** chooses the model parameters that minimize the sum of squared residuals:

\[
\text{Minimize} \quad S = \sum_{i=1}^m r_i^2 = \sum_{i=1}^m \left(y_i - f(x_i)\right)^2
\]

This principle — **minimize the sum of squared residuals** — is one of the most important ideas in all of applied mathematics. It is the foundation of linear regression, of least squares approximation in numerical analysis, and of many optimization methods in data science and statistics.

The least squares criterion has a natural geometric interpretation: among all curves in the chosen family, the least squares fit is the one that is closest to the data in the sense of minimizing the total squared vertical distance from the data points to the curve.

---

## 5.9 Linear Least Squares

The simplest and most important case of least squares fitting is fitting a straight line to data. Given \( m \) data points \((x_1, y_1), (x_2, y_2), \ldots, (x_m, y_m)\), with \( m \geq 2 \), the goal is to find constants \( a \) and \( b \) such that the line \( f(x) = a + bx \) minimizes:

\[
S(a, b) = \sum_{i=1}^m \left(y_i - a - bx_i\right)^2
\]

To minimize \( S \), take partial derivatives with respect to \( a \) and \( b \) and set them equal to zero.

\[
\frac{\partial S}{\partial a} = -2\sum_{i=1}^m \left(y_i - a - bx_i\right) = 0
\]

\[
\frac{\partial S}{\partial b} = -2\sum_{i=1}^m x_i\left(y_i - a - bx_i\right) = 0
\]

Rearranging these two equations gives the **normal equations** for linear least squares:

\[
ma + b\sum_{i=1}^m x_i = \sum_{i=1}^m y_i
\]

\[
a\sum_{i=1}^m x_i + b\sum_{i=1}^m x_i^2 = \sum_{i=1}^m x_i y_i
\]

This is a \( 2 \times 2 \) linear system in the unknowns \( a \) and \( b \). Solving it gives the least squares line.

The solutions can be written in closed form. Let:

\[
\bar{x} = \frac{1}{m}\sum_{i=1}^m x_i, \qquad \bar{y} = \frac{1}{m}\sum_{i=1}^m y_i
\]

Then the slope and intercept of the least squares line are:

\[
b = \frac{\sum_{i=1}^m (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^m (x_i - \bar{x})^2}, \qquad a = \bar{y} - b\bar{x}
\]

---

### Example 5.9.1 — Fitting a Least Squares Line

**Problem:** A physics experiment measures the velocity of an object at five times:

| Time \( t \) (s) | Velocity \( v \) (m/s) |
|:---:|:---:|
| 0 | 1.2 |
| 1 | 3.8 |
| 2 | 6.1 |
| 3 | 8.3 |
| 4 | 10.9 |

Fit a least squares line \( v = a + bt \) to this data and estimate the velocity at \( t = 5 \).

**Think:** The data appear to increase approximately linearly. A least squares line will find the best-fitting linear model. Since there are 5 data points and only 2 parameters, the line will generally not pass through all points exactly.

**Method:** Compute the necessary sums, form the normal equations, and solve.

**Compute:**

\( m = 5 \), \( \bar{t} = (0+1+2+3+4)/5 = 2 \), \( \bar{v} = (1.2+3.8+6.1+8.3+10.9)/5 = 30.3/5 = 6.06 \)

Compute \( \sum (t_i - \bar{t})^2 \):

\[
(-2)^2 + (-1)^2 + 0^2 + 1^2 + 2^2 = 4 + 1 + 0 + 1 + 4 = 10
\]

Compute \( \sum (t_i - \bar{t})(v_i - \bar{v}) \):

\[
(-2)(1.2 - 6.06) + (-1)(3.8 - 6.06) + (0)(6.1 - 6.06) + (1)(8.3 - 6.06) + (2)(10.9 - 6.06)
\]
\[
= (-2)(-4.86) + (-1)(-2.26) + 0 + (1)(2.24) + (2)(4.84)
\]
\[
= 9.72 + 2.26 + 0 + 2.24 + 9.68 = 23.90
\]

Slope:

\[
b = \frac{23.90}{10} = 2.39
\]

Intercept:

\[
a = 6.06 - (2.39)(2) = 6.06 - 4.78 = 1.28
\]

Least squares line: \( v = 1.28 + 2.39t \)

Estimate at \( t = 5 \): \( v = 1.28 + 2.39(5) = 1.28 + 11.95 = 13.23 \) m/s.

**Check:** Compute the predicted values and residuals:

| \( t \) | Observed \( v \) | Predicted \( \hat{v} \) | Residual |
|:---:|:---:|:---:|:---:|
| 0 | 1.2 | 1.28 | −0.08 |
| 1 | 3.8 | 3.67 | 0.13 |
| 2 | 6.1 | 6.06 | 0.04 |
| 3 | 8.3 | 8.45 | −0.15 |
| 4 | 10.9 | 10.84 | 0.06 |

The residuals are small and have no obvious systematic pattern. The fit appears good.

**Interpret:** The data support a model of constant acceleration. The slope \( b = 2.39 \) m/s² estimates the acceleration of the object. The intercept \( a = 1.28 \) m/s estimates the initial velocity. The prediction at \( t = 5 \) is 13.23 m/s, which assumes the linear trend continues.

---

### Reliability Note

Predictions beyond the range of the data (extrapolation) are less reliable than predictions within the range (interpolation). In the example above, the prediction at \( t = 5 \) assumes the linear relationship continues, but if the object slows down due to friction or reaches a terminal velocity, the linear model will be wrong. Always state clearly when a prediction involves extrapolation.

---

## 5.10 Polynomial Least Squares

The least squares principle extends naturally from lines to polynomials. Suppose the model is a polynomial of degree \( d \):

\[
f(x) = c_0 + c_1 x + c_2 x^2 + \cdots + c_d x^d
\]

The goal is to choose the coefficients \( c_0, c_1, \ldots, c_d \) to minimize:

\[
S = \sum_{i=1}^m \left(y_i - c_0 - c_1 x_i - c_2 x_i^2 - \cdots - c_d x_i^d\right)^2
\]

Taking partial derivatives with respect to each coefficient and setting them to zero produces a system of \( d + 1 \) linear equations in \( d + 1 \) unknowns — a larger version of the normal equations.

In matrix form, the polynomial least squares problem seeks the coefficient vector \( \mathbf{c} = (c_0, c_1, \ldots, c_d)^T \) that satisfies:

\[
\mathbf{A}^T \mathbf{A} \, \mathbf{c} = \mathbf{A}^T \mathbf{y}
\]

where \( \mathbf{A} \) is the **Vandermonde matrix** (or design matrix) with entries \( A_{ij} = x_i^{j-1} \) and \( \mathbf{y} = (y_1, y_2, \ldots, y_m)^T \).

This system — the **normal equations** in matrix form — is always solvable when the \( x \)-values are distinct and \( d < m \). Its solution gives the polynomial of degree \( d \) that best fits the data in the least squares sense.

The choice of degree \( d \) is a modeling decision. If \( d \) is too small, the model may not capture the structure of the data (underfitting). If \( d \) is too large, the model may fit the noise rather than the underlying relationship (overfitting). The principles governing this choice are discussed in Section 5.12.

---

## 5.11 Normal Equations as an Introduction

The phrase "normal equations" appears in many contexts across mathematics, statistics, and numerical analysis. Understanding what they mean helps connect these different contexts.

In general, the least squares problem asks for the vector \( \mathbf{c} \) that minimizes \( \| \mathbf{A}\mathbf{c} - \mathbf{y} \|^2 \) — the squared length of the vector of residuals. When the system \( \mathbf{A}\mathbf{c} = \mathbf{y} \) is overdetermined (more equations than unknowns, as is typical in curve fitting), there is no exact solution. The least squares solution minimizes the residual norm.

The key result from linear algebra is that the least squares solution satisfies:

\[
\mathbf{A}^T \mathbf{A} \, \mathbf{c} = \mathbf{A}^T \mathbf{y}
\]

These are the **normal equations**. The name comes from the geometric fact that the residual vector \( \mathbf{y} - \mathbf{A}\mathbf{c} \) is **normal** (perpendicular) to the column space of \( \mathbf{A} \) at the least squares solution. In other words, the least squares fit is the point in the model space that is closest to the data, measured by straight-line distance in the ambient space of all data vectors.

**Practical note:** Although the normal equations can be solved directly using Gaussian elimination (Chapter 9), the matrix \( \mathbf{A}^T \mathbf{A} \) can be ill-conditioned when the polynomial degree is high or when the \( x \)-values are clustered. For high-quality computation, more numerically stable approaches such as QR decomposition (a topic in numerical linear algebra) are preferred. For the purposes of this chapter, solving the normal equations directly is appropriate for low-degree models with well-distributed data.

---

### Example 5.11.1 — Setting Up the Normal Equations

**Problem:** Data are given at four points:

| \( x \) | \( y \) |
|:---:|:---:|
| 1 | 2.1 |
| 2 | 3.9 |
| 3 | 8.2 |
| 4 | 14.8 |

Set up the normal equations for a least squares fit of the form \( f(x) = c_0 + c_1 x + c_2 x^2 \).

**Think:** This is a quadratic polynomial least squares problem with \( m = 4 \) data points and \( d = 2 \), giving 3 unknown coefficients. The normal equations will be a \( 3 \times 3 \) linear system.

**Method:** Construct the design matrix \( \mathbf{A} \), then compute \( \mathbf{A}^T \mathbf{A} \) and \( \mathbf{A}^T \mathbf{y} \).

**Compute:**

The design matrix is:

\[
\mathbf{A} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \\ 1 & 3 & 9 \\ 1 & 4 & 16 \end{pmatrix}
\]

Compute \( \mathbf{A}^T \mathbf{A} \):

\[
\mathbf{A}^T \mathbf{A} = \begin{pmatrix}
\sum 1 & \sum x_i & \sum x_i^2 \\
\sum x_i & \sum x_i^2 & \sum x_i^3 \\
\sum x_i^2 & \sum x_i^3 & \sum x_i^4
\end{pmatrix}
= \begin{pmatrix}
4 & 10 & 30 \\
10 & 30 & 100 \\
30 & 100 & 354
\end{pmatrix}
\]

Compute \( \mathbf{A}^T \mathbf{y} \):

\[
\mathbf{A}^T \mathbf{y} = \begin{pmatrix}
\sum y_i \\
\sum x_i y_i \\
\sum x_i^2 y_i
\end{pmatrix}
= \begin{pmatrix}
29.0 \\
88.5 \\
296.5
\end{pmatrix}
\]

The normal equations are:

\[
\begin{pmatrix}
4 & 10 & 30 \\
10 & 30 & 100 \\
30 & 100 & 354
\end{pmatrix}
\begin{pmatrix} c_0 \\ c_1 \\ c_2 \end{pmatrix}
=
\begin{pmatrix} 29.0 \\ 88.5 \\ 296.5 \end{pmatrix}
\]

**Check:** The matrix \( \mathbf{A}^T \mathbf{A} \) is symmetric (as it always must be), and its entries are sums of powers of the \( x \)-values, which is consistent with the structure expected.

**Interpret:** Solving this system by Gaussian elimination (Chapter 9) would give the coefficients \( c_0, c_1, c_2 \) of the best-fitting parabola. The resulting model could then be used to estimate \( y \) values between and near the data points.

---

## 5.12 Overfitting and Underfitting

One of the most important judgments in curve fitting is choosing the degree of the polynomial model. This choice involves a fundamental tradeoff.

**Underfitting** occurs when the model is too simple to capture the structure of the data. A linear model fitted to data that follow a curve will produce large, systematic residuals — positive in the middle of the range and negative at the ends (or vice versa). The pattern in the residuals reveals that the model is missing something.

**Overfitting** occurs when the model is too complex relative to the data. A degree-9 polynomial fitted to 10 noisy data points will pass through every point exactly (or nearly so), but it will oscillate wildly between data points. The model has absorbed the noise in the data and will not generalize reliably to new observations.

Both failure modes produce models that are unreliable for prediction or interpretation.

The key principle is: choose the simplest model that captures the genuine structure of the data. In practice, this means:

- Plotting the data and the fitted curve together, looking for systematic patterns in the residuals.
- Increasing the polynomial degree only as long as it significantly reduces the sum of squared residuals and the improvement is not explained by fitting noise.
- Checking whether the coefficients of higher-degree terms are much smaller than their uncertainty, which would suggest they are not genuinely supported by the data.

A well-chosen model has residuals that are small and show no obvious pattern when plotted against \( x \) — they look like random scatter around zero.

---

### Diagram Instruction

Draw three panels side by side. In the left panel, show a scatterplot of data that follows a curve, with a straight line fitted through it — the residuals are systematically positive in the middle and negative at the ends, illustrating underfitting. In the middle panel, show the same data with a well-fitting quadratic curve — the residuals are small and appear randomly scattered. In the right panel, show the data fitted by a high-degree polynomial that oscillates wildly between the points, illustrating overfitting.

---

### Student Warning

In curve fitting, a perfect fit is not necessarily a good fit. If a polynomial of degree \( m - 1 \) is fitted to \( m \) data points, it passes through every point exactly — but this is just polynomial interpolation. The model has no ability to distinguish the true relationship from the noise in the measurements. When fitting noisy data, always prefer a lower-degree model that still captures the trend, rather than a high-degree model that fits every fluctuation.

---

## 5.13 Common Curve Fitting Mistakes

**Mistake 1: Interpolating noisy data.**
When data contain measurement error, using an interpolating polynomial or spline that passes through every point exactly will reproduce the noise. Use least squares fitting instead.

**Mistake 2: Choosing a model degree based on the number of data points rather than the structure of the data.**
The degree of the fitting polynomial should be chosen based on the relationship being modeled (for example, linear motion gives a linear model, quadratic motion gives a quadratic model), not simply to use all available data.

**Mistake 3: Extrapolating far beyond the data.**
Least squares models are valid within or near the range of the data. Predicting values far outside this range assumes the model relationship continues to hold, which is often unjustified and can be badly wrong.

**Mistake 4: Ignoring the residual pattern.**
Always plot the residuals. If residuals show a systematic pattern (all positive in one region, alternating signs, or a clear curve), the model is inadequate and should be revised.

**Mistake 5: Treating a high coefficient of determination as proof of a good model.**
A high \( R^2 \) value (or low sum of squared residuals) means the model fits the current data well, but it does not guarantee the model is physically meaningful, correctly specified, or predictively reliable.

**Mistake 6: Using high-degree polynomial least squares without checking conditioning.**
The matrix \( \mathbf{A}^T \mathbf{A} \) can be very ill-conditioned when the polynomial degree is high. In such cases, direct solution of the normal equations may give inaccurate coefficients. Use lower degree models or consult a numerical analysis reference for more stable approaches.

**Mistake 7: Confusing the least squares line with the true relationship.**
A least squares line minimizes the sum of squared vertical deviations. It is a mathematical model, not a physical law. Its interpretation depends entirely on the context.

---

## Practice Problems

### Concept Check

1. Explain in your own words the difference between interpolation and least squares fitting. When would you choose each approach?

2. What is a knot in a spline? What conditions must be satisfied at a knot for a linear spline? For a cubic spline?

3. Why are cubic splines preferred over high-degree global polynomials for smooth curve fitting?

4. What is a residual? If a residual is positive, what does that tell you about the model's prediction at that data point?

5. State the least squares criterion. Why is the sum of squares used rather than the sum of absolute values or the sum of residuals?

6. What are the normal equations, and what mathematical problem do they solve?

7. What is overfitting? What is underfitting? How would you recognize each in a residual plot?

---

### Skill Practice

8. Data are given at the points \((0, 1), (2, 4), (4, 2), (6, 5)\). Construct the linear spline and evaluate it at \( x = 1 \), \( x = 3 \), and \( x = 5 \).

9. Verify that the linear spline you constructed in Problem 8 is continuous at \( x = 2 \) and \( x = 4 \).

10. For the data in Problem 8, would a linear spline or a cubic spline be more appropriate if the underlying function is physically smooth? Explain.

11. Data are given at the five points:

| \( x \) | \( y \) |
|:---:|:---:|
| 1 | 3.2 |
| 2 | 5.1 |
| 3 | 7.3 |
| 4 | 9.8 |
| 5 | 11.5 |

(a) Compute the least squares line.
(b) Find the residuals at each data point.
(c) Estimate the value at \( x = 6 \). Note any reservations about this estimate.

12. Set up (but do not solve) the normal equations for a least squares fit of the form \( f(x) = c_0 + c_1 x + c_2 x^2 \) to the data:

| \( x \) | \( y \) |
|:---:|:---:|
| 0 | 1 |
| 1 | 3 |
| 2 | 8 |
| 3 | 20 |

---

### Algorithm Practice

13. Write pseudocode for computing the linear spline at a query point \( x^* \), given a sorted array of knots \( x_0, x_1, \ldots, x_n \) and corresponding values \( y_0, y_1, \ldots, y_n \). Your pseudocode should:
    (a) Find the correct subinterval containing \( x^* \).
    (b) Evaluate the linear formula on that subinterval.
    (c) Handle the boundary case \( x^* = x_n \).

14. Write pseudocode for computing the least squares line coefficients \( a \) and \( b \) from a dataset of \( m \) points \((x_1, y_1), \ldots, (x_m, y_m)\) using the formulas for slope and intercept derived from the normal equations.

---

### Computational Interpretation

15. A student fits a least squares line to 20 data points and computes the residuals. She notices that the first 10 residuals are all negative and the last 10 are all positive, when the data are sorted by \( x \). What does this pattern tell her about her model?

16. A cubic spline is constructed through 6 data points on \([0, 5]\). How many subintervals does it use? How many cubic polynomial pieces does it contain? How many coefficients need to be determined in total?

17. Explain in terms of residuals why a polynomial of degree \( m - 1 \) fitted to \( m \) data points by least squares will pass through every data point exactly.

18. Two students fit polynomials to the same dataset. Student A uses degree 2; Student B uses degree 6. Student B's sum of squared residuals is much smaller. Is Student B's model necessarily better? Explain.

---

### Applications

19. **Structural Engineering.** A bridge beam's deflection is measured at 6 equally spaced points along its 10-meter length, giving deflections (in millimeters) of \( 0, 3.2, 5.8, 5.9, 3.4, 0 \). If the deflection must be modeled by a smooth curve that is zero at both endpoints and has its maximum near the center, which type of spline would you recommend? Justify your answer.

20. **Economics.** A researcher measures household income \( x \) (in thousands of dollars) and annual spending on education \( y \) (in thousands of dollars) for 15 families. She fits a least squares line and gets a slope of 0.12 and an intercept of 0.5. Interpret these values in economic terms. What does the slope represent?

21. **Physics.** A ball is dropped from rest and its height (in meters) is recorded at several times:

| Time (s) | Height (m) |
|:---:|:---:|
| 0 | 10.0 |
| 0.2 | 9.80 |
| 0.4 | 9.22 |
| 0.6 | 8.24 |
| 0.8 | 6.86 |
| 1.0 | 5.10 |

Fit a least squares polynomial of degree 2 (a quadratic) to this data. Compare the coefficient of \( t^2 \) to what you expect from physics. What should this coefficient be if the free-fall acceleration is \( g = 9.8 \) m/s²?

22. **Data Science.** A data scientist fits models of degree 1 through 5 to a dataset of 50 points. She records the sum of squared residuals for each degree:

| Degree | Sum of Squared Residuals |
|:---:|:---:|
| 1 | 452 |
| 2 | 118 |
| 3 | 103 |
| 4 | 99 |
| 5 | 97 |

At what degree would you stop increasing complexity? Justify your choice.

---

### Error Analysis

23. Explain how the conditioning of the normal equations worsens as the polynomial degree increases for a fixed dataset. What practical problem can this cause when computing the least squares coefficients?

24. A researcher uses a degree-8 polynomial to fit 9 data points by least squares. Explain why the result is identical to polynomial interpolation and why this is a problem if the data contain measurement noise.

25. For the linear spline in Example 5.3.1, estimate the maximum error that could result if the underlying function is actually a smooth curve. (Hint: the linear spline has corners at knots, so the error is related to how curved the true function is in each subinterval.)

26. A least squares line is computed for data with \( m = 100 \) points. A new data point is added that is far from the fitted line. Explain qualitatively how this outlier will affect the slope and intercept of the new least squares fit, and why this is a potential problem.

---

## Chapter Summary

This chapter extended approximation methods beyond exact polynomial interpolation, addressing two important limitations: the oscillation of high-degree polynomials and the unsuitability of exact interpolation for noisy data.

**Splines** provide piecewise polynomial approximation with smoothness enforced at the knots. Linear splines are continuous but not differentiable; quadratic splines add continuous derivatives; cubic splines add continuous curvature and are the most widely used spline type in scientific computing. The natural cubic spline is defined by requiring zero curvature at the endpoints, producing a uniquely determined, smooth interpolating function whose coefficients satisfy a tridiagonal linear system.

**Curve fitting with least squares** finds a model that minimizes the sum of squared residuals — the total squared deviation between model predictions and observed data. Fitting a straight line to \( m \) data points produces the simplest form of the normal equations, a \( 2 \times 2 \) linear system. Fitting a polynomial of degree \( d \) produces a system of \( d + 1 \) normal equations. In matrix form, the normal equations are \( \mathbf{A}^T \mathbf{A} \, \mathbf{c} = \mathbf{A}^T \mathbf{y} \).

The central modeling judgment in least squares is choosing an appropriate degree. **Underfitting** uses a model that is too simple and misses genuine structure. **Overfitting** uses a model that is too complex and fits noise rather than structure. Residual analysis — plotting residuals against \( x \) — is the primary diagnostic tool.

Splines and least squares complement each other. Splines are best when data are precise and a smooth interpolating curve is needed. Least squares is best when data are noisy and a trend model is needed. Understanding when each approach is appropriate is a fundamental skill in numerical modeling.

---

## Key Terms Review

| Term | Definition |
|:---|:---|
| Spline | A piecewise polynomial with smoothness conditions at knots |
| Knot | A point where adjacent polynomial pieces join |
| Linear spline | Piecewise linear interpolant; continuous but not differentiable at knots |
| Cubic spline | Piecewise cubic interpolant with continuous function value, slope, and curvature |
| Natural cubic spline | Cubic spline with zero second derivative at the two endpoints |
| Curve fitting | Finding a function that approximates the trend in data |
| Residual | \( r_i = y_i - f(x_i) \); the difference between observed and predicted values |
| Least squares criterion | Minimize \( \sum r_i^2 \); the sum of squared residuals |
| Normal equations | The linear system \( \mathbf{A}^T \mathbf{A} \mathbf{c} = \mathbf{A}^T \mathbf{y} \) whose solution gives least squares coefficients |
| Overfitting | Fitting noise rather than structure by using a model that is too complex |
| Underfitting | Missing genuine structure by using a model that is too simple |

---

## Concept Review Questions

1. What are the two major limitations of exact polynomial interpolation that motivate splines and least squares fitting?

2. How does a cubic spline differ from the high-degree interpolating polynomial? What specific smoothness conditions does the cubic spline enforce?

3. What additional two conditions make a cubic spline uniquely determined, and what are the most common choices for these conditions?

4. Why is the sum of squared residuals minimized rather than the sum of residuals or the sum of absolute residuals?

5. Describe in words what the normal equations represent geometrically.

6. Give two practical examples where least squares fitting would be more appropriate than polynomial interpolation.

7. Define overfitting and underfitting. What kind of residual patterns indicate each problem?

8. Why does the conditioning of the normal equations worsen as the polynomial degree increases? What does poor conditioning mean for the solution?

---

## Skill Practice

29. Construct the linear spline through the data \((0, 0), (1, 3), (2, 1), (3, 5), (4, 2)\) and evaluate it at \( x = 0.5 \), \( x = 1.5 \), \( x = 2.5 \), and \( x = 3.5 \).

30. Fit a least squares line to the following data and compute the sum of squared residuals:

| \( x \) | \( y \) |
|:---:|:---:|
| 2 | 5.3 |
| 4 | 9.8 |
| 6 | 14.2 |
| 8 | 18.6 |
| 10 | 23.1 |

31. For the data in Problem 30, fit a least squares line and use it to predict \( y \) at \( x = 7 \) and \( x = 12 \). Discuss the reliability of each prediction.

32. For the quadratic least squares problem with design matrix

\[
\mathbf{A} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & 2 & 4 \\ 1 & 3 & 9 \end{pmatrix}
\]

and data vector \( \mathbf{y} = (2, 5, 10, 17)^T \), compute \( \mathbf{A}^T \mathbf{A} \) and \( \mathbf{A}^T \mathbf{y} \).

---

## Methods Reference

**Linear spline on subinterval \([x_{i-1}, x_i]\):**

\[
S_i(x) = y_{i-1} + \frac{y_i - y_{i-1}}{x_i - x_{i-1}}(x - x_{i-1})
\]

**Least squares line coefficients:**

\[
b = \frac{\sum_{i=1}^m (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^m (x_i - \bar{x})^2}, \qquad a = \bar{y} - b\bar{x}
\]

**Normal equations (matrix form):**

\[
\mathbf{A}^T \mathbf{A} \, \mathbf{c} = \mathbf{A}^T \mathbf{y}
\]

where \( \mathbf{A} \) has entries \( A_{ij} = x_i^{j-1} \) and \( \mathbf{y} \) contains the observed values.

**Residual:**

\[
r_i = y_i - f(x_i)
\]

**Least squares criterion:**

\[
\text{Minimize} \quad S = \sum_{i=1}^m r_i^2
\]

---

## Chapter 5 Checkpoint

**Part A: Concepts**

1. Explain in one or two sentences why a linear spline is continuous but not differentiable at its knots.

2. A cubic spline is constructed through 8 data points, creating 7 subintervals. How many unknown coefficients must be determined? List the conditions that uniquely determine the natural cubic spline.

3. Explain what a residual represents in a curve-fitting problem. How do residuals indicate whether a model is overfitting or underfitting?

**Part B: Calculations**

4. Construct the linear spline through the data \((1, 4), (3, 8), (5, 3)\) and evaluate it at \( x = 2 \) and \( x = 4 \).

5. Fit a least squares line to the data:

| \( x \) | \( y \) |
|:---:|:---:|
| 0 | 1.0 |
| 2 | 4.8 |
| 4 | 8.9 |
| 6 | 13.2 |
| 8 | 17.1 |

Report the slope and intercept, compute the residuals, and comment on the quality of the fit.

6. Set up the normal equations for a least squares quadratic fit \( f(x) = c_0 + c_1 x + c_2 x^2 \) for the data:

| \( x \) | \( y \) |
|:---:|:---:|
| 0 | 1 |
| 1 | 2 |
| 2 | 5 |
| 3 | 10 |

**Part C: Analysis**

7. A student fits polynomials of degree 1, 2, 3, and 4 to 15 data points. The sums of squared residuals are 320, 85, 78, and 76 respectively. Which degree would you recommend? Justify your choice in terms of the tradeoff between fit quality and model complexity.

8. Explain why the normal equations for a high-degree polynomial fit may be poorly conditioned. What practical consequence does this have for the computed coefficients?

---

## Bridge Note

The ideas developed in this chapter connect directly to several important areas of mathematics and computing.

**Numerical Linear Algebra (Chapter 9)** provides the tools for solving the normal equations stably and efficiently. The Gaussian elimination, LU decomposition, and iterative methods discussed there are exactly the tools needed to solve the \( (d+1) \times (d+1) \) normal equations for polynomial regression, and to solve the tridiagonal system that arises in cubic spline construction.

**Numerical Integration (Chapter 7)** connects directly to splines, since the trapezoidal rule and Simpson's rule can both be interpreted as integration of a linear or quadratic spline fitted to function values. The smoothness of the spline determines the accuracy of the integration method.

**Numerical Optimization (Chapter 11)** generalizes the least squares principle. Minimizing the sum of squared residuals is a special case of optimization, and the normal equations are a special case of the first-order optimality conditions. Chapter 11 develops gradient descent and Newton's method, which can solve least squares problems as well as much more general optimization problems.

**Data Science and Machine Learning** use least squares fitting as a foundational building block. Linear regression, polynomial regression, ridge regression, and many regularized regression methods all minimize variants of the sum of squared residuals. Understanding the normal equations and their derivation provides the conceptual foundation for understanding why these methods work.

**Splines in Scientific Computing and Computer Graphics** appear in CAD software, animation, font design, and finite element analysis. Cubic splines underlie the smooth curves in modern computer graphics and in engineering design tools. More advanced spline families — B-splines, NURBS (non-uniform rational B-splines) — are the workhorses of geometric modeling in industry.

---

> **MGU Library Connection:** For related material, see the MGU Library entries on *polynomial interpolation* (Chapter 4 of this text), *Gaussian elimination and LU decomposition* (Chapter 9), *linear regression and statistical modeling* (MGU Probability and Statistics), and *optimization and gradient methods* (Chapter 11 of this text and MGU Scientific Computing). Formula references for least squares and spline coefficients are available in Appendix I: Least Squares Reference.
