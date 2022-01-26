import Quantity from './quantity.js'

function handleModal(options) {
    let ops = {
        openSelector: '',
        closeSelector: '',
        wrapSelector: '',
        mainSelector: '',
        className: 'show',
        hideOutSide: false,
        show: true,
        hide: true,
    }
    ops = Object.assign(ops, options)

    const wrap = $(ops.wrapSelector)
    const openBtn = $(ops.openSelector)
    const closeBtn = $(ops.closeSelector)
    const main = $(ops.mainSelector)

    if (ops.show && openBtn && wrap) {
        openBtn.click((e) => {
            e.preventDefault()
            wrap.addClass(ops.className)
            e.stopPropagation()
        })
    }
    if (ops.hide && closeBtn && wrap) {
        closeBtn.click((e) => {
            e.preventDefault()
            wrap.removeClass(ops.className)
            e.stopPropagation()
        })
    }
    if (ops.hideOutSide && wrap && main) {
        $(window).click((e) => {
            if (wrap.hasClass(ops.className)) {
                if (!main[0].contains(e.target)) {
                    wrap.removeClass(ops.className)
                    e.stopPropagation()
                }
            }
        })
    }
}

const App = {
    menuHeader: () => {
        let menuSelector = {
            wrap: '.header__menu-wrapper',
            open: '#show-header-menu',
            close: '#close-header-menu',
        }
        handleModal({
            openSelector: menuSelector.open,
            closeSelector: menuSelector.close,
            wrapSelector: menuSelector.wrap,
        })

        // switch page
        let page = $('body').attr('page')
        $(menuSelector.wrap)
            .find('.link-to-page.active-page')
            ?.removeClass('active-page')
        $(menuSelector.wrap)
            .find(`.link-to-page[href="${page}.html"]`)
            ?.addClass('active-page')
    },
    cartHeader: () => {
        let cartSelector = {
            wrap: '.header__cart-wrapper',
            open: '#show-header-cart',
            close: '#close-header-cart',
            main: '.header__cart-wrapper .cart',
        }
        handleModal({
            openSelector: cartSelector.open,
            closeSelector: cartSelector.close,
            wrapSelector: cartSelector.wrap,
            mainSelector: cartSelector.main,
            hideOutSide: true,
        })
    },
    banner: () => {
        let bannerSelector = {
            btnSelector: '.banner .banner__btn',
            captionSelector: '.banner .banner__caption',
        }
        const caption = $(bannerSelector.captionSelector)
        const btn = $(bannerSelector.btnSelector)

        $(document).ready(() => {
            caption.addClass('show')
            btn.addClass('show')
        })
    },
    handleCategories: (categoriesSelector) => {
        const categories = $(categoriesSelector)
        const categoryItems = categories.find(categoriesSelector + '__item')
        categoryItems.click((e) => {
            categoryItems.removeClass('active')
            $(e.target).addClass('active')
        })
    },
    handleProductDetail: () => {
        let selector = {
            product: '.product',
            wrapDetail: '.product-detail-wrapper',
            mainDetail: '.product-detail',
            open: '.view-detail-btn',
            close: '.close-product-detail',
            size: '.size__btn',
        }
        $(selector.open).click((e) => {
            const product = $(e.target).closest(selector.product)
            const wrapDetail = product.find(selector.wrapDetail)
            const mainDetail = product.find(selector.mainDetail)
            const closeBtn = wrapDetail.find(selector.close)

            // show and hide product-detail
            wrapDetail.addClass('show')
            Quantity.update(selector.wrapDetail + '.show')
            closeBtn.click((e) => {
                e.preventDefault()
                wrapDetail.removeClass('show')
                e.stopPropagation()
            })
            $(window).click((e) => {
                if (!mainDetail[0].contains(e.target)) {
                    wrapDetail.removeClass('show')
                }
                e.stopPropagation()
            })

            // switch size
            const size = mainDetail.find(selector.size)
            size.click((e) => {
                e.preventDefault()
                mainDetail.find(selector.size + '.active').removeClass('active')
                $(e.target).addClass('active')
                e.stopPropagation()
            })
            e.stopPropagation()
        })
    },
    showAlert: (openSelector) => {
        $(openSelector).click((e) => {
            let titleVal = $(e.target).attr('alert-title')
            let textVal = $(e.target).attr('alert-text')
            let iconVal = $(e.target).attr('alert-icon')
            Swal.fire({
                icon: iconVal,
                title: titleVal,
                text: textVal,
                showConfirmButton: false,
                timer: 1800,
                timerProgressBar: true,
                customClass: {
                    title: 'fs-24',
                    popup: 'fs-16',
                },
            })
        })
    },
    handleSubMenu: (openSelector, wrapSelector) => {
        $(openSelector).click((e) => {
            const itemElement = $(e.target).closest(wrapSelector)
            if (!itemElement.hasClass('show')) {
                $(wrapSelector).removeClass('show')
            }
            itemElement.toggleClass('show')
        })
    },
    delivery: () => {
        let selector = {
            open: '#delivery-details__change-btn',
            close: '#change-delivery__done',
            changeModal: '#change-delivery',
            showModal: '#delivery-details',
        }
        const changeModal = $(selector.changeModal)
        const showModal = $(selector.showModal)
        changeModal.hide()
        $(selector.open).click((e) => {
            e.preventDefault()
            changeModal.show()
            showModal.hide()
            e.stopPropagation()
            $(selector.close).click((e) => {
                changeModal.hide()
                showModal.show()
            })
        })
    },
}

export default App
