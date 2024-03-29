import type { ThemeType } from '@ant-design/icons-angular';

export interface AppMenu {
  path: string;
  text: string;
  icon?: string;
  iconTheme?: ThemeType;
  submenus?: AppMenu[];
}

export const APP_MENUS: AppMenu[] = [
  {
    path: '/welcome',
    icon: 'home',
    text: 'Home',
  },
  {
    path: '/basic',
    icon: 'appstore',
    text: 'Getting Started',
  },
];
