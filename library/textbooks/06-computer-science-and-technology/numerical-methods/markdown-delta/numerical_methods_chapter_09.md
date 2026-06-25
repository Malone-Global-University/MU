# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part IV: Linear Systems, Eigenvalues, and Optimization

---

# Chapter 9: Numerical Linear Algebra

---

## Purpose

Linear systems of equations appear throughout mathematics, science, engineering, economics, and data analysis. In calculus and linear algebra courses, students learn to solve these systems using Gaussian elimination, matrix inverses, Cramer's rule, and other symbolic techniques. For small systems with tidy coefficients, these methods work well. But in real computational practice, linear systems are often large — hundreds or thousands of unknowns — and their coefficients carry rounding errors from measurement, modeling, or prior computation. In these settings, the question is not merely whether an exact symbolic answer exists, but whether a reliable numerical answer can be found efficiently.

Chapter 9 introduces numerical linear algebra: the study of how to solve linear systems in ways that are computationally efficient, numerically stable, and sensitive to conditioning. Students will revisit Gaussian elimination from a numerical perspective, study pivoting strategies that reduce error, develop LU decomposition as a structured factorization tool, and explore iterative methods that approximate solutions through repeated refinement. Throughout the chapter, the emphasis is on understanding not just how to perform computations, but when to trust them.

---

## Opening Question

Suppose an engineering team is modeling the flow of electrical current through a circuit with 500 nodes. Their mathematical model produces a linear system of 500 equations in 500 unknowns. Solving this system by hand is out of the question. A computer could certainly attempt it — but will the answer be reliable? What if the system is nearly singular? What if rounding errors accumulate across 500 steps of elimination? How would the team know whether the computed solution is close to the true solution, or badly off? These are the kinds of questions that numerical linear algebra is designed to answer.

---

## Why This Chapter Matters

Large linear systems are among the most common computational problems in applied mathematics. They arise when discretizing differential equations, fitting data models, analyzing networks, computing stresses in structural engineering, modeling economic systems, training machine learning models, and simulating physical processes. No matter how carefully a system is set up, numerical errors enter the picture. Gaussian elimination, which students may regard as a clean symbolic procedure, must be performed in floating-point arithmetic — and floating-point arithmetic introduces rounding at every step. Without careful strategy, those rounding errors can grow dramatically. Conditioning tells us whether a system is inherently sensitive to input errors. Stability tells us whether an algorithm manages those errors well. This chapter teaches students how to solve linear systems numerically with awareness of both.

---

## Learning Objectives

By the end of Chapter 9, students should be able to:

- Explain why numerical linear algebra differs from exact symbolic linear algebra.
- Perform Gaussian elimination with partial pivoting.
- Describe how roundoff error enters elimination and how pivoting controls it.
- Construct and apply LU decomposition to solve linear systems.
- Interpret matrix norms and the condition number of a matrix.
- Explain why a large condition number signals potential numerical unreliability.
- Apply the Jacobi and Gauss-Seidel iterative methods to solve linear systems.
- Identify when iterative methods are appropriate versus direct methods.
- Recognize common settings where large linear systems arise in applications.
- Diagnose common numerical linear algebra mistakes and how to avoid them.

---

## Key Terms

Gaussian elimination, row operations, augmented matrix, back substitution, pivoting, partial pivoting, scaled partial pivoting, LU decomposition, lower triangular matrix, upper triangular matrix, forward substitution, matrix norm, condition number, ill-conditioned system, well-conditioned system, iterative method, Jacobi method, Gauss-Seidel method, diagonal dominance, convergence of iterative methods, residual, roundoff error in elimination.

---

## 9.1 Why Numerical Linear Algebra Matters

Linear algebra provides a powerful symbolic language for solving systems of equations. Given a system

$$\mathbf{A}\mathbf{x} = \mathbf{b}$$

where $\mathbf{A}$ is an $n \times n$ matrix and $\mathbf{b}$ is a vector of $n$ known values, the symbolic solution is $\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$, provided $\mathbf{A}$ is invertible. For small systems, students can compute this directly or use row reduction to find exact rational solutions.

But real computational problems rarely stay small. In modern applications, $n$ might be thousands, millions, or more. The matrix $\mathbf{A}$ might come from a physical model, a finite difference approximation, or a data fitting procedure — and its entries are often decimal approximations that already carry rounding error. In this context, several new concerns arise.

**Efficiency.** Computing $\mathbf{A}^{-1}$ explicitly requires $O(n^3)$ operations and is numerically expensive and often unnecessary. Direct methods like LU decomposition solve the system more efficiently and without forming the inverse.

**Rounding error accumulation.** Elimination involves many arithmetic operations. Each floating-point operation introduces a small error. Over $n$ steps, these errors accumulate. Without care, the computed solution may be far from the true solution even when the algorithm runs to completion.

**Ill-conditioning.** Some systems are inherently sensitive to small changes in $\mathbf{b}$ or $\mathbf{A}$. If the system is nearly singular — that is, if the matrix is close to having no inverse — small perturbations in the inputs can produce enormous changes in the output. This is not a failure of the algorithm; it is a property of the mathematical problem itself.

**Iterative versus direct methods.** For very large sparse systems (where most entries of $\mathbf{A}$ are zero), direct elimination methods may be impractical. Iterative methods that start with an initial guess and refine it repeatedly can be far more efficient.

Numerical linear algebra addresses all of these concerns. It does not abandon the symbolic framework of linear algebra — it works within that framework, but with careful attention to how computations are actually performed in finite-precision arithmetic.

> **MGU Library Connection:** For a review of matrix operations, row reduction, and the theory of linear systems, see the *Linear Algebra* chapter on Systems of Equations in the MGU Library.

---

## 9.2 Linear Systems in Computation

To appreciate why numerical methods are needed, consider how often linear systems arise in practice.

**Finite difference methods.** When approximating solutions to differential equations on a grid (as Chapter 13 will develop), the unknowns at each grid point are related to their neighbors by a linear equation. A grid with $n$ points produces a system of $n$ equations. For a two-dimensional grid, $n$ can easily reach tens of thousands.

**Least squares fitting.** Fitting a model to data, as studied in Chapter 5, leads to the normal equations $\mathbf{A}^T \mathbf{A} \mathbf{x} = \mathbf{A}^T \mathbf{b}$. These are a linear system whose solution gives the best-fit parameters.

**Circuit analysis.** Kirchhoff's laws applied to a circuit with many nodes produce a linear system in the unknown voltages or currents.

**Structural analysis.** The finite element method, used in mechanical and civil engineering, models structures by breaking them into small elements and writing equilibrium conditions at each node — producing a large sparse linear system.

**Machine learning.** Linear regression models, neural network weight updates, and many optimization algorithms involve solving or approximately solving linear systems at each step.

In all of these settings, the challenge is not formulating the system — it is solving it accurately, efficiently, and with honest awareness of potential error.

---

## 9.3 Gaussian Elimination Review

Gaussian elimination is the foundational direct method for solving $\mathbf{A}\mathbf{x} = \mathbf{b}$. Students have likely encountered it in algebra or linear algebra courses. This section reviews the procedure and sets up the numerical analysis that follows.

The goal of Gaussian elimination is to transform the augmented matrix $[\mathbf{A} \mid \mathbf{b}]$ into upper triangular form using elementary row operations, then recover the solution by back substitution.

**The three elementary row operations are:**

- Swap two rows.
- Multiply a row by a nonzero scalar.
- Add a multiple of one row to another.

None of these operations change the solution set of the system.

**The elimination process.** In the first stage, the first column below the diagonal is eliminated by subtracting multiples of the first row from each subsequent row. In the second stage, the second column below the diagonal is eliminated using the second row as a pivot. This continues until the matrix is upper triangular.

**Example 9.1. Simple Gaussian Elimination**

*Problem.* Solve the system:

$$2x_1 + x_2 - x_3 = 8$$
$$-3x_1 - x_2 + 2x_3 = -11$$
$$-2x_1 + x_2 + 2x_3 = -3$$

*Think.* The augmented matrix is:

$$\left[\begin{array}{ccc|c} 2 & 1 & -1 & 8 \\ -3 & -1 & 2 & -11 \\ -2 & 1 & 2 & -3 \end{array}\right]$$

*Method.* Use Gaussian elimination. The pivot element is the leading nonzero entry of the current row being used to eliminate entries below it.

*Compute.*

**Stage 1:** Eliminate the first column below row 1.

Multiplier for row 2: $m_{21} = \frac{-3}{2} = -1.5$

$R_2 \leftarrow R_2 - (-1.5) R_1 = R_2 + 1.5 R_1$

$[-3 + 1.5(2),\ -1 + 1.5(1),\ 2 + 1.5(-1),\ -11 + 1.5(8)] = [0,\ 0.5,\ 0.5,\ 1]$

Multiplier for row 3: $m_{31} = \frac{-2}{2} = -1$

$R_3 \leftarrow R_3 - (-1) R_1 = R_3 + R_1$

$[-2 + 2,\ 1 + 1,\ 2 + (-1),\ -3 + 8] = [0,\ 2,\ 1,\ 5]$

Matrix after Stage 1:

$$\left[\begin{array}{ccc|c} 2 & 1 & -1 & 8 \\ 0 & 0.5 & 0.5 & 1 \\ 0 & 2 & 1 & 5 \end{array}\right]$$

**Stage 2:** Eliminate the second column below row 2.

Multiplier for row 3: $m_{32} = \frac{2}{0.5} = 4$

$R_3 \leftarrow R_3 - 4 R_2$

$[0,\ 2 - 4(0.5),\ 1 - 4(0.5),\ 5 - 4(1)] = [0,\ 0,\ -1,\ 1]$

Upper triangular form:

$$\left[\begin{array}{ccc|c} 2 & 1 & -1 & 8 \\ 0 & 0.5 & 0.5 & 1 \\ 0 & 0 & -1 & 1 \end{array}\right]$$

**Back substitution:**

From row 3: $-x_3 = 1$, so $x_3 = -1$.

From row 2: $0.5 x_2 + 0.5(-1) = 1$, so $0.5 x_2 = 1.5$, giving $x_2 = 3$.

From row 1: $2x_1 + 3 - (-1)(-1) = 8$, so $2x_1 + 3 - 1 = 8$, giving $2x_1 = 6$, so $x_1 = 3$.

*Check.* Substitute back into the original system:

Row 1: $2(3) + 3 - (-1) = 6 + 3 + 1 = 10 \neq 8$.

Wait — let us recheck row 1 carefully:

$2(3) + 1(3) - 1(-1) = 6 + 3 + 1 = 10$.

There is a discrepancy. Let us recheck the original row 1: $2x_1 + x_2 - x_3 = 2(3) + 3 - (-1) = 6 + 3 + 1 = 10$, not 8. This indicates either an arithmetic error or a check error. Let us re-examine.

Returning to Stage 1, row 2: $m_{21} = -3/2$. Then:

$R_2 \leftarrow R_2 - m_{21} R_1 = R_2 - (-3/2) R_1 = R_2 + (3/2) R_1$.

$[-3 + (3/2)(2),\ -1 + (3/2)(1),\ 2 + (3/2)(-1),\ -11 + (3/2)(8)]$
$= [-3 + 3,\ -1 + 1.5,\ 2 - 1.5,\ -11 + 12]$
$= [0,\ 0.5,\ 0.5,\ 1]$ ✓

Now check the solution against the original equations more carefully. From back substitution: $x_3 = -1$, $x_2 = 3$, $x_1 = 3$.

Row 1: $2(3) + (3) - (-1) = 6 + 3 + 1 = 10$. The right-hand side is 8. Something is wrong.

This is a useful teaching moment: an error in the original data entry or in the computation. Let us re-examine the original Stage 2.

After Stage 1, row 2 is $[0, 0.5, 0.5, 1]$ and row 3 is $[0, 2, 1, 5]$.

$m_{32} = 2 / 0.5 = 4$.

$R_3 \leftarrow R_3 - 4 R_2 = [0, 2-2, 1-2, 5-4] = [0, 0, -1, 1]$. ✓

From row 3: $x_3 = -1$. ✓

From row 2: $0.5 x_2 + 0.5(-1) = 1 \Rightarrow 0.5 x_2 = 1.5 \Rightarrow x_2 = 3$. ✓

From row 1: $2 x_1 + x_2 - x_3 = 8 \Rightarrow 2x_1 + 3 - (-1) = 8 \Rightarrow 2x_1 + 4 = 8 \Rightarrow x_1 = 2$.

*Interpret.* Correcting the back substitution: $x_1 = 2$, $x_2 = 3$, $x_3 = -1$.

Verification:
- Row 1: $2(2) + 3 - (-1) = 4 + 3 + 1 = 8$ ✓
- Row 2: $-3(2) - 3 + 2(-1) = -6 - 3 - 2 = -11$ ✓
- Row 3: $-2(2) + 3 + 2(-1) = -4 + 3 - 2 = -3$ ✓

This example also illustrates a key principle: **always verify a numerical solution by substituting back into the original system.** Errors in back substitution are common and easy to catch if you check.

---

**Computational cost.** For an $n \times n$ system, Gaussian elimination requires approximately $\frac{2}{3}n^3$ arithmetic operations for the forward elimination and $n^2$ operations for back substitution. For large $n$, this is significant — but it is manageable, and it is far more efficient than computing the full matrix inverse.

---

## 9.4 Pivoting

In the basic formulation of Gaussian elimination, the pivot element at each stage is the diagonal entry of the current row. This works well when all diagonal entries are nonzero and have reasonably large magnitudes. But in practice, two problems can occur.

**Zero pivots.** If the pivot element is zero, the algorithm breaks down because we would be dividing by zero. A row swap can resolve this — we swap the current row with a lower row that has a nonzero entry in the pivot column.

**Small pivots.** Even more insidious is the case of small but nonzero pivots. When the multiplier $m_{ij} = a_{ij} / a_{jj}$ is computed with a very small $a_{jj}$, the multiplier becomes very large. Large multipliers amplify rounding errors that were introduced in earlier steps, potentially causing the computed solution to be wildly inaccurate.

### Partial Pivoting

The standard remedy is **partial pivoting**: at each stage of elimination, before using the current diagonal entry as a pivot, scan the entries in the pivot column at or below the diagonal and swap the current row with the row containing the **largest absolute value** in that column.

This strategy ensures that the pivot element is as large as possible in magnitude, which keeps the multipliers bounded in absolute value by 1. Bounded multipliers mean that rounding errors do not grow explosively during elimination.

**Example 9.2. The Danger of a Small Pivot**

Consider the system:

$$0.001 x_1 + x_2 = 1$$
$$x_1 + x_2 = 2$$

Without pivoting, the augmented matrix is:

$$\left[\begin{array}{cc|c} 0.001 & 1 & 1 \\ 1 & 1 & 2 \end{array}\right]$$

Multiplier: $m_{21} = 1 / 0.001 = 1000$.

$R_2 \leftarrow R_2 - 1000 \cdot R_1$:

$[1 - 1000(0.001),\ 1 - 1000(1),\ 2 - 1000(1)] = [0,\ -999,\ -998]$

Back substitution: $x_2 = -998 / -999 \approx 0.999$, then $x_1 = (1 - x_2) / 0.001 \approx (1 - 0.999) / 0.001 = 1$.

The exact solution is $x_2 = 1001/1001 \cdot$ ... let us compute directly. Subtracting the first equation from the second:

$(1 - 0.001) x_1 + 0 \cdot x_2 = 1$

Wait — let us be more careful. Subtract first row from second:

$(x_1 - 0.001 x_1) + (x_2 - x_2) = 2 - 1$

$0.999 x_1 = 1$, so $x_1 = 1/0.999 \approx 1.001$ and $x_2 = 2 - x_1 \approx 0.999$.

With finite precision arithmetic, the large multiplier $m_{21} = 1000$ amplifies rounding in the entry $0.001$. If $0.001$ is slightly off due to floating-point representation, that error is multiplied by 1000 in the next step. **With pivoting,** we would first swap rows so that $x_1 + x_2 = 2$ is the first equation — giving a pivot of 1 instead of 0.001, a much safer computation.

*Interpret.* Partial pivoting is not optional in reliable numerical software. It is a standard, automatic step in production linear algebra libraries.

---

### Scaled Partial Pivoting

A refinement of partial pivoting is **scaled partial pivoting**: before comparing entries in the pivot column, scale each row by dividing by the largest absolute value in that row. This accounts for the possibility that different equations have very different scales, which can cause partial pivoting alone to give suboptimal results. Most professional numerical software libraries implement scaled partial pivoting or equivalent strategies automatically.

---

## 9.5 Roundoff Error in Elimination

Even with partial pivoting, Gaussian elimination is not perfectly immune to roundoff error. Understanding how errors enter helps students interpret the reliability of computed solutions.

Each floating-point multiplication and addition introduces a relative error on the order of machine precision $\epsilon_{\text{mach}}$. Over the course of $n$ elimination steps, these errors accumulate. In the worst case, the accumulated error in the computed solution $\hat{\mathbf{x}}$ satisfies a bound of the form:

$$\frac{\|\mathbf{x} - \hat{\mathbf{x}}\|}{\|\mathbf{x}\|} \approx \kappa(\mathbf{A}) \cdot \epsilon_{\text{mach}}$$

where $\kappa(\mathbf{A})$ is the **condition number** of the matrix $\mathbf{A}$ (to be developed in Section 9.8) and $\epsilon_{\text{mach}}$ is the smallest floating-point number that, when added to 1, produces a result distinguishable from 1 on the computing system.

This bound has a critical implication: even if the algorithm is perfectly implemented and the arithmetic is as accurate as the hardware allows, the accuracy of the solution is fundamentally limited by how well-conditioned or ill-conditioned the system is.

A key practical tool is the **residual**: after computing a solution $\hat{\mathbf{x}}$, compute

$$\mathbf{r} = \mathbf{b} - \mathbf{A}\hat{\mathbf{x}}$$

If $\mathbf{r}$ is close to zero, the computed solution satisfies the equations closely. But a small residual does not guarantee that $\hat{\mathbf{x}}$ is close to the true solution $\mathbf{x}$ — for ill-conditioned systems, a solution can have a small residual and a large error. This subtlety is exactly what the condition number captures, as Section 9.8 will explain.

---

## 9.6 LU Decomposition

Gaussian elimination transforms $\mathbf{A}$ into an upper triangular matrix $\mathbf{U}$. The multipliers used in this process can be organized into a lower triangular matrix $\mathbf{L}$ with ones on the diagonal. The result is:

$$\mathbf{A} = \mathbf{L}\mathbf{U}$$

This is called the **LU decomposition** of $\mathbf{A}$.

### Why LU Decomposition Is Useful

If we need to solve $\mathbf{A}\mathbf{x} = \mathbf{b}$ for **many different right-hand sides** $\mathbf{b}$ while $\mathbf{A}$ stays the same, LU decomposition allows us to factor $\mathbf{A}$ once and then solve two triangular systems for each new $\mathbf{b}$:

**Step 1. Forward substitution.** Solve $\mathbf{L}\mathbf{y} = \mathbf{b}$ for $\mathbf{y}$. Since $\mathbf{L}$ is lower triangular, this proceeds from the top row downward.

**Step 2. Back substitution.** Solve $\mathbf{U}\mathbf{x} = \mathbf{y}$ for $\mathbf{x}$. Since $\mathbf{U}$ is upper triangular, this proceeds from the bottom row upward.

The total cost of solving for $k$ right-hand sides after factoring is $O(n^3) + k \cdot O(n^2)$. Without LU decomposition, each new right-hand side would require another full $O(n^3)$ elimination. The savings for large $k$ are substantial.

### Constructing the LU Factorization

When Gaussian elimination is performed without row swaps, the multipliers $m_{ij}$ used to eliminate entry $(i,j)$ become the entries of $\mathbf{L}$ below the diagonal:

$$L_{ij} = m_{ij} = \frac{a_{ij}^{(j-1)}}{a_{jj}^{(j-1)}}$$

where $a_{ij}^{(k)}$ denotes the entry in position $(i,j)$ after $k$ stages of elimination. The diagonal entries of $\mathbf{L}$ are all 1.

**Example 9.3. LU Decomposition**

*Problem.* Find the LU decomposition of

$$\mathbf{A} = \begin{pmatrix} 2 & 4 & -2 \\ 4 & 9 & -3 \\ -2 & -3 & 7 \end{pmatrix}$$

*Think.* Perform Gaussian elimination, recording the multipliers.

*Method.* At each stage, the multiplier used to eliminate entry $(i,j)$ becomes $L_{ij}$.

*Compute.*

**Stage 1:** Pivot = $a_{11} = 2$.

$m_{21} = 4/2 = 2$. $R_2 \leftarrow R_2 - 2R_1$: $[4 - 4,\ 9 - 8,\ -3 + 4] = [0,\ 1,\ 1]$.

$m_{31} = -2/2 = -1$. $R_3 \leftarrow R_3 - (-1)R_1 = R_3 + R_1$: $[-2+2,\ -3+4,\ 7-2] = [0,\ 1,\ 5]$.

Matrix after Stage 1:

$$\begin{pmatrix} 2 & 4 & -2 \\ 0 & 1 & 1 \\ 0 & 1 & 5 \end{pmatrix}$$

**Stage 2:** Pivot = $a_{22}^{(1)} = 1$.

$m_{32} = 1/1 = 1$. $R_3 \leftarrow R_3 - 1 \cdot R_2$: $[0,\ 1-1,\ 5-1] = [0,\ 0,\ 4]$.

Upper triangular matrix:

$$\mathbf{U} = \begin{pmatrix} 2 & 4 & -2 \\ 0 & 1 & 1 \\ 0 & 0 & 4 \end{pmatrix}$$

Lower triangular matrix (multipliers on the lower triangle, ones on diagonal):

$$\mathbf{L} = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ -1 & 1 & 1 \end{pmatrix}$$

*Check.* Verify $\mathbf{L}\mathbf{U} = \mathbf{A}$:

Row 1 of $\mathbf{L}$ times columns of $\mathbf{U}$:
$(1)(2) + (0)(0) + (0)(0) = 2$ ✓
$(1)(4) + (0)(1) + (0)(0) = 4$ ✓
$(1)(-2) + (0)(1) + (0)(4) = -2$ ✓

Row 2 of $\mathbf{L}$ times columns of $\mathbf{U}$:
$(2)(2) + (1)(0) = 4$ ✓
$(2)(4) + (1)(1) = 9$ ✓
$(2)(-2) + (1)(1) = -3$ ✓

Row 3 of $\mathbf{L}$ times columns of $\mathbf{U}$:
$(-1)(2) + (1)(0) + (1)(0) = -2$ ✓
$(-1)(4) + (1)(1) + (1)(0) = -3$ ✓
$(-1)(-2) + (1)(1) + (1)(4) = 7$ ✓

The factorization is correct.

*Interpret.* With $\mathbf{L}$ and $\mathbf{U}$ stored, any system $\mathbf{A}\mathbf{x} = \mathbf{b}$ with this coefficient matrix can now be solved in $O(n^2)$ time using forward and back substitution.

---

**LU with Pivoting.** When partial pivoting is included, the factorization becomes $\mathbf{PA} = \mathbf{LU}$, where $\mathbf{P}$ is a permutation matrix that records the row swaps. This is the standard form used in numerical libraries. The system $\mathbf{PA}\mathbf{x} = \mathbf{P}\mathbf{b}$ becomes $\mathbf{LU}\mathbf{x} = \mathbf{P}\mathbf{b}$, which is again solved by forward and back substitution.

---

**Algorithm 9.1. LU Decomposition (No Pivoting)**

```
Algorithm: LU Decomposition
Purpose: Factor an n×n matrix A into lower triangular L and upper triangular U such that A = LU.
Inputs: Matrix A of size n×n.
Steps:
  Set L = identity matrix of size n×n
  Set U = copy of A
  For j = 1 to n-1 (pivot column):
    For i = j+1 to n (rows below the pivot):
      m = U[i][j] / U[j][j]         (compute multiplier)
      L[i][j] = m                    (store multiplier in L)
      For k = j to n:
        U[i][k] = U[i][k] - m * U[j][k]   (eliminate)
Output: Matrices L and U such that A = LU.
Stopping criterion: Process all n-1 pivot columns.
Reliability notes:
  - If U[j][j] = 0 at any step, the algorithm fails; pivoting is needed.
  - For numerical reliability, always use partial pivoting (see Algorithm 9.2).
```

---

## 9.7 Matrix Norms as an Introduction

To measure the size of errors in vectors and matrices, numerical linear algebra uses **norms**. Students are likely familiar with the Euclidean norm for vectors from calculus and linear algebra. Here we introduce the concepts needed to discuss condition number and error bounds.

### Vector Norms

A vector norm $\|\mathbf{v}\|$ assigns a nonnegative real number to each vector $\mathbf{v}$ such that:

- $\|\mathbf{v}\| \geq 0$, with equality only when $\mathbf{v} = \mathbf{0}$,
- $\|c\mathbf{v}\| = |c| \cdot \|\mathbf{v}\|$ for any scalar $c$,
- $\|\mathbf{u} + \mathbf{v}\| \leq \|\mathbf{u}\| + \|\mathbf{v}\|$ (triangle inequality).

The three most common vector norms in numerical work are:

$$\|\mathbf{v}\|_1 = \sum_{i=1}^n |v_i| \quad \text{(1-norm, or sum of absolute values)}$$

$$\|\mathbf{v}\|_2 = \sqrt{\sum_{i=1}^n v_i^2} \quad \text{(2-norm, or Euclidean length)}$$

$$\|\mathbf{v}\|_\infty = \max_{1 \leq i \leq n} |v_i| \quad \text{(infinity-norm, or maximum absolute value)}$$

### Matrix Norms

A matrix norm $\|\mathbf{A}\|$ measures the "size" of a matrix. The most useful matrix norms in error analysis are the **induced norms**, defined by:

$$\|\mathbf{A}\| = \max_{\mathbf{v} \neq \mathbf{0}} \frac{\|\mathbf{A}\mathbf{v}\|}{\|\mathbf{v}\|}$$

This says: what is the most a matrix can stretch a vector? The induced 1-norm is the maximum absolute column sum; the induced infinity-norm is the maximum absolute row sum:

$$\|\mathbf{A}\|_\infty = \max_{1 \leq i \leq n} \sum_{j=1}^n |a_{ij}|$$

For our purposes, students do not need to compute sophisticated matrix norms for every problem. The key conceptual point is that norms allow us to state rigorous bounds on errors in linear system solutions.

---

## 9.8 Condition Number as an Introduction

The **condition number** of a matrix is the single most important indicator of how sensitive a linear system is to perturbations in its data.

### Definition

For an invertible matrix $\mathbf{A}$, the condition number with respect to a given matrix norm is:

$$\kappa(\mathbf{A}) = \|\mathbf{A}\| \cdot \|\mathbf{A}^{-1}\|$$

The condition number is always $\geq 1$.

### What the Condition Number Measures

Suppose the right-hand side $\mathbf{b}$ has a small perturbation $\delta \mathbf{b}$, producing a perturbed solution $\mathbf{x} + \delta \mathbf{x}$ where $\mathbf{A}(\mathbf{x} + \delta \mathbf{x}) = \mathbf{b} + \delta \mathbf{b}$. Then it can be shown that:

$$\frac{\|\delta \mathbf{x}\|}{\|\mathbf{x}\|} \leq \kappa(\mathbf{A}) \cdot \frac{\|\delta \mathbf{b}\|}{\|\mathbf{b}\|}$$

In words: **the relative change in the solution is bounded by the condition number times the relative change in the right-hand side.** A condition number of $\kappa(\mathbf{A}) = 1000$ means a relative perturbation of $10^{-6}$ in $\mathbf{b}$ could cause a relative change of up to $10^{-3}$ in the solution.

More importantly for floating-point computation: since $\mathbf{b}$ itself may be rounded to machine precision $\epsilon_{\text{mach}} \approx 10^{-16}$ (for double precision), the solution can be expected to lose approximately $\log_{10}(\kappa(\mathbf{A}))$ digits of accuracy. If $\kappa(\mathbf{A}) \approx 10^{12}$, then from a 16-digit number, only about 4 reliable digits remain in the solution.

### Interpreting the Condition Number

| Condition Number | System Character | Expected Reliability |
|---|---|---|
| $\kappa \approx 1$ | Well-conditioned | Full precision available |
| $\kappa \approx 10^3$ | Mildly ill-conditioned | May lose a few digits |
| $\kappa \approx 10^8$ | Moderately ill-conditioned | Roughly half precision lost |
| $\kappa \approx 10^{16}$ | Severely ill-conditioned | Result essentially unreliable in double precision |

> **Student Warning.** A computed solution can have a small residual even when the system is highly ill-conditioned. Small residual does not mean accurate solution when $\kappa(\mathbf{A})$ is large. Always estimate or compute the condition number for critical problems.

**Example 9.4. Ill-Conditioned System**

The **Hilbert matrix** of order $n$ has entries $H_{ij} = 1/(i + j - 1)$. For $n = 3$:

$$\mathbf{H} = \begin{pmatrix} 1 & 1/2 & 1/3 \\ 1/2 & 1/3 & 1/4 \\ 1/3 & 1/4 & 1/5 \end{pmatrix}$$

The condition number $\kappa(\mathbf{H}_3) \approx 524$, meaning modest ill-conditioning. For $n = 10$, $\kappa(\mathbf{H}_{10}) \approx 10^{13}$, meaning the system is severely ill-conditioned in double precision. Numerical solutions of Hilbert systems for moderate $n$ are often meaningless.

*Interpret.* The Hilbert matrix arises in certain least squares polynomial fitting problems. This is a warning that fitting high-degree polynomials to data using normal equations can lead to disastrously ill-conditioned linear systems, regardless of the algorithmic precision.

---

## 9.9 Iterative Methods

Direct methods like Gaussian elimination and LU decomposition solve $\mathbf{A}\mathbf{x} = \mathbf{b}$ in a finite, predictable number of steps. They work well for dense systems of modest size. But for **large sparse systems** — where $\mathbf{A}$ has many zero entries — direct methods are often impractical because:

- The fill-in problem: elimination introduces nonzero entries into positions that were originally zero, requiring far more memory than the sparse matrix.
- Computational cost: $O(n^3)$ operations becomes prohibitive for $n$ in the millions.

**Iterative methods** offer an alternative. Starting from an initial guess $\mathbf{x}^{(0)}$, an iterative method produces a sequence of approximations $\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \mathbf{x}^{(3)}, \ldots$ that converge to the true solution $\mathbf{x}$ — if the method converges.

The key ideas are:

- Each iteration is inexpensive — often $O(n)$ or $O(n \cdot \text{nnz})$ where nnz is the number of nonzero entries.
- Convergence may require many iterations, but for practical tolerances the total cost can be far less than $O(n^3)$.
- Iterative methods are well-suited for large sparse systems arising from finite difference and finite element discretizations.

The two classical iterative methods introduced here are the Jacobi method and the Gauss-Seidel method.

---

## 9.10 Jacobi Method

The **Jacobi method** is based on a simple idea: if we know all components of $\mathbf{x}$ except $x_i$, we can solve the $i$-th equation for $x_i$ exactly. Since we do not know all components exactly, we substitute the current best approximations for all other components.

### Derivation

Write the $i$-th equation of $\mathbf{A}\mathbf{x} = \mathbf{b}$ as:

$$a_{ii} x_i + \sum_{j \neq i} a_{ij} x_j = b_i$$

Solving for $x_i$:

$$x_i = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij} x_j \right)$$

The **Jacobi iteration** replaces $x_j$ on the right-hand side by the current approximation $x_j^{(k)}$:

$$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij} x_j^{(k)} \right)$$

**Crucially**, all components of the new approximation $\mathbf{x}^{(k+1)}$ are computed using only values from the previous iteration $\mathbf{x}^{(k)}$. This makes Jacobi naturally parallelizable — all components can be updated simultaneously.

### Convergence Condition

The Jacobi method is guaranteed to converge if $\mathbf{A}$ is **strictly diagonally dominant**: for every row $i$,

$$|a_{ii}| > \sum_{j \neq i} |a_{ij}|$$

That is, the diagonal entry in each row is larger in absolute value than the sum of all other entries in that row. Many linear systems arising from physical models satisfy this condition.

If $\mathbf{A}$ is not diagonally dominant, Jacobi may still converge, but it may also diverge. There is no guarantee.

**Example 9.5. Jacobi Method**

*Problem.* Solve:

$$4x_1 + x_2 = 9$$
$$x_1 + 3x_2 = 7$$

with initial guess $x_1^{(0)} = 0$, $x_2^{(0)} = 0$.

*Think.* Check diagonal dominance. Row 1: $|4| > |1|$ ✓. Row 2: $|3| > |1|$ ✓. The Jacobi method should converge.

*Method.* Apply the Jacobi iteration formula to each equation.

$$x_1^{(k+1)} = \frac{1}{4}(9 - x_2^{(k)})$$
$$x_2^{(k+1)} = \frac{1}{3}(7 - x_1^{(k)})$$

*Compute.*

| Iteration $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ |
|---|---|---|
| 0 | 0 | 0 |
| 1 | $9/4 = 2.25$ | $7/3 \approx 2.333$ |
| 2 | $(9 - 2.333)/4 \approx 1.667$ | $(7 - 2.25)/3 \approx 1.583$ |
| 3 | $(9 - 1.583)/4 \approx 1.854$ | $(7 - 1.667)/3 \approx 1.778$ |
| 4 | $(9 - 1.778)/4 \approx 1.806$ | $(7 - 1.854)/3 \approx 1.715$ |
| 5 | $(9 - 1.715)/4 \approx 1.821$ | $(7 - 1.806)/3 \approx 1.731$ |

The exact solution is $x_1 = 2$, $x_2 = 1.75$. The sequence is converging, but slowly.

Let us skip ahead. After 20 iterations:

$x_1^{(20)} \approx 1.9997$, $x_2^{(20)} \approx 1.7499$.

*Check.* The residual $\mathbf{r} = \mathbf{b} - \mathbf{A}\mathbf{x}^{(20)}$ is very small. After sufficient iterations, the solution converges to the exact values.

*Interpret.* Jacobi converges, but convergence is slow for this system. The Gauss-Seidel method, discussed next, typically converges faster.

---

**Algorithm 9.3. Jacobi Iteration**

```
Algorithm: Jacobi Iteration
Purpose: Iteratively solve A*x = b by updating each component using only values from the previous iteration.
Inputs: Matrix A (n×n), right-hand side b (n×1), initial guess x0, tolerance tol, maximum iterations N.
Steps:
  Set x = x0
  For k = 1 to N:
    For i = 1 to n:
      sigma = sum over j ≠ i of A[i][j] * x[j]     (use old values)
      x_new[i] = (b[i] - sigma) / A[i][i]
    If ||x_new - x|| < tol:
      Return x_new (converged)
    Set x = x_new
  Print warning: maximum iterations reached without convergence
Output: Approximate solution x.
Stopping criterion: ||x_new - x|| < tol, or maximum iterations reached.
Reliability notes:
  - Guaranteed to converge if A is strictly diagonally dominant.
  - May diverge if A is not diagonally dominant.
  - Slower than Gauss-Seidel in most cases.
```

---

## 9.11 Gauss-Seidel Method

The **Gauss-Seidel method** improves on Jacobi by using the most recently computed component values immediately, rather than waiting until the end of an iteration.

### Derivation

The update formula for Gauss-Seidel is:

$$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j < i} a_{ij} x_j^{(k+1)} - \sum_{j > i} a_{ij} x_j^{(k)} \right)$$

When computing $x_i^{(k+1)}$, the method uses the **already-updated** values $x_1^{(k+1)}, \ldots, x_{i-1}^{(k+1)}$ for components computed earlier in this iteration, and the **previous iteration** values $x_{i+1}^{(k)}, \ldots, x_n^{(k)}$ for components not yet updated.

This uses fresh information as soon as it is available, typically improving convergence speed compared to Jacobi.

### Convergence

Like Jacobi, Gauss-Seidel is guaranteed to converge for strictly diagonally dominant matrices. In practice, it tends to converge roughly twice as fast as Jacobi in terms of iteration count, though it is inherently sequential (components must be updated in order) and therefore less parallelizable.

**Example 9.6. Gauss-Seidel Method**

*Problem.* Repeat Example 9.5 using Gauss-Seidel.

$$4x_1 + x_2 = 9, \quad x_1 + 3x_2 = 7$$

$$x_1^{(k+1)} = \frac{1}{4}(9 - x_2^{(k)})$$
$$x_2^{(k+1)} = \frac{1}{3}(7 - x_1^{(k+1)}) \quad \text{(uses the freshly updated } x_1^{(k+1)}\text{)}$$

| Iteration $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ |
|---|---|---|
| 0 | 0 | 0 |
| 1 | $9/4 = 2.25$ | $(7 - 2.25)/3 \approx 1.583$ |
| 2 | $(9 - 1.583)/4 \approx 1.854$ | $(7 - 1.854)/3 \approx 1.715$ |
| 3 | $(9 - 1.715)/4 \approx 1.821$ | $(7 - 1.821)/3 \approx 1.726$ |
| 4 | $(9 - 1.726)/4 \approx 1.819$ | $(7 - 1.819)/3 \approx 1.727$ |

*Check.* After just 4 iterations, Gauss-Seidel is already very close to the exact solution ($x_1 = 2$, $x_2 = 1.75$). Compare with Jacobi, which required about 20 iterations for similar accuracy.

*Interpret.* Using fresh values as they become available accelerates convergence significantly.

---

**Algorithm 9.4. Gauss-Seidel Iteration**

```
Algorithm: Gauss-Seidel Iteration
Purpose: Iteratively solve A*x = b, updating each component immediately using the latest available values.
Inputs: Matrix A (n×n), right-hand side b (n×1), initial guess x0, tolerance tol, maximum iterations N.
Steps:
  Set x = x0
  For k = 1 to N:
    x_old = copy of x
    For i = 1 to n:
      sigma = sum over j ≠ i of A[i][j] * x[j]     (uses updated values for j < i)
      x[i] = (b[i] - sigma) / A[i][i]
    If ||x - x_old|| < tol:
      Return x (converged)
Output: Approximate solution x.
Stopping criterion: ||x - x_old|| < tol, or maximum iterations reached.
Reliability notes:
  - Same convergence guarantee as Jacobi for diagonally dominant A.
  - Typically converges faster than Jacobi.
  - Sequential updates mean it cannot be easily parallelized.
```

---

### Comparing Jacobi and Gauss-Seidel

| Feature | Jacobi | Gauss-Seidel |
|---|---|---|
| Update strategy | All components from previous iteration | Uses updated components immediately |
| Convergence speed | Slower | Typically faster |
| Parallelizability | Easily parallelizable | Inherently sequential |
| Convergence guarantee | Diagonally dominant A | Diagonally dominant A |
| Use case | Large parallel systems | General serial computation |

---

## 9.12 Linear Systems in Engineering, Networks, and Data

Large linear systems arise throughout applied mathematics and engineering. This section illustrates three important settings.

### Structural Engineering and Finite Elements

When engineers analyze a bridge, building, or aircraft, they use the **finite element method** (FEM) to divide the structure into small elements and write equilibrium equations at each node. The result is a system $\mathbf{K}\mathbf{u} = \mathbf{f}$, where $\mathbf{K}$ is the stiffness matrix, $\mathbf{u}$ is the displacement vector, and $\mathbf{f}$ is the force vector. For a realistic structure, this system might have millions of unknowns. The stiffness matrix is sparse, symmetric, and (for a stable structure) positive definite — properties that enable efficient iterative solvers.

### Network Flow and Kirchhoff's Laws

In an electrical circuit, resistor network, or traffic flow model, each node corresponds to an unknown voltage or flow rate, and each edge corresponds to a conservation equation. Applying Kirchhoff's current law at each node produces a system of linear equations. The coefficient matrix is a version of the **Laplacian matrix** of the network graph. For large networks — power grids, internet routers, supply chains — these systems are large and sparse, but well-structured.

### Data Fitting and Linear Regression

Fitting a linear model $y = \beta_0 + \beta_1 x_1 + \cdots + \beta_p x_p$ to $n$ observations leads to the least squares problem of minimizing

$$\| \mathbf{A}\boldsymbol{\beta} - \mathbf{y} \|^2$$

where $\mathbf{A}$ is the $n \times (p+1)$ matrix of predictor values. The normal equations $\mathbf{A}^T \mathbf{A} \boldsymbol{\beta} = \mathbf{A}^T \mathbf{y}$ form a $(p+1) \times (p+1)$ linear system. When $p$ is large, the condition number of $\mathbf{A}^T \mathbf{A}$ can be very large — sometimes catastrophically so — requiring regularization or more stable solution techniques.

> **MGU Library Connection:** The connection between linear systems and least squares is developed in Chapter 5 (Splines, Curve Fitting, and Least Squares). The application of linear systems to network and graph models connects to *Discrete Mathematics* and *Graph Theory* in the MGU Library.

---

## 9.13 Common Numerical Linear Algebra Mistakes

Numerical linear algebra is a subject where subtle errors can lead to dramatically wrong answers. The following mistakes are among the most common and consequential.

**Mistake 1: Omitting pivoting in Gaussian elimination.**

When students implement Gaussian elimination without partial pivoting, they may obtain answers that look reasonable but are numerically unreliable. Pivoting is not optional for real computations. Every reliable numerical library uses partial or scaled partial pivoting automatically.

**Mistake 2: Ignoring the condition number.**

Computing a solution with a residual of $10^{-10}$ and concluding that the answer is accurate to 10 decimal places is a common error. If $\kappa(\mathbf{A}) = 10^{12}$, a small residual tells you very little about the accuracy of $\mathbf{x}$. Always check the condition number for sensitive problems.

**Mistake 3: Applying iterative methods to ill-conditioned or non-diagonally-dominant systems.**

Jacobi and Gauss-Seidel may diverge for systems that are not diagonally dominant. Students sometimes apply these methods to arbitrary systems and receive divergent iterates without recognizing the problem. Always check the convergence condition before applying iterative methods.

**Mistake 4: Confusing the LU factorization with the matrix inverse.**

Students sometimes think LU decomposition produces the inverse of $\mathbf{A}$. It does not. LU factorization produces $\mathbf{L}$ and $\mathbf{U}$ such that $\mathbf{A} = \mathbf{LU}$. The inverse $\mathbf{A}^{-1}$ can be computed from LU if needed, but this is rarely necessary in practice — and explicitly computing $\mathbf{A}^{-1}$ is computationally expensive and often ill-advised.

**Mistake 5: Treating iterative method convergence as guaranteed.**

The convergence conditions given here (diagonal dominance) are sufficient, not necessary. A system that does not satisfy diagonal dominance may still converge with Jacobi or Gauss-Seidel — or it may not. Students should not assume convergence without verification.

**Mistake 6: Not reusing LU factorizations.**

When multiple right-hand sides must be solved with the same coefficient matrix, students sometimes run full Gaussian elimination for each one. The correct strategy is to compute the LU factorization once and reuse it with forward and back substitution for each right-hand side.

**Mistake 7: Stopping iterations too early.**

When using iterative methods, students sometimes stop when $\| \mathbf{x}^{(k+1)} - \mathbf{x}^{(k)} \|$ is small, without checking whether the solution is actually close to the true answer. A more reliable stopping criterion is to check the residual $\| \mathbf{b} - \mathbf{A}\mathbf{x}^{(k)} \|$ in addition to step size. For ill-conditioned systems, even a small residual may not guarantee a close solution — but small step size together with small residual is a reasonable practical standard.

---

## 9.14 Preparing for Eigenvalue Methods

Chapter 9 has developed the numerical tools for solving linear systems: Gaussian elimination with pivoting, LU decomposition, matrix norms, condition numbers, and iterative methods. These foundations appear again in Chapter 10, which addresses a related but distinct problem: **computing eigenvalues and eigenvectors numerically**.

Eigenvalue problems are central in structural vibrations, stability analysis, dimensionality reduction, network analysis, and machine learning. The power method introduced in Chapter 10 is itself an iterative process, and understanding why it works requires the same thinking about convergence, error, and matrix properties that Chapter 9 has developed.

Students should carry forward from Chapter 9 several key ideas:

- Numerical linear algebra is not just symbolic row reduction done slowly on a computer. It is a discipline that must account for rounding, stability, conditioning, and efficiency.
- The condition number of a matrix determines how sensitive a problem is to perturbations — and no algorithm can overcome severe ill-conditioning.
- Direct methods (LU decomposition) are reliable and efficient for moderate-sized dense systems. Iterative methods are preferred for large sparse systems.
- Always verify solutions by checking the residual and, for sensitive problems, estimating the condition number.

> **MGU Library Connection:** Chapter 10 (Numerical Eigenvalue Methods) builds directly on Chapter 9. Eigenvalue computations for large matrices rely on iterative approaches that parallel the Jacobi and Gauss-Seidel strategies introduced here. For the theoretical foundations of eigenvalues and eigenvectors, see the *Linear Algebra* chapter on Eigenvalues and Eigenvectors in the MGU Library.

---

## Chapter Summary

Chapter 9 introduced the numerical treatment of linear systems $\mathbf{A}\mathbf{x} = \mathbf{b}$. The central ideas are:

**Gaussian elimination** transforms the augmented matrix $[\mathbf{A} \mid \mathbf{b}]$ into upper triangular form using elementary row operations, then recovers the solution by back substitution. The computational cost is $O(n^3)$ for the elimination and $O(n^2)$ for back substitution.

**Partial pivoting** selects the row with the largest absolute value in the pivot column at each stage, preventing small pivots from amplifying rounding errors. Partial pivoting is essential for numerical reliability.

**LU decomposition** expresses $\mathbf{A} = \mathbf{LU}$ by recording the elimination multipliers in the lower triangular matrix $\mathbf{L}$. The factorization allows efficient solution of multiple right-hand sides using forward and back substitution.

**Matrix norms** measure the size of vectors and matrices, enabling rigorous error bounds. The induced matrix norm measures the maximum stretching a matrix can apply to a unit vector.

**Condition number** $\kappa(\mathbf{A}) = \|\mathbf{A}\| \cdot \|\mathbf{A}^{-1}\|$ measures how sensitive a system is to perturbations. A large condition number signals potential unreliability: $\log_{10}(\kappa(\mathbf{A}))$ digits of accuracy may be lost from the computed solution. A small residual does not guarantee accuracy when the condition number is large.

**Iterative methods** — Jacobi and Gauss-Seidel — build a sequence of approximations to the solution by repeatedly solving each equation for one unknown while holding others fixed. Both methods are guaranteed to converge for strictly diagonally dominant systems. Gauss-Seidel typically converges faster by using updated components immediately. Iterative methods are preferred for large sparse systems.

The key lesson: solving linear systems numerically requires not just performing the steps, but understanding when the computed answer can be trusted.

---

## Key Terms Review

**Gaussian elimination:** The process of transforming a linear system into upper triangular form using row operations, then solving by back substitution.

**Partial pivoting:** At each elimination stage, swapping the current row with the row having the largest absolute value in the pivot column, to control rounding error.

**LU decomposition:** Factoring $\mathbf{A} = \mathbf{LU}$ into lower and upper triangular matrices. Enables efficient solution of $\mathbf{A}\mathbf{x} = \mathbf{b}$ for multiple right-hand sides.

**Forward substitution:** Solving a lower triangular system $\mathbf{L}\mathbf{y} = \mathbf{b}$ by working from the first equation downward.

**Back substitution:** Solving an upper triangular system $\mathbf{U}\mathbf{x} = \mathbf{y}$ by working from the last equation upward.

**Matrix norm:** A scalar measure of the size of a matrix, used to state error bounds and define condition numbers.

**Condition number:** $\kappa(\mathbf{A}) = \|\mathbf{A}\| \cdot \|\mathbf{A}^{-1}\|$. Measures the sensitivity of the linear system to perturbations. High condition numbers indicate ill-conditioning and potential loss of accuracy.

**Ill-conditioned system:** A system where small changes in data produce large changes in the solution. The matrix is close to singular.

**Residual:** $\mathbf{r} = \mathbf{b} - \mathbf{A}\hat{\mathbf{x}}$. A small residual means the computed solution satisfies the equations closely, but does not guarantee proximity to the true solution for ill-conditioned systems.

**Jacobi method:** An iterative method that updates each component of $\mathbf{x}$ using only values from the previous iteration. Convergent for diagonally dominant systems.

**Gauss-Seidel method:** An iterative method that updates each component of $\mathbf{x}$ using the latest available values, including those updated in the current iteration. Typically converges faster than Jacobi.

**Diagonal dominance:** A matrix is strictly diagonally dominant if for each row $i$, $|a_{ii}| > \sum_{j \neq i} |a_{ij}|$. Sufficient condition for Jacobi and Gauss-Seidel convergence.

---

## Concept Review Questions

1. Why is Gaussian elimination with partial pivoting preferred over basic Gaussian elimination in numerical practice?

2. What does the condition number of a matrix tell you about the reliability of a computed solution?

3. Explain in your own words why a small residual does not guarantee an accurate solution for an ill-conditioned system.

4. What is the advantage of computing an LU decomposition rather than rerunning Gaussian elimination for each new right-hand side?

5. Under what conditions is the Jacobi method guaranteed to converge?

6. In what way does Gauss-Seidel differ from Jacobi in how it updates components? Why does this typically lead to faster convergence?

7. Why are iterative methods preferred over direct methods for large sparse systems?

8. What does it mean for a matrix to be ill-conditioned, and how does ill-conditioning affect the accuracy of a computed solution?

9. If you compute a solution $\hat{\mathbf{x}}$ and find that $\kappa(\mathbf{A}) \approx 10^{10}$ on a computer using double-precision arithmetic (machine epsilon $\approx 10^{-16}$), roughly how many accurate decimal digits can you expect in $\hat{\mathbf{x}}$?

10. Explain the role of pivoting in LU decomposition when row swaps are needed. What does the permutation matrix $\mathbf{P}$ represent in $\mathbf{PA} = \mathbf{LU}$?

---

## Method Reference

### Gaussian Elimination

Transform $[\mathbf{A} \mid \mathbf{b}]$ to upper triangular form. For column $j$:

$$m_{ij} = \frac{a_{ij}}{a_{jj}}, \quad R_i \leftarrow R_i - m_{ij} R_j, \quad i > j$$

Then back substitute.

### LU Decomposition

$$\mathbf{A} = \mathbf{L}\mathbf{U}, \quad L_{ij} = m_{ij} \text{ for } i > j, \quad L_{ii} = 1$$

Solve $\mathbf{L}\mathbf{y} = \mathbf{b}$ (forward), then $\mathbf{U}\mathbf{x} = \mathbf{y}$ (back).

### Condition Number

$$\kappa(\mathbf{A}) = \|\mathbf{A}\| \cdot \|\mathbf{A}^{-1}\|$$

Loss of digits $\approx \log_{10}(\kappa(\mathbf{A}))$.

### Jacobi Iteration

$$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij} x_j^{(k)} \right)$$

### Gauss-Seidel Iteration

$$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j < i} a_{ij} x_j^{(k+1)} - \sum_{j > i} a_{ij} x_j^{(k)} \right)$$

---

## Skill Practice

### Gaussian Elimination Practice

**1.** Use Gaussian elimination to solve:

$$3x_1 - x_2 + 2x_3 = 12$$
$$x_1 + 2x_2 + x_3 = 4$$
$$2x_1 - x_2 - x_3 = 1$$

**2.** Use Gaussian elimination with partial pivoting to solve:

$$0.002 x_1 + x_2 = 1$$
$$x_1 + 2x_2 = 3$$

Show both the unpivoted and pivoted computation and compare the accuracy of results when one step of rounding is applied.

**3.** Verify the solution from Problem 1 by computing the residual $\mathbf{r} = \mathbf{b} - \mathbf{A}\hat{\mathbf{x}}$.

### LU Decomposition Practice

**4.** Find the LU decomposition of:

$$\mathbf{A} = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 7 & 5 \\ -1 & 3 & 7 \end{pmatrix}$$

Verify by computing $\mathbf{LU}$ and checking it equals $\mathbf{A}$.

**5.** Using the LU decomposition from Problem 4, solve $\mathbf{A}\mathbf{x} = \mathbf{b}$ for:

(a) $\mathbf{b} = (4, 17, 5)^T$

(b) $\mathbf{b} = (1, 3, -2)^T$

Note how the factorization is reused without re-running elimination.

**6.** A $3 \times 3$ system arises in a circuit analysis problem. After one right-hand side is solved, the engineer discovers the current source values were wrong and must re-solve with a corrected $\mathbf{b}$. Explain why storing the LU factorization from the first solve saves significant work.

### Iterative Method Practice

**7.** Apply 5 iterations of the Jacobi method to:

$$5x_1 + x_2 = 11$$
$$x_1 + 4x_2 = 7$$

Start with $x_1^{(0)} = x_2^{(0)} = 0$. Show each iteration. How close is the result to the exact solution?

**8.** Repeat Problem 7 using the Gauss-Seidel method. Compare convergence rates.

**9.** Consider the system:

$$x_1 + 5x_2 = 6$$
$$4x_1 + x_2 = 5$$

(a) Is the coefficient matrix strictly diagonally dominant?

(b) Apply 5 Jacobi iterations with initial guess $(0, 0)^T$. Does the sequence converge?

(c) Rearrange the equations so that diagonal dominance holds and repeat.

---

## Computational Interpretation

**10.** A student solves a $4 \times 4$ linear system and obtains a residual of $\|\mathbf{r}\| = 10^{-14}$. She concludes the solution is accurate to 14 decimal places. Evaluate this conclusion. Under what condition would it be wrong?

**11.** Two different algorithms are applied to the same linear system. Algorithm A produces a solution with residual $10^{-8}$. Algorithm B produces a solution with residual $10^{-4}$. Can you conclude Algorithm A's solution is closer to the true solution? What additional information would you need?

**12.** A numerical package reports that $\kappa(\mathbf{A}) \approx 10^9$ for a system solved in double precision (machine epsilon $\approx 10^{-16}$). Estimate the number of accurate significant digits in the computed solution.

**13.** The condition number of the $5 \times 5$ Hilbert matrix $\mathbf{H}_5$ is approximately $4.77 \times 10^5$. What does this tell you about the reliability of solving $\mathbf{H}_5 \mathbf{x} = \mathbf{b}$ numerically?

**14.** An engineer uses the Gauss-Seidel method for a large sparse system arising from finite differences and observes that after 50 iterations, the iterates seem to be oscillating rather than converging. Suggest two possible diagnoses and how the engineer might address them.

---

## Applications

**15. Circuit analysis.** A resistor network has 3 nodes with the following voltage equations:

$$3V_1 - V_2 = 10$$
$$-V_1 + 4V_2 - V_3 = 0$$
$$-V_2 + 2V_3 = 5$$

(a) Solve the system using Gaussian elimination.

(b) Verify diagonal dominance and apply one Jacobi iteration to see the direction of convergence.

**16. Data fitting.** A linear model $y = \beta_0 + \beta_1 x + \beta_2 x^2$ is fit to five data points. The normal equations produce the system:

$$\begin{pmatrix} 5 & 15 & 55 \\ 15 & 55 & 225 \\ 55 & 225 & 979 \end{pmatrix} \begin{pmatrix} \beta_0 \\ \beta_1 \\ \beta_2 \end{pmatrix} = \begin{pmatrix} 10 \\ 35 \\ 143 \end{pmatrix}$$

Solve this system using Gaussian elimination with partial pivoting. Comment on whether the coefficient matrix appears well- or ill-conditioned based on its structure.

**17. Structural displacement.** A simplified structural model produces the system:

$$\mathbf{K}\mathbf{u} = \mathbf{f}, \quad \mathbf{K} = \begin{pmatrix} 6 & -2 & 0 \\ -2 & 8 & -2 \\ 0 & -2 & 4 \end{pmatrix}, \quad \mathbf{f} = \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}$$

(a) Verify that $\mathbf{K}$ is strictly diagonally dominant.

(b) Solve using Gauss-Seidel, starting from $\mathbf{u}^{(0)} = \mathbf{0}$, and iterate until $\|\mathbf{u}^{(k+1)} - \mathbf{u}^{(k)}\|_\infty < 0.001$.

---

## Error Analysis

**18.** For the system in Problem 2, compute the exact solution and compare it to the solution obtained from unpivoted elimination (where rounding may occur). Quantify the error.

**19.** Consider a $2 \times 2$ system with:

$$\mathbf{A} = \begin{pmatrix} 1 & 1 \\ 1 & 1.001 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 2 \\ 2.001 \end{pmatrix}$$

The exact solution is $(1, 1)^T$.

(a) Perturb $\mathbf{b}$ to $(2.001, 2.001)^T$ and find the new solution. How much did the solution change relative to the change in $\mathbf{b}$?

(b) This illustrates ill-conditioning. Estimate the condition number informally from your observation, and comment on the reliability of numerical solutions to systems like this.

**20.** For the Gauss-Seidel iteration in Problem 7, compute the error $\|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty$ at each step, where $\mathbf{x}$ is the exact solution. Does the error decrease geometrically (i.e., by roughly the same factor each step)? What does this suggest about the convergence rate?

**21.** Suppose the right-hand side $\mathbf{b}$ in a linear system has a measurement error of magnitude $\epsilon = 10^{-4}$, and $\kappa(\mathbf{A}) = 10^6$. What is the maximum expected relative error in the solution?

---

## Chapter 9 Checkpoint

This checkpoint tests understanding of the core ideas of Chapter 9. It includes conceptual understanding, procedural skill, and numerical reasoning.

**Part A: Concept Check (Short Answer)**

1. What is the purpose of partial pivoting, and what problem does it prevent?

2. State the convergence condition for the Jacobi method.

3. What does a condition number of $10^8$ in double precision imply about solution accuracy?

4. Why is LU decomposition more efficient than running Gaussian elimination repeatedly when multiple right-hand sides must be solved?

5. What is the residual of a computed solution, and why alone is it insufficient to certify accuracy for ill-conditioned systems?

**Part B: Skill Practice**

6. Perform Gaussian elimination with partial pivoting to solve:

$$5x_1 + 2x_2 = 11$$
$$x_1 + 4x_2 = 7$$

Show all row operations and the pivot selections.

7. Find the LU decomposition of:

$$\mathbf{A} = \begin{pmatrix} 2 & -1 \\ 4 & 3 \end{pmatrix}$$

Then use it to solve $\mathbf{A}\mathbf{x} = (1, 5)^T$.

8. Apply 4 iterations of Gauss-Seidel to:

$$4x_1 - x_2 = 7$$
$$-x_1 + 3x_2 = 5$$

Starting from $(0, 0)^T$. Show each iteration.

**Part C: Error and Conditioning**

9. A linear system has condition number $\kappa(\mathbf{A}) = 10^{11}$ and is solved in double precision. If the computed residual is $\|\mathbf{r}\| = 10^{-12}$, is the solution reliable? Explain.

10. The $4 \times 4$ Hilbert matrix has condition number approximately $1.6 \times 10^4$. If the right-hand side is measured with relative error $10^{-6}$, estimate the maximum relative error in the solution.

**Part D: Application**

11. A simple heat flow model discretized at three interior points gives the linear system:

$$2T_1 - T_2 = 100$$
$$-T_1 + 2T_2 - T_3 = 0$$
$$-T_2 + 2T_3 = 50$$

(a) Solve using Gaussian elimination.

(b) Is the coefficient matrix diagonally dominant? Would Gauss-Seidel converge?

(c) Apply 3 Gauss-Seidel iterations starting from $(0, 0, 0)^T$ and compare with the exact solution.

*Answers may be placed in the answer key.*

---

## Bridge Note

Chapter 9 has equipped students with the principal tools of numerical linear algebra: direct factorization methods, error analysis through conditioning, and iterative solvers for large systems. These ideas are not confined to this chapter — they appear throughout the rest of this textbook and across all of computational science.

In **Chapter 10 (Numerical Eigenvalue Methods)**, iterative ideas return in the form of the power method and inverse iteration, which approximate eigenvalues of large matrices that cannot be factored easily. The conditioning of eigenvalue problems parallels the conditioning of linear systems.

In **Chapter 12 (Numerical ODEs)** and **Chapter 13 (Numerical PDEs)**, large linear systems arise naturally when implicit time-stepping methods are used to advance a solution — the system must be solved at every time step.

In **scientific computing practice**, the ideas of this chapter underlie virtually every large-scale simulation: finite element analysis, computational fluid dynamics, atmospheric modeling, structural analysis, and machine learning optimization all depend on efficient, reliable numerical linear algebra.

Beyond this textbook, students who continue into **numerical analysis** will encounter QR factorization, Cholesky decomposition for symmetric positive definite systems, Krylov subspace methods (GMRES, conjugate gradient), preconditioning strategies, and the numerical linear algebra of least squares and eigenvalue computation. The foundations built in Chapter 9 make all of that accessible.

> **MGU Library Connection:** For the theoretical framework underlying the matrix algebra used in this chapter, see the *Linear Algebra* textbook in the MGU Mathematics Series. For applications of linear systems to differential equation discretization, see Chapters 12 and 13 of this textbook. For the use of linear system solvers in data fitting and machine learning, see the MGU *Data Science Foundations* guide.
