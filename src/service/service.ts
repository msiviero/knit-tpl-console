import { injectable } from "@msiviero/knit";

@injectable()
export class Service {

  public name(who = "world"): string {
    return who;
  }
}
