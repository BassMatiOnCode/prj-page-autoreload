# prj-page-autoreload
A tiny JavaScript module that automatically reloads an HTML or SVG file in the browser if the modification time (mtime) on the server changes. Perfect for developing web pages and apps. Every save-to-disk refreshes the file in the browser.

## Installation in Development Environment
Copy the <tt>.../code/</tt> folder to your development website includes folder (\inc\). Then add the following script to the page(s) you work with:
<pre><script type="module" href="\inc\page-autoreload.js\page-autoreload-2.js"></script></pre>
To monitor multiple resources, add a watchlist parameter to the script url:
<pre><script type="module" href="\inc\page-autoreload-2.js\page-autoreload.js?document.htm, page.css, page.js"></script></pre>
A change in any of these files causes the document to be reloaded.

<tt>page-autoreload-2.js</tt> is a JavaScript module because it contains the <tt>import.meta</tt> instruction. Therefore it cannot be used in SVG files -- SVG only supports legacy non-module JavaScript. At least at the time of writing. For this reason I have revived <tt>page-autoreload-1.js</tt> and renamed it to <tt>page-autoreload-nonmodule-1.js</tt>. This script can successfully be used in SVG files.

Tested locally with <tt>Deno file_server</tt>.

## Installation in Production Enviroment
Replace the file <tt>\inc\page-autoreload.js\page-autoreload.js</tt> with an empty text file, so that no 404 errors occur and the auto-reload feature is effectively turned off.

## Documentation
[https://bassmationcode.github.io/prj-page-autoreload/prj-page-autoreload.htm](https://bassmationcode.github.io/prj-page-autoreload/prj-page-autoreload.htm)

## History
2024-03-22 Version 2 released.
Support for watchlist parameters in the script url allows to monitor multiple arbetrary resources. Upon any mtime change on the server, the page is reloaded.

2024-03-21 Version 1 released.
Works for the current HTML document. Other resources included in the page are not monitored.