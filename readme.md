# dev

- `hugo serve -D`
- if making change to theme, `yarn --cwd themes/gallery watch`

debugging sadness:

```
<script>console.log({{ var }})</script>
```

go template comment:

```
{{/*
*/}}
```

- to garbage-collect processed images: `hugo --gc`

### notes

- in the frontmatter, image urls must be absolute. in the markdown content, they can be relative.
- `{{ "string" | markdownify }}`

### shortcodes

- `{{< img "*image_file_name_substring*" "caption" >}}`

#### processed images

```
{{< imgproc "image_file_name_substring" [Resize|Fit|Fill] "300x" "caption" />}}
    caption here
{{< /imgproc >}}
```

- examples as markdown shortcodes:
  - `{{< imgproc "home_comics_1" Fit "740x1100 Lanczos" "My mom." >}}`
- examples as go tmpl:
  - `{{ $image.Resize "600x q50" }}`
  - `{{ $image.Fit "740x1100 Lanczos" }}`

### auto gallery

each post has a gallery. to activate, make the proper folder structure.

- add `caption` metadata
- see https://regisphilibert.com/blog/2018/01/hugo-page-resources-and-how-to-use-them/
- cursed webpack https://github.com/sachinchoolur/lightgallery.js
- use `cover: hideInGallery` to hide preview img

# Writing

### home page

each post's cover image is determined by the frontmatter:

```
cover:
  image: <some substring of file>
  caption: <string>
  style: <wide | normal>
```

or whatever is the first image resource it can find. or nothing ):

### post order

in the frontmatter:

```
weight: <number>
```

# debugging

### frontmatter

- tag and categories must not be empty if defined. comment out if you want to leave blank.

### sidebar menu

- In frontmatter, set sidebar weight to `999` to exclude it from heirarchy but still have the menu subtree expand when page is viewed

# TODO

- fix opengraph shit
- organise content better, (but just get things into buckets for now)
  - figure out what the deal is with information heirarchy
    - how do I sort out "illustraion" vs "drawings"??
  - split out into individual posts
  - preview images?
  - haha the dates are all random
- image processing. make different sizes for media queries / previews
- write descriptions for posts
- link back to root page in sensible manner
- make photo viewer zoomable
- lightgallery shortcodes
  - go back and enable lightgallery for manually laid-out posts
