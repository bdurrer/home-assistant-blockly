Blockly.Blocks['trigger_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EVENT");
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldTextInput("[[my event]]"), "event_type");
    this.appendStatementInput("event_data")
        .setCheck(["property", "data"])
        .appendField("with data");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "trigger");
    this.setNextStatement(true, "trigger");
    this.setColour(135);
    this.setTooltip('Triggers when an event is being processed. Events are the raw building blocks of Home Assistant. You can match events on just the event name or also require specific event data to be present.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#event-trigger');
  }
};

Blockly.Blocks['trigger_mqtt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT EVENT");
    this.appendDummyInput()
        .appendField("on topic")
        .appendField(new Blockly.FieldTextInput("[[/my/topic]]"), "topic");
    this.appendValueInput("payload")
        .setCheck(["String", "Boolean", "Number", "val_number", "val_text"])
        .appendField(" with payload");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "trigger");
    this.setNextStatement(true, "trigger");
    this.setColour(135);
    this.setTooltip('Triggers when a specific message is received on given topic. Optionally can match on the payload being sent over the topic.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#mqtt-trigger');
  }
};

Blockly.Blocks['trigger_numeric_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NUMERIC STATE");
    this.appendDummyInput()
        .appendField("entity")
        .appendField(new Blockly.FieldTextInput("[[entity id]]"), "entity_id");
    this.appendValueInput("above")
        .setCheck("Number")
        .appendField("is above");
    this.appendValueInput("below")
        .setCheck("Number")
        .appendField("is below");
    this.appendValueInput("val_template")
        .setCheck(["String", "val_template"])
        .appendField("value template:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "trigger");
    this.setNextStatement(true, "trigger");
    this.setColour(135);
    this.setTooltip('On state change of a specified entity, attempts to parse the state as a number and triggers if value is above and/or below a threshold.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#numeric-state-trigger');
  }
};

Blockly.Blocks['trigger_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("STATE");
    this.appendDummyInput()
        .appendField("entity")
        .appendField(new Blockly.FieldTextInput("[[entity id]]"), "entity_id");
    this.appendValueInput("from")
        .setCheck(["String", "Number", "Boolean"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("from");
    this.appendValueInput("to")
        .setCheck(["String", "Number", "Boolean"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("to");
    this.appendValueInput("for")
        .setCheck(["String", "val_time"])
        .appendField("in 'to' state for at least");
    this.setPreviousStatement(true, "trigger");
    this.setNextStatement(true, "trigger");
    this.setColour(135);
    this.setTooltip('Triggers when the state of tracked entities change. If only entity_id given will match all state changes.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#state-trigger');
  }
};

Blockly.Blocks['trigger_sun'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SUN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("on")
        .appendField(new Blockly.FieldDropdown([["sunset","sunset"], ["sunrise","sunrise"]]), "upordown");
    this.appendValueInput("offset")
        .setCheck(["String", "val_time_offset"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(", offset by");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "trigger");
    this.setNextStatement(true, "trigger");
    this.setColour(135);
    this.setTooltip('Trigger when the sun is setting or rising. An optional time offset can be given to have it trigger for example 45 minutes before sunset, when dusk is setting in.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#sun-trigger');
  }
};

Blockly.Blocks['trigger_template'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TEMPLATE");
    this.appendValueInput("value_template")
        .setCheck(["String", "val_template"])
        .appendField("value template");
    this.setPreviousStatement(true, "trigger");
    this.setNextStatement(true, "trigger");
    this.setInputsInline(false);
    this.setColour(135);
    this.setTooltip('Template triggers work by evaluating a [template] on each state change. The trigger will fire if the state change caused the template to render ‘true’. This is achieved by having the template result in a true boolean expression or by having the template render ‘true’.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#template-trigger');
  }
};

Blockly.Blocks['trigger_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TIME");
    this.appendDummyInput()
        .appendField("trigger ")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["after","after"], ["interval","interval"]]), "type");
    this.appendValueInput("after")
        .setCheck(["String", "val_time"])
        .appendField("after");
    this.appendDummyInput()
        .appendField("on")
        .appendField(new Blockly.FieldNumber(0, 0, 60), "minutes")
        .appendField("min, ")
        .appendField(new Blockly.FieldNumber(0, 0, 60), "seconds")
        .appendField(" sec");
    this.appendDummyInput()
        .appendField("every")
        .appendField(new Blockly.FieldNumber(0, 0, 60), "minutes_int")
        .appendField("min, ")
        .appendField(new Blockly.FieldNumber(0, 0, 60), "seconds_int")
        .appendField(" sec");
    this.setPreviousStatement(true, "trigger");
    this.setNextStatement(true, "trigger");
    this.setInputsInline(false);
    this.setColour(135);
    this.setTooltip('Time can be triggered in many ways. The most common is to specify after and trigger at a specific point in time each day. Alternatively, you can also match if the hour, minute or second of the current time has a specific value. You can prefix the value with a / to match whenever the value is divisible by that number. You cannot use after together with hour, minute or second.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#time-trigger');
  }
};

Blockly.Blocks['trigger_zone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ZONE");
    this.appendDummyInput()
        .appendField("entity")
        .appendField(new Blockly.FieldTextInput("[[entity id]]"), "entity_id");
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([["entering","enter"], ["leaving","leave"]]), "event")
        .appendField(" the zone");
    this.setPreviousStatement(true, "trigger");
    this.setNextStatement(true, "trigger");
    this.setColour(135);
    this.setTooltip('Zone triggers can trigger when an entity is entering or leaving the zone. For zone automation to work, you need to have setup a device tracker platform that supports reporting GPS coordinates.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#zone-trigger');
  }
};