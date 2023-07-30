let connection = document.querySelector('#net-check')
let connectionText = document.querySelector('#net-check h2')
let connectionIcon = document.querySelector('#net-icon')
let cancelBtn = document.querySelector('.cancel')

window.addEventListener('offline', () => {
    connection.style.display = 'flex'
    connectionText.innerHTML = 'No internet connection'
    connectionIcon.className = 'bi-wifi-off offline'
    connection.style.borderTop = '3.5px solid var(--offline-clr)'
    connection.style.animation = 'show-notif 500ms ease forwards'
    console.log('offline');
})

window.addEventListener('online', () => {
    connectionText.innerHTML = 'Restored Connection'
    connectionIcon.className = 'bi bi-wifi online'
    connection.style.borderTop = '3.5px solid var(--online-clr)'
    setTimeout(() => {
        connection.style.animation = 'hide-notif 500ms ease forwards'
        console.log('animation start');
    }, 2000);
    setTimeout(() => {
        connection.style.display = 'none'
        console.log('display none');
    }, 4000)
    console.log('online');
})

// * cancel button for closing manually

cancelBtn.addEventListener('click', () => {
    connection.style.animation = `hide-notif 500ms ease forwards`
    setTimeout(() => {
        connection.style.display = 'none'
    }, 1000);

})