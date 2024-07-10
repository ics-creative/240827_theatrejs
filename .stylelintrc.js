module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-selector-bem-pattern",
  ],
  rules: {
    "selector-class-pattern": null,
    "property-no-vendor-prefix": [
      true,
      { ignoreProperties: ["backdrop-filter"] },
    ],
  },
};
