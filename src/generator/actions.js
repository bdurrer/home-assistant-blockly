/* eslint dot-notation: "off", camelcase: "off" */

Blockly.JSON['action'] = function (block) {
  const text_service = block.getFieldValue('service');
  const statements_entity_id = Blockly.JSON.statementToCode(block, 'entity_id');
  const statements_data = Blockly.JSON.statementToCode(block, 'data');
  // TODO: Assemble JSON into code constiable.
  let code = {TODO: '[[implement me!]]' };
  return code;
};

Blockly.JSON['action_delay'] = function (block) {
  const value_delay = Blockly.JSON.valueToCode(block, 'delay', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = '{';
  if (value_delay !== '') {
    code += `{"delay": ${value_delay}\n`;
  }

  code += '}';
  return code;
};

Blockly.JSON['action_wait'] = function (block) {
  const value_wait = Blockly.JSON.valueToCode(block, 'wait', Blockly.JSON.ORDER_NONE);
  const value_timeout = Blockly.JSON.valueToCode(block, 'timeout', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = {TODO: '[[implement me!]]' };
  return code;
};

Blockly.JSON['action_event'] = function (block) {
  const text_event = block.getFieldValue('event');
  const value_event_data = Blockly.JSON.valueToCode(block, 'event_data', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = {TODO: '[[implement me!]]' };
  return code;
};
