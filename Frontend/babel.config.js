module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.js', '.jsx', '.json', '.svg', '.png'],
                alias: [
                    {'@styles': './src/styles'},
                    {'@components': './src/components'},
                    {'@constants': './src/constants'},
                    {'@utils': './src/utils'},
                    {'@ducks': './src/redux/ducks'},
                    {'@sagas': './src/redux/sagas'},
                    {'@config': './src/config'},
                    {'@nav': './src/navigation/rootNavigation'},
                ],
            },
        ],
    ],
};
