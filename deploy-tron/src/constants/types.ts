
export type ENVIRONMENTS = "development" | "staging" | "qa" | "production";

export type synonyms = {
  [any: string]: ENVIRONMENTS
}

export interface parsedDeployCommand {
  microservice: string;
  environment: string;
}