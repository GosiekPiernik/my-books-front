const {aliasDangerous, configPaths} = require("react-app-rewire-alias/lib/aliasDangerous");

const {override} = require('customize-cra');


module.exports = {
    webpack: override(
        aliasDangerous(configPaths('./tsconfig.paths.json'))
    ),
};