=== Plugin Name ===
Contributors: L1fescape
Donate link: http://akenn.org
Tags: showhide, show, hide, elements
Requires at least: 2.0.2
Tested up to: 3.8
Stable tag: 0.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Adds Javascript for you to hide or show what ever ID you want with a mouse click.

== Description ==

View demo: http://akenn.org/projects/wp-showhide/


> &lt;a onclick="wp_showhide.main(this, 'myId1')" href="javascript:void(0)"&gt;["Show Text", "Hide Text", "visible"]&lt;/a&gt;
> &lt;div id="myId1"&gt;Content goes here&lt;/div&gt;

The function inside the link's onclick method includes the name of the div you want to show or hide (in this case myId1). The text inside the link includes the text that will be shown when a div is hidden or shown. The first set of quotes contains the text that will be displayed when the div's state is "display=none". The second set of quotes contains text for when the div is currently visible. The last set contains the initial state of the div (either "visible" or "hidden").

== Frequently Asked Questions ==

== Changelog ==

== Upgrade Notice ==

== Screenshots ==

== Installation ==

1. Unzip better-wp-showhide-elements.zip
2. Upload better-wp-showhide-elements folder to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
