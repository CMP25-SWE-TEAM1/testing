class TestOptions {
  constructor() {
    this.options = {
      scenarios: {
        shared_iter_scenario: {
          executor: "shared-iterations",
          vus: 100,
          iterations: 100,
          startTime: "0s",
          gracefulStop: "1m",
          tags: { shared_iterations_scenario: "shared_iterations" },
        },
        per_vu_scenario: {
          executor: "per-vu-iterations",
          vus: 10,
          iterations: 5,
          startTime: "1m",
          maxDuration: "2m",
          tags: { per_vu_scenario: "per_vu_iterations" },
        },
        ramping_vus_scenario: {
          executor: "ramping-vus",
          startVUs: 0,
          stages: [{ duration: "1m", target: 50 }],
          startTime: "2m",
          gracefulStop: "3m",
          tags: { ramping_vus_scenario: "ramping_vus" },
        },
      },
    };
  }

  getOptions() {
    return this.options;
  }
}

export default TestOptions;
