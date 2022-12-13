import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

const aliasPath = require('./tsconfig.json').compilerOptions.paths
const alias = Object.keys(aliasPath).reduce((map, k) => {
  const v = aliasPath[k][0].replace('/*', '')
  k = k.replace('/*', '')
  map[k] = path.resolve(__dirname, v)
  return map
}, {})
console.log(alias)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
})
