# home-assistant-blockly
Blockly Editor for Home Assistant Automations

## Build

The project uses gulp for build scripting.
The `default` task runs a watcher with hot reload. Use `gulp` or `gulp default` to start it.

## Installation
[Download blockly](https://developers.google.com/blockly/guides/get-started/web) and extract it into the root folder. Make sure that it is named `blockly`. 

### Dev env
The index.html currently links to the uncompressed blockly version.
So in order to run it, you need to download [Google's closure library](https://developers.google.com/blockly/guides/modify/web/closure).
Once you have the Closure files, place them next in the root directory and ensure that the directory is named closure-library.
If you do it wrong, opening the page on localhost:8088/build/index.html will show an alert.

For a production environment, you should use the compressed blockly version, which is precompiled and does not require the closure library.
