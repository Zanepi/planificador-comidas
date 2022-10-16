import { Test, TestingModule } from '@nestjs/testing';
import { GrupoResolver } from './grupo.resolver';

describe('GrupoResolver', () => {
  let resolver: GrupoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrupoResolver],
    }).compile();

    resolver = module.get<GrupoResolver>(GrupoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
