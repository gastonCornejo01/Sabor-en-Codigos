import { TYPES } from "./pedidosAction";

export const pedidoInitialState = {
  pedido: [],
};

export function pedidosReducer(state, action) {
  switch (action.type) {
    case TYPES.AGREGAR_ITEM: {
      let nuevoPedido = state.menus.find((pedido) => pedido._id === action.payload);
      console.log(nuevoPedido);
    }
    case TYPES.ELIMINAR_ITEM: {
    }
    case TYPES.LIMPIAR_PEDIDO: {
    }
    default:
      return state;
  }
}
