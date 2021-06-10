import RollupPluginDelete from 'rollup-plugin-delete'
import RollupPluginTypescript from '@rollup/plugin-typescript'
import RollupPluginStyles from 'rollup-plugin-styles'

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
      RollupPluginStyles()
    ],
  }
];