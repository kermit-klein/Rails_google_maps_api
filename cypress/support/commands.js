import axios from "axios";

Cypress.Commands.add("cleanAndSeedDatabase", async () => {
  return await axios.post("http://localhost:3000/test/clean_database", {
    should_seed: true,
  });
});

Cypress.Commands.add("cleanDatabase", async () => {
  return await axios.post("http://localhost:3000/test/clean_database", {
    should_seed: false,
  });
});
