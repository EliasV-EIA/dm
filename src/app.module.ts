import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserModule } from './user/user.module'; // Example module
import { SlavesModule } from './slaves/slaves.module';
import { BattlesModule } from './battles/battles.module';
import { DictatorsModule } from './dictators/dictators.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { BlackmarketModule } from './blackmarket/blackmarket.module';

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
      database: process.env.DB_DATABASE, //el error que tira cuando corre es ENOTFound, que se supone que significa que no encuentra la url. Nada que haga lo soluciona. Lo he puesto asi y como tu lo tienes en tu repo (el .env tambien). Nada funciona
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Be careful with this in production!
    }),
    SlavesModule,
    BattlesModule,
    DictatorsModule,
    SponsorsModule,
    BlackmarketModule,
    // UserModule,  // Example of another module you might have
  ],
})
export class AppModule {}
