module.exports = {
    // dangerouslyUpdateWebpackConfig(config) {
    //     if (!config.devServer) {
    //         config.devServer = {};
    //     }
    //     config.devServer.disableHostCheck = true;
    //     return config;
    // },
    // getExampleFilename(componentPath) {
    //     console.log(componentPath)
    //     return componentPath.replace(/\.jsx?$/, '.examples.md')
    // },

    // propsParser: require('react-docgen').parse,
    // webpackConfig: require('react-scripts/config/webpack.config'),
    // components: 'src/components/**/[A-Z]*.js'

    // webpackConfig: {
    //     plugins:[
    //         new webpack.DefinePlugin({
    //             process: {env: {}}
    //         })
    //     ]
    // },

    pagePerSection: true,
    sections: [
        {
            name: 'Introduction',
            content: 'src/documentation/introduction.md',
            sectionDepth: 0,
        },
        {
            name: 'Styleguide',
            pagePerSection: false,
            sectionDepth: 2,
            sections: [
                {
                    name: 'Typography',
                    content: 'src/documentation/typography.md',
                    description: 'Typo description'
                },
            ]
        },
        {
            name: 'UI Components',
            pagePerSection: false,
            sectionDepth: 1,
            content: 'src/documentation/components.md',
            components: 'src/components/**/[A-Z]*.js',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
        }
    ]
};
