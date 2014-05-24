# WordPress ShowHide

> Show or hide content with a mouse click.

## Demo
View demo: http://akenn.org/projects/wp-showhide

## Installation
1. Unzip better-wordpress-showhide-elements.zip
2. Upload better-wordpress-showhide-elements folder to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress

## Usage

Example with image

```html
<img showhide='myId2' src='https://www.google.com/images/srpr/logo11w.png' />
<div id='myId2'>Content goes here</div>
```

Example with anchor tag

```html
<a showhide='myId1' href="#">
  ["When visible", "When hidden"]
</a>
<div id="myId1">Content goes here</div>
```

Example with image with content initially visible

```html
<img showhide='myId3' showhide_visible='true' src='https://www.google.com/images/srpr/logo11w.png' />
<div id='myId3'>Content goes here</div>
```

Example with div and content initially visible

```html
<a showhide='myId4' showhide_visible='true' href="#">
  ["When visible", "When hidden"]
</a>
<div id="myId4">Content goes here</div>
```
