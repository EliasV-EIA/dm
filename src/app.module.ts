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
    TypeOrmModule.forRoot({//Configuración de la base de datos
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, // Recuerda cambiar a false en producción
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
