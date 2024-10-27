import dotenv from 'dotenv';
import type { CodegenConfig } from '@graphql-codegen/cli';

dotenv.config();

const config: CodegenConfig = {
	schema: `${process.env.VITE_BACKEND_SITE_URL}/api/graphql`,
	documents: ['./src/**/*.graphql'],
	overwrite: true,
	generates: {
		'./src/graphql/types.ts': {
			plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
			config: {
				useTypeImports: true,
				useIndexSignature: true,
				dedupeFragments: true,
				avoidOptionsal: true,
				strictScalars: true,
				makeResolverTypeCallable: true,
				scalars: {
					DateTime: { input: 'string', output: 'string' },
					EmailAddress: { input: 'string', output: 'string' },
					JSON: { input: 'Record<string, unknown>', output: 'Record<string, unknown>' },
					JSONObject: { input: 'Record<string, unknown>', output: 'Record<string, unknown>' }
				}
			}
		}
	},
	ignoreNoDocuments: true
};

export default config;
