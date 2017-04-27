import './base';

import './actions';
import './automation';
import './conditions';
import './triggers';
import './values';

/**
 * @return the workspace as JSON object. Only "automation" objects are valid root blocks, other elements are considered garbage.
 */
Blockly.JSON.workspaceToCode = function (workspace) {
  const topBlocks = workspace.getTopBlocks(false);
  const result = [];
  for (let i = 0; i < topBlocks.length; i++) {
    const block = topBlocks[i];

    if (block.type === 'automation') {
      const jsonStructure = this.generalBlockToObj(block);
      result.push(jsonStructure); // JSON.stringify(json_structure, null, 4) + '\n\n';
    }
  }

  if (result.length === 0) {
    return null;
  }

  return result.length === 1 ? result[0] : result;
};
