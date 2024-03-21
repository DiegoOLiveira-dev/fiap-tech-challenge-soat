import { Test, TestingModule } from "@nestjs/testing";
import { IDataServices } from "../../../abstracts";
import { PaymentPersistenceAdapter } from "./payment-persistence.adapter";
import { HttpException } from "@nestjs/common";

describe("AppController (e2e)", () => {
  let adapter: PaymentPersistenceAdapter;

  let dataServicesMock;

  beforeEach(async () => {
    dataServicesMock = {
      payment: {
        create: jest.fn().mockResolvedValue({
          id_client: "123",
          id_order: "65b06f0a528feae34a2bdf50",
          status_payment: "false",
        }),
        getAll: jest.fn().mockResolvedValue([
          {
            id_client: "123",
            id_order: "65b06f0a528feae34a2bdf50",
            status_payment: "false",
          },
          {
            id_client: "123",
            id_order: "65b06f0a528feae34a2bdf51",
            status_payment: "false",
          },
        ]),
        getByFilter: jest.fn().mockResolvedValue([{
          id_client: "123",
          id_order: "65b06f0a528feae34a2bdf51",
          status_payment: "false",
        }]),
        updateById: jest.fn().mockResolvedValue([{
          id_client: "123",
          id_order: "65b06f0a528feae34a2bdf52",
          status_payment: "false",
        }]),
      },
      pedido: {
        patchById: jest.fn()
      }
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        {
          provide: IDataServices,
          useValue: dataServicesMock,
        },
      ],
    }).compile();

    adapter = new PaymentPersistenceAdapter(dataServicesMock);
  });

  it("should be defined", () => {
    expect(adapter).toBeDefined();
  });

  it("sould call persistPayment method", async () => {
    // Arrange
    const mockInputData = {
      id_client: "123",
      id_order: "65b06f0a528feae34a2bdf50",
      status_payment: "false",
    };

    // Act
    const result = await adapter.persistPayment(mockInputData);

    // Assert
    expect(dataServicesMock.payment.create).toHaveBeenCalled();
    expect(result).toEqual(mockInputData);
  });

  it("sould call persistPayment method and throw error", async () => {
    // Arrange
    const mockInputData = {
      id_client: "123",
      id_order: "65b06f0a528feae34a2bdf50",
      status_payment: "false",
    };

    // Act

    // Substituir temporariamente a implementação do método create para lançar uma exceção
    dataServicesMock.payment.create = jest.fn().mockImplementation(() => {
      throw new HttpException("error", 400);
    });
    // Assert
    await expect(adapter.persistPayment(mockInputData)).rejects.toThrow();

  });

  it("sould call getAllPayments method", async () => {
    // Arrange
    const mockInputData = [
      {
        id_client: "123",
        id_order: "65b06f0a528feae34a2bdf50",
        status_payment: "false",
      },
      {
        id_client: "123",
        id_order: "65b06f0a528feae34a2bdf51",
        status_payment: "false",
      },
    ];

    // Act
    const result = await adapter.getAllPayments();

    // Assert
    expect(dataServicesMock.payment.getAll).toHaveBeenCalled();
    expect(result).toEqual(mockInputData);
  });

  it("sould call getOrderById method", async () => {
    // Arrange
    const mockInputData = [{
      id_client: "123",
      id_order: "65b06f0a528feae34a2bdf51",
      status_payment: "false",
    }];

    const orderId = '65b06f0a528feae34a2bdf51'

    // Act
    const result = await adapter.getOrderById(orderId);
    // Assert
    expect(dataServicesMock.payment.getByFilter).toHaveBeenCalled();
    expect (result[0].id_order).toEqual(mockInputData[0].id_order)
    expect(result).toEqual(mockInputData);
  });

  it("sould call getOrderById method and return empty array", async () => {
    // Arrange
    const mockInputData = [];
    

    const orderId = '65b06f0a528feae34a2bdf51'

    dataServicesMock.payment.getByFilter = jest.fn().mockResolvedValue(mockInputData);


    // Act
    const result = await adapter.getOrderById(orderId);
    // Assert
    expect(dataServicesMock.payment.getByFilter).toHaveBeenCalled();
    expect(result).toHaveLength(0)
    expect(result).toEqual(mockInputData);
  });

  it("sould call updateOrderById method and order is payment false", async () => {

    // Arrange
    const mockInputData = [
      {
        id_client: "123",
        id_order: "65b06f0a528feae34a2bdf52",
        status_payment: "false",
      }
    ];

    const orderId = '65b06f0a528feae34a2bdf52'

    dataServicesMock.payment.getByFilter = jest.fn().mockResolvedValue(mockInputData);


    // Act
    const result = await adapter.updateOrderById(orderId, 'false');
    console.log(result)
    // Assert

     // Assert
     expect(dataServicesMock.payment.updateById).toHaveBeenCalled();
     expect(result).toEqual(mockInputData);

  });

  it("sould call updateOrderById method and order is payment true", async () => {

    // Arrange
    const mockInputData = [
      {
        id_client: "123",
        id_order: "65b06f0a528feae34a2bdf52",
        status_payment: "true",
      }
    ];

    const orderId = '65b06f0a528feae34a2bdf52'

    dataServicesMock.payment.getByFilter = jest.fn().mockResolvedValue(mockInputData);
    dataServicesMock.payment.updateById = jest.fn().mockResolvedValue(undefined);

    // Act
    const result = await adapter.updateOrderById(orderId, 'false');
    console.log(result)
    // Assert

     // Assert
     expect(dataServicesMock.payment.updateById).not.toHaveBeenCalled();
     expect(result).toEqual(undefined);

  });
});
