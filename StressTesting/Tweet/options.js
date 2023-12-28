class TestOptions {
  constructor() {
    this.options = {
      scenarios: {
        shared_iter_scenario: {
          executor: "shared-iterations",
          vus: 5000,
          iterations: 5000,
          startTime: "0s",
          tags: { shared_iterations_scenario: "shared_iterations" },
        },
      },
    };
  }

  getOptions() {
    return this.options;
  }
}

export default TestOptions;
