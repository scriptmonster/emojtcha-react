import RollupPluginDelete from 'rollup-plugin-delete'
import RollupPluginTypescript from '@rollup/plugin-typescript'
import RollupPluginStyles from 'rollup-plugin-styles'
import RollupPluginJson from '@rollup/plugin-json'
import RollupPluginExternal from 'rollup-plugin-peer-deps-external'
import packageJson from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        exports: 'auto',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        exports: 'auto',
      },
      {
        dir: 'dist',
        format: 'esm',
        exports: 'auto'
      }
    ],
    plugins: [
      RollupPluginDelete({
        targets: 'dist/*'
      }),
      RollupPluginTypescript(),
      RollupPluginStyles(),
      RollupPluginJson()
    ],
    external: (() => {
      console.log(packageJson.peerDependencies)
      return Object.keys(packageJson.peerDependencies || {})
    })()
  }
];