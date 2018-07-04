const fs = require('fs')
const program = require('commander')
const download = require('download-git-repo')
const inquirer = require('inquirer')
const handlebars = require('handlebars')
const ora = require('ora')
const chalk = require('chalk')
const symbols = require('log-symbols')


program.version('1.0.0', '-v, --version')
	.command('init <project-name>')
	.action((projectName) => {

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
			},
      {
      type: 'rawlist',
        name: 'ui',
        message: '选择模板类型',
        choices: ['Vue', 'React']
      },
      {
        type: 'rawlist',
        name: 'tool',
        message: '选择要使用的构建工具',
        choices: ['Fis3', 'Webpack'],
      }
		]).then((answers) => {

			const spinner = ora({text:'正在下载模板...'}).start()

			const targetPath = projectName

			download('github:ahbool/H5Template#vue', targetPath, (err) => {

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

          initialize(answers.ui)
          initialize(answers.tool)

					console.log(symbols.success, chalk.green('项目初始化完成'))
				}
			})
		})
	})

var initialize = {
  'Vue': function(){

  },
  'React': function(){

  },
  'Webpack': function(){

  },
  'Fis3': function(){

  }
}

program.parse(process.argv)
