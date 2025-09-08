## What is the Monte Carlo Simulation?

The Monte Carlo simulation is a mathematical technique that predicts possible outcomes of an uncertain event. Computer programs use this method to analyze past data and predict a range of future outcomes based on a choice of action. For example, if you want to estimate the first month’s sales of a new product, you can give the Monte Carlo simulation program your historical sales data. The program will estimate different sales values based on factors such as general market conditions, product price, and advertising budget.

### Why is the Monte Carlo simulation important?

The Monte Carlo simulation is a probabilistic model that can include an element of uncertainty or randomness in its prediction. When you use a probabilistic model to simulate an outcome, you will get different results each time. For example, the distance between your home and office is fixed. However, a probabilistic simulation might predict different travel times by considering factors such as congestion, bad weather, and vehicle breakdowns.

In contrast, conventional forecasting methods are more deterministic. They provide a definite answer to the prediction and cannot factor in uncertainty. For instance, they might tell you the minimum and maximum travel time, but both answers are less accurate.

### Benefits of the Monte Carlo simulation

The Monte Carlo simulation provides multiple possible outcomes and the probability of each from a large pool of random data samples. It offers a clearer picture than a deterministic forecast. For instance, forecasting financial risks requires analyzing dozens or hundreds of risk factors. Financial analysts use the Monte Carlo simulation to produce the probability of every possible outcome.

### History of the Monte Carlo simulation

John von Neumann and Stanislaw Ulam invented the Monte Carlo simulation, or the Monte Carlo method, in the 1940s. They named it after the famous gambling location in Monaco because the method shares the same random characteristic as a roulette game.

### What are the Monte Carlo simulation use cases?

Companies use Monte Carlo methods to assess risks and make accurate long-term predictions. The following are some examples of use cases.

### Business

Business leaders use Monte Carlo methods to project realistic scenarios when making decisions. For example, a marketer needs to decide whether it's feasible to increase the advertising budget for an online yoga course. They could use the Monte Carlo mathematical model on uncertain factors or variablessuch as the following:





* Subscription fee
* Advertising cost
* Sign-up rate
* Retention
* The simulation would then predict the impact of changes on these factors to indicate whether the decision is profitable.

### 

### Finance

Financial analysts often make long-term forecasts on stock prices and then advise their clients of appropriate strategies. While doing so, they must consider market factors that could cause drastic changes to the investment value. As a result, they use the Monte Carlo simulation to predict probable outcomes to support their strategies.

### Online gaming

Strict regulations govern the online gaming and betting industry. Customers expect gaming software to be fair and mimic the characteristics of its physical counterpart. Therefore, game programmers use the Monte Carlo method to simulate results and ensure a fair-play experience.

### Engineering

Engineers must ensure the reliability and robustness of every product and system they create before making it available to the public. They use Monte Carlo methods to simulate a product’s probable failure rate based on existing variables. For example, mechanical engineers use the Monte Carlo simulation to estimate the durability of an engine when it operates in various conditions.

### How does the Monte Carlo simulation work?

The basic principle of the Monte Carlo simulation lies in ergodicity, which describes the statistical behavior of a moving point in an enclosed system. The moving point will eventually pass through every possible location in an ergodic system. This becomes the basis of the Monte Carlo simulation, in which the computer runs enough simulations to produce the eventual outcome of different inputs.





For example, a six-sided die has a one-sixth chance of landing on a specific number. When you roll the die six times, you might not land the die on six different numbers. However, you will achieve the theoretical probability of one-sixth for each number when you continue indefinitely rolling. The result accuracy is proportional to the number of simulations. In other words, running 10,000 simulations produces more accurate results than 100 simulations.

The Monte Carlo simulation works the same way. It uses a computer system to run enough simulations to produce different outcomes that mimic real-life results. The system uses random number generators to recreate the inherent uncertainty of the input parameters. Random number generators are computer programs that produce an unpredictable sequence of random numbers.

### The Monte Carlo simulation compared to machine learning

Machine learning (ML) is a computer technology that uses a large sample of input and output (I/O) data to train software to understand the correlation between both. A Monte Carlo simulation, on the other hand, uses samples of input data and a known mathematical model to predict probable outcomes occurring in a system. You use ML models to test and confirm the results in Monte Carlo simulations.

### What are the components of a Monte Carlo simulation?

A Monte Carlo analysis consists of input variables, output variables, and a mathematical model. The computer system feeds independent variables into a mathematical model, simulates them, and produces dependent variables.

### Input variables

Input variables are random values that affect the outcome of the Monte Carlo simulation. For example, manufacturing quality and temperature are input variables that influence a smartphone's durability. You can express input variables as a range of random value samples so Monte Carlo methods can simulate the results with random input values.

### Output variable

The output variable is the result of the Monte Carlo analysis. For example, an electronic device’s life expectancy is an output variable, with its value being a time such as 6 months or 2 years. The Monte Carlo simulation software shows the output variable in a histogram or graph that distributes the result in a continuous range on the horizontal axis.

### Mathematical model

A mathematical model is an equation that describes the relationship between output and input variables in mathematical form. For example, the mathematical model for profitability is Profit = Revenue − Expenses.

### The Monte Carlo software replaces revenue and expenses with probable values based on the probability distribution type. Then it repeats the simulation to get a highly accurate result. The Monte Carlo simulation can run for hours when the mathematical model involves many random variables.

### What are probability distributions in the Monte Carlo simulation?

Probability distributions are statistical functions that represent a range of values distributed between limits. Statistics experts use probability distributions to predict the possible occurrence of an uncertain variable, which might consist of discrete or continuous values.

Discrete probability distribution is represented by whole numbers or a sequence of finite numbers. Each of the discrete values has a probability greater than zero. Statisticians plot discrete probability distribution on a table, but they plot continuous probability distribution as a curve between two given points on the x-axis of a graph. The following are common types of probability distributions that a Monte Carlo simulation can model.

### Normal distribution

Normal distribution, also known as the bell curve, is symmetrically shaped like a bell and represents most real-life events. The possibility of a random value at the median is high, and the probability significantly decreases toward both ends of the bell curve. For example, a repeated random sampling of the weight of students in a particular classroom gives you a normal distribution chart.

### Uniform distribution

Uniform distribution refers to a statistical representation of random variables with equal chance. When plotted on a chart, the uniformly distributed variables appear as a horizontal flat line across the valid range. For example, the uniform distribution represents the likelihood of rolling and landing on each side of a die.

### Triangular distribution

Triangular distribution uses minimum, maximum, and most-likely values to represent random variables. Its probability peaks at the most-likely value. For example, companies use triangular distribution to predict upcoming sales volumes by establishing the triangle's minimum, maximum, and peak value.

### What are the steps in performing the Monte Carlo simulation?

The Monte Carlo method involves the following steps.

### Establish the mathematical model

Define an equation that brings the output and input variables together. Mathematical models can range from basic business formulas to complex scientific equations.

### Determine the input values

Choose from the different types of probability distributions to represent the input values. For example, the operating temperature of a mobile phone is likely to be a bell curve since the device runs at room temperature most of the time.

### Create a sample dataset

Create a large dataset of random samples based on the chosen probability distribution. The sample size should be in the range of 100,000 to produce accurate results.

### Set up the Monte Carlo simulation software

Use the input samples and mathematical model to configure and run the Monte Carlo simulation software. Result times can vary depending on the number of input variables, and you might have to wait for the results.

### Analyze the results

Check the simulated results to find how the output distributes on the histogram. Use statistical tools to calculate parameters, such as mean value, standard deviation, and variant, to determine whether the result falls within your expectation.

### What are the challenges of the Monte Carlo simulation?

These are two common challenges when using Monte Carlo simulations:

The Monte Carlo simulation is highly dependent on the input values and distribution. If mistakes are made when electing the input and probability distribution, it can lead to inaccurate results.
It might take excessive computational power to perform Monte Carlo experiments. Computing with the Monte Carlo method can take hours or days to complete on a single computer.

### How can AWS Batch help with the Monte Carlo simulation?

AWS Batch is a service that data analysts use to run workloads in batches on AWS environments. Data analysts use AWS Batch to scale cloud computing resources for Monte Carlo simulations automatically. They then simulate complex systems and variables in a shorter duration. AWS Batch offers the following features:

Data scientists focus on analyzing the results instead of managing resource allocation.
AWS Batch removes the need for manual supervision and intervention when performing Monte Carlo simulations.
There is no need to install separate batch computing software on your AWS environments.

