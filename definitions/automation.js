Blockly.Blocks['automation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("AUTOMATION");
    this.appendDummyInput()
        .appendField("alias")
        .appendField(new Blockly.FieldTextInput("[[alias]]"), "alias");
    this.appendDummyInput()
        .appendField("triggers:");
    this.appendStatementInput("triggers")
        .setCheck("trigger");
        //.setCheck(["trigger_event", "trigger_mqtt", "trigger_numeric_state", "trigger_state", "trigger_sun", "trigger_template", "trigger_time", "trigger_zone"]);
    this.appendDummyInput()
        .appendField("conditions:");
    this.appendStatementInput("conditions")
        .setCheck("condition");
        //.setCheck(["condition_logic", "condition_generic", "condition_numeric_state", "condition_state", "condition_sun", "condition_template", "condition_time", "condition_zone"]);
    this.appendDummyInput()
        .appendField("actions:");
    this.appendStatementInput("actions")
        .setCheck("action");
        //.setCheck(["action", "action_wait", "action_delay", "action_event", "condition_logic", "condition_generic", "condition_numeric_state", "condition_state", "condition_sun", "condition_template", "condition_time", "condition_zone"]);
    this.setColour(330);
    this.setTooltip('This block represents a single automation rule. Read the docs for more information');
    this.setHelpUrl('https://home-assistant.io/docs/automation/');
  }
};