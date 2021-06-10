import RollupPluginDelete from 'rollup-plugin-delete'
import RollupPluginTypescript from '@rollup/plugin-typescript'
import Package from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        // file: 'dist/index.cjs.js',
        format: 'cjs',
        exports: 'auto',
      },
      {
        dir: 'dist',
        // file: 'dist/index.esm.js',
        format: 'esm',
        exports: 'auto',
      },
    ],
    plugins: [
      RollupPluginDelete({
        targets: 'dist/*'
      }),
      RollupPluginTypescript()
    ],
    external: Object.keys(Package.peerDependencies || {})
  }
];