import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/GraphQL-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'employee',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
