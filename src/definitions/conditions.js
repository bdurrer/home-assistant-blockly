Blockly.Blocks.condition_logic = {
  init() {
    this.appendDummyInput().appendField('COMBINE CONDITIONS');
    this.appendDummyInput().appendField('when').appendField(new Blockly.FieldDropdown([['any is', 'or'], ['all are', 'and']]), 'logic').appendField('true of the');
    this.appendStatementInput('conditions')
      .setCheck(['condition_logic', 'condition_generic', 'condition_sun', 'condition_numeric_state', 'condition_state', 'condition_template', 'condition_zone'])
      .appendField('nested conditions:');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'condition');
    this.setNextStatement(true, 'condition');
    this.setColour(230);
    this.setTooltip('AND/OR Condition');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#and-condition');
  }
};

Blockly.Blocks.condition_generic = {
  init() {
    this.appendDummyInput().appendField('GENERIC');
    this.appendDummyInput().appendField('condition of type').appendField(new Blockly.FieldTextInput('sun'), 'condition');
    this.appendStatementInput('properties').setCheck('property').appendField('properties:');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'condition');
    this.setNextStatement(true, 'condition');
    this.setColour(230);
    this.setTooltip('Free-Text Condition');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/');
  }
};

Blockly.Blocks.condition_sun = {
  init() {
    this.appendDummyInput().appendField('SUN');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('It is ')
      .appendField(new Blockly.FieldDropdown([['before', 'before'], [' after ', 'after']]), 'beforeafter');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([['sunset', 'sunset'], ['sunrise', 'sunrise']]), 'upordown');
    this.appendValueInput('offset').setCheck(['String', 'val_time_offset']).setAlign(Blockly.ALIGN_RIGHT).appendField('offset by');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'condition');
    this.setNextStatement(true, 'condition');
    this.setColour(230);
    this.setTooltip('Tests if the sun has already set or risen');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#sun-condition');
  }
};

Blockly.Blocks.condition_numeric_state = {
  init() {
    this.appendDummyInput().appendField('NUMERIC STATE');
    this.appendDummyInput().appendField('entity').appendField(new Blockly.FieldTextInput('[[entity id]]'), 'entity_id');
    this.appendValueInput('above').setCheck('Number').appendField('is above');
    this.appendValueInput('below').setCheck('Number').appendField('is below');
    this.appendValueInput('val_template').setCheck(['String', 'val_template']).appendField('value template:');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'condition');
    this.setNextStatement(true, 'condition');
    this.setColour(230);
    this.setTooltip(
      'This type of condition attempts to parse the state of specified entity as a number and triggers if the value matches all of the above or below thresholds.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#numeric-state-condition');
  }
};

Blockly.Blocks.condition_state = {
  init() {
    this.appendDummyInput().appendField('STATE');
    this.appendDummyInput().appendField('entity').appendField(new Blockly.FieldTextInput('[[entity id]]'), 'entity_id');
    this.appendValueInput('state').setCheck(['String', 'Number', 'Boolean']).appendField('is in state');
    this.appendValueInput('for').setCheck(['String', 'val_time']).appendField('for at least');
    this.setPreviousStatement(true, 'condition');
    this.setNextStatement(true, 'condition');
    this.setColour(230);
    this.setTooltip('Tests if an entity is a specified state.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#state-condition');
  }
};

Blockly.Blocks.condition_template = {
  init() {
    this.appendDummyInput().appendField('TEMPLATE');
    this.appendValueInput('value_template').setCheck(['String', 'val_template']).appendField('value template');
    this.setPreviousStatement(true, 'condition');
    this.setNextStatement(true, 'condition');
    this.setColour(230);
    this.setTooltip(
      'The template condition will test if the given template renders a value equal to true. ' +
      'This is achieved by having the template result in a true boolean expression or by having the template render ‘true’.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#template-condition');
  }
};

Blockly.Blocks.condition_time = {
  init() {
    this.appendDummyInput().appendField('TIME');
    this.appendValueInput('after').setCheck(['String', 'val_time']).appendField('after');
    this.appendValueInput('before').setCheck(['String', 'val_time']).appendField('before');
    this.appendValueInput('weekday').setCheck('val_weekday').appendField('weekday');
    this.setPreviousStatement(true, 'condition');
    this.setNextStatement(true, 'condition');
    this.setInputsInline(false);
    this.setColour(230);
    this.setTooltip('The time condition can test if it is after a specified time, before a specified time or if it is a certain day of the week.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#time-condition');
  }
};

Blockly.Blocks.condition_zone = {
  init() {
    this.appendDummyInput().appendField('ZONE');
    this.appendDummyInput().appendField('entity').appendField(new Blockly.FieldTextInput('[[entity id]]'), 'entity_id');
    this.appendValueInput('state').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('is in zone');
    this.setPreviousStatement(true, 'condition');
    this.setNextStatement(true, 'condition');
    this.setColour(230);
    this.setTooltip('Zone conditions test if an entity is in a certain zone.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#zone-condition');
  }
};
