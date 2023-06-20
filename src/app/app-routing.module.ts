import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/app/views/home/home.component";
import { ProductsDetailComponent } from "src/app/views/products-detail/products-detail.component";
import { ProductsComponent } from "src/app/views/products/products.component";
import { AboutComponent } from "src/app/views/about/about.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "products",
    children: [
      { path: "", component: ProductsComponent },
      { path: "detail/:id", component: ProductsDetailComponent },
    ],
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//path: home - /home
//path: product - /products/detail
