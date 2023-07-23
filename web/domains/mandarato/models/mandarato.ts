export type MandaratoChankType = {
  main: string;
  relations: [string, string, string, string, string, string, string, string];
};

export type MandaratoType = {
  main: string;
  relations: [
    MandaratoChankType,
    MandaratoChankType,
    MandaratoChankType,
    MandaratoChankType,
    MandaratoChankType,
    MandaratoChankType,
    MandaratoChankType,
    MandaratoChankType
  ];
};

export type RelationIndexType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export function assertIsRelationIndexType(
  x: unknown
): asserts x is RelationIndexType {
  if (typeof x !== "number" || x < 0 || x > 8) {
    throw new Error("invalid relation index");
  }
}
