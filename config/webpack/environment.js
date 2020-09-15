const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
    })
)

module.exports = environment

// ---------------- Option B ---------------- 
/* const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.append(
    'Provide',
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'],
    })
)

module.exports = environment */

// ------- Option C (ES6 Module syntax)-------- 
/* import { environment } from 'rails/webpacker'
import { ProvidePlugin } from 'webpack'

environment.plugins.append(
    'Provide',
    new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
    })
)

export default environment */