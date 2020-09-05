import { SidebarActionTypes } from './sidebar.types';

export const toggleSidebar = hidden => ({
  type: SidebarActionTypes.TOGGLE_SIDEBAR,
  payload: hidden
});