import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    generates: {
        './src/generated.ts': {
            documents: ['./src/graphql/**/*.graphql'],
            schema: 'https://cg.optimizely.com/content/v2?auth=XoXsOl2bScWZzguDUylvaaZ5PEAAH5tg5qme0NebCHzEpyO4',
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-query'
            ],
            config: {
                withHooks: true,
                fetcher: {
                    endpoint: 'https://cg.optimizely.com/content/v2?auth=XoXsOl2bScWZzguDUylvaaZ5PEAAH5tg5qme0NebCHzEpyO4'
                }
            }
        },
        './src/country-generated.ts': {
            documents: ['./src/countries-graphql/**/*.graphql'],
            schema: 'https://countries.trevorblades.com',
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-query'
            ]
        }
    }
}

export default config