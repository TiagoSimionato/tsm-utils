declare const _default: ({
  files: string[];
  rules: {
    'antfu/no-top-level-await': string;
    'import/no-default-export': string;
  };
} | {
  files: string[];
  rules: {
    'antfu/no-top-level-await'?: undefined;
    'import/no-default-export': string;
  };
} | import('@antfu/eslint-config').TypedFlatConfigItem)[];
export default _default;
