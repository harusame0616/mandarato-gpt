import { Module } from '@nestjs/common';
import { MandaratoResolver } from './presentations/mandarato.resolver';

@Module({
  providers: [MandaratoResolver],
})
export class MandaratoModule {}
