# Numerical Methods
## MGU Mathematics Series | Library Textbook Edition

---

# Part IV: Linear Systems, Eigenvalues, and Optimization

---

# Chapter 10: Numerical Eigenvalue Methods

---

## Purpose

Chapter 10 introduces numerical methods for approximating eigenvalues and eigenvectors of matrices. Exact symbolic eigenvalue computation becomes impractical or impossible for large matrices, so numerical methods are essential in applications across structural engineering, data science, physics, economics, and network analysis. Students will study the power method, normalization, convergence, inverse iteration, shifted inverse iteration, the QR method as a preview, eigenvalue sensitivity, and real-world applications. The chapter connects to linear algebra concepts students know and shows how those concepts extend into computational practice.

---

## Opening Question

A large social network has millions of users and billions of connections. How would you identify the most influential nodes in that network? One of the most powerful techniques — used by web search engines, recommendation systems, and biological network analysis — relies entirely on computing a single dominant eigenvalue and its corresponding eigenvector.

Now suppose the matrix representing this network is one million by one million. Finding eigenvalues by solving a characteristic polynomial is completely out of the question. Symbolic methods fail. How do numerical mathematicians approach this problem?

The answer is iteration. Rather than solving for all eigenvalues at once, numerical methods create a sequence of vectors that gradually align with the dominant eigenvector. This chapter develops those ideas carefully, beginning with the mathematical meaning of eigenvalues and building through the power method, convergence analysis, and extensions into more sophisticated numerical eigenvalue algorithms.

---

## Why This Chapter Matters

Eigenvalue problems appear throughout science, engineering, and computation. They describe natural frequencies of vibrating structures, stability of equilibrium solutions of differential equations, principal directions in data analysis, ranks of web pages, population dynamics in ecology, energy states in quantum mechanics, and modes of stress in materials science.

In Linear Algebra, students learn to find eigenvalues by computing \(\det(\mathbf{A} - \lambda \mathbf{I}) = 0\) and solving the resulting characteristic polynomial. This works well for small matrices — two-by-two or three-by-three. But for a hundred-by-hundred matrix, the characteristic polynomial has degree one hundred. Computing its roots exactly is neither practical nor numerically stable.

Numerical eigenvalue methods replace exact polynomial root-finding with iterative approximation. They find one eigenvalue at a time, or gradually refine all eigenvalues, in a way that is computationally efficient and numerically reliable for large matrices.

This chapter focuses on the ideas a student of introductory numerical methods needs to understand: what the power method does and why it works, how convergence depends on the ratio of eigenvalues, how inverse iteration finds small eigenvalues, and why the QR method is the modern workhorse for complete eigenvalue computation.

---

## Learning Objectives

By the end of this chapter, students will be able to:

1. Explain what eigenvalues and eigenvectors represent mathematically and geometrically.
2. Identify the dominant eigenvalue of a matrix and explain its significance.
3. Apply the power method to approximate the dominant eigenvalue and eigenvector.
4. Normalize iterates and explain why normalization is necessary.
5. Analyze convergence of the power method and identify when convergence is slow or fails.
6. Describe inverse iteration and explain when it is preferred over the power method.
7. Describe shifted inverse iteration and explain how the shift accelerates convergence.
8. Understand the QR method as a preview of how modern numerical software computes eigenvalues.
9. Discuss eigenvalue sensitivity and the meaning of eigenvalue condition number.
10. Identify applications of eigenvalue computation in stability, vibrations, networks, and data analysis.

---

## Key Terms

- eigenvalue
- eigenvector
- characteristic polynomial
- dominant eigenvalue
- power method
- normalization
- convergence ratio
- inverse iteration
- shifted iteration
- Rayleigh quotient
- QR decomposition
- QR method
- eigenvalue sensitivity
- eigenvalue condition number
- spectral radius
- deflation
- principal component analysis (PCA)
- Google PageRank

---

## 10.1 Why Eigenvalues Matter Numerically

An eigenvalue problem is a question about how a matrix acts on special vectors. For a square matrix \(\mathbf{A}\), a nonzero vector \(\mathbf{v}\) is an eigenvector with eigenvalue \(\lambda\) if

\[
\mathbf{A}\mathbf{v} = \lambda \mathbf{v}.
\]

This equation says that multiplying the matrix \(\mathbf{A}\) by the vector \(\mathbf{v}\) produces a scalar multiple of \(\mathbf{v}\). The direction of \(\mathbf{v}\) is preserved; only its magnitude is scaled by \(\lambda\).

Eigenvalues carry profound meaning across mathematics and its applications. In structural mechanics, they describe the natural resonant frequencies of a bridge or aircraft wing. If an external vibration matches a natural frequency, resonance can cause catastrophic failure — the Tacoma Narrows Bridge collapse in 1940 is a historical example. Engineers must compute eigenvalues to ensure safety.

In differential equations, eigenvalues of the Jacobian matrix at an equilibrium determine whether small perturbations grow or decay, telling us whether the equilibrium is stable or unstable. In data science, eigenvalues of covariance matrices identify the directions of greatest variance in a dataset, which is the foundation of principal component analysis. In network science, the largest eigenvalue of an adjacency matrix encodes the most influential node in the network.

The mathematical problem is clear. The computational challenge is that for large matrices, exact methods are not feasible. A \(1000 \times 1000\) matrix has a characteristic polynomial of degree 1000. Finding its roots symbolically or by any polynomial root-finding method is numerically unstable and computationally ruinous. Numerical eigenvalue methods solve this problem by replacing exact root-finding with controlled iteration.

---

## 10.2 Eigenvalues and Eigenvectors Review

Before developing numerical methods, it is worth reviewing the mathematical definitions precisely.

**Definition.** Let \(\mathbf{A}\) be an \(n \times n\) matrix. A scalar \(\lambda\) is an **eigenvalue** of \(\mathbf{A}\) if there exists a nonzero vector \(\mathbf{v}\) such that

\[
\mathbf{A}\mathbf{v} = \lambda \mathbf{v}.
\]

The vector \(\mathbf{v}\) is called an **eigenvector** corresponding to \(\lambda\).

This equation can be rewritten as

\[
(\mathbf{A} - \lambda \mathbf{I})\mathbf{v} = \mathbf{0}.
\]

For this system to have a nonzero solution \(\mathbf{v}\), the matrix \(\mathbf{A} - \lambda \mathbf{I}\) must be singular, which means its determinant must be zero:

\[
\det(\mathbf{A} - \lambda \mathbf{I}) = 0.
\]

This equation is called the **characteristic equation**. The polynomial

\[
p(\lambda) = \det(\mathbf{A} - \lambda \mathbf{I})
\]

is the **characteristic polynomial** of \(\mathbf{A}\). Its roots are the eigenvalues of \(\mathbf{A}\).

For a \(2 \times 2\) matrix

\[
\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix},
\]

the characteristic polynomial is

\[
p(\lambda) = \lambda^2 - (a + d)\lambda + (ad - bc) = 0.
\]

For a \(3 \times 3\) matrix, the characteristic polynomial has degree three. For an \(n \times n\) matrix, it has degree \(n\). When \(n\) is large — say, \(n = 500\) — computing and then finding the roots of a degree-500 polynomial is not a viable strategy. This is where numerical eigenvalue methods become indispensable.

**A note on multiple eigenvalues.** A matrix may have repeated eigenvalues, and eigenvalues may be complex even if the matrix is real. The numerical methods in this chapter focus on the common case of real matrices with distinct real eigenvalues, with appropriate notes about more general situations.

---

**Example 10.1 — Eigenvalues of a Simple Matrix**

**Problem.** Find the eigenvalues and eigenvectors of

\[
\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}.
\]

**Think.** For a \(2 \times 2\) matrix, we can find eigenvalues exactly using the characteristic polynomial.

**Method.** Compute \(\det(\mathbf{A} - \lambda \mathbf{I}) = 0\).

**Compute.**

\[
\mathbf{A} - \lambda \mathbf{I} = \begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix}.
\]

\[
\det(\mathbf{A} - \lambda \mathbf{I}) = (4 - \lambda)(3 - \lambda) - (1)(2) = \lambda^2 - 7\lambda + 10 = 0.
\]

Factoring: \((\lambda - 5)(\lambda - 2) = 0\), so \(\lambda_1 = 5\) and \(\lambda_2 = 2\).

For \(\lambda_1 = 5\): Solve \((\mathbf{A} - 5\mathbf{I})\mathbf{v} = \mathbf{0}\):

\[
\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0}.
\]

This gives \(-v_1 + v_2 = 0\), so \(v_1 = v_2\). Eigenvector: \(\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\).

For \(\lambda_2 = 2\): Solve \((\mathbf{A} - 2\mathbf{I})\mathbf{v} = \mathbf{0}\):

\[
\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\mathbf{v} = \mathbf{0}.
\]

This gives \(2v_1 + v_2 = 0\), so \(v_2 = -2v_1\). Eigenvector: \(\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}\).

**Check.** Verify \(\mathbf{A}\mathbf{v}_1 = 5\mathbf{v}_1\):

\[
\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix} = 5\begin{pmatrix} 1 \\ 1 \end{pmatrix}. \quad \checkmark
\]

**Interpret.** The matrix \(\mathbf{A}\) stretches vectors in the direction \(\begin{pmatrix}1 \\ 1\end{pmatrix}\) by a factor of 5, and vectors in the direction \(\begin{pmatrix}1 \\ -2\end{pmatrix}\) by a factor of 2. The dominant eigenvalue is 5; it corresponds to the direction of greatest stretching.

---

## 10.3 Dominant Eigenvalues

Among all eigenvalues of a matrix, the one with the largest absolute value is called the **dominant eigenvalue**. It governs the long-run behavior of repeated matrix multiplication.

**Definition.** Let \(\lambda_1, \lambda_2, \ldots, \lambda_n\) be the eigenvalues of \(\mathbf{A}\), ordered so that

\[
|\lambda_1| \geq |\lambda_2| \geq \cdots \geq |\lambda_n|.
\]

If \(|\lambda_1| > |\lambda_2|\), then \(\lambda_1\) is called the **dominant eigenvalue**, and its corresponding eigenvector \(\mathbf{v}_1\) is the **dominant eigenvector**.

The dominant eigenvalue is often the most important eigenvalue in applications:

- In network analysis, the dominant eigenvector of the adjacency matrix identifies the most connected nodes.
- In dynamical systems, the dominant eigenvalue determines whether a system grows, decays, or oscillates over time.
- In data analysis, the dominant eigenvector of a covariance matrix is the direction of greatest variance.
- In structural engineering, the dominant eigenvalue of a stiffness matrix relates to the lowest resonant frequency.

The power method exploits the dominance of \(\lambda_1\) by showing that repeated multiplication by \(\mathbf{A}\) causes any starting vector to align with the dominant eigenvector.

**The spectral radius** of \(\mathbf{A}\) is \(\rho(\mathbf{A}) = \max_i |\lambda_i|\), the magnitude of the dominant eigenvalue.

---

## 10.4 The Power Method

The power method is the fundamental iterative algorithm for finding the dominant eigenvalue. Its logic is elegant and its convergence is driven by a simple ratio.

**The key idea.** Suppose \(\mathbf{A}\) has \(n\) linearly independent eigenvectors \(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\) with corresponding eigenvalues \(\lambda_1, \lambda_2, \ldots, \lambda_n\) where \(|\lambda_1| > |\lambda_2| \geq \cdots \geq |\lambda_n|\).

Any starting vector \(\mathbf{x}^{(0)}\) can be written as a linear combination of eigenvectors:

\[
\mathbf{x}^{(0)} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \cdots + c_n \mathbf{v}_n,
\]

provided \(c_1 \neq 0\) (meaning the starting vector has a nonzero component in the dominant eigenvector direction).

Now multiply repeatedly by \(\mathbf{A}\). Since \(\mathbf{A}\mathbf{v}_i = \lambda_i \mathbf{v}_i\):

\[
\mathbf{A}^k \mathbf{x}^{(0)} = c_1 \lambda_1^k \mathbf{v}_1 + c_2 \lambda_2^k \mathbf{v}_2 + \cdots + c_n \lambda_n^k \mathbf{v}_n.
\]

Factor out \(\lambda_1^k\):

\[
\mathbf{A}^k \mathbf{x}^{(0)} = \lambda_1^k \left[ c_1 \mathbf{v}_1 + c_2 \left(\frac{\lambda_2}{\lambda_1}\right)^k \mathbf{v}_2 + \cdots + c_n \left(\frac{\lambda_n}{\lambda_1}\right)^k \mathbf{v}_n \right].
\]

Because \(|\lambda_1| > |\lambda_i|\) for all \(i > 1\), each ratio \(\left|\frac{\lambda_i}{\lambda_1}\right| < 1\). As \(k \to \infty\), all terms \(\left(\frac{\lambda_i}{\lambda_1}\right)^k \to 0\). Therefore:

\[
\mathbf{A}^k \mathbf{x}^{(0)} \approx \lambda_1^k \cdot c_1 \mathbf{v}_1.
\]

The iterates align with the dominant eigenvector. The dominant eigenvalue can then be extracted as the ratio of corresponding components of consecutive iterates.

**The convergence rate** depends on the ratio \(r = \left|\frac{\lambda_2}{\lambda_1}\right|\). When \(r\) is small, convergence is rapid. When \(r\) is close to 1 (the two largest eigenvalues are nearly equal in magnitude), convergence is very slow.

---

**Algorithm: Power Method**

```
Algorithm: Power Method
Purpose:  Approximate the dominant eigenvalue and eigenvector of A.
Inputs:   n × n matrix A
          Initial vector x (nonzero, chosen arbitrarily or randomly)
          Tolerance tol
          Maximum iterations N
Steps:
  1. Set k = 0.
  2. Normalize: x = x / ||x||   (to prevent overflow)
  3. Repeat:
       a. Compute y = A * x
       b. Find the index p such that |y[p]| is largest (the component with greatest magnitude)
       c. Set lambda = y[p]   (estimated dominant eigenvalue)
       d. Normalize: x_new = y / ||y||
       e. If ||x_new - x|| < tol, stop and return lambda and x_new
       f. Set x = x_new, increment k
  4. If k reaches N without convergence, report failure or continue with best estimate.
Stopping criterion:  ||x_new - x|| < tol (change in eigenvector small)
Output:   Approximate dominant eigenvalue lambda, approximate dominant eigenvector x
Reliability notes:
  - Requires |lambda_1| > |lambda_2| for convergence.
  - Convergence rate ~ |lambda_2 / lambda_1|^k.
  - Fails if c_1 = 0 (starting vector has no component in v_1 direction) — extremely rare in practice with random starts.
  - Fails if two eigenvalues tie in absolute value: |lambda_1| = |lambda_2|.
```

---

**Example 10.2 — Applying the Power Method**

**Problem.** Apply the power method to

\[
\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}
\]

starting from \(\mathbf{x}^{(0)} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}\).

**Think.** We know from Example 10.1 that the eigenvalues are 5 and 2. The dominant eigenvalue is 5, with eigenvector \(\begin{pmatrix}1 \\ 1\end{pmatrix}\). The power method should converge to this. The convergence ratio is \(r = |2/5| = 0.4\), so convergence should be reasonably fast.

**Method.** Multiply \(\mathbf{A}\) by the current vector, then normalize.

**Compute.**

**Iteration 1.** \(\mathbf{y}^{(1)} = \mathbf{A}\mathbf{x}^{(0)} = \begin{pmatrix}4 \\ 2\end{pmatrix}\). The largest component is 4. Eigenvalue estimate: \(\lambda \approx 4\). Normalize: \(\mathbf{x}^{(1)} = \frac{1}{\|\mathbf{y}^{(1)}\|}\mathbf{y}^{(1)} = \frac{1}{\sqrt{20}}\begin{pmatrix}4 \\ 2\end{pmatrix} \approx \begin{pmatrix}0.894 \\ 0.447\end{pmatrix}\).

**Iteration 2.** \(\mathbf{y}^{(2)} = \mathbf{A}\mathbf{x}^{(1)} = \begin{pmatrix}4(0.894)+1(0.447) \\ 2(0.894)+3(0.447)\end{pmatrix} = \begin{pmatrix}4.023 \\ 3.129\end{pmatrix}\). Eigenvalue estimate: \(\lambda \approx 4.47\). Normalize: \(\mathbf{x}^{(2)} \approx \begin{pmatrix}0.789 \\ 0.614\end{pmatrix}\).

**Iteration 3.** \(\mathbf{y}^{(3)} = \mathbf{A}\mathbf{x}^{(2)} \approx \begin{pmatrix}4.770 \\ 4.420\end{pmatrix}\). Eigenvalue estimate: \(\lambda \approx 4.77\). Normalize: \(\mathbf{x}^{(3)} \approx \begin{pmatrix}0.734 \\ 0.679\end{pmatrix}\).

Continuing this process:

| Iteration | Eigenvalue Estimate | \(x_1\) | \(x_2\) |
|-----------|---------------------|---------|---------|
| 0 | — | 1.000 | 0.000 |
| 1 | 4.000 | 0.894 | 0.447 |
| 2 | 4.472 | 0.789 | 0.614 |
| 3 | 4.770 | 0.734 | 0.679 |
| 5 | 4.923 | 0.711 | 0.703 |
| 8 | 4.984 | 0.7075 | 0.7067 |
| 10 | 4.994 | 0.7072 | 0.7070 |

The eigenvalue estimate converges to 5, and the eigenvector converges to \(\frac{1}{\sqrt{2}}\begin{pmatrix}1 \\ 1\end{pmatrix}\) (the normalized form of \(\begin{pmatrix}1 \\ 1\end{pmatrix}\)).

**Check.** The true dominant eigenvalue is 5, and \(\mathbf{v}_1 = \begin{pmatrix}1 \\ 1\end{pmatrix}\). The method converges correctly.

**Interpret.** The power method requires about 10 iterations to achieve four decimal places of accuracy, consistent with the convergence ratio \(r = 0.4\): the error is reduced by a factor of roughly 0.4 each iteration.

---

## 10.5 Normalization

Normalization is not merely a convenience — it is essential for preventing numerical overflow and for extracting eigenvalue estimates from the iteration.

**Why normalize?** Without normalization, the iterates \(\mathbf{A}^k \mathbf{x}^{(0)}\) grow without bound (when \(|\lambda_1| > 1\)) or collapse to zero (when \(|\lambda_1| < 1\)). After just 50 iterations with a dominant eigenvalue of 10, the vector magnitude would be on the order of \(10^{50}\), far beyond what floating-point arithmetic can represent accurately.

**How normalization is performed.** The most common approach normalizes by the infinity norm (the largest absolute component):

\[
\mathbf{x}^{(k+1)} = \frac{\mathbf{A}\mathbf{x}^{(k)}}{\|\mathbf{A}\mathbf{x}^{(k)}\|_\infty}.
\]

Under this normalization, the scaling factor applied at each step converges to the dominant eigenvalue \(\lambda_1\).

Alternatively, one can normalize by the Euclidean norm:

\[
\mathbf{x}^{(k+1)} = \frac{\mathbf{A}\mathbf{x}^{(k)}}{\|\mathbf{A}\mathbf{x}^{(k)}\|_2},
\]

keeping eigenvector iterates as unit vectors.

**Extracting the eigenvalue estimate.** After normalization by the infinity norm, the normalization constant at each step approximates \(\lambda_1\). After normalization by the Euclidean norm, the eigenvalue is estimated using the **Rayleigh quotient**:

\[
\lambda \approx \frac{(\mathbf{x}^{(k)})^T \mathbf{A} \mathbf{x}^{(k)}}{(\mathbf{x}^{(k)})^T \mathbf{x}^{(k)}}.
\]

The Rayleigh quotient gives a very accurate eigenvalue estimate even when the eigenvector approximation is still somewhat rough. It converges faster than the eigenvector itself.

> **Student Note.** The Rayleigh quotient is a numerically efficient and robust way to estimate eigenvalues. When you have a good approximation to an eigenvector, the Rayleigh quotient gives you an even better approximation to the corresponding eigenvalue. This asymmetry — eigenvector approximation leads eigenvalue approximation — is a useful practical fact.

---

## 10.6 Convergence of the Power Method

The convergence of the power method is governed entirely by the ratio of the two largest eigenvalues in absolute value.

**Theorem.** If \(|\lambda_1| > |\lambda_2| \geq \cdots \geq |\lambda_n|\) and the starting vector has a nonzero component in the \(\mathbf{v}_1\) direction, then the error in the eigenvector iterate decreases like

\[
\text{error} \approx C \left|\frac{\lambda_2}{\lambda_1}\right|^k
\]

for some constant \(C\). The eigenvalue estimate converges at twice this rate (because the Rayleigh quotient squares the convergence ratio).

This theorem contains the practical wisdom of the power method:

- If \(|\lambda_2/\lambda_1| = 0.1\), each iteration cuts the error by a factor of 10. Convergence is fast.
- If \(|\lambda_2/\lambda_1| = 0.9\), each iteration cuts the error by only 10 percent. Convergence is slow, requiring dozens or hundreds of iterations.
- If \(|\lambda_2/\lambda_1| = 1\) — two eigenvalues with equal magnitude — the method fails to converge.

**When the power method converges slowly.** If the two largest eigenvalues are nearly equal in magnitude, the power method struggles. Techniques like shifts (discussed in Section 10.8) can dramatically accelerate convergence by making the effective ratio much smaller.

**When the power method fails outright.** Failure modes include:

1. \(|\lambda_1| = |\lambda_2|\): Two eigenvalues tie in absolute value. The iterate oscillates rather than converging.
2. \(c_1 = 0\): The starting vector has no component in the dominant eigenvector direction. In exact arithmetic this is catastrophic, but in floating-point arithmetic the rounding errors almost always introduce a small component, so the method recovers — just slowly.
3. The dominant eigenvalue is complex: Standard real power iteration is not appropriate.

> **Student Warning.** Always check whether your eigenvalue estimate is stabilizing as you iterate. If consecutive estimates are not converging toward a fixed value, suspect one of the failure modes above. Plotting the eigenvalue estimate versus iteration number is an easy diagnostic.

---

## 10.7 Inverse Iteration as an Introduction

The power method finds the dominant eigenvalue — the one with largest absolute value. But many applications require other eigenvalues, particularly the smallest one. **Inverse iteration** solves this problem by transforming the eigenvalue problem.

**The key idea.** If \(\mathbf{A}\mathbf{v} = \lambda \mathbf{v}\), then

\[
\mathbf{A}^{-1}\mathbf{v} = \frac{1}{\lambda}\mathbf{v}.
\]

The eigenvalues of \(\mathbf{A}^{-1}\) are the reciprocals of the eigenvalues of \(\mathbf{A}\). The smallest eigenvalue of \(\mathbf{A}\) (in absolute value) becomes the largest eigenvalue of \(\mathbf{A}^{-1}\).

**Therefore:** Applying the power method to \(\mathbf{A}^{-1}\) finds the eigenvalue of \(\mathbf{A}\) with smallest absolute value.

**Implementation.** Rather than computing \(\mathbf{A}^{-1}\) explicitly (which is expensive and potentially inaccurate), each iteration of inverse iteration solves a linear system:

\[
\mathbf{A}\mathbf{y}^{(k+1)} = \mathbf{x}^{(k)},
\]

then normalizes \(\mathbf{y}^{(k+1)}\) to get \(\mathbf{x}^{(k+1)}\). Solving this linear system at each step (using LU decomposition computed once and stored) is much more efficient than computing \(\mathbf{A}^{-1}\) directly.

```
Algorithm: Inverse Iteration
Purpose:  Approximate the eigenvalue of A with smallest absolute value.
Inputs:   n × n matrix A (nonsingular)
          Initial vector x (nonzero)
          Tolerance tol
Steps:
  1. Compute LU decomposition of A (done once).
  2. Repeat:
       a. Solve A * y = x using stored LU factorization
       b. lambda_inv = component of y with largest magnitude
       c. x_new = y / ||y||
       d. If ||x_new - x|| < tol, stop
       e. Set x = x_new
  3. Return eigenvalue estimate: lambda = 1 / lambda_inv
Output:   Approximate smallest eigenvalue of A, approximate eigenvector.
```

**Convergence.** Inverse iteration converges at rate \(|\lambda_{\text{min}}/\lambda_{\text{second smallest}}|\), which is analogous to the power method but inverted. If the smallest eigenvalue is well-separated from the others, convergence is rapid.

---

## 10.8 Shifted Inverse Iteration as an Introduction

A powerful extension of inverse iteration uses a **shift** to target any eigenvalue, not just the smallest.

**The shift idea.** If \(\mu\) is a real number (the shift), then the matrix \(\mathbf{A} - \mu\mathbf{I}\) has eigenvalues \(\lambda_i - \mu\). If \(\mu\) is chosen close to some eigenvalue \(\lambda_j\), then \(\lambda_j - \mu\) is the smallest eigenvalue (in absolute value) of \(\mathbf{A} - \mu\mathbf{I}\).

Applying inverse iteration to \(\mathbf{A} - \mu\mathbf{I}\) therefore finds the eigenvalue of \(\mathbf{A}\) nearest to \(\mu\).

```
Algorithm: Shifted Inverse Iteration
Purpose:  Approximate the eigenvalue of A nearest to a given shift mu.
Inputs:   n × n matrix A
          Shift mu (estimate of target eigenvalue)
          Initial vector x
          Tolerance tol
Steps:
  1. Compute LU decomposition of (A - mu * I) (done once).
  2. Repeat:
       a. Solve (A - mu * I) * y = x
       b. x_new = y / ||y||
       c. Compute Rayleigh quotient: lambda = x_new^T * A * x_new
       d. If ||x_new - x|| < tol, stop
       e. Set x = x_new
  3. Return eigenvalue estimate lambda and eigenvector x.
```

**Convergence.** The convergence rate of shifted inverse iteration is

\[
\left|\frac{\lambda_j - \mu}{\lambda_{\text{next nearest}} - \mu}\right|.
\]

When \(\mu\) is very close to \(\lambda_j\), the numerator is near zero and convergence becomes extremely rapid — sometimes requiring only a few iterations. This makes shifted inverse iteration extraordinarily powerful when a rough estimate of the target eigenvalue is already known.

> **Student Note.** Shifted inverse iteration is one of the fastest single-eigenvalue methods available. If you already have an approximate eigenvalue — perhaps from the power method or a rough physical estimate — shifted inverse iteration can refine it to high accuracy in just a few steps.

---

## 10.9 The QR Method as a Preview

For computing all eigenvalues of a matrix simultaneously, the modern standard algorithm is the **QR method** (also called QR iteration or QR algorithm). This section introduces the key ideas without full development.

**QR Decomposition Review.** Any matrix \(\mathbf{A}\) can be factored as

\[
\mathbf{A} = \mathbf{Q}\mathbf{R},
\]

where \(\mathbf{Q}\) is an orthogonal matrix (\(\mathbf{Q}^T\mathbf{Q} = \mathbf{I}\)) and \(\mathbf{R}\) is upper triangular. This factorization is called the **QR decomposition**.

**The QR Iteration.** The QR method builds a sequence of matrices:

\[
\mathbf{A}^{(0)} = \mathbf{A}
\]

At each step \(k\):
1. Compute the QR decomposition: \(\mathbf{A}^{(k)} = \mathbf{Q}^{(k)}\mathbf{R}^{(k)}\).
2. Form the next iterate: \(\mathbf{A}^{(k+1)} = \mathbf{R}^{(k)}\mathbf{Q}^{(k)}\) (the factors are reversed).

The key fact is that each \(\mathbf{A}^{(k+1)}\) is similar to \(\mathbf{A}^{(k)}\) (they share the same eigenvalues), but the sequence converges to an upper triangular (or quasi-upper triangular) matrix whose diagonal entries are the eigenvalues of \(\mathbf{A}\).

**Why does this work?** The QR iteration is related to simultaneous power iteration applied to all eigenvectors at once. The orthogonal factors \(\mathbf{Q}^{(k)}\) accumulate the eigenvectors, while the diagonal of \(\mathbf{R}^{(k)}\mathbf{Q}^{(k)}\) converges to the eigenvalues.

**Practical QR methods** include shifts (analogous to shifted inverse iteration) that dramatically accelerate convergence, and preprocessing steps that reduce \(\mathbf{A}\) to simpler form (Hessenberg form) before iteration. The full practical QR algorithm with shifts is the method used in virtually all numerical software (MATLAB, NumPy, LAPACK) when `eig` or similar functions are called.

**This is a preview.** The full development of the QR algorithm, including convergence theory, Householder reductions, and implicit shifts, belongs to a course in numerical linear algebra or numerical analysis. Here, the goal is for students to understand that:

- The QR method is the standard approach for computing all eigenvalues simultaneously.
- It is iterative, producing a sequence of similar matrices converging to triangular form.
- Shifts are essential for rapid convergence.
- The diagonal entries of the converged matrix give all eigenvalues.

---

## 10.10 Eigenvalue Sensitivity

Not all eigenvalue problems are equally well-conditioned. The **sensitivity** of eigenvalues to perturbations in the matrix is a critical practical concern.

**The question.** If the entries of \(\mathbf{A}\) are perturbed by small amounts (as happens due to measurement error, rounding, or data uncertainty), how much do the eigenvalues change?

**A simple bound.** The **Bauer-Fike theorem** states that if \(\mathbf{A}\) is diagonalizable with eigenvector matrix \(\mathbf{V}\) (so \(\mathbf{A} = \mathbf{V}\mathbf{\Lambda}\mathbf{V}^{-1}\)), and \(\mathbf{E}\) is a perturbation, then each eigenvalue \(\hat\lambda\) of \(\mathbf{A} + \mathbf{E}\) satisfies

\[
\min_j |\hat{\lambda} - \lambda_j| \leq \|\mathbf{V}\|_p \|\mathbf{V}^{-1}\|_p \|\mathbf{E}\|_p = \kappa_p(\mathbf{V}) \|\mathbf{E}\|_p,
\]

where \(\kappa_p(\mathbf{V})\) is the condition number of the eigenvector matrix.

**What this means.** When the eigenvectors of \(\mathbf{A}\) are nearly parallel (nearly linearly dependent), the condition number \(\kappa(\mathbf{V})\) is large, and small perturbations in the matrix can cause large changes in the eigenvalues. Such a matrix is called **ill-conditioned for eigenvalue computation**.

For **symmetric matrices**, the eigenvectors are always orthogonal and \(\kappa(\mathbf{V}) = 1\). Eigenvalues of symmetric matrices are therefore always well-conditioned — a fact that makes symmetric eigenvalue problems much more stable than general ones. This is why algorithms for symmetric matrices (like the symmetric QR algorithm or Lanczos iteration) are simpler and more reliable than general eigenvalue algorithms.

**Individual eigenvalue condition numbers.** For a specific eigenvalue \(\lambda_j\) of a diagonalizable matrix, the eigenvalue condition number is

\[
\kappa_j = \frac{1}{|\mathbf{u}_j^T \mathbf{v}_j|},
\]

where \(\mathbf{v}_j\) is the right eigenvector and \(\mathbf{u}_j\) is the left eigenvector (the eigenvector of \(\mathbf{A}^T\) for the same eigenvalue). When right and left eigenvectors are nearly orthogonal, \(\kappa_j\) is large and the eigenvalue is sensitive.

**A practical warning.** Before computing eigenvalues numerically, ask whether the matrix is symmetric, nearly symmetric, or general. A symmetric positive definite matrix arising from a physical problem is likely to have well-conditioned eigenvalues. A general matrix assembled from uncertain data may have poorly conditioned eigenvalues, and reported eigenvalues may not be meaningful to the full claimed precision.

---

**Example 10.3 — Sensitive Eigenvalues**

**Problem.** Consider the matrix

\[
\mathbf{A} = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}.
\]

This matrix has a repeated eigenvalue \(\lambda = 2\) (a defective matrix — only one linearly independent eigenvector). Perturb the lower-left entry by \(\varepsilon\):

\[
\mathbf{A}_\varepsilon = \begin{pmatrix} 2 & 1 \\ \varepsilon & 2 \end{pmatrix}.
\]

**Compute.** The eigenvalues of \(\mathbf{A}_\varepsilon\) are found from:

\[
(2-\lambda)^2 - \varepsilon = 0 \implies \lambda = 2 \pm \sqrt{\varepsilon}.
\]

**Check.** For \(\varepsilon = 0\): both eigenvalues are 2. For \(\varepsilon = 0.0001\): eigenvalues are \(2 \pm 0.01\). A perturbation of size \(10^{-4}\) causes an eigenvalue shift of \(10^{-2}\) — one hundred times larger.

**Interpret.** Near a repeated eigenvalue, eigenvalue sensitivity is extremely high. A tiny perturbation in one matrix entry causes eigenvalue changes of order \(\sqrt{\varepsilon}\), not \(\varepsilon\). This is a warning for any computed eigenvalue problem where repeated or nearly repeated eigenvalues are suspected.

---

## 10.11 Eigenvalues in Stability and Vibrations

One of the most important applications of eigenvalue computation is in the analysis of stability and vibrations of physical systems.

**Linear stability of differential equations.** Consider a system of differential equations

\[
\frac{d\mathbf{x}}{dt} = \mathbf{A}\mathbf{x}.
\]

The general solution is built from terms of the form \(e^{\lambda_i t} \mathbf{v}_i\), where \(\lambda_i\) and \(\mathbf{v}_i\) are the eigenvalues and eigenvectors of \(\mathbf{A}\). The equilibrium \(\mathbf{x} = \mathbf{0}\) is:

- **Stable** if all eigenvalues have negative real parts (all solutions decay to zero).
- **Unstable** if any eigenvalue has positive real part (some solutions grow without bound).
- **Neutrally stable** if eigenvalues are purely imaginary (solutions oscillate without growing or decaying).

Determining stability requires computing or bounding the eigenvalues — specifically, their real parts. This is a fundamental reason eigenvalue computation appears throughout engineering and physics.

**Mechanical vibrations.** For a mechanical system described by

\[
\mathbf{M}\ddot{\mathbf{x}} + \mathbf{K}\mathbf{x} = \mathbf{0},
\]

where \(\mathbf{M}\) is the mass matrix and \(\mathbf{K}\) is the stiffness matrix, the natural frequencies \(\omega_i\) of vibration satisfy the **generalized eigenvalue problem**:

\[
\mathbf{K}\mathbf{v} = \omega^2 \mathbf{M}\mathbf{v}.
\]

The natural frequencies are the square roots of the eigenvalues of \(\mathbf{M}^{-1}\mathbf{K}\) (or of the equivalent generalized problem). Computing these frequencies is essential in structural design — an engineer must ensure that no natural frequency coincides with typical operating frequencies that could cause resonance.

**Example of numerical eigenvalue computation for stability.** Suppose a chemical reactor is modeled by a system of differential equations, and linearization at an operating point gives a \(10 \times 10\) Jacobian matrix \(\mathbf{A}\). The reactor is safe if all eigenvalues of \(\mathbf{A}\) have negative real parts. Computing these ten eigenvalues numerically (using the QR method, for instance) tells the engineer whether the operating point is stable.

---

## 10.12 Eigenvalues in Networks and Data

Eigenvalue methods play a central role in data analysis and network science.

**Google PageRank.** The World Wide Web can be modeled as a directed graph. Web pages are nodes, and hyperlinks are edges. Google's PageRank algorithm assigns importance scores to pages by finding the dominant eigenvector of a modified adjacency matrix called the **Google matrix** \(\mathbf{G}\). The entry \(G_{ij}\) represents the probability that a random web surfer follows a link from page \(j\) to page \(i\). The PageRank vector is the dominant eigenvector of \(\mathbf{G}\), corresponding to the dominant eigenvalue \(\lambda_1 = 1\).

The power method, applied to the Google matrix (which has hundreds of billions of rows and columns), converges surprisingly quickly because the convergence ratio is controlled by the second eigenvalue, and the random-walk structure of the Google matrix keeps the second eigenvalue well below 1.

**Principal Component Analysis (PCA).** In data science, a dataset with \(p\) measured variables can be represented by a \(p \times p\) covariance matrix \(\mathbf{C}\). The eigenvalues of \(\mathbf{C}\) measure the variance in each principal direction, and the eigenvectors give those directions. The dominant eigenvector points in the direction of greatest variance in the data. Projecting data onto the first few eigenvectors (principal components) reduces dimensionality while preserving most of the variance.

PCA requires computing the eigenvalues and eigenvectors of the covariance matrix. For modern high-dimensional datasets, this is done using specialized numerical algorithms — singular value decomposition (SVD) in particular — which are more stable than forming the covariance matrix explicitly.

**Spectral graph theory.** The eigenvalues of the Laplacian matrix of a graph (a matrix derived from the graph's connectivity structure) reveal important properties of the graph: the number of connected components, the graph's robustness, how quickly information diffuses through the network, and more. The second-smallest eigenvalue of the Laplacian (the **algebraic connectivity** or **Fiedler value**) measures how well-connected the graph is. Computing this eigenvalue requires the inverse iteration or Lanczos methods rather than the basic power method, since the power method finds only the dominant eigenvalue.

---

## 10.13 Common Numerical Eigenvalue Mistakes

**Mistake 1: Assuming eigenvalues can always be found exactly.**

The characteristic polynomial approach works for small matrices. For large matrices, computing and solving the characteristic polynomial is both impractical and numerically unstable. Always use iterative numerical methods for large eigenvalue problems.

**Mistake 2: Applying the power method when eigenvalues are nearly equal.**

If \(|\lambda_1| \approx |\lambda_2|\), the convergence ratio is close to 1 and the power method converges extremely slowly. Recognize this situation and consider shifted methods or alternative algorithms.

**Mistake 3: Forgetting that the power method finds only the dominant eigenvalue.**

The basic power method yields one eigenvalue and eigenvector — the dominant one. Finding other eigenvalues requires inverse iteration, shifts, deflation, or the QR algorithm. Do not report only the dominant eigenvalue and assume you have found all the important information.

**Mistake 4: Not normalizing iterates.**

Without normalization, iterates overflow or underflow in floating-point arithmetic after a small number of steps. Always normalize in every power method implementation.

**Mistake 5: Assuming eigenvalues of non-symmetric matrices are well-conditioned.**

For non-symmetric matrices with nearly repeated eigenvalues, tiny perturbations (rounding errors, data errors) can shift eigenvalues dramatically. Before trusting computed eigenvalues, check whether the matrix is symmetric and whether eigenvalues are well-separated.

**Mistake 6: Confusing the Rayleigh quotient with the power method iterate.**

The eigenvalue estimate from the Rayleigh quotient converges faster than the eigenvector approximation. Use the Rayleigh quotient to estimate eigenvalues rather than reading off a component of the unnormalized iterate.

**Mistake 7: Applying inverse iteration without checking that A is well-conditioned.**

Inverse iteration solves a linear system at each step. If the matrix (or the shifted matrix) is nearly singular, the linear solve is poorly conditioned and the iteration can produce garbage. Monitor residuals and condition numbers when using inverse iteration.

---

## 10.14 Preparing for Optimization

Chapter 10 completes Part IV's treatment of numerical methods for problems involving matrices. The arc of Part IV is:

- Chapter 9 developed methods for solving linear systems \(\mathbf{A}\mathbf{x} = \mathbf{b}\), including Gaussian elimination, LU decomposition, and iterative methods.
- Chapter 10 developed methods for the eigenvalue problem \(\mathbf{A}\mathbf{v} = \lambda\mathbf{v}\), beginning with the power method and extending through inverse iteration and the QR preview.

Part V will complete the book with numerical methods for optimization (Chapter 11), ordinary differential equations (Chapter 12), partial differential equations (Chapter 13), and a capstone chapter on scientific computing (Chapter 14).

**Chapter 11 — Numerical Optimization** introduces methods for finding minimum and maximum values of functions. Eigenvalues return in optimization: the eigenvalues of the Hessian matrix of second derivatives determine whether a critical point is a minimum, maximum, or saddle point. The relationship between linear algebra, eigenvalues, and optimization runs deep throughout computational mathematics.

> **MGU Library Connection.** Before beginning Chapter 11, students may find it helpful to review the MGU Library's Eigenvalue Methods Reference (Appendix N), the Numerical Linear Algebra Reference (Appendix M), and the relevant sections of the Linear Algebra chapter on diagonalization and the spectral theorem.

---

## Chapter Summary

Chapter 10 introduced numerical eigenvalue methods, with the following main ideas:

**Eigenvalues and eigenvectors** satisfy \(\mathbf{A}\mathbf{v} = \lambda\mathbf{v}\). The characteristic polynomial \(\det(\mathbf{A} - \lambda\mathbf{I}) = 0\) finds eigenvalues exactly for small matrices, but is impractical and unstable for large ones.

**The dominant eigenvalue** has the largest absolute value and governs the long-run behavior of powers of the matrix.

**The power method** approximates the dominant eigenvalue by repeated matrix-vector multiplication. Starting from any vector with a nonzero component in the dominant eigenvector direction, the iterates converge to the dominant eigenvector, and the scaling factor converges to the dominant eigenvalue.

**Normalization** is essential to prevent overflow and to extract eigenvalue estimates.

**Convergence rate** of the power method is governed by \(|\lambda_2/\lambda_1|\). When this ratio is small, convergence is fast. When it is close to 1, convergence is slow.

**The Rayleigh quotient** provides a more accurate eigenvalue estimate from an approximate eigenvector, converging at twice the rate of the eigenvector approximation.

**Inverse iteration** applies the power method to \(\mathbf{A}^{-1}\) (implemented by solving \(\mathbf{A}\mathbf{y} = \mathbf{x}\) at each step using LU decomposition), finding the eigenvalue of smallest absolute value.

**Shifted inverse iteration** applies inverse iteration to \(\mathbf{A} - \mu\mathbf{I}\), finding the eigenvalue nearest to the shift \(\mu\). When \(\mu\) is close to an eigenvalue, convergence is extremely rapid.

**The QR method** is the modern standard for computing all eigenvalues simultaneously. It builds a sequence of similar matrices converging to upper triangular form, whose diagonal entries are the eigenvalues.

**Eigenvalue sensitivity** is controlled by the condition number of the eigenvector matrix. Symmetric matrices have orthogonal eigenvectors and well-conditioned eigenvalues. General matrices, especially those with nearly repeated eigenvalues, can be highly sensitive.

**Applications** include stability analysis of differential equations, vibration frequencies of structures, Google PageRank, principal component analysis, and spectral graph theory.

---

## Key Terms Review

| Term | Meaning |
|------|---------|
| Eigenvalue | Scalar \(\lambda\) such that \(\mathbf{A}\mathbf{v} = \lambda\mathbf{v}\) for nonzero \(\mathbf{v}\) |
| Eigenvector | Nonzero vector \(\mathbf{v}\) satisfying \(\mathbf{A}\mathbf{v} = \lambda\mathbf{v}\) |
| Dominant eigenvalue | Eigenvalue with largest absolute value |
| Power method | Iterative method for dominant eigenvalue via repeated multiplication |
| Normalization | Scaling iterates to prevent overflow and extract eigenvalue estimates |
| Rayleigh quotient | Formula \(\frac{\mathbf{x}^T\mathbf{A}\mathbf{x}}{\mathbf{x}^T\mathbf{x}}\) for eigenvalue estimation |
| Convergence ratio | \(|\lambda_2/\lambda_1|\); governs speed of power method |
| Inverse iteration | Power method applied to \(\mathbf{A}^{-1}\); finds smallest eigenvalue |
| Shifted iteration | Inverse iteration on \(\mathbf{A} - \mu\mathbf{I}\); targets eigenvalue near shift \(\mu\) |
| QR method | Modern iterative algorithm computing all eigenvalues simultaneously |
| Eigenvalue sensitivity | How much eigenvalues change under matrix perturbations |
| Spectral radius | \(\rho(\mathbf{A}) = \max_i |\lambda_i|\) |
| Condition number of \(\mathbf{V}\) | Measure of eigenvector near-dependence; governs eigenvalue sensitivity |

---

## Concept Review Questions

1. What is the geometric meaning of an eigenvector? What does the eigenvalue measure?

2. Why does the characteristic polynomial approach fail for large matrices?

3. What property of the dominant eigenvalue makes the power method work?

4. What is the convergence ratio of the power method, and how does it affect the number of iterations required?

5. Why is normalization necessary in the power method? What happens without it?

6. What is the Rayleigh quotient, and why does it converge faster than the eigenvector approximation?

7. How does inverse iteration find the smallest eigenvalue? Why is it implemented by solving a linear system rather than computing \(\mathbf{A}^{-1}\) explicitly?

8. How does a shift transform the eigenvalue problem? What does shifted inverse iteration find?

9. What is the QR decomposition, and what is the basic idea of the QR iteration?

10. Why are eigenvalues of symmetric matrices always well-conditioned, while eigenvalues of general matrices may not be?

11. In what way does a near-repeated eigenvalue make the eigenvalue problem ill-conditioned?

12. How does the power method relate to the PageRank algorithm for web search?

---

## Method and Algorithm Practice

**Problems 1–5: Eigenvalue computation by hand.**

1. Find all eigenvalues and eigenvectors of
\[
\mathbf{A} = \begin{pmatrix} 3 & 0 \\ 0 & 7 \end{pmatrix}.
\]
What is the dominant eigenvalue?

2. Find all eigenvalues of
\[
\mathbf{B} = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}.
\]
Then identify the dominant eigenvalue and its eigenvector.

3. For
\[
\mathbf{C} = \begin{pmatrix} 5 & 3 \\ 1 & 3 \end{pmatrix},
\]
compute eigenvalues exactly. What is the convergence ratio \(r = |\lambda_2/\lambda_1|\) for the power method?

4. For the matrix in Problem 3, estimate how many power method iterations are needed to reduce the eigenvector error by a factor of \(10^{-4}\). (Use the formula: error after \(k\) steps \(\approx r^k\).)

5. Verify that \(\begin{pmatrix}1 \\ 2\end{pmatrix}\) is an eigenvector of \(\mathbf{B} = \begin{pmatrix}3 & 2 \\ 2 & 3\end{pmatrix}\) by direct computation. What is the corresponding eigenvalue?

---

**Problems 6–10: Power method iterations.**

6. Perform four iterations of the power method on
\[
\mathbf{A} = \begin{pmatrix} 6 & 1 \\ 1 & 4 \end{pmatrix},
\]
starting from \(\mathbf{x}^{(0)} = \begin{pmatrix}1 \\ 0\end{pmatrix}\). Normalize using the infinity norm at each step. Record the eigenvalue estimate at each iteration.

7. For Problem 6, compute the exact eigenvalues and identify the convergence ratio. How does your ratio explain the speed of convergence you observed?

8. Apply the power method to
\[
\mathbf{D} = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}
\]
for three iterations, starting from \(\mathbf{x}^{(0)} = \begin{pmatrix}1 \\ 1 \\ 1\end{pmatrix}\). Use infinity-norm normalization.

9. After the final iterate in Problem 8, compute the Rayleigh quotient. Compare your Rayleigh quotient estimate to the eigenvalue estimate from direct normalization.

10. If a matrix has eigenvalues \(\lambda_1 = 10\), \(\lambda_2 = 9\), and \(\lambda_3 = 1\), how many power method iterations are needed to reduce eigenvector error to below \(0.001\)? Use the convergence ratio.

---

## Computational Interpretation

11. A power method produces eigenvalue estimates: 6.00, 7.20, 7.68, 7.87, 7.95, 7.98 across six iterations. Estimate the convergence ratio from successive differences. What is your best estimate of the true eigenvalue?

12. A structural engineer needs to find the natural frequencies of a beam structure. The beam is discretized into 200 elements, producing a \(200 \times 200\) symmetric matrix. Explain why the QR algorithm is more appropriate than the power method for this application.

13. The power method is applied to a matrix with dominant eigenvalue 5 and second eigenvalue \(-5\). Describe what happens to the iterates. Does the method converge?

14. Explain why computing \(\mathbf{A}^{-1}\) explicitly is avoided in inverse iteration. What is done instead? What are the computational advantages?

15. A shift \(\mu = 3.1\) is applied in shifted inverse iteration on a matrix with eigenvalues \(\{1, 3, 5, 8\}\). Which eigenvalue will the method converge to? Compute the convergence ratio.

16. An eigenvector approximation has error 0.1 after ten power method iterations. Estimate the error after twenty iterations if the convergence ratio is 0.6.

---

## Applications

17. **PageRank preview.** A small web of three pages has the link structure matrix

\[
\mathbf{G} = \begin{pmatrix} 0 & 0.5 & 0.5 \\ 0.5 & 0 & 0.5 \\ 0.5 & 0.5 & 0 \end{pmatrix}.
\]

The PageRank vector is the dominant eigenvector. Apply the power method starting from \(\mathbf{x}^{(0)} = \begin{pmatrix}1/3 \\ 1/3 \\ 1/3\end{pmatrix}\) for three iterations. What does this suggest about the relative importance of the three pages?

18. **Stability analysis.** A system of differential equations has Jacobian matrix

\[
\mathbf{J} = \begin{pmatrix} -2 & 1 \\ 0 & -3 \end{pmatrix}.
\]

Find the eigenvalues by hand. Is the equilibrium stable, unstable, or neutrally stable? Explain.

19. **Vibration frequency.** A two-degree-of-freedom mechanical system has stiffness matrix \(\mathbf{K} = \begin{pmatrix}3 & -1 \\ -1 & 2\end{pmatrix}\) and mass matrix \(\mathbf{M} = \mathbf{I}\). The natural frequencies satisfy \(\mathbf{K}\mathbf{v} = \omega^2 \mathbf{v}\). Find the natural frequencies.

20. **PCA context.** A covariance matrix of a two-variable dataset is

\[
\mathbf{C} = \begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix}.
\]

Find the eigenvalues. The dominant eigenvalue represents the variance along the first principal component. What fraction of total variance does the first principal component explain?

21. **Network connectivity.** The Laplacian matrix of a graph has eigenvalues \(0, 0.3, 1.1, 2.6, 4.0\). The second smallest eigenvalue (0.3) is the Fiedler value. Explain what this tells you about the network. What would a Fiedler value near zero indicate?

---

## Error Analysis

22. The power method is applied to a matrix with convergence ratio \(r = 0.7\). After 15 iterations the eigenvector error is estimated at \(0.02\). Estimate the error after 25 iterations.

23. A matrix has eigenvalues 10 and \(-10\) with equal magnitude. Why does the standard power method fail? Propose a modification (a shift) that could resolve this.

24. Computed eigenvalues of a \(5 \times 5\) matrix are \(\{3.001, 2.999, 1.002, 0.998, 0.501\}\). The true eigenvalues are \(\{3, 3, 1, 1, 0.5\}\). Which eigenvalues have high sensitivity? Which appears most reliable? Explain.

25. A student applies inverse iteration to a matrix with smallest eigenvalue very close to zero. The shifted matrix is nearly singular. Explain why the linear solve inside inverse iteration becomes unreliable. What should the student do?

26. The Rayleigh quotient for an iterate \(\mathbf{x}^{(k)}\) gives eigenvalue estimate 4.9973. The power method scaling factor gives estimate 4.9820. Assuming the true eigenvalue is 5.0000, compute the errors in each estimate. What does this demonstrate?

27. A student runs the power method and finds that the eigenvalue estimate alternates between approximately \(+6\) and \(-6\) on successive iterations rather than converging. What does this behavior indicate about the eigenvalues of the matrix?

---

## Chapter Checkpoint

The checkpoint problems below assess readiness to proceed to Chapter 11.

**Checkpoint Problem 1.** Find all eigenvalues and eigenvectors of

\[
\mathbf{A} = \begin{pmatrix} 5 & 2 \\ 1 & 4 \end{pmatrix}.
\]

Identify the dominant eigenvalue. Compute the convergence ratio for the power method.

**Checkpoint Problem 2.** Perform five iterations of the power method on the matrix from Checkpoint Problem 1, starting from \(\mathbf{x}^{(0)} = \begin{pmatrix}1 \\ 0\end{pmatrix}\), using infinity-norm normalization. Record eigenvalue estimates at each step. Compute the Rayleigh quotient after the fifth iterate. How close are your estimates to the true eigenvalue?

**Checkpoint Problem 3.** Explain in your own words why the power method converges to the dominant eigenvector. In your explanation, include the role of the ratio \(|\lambda_2/\lambda_1|\) and why normalization is required.

**Checkpoint Problem 4.** A matrix has eigenvalues \(\{8, 2, 1\}\). You wish to find the eigenvalue closest to 1.8 using shifted inverse iteration. What shift would you use? What would the approximate convergence ratio be? (Exact computation not required; set up the reasoning.)

**Checkpoint Problem 5.** A stability engineer reports that a computed eigenvalue of a \(50 \times 50\) matrix is \(\lambda = 0.0023 + 0.0001i\). The system is supposed to be stable (all eigenvalues with negative real parts). Discuss why this computed result is concerning and what additional analysis might be needed.

---

## Bridge Note

Chapter 10 completes Part IV's study of matrix computations. The methods of this chapter — power iteration, inverse iteration, QR iteration, Rayleigh quotients — appear throughout computational mathematics and are implemented in the eigenvalue solvers of every major numerical software system.

**Forward to Chapter 11 — Numerical Optimization.** The study of optimization is deeply connected to eigenvalues. The second-derivative (Hessian) matrix at a critical point determines whether that point is a minimum, maximum, or saddle point based on its eigenvalues. Gradient descent — one of the central algorithms of machine learning — has a convergence rate governed by the ratio of the largest to smallest eigenvalue of the Hessian, directly analogous to the power method convergence ratio. Students who understand eigenvalue methods are well-prepared to understand why optimization algorithms converge at different rates and how ill-conditioning in the Hessian slows gradient descent.

**Connections to advanced study.** Students who continue into numerical analysis will study:
- The symmetric QR algorithm and divide-and-conquer methods for symmetric eigenvalue problems.
- The Lanczos algorithm for large sparse symmetric matrices.
- Arnoldi iteration and ARPACK for large non-symmetric eigenvalue problems.
- Generalized eigenvalue problems \(\mathbf{K}\mathbf{v} = \lambda\mathbf{M}\mathbf{v}\) arising in structural mechanics.
- The singular value decomposition (SVD), a generalization of eigenvalue decomposition that applies to rectangular matrices and forms the foundation of PCA, data compression, and many numerical algorithms.

Eigenvalue computation is one of the most active research areas in numerical linear algebra. The methods in this chapter are the classical foundations on which modern large-scale algorithms are built.

> **MGU Library Connection.** For further reading on topics introduced in this chapter, see: Eigenvalue Method Reference (Appendix N); Numerical Linear Algebra Reference (Appendix M); MGU Linear Algebra chapter on diagonalization and the spectral theorem; MGU Differential Equations chapter on stability of equilibria; MGU Data Science Foundations chapter on principal component analysis.

---

*End of Chapter 10*

*Numerical Methods | MGU Mathematics Series | Library Textbook Edition*
