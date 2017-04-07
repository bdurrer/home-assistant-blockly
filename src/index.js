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

function highlightUndefValues(str, p1) {
  return `<span style="color:red">[[${p1}]]</span>`;
}

function onWorkspaceChange() {
  const compiledJsonCode = Blockly.JSON.workspaceToCode(workspace);
  let jsonAsString = '';
  let highlightedCode = '';
  let yamlCode = '';
  try {
    jsonAsString = JSON.stringify(compiledJsonCode, null, 2);
    highlightedCode = jsonAsString.replace(/\[\[(.*?)\]\]/ig, highlightUndefValues);
  } catch (e) {
    /* eslint-disable no-console */
    console.log('error processing the blockly code!');
    console.log(compiledJsonCode);
    console.log(e);
    /* eslint-enable no-console */

    // show broken code for debugging puropses
    jsonAsString = 'ERROR in code!';
    highlightedCode = compiledJsonCode;
  }

  try {
    yamlCode = json2yaml(compiledJsonCode);
  } catch (e) {
    yamlCode = 'ERROR';
  }

  document.getElementById('jsonArea').innerHTML = highlightedCode;
  document.getElementById('yamlArea').innerHTML = yamlCode;
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
