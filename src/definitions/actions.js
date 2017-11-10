Blockly.Blocks.action = {
  init() {
    this.appendDummyInput().appendField('ACTION');
    this.appendValueInput('service').setCheck(['String', 'val_text', 'val_template']).appendField('service:');
    this.appendValueInput('entity_id').setCheck(['String', 'val_text', 'val_template', 'val_array']).appendField('entity id:');
    // this.appendStatementInput('entity_id').setCheck(['String', 'val_text']).appendField('entity id:');
    this.appendStatementInput('data').setCheck(['String', 'val_properties']).appendField('data:');
    this.setPreviousStatement(true, 'action');
    this.setNextStatement(true, 'action');
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks.action_delay = {
  init() {
    this.appendValueInput('delay').setCheck(['val_time', 'String', 'val_properties']).appendField('DELAY for');
    this.setPreviousStatement(true, 'action');
    this.setNextStatement(true, 'action');
    this.setColour(0);
    this.setTooltip('Delays are useful for temporarily suspending your script and start it at a later moment. ');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/#delay');
  }
};

Blockly.Blocks.action_wait = {
  init() {
    this.appendDummyInput().appendField('WAIT for');
    this.appendValueInput('wait').setCheck(['val_template', 'String', 'val_text']).appendField('value template');
    this.appendValueInput('timeout').setCheck(['val_time', 'String', 'val_properties']).appendField('timeout');
    this.setPreviousStatement(true, 'action');
    this.setNextStatement(true, 'action');
    this.setColour(0);
    this.setTooltip(
      'Wait until some things are complete. We support at the moment wait_template for waiting until a condition is true. ' +
      'It is possible to set a timeout after that will the script abort his execution.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/scripts/#wait');
  }
};

Blockly.Blocks.action_event = {
  init() {
    this.appendDummyInput().appendField('EVENT');
    this.appendDummyInput().appendField('name').appendField(new Blockly.FieldTextInput('[[event]]'), 'event');
    // this.appendValueInput('event_data').setCheck(['val_time', 'String', 'val_properties']).appendField('event data');
    this.appendStatementInput('event_data').setCheck(['String', 'val_text', 'val_properties']).appendField('event data:');
    this.setPreviousStatement(true, 'action');
    this.setNextStatement(true, 'action');
    this.setColour(0);
    this.setTooltip(
      'This action allows you to fire an event. Events can be used for many things. ' +
      'It could trigger an automation or indicate to another component that something is happening.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/scripts/#fire-an-event');
  }
};
