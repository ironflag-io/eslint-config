#!/usr/bin/env node
// @ts-check

import * as fs from 'node:fs'
import * as path from 'node:path'
import { minify } from 'terser'

/**
 *
 * @param {string} filePath
 * @returns {boolean}
 */
function isDirectory(filePath) {
    return fs.statSync(filePath).isDirectory()
}

/**
 *
 * @param {string} dirPath
 * @returns {string[]}
 */
function getAllJsFiles(dirPath) {
    const files = fs.readdirSync(dirPath)

    return files
        .flatMap((file) => {
            const filePath = path.join(dirPath, file)

            return isDirectory(filePath)
                ? getAllJsFiles(filePath) // force new line for prettier
                : filePath
        })
        .filter((path) => path.endsWith('.js'))
}

/**
 *
 * @param {string[]} filePaths
 */
async function minifyFiles(filePaths) {
    await Promise.all(
        filePaths.map(async (filePath) => {
            const code = fs.readFileSync(filePath, 'utf-8')
            const { code: minifiedCode } = await minify(code)

            if (minifiedCode === undefined) {
                return
            }

            fs.writeFileSync(filePath, minifiedCode)
        }),
    )
}

const targetDir = process.argv[2]
if (targetDir === undefined) {
    throw new Error('Please provide target path.')
}
if (!isDirectory(targetDir)) {
    throw new Error('Target path is not directory.')
}

const files = getAllJsFiles(targetDir)
await minifyFiles(files)
