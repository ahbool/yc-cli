const fs = require('fs')
const program = require('commander')
const download = require('download-git-repo')
const inquirer = require('inquirer')
const handlebars = require('handlebars')
const ora = require('ora')
const chalk = require('chalk')
const symbols = require('log-symbols')

program.version('1.0.0', '-v, --version')
	.command('init <name>')
	.action((name) => {

		const projectName = name

		if(fs.existsSync(projectName)){
            console.log(symbols.error, chalk.red('项目已存在'))
            return
		}

		fs.mkdirSync(projectName, 0755)


		inquirer.prompt([
			{
				type: 'input',
				name: 'description',
				message: '请输入项目描述:'
			},
			{
				type: 'input',
				name: 'author',
				message: '请输入作者名称:'
			}
		]).then((answers) => {

			const spinner = ora({text:'正在下载模板...'}).start()

			const targetPath = projectName

			download('github:sindresorhus/log-symbols', targetPath, (err) => {

				spinner.succeed()

				if(err){
					console.log(symbols.error, chalk.red('模板下载失败...'))
					console.log(err)
				} else {
					const meta = {
						name: projectName,
						description: answers.description,
						author: answers.author
					}

					const fileName = `${targetPath}/package.json`

					if(fs.existsSync(fileName)){
						const content = fs.readFileSync(fileName).toString()
						const result = handlebars.compile(content)(meta)
						fs.writeFileSync(fileName, result)
					} else {
						console.log(symbols.error, chalk.red('模板文件解析错误'))
					}

					console.log(symbols.success, chalk.green('项目初始化完成'))
				}
			})
		})
	})

function initVue(){

}
function initReact(){

}
function initWebpack(){

}
function initFis(){

}

program.parse(process.argv)
