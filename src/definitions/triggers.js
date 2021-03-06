Blockly.Blocks.trigger_event = {
  init() {
    this.appendDummyInput().appendField('EVENT');
    this.appendDummyInput().appendField('type').appendField(new Blockly.FieldTextInput('[[my event]]'), 'event_type');
    this.appendStatementInput('event_data').setCheck(['property', 'data']).appendField('with data');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'trigger');
    this.setNextStatement(true, 'trigger');
    this.setColour(135);
    this.setTooltip(
      'Triggers when an event is being processed. Events are the raw building blocks of Home Assistant.' +
      'You can match events on just the event name or also require specific event data to be present.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#event-trigger');
  }
};

Blockly.Blocks.trigger_mqtt = {
  init() {
    this.appendDummyInput().appendField('MQTT EVENT');
    this.appendDummyInput().appendField('on topic').appendField(new Blockly.FieldTextInput('[[/my/topic]]'), 'topic');
    this.appendValueInput('payload').setCheck(['String', 'Boolean', 'Number', 'val_number', 'val_text']).appendField(' with payload');
    this.setInputsInline(true);
    this.setPreviousStatement(true, 'trigger');
    this.setNextStatement(true, 'trigger');
    this.setColour(135);
    this.setTooltip('Triggers when a specific message is received on given topic. Optionally can match on the payload being sent over the topic.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#mqtt-trigger');
  }
};

Blockly.Blocks.trigger_numeric_state = {
  init() {
    this.appendDummyInput().appendField('NUMERIC STATE');
    this.appendDummyInput().appendField('entity').appendField(new Blockly.FieldTextInput('[[entity id]]'), 'entity_id');
    this.appendValueInput('above').setCheck('Number').appendField('is above');
    this.appendValueInput('below').setCheck('Number').appendField('is below');
    this.appendValueInput('val_template').setCheck(['String', 'val_template']).appendField('value template:');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'trigger');
    this.setNextStatement(true, 'trigger');
    this.setColour(135);
    this.setTooltip('On state change of a specified entity, attempts to parse the state as a number and triggers if value is above and/or below a threshold.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#numeric-state-trigger');
  }
};

Blockly.Blocks.trigger_state = {
  init() {
    this.appendDummyInput().appendField('STATE');
    this.appendDummyInput().appendField('entity').appendField(new Blockly.FieldTextInput('[[entity id]]'), 'entity_id');
    this.appendValueInput('from').setCheck(['String', 'Number', 'Boolean']).setAlign(Blockly.ALIGN_RIGHT).appendField('from');
    this.appendValueInput('to').setCheck(['String', 'Number', 'Boolean']).setAlign(Blockly.ALIGN_RIGHT).appendField('to');
    this.appendValueInput('for').setCheck(['String', 'val_time', 'val_properties']).appendField("in 'to' state for at least");
    this.setPreviousStatement(true, 'trigger');
    this.setNextStatement(true, 'trigger');
    this.setColour(135);
    this.setTooltip('Triggers when the state of tracked entities change. If only entity_id given will match all state changes.');
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#state-trigger');
  }
};

Blockly.Blocks.trigger_sun = {
  init() {
    this.appendDummyInput().appendField('SUN');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('on')
      .appendField(new Blockly.FieldDropdown([['sunset', 'sunset'], ['sunrise', 'sunrise']]), 'upordown');
    this.appendValueInput('offset').setCheck(['String', 'val_time_offset']).setAlign(Blockly.ALIGN_RIGHT).appendField(', offset by');
    this.setInputsInline(true);
    this.setPreviousStatement(true, 'trigger');
    this.setNextStatement(true, 'trigger');
    this.setColour(135);
    this.setTooltip(
      'Trigger when the sun is setting or rising. An optional time offset can be given to have it trigger for example 45 minutes before sunset, ' +
      'when dusk is setting in.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#sun-trigger');
  }
};

Blockly.Blocks.trigger_template = {
  init() {
    this.appendDummyInput().appendField('TEMPLATE');
    this.appendValueInput('value_template').setCheck(['String', 'val_template']).appendField('value template');
    this.setPreviousStatement(true, 'trigger');
    this.setNextStatement(true, 'trigger');
    this.setInputsInline(false);
    this.setColour(135);
    this.setTooltip(
      'Template triggers work by evaluating a [template] on each state change. The trigger will fire if the state change caused the template to render ‘true’. ' +
      'This is achieved by having the template result in a true boolean expression or by having the template render ‘true’.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#template-trigger');
  }
};

Blockly.Blocks.trigger_time = {
  init() {
    this.appendDummyInput().appendField('TIME');
    this.appendDummyInput().appendField('trigger ').appendField(new Blockly.FieldDropdown([['on/interval', 'on/interval'], ['after', 'after']]), 'type');
    this.appendDummyInput().appendField('hours').appendField(new Blockly.FieldTextInput(''), 'hours');
    this.appendDummyInput().appendField('minutes').appendField(new Blockly.FieldTextInput('0'), 'minutes');
    this.appendDummyInput().appendField('seconds').appendField(new Blockly.FieldTextInput('0'), 'seconds');

    // this.appendValueInput('time').setCheck(['String', 'val_time', 'val_property']);
    this.setPreviousStatement(true, 'trigger');
    this.setNextStatement(true, 'trigger');
    this.setInputsInline(false);
    this.setColour(135);
    this.setTooltip(
      'Time can be triggered in many ways. The most common is to specify after and trigger at a specific point in time each day. ' +
      'Alternatively, you can also match if the hour, minute or second of the current time has a specific value. ' +
      'You can prefix the value with a / to match whenever the value is divisible by that number. You cannot use after together with hour, minute or second.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#time-trigger');
  }
/*
  onchange() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if (this.getSurroundParent() === null) {
      // Orphan: Block is not connected to a parent
      return;
    }
    const type = this.getFieldValue('type');
    const inputInterval = this.getInput('interval_data');
    const inputOn = this.getInput('on_data');
    const inputAfter = this.getInput('after');

    if (type === 'after') {
      inputInterval.setVisible(false);
      inputOn.setVisible(false);
      inputAfter.setVisible(true);
    } else if (type === 'on') {
      inputInterval.setVisible(false);
      inputOn.setVisible(true);
      inputAfter.setVisible(false);
    } else if (type === 'interval') {
      inputInterval.setVisible(true);
      inputOn.setVisible(false);
      inputAfter.setVisible(false);
    }
    console.log('block type is set to' + type);
  }
*/
};

Blockly.Blocks.trigger_zone = {
  init() {
    this.appendDummyInput().appendField('ZONE');
    this.appendDummyInput().appendField('entity').appendField(new Blockly.FieldTextInput('[[entity id]]'), 'entity_id');
    this.appendDummyInput().appendField('when').appendField(new Blockly.FieldDropdown([['entering', 'enter'], ['leaving', 'leave']]), 'event').appendField(' the zone');
    this.setPreviousStatement(true, 'trigger');
    this.setNextStatement(true, 'trigger');
    this.setColour(135);
    this.setTooltip(
      'Zone triggers can trigger when an entity is entering or leaving the zone. For zone automation to work, ' +
      'you need to have setup a device tracker platform that supports reporting GPS coordinates.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#zone-trigger');
  }
};

Blockly.Blocks.trigger_homeassistant = {
  init() {
    this.appendDummyInput().appendField('HOME ASSISTANT');
    this.appendDummyInput().appendField('on ').appendField(new Blockly.FieldDropdown([['start', 'start'], ['shutdown', 'shutdown']]), 'event');
    this.setPreviousStatement(true, 'trigger');
    this.setNextStatement(true, 'trigger');
    this.setColour(135);
    this.setTooltip(
      'Use this platform to trigger when Home Assistant starts up and shuts down.'
    );
    this.setHelpUrl('https://home-assistant.io/docs/automation/trigger/#home-assistant-trigger');
  }
};
