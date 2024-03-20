import { Test, TestingModule } from '@nestjs/testing';
import { SavePaymentController } from './payment.controller';
import { SavePaymentUseCase } from '../../core/usecases/save-payment.use-case';
import { GetPaymentUseCase } from '../../core/usecases/get-payment.use-case';
import { GetPaymentByIdUseCase } from '../../core/usecases/get-payment-byID.use-case';
import { UpdatePaymentUseCase } from '../../core/usecases/update-payment.use-case';


describe('AppController (e2e)', () => {
  let controller: SavePaymentController;
  let savePaymentUseCaseMock: SavePaymentUseCase;
  let getPaymentUseCaseMock: GetPaymentUseCase;
  let getPaymentByIdUseCase: GetPaymentByIdUseCase;
  let updatePaymentUseCase: UpdatePaymentUseCase;


  beforeEach(async () => {
    savePaymentUseCaseMock = {
      savePayment: jest.fn(),
    } as unknown as SavePaymentUseCase;

    getPaymentUseCaseMock = {
      getAllPayments: jest.fn().mockResolvedValue({
        "id_client": "123",
        "id_order": "65b06f0a528feae34a2bdf50",
        "status_payment": "false"
      }),
    } as unknown as GetPaymentUseCase;

    getPaymentByIdUseCase = {
      getOrderById: jest.fn().mockResolvedValue({
        "id_client": "123",
        "id_order": "65b06f0a528feae34a2bdf50",
        "status_payment": "false"
      }),
    } as unknown as GetPaymentByIdUseCase;

    updatePaymentUseCase = {
      updateOrderById: jest.fn().mockResolvedValue({
        "id_client": "123",
        "id_order": "65b06f0a528feae34a2bdf50",
        "status_payment": "false"
      }),
    } as unknown as UpdatePaymentUseCase;

    const module: TestingModule = await Test.createTestingModule({
      imports: [],
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

  it('sould call save method', () => {

    const requestMock = {
      id_client: '123',
      id_order: '123',
      status_payment:'true',
      toCommand: jest.fn().mockReturnValue({
        id_client: "123",
        id_order: "65b06f0a528feae34a2bdf50",
        status_payment: "false"
      }),
    };

    // Act
    controller.save(requestMock);

    // Assert
    expect(requestMock.toCommand).toHaveBeenCalled();
    expect(savePaymentUseCaseMock.savePayment).toHaveBeenCalled();
  });

  it('sould call getAllPayments method', async () => {

     // Arrange
     const expectedResult = {
      "id_client": "123",
      "id_order": "65b06f0a528feae34a2bdf50",
      "status_payment": "false"
    }
    
     // Act
     const result = await controller.getAllPayments();

     // Assert
     expect(getPaymentUseCaseMock.getAllPayments).toHaveBeenCalled();
     expect(result).toEqual(expectedResult);
  });

  it('sould call getOrderById method', async () => {

    // Arrange
    const queryId = '123'
    const expectedResult = {
      "id_client": "123",
      "id_order": "65b06f0a528feae34a2bdf50",
      "status_payment": "false"
    }
   
    // Act
    const result = await controller.getOrderById(queryId);

    // Assert
    expect(getPaymentByIdUseCase.getOrderById).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
 });

 it('sould call updateOrderById method', async () => {

  // Arrange
  const queryIdMock = '123'
  const statusMock = 'false'
  const expectedResult = {
    "id_client": "123",
    "id_order": "65b06f0a528feae34a2bdf50",
    "status_payment": "false"
  }
 
  // Act
  const result = await controller.updateOrderById(queryIdMock, statusMock);

  // Assert
  expect(updatePaymentUseCase.updateOrderById).toHaveBeenCalled();
  expect(result).toEqual(expectedResult);
});

  
});