export function aumentaUno(context) {
  //llamar api
  let newValue = context.state.contador + 1;
  context.commit('SET_NUMBER', newValue);
}

export function decrementar(context) {
  let newValue = context.state.contador - 1;
  context.commit('SET_NUMBER', newValue);
}
