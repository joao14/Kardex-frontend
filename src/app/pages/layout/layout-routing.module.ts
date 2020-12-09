import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            /*{ path: 'clientes', loadChildren: () => import('./crm/clientes/clientes.module').then(m => m.ClientesModule) },
            { path: 'flores', loadChildren: () => import('./crm/flores/flores.module').then(m => m.FloresModule) },
            { path: 'fincas', loadChildren: () => import('./crm/finca/finca.module').then(m => m.FincaModule) },
            { path: 'factura', loadChildren: () => import('./factura/factura.module').then(m => m.FacturaModule) },
            { path: 'pagoreclamo', loadChildren: () => import('./pagoreclamo/pagoreclamo.module').then(m => m.PagoreclamoModule) },
            { path: 'miperfil', loadChildren: () => import('./miperfil/miperfil.module').then(m => m.MiperfilModule) },
            { path: 'edit', loadChildren: () => import('./crm/clientes/edit/edit.module').then(m => m.EditModule) },
            { path: 'editFlower', loadChildren: () => import('./crm/flores/edit/edit.module').then(m => m.EditModule) },
            { path: 'editFinca', loadChildren: () => import('./crm/finca/edit/edit.module').then(m => m.EditModule) },
            { path: 'prealerta', loadChildren: () => import('./prealerta/prealerta.module').then(m => m.PrealertaModule) },
            { path: 'delivery', loadChildren: () => import('./crm/delivery/delivery.module').then(m => m.DeliveryModule) },
            { path: 'editDelivery', loadChildren: () => import('./crm/delivery/edit/edit.module').then(m => m.EditModule) },
            { path: 'marcas', loadChildren: () => import('./crm/marking/marking.module').then(m => m.MarkingModule) },
            { path: 'editMarca', loadChildren: () => import('./crm/marking/edit/edit.module').then(m => m.EditModule) },
            { path: 'balance', loadChildren: () => import('./reporte/balance/balance.module').then(m => m.BalanceModule) },
            { path: 'documento', loadChildren: () => import('./reporte/documento/documento.module').then(m => m.DocumentoModule) },*/
            { path: 'usuario', loadChildren: () => import('./security/usuario/usuario.module').then(m => m.UsuarioModule) },
            { path: 'edituser', loadChildren: () => import('./security/usuario/edit/edit.module').then(m => m.EditModule) },
            /*{ path: 'roles', loadChildren: () => import('./security/roles/roles.module').then(m => m.RolesModule) },
            { path: 'sales', loadChildren: () => import('./reporte/sale/sale.module').then(m => m.SaleModule) },*/
            { path: 'automatic', loadChildren: () => import('./report/automatic/automatic.module').then(m => m.AutomaticModule) },
            { path: 'questionnaire', loadChildren: () => import('./report/questionnaire/questionnaire.module').then(m => m.QuestionnaireModule) } 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
