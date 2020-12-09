export interface flower {
    id: number;
    name: string;
    state: string;
    images: Array<{
        atributo: string;
        descripcion: string;
        reflId: number;
    }>
}