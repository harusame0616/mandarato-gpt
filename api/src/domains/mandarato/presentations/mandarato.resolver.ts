import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver('Mandarato')
export class MandaratoResolver {
  @Query()
  mandaratoFindOneById(@Args('id') id: string) {
    return { id, name: 'Mandarato' };
  }
  @Query()
  mandaratoList() {
    return [{ id: 'id1', name: 'Mandarato' }];
  }
}
