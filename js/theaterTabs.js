const container = document.querySelector('.inner_nav')

function tabNavClick(it) {
    const currentTab = container.querySelector('.tab.active')
    const switchTab = container.querySelector(`.${it.dataset.tab}`)

    currentTab.classList.remove('active')
    switchTab.classList.add('active')

    const currentNav = container.querySelector('.nav_items .item.active')
    currentNav.classList.remove('active')

    it.classList.add('active')
}