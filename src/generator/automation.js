/* eslint dot-notation: "off", camelcase: "off" */

Blockly.JSON['automation'] = function (block) {
  const alias = block.getFieldValue('alias');
  const trigger = Blockly.JSON.statementToCode(block, 'triggers');
  const condition = Blockly.JSON.statementToCode(block, 'conditions', Blockly.JSON.MODE_ARRAY);
  const action = Blockly.JSON.statementToCode(block, 'actions');

  const code = {
    alias,
    trigger,
    action
  };

  if (condition.length > 0) {
    // it's illegal to have multiple conditions on the top level. Use a logical condition
    code.condition = condition[0];
  }

  return code;
};
