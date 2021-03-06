# Stuff for my Windows machines
if 'win32' == process.platform
  # if atom.config.get 'core.fontFamily' === 'Fira Code'
  # Set font size based for my Windows machines to `16`
  # atom.config.set 'editor.fontSize', '16'

  # Set Project home for my Windows machines
  if 'whisk' == process.env.USERNAME
    atom.config.set 'core.projectHome', 'C:\\Users\\whisk\\GitHub'
  else if 'kayolawuyi' == process.env.USERNAME
    atom.config.set 'core.projectHome', 'C:\\Users\\kayolawuyi\\GitHub'
  else
    atom.config.set 'core.projectHome', 'C:\\Users\\' + process.env.USERNAME + '\\GitHub'

else if 'linux' == process.platform
  # Set font size based for my Ubuntu linux to `16`
  atom.config.set 'editor.fontSize', '16'
  # Set Project home for my Ubuntu linux
  atom.config.set 'core.projectHome', '\\media\\Windows\\Users\\whisk\\GitHub'
