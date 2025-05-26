import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {latexInput} from 'sanity-plugin-latex-input'

export default defineConfig({
  name: 'default',
  title: 'akinsanya portfolio blog',

  projectId: '2phg44xq',
  dataset: 'production',

  plugins: [structureTool(), latexInput()],

  schema: {
    types: schemaTypes,
  },
})
