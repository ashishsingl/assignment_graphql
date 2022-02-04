import { Environment, Network, RecordSource, Store } from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";

async function fetchRelay(params, variables) {
  console.log("variables", variables);
  console.log(`fetching query ${params.name} with ${variables}`);
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
