import { createAction, props } from "@ngrx/store";

// crear tipo especifico 
export type filtrosValidos = 'all' | 'active' | 'completed'; 

export const setFiltro = createAction(
    '[Filtro] Set filtro',
    props<{filtro: filtrosValidos}>()
); 
