module.exports = {
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.js$": "babel-jest"
  },
  setupTestFrameworkScriptFile: "./enzyme.setup.js",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  verbose: true,
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|my-project|react-native-button)/)"
  ]
};
