# prj-page-autoreload
A tiny JavaScript module that automatically reloads a HTML page if the modification time (mtime) on the server changes. Perfect for developing web pages and apps.

##Installation in Development Environment
Copy the <tt>.../code/</tt> folder to your development website includes folder (\inc\). Then add the following script to the page(s) you work with:
<script type="module" href="\inc\page-autoreload.js\page-autoreload.js"></script>
Tested locally with Deno file_server.

##Installation in Production Enviroment
Replace the file <tt>\inc\page-autoreload.js\page-autoreload.js</tt> with an empty text file, so that no 404 errors occur and the auto-reload feature is effectively turned off.