
const arrayMin = (arr) => arr.reduce((p, v) => {
    // https://stryker-mutator.io/docs/stryker-js/disable-mutants
    // Stryker disable next-line EqualityOperator: The <= mutant results in an equivalent mutant
  return (p < v ? p : v);
});

const arrayMax = (arr) => arr.reduce((p, v) => {
    // https://stryker-mutator.io/docs/stryker-js/disable-mutants
    // Stryker disable next-line EqualityOperator: The <= mutant results in an equivalent mutant
  return (p > v ? p : v);
});

export { arrayMin, arrayMax };
