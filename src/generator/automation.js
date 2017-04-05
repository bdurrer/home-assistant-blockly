/* eslint dot-notation: "off", camelcase: "off" */

Blockly.JSON['automation'] = function (block) {
  const alias = block.getFieldValue('alias');
  const statements_triggers = Blockly.JSON.statementToCode(block, 'triggers');
  const statements_conditions = Blockly.JSON.statementToCode(block, 'conditions');
  const statements_actions = Blockly.JSON.statementToCode(block, 'actions');

  let code = `{"alias": "${alias}"`;

  if (statements_triggers) {
    code += `,"trigger": ${statements_triggers}`;
  }
  if (statements_conditions) {
    code += `,"condition": ${statements_conditions}`;
  }
  if (statements_actions) {
    code += `,"action": ${statements_actions}`;
  }
  code += '}';
  return code;
};
