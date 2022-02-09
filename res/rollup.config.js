const rollup = require('rollup');
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
import tailwind from 'rollup-plugin-tailwindcss';
import copy from 'rollup-plugin-copy'


const env = process.env.NODE_ENV

export default {
  input: [
    'src/main.js'
  ],
  output:{
      dir:"dist"
  },
  plugins: [
    copy({
        targets: [
          { src: 'src/index.html', dest: 'dist' },
          { src: 'src/component/*', dest: 'dist/component' },
          { src: 'src/widget/*', dest: 'dist/widget'},
        ]
    }),
    scss(
      {
        output: 'dist/bundle.css',
        sourceMap: true,
        sourceMapEmbed: true,
        include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
        failOnError: true,
        watch: 'src/',
      }
    ),
    sourcemaps(),
    tailwind({
        input: 'src/input.css', // required
        // Tailor the emitted stylesheet to the bundle by removing any unused CSS
        // (highly recommended when packaging for distribution).
        purge: false,
    }),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
  ]
};