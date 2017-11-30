var vm = new Vue({
    el: '#example',
    data: {
        message: 'hello'
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})

// console.log(vm.reversedMessage)
// vm.message = '123456789'
// console.log(vm.reversedMessage)