const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	// entry: ['./blocks/index.js', './blocks/editor.scss', './blocks/frontend.scss'],
	entry: ['./style.scss'],
	output: {
		path: path.resolve(__dirname, 'bundle'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].bundle.css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					// {
					// 	loader: 'postcss-loader'
					// },
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};