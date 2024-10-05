import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

export function buildBabelLoader ({ isTsx, isDev }: {isTsx: boolean, isDev: boolean}) {
	return {
		test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				presets: ['@babel/preset-env'],
				plugins: [
					'@babel/plugin-transform-runtime',
					[
						'@babel/plugin-transform-typescript',
						{ isTsx },
					],
					isTsx && !isDev && [babelRemovePropsPlugin, { props: ['data-testid'] }]
				].filter(Boolean),
			}
		}
	};
}
