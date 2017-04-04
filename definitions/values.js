
Blockly.Blocks['val_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("[[text]]"), "text");
    this.setOutput(true, "String");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['val_time_offset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"]]), "type")
        .appendField(new Blockly.FieldNumber(0, 0), "hours")
        .appendField(":")
        .appendField(new Blockly.FieldNumber(0, 0), "minutes")
        .appendField(":")
        .appendField(new Blockly.FieldNumber(0, 0), "seconds");
    this.setOutput(true, ["String", "val_time_offset"]);
    this.setColour(65);
    this.setTooltip('Time Offset');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['val_template'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("[[template]]"), "template");
    this.setOutput(true, ["String", "val_template"]);
    this.setColour(65);
    this.setTooltip('value template');
    this.setHelpUrl('https://home-assistant.io/docs/configuration/templating/');
  }
};

Blockly.Blocks['val_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "number");
    this.setOutput(true, "Number");
    this.setColour(15);
    this.setTooltip('Numeric value');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['val_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0), "hours")
        .appendField(":")
        .appendField(new Blockly.FieldNumber(0, 0), "minutes")
        .appendField(":")
        .appendField(new Blockly.FieldNumber(0, 0), "seconds");
    this.setOutput(true, ["String", "val_time"]);
    this.setColour(65);
    this.setTooltip('Time');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['val_weekday'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("monday")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "mon");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("tue")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "tue");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("wednesday")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "wed");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("thu")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "thu");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("friday")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "fri");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("saturday")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "sat");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sunday")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "sun");
    this.setInputsInline(false);
    this.setOutput(true, "val_weekday");
    this.setColour(60);
    this.setTooltip('The time condition can test if it is after a specified time, before a specified time or if it is a certain day of the week.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#time-condition');
  }
};

Blockly.Blocks['property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("[[name]]"), "name");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField(", value");
    this.setInputsInline(true);
    //this.setOutput(true, ["property", "data"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('key-value pair in YAML');
    this.setHelpUrl('https://home-assistant.io/docs/configuration/yaml/');
  },
  onchange: function() {
    inputNameCheck(this);
  }
};

function inputNameCheck(referenceBlock) {
    if (!referenceBlock.workspace) {
      // Block has been deleted.
      return;
    }
    if(referenceBlock.getSurroundParent() === null) {
        // Block is not connected to a parent block
        return;
    }
    console.log('checking property blocks');
    console.log(referenceBlock);
    
    var type = referenceBlock.type;
    var name = referenceBlock.getFieldValue('name').toLowerCase();
    var count = 1;
    
    var block = referenceBlock.getNextBlock();
    for (var i=0; i < 100 && block !== null; i++) {
      if (!block.disabled && !block.getInheritedDisabled() && block.type === type) {
        var otherName = block.getFieldValue('name');
        if (otherName && otherName.toLowerCase() == name) {
          count++;
        }
      }
      block = block.getNextBlock();
    }
    var msg = (count > 1) ?
        'There are ' + count + ' property blocks\n with the same name.' : null;
    referenceBlock.setWarningText(msg);
    console.log('check result is ' + count);
}

Blockly.Blocks['val_property'] = {
  init: function() {
    this.appendStatementInput("properties")
        .setCheck("property")
        .appendField("properties:");
    this.setInputsInline(true);
    this.setOutput(true, ["property", "data"]);
    this.setColour(65);
    this.setTooltip('key-value pair in YAML');
    this.setHelpUrl('https://home-assistant.io/docs/configuration/yaml/');
  }
};