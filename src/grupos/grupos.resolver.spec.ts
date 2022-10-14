import { Test, TestingModule } from '@nestjs/testing';
import { GruposResolver } from './grupos.resolver';

describe('GruposResolver', () => {
  let resolver: GruposResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GruposResolver],
    }).compile();

    resolver = module.get<GruposResolver>(GruposResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
