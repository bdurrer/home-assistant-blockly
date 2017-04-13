/* eslint dot-notation: "off", camelcase: "off" */

Blockly.JSON['action'] = function (block) {
  const service = Blockly.JSON.valueToCode(block, 'service', Blockly.JSON.ORDER_NONE);
  const serviceBlock = block.getInputTargetBlock('service');

  const entityId = Blockly.JSON.valueToCode(block, 'entity_id', Blockly.JSON.ORDER_NONE);

  const data = Blockly.JSON.statementToCode(block, 'data');
  // TODO: Assemble JSON into code constiable.
  const code = {};

  if (serviceBlock && serviceBlock.type === 'val_template') {
    code.service_template = service;
  } else if (service !== '') {
    code.service = service;
  }

  if (entityId !== '') {
    // entity can be a single value or an array
    code.entity_id = entityId;
  }
  if (data !== '') {
    code.data = data;
  }

  // TODO: entity list
  return code;
};

Blockly.JSON['action_delay'] = function (block) {
  let delay = Blockly.JSON.valueToCode(block, 'delay', Blockly.JSON.ORDER_NONE);
  if (delay === '') {
    delay = null;
  }
  const code = {
    delay
  };
  return code;
};

Blockly.JSON['action_wait'] = function (block) {
  const waitTemplate = Blockly.JSON.valueToCode(block, 'wait', Blockly.JSON.ORDER_NONE);
  const timeout = Blockly.JSON.valueToCode(block, 'timeout', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code constiable.
  const code = {
    wait_template: waitTemplate
  };
  if (timeout !== '') {
    code.timeout = timeout;
  }
  return code;
};

Blockly.JSON['action_event'] = function (block) {
  const event = block.getFieldValue('event');
  const eventData = Blockly.JSON.statementToCode(block, 'event_data', Blockly.JSON.MODE_OBJECT);
  const code = {
    event
  };
  if (eventData !== '') {
    code.event_data = eventData;
  }
  return code;
};
