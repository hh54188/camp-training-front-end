const path = require('path')

const TRAINING_DASHBOARD_ENTRY = path.join(__dirname, '../src/camp_training/index.js')

const PUBLIC_DIR = path.join(__dirname, '../public')
const DIST_DIR = path.join(PUBLIC_DIR, '/dist')
const TRAINING_TEMPLATE_HTML = path.join(__dirname, './templates/training_template.html')

module.exports = {
  TRAINING_DASHBOARD_ENTRY,
  TRAINING_TEMPLATE_HTML,

  PUBLIC_DIR,
  DIST_DIR
}
