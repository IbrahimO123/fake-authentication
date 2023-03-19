<template>
  <v-container class="home">
    <h2>Some Articles to read</h2>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2>Big O Notation</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Big O notation is a mathematical notation that describes the
              limiting behavior of a function when the argument tends towards a
              particular value or infinity. Big O is a member of a family of
              notations invented by Paul Bachmann,[1] Edmund Landau,[2] and
              others, collectively called Bachmann–Landau notation or asymptotic
              notation. The letter O was chosen by Bachmann to stand for
              Ordnung, meaning the order of approximation. In computer science,
              big O notation is used to classify algorithms according to how
              their run time or space requirements grow as the input size
              grows.[3] In analytic number theory, big O notation is often used
              to express a bound on the difference between an arithmetical
              function and a better understood approximation; a famous example
              of such a difference is the remainder term in the prime number
              theorem. Big O notation is also used in many other fields to
              provide similar estimates. Big O notation characterizes functions
              according to their growth rates: different functions with the same
              asymptotic growth rate may be represented using the same O
              notation. The letter O is used because the growth rate of a
              function is also referred to as the order of the function. A
              description of a function in terms of big O notation usually only
              provides an upper bound on the growth rate of the function.
              Associated with big O notation are several related notations,
              using the symbols o, Ω, ω, and Θ, to describe other kinds of
              bounds on asymptotic growth rates.
            </p>
          </v-card-text>
        </v-card>
        <v-card class="my-2">
          <v-card-title>Polymorphism (computer science)</v-card-title>
          <v-card-text
            >In programming language theory and type theory, polymorphism is the
            provision of a single interface to entities of different types[1] or
            the use of a single symbol to represent multiple different types.[2]
            The concept is borrowed from a principle in biology where an
            organism or species can have many different forms or stages.[3] The
            most commonly recognized major classes of polymorphism are: Ad hoc
            polymorphism: defines a common interface for an arbitrary set of
            individually specified types. Parametric polymorphism: not
            specifying concrete types and instead use abstract symbols that can
            substitute for any type. Subtyping (also called subtype polymorphism
            or inclusion polymorphism): when a name denotes instances of many
            different classes related by some common superclass.[</v-card-text
          >
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>
            <h2>Abstraction</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Abstraction in computational thinking enables us to navigate
              complex problems more effectively while helping to find relevance
              and clarity at scale. What is Abstraction in Learning? Abstraction
              in learning is the process of taking away or removing certain
              characteristics of a complex problem to reduce it to its most
              essential components. This helps to simplify or break down the
              problem to make it easier to resolve. Abstraction in Computational
              Thinking Abstraction is an essential part of computational
              thinking. Computational thinking is a problem-solving skill that
              develops an algorithm, or series of steps to perform a task or
              solve a problem. In computational thinking, decomposition and
              pattern recognition break down the complex, while abstraction
              figures out how to work with the different parts efficiently and
              accurately. This process occurs through filtering out irrelevant
              information and identifying what’s most important. It then
              connects each decomposed problem to establish a complete solution.
              “But it is a pipe.” “No, it’s not,” I said. “It’s a drawing of a
              pipe. Get it? All representations of a thing are inherently
              abstract. It’s very clever.” – John Green, The Fault in Our Stars
              Abstraction is similar to the selective filtering function in our
              brains that gates the neural signals with which we are constantly
              bombarded so we can make sense of our world and focus on what’s
              essential to us. Examples of Abstraction in Curriculum Another way
              to think about abstraction is in the context of those big concepts
              that inform how we think about the world like Newton’s Laws of
              Motion, the Law of Supply and Demand, or the Pythagorean Theorem.
              All of these required the people behind them to think about big,
              broad, and complex concepts; to break down the problem and to
              experiment; and to find patterns amongst the experimentations; and
              to eventually abstract this concrete knowledge to package it into
              these sterile statements that shelter us from the complexity and
              difficulty waded through to arrive at this law. Like the other
              elements of computational thinking, abstraction occurs inherently
              and can be addressed throughout the curriculum with students. Here
              are some ideas. English Language Arts Students summarize a novel
              into a book review. Mathematics: Students conduct a survey of
              peers and analyze the data to note the key findings, create
              visualizations, present the findings. Science: Students develop
              laws and theorems by looking at similar formulas and equations.
              Social Studies: Students coalesce the most important details
              shared in articles about a specific current event and write a
              brief about the event. Languages: Students create a personal guide
              that dictates when to use the formal and informal ‘you’ in Spanish
              class or the two ‘to know’ verbs in French, which, mind you,
              always confounded me. Arts: Students generalize chord progressions
              for common musical genres into a set of general principles they
              can communicate. Examples of Abstractions in Computer Science
              Abstraction in coding and computer science is used to simplify
              strings of code into different functions. It hides the underlying
              complexity in a programming language, which makes it simpler to
              implement algorithms and communicate with digital tools.
              Abstraction helps students return to the larger problem that
              prompted this whole computational thinking adventure and identify
              the most important details from the earlier phases. Understanding
              abstraction enables students to make sense of problems they
              encounter, helping them to not be overwhelmed in the face of
              something complex and to persist, compute, iterate, and ideate.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
