var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/username/hpees-vp.git',
        user: {
            name: 'Xenor Chang',
            email: 'tubaxenor@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
