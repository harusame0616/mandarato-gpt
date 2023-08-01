import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MandaratoModule } from './domains/mandarato/mandarato.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src//domains/**/*.graphql'],
      playground: true,
    }),
    MandaratoModule,
  ],
})
export class AppModule {}
