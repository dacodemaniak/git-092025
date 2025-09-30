(() => {
    document.querySelector('body').classList.add('dark')
})()

const switchMode = () => {
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
        body.classList.add('light')
    } else {
        body.classList.remove('light')
        body.classList.add('dark')
    }
}