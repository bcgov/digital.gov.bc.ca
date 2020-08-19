
export type ENVIRONMENTS = "development" | "staging" | "qa" | "production";

export type synonyms = {
  [any: string]: ENVIRONMENTS
}

export interface parsedDeployCommand {
  microservice: string;
  environment: string;
}

export interface latestStatus {
  node: {
    latestStatus: string
    ref: {
      name: string
    }
  }
}

export interface deployment {
  id: string|number;
  environment: string;
}

export interface deploymentStatusGroup {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export interface deploymentGroup {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
