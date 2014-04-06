# Description

Adds some Javascript for you to hide or show what ever ID you want with a mouse click.

# Demo
View demo: http://akenn.org/projects/wp-showhide

# Installation
1. Unzip better-wordpress-showhide-elements.zip
2. Upload better-wordpress-showhide-elements folder to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress

# Usage
```
<a onclick="wp_showhide.main(this, 'myId1')" href="javascript:void(0)">
  ["Show Text", "Hide Text", "visible"]
</a>;
<div id="myId1">Content goes here</div>;
```

