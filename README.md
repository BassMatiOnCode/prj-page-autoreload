# prj-page-autoreload
A tiny JavaScript module that automatically reloads a HTML page if the modification time (mtime) on the server changes. Perfect for developing web pages and apps.

## Installation in Development Environment
Copy the <tt>.../code/</tt> folder to your development website includes folder (\inc\). Then add the following script to the page(s) you work with:
<script type="module" href="\inc\page-autoreload.js\page-autoreload.js"></script>
To monitor multiple resources, add a watchlist parameter to the script url:
<script type="module" href="\inc\page-autoreload.js\page-autoreload.js?document.htm, page.css, page.js"></script>
A change in any of these files causes the document to be reloaded.
Tested locally with Deno file_server.

## Installation in Production Enviroment
Replace the file <tt>\inc\page-autoreload.js\page-autoreload.js</tt> with an empty text file, so that no 404 errors occur and the auto-reload feature is effectively turned off.

## Documentation
[https://bassmationcode.github.io/prj-page-autoreload/prj-page-autoreload.htm](https://bassmationcode.github.io/prj-page-autoreload/prj-page-autoreload.htm)

## History
2024-03-22 Version 2 released.
Support for watchlist parameters in the script url allows to monitor multiple arbetrary resources. Upon any mtime change on the server, the page is reloaded.

2024-03-21 Version 1 released.
Works for the current HTML document. Other resources included in the page are not monitored.