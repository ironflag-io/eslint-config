import { Linter } from 'eslint'

const config: Linter.BaseConfig = {
    extends: ['./configs/typescript'].map((rule) => require.resolve(rule)),
}

module.exports = config
