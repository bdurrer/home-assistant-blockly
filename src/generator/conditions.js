/* eslint dot-notation: "off", camelcase: "off" */

Blockly.JSON['condition_logic'] = function (block) {
  const operator = block.getFieldValue('logic');
  const conditions = Blockly.JSON.statementToCode(block, 'conditions');

  const code = {
    condition: operator,
    conditions
  };
  return code;
};

Blockly.JSON['condition_generic'] = function (block) {
  const condition = block.getFieldValue('condition');
  const properties = Blockly.JSON.statementToCode(block, 'properties', Blockly.JSON.MODE_OBJECT);

  const code = Object.assign({
    condition
  }, properties);

  return code;
};

Blockly.JSON['condition_sun'] = function (block) {
  const dropdown_beforeafter = block.getFieldValue('beforeafter');
  const dropdown_upordown = block.getFieldValue('upordown');
  const value_offset = Blockly.JSON.valueToCode(block, 'offset', Blockly.JSON.ORDER_NONE);

  const code = {
    condition: 'sun'
  };
  if (dropdown_beforeafter === 'before') {
    code.before = dropdown_upordown;
  } else {
    code.after = dropdown_upordown;
  }
  if (value_offset) {
    const offsetName = dropdown_beforeafter === 'before' ? 'before_offset' : 'after_offset';
    code[offsetName] = value_offset;
  }

  return code;
};

Blockly.JSON['condition_numeric_state'] = function (block) {
  const entityId = block.getFieldValue('entity_id');
  const above = Blockly.JSON.valueToCode(block, 'above', Blockly.JSON.ORDER_NONE);
  const below = Blockly.JSON.valueToCode(block, 'below', Blockly.JSON.ORDER_NONE);
  const valueTemplate = Blockly.JSON.valueToCode(block, 'val_template', Blockly.JSON.ORDER_NONE);

  const code = {
    condition: 'numeric_state',
    entity_id: entityId
  };

  if (above !== '') {
    code.above = above;
  }

  if (below !== '') {
    code.below = below;
  }
  if (valueTemplate && valueTemplate !== '') {
    code.value_template = valueTemplate;
  }

  return code;
};

Blockly.JSON['condition_state'] = function (block) {
  const entityId = block.getFieldValue('entity_id');
  const state = Blockly.JSON.valueToCode(block, 'state', Blockly.JSON.ORDER_NONE);
  const forTime = Blockly.JSON.valueToCode(block, 'for', Blockly.JSON.ORDER_NONE);

  const code = {
    condition: 'numeric_state',
    entity_id: entityId
  };

  if (state !== '') {
    code.state = state;
  }

  if (forTime !== '') {
    code.for = forTime;
  }

  return code;
};

Blockly.JSON['condition_template'] = function (block) {
  const valueTemplate = Blockly.JSON.valueToCode(block, 'value_template', Blockly.JSON.ORDER_NONE);

  const code = {
    condition: 'template'
  };

  if (valueTemplate !== '') {
    code.value_template = valueTemplate;
  }

  return code;
};

Blockly.JSON['condition_time'] = function (block) {
  const after = Blockly.JSON.valueToCode(block, 'after', Blockly.JSON.ORDER_NONE);
  const before = Blockly.JSON.valueToCode(block, 'before', Blockly.JSON.ORDER_NONE);
  const weekday = Blockly.JSON.valueToCode(block, 'weekday', Blockly.JSON.ORDER_NONE);

  const code = {
    condition: 'time'
  };

  if (after !== '') {
    code.after = after;
  }
  if (before !== '') {
    code.before = before;
  }
  if (weekday !== '') {
    code.weekday = weekday;
  }

  return code;
};

Blockly.JSON['condition_zone'] = function (block) {
  const entityId = block.getFieldValue('entity_id');
  const zone = Blockly.JSON.valueToCode(block, 'zone', Blockly.JSON.ORDER_NONE);
  const code = {
    condition: 'zone',
    entity_id: entityId
  };

  if (zone !== '') {
    code.zone = zone;
  }

  return code;
};
