/* eslint dot-notation: "off", camelcase: "off" */

Blockly.JSON['condition_logic'] = function (block) {
  const operator = block.getFieldValue('logic');
  const conditions = Blockly.JSON.statementToCode(block, 'conditions');

  let code = `{ "condition": "${operator}"`;
  code += `, "conditions": ${conditions}`;
  code += '}\n';

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

  code += '}\n';

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

  code += '}\n';
  return code;
};

Blockly.JSON['condition_numeric_state'] = function (block) {
  const entity_id = block.getFieldValue('entity_id');
  const above = Blockly.JSON.valueToCode(block, 'above', Blockly.JSON.ORDER_NONE);
  const below = Blockly.JSON.valueToCode(block, 'below', Blockly.JSON.ORDER_NONE);
  const valueTemplate = Blockly.JSON.valueToCode(block, 'val_template', Blockly.JSON.ORDER_NONE);

  let code = '{"condition":"numeric_state"';
  code += `,"entity_id": "${entity_id}"`;

  if (above !== '') {
    code += `,"above": ${above}`;
  }

  if (below !== '') {
    code += `,"below": ${below}`;
  }
  if (valueTemplate && valueTemplate !== '') {
    code += `,"value_template": ${valueTemplate}`;
  }

  code += '}\n';
  return code;
};

Blockly.JSON['condition_state'] = function (block) {
  const entity_id = block.getFieldValue('entity_id');
  const state = Blockly.JSON.valueToCode(block, 'state', Blockly.JSON.ORDER_NONE);
  const forTime = Blockly.JSON.valueToCode(block, 'for', Blockly.JSON.ORDER_NONE);

  let code = '{"condition":"numeric_state"';
  code += `,"entity_id": "${entity_id}"`;

  if (state !== '') {
    code += `,"state": ${state}`;
  }

  if (forTime !== '') {
    code += `,"for": ${forTime}`;
  }

  code += '}\n';
  return code;
};

Blockly.JSON['condition_template'] = function (block) {
  const valueTemplate = Blockly.JSON.valueToCode(block, 'value_template', Blockly.JSON.ORDER_NONE);

  let code = '{"condition": "template"';

  if (valueTemplate !== '') {
    code += `,"value_template": ${valueTemplate}`;
  }

  code += '}\n';
  return code;
};

Blockly.JSON['condition_time'] = function (block) {
  const after = Blockly.JSON.valueToCode(block, 'after', Blockly.JSON.ORDER_NONE);
  const before = Blockly.JSON.valueToCode(block, 'before', Blockly.JSON.ORDER_NONE);
  const weekday = Blockly.JSON.valueToCode(block, 'weekday', Blockly.JSON.ORDER_NONE);

  let code = '{"condition": "time"';

  if (after !== '') {
    code += `,"after": ${after}`;
  }
  if (before !== '') {
    code += `,"before": ${before}`;
  }
  if (weekday !== '') {
    code += `,"weekday": ${weekday}`;
  }
  code += '}\n';
  return code;
};

Blockly.JSON['condition_zone'] = function (block) {
  const entity_id = block.getFieldValue('entity_id');
  const zone = Blockly.JSON.valueToCode(block, 'zone', Blockly.JSON.ORDER_NONE);
  let code = '{"condition": "zone"';
  code += `,"entity_id": "${entity_id}"`;

  if (zone !== '') {
    code += `,"zone": ${zone}`;
  }

  code += '}\n';
  return code;
};
