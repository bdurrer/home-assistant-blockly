/* eslint dot-notation: "off", camelcase: "off" */

Blockly.JSON['trigger_event'] = function (block) {
  const eventType = block.getFieldValue('event_type');
  const eventData = Blockly.JSON.statementToCode(block, 'event_data', Blockly.JSON.MODE_OBJECT);

  const code = {
    platform: 'event',
    event_type: eventType
  };

  if (eventData) {
    code.event_data = eventData;
  }
  return code;
};

Blockly.JSON['trigger_mqtt'] = function (block) {
  const text_topic = block.getFieldValue('topic');
  const value_payload = Blockly.JSON.valueToCode(block, 'payload', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = '{';
  code += '"platform": "mqtt"';
  code += `, "topic": "${text_topic}"`;

  if (value_payload && value_payload !== '') {
    code += `, "payload": ${value_payload}`;
  }

  return `${code}}\n`;
};

Blockly.JSON['trigger_numeric_state'] = function (block) {
  const text_entity_id = block.getFieldValue('entity_id');
  const value_above = Blockly.JSON.valueToCode(block, 'above', Blockly.JSON.ORDER_NONE);
  const value_below = Blockly.JSON.valueToCode(block, 'below', Blockly.JSON.ORDER_NONE);
  const value_val_template = Blockly.JSON.valueToCode(block, 'val_template', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = {TODO: '[[implement me!]]' };
  return code;
};

Blockly.JSON['trigger_state'] = function (block) {
  const text_entity_id = block.getFieldValue('entity_id');
  const value_from = Blockly.JSON.valueToCode(block, 'from', Blockly.JSON.ORDER_NONE);
  const value_to = Blockly.JSON.valueToCode(block, 'to', Blockly.JSON.ORDER_NONE);
  const value_for = Blockly.JSON.valueToCode(block, 'for', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = {TODO: '[[implement me!]]' };
  return code;
};

Blockly.JSON['trigger_sun'] = function (block) {
  const dropdown_upordown = block.getFieldValue('upordown');
  const value_offset = Blockly.JSON.valueToCode(block, 'offset', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = '{ "platform": "sun"';
  code += `,"event": "${dropdown_upordown}"`;

  if (value_offset) {
    code += `,"offset":${value_offset}`;
  }

  code += '}\n';

  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['trigger_template'] = function (block) {
  const value_value_template = Blockly.JSON.valueToCode(block, 'value_template', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  let code = {TODO: '[[implement me!]]' };
  return code;
};

Blockly.JSON['trigger_time'] = function (block) {
  const dropdown_type = block.getFieldValue('type');
  const value_after = Blockly.JSON.valueToCode(block, 'after', Blockly.JSON.ORDER_NONE);
  const number_minutes = block.getFieldValue('minutes');
  const number_seconds = block.getFieldValue('seconds');
  const number_minutes_int = block.getFieldValue('minutes_int');
  const number_seconds_int = block.getFieldValue('seconds_int');
  // TODO: Assemble JSON into code constiable.
  let code = {TODO: '[[implement me!]]' };
  return code;
};

Blockly.JSON['trigger_zone'] = function (block) {
  const text_entity_id = block.getFieldValue('entity_id');
  const dropdown_event = block.getFieldValue('event');
  // TODO: Assemble JSON into code constiable.
  let code = {TODO: '[[implement me!]]' };
  return code;
};
