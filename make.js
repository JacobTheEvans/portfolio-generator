const { question, keyInYN } = require('readline-sync')
const { version } = require('./package.json')
const { writeFile } = require('fs')

function main () {
  console.log(`Starting portfolio maker version ${version}`)
  const theme = genTheme()
  let templates = []
  while (true) {
    templates.push(genTemplate())
    const addAnother = getBoolean('Would you like to add another template?')
    if (!addAnother) break
  }
  const config = `${result('theme', theme)}\n\n${result('templates', templates)}`
  writeFile('./src/config.js', config, err => {
    if (err) console.log(err)
    else {
      console.log('Config generated')
      console.log('Update your package.json "homepage" to match http://<gitname>.github.io/portfolio-generator')
      console.log('Run "npm run build" to make your website')
      console.log('Then run "npm run deploy" to push to github')
      console.log('For more details checkout the README.md')
    }
  })
}

function genTheme () {
  let main = questionLoop('Theme main color: (Note if hex you must include the #)')
  let secondary = questionLoop('Themes secondary color: (Note if hex you must include the #)')
  return {
    main,
    secondary
  }
}

function genTemplate () {
  const headerOverrides = {}
  const template = {}
  const templateIsEnglish = getBoolean(`Will this template be in english?`)
  if (!templateIsEnglish) {
    console.log('Two characters for your language: (Example: EN, DE, ES)')
    template.language = question('>> ')
  } else {
    template.language = 'EN'
  }
  template.header = genHeader()
  if (getBoolean(`Add an about section?`)) {
    if (!templateIsEnglish) {
      console.log('About me override: (Note can be left blank)')
      headerOverrides.about = question('>> ')
    }
    template.about = genAbout()
  }
  if (getBoolean(`Would you like a skills section?`)) {
    if (!templateIsEnglish) {
      console.log('Skills: (Note can be left blank)')
      headerOverrides.skills = question('>> ')
    }
    template.skills = genSkills()
  }
  if (getBoolean(`Would you like a projects section?`)) {
    if (!templateIsEnglish) {
      console.log('Projects override: (Note can be left blank)')
      headerOverrides.projects = question('>> ')
    }
    template.projects = genProjects()
  }
  if (getBoolean(`Would you like a testimonials section?`)) {
    if (!templateIsEnglish) {
      console.log('Testimonials override: (Note can be left blank)')
      headerOverrides.testimonials = question('>> ')
    }
    template.testimonials = genTestimonials()
  }
  template.footer = genFooter()
  return template
}

function genHeader () {
  let brand = questionLoop('Main Header: ')
  let slogan = questionLoop('Sub Header: ')
  return {
    brand,
    slogan
  }
}

function genSkills () {
  const result = {}
  while (true) {
    const sectionHeader = questionLoop('Section Header: ')
    let skills = []
    while (true) {
      skills.push(questionLoop('Skill: '))
      const addAnother = getBoolean('Would you like to add another skill?')
      if (!addAnother) break
    }
    result[sectionHeader] = skills
    const addAnother = getBoolean('Would you like to add another skill section?')
    if (!addAnother) break
  }
  return result
}

function genAbout (templateIsEnglish) {
  let brand = questionLoop('Picture URL: ')
  let slogan = questionLoop('Description:  (Note around 300 characters looks best) ')
  return {
    brand,
    slogan
  }
}

function genProjects () {
  const result = []
  while (true) {
    const name = questionLoop('Project name: ')
    const description = questionLoop('Project Description: ')
    const url = questionLoop('Project URL: ')
    result.push({
      name,
      description,
      url
    })
    const addAnother = getBoolean('Would you like to add another project?')
    if (!addAnother) break
  }
  return result
}

function genTestimonials () {
  const result = []
  while (true) {
    const name = questionLoop('Author name: ')
    const title = questionLoop('Author Title: ')
    const text = questionLoop('Text: ')
    result.push({
      name,
      title,
      text
    })
    const addAnother = getBoolean('Would you like to add another testimonial?')
    if (!addAnother) break
  }
  return result
}

function genFooter () {
  const social = []
  while (true) {
    const link = questionLoop('Footer link: ')
    const icon = questionLoop('Fontawesome icon: ')
    social.push({
      link,
      icon
    })
    const addAnother = getBoolean('Would you like to add another social link?')
    if (!addAnother) break
  }
  const year = questionLoop('Copyright year: ')
  return {
    year,
    social
  }
}

function result (varName, data) {
  return `export const ${varName} = ${convert(data)}`
}

function convert (obj) {
  return JSON.stringify(obj, undefined, 2)
}

function questionLoop (text) {
  let result = ''
  while (result.length === 0) {
    console.log(text)
    result = question('>> ')
  }
  return result
}

function getBoolean (text) {
  console.log(text)
  return keyInYN('>> ')
}

main()
