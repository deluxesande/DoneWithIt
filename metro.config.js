const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Your custom configuration
const customConfig = {
    transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
        assetExts: defaultConfig.resolver.assetExts.filter(
            (ext) => ext !== "svg"
        ),
        sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
    },
};

module.exports = Object.assign({}, defaultConfig, customConfig);
