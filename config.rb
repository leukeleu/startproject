add_import_path File.dirname(__FILE__)

sass_dir = ""
css_dir = "static"
images_dir = "project/static/img"
generated_images_dir = "static/sprites"
javascripts_dir = "static/js"

http_images_path = "/static/img"
http_generated_images_path = "/static/sprites"

output_style = :expanded
relative_assets = false
line_comments = (environment == :production) ? false : true

sass_options = {
    :debug_info => (environment == :production) ? false : true
}
