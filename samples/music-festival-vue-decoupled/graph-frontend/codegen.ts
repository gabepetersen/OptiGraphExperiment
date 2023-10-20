import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'https://cg.optimizely.com/content/v2?auth=XoXsOl2bScWZzguDUylvaaZ5PEAAH5tg5qme0NebCHzEpyO4',
    documents: ['./src/**/*.graphql'],
    generates: {
        './src/generated.ts': {
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
        }
    }
}

export default config