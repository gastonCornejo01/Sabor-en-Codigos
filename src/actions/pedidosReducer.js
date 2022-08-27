import { TYPES } from "./pedidosAction";

export function pedidosReducer(state, action){
    switch (action.type){
        case TYPES.AGREGAR_ITEM:{}
        case TYPES.ELIMINAR_ITEM:{}
        case TYPES.LIMPIAR_PEDIDO:{}
        default:
            return state;
    }
}
