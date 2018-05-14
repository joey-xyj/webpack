module.exports={
	//入口
	entry:{
		index:__dirname+"/src/main.js"
	},
	output:{
		path:__dirname+"/dist",
		filename:"[name].js"
	},
	devServer:{
		contentBase:__dirname+"/dist",
		port:8080
	},
	watch:true,
	module:{
		rules:[
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test:/\.scss$/,
				use:['style-loader','css-loader','sass-loader']
			},
			{
				test:/\.(jpg|png|gif)$/,
				use:["url-loader"]
			}
			/*{
				test:/\.(jpg|png|gif)$/,
				use:['file-loader']
			}*/
		]
	}
}
