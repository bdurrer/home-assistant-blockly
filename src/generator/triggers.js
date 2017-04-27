/* eslint dot-notation: "off", camelcase: "off" */

// TODO: add homeassistant trigger

Blockly.JSON['trigger_event'] = function (block) {
  const eventType = block.getFieldValue('event_type');
  const eventData = Blockly.JSON.statementToCode(block, 'event_data', Blockly.JSON.MODE_OBJECT);

  const code = {
    platform: 'event',
    event_type: eventType
  };

  Blockly.JSON.addField(code, 'event_data', eventData);
  return code;
};

Blockly.JSON['trigger_mqtt'] = function (block) {
  const topic = block.getFieldValue('topic');
  const payload = Blockly.JSON.valueToCode(block, 'payload', Blockly.JSON.ORDER_NONE);

  const code = {
    platform: 'mqtt',
    topic
  };

  Blockly.JSON.addField(code, 'payload', payload);

  return code;
};

Blockly.JSON['trigger_numeric_state'] = function (block) {
  const entityId = block.getFieldValue('entity_id');
  const above = Blockly.JSON.valueToCode(block, 'above', Blockly.JSON.ORDER_NONE);
  const below = Blockly.JSON.valueToCode(block, 'below', Blockly.JSON.ORDER_NONE);
  const valueTemplate = Blockly.JSON.valueToCode(block, 'val_template', Blockly.JSON.ORDER_NONE);

  const code = {
    platform: 'numeric_state',
    entity_id: entityId
  };

  Blockly.JSON.addField(code, 'above', above);
  Blockly.JSON.addField(code, 'below', below);
  Blockly.JSON.addField(code, 'value_template', valueTemplate);

  return code;
};

Blockly.JSON['trigger_state'] = function (block) {
  const entityId = block.getFieldValue('entity_id');
  const from = Blockly.JSON.valueToCode(block, 'from', Blockly.JSON.ORDER_NONE);
  const to = Blockly.JSON.valueToCode(block, 'to', Blockly.JSON.ORDER_NONE);
  const forValue = Blockly.JSON.valueToCode(block, 'for', Blockly.JSON.ORDER_NONE);

  const code = {
    platform: 'state',
    entity_id: entityId
  };

  Blockly.JSON.addField(code, 'from', from);
  Blockly.JSON.addField(code, 'to', to);
  Blockly.JSON.addField(code, 'for', forValue);

  return code;
};

Blockly.JSON['trigger_sun'] = function (block) {
  const dropdown_upordown = block.getFieldValue('upordown');
  const offset = Blockly.JSON.valueToCode(block, 'offset', Blockly.JSON.ORDER_NONE);
  const code = {
    platform: 'sun',
    event: dropdown_upordown
  };

  Blockly.JSON.addField(code, 'offset', offset);

  return code;
};

Blockly.JSON['trigger_template'] = function (block) {
  const valueTemplate = Blockly.JSON.valueToCode(block, 'value_template', Blockly.JSON.ORDER_NONE);

  const code = {
    platform: 'template',
    value_template: valueTemplate
  };
  return code;
};

Blockly.JSON['trigger_time'] = function (block) {
  const type = block.getFieldValue('type');
  // const time = Blockly.JSON.valueToCode(block, 'time', Blockly.JSON.ORDER_NONE);
  let hours = block.getFieldValue('hours');
  const minutes = block.getFieldValue('minutes');
  const seconds = block.getFieldValue('seconds');
  const code = {
    platform: 'time'
  };

  if (type === 'after') {
    if (hours === '') {
      hours = 0;
    }
    code.after = `${hours}:${minutes}:${seconds}`;
  } else {
    code.minutes = minutes;
    code.seconds = seconds;
  }

  return code;
};

Blockly.JSON['trigger_zone'] = function (block) {
  const entityId = block.getFieldValue('entity_id');
  const event = block.getFieldValue('event');

  const code = {
    platform: 'zone',
    entity_id: entityId,
    event
  };
  return code;
};

Blockly.JSON['trigger_homeassistant'] = function (block) {
  const event = block.getFieldValue('event');

  const code = {
    platform: 'homeassistant',
    event
  };
  return code;
};
