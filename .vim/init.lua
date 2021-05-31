SetupLsp('tsserver')
SetupLsp('sumneko_lua')
require 'diagnosticls-nvim'.setup({
  ['javascript'] = {
    formatter = require 'diagnosticls-nvim.formatters.prettier'
  },
  ['typescript'] = {
    formatter = require 'diagnosticls-nvim.formatters.prettier'
  }
})
