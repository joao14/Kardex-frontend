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
            { path: 'usuario', loadChildren: () => import('./security/usuario/usuario.module').then(m => m.UsuarioModule) },
            { path: 'edituser', loadChildren: () => import('./security/usuario/edit/edit.module').then(m => m.EditModule) },
            { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
            { path: 'editproduct', loadChildren: () => import('./product/edit/edit.module').then(m => m.EditModule) },
            { path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) }, 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
