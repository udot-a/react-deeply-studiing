import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options;

	const cssLoaders = buildCssLoader(isDev);

	const codeBabelLoader = buildBabelLoader(false);
	const tsxBabelLoader = buildBabelLoader(true);

	// const babelLoader = {
	// 	test: /\.m?(js|ts|jsx|tsx)$/,
	// 	exclude: /node_modules/,
	// 	use: {
	// 		loader: 'babel-loader',
	// 		options: {
	// 			presets: ['@babel/preset-env']
	// 		}
	// 	}
	// };

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: ['i18next-extract', {
						locales: ['ru', 'en'],
						keyAsDefaultValue: true,
					}],
				},
			},
		],
	};

	// const cssLoaders = {
	// 	test: /\.s[ac]ss$/i,
	// 	use: [
	// 		isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
	// 		{
	// 			loader: 'css-loader',
	// 			options: {
	// 				modules: {
	// 					auto: (resPath: string) => Boolean(resPath.includes('.module.')),
	// 					localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
	// 				},
	// 			},
	// 		},
	// 		'sass-loader',
	// 	],
	// };

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		fileLoader,
		svgLoader,
		codeBabelLoader,
		tsxBabelLoader,
		// typescriptLoader,
		cssLoaders,
	];
}
