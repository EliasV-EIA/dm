import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserModule } from './user/user.module'; // Example module
import { SlavesModule } from './slaves/slaves.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes config globally available
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ||'5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Be careful with this in production!
    }),
    SlavesModule,
    // UserModule,  // Example of another module you might have
  ],
})
export class AppModule {}
