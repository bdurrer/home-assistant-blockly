Blockly.Blocks.automation = {
  init() {
    this.appendDummyInput().appendField('AUTOMATION');
    this.appendDummyInput().appendField('alias').appendField(new Blockly.FieldTextInput('[[alias]]'), 'alias');
    this.appendDummyInput().appendField('triggers:');
    this.appendStatementInput('triggers').setCheck('trigger');
    this.appendDummyInput().appendField('conditions:');
    this.appendStatementInput('conditions').setCheck('condition');
    this.appendDummyInput().appendField('actions:');
    this.appendStatementInput('actions').setCheck('action');
    this.setColour(330);
    this.setTooltip('This block represents a single automation rule. Read the docs for more information');
    this.setHelpUrl('https://home-assistant.io/docs/automation/');
  }
};
