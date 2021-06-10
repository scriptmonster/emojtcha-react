const yargs = require('yargs')
const package = require('../package.json')
const fs = require('fs-extra')
const childProcess = require('child_process')

const { argv } = yargs
  .scriptName('yarn dope')
  .usage('$0 [options]')
  .option('m', {
    alias: 'major',
    type: 'boolean',
    description: 'upgrade major version and publish'
  })
  .option('n', {
    alias: 'minor',
    type: 'boolean',
    description: 'upgrade minor version and publish'
  })
  .option('p', {
    alias: 'patch',
    type: 'boolean',
    description: 'upgrade patch version and publish'
  })
  .option('d', {
    alias: 'dry',
    type: 'boolean',
    description: 'dry run mode'
  })
  .check(({ major, minor, patch, dry}) => {
    if (!major && !minor && !patch && !dry) throw new Error('Do not run command without specifying option')
    else return true
  })
  .help()

function getCurrentVersion() {
  const [major, minor, patch ] = package.version.split('.').map(v => parseInt(v, 10))
  return {
    major,
    minor,
    patch
  }
}

function getUpdatedVersion(currentVersion, option) {
  switch (option) {
    case 'dry':
      return currentVersion
    case 'major':
      return {
        major: currentVersion.major + 1,
        minor: 0,
        patch: 0
      }
    case 'minor':
      return {
        ...currentVersion,
        minor: currentVersion.minor + 1,
        patch: 0
      }
    case 'patch':
      return {
        ...currentVersion,
        patch: currentVersion.patch + 1
      }    
  }
}

function getVersionString(version) {
  return Object.values(version).map(v => v.toString()).join('.')
}

function writeUpdatedVersion(updatedVersion) {
  const updatedPackage = Object.assign({}, package)
  updatedPackage.version = getVersionString(updatedVersion)
  const packageJsonString = JSON.stringify(updatedPackage, (_, v) => v, 2)
  fs.writeFileSync('package.json', packageJsonString)
}

function update() {
  console.info('Starting versioning process')
  const option = getOption(argv)
  const currentVersion = getCurrentVersion()
  console.info(`Current Version: ${getVersionString(currentVersion)}`)
  const updatedVersion = getUpdatedVersion(currentVersion, option)
  console.info(`${option.toUpperCase()} update -> ${getVersionString(updatedVersion)}`)
  writeUpdatedVersion(updatedVersion)
  console.info('The new version was written to package.json')
  console.info('Finished versioning process')
  if (option === 'dry') {
    console.info('Skipped publication process because of dry-run mode')
    process.exit(0)
  }
}

function publish() {
  console.info('Starting publication process')
  console.info('Writing temporary directory for publication')
  fs.copySync('dist', 'tmp')
  fs.copyFileSync('package.json', 'tmp/package.json')
  console.info('Start publishing')
  console.time('Finished publising in')
  childProcess.execSync('cd tmp && yarn publish')
  console.timeEnd('Finished publising in')
  console.info('Removing temporary directory')
  fs.rmSync('tmp', {
    recursive: true,
    force: true
  })
  console.info('Finished publication process')
}

function getOption(argv) {
  if (argv.major) return 'major'
  if (argv.minor) return 'minor'
  if (argv.patch) return 'patch'
  if (argv.dry) return 'dry'
}

function main() {
  update()
  publish()
}

main()