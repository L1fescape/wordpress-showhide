=== Plugin Name ===
Contributors: L1fescape
Donate link: http://akenn.org
Tags: showhide, show, hide, elements
Requires at least: 2.0.2
Tested up to: 2.1
Stable tag: 0.3.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Adds a Javascript for you to hide or show what ever ID you want with a mouse click. You need to add some code to your theme to make it work.

== Description ==

View demo: http://akenn.org/#/blog/post/44


> <a onclick="wp_showhide.main(this, 'myId1')" href="javascript:void(0)">["Show Text", "Hide Text", "visible"]</a>
> <div id="{myId1}">Content goes here</div>
The function inside the link's onclick method includes the name of the div you want to show or hide (in this case myId1). The text inside the link includes the text that will be shown when a div is hidden or shown. The first set of quotes contains the text that will be displayed when the div's state is "display=none". The second set of quotes contains text for when the div is currently visible. The last set contains the initial state of the div (either "visible" or "hidden").

== Frequently Asked Questions ==

== Changelog ==

== Upgrade Notice ==

== Screenshots ==

== Installation ==

1. Unzip better-wp-showhide-elements.zip
2. Upload better-wp-showhide-elements folder to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
