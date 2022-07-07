import { Linter } from 'eslint'

const config: Linter.BaseConfig = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {},
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
            /**
             * The following rules are already checked by the TypeScript compiler.
             * Inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
             */
            rules: {
                'constructor-super': 'off', // ts(2335) & ts(2377)
                'getter-return': 'off', // ts(2378)
                'no-const-assign': 'off', // ts(2588)
                'no-dupe-args': 'off', // ts(2300)
                'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
                'no-dupe-keys': 'off', // ts(1117)
                'no-func-assign': 'off', // ts(2539)
                'no-import-assign': 'off', // ts(2539) & ts(2540)
                'no-new-symbol': 'off', // ts(2588)
                'no-obj-calls': 'off', // ts(2349)
                'no-redeclare': 'off', // ts(2451)
                'no-setter-return': 'off', // ts(2408)
                'no-this-before-super': 'off', // ts(2376)
                'no-undef': 'off', // ts(2304)
                'no-unreachable': 'off', // ts(7027)
                'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
                'valid-typeof': 'off', // ts(2367)
            },
        },
    ],
}

module.exports = config
