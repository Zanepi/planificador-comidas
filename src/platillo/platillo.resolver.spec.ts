import { Test, TestingModule } from '@nestjs/testing';
import { PlatilloResolver } from './platillo.resolver';
import { PlatilloService } from './platillo.service';

describe('PlatilloResolver', () => {
  let resolver: PlatilloResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatilloResolver, PlatilloService],
    }).compile();

    resolver = module.get<PlatilloResolver>(PlatilloResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
