import { Test, TestingModule } from '@nestjs/testing';
import { SavePaymentController } from './payment.controller';
import { SavePaymentUseCase } from '../../core/usecases/save-payment.use-case';
import { GetPaymentUseCase } from '../../core/usecases/get-payment.use-case';
import { PaymentModule } from '../../payments.module';
import { GetPaymentByIdUseCase } from '../../core/usecases/get-payment-byID.use-case';
import { UpdatePaymentUseCase } from '../../core/usecases/update-payment.use-case';


describe('AppController (e2e)', () => {
  let controller: SavePaymentController;
  let savePaymentUseCaseMock: SavePaymentUseCase;
  let getPaymentUseCaseMock: GetPaymentUseCase;
  let getPaymentByIdUseCase: GetPaymentByIdUseCase;
  let updatePaymentUseCase: UpdatePaymentUseCase;

  // Crie um objeto com os valores desejados para o comando simulado
  const commandMock = {
    id_client: 'idClient',
    id_order: 'idOrder',
    status_payment: 'statusPayment',
    toCommand: jest.fn(), // Mock do método toCommand
  };


  beforeEach(async () => {
    savePaymentUseCaseMock = {
      savePayment: jest.fn(),
    } as unknown as SavePaymentUseCase;

    getPaymentUseCaseMock = {
      getAllPayments: jest.fn(),
    } as unknown as GetPaymentUseCase;

    getPaymentByIdUseCase = {
      getOrderById: jest.fn(),
    } as unknown as GetPaymentByIdUseCase;

    updatePaymentUseCase = {
      updateOrderById: jest.fn(),
    } as unknown as UpdatePaymentUseCase;

    const module: TestingModule = await Test.createTestingModule({
      imports: [PaymentModule],
      controllers: [SavePaymentController],
      providers: [
        {
          provide: SavePaymentUseCase,
          useValue: savePaymentUseCaseMock,
        },
        {
          provide: GetPaymentUseCase,
          useValue: getPaymentUseCaseMock
        },
        {
          provide: GetPaymentByIdUseCase,
          useValue: getPaymentByIdUseCase
        },
        {
          provide: UpdatePaymentUseCase,
          useValue: updatePaymentUseCase
        }
      ],
    }).compile();

    controller = module.get<SavePaymentController>(SavePaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});