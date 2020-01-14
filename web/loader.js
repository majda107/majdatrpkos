if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('worker.js').then(function (response) {
        console.log('Registration Successful', response)
    }, function (error) {
        console.log('Registration Failed', error)
    })
}