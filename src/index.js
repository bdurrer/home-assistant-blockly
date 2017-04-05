import './definitions/index';
import './generator/index';

const blocklyArea = document.getElementById('blocklyArea');
const blocklyDiv = document.getElementById('blocklyDiv');
const workspace = Blockly.inject(blocklyDiv, { toolbox: document.getElementById('toolbox') });
const workspaceBlocks = document.getElementById('workspaceBlocks');

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

function onWindowResize() {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  let element = blocklyArea;
  let x = 0;
  let y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = `${x}px`;
  blocklyDiv.style.top = `${y}px`;
  blocklyDiv.style.width = `${blocklyArea.offsetWidth}px`;
  blocklyDiv.style.height = `${blocklyArea.offsetHeight}px`;
}
window.addEventListener('resize', onWindowResize, false);
onWindowResize();
Blockly.svgResize(workspace);

function highlight(str, p1) {
  return `<span style="color:red">[[${encodeURIComponent(p1)}]]</span>`;
}

function onWorkspaceChange() {
  const codeAsString = Blockly.JSON.workspaceToCode(workspace);
  let compiledJsonCode = '';
  let highlightedCode = '';
  try {
    compiledJsonCode = JSON.parse(codeAsString);
    compiledJsonCode = JSON.stringify(compiledJsonCode, null, 2);
    highlightedCode = compiledJsonCode.replace(/\[\[(.*?)\]\]/ig, highlight);
  } catch (e) {
    /* eslint-disable no-console */
    console.log('error parsing the input!');
    console.log(codeAsString);
    console.log(e);
    /* eslint-enable no-console */

    // show broken code for debugging puropses
    compiledJsonCode = `ERROR in code:\n\n${codeAsString}`;
  }

  document.getElementById('textarea').value = compiledJsonCode;
  document.getElementById('highlight').innerHTML = highlightedCode;
}

workspace.addChangeListener(onWorkspaceChange);

BlocklyStorage.backupOnUnload();

function restore() {
  BlocklyStorage.restoreBlocks();
  const blocks = workspace.getTopBlocks(false);
  if (blocks.length === 0) {
    const startBlock = workspace.newBlock('automation');
    startBlock.initSvg();
    startBlock.render();
    // startBlock.setDeletable(false);
  }
}
window.setTimeout(restore, 5);
