import { defineConfig } from 'cypress'
import webpack from '@cypress/webpack-preprocessor'
import preprocessor from '@badeball/cypress-cucumber-preprocessor'
import path from 'path'

export async function setupNodeEvents (on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js', '.mjs'],
          alias: {
            '@page': path.resolve('cypress/support/pages/'),
            '@page_visit': path.resolve('cypress/support/pages/')
          }
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config
                }
              ]
            }
          ]
        }
      }
    })
  )

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

export default defineConfig({
  e2e: {
    specPattern: '**/e2e/*.feature',
    supportFile: false,
    experimentalWebKitSupport: true,
    experimentalRunAllSpecs: true,
    setupNodeEvents
  }
})
