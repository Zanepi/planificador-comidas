import { Test, TestingModule } from '@nestjs/testing';
import { PlatilloService } from './platillo.service';

describe('PlatilloService', () => {
  let service: PlatilloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatilloService],
    }).compile();

    service = module.get<PlatilloService>(PlatilloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
