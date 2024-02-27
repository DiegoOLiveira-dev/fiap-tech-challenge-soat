import { Injectable } from "@nestjs/common";
import { Pedido } from "../entity/pedido";
import { PedidoPersistencePort } from "../../base/interfaces/pedido-persistente.port";


@Injectable()
export class GetPedidoUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort) { }
    

    async getAllPedidos(): Promise<Pedido[]> {

        const statusOrder = {
            'pronto': 1,
            'em preparo': 2,
            'Recebido': 3
        };

        const pedidos = await this.pedidoPersistencePort.getAllPedido()

        const filteredPedidos = pedidos.filter((pedido: any) => {
            const lastStatus = pedido.status_pedido[pedido.status_pedido.length - 1]?.status;
            console.log(lastStatus && lastStatus._doc.Descricao !== 'Finalizado')
            return lastStatus && lastStatus._doc.Descricao !== 'Finalizado';
        });

        console.log(filteredPedidos)

        const sort = filteredPedidos.sort((a: any, b: any) => {
            // Ordena por status
            
            const statusA = a.status_pedido[a.status_pedido.length -1]?.status; // Supõe que o status desejado está na primeira posição
            const statusB = b.status_pedido[a.status_pedido.length -1]?.status; // Supõe que o status desejado está na primeira posição
            const statusComparison = statusOrder[statusA?._doc.Descricao] - statusOrder[statusB?._doc.Descricao];
        
            if (statusComparison !== 0) {
                return statusComparison;
            }
        
            // Se os status são iguais, ordena os pedidos do mais antigo para o mais novo
            const dateA = new Date(a.date_order);
            const dateB = new Date(b.date_order);
            if (dateA < dateB) return -1;
            if (dateA > dateB) return 1;
        
            return 0;
        });

        return sort

    }

    
}