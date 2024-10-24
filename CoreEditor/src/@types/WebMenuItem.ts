/**
 * Represents a menu item in native menus.
 */
export interface WebMenuItem {
  separator: boolean;
  title?: string;
  actionID?: string;
  key?: string;
  modifiers?: string[];
  children?: CodeGen_Self[];
}