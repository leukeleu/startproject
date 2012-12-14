http_path = "/"
css_dir = "project/static/css"
sass_dir = "project/sass"
images_dir = "project/static/img"
generated_images_dir = "project/static/sprites"
javascripts_dir = "project/static/js"

output_style = :expanded # or :nested or :compact or :compressed
relative_assets = true
line_comments = (environment == :production) ? false : true

sass_options = {
    :debug_info => (environment == :production) ? false : true
}
