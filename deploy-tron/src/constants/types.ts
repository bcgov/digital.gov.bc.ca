
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


export interface deploymentStatus {
  node: {
    payload: string
    latestStatus: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state: string
    } | string 
    ref: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      name: string
    }
  }
}

export interface prStatusMessage {
  state: string
  pr: number
  branch: string
}