import {Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  label: string;
  subLabel: string;
  router:string;
  icon:string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html'
})
export class GifsSideMenuOptionsComponent {
  meuOptions: MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Pupulares',
      router: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line'
    },
    {
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      router: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'
    }]
}
