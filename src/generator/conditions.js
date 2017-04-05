/* eslint dot-notation: "off", camelcase: "off" */

Blockly.JSON['condition_logic'] = function (block) {
  const operator = block.getFieldValue('logic');
  const conditions = Blockly.JSON.statementToCode(block, 'conditions');

  let code = `{ "condition": "${operator}"`;
  code += `, "conditions": ${conditions}`;
  code += '}';

  return code;
};

Blockly.JSON['condition_generic'] = function (block) {
  const text_condition = block.getFieldValue('condition');
  const properties = Blockly.JSON.statementToCode(block, 'properties', true);

  let code = `{ "condition": "${text_condition}"`;

  // properties is an array of strings with "name: value"
  for (let i = 0; i < properties.length; i++) {
    if (properties[i] !== '') {
      code += `, ${properties[i]}`;
    }
  }

  code += '}';

  return code;
};

Blockly.JSON['condition_sun'] = function (block) {
  const dropdown_beforeafter = block.getFieldValue('beforeafter');
  const dropdown_upordown = block.getFieldValue('upordown');
  const value_offset = Blockly.JSON.valueToCode(block, 'offset', Blockly.JSON.ORDER_NONE);

  let code = '{ "condition": "sun"';
  if (dropdown_beforeafter === 'before') {
    code += `,"before": "${dropdown_upordown}"`;
  } else {
    code += `,"after": "${dropdown_upordown}"`;
  }
  if (value_offset) {
    const offsetName = dropdown_beforeafter === 'before' ? 'before_offset' : 'after_offset';
    code += `,"${offsetName}":${value_offset}`;
  }

  code += '}';
  return code;
};

Blockly.JSON['condition_numeric_state'] = function (block) {
  const text_entity_id = block.getFieldValue('entity_id');
  const value_above = Blockly.JSON.valueToCode(block, 'above', Blockly.JSON.ORDER_NONE);
  const value_below = Blockly.JSON.valueToCode(block, 'below', Blockly.JSON.ORDER_NONE);
  const value_val_template = Blockly.JSON.valueToCode(block, 'val_template', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = '...;\n';
  return code;
};

Blockly.JSON['condition_state'] = function (block) {
  const text_entity_id = block.getFieldValue('entity_id');
  const value_state = Blockly.JSON.valueToCode(block, 'state', Blockly.JSON.ORDER_NONE);
  const value_for = Blockly.JSON.valueToCode(block, 'for', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = '...;\n';
  return code;
};

Blockly.JSON['condition_template'] = function (block) {
  const value_value_template = Blockly.JSON.valueToCode(block, 'value_template', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = '...;\n';
  return code;
};

Blockly.JSON['condition_time'] = function (block) {
  const value_after = Blockly.JSON.valueToCode(block, 'after', Blockly.JSON.ORDER_NONE);
  const value_before = Blockly.JSON.valueToCode(block, 'before', Blockly.JSON.ORDER_NONE);
  const value_weekday = Blockly.JSON.valueToCode(block, 'weekday', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = '...;\n';
  return code;
};

Blockly.JSON['condition_zone'] = function (block) {
  const text_entity_id = block.getFieldValue('entity_id');
  const value_state = Blockly.JSON.valueToCode(block, 'state', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = '...;\n';
  return code;
};
