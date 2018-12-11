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

### notes

- in the frontmatter, image urls must be absolute. in the markdown content, they can be relative.
- `{{ "string" | markdownify }}`

### shortcodes

- `{{< img "*image_file_name_substring*" "caption" >}}`

### auto gallery

each post has a gallery. to activate, make the proper folder structure.

- add `caption` metadata
- see https://regisphilibert.com/blog/2018/01/hugo-page-resources-and-how-to-use-them/
- cursed webpack https://github.com/sachinchoolur/lightgallery.js

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
- 

# TODO

- fix opengraph shit
