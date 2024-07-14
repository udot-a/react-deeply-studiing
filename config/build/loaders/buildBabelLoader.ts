import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

export function buildBabelLoader (isTsx: boolean) {
	return {
		test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					'@babel/plugin-transform-runtime',
					[
						'@babel/plugin-transform-typescript',
						{ isTsx },
					],
					isTsx && [babelRemovePropsPlugin, { props: ['data-testid'] }]
				].filter(Boolean),
			}
		}
	};
}
