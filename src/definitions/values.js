/**
 * Validator function which checks the "name" field of a block against the names of it's siblings.
 * This solution is limited to sibling blocks.
 * It does not protect users from adding a property named "entity_id" to a parent block (e.g. an action), which already has that property.
 */
function inputNameCheck(referenceBlock) {
  if (!referenceBlock.workspace) {
    // Block has been deleted.
    return;
  }
  if (referenceBlock.getSurroundParent() === null) {
    // Orphan: Block is not connected to a parent
    return;
  }
  const type = referenceBlock.type;
  const name = referenceBlock.getFieldValue('name').toLowerCase();
  let count = 1;
  let block = referenceBlock.getNextBlock();
  for (let i = 0; i < 100 && block !== null; i++) {
    if (!block.disabled && !block.getInheritedDisabled() && block.type === type) {
      const otherName = block.getFieldValue('name');
      if (otherName && otherName.toLowerCase() === name) {
        count++;
      }
    }
    block = block.getNextBlock();
  }
  const msg = count > 1 ? `There are ${count} property blocks\n with the same name.` : null;
  referenceBlock.setWarningText(msg);
}


Blockly.Blocks.val_text = {
  init() {
    this.appendDummyInput()
      .appendField(this.newQuote_(true))
      .appendField(new Blockly.FieldTextInput('[[text]]'), 'text')
      .appendField(this.newQuote_(false));
    this.setOutput(true, 'String');
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  /**
   * Create an image of an open or closed quote.
   * @param {boolean} open True if open quote, false if closed.
   * @return {!Blockly.FieldImage} The field image of the quote.
   * @this Blockly.Block
   * @private
   */
  newQuote_(open) {
    let file;
    if (open === this.RTL) {
      file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8' +
      'wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu' +
      '5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5r' +
      'U7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD' +
      '+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
};

Blockly.Blocks.val_time_offset = {
  init() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([['+', '+'], ['-', '-']]), 'type')
      .appendField(new Blockly.FieldNumber(0, 0), 'hours')
      .appendField(':')
      .appendField(new Blockly.FieldNumber(0, 0), 'minutes')
      .appendField(':')
      .appendField(new Blockly.FieldNumber(0, 0), 'seconds');
    this.setOutput(true, ['String', 'val_time_offset']);
    this.setColour(65);
    this.setTooltip('Time Offset');
    this.setHelpUrl('');
  }
};

Blockly.Blocks.val_template = {
  init() {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput('[[template]]'), 'template');
    this.setOutput(true, ['String', 'val_template']);
    this.setColour(65);
    this.setTooltip('value template');
    this.setHelpUrl('https://home-assistant.io/docs/configuration/templating/');
  }
};

Blockly.Blocks.val_number = {
  init() {
    this.appendDummyInput().appendField(new Blockly.FieldNumber(0), 'number');
    this.setOutput(true, 'Number');
    this.setColour(15);
    this.setTooltip('Numeric value');
    this.setHelpUrl('');
  }
};

Blockly.Blocks.val_time = {
  init() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldNumber(0, 0), 'hours')
      .appendField(':')
      .appendField(new Blockly.FieldNumber(0, 0), 'minutes')
      .appendField(':')
      .appendField(new Blockly.FieldNumber(0, 0), 'seconds');
    this.setOutput(true, ['String', 'val_time']);
    this.setColour(65);
    this.setTooltip('Time');
    this.setHelpUrl('');
  }
};

Blockly.Blocks.val_weekday = {
  init() {
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('monday').appendField(new Blockly.FieldCheckbox('TRUE'), 'mon');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('tue').appendField(new Blockly.FieldCheckbox('TRUE'), 'tue');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('wednesday').appendField(new Blockly.FieldCheckbox('TRUE'), 'wed');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('thu').appendField(new Blockly.FieldCheckbox('TRUE'), 'thu');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('friday').appendField(new Blockly.FieldCheckbox('TRUE'), 'fri');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('saturday').appendField(new Blockly.FieldCheckbox('TRUE'), 'sat');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('sunday').appendField(new Blockly.FieldCheckbox('TRUE'), 'sun');
    this.setInputsInline(false);
    this.setOutput(true, 'val_weekday');
    this.setColour(60);
    this.setTooltip('The time condition can test if it is after a specified time, before a specified time or if it is a certain day of the week.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#time-condition');
  }
};

Blockly.Blocks.property = {
  init() {
    this.appendDummyInput().appendField('name').appendField(new Blockly.FieldTextInput('[[name]]'), 'name');
    this.appendValueInput('value').setCheck(null).appendField(', value');
    this.setInputsInline(true);
    // this.setOutput(true, ["property", "data"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('key-value pair in YAML');
    this.setHelpUrl('https://home-assistant.io/docs/configuration/yaml/');
  },
  onchange() {
    inputNameCheck(this);
  }
};

Blockly.Blocks.val_property = {
  init() {
    this.appendStatementInput('properties').setCheck('property').appendField('properties:');
    this.setInputsInline(true);
    this.setOutput(true, ['val_properties', 'data']);
    this.setColour(65);
    this.setTooltip('list of key-value pairs in YAML');
    this.setHelpUrl('https://home-assistant.io/docs/configuration/yaml/');
  }
};
