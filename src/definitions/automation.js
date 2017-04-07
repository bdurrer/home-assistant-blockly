Blockly.Blocks.automation = {
  init() {
    this.appendDummyInput().appendField('AUTOMATION');
    this.appendDummyInput().appendField('alias').appendField(new Blockly.FieldTextInput('[[alias]]'), 'alias');
    this.appendDummyInput().appendField('triggers:');
    this.appendStatementInput('triggers').setCheck('trigger');
    this.appendDummyInput().appendField('conditions:');
    this.appendStatementInput('conditions').setCheck('condition');
    // this.appendValueInput('conditions').setCheck('String').setAlign(Blockly.ALIGN_LEFT).appendField('conditions:');
    this.appendDummyInput().appendField('actions:');
    this.appendStatementInput('actions').setCheck('action');
    this.setColour(330);
    this.setTooltip('This block represents a single automation rule. Read the docs for more information');
    this.setHelpUrl('https://home-assistant.io/docs/automation/');
  },
  onchange() {
    const conditions = Blockly.JSON.statementToCode(this, 'conditions', Blockly.JSON.MODE_ARRAY);
    const msg = 'Please use a LOGIC condition block to combine multiple blocks';

    if (conditions.length > 1) {
      this.setWarningText(msg);
    } else {
      this.setWarningText(null);
    }

    /*
    const firstBlock = this.getInputTargetBlock('conditions');
    if (conditions.length > 1) {
      firstBlock.setWarningText(msg);
    } else if (conditions.length === 1) {
      firstBlock.setWarningText(null);
    }
    */
  }
};
