import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crear todo',
    props<{texto:string}>()
);

export const toggle = createAction(
    '[TODO] Cambia checkbox completed',
    props<{id: number}>()
);
export const toggleAll = createAction(
    '[TODO] Cambia all checkbox completed',
    props<{toggleTo: boolean}>()
);

export const editar = createAction(
    '[TODO] Editar todo',
    props<{id: number, texto: string}>()
);

export const eliminar = createAction(
    '[TODO] Eliminar todo',
    props<{id: number}>()
);

export const eliminarCompletados = createAction('[TODO] Eliminar todos completadas');