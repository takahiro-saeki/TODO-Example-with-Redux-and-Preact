module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": [
      2,
      {
        "singleQuote": true,
        "semi": true
      },
    ],
    "comma-dangle": 0,
    "react/react-in-jsx-scope": 0,
    "no-unused-vars": [0, { "varsIgnorePattern": "^h$" }]
  }
};
