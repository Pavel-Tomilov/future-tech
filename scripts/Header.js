class Header {

    selectors = {
root: '[data-js-header]',
overlay: '[data-js-header-overlay]',
burgerButton: '[data-js-header-burger-button]',
    }

    stateClasses = {
isActive: 'is-active',
isLock: 'is-lock'
    }

    constructor () {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerBurttonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerBurttonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }


    bindEvents() {
        this.burgerBurttonElement.addEventListener('click', this.onBurgerButtonClick)
    }
}

export default Header;