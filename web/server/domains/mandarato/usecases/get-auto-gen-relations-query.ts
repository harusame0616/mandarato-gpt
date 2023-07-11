import {
  AutoGenRelations,
  AutoGenRelationsGateway,
} from "./auto-gen-relations-gateway.ts";

export class GetAutoGenRelationsQuery {
  constructor(
    private readonly autoGenRelationsateway: AutoGenRelationsGateway
  ) {}

  execute(mainText: string, subText?: string): Promise<AutoGenRelations> {
    return this.autoGenRelationsateway.getAutoGenRelations(mainText, subText);
  }
}
