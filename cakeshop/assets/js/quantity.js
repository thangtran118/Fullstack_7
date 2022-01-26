const Quantity = {
    nums: 1,
    minNumber: 1,
    maxNumber: 5,
    selector: {
        valueSelector: '.quantity .quantity__nums',
        upSelector: '.quantity .quantity__up',
        downSelector: '.quantity .quantity__down',
    },
    update: (wrapSelector) => {
        const selector = Quantity.selector

        const wrap = $(wrapSelector)

        const down = wrap.find(selector.downSelector)
        const up = wrap.find(selector.upSelector)
        const value = wrap.find(selector.valueSelector)

        up.click(() => {
            Quantity.nums++
            value.val(Quantity.nums)
            if (Quantity.nums == Quantity.minNumber + 1) {
                down.removeClass('disabled')
            }
            if (Quantity.nums == Quantity.maxNumber) {
                up.addClass('disabled')
            }
        })
        down.click(() => {
            Quantity.nums--
            value.val(Quantity.nums)
            if (Quantity.nums == Quantity.maxNumber - 1) {
                up.removeClass('disabled')
            }
            if (Quantity.nums == Quantity.minNumber) {
                down.addClass('disabled')
            }
        })
    },
}

export default Quantity
