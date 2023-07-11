export type AutoGenRelations = {
  relations: [string, string, string, string, string, string, string, string];
};

export type AutoGenRelationsGateway = {
  getAutoGenRelations(
    mainText: string,
    subText?: string
  ): Promise<AutoGenRelations>;
};
