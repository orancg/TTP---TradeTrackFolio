const formatMoney = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

export default formatMoney