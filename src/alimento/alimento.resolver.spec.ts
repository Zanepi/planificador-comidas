import { Test, TestingModule } from '@nestjs/testing';
import { AlimentoResolver } from './alimento.resolver';
import { AlimentoService } from './alimento.service';

describe('AlimentoResolver', () => {
  let resolver: AlimentoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlimentoResolver, AlimentoService],
    }).compile();

    resolver = module.get<AlimentoResolver>(AlimentoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
