const IP: string = "http://localhost:"
const PUERTO: string = "8081"

const URL: string = IP + PUERTO;

export const environment = {
    production: false,    
    login: URL + '/login',
    products: URL + '/api/kardex/v1/products',
    add: URL + '/api/kardex/v1/register/product',
    update: URL + '/api/kardex/v1/update/product',
    delete: URL + '/api/kardex/v1/delete/product', 
    users: URL + '/api/kardex/v1/users',   
};
