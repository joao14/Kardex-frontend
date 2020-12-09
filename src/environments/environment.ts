const IP: string = "https://addsoft-tech.com:"
const PUERTO: string = "8443"

const URL: string = IP + PUERTO;

export const environment = {
    production: false,
    email: 'lukassant77@gmail.com',
    url: 'https://addsoft-tech.com:8443/rmi/',
    login: URL + '/giz/api/auth/login',
    getusers: URL + '/giz/api/person/all',
    register: URL + '/giz/api/persons/register/T0001',
    questionnaries: URL + '/giz/api/test/',
    usersbyquestionnaries: URL + '/giz/api/people/by/',
    client: URL + '/romi/apirm/crm/clients',
    addclient: URL + '/romi/apirm/crm/client/add',
    updateclient: URL + '/romi/apirm/crm/client/update',
    users: URL + '/romi/apirm/user/all',
    adduser: URL + '/giz/api/person/create',
    updateuser: URL + '/giz/api/user/update',
    resetpassword: URL + '/romi/apirm/user/reset/pass/',
    roles: URL +'/romi/apirm/user/roles/all',
    rolesbyuser: URL + '/romi/apirm/user/usro/add',
    removeroles: URL +'/romi/apirm/user/usro/remove',
    flowers: URL + '/romi/apirm/crm/flowers',
    addflowers: URL + '/romi/apirm/crm/flower/add',
    updateflowers: URL + '/romi/apirm/crm/flower/update',
    searchflower: URL +'/romi/apirm/crm/flower/',
    addresourcesflower: URL + '/romi/apirm/crm/flower/resource/add',
    removeresourcesflower: URL + '/romi/apirm/crm/flower/resource/remove/',
    finca: URL + '/romi/apirm/crm/farms',
    addfinca: URL + '/romi/apirm/crm/farm/add',
    updatefinca: URL + '/romi/apirm/crm/farm/update',
    empresaCargo: URL + '/romi/apirm/crm/cargocompanies',
    addempresaCargo: URL + '/romi/apirm/crm/cargocompany/add',
    updateempresaCargo: URL + '/romi/apirm/crm/cargocompany/update',
    marcaciones: URL + '/romi/apirm/crm/marks/',
    addmarcaciones: URL + '/romi/apirm/crm/mark/add',
    updatemarcaciones: URL + '/romi/apirm/crm/mark/update',
    registerinvoice: URL + '/romi/apirm/invoice/register',
    searchtype: URL +'/romi/apirm/crm/entity/',
    registerpaymentandclaim: URL +'/romi/apirm/trx/register',
    registerprealert: URL +'/romi/apirm/prealert/register',
    getsales: URL + '/romi/apirm/invoice/find/date/',
    getinvoicesbyclient: URL + '/romi/apirm/trx/find/cliedate/',
    getmarcsbyname: URL + '/romi/apirm/crm/mark/find/',
    getprealertactive: URL + '/romi/apirm/prealert/actives',
    sendEmail: URL +'/romi/apirm/crm/mail/send/trx',
    invoicesdrafts: URL +'/romi/apirm/invoice/drafts',
    prealertdrafts: URL + '/romi/apirm/prealert/drafts',
    charts: URL + '/romi/apirm/crm/data/charts'
    

};
