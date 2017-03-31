Blockly.Blocks['condition_logic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("COMBINE CONDITIONS");
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([["any is","or"], ["all are","and"]]), "logic")
        .appendField("true of the");
    this.appendStatementInput("conditions")
        .setCheck(["condition_logic", "condition_generic", "condition_sun", "condition_numeric_state", "condition_state", "condition_template", "condition_zone"])
        .appendField("nested conditions:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('AND/OR Condition');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#and-condition');
  }
};

Blockly.Blocks['condition_generic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GENERIC");
    this.appendDummyInput()
        .appendField("condition of type")
        .appendField(new Blockly.FieldTextInput("sun"), "condition");
    this.appendStatementInput("properties")
        .setCheck("property")
        .appendField("properties:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Free-Text Condition');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/');
  }
};

Blockly.Blocks['condition_sun'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SUN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("It is ")
        .appendField(new Blockly.FieldDropdown([["before","before"], [" after ","after"]]), "beforeafter");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["sunset","sunset"], ["sunrise","sunrise"]]), "upordown");
    this.appendValueInput("offset")
        .setCheck(["String", "val_time_offset"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("offset by");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Tests if the sun has already set or risen');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#sun-condition');
  }
};

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

Blockly.Blocks['condition_numeric_state'] = {
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('This type of condition attempts to parse the state of specified entity as a number and triggers if the value matches all of the above or below thresholds.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#numeric-state-condition');
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

Blockly.Blocks['condition_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("STATE");
    this.appendDummyInput()
        .appendField("entity")
        .appendField(new Blockly.FieldTextInput("[[entity id]]"), "entity_id");
    this.appendValueInput("state")
        .setCheck(["String", "Number", "Boolean"])
        .appendField("is in state");
    this.appendValueInput("for")
        .setCheck(["String", "val_time"])
        .appendField("for at least");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Tests if an entity is a specified state.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#state-condition');
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

Blockly.Blocks['condition_template'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TEMPLATE");
    this.appendValueInput("value_template")
        .setCheck(["String", "val_template"])
        .appendField("value template");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('The template condition will test if the given template renders a value equal to true. This is achieved by having the template result in a true boolean expression or by having the template render ‘true’.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#template-condition');
  }
};

Blockly.Blocks['condition_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TIME");
    this.appendValueInput("after")
        .setCheck(["String", "val_time"])
        .appendField("after");
    this.appendValueInput("before")
        .setCheck(["String", "val_time"])
        .appendField("before");
    this.appendValueInput("weekday")
        .setCheck("val_weekday")
        .appendField("weekday");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setColour(230);
    this.setTooltip('The time condition can test if it is after a specified time, before a specified time or if it is a certain day of the week.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#time-condition');
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

Blockly.Blocks['condition_zone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ZONE");
    this.appendDummyInput()
        .appendField("entity")
        .appendField(new Blockly.FieldTextInput("[[entity id]]"), "entity_id");
    this.appendValueInput("state")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("is in zone");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Zone conditions test if an entity is in a certain zone.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/conditions/#zone-condition');
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
  }
};

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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('Zone triggers can trigger when an entity is entering or leaving the zone. For zone automation to work, you need to have setup a device tracker platform that supports reporting GPS coordinates.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#zone-trigger');
  }
};

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
        .setCheck(["trigger_event", "trigger_mqtt", "trigger_numeric_state", "trigger_state", "trigger_sun", "trigger_template", "trigger_time", "trigger_zone"]);
    this.appendDummyInput()
        .appendField("conditions:");
    this.appendStatementInput("conditions")
        .setCheck(["condition_logic", "condition_generic", "condition_numeric_state", "condition_state", "condition_sun", "condition_template", "condition_time", "condition_zone"]);
    this.appendDummyInput()
        .appendField("actions:");
    this.appendStatementInput("actions")
        .setCheck(["action", "action_wait", "action_delay", "action_event", "condition_logic", "condition_generic", "condition_numeric_state", "condition_state", "condition_sun", "condition_template", "condition_time", "condition_zone"]);
    this.setColour(330);
    this.setTooltip('This block represents a single automation rule. Read the docs for more information');
    this.setHelpUrl('https://home-assistant.io/docs/automation/');
  }
};

Blockly.Blocks['action'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ACTION");
    this.appendDummyInput()
        .appendField("service: ")
        .appendField(new Blockly.FieldTextInput("[[service]]"), "service");
    this.appendStatementInput("entity_id")
        .setCheck(["String", "val_text"])
        .appendField("entity id:");
    this.appendStatementInput("data")
        .setCheck(["String", "val_property"])
        .appendField("data:");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['action_delay'] = {
  init: function() {
    this.appendValueInput("delay")
        .setCheck(["val_time", "String", "val_properties"])
        .appendField("DELAY for");
    this.setColour(0);
    this.setTooltip('Delays are useful for temporarily suspending your script and start it at a later moment. ');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/#delay');
  }
};

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

Blockly.Blocks['action_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WAIT for");
    this.appendValueInput("wait")
        .setCheck(["val_template", "String", "val_text"])
        .appendField("value template");
    this.appendValueInput("timeout")
        .setCheck(["val_time", "String", "val_property"])
        .appendField("timeout");
    this.setColour(0);
    this.setTooltip('Wait until some things are complete. We support at the moment wait_template for waiting until a condition is true. It is possible to set a timeout after that will the script abort his execution.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/#wait');
  }
};

Blockly.Blocks['action_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EVENT");
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("[[event]]"), "event");
    this.appendValueInput("event_data")
        .setCheck(["val_time", "String", "val_properties"])
        .appendField("event data");
    this.setColour(0);
    this.setTooltip('This action allows you to fire an event. Events can be used for many things. It could trigger an automation or indicate to another component that something is happening.');
    this.setHelpUrl('https://home-assistant.io/docs/scripts/#fire-an-event');
  }
};