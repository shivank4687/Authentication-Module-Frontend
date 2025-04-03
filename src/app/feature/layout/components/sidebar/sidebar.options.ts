import { ArrayType } from "@angular/compiler";

export const MENU_ITEMS:SidemenuOptions[]=
[
    {title:'Dashboard',url:''},
    {title:'Students',url:'students'},
    {
        title: 'Settings',
        children: [
          { title: 'Profile', url: '/settings/profile' },
          { title: 'Preferences', url: '/settings/preferences' },
        ],
    },
    {title:'Employees',url:'employees'},
    {title:'Class',url:'class'},
    {title:'subjects',url:'subjects'}
    
];

export interface SidemenuOptions{
    title:string,
    url?:string,
    children?:SidemenuOptions[]
  }