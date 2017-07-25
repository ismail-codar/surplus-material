import * as Surplus from 'surplus'; Surplus;

export = (ctrl: any) =>
    <nav className="mdc-toolbar-fixed-adjust">
        <ul className="catalog-list mdc-list mdc-list--two-line">
            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_button_24px.svg" /></span>
                <a href="button" className="mdc-list-item__text">
                    Button
                <span className="mdc-list-item__text__secondary">Raised and flat buttons</span>
                </a>
            </li>
            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_card_24px.svg" /></span>
                <a href="card" className="mdc-list-item__text">
                    Card
                <span className="mdc-list-item__text__secondary">Various card layout styles</span>
                </a>
            </li>
            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_selection_control_24px.svg" /></span>
                <a href="checkbox" className="mdc-list-item__text">
                    Checkbox
                <span className="mdc-list-item__text__secondary">Multi-selection controls</span>
                </a>
            </li>
            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_dialog_24px.svg" /></span>
                <a href="dialog" className="mdc-list-item__text">
                    Dialog
                <span className="mdc-list-item__text__secondary">Secondary text</span>
                </a>
            </li>
            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_side_navigation_24px.svg" /></span>
                <a href="drawer/temporary-drawer" className="mdc-list-item__text">
                    Drawer
                <span className="mdc-list-item__text__secondary">Temporary</span>
                </a>
            </li>
            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_side_navigation_24px.svg" /></span>
                <a href="drawer/persistent-drawer" className="mdc-list-item__text">
                    Drawer
                <span className="mdc-list-item__text__secondary">Persistent</span>
                </a>
            </li>
            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_side_navigation_24px.svg" /></span>
                <a href="drawer/permanent-drawer-above-toolbar" className="mdc-list-item__text">
                    Drawer
                <span className="mdc-list-item__text__secondary">Permanent drawer above toolbar</span>
                </a>
            </li>
            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_side_navigation_24px.svg" /></span>
                <a href="drawer/permanent-drawer-below-toolbar" className="mdc-list-item__text">
                    Drawer
                <span className="mdc-list-item__text__secondary">Permanent drawer below toolbar</span>
                </a>
            </li>
            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_shadow_24px.svg" /></span>
                <a href="elevation" className="mdc-list-item__text">
                    Elevation
                <span className="mdc-list-item__text__secondary">Shadow for different elevations</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_button_24px.svg" /></span>
                <a href="fab" className="mdc-list-item__text">
                    Floating action button
                <span className="mdc-list-item__text__secondary">The primary action in an application</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_card_24px.svg" /></span>
                <a href="grid-list" className="mdc-list-item__text">
                    Grid list
                <span className="mdc-list-item__text__secondary">2D grid layouts</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_component_24px.svg" /></span>
                <a href="icon-toggle" className="mdc-list-item__text">
                    Icon toggle
                <span className="mdc-list-item__text__secondary">Toggling icon states</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_card_24px.svg" /></span>
                <a href="layout-grid" className="mdc-list-item__text">
                    Layout grid
                <span className="mdc-list-item__text__secondary">Grid and gutter support</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_progress_activity.svg" /></span>
                <a href="linear-progress" className="mdc-list-item__text">
                    Linear progress
                <span className="mdc-list-item__text__secondary">Fills from 0% to 100%, represented by bars</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_list_24px.svg" /></span>
                <a href="list" className="mdc-list-item__text">
                    List
                <span className="mdc-list-item__text__secondary">Item layouts in lists</span>
                </a>
            </li>


            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_radio_button_24px.svg" /></span>
                <a href="radio" className="mdc-list-item__text">
                    Radio buttons
                <span className="mdc-list-item__text__secondary">Single selection controls</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_ripple_24px.svg" /></span>
                <a href="ripple" className="mdc-list-item__text">
                    Ripple
                <span className="mdc-list-item__text__secondary">Touch ripple</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_menu_24px.svg" /></span>
                <a href="select" className="mdc-list-item__text">
                    Select
                <span className="mdc-list-item__text__secondary">Popover selection menus</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_menu_24px.svg" /></span>
                <a href="simple-menu" className="mdc-list-item__text">
                    Simple Menu
                <span className="mdc-list-item__text__secondary">Pop over menus</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/slider.svg" /></span>
                <a href="slider" className="mdc-list-item__text">
                    Slider
                <span className="mdc-list-item__text__secondary">Range Controls</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_toast_24px.svg" /></span>
                <a href="snackbar" className="mdc-list-item__text">
                    Snackbar
                <span className="mdc-list-item__text__secondary">Transient messages</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_switch_24px.svg" /></span>
                <a href="switch" className="mdc-list-item__text">
                    Switch
                <span className="mdc-list-item__text__secondary">On off switches</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_tabs_24px.svg" /></span>
                <a href="tabs" className="mdc-list-item__text">
                    Tabs
                <span className="mdc-list-item__text__secondary">Tabs with support for icon and text labels</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_text_field_24px.svg" /></span>
                <a href="textfield" className="mdc-list-item__text">
                    Text field
                <span className="mdc-list-item__text__secondary">Single and multiline text fields</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_theme_24px.svg" /></span>
                <a href="theme" className="mdc-list-item__text">
                    Theme
                <span className="mdc-list-item__text__secondary">Using primary and accent colors</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_toolbar_24px.svg" /></span>
                <a href="toolbar/index" className="mdc-list-item__text">
                    Toolbar
                <span className="mdc-list-item__text__secondary">Header and footers</span>
                </a>
            </li>

            <li className="mdc-list-item">
                <span className="catalog-list-icon mdc-list-item__start-detail"><img className="catalog-component-icon" src="/demo/images/ic_typography_24px.svg" /></span>
                <a href="typography" className="mdc-list-item__text">
                    Typography
                <span className="mdc-list-item__text__secondary">Type hierarchy</span>
                </a>
            </li>
        </ul>
    </nav>