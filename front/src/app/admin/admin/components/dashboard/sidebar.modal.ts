interface MenuItem {
  title: string;
  type: string;
  icon?: string;
  active?: boolean;
  badge?: { text: string; class: string };
  submenus?: MenuItem[];
}
