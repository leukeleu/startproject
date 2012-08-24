# A sample Guardfile
# More info at https://github.com/guard/guard#readme
#
# Installation requirements:
#
#   gem install guard-livereload guard-compass
#
# Browser plugins:
#   All: http://help.livereload.com/kb/general-use/browser-extensions
#   Firefox (2.0.9 dev release): https://github.com/siasia/livereload-extensions/downloads
#

notification :off

guard 'compass' do
  watch(%r{(.*)\.s[ac]ss$})
end

guard 'livereload' do
  watch(%r{.+\.(css|js|html)$})
  #watch(%r{.+\.(css|js|html|pyc)$})
end
