# Optimizely Graph Test

This is a sample decoupled FE that will use the public Optimizely Graph instance at https://cg.optimizely.com/

## FE Setup (React)

> Note: This will use a sample Optimizely GraphQL key that Optimizely provides publically. To integrate the Optimizely.ContentGraph.CMS package into the BE to expose content thru GraphQL, you will need to get specialized keys from the Optimizely DXP cloud service, and I did not have any access to such keys when doing this tutorial. More info here: https://docs.developers.optimizely.com/digital-experience-platform/v1.4.0-content-graph/docs/installation-and-configuration

2. `yarn` or `npm i`
3. `yarn start` or `npm run start`
4. The browser should open http://localhost:3000/ or a similar local hosting URL

## Storybook

Run `yarn storybook` or `npm run storybook`

## Generating new GraphQL Schemas

If you edit `codegen.ts`, ensure you run `yarn generate` or `npm run generate`.
