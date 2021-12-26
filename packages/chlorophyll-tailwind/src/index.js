const plugin = require ('tailwindcss/plugin')

module.exports = plugin(function({addComponents}) {
    const patterns = {
        '.hello-world:after': {
            content: "'Hello world!'",
        },
        '.btn': {
            backgroundColor: '#3490dc',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#2779bd'
            },
        }
    }

    addComponents(patterns)
})