Blockly.JSON['automation'] = function(block) {
  var text_alias = block.getFieldValue('alias');
  var statements_triggers = Blockly.JSON.statementToCode(block, 'triggers');
  var statements_conditions = Blockly.JSON.statementToCode(block, 'conditions');
  var statements_actions = Blockly.JSON.statementToCode(block, 'actions');
  // TODO: Assemble JSON into code variable.
  var code = '{ "alias":"' + text_alias + '"';
  
  if (statements_triggers){
      code += ',"trigger":' + statements_triggers;
  }
  if (statements_conditions){
      code += ',"condition":' + statements_conditions;
  }
  if (statements_actions){
      code += ',"action":' + statements_actions;
  }
  code+= '}';
  return code;
};

// ------------------------- VALUE TYPES -----------------------------
(function(){

Blockly.JSON['val_text'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble JSON into code variable.
  var code = '"' + text_text + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_time_offset'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var number_hours = block.getFieldValue('hours');
  var number_minutes = block.getFieldValue('minutes');
  var number_seconds = block.getFieldValue('seconds');

  if( number_hours.length == 1){
      number_hours = '0' + number_hours;
  }
  if( number_minutes.length == 1){
      number_minutes = '0' + number_minutes;
  }
  if( number_seconds.length == 1){
      number_seconds = '0' + number_seconds;
  }
  
  var code = '"' + dropdown_type + number_hours + ':' + number_minutes + ':' + number_seconds + '"';
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_template'] = function(block) {
  var text_template = block.getFieldValue('template');
  var code = '"' + text_template + '"';
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_number'] = function(block) {
  var value_number = block.getFieldValue('number');
  var code = Number(value_number);
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_time'] = function(block) {
  var number_hours = block.getFieldValue('hours');
  var number_minutes = block.getFieldValue('minutes');
  var number_seconds = block.getFieldValue('seconds');
  
  if( number_hours.length == 1){
      number_hours = '0' + number_hours;
  }
  if( number_minutes.length == 1){
      number_minutes = '0' + number_minutes;
  }
  if( number_seconds.length == 1){
      number_seconds = '0' + number_seconds;
  }
  
  var code = '"' + number_hours + ':' + number_minutes + ':' + number_seconds + '"';
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_weekday'] = function(block) {
  var checkbox_mon = block.getFieldValue('mon') == 'TRUE';
  var checkbox_tue = block.getFieldValue('tue') == 'TRUE';
  var checkbox_wed = block.getFieldValue('wed') == 'TRUE';
  var checkbox_thu = block.getFieldValue('thu') == 'TRUE';
  var checkbox_fri = block.getFieldValue('fri') == 'TRUE';
  var checkbox_sat = block.getFieldValue('sat') == 'TRUE';
  var checkbox_sun = block.getFieldValue('sun') == 'TRUE';
  
  var days = [];
  if (checkbox_mon) {
      days.push('mon');
  }
  if (checkbox_tue) {
      days.push('tue');
  }
  if (checkbox_wed) {
      days.push('wed');
  }
  if (checkbox_thu) {
      days.push('thu');
  }
  if (checkbox_fri) {
      days.push('fri');
  }
  if (checkbox_sat) {
      days.push('sat');
  }
  if (checkbox_sun) {
      days.push('sun');
  }
  
  var code = '"' + days.join(',') + '"';
  return [code, Blockly.JSON.ORDER_NONE];
};


Blockly.JSON['property'] = function(block) {
  var name = block.getFieldValue('name');
  var value = Blockly.JSON.valueToCode(block, 'value', Blockly.JSON.ORDER_NONE);
  if(value === null || value === '') {
      value = 'null';
  }
  var code = '"' + name + '":' + value;
  return [code, Blockly.JSON.ORDER_NONE];
};


Blockly.JSON['val_property'] = function(block) {
  var statements_properties = Blockly.JSON.statementToCode(block, 'properties');
  // TODO: Assemble JSON into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JSON.ORDER_NONE];
};


})();

// ------------------------- CONDITIONS ------------------------------

Blockly.JSON['condition_logic'] = function(block) {
  var operator = block.getFieldValue('logic');
  var conditions = Blockly.JSON.statementToCode(block, 'conditions');
  
  var code = '{ "condition": "' + operator + '"';
  code += ', "conditions": ' + conditions;
  code += '}';
  
  return code;
};

Blockly.JSON['condition_generic'] = function(block) {
  var text_condition = block.getFieldValue('condition');
  var properties = Blockly.JSON.statementToCode(block, 'properties', true);

  var code = '{ "condition": "' + text_condition + '"';
  
  // properties is an array of strings with "name: value"
  for (var i=0;i < properties.length; i++) {
      if(properties[i] !== '') {
        code += ', ' + properties[i];
      }
  }
  
  code += '}';
  
  return code;
};

Blockly.JSON['condition_sun'] = function(block) {
  var dropdown_beforeafter = block.getFieldValue('beforeafter');
  var dropdown_upordown = block.getFieldValue('upordown');
  var value_offset = Blockly.JSON.valueToCode(block, 'offset', Blockly.JSON.ORDER_NONE);

  var code = '{ "condition": "sun"';
  if (dropdown_beforeafter === 'before') {
      code+= ',"before": "' + dropdown_upordown + '"';
  } else {
      code += ',"after": "' + dropdown_upordown + '"';
  }
  if (value_offset) {
      var offsetName = (dropdown_beforeafter === 'before') ? 'before_offset' : 'after_offset';
      code += ',"' + offsetName +'":' + value_offset;
  }
  
  code += '}';
  return code;
};

Blockly.JSON['condition_numeric_state'] = function(block) {
  var text_entity_id = block.getFieldValue('entity_id');
  var value_above = Blockly.JSON.valueToCode(block, 'above', Blockly.JSON.ORDER_NONE);
  var value_below = Blockly.JSON.valueToCode(block, 'below', Blockly.JSON.ORDER_NONE);
  var value_val_template = Blockly.JSON.valueToCode(block, 'val_template', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['condition_state'] = function(block) {
  var text_entity_id = block.getFieldValue('entity_id');
  var value_state = Blockly.JSON.valueToCode(block, 'state', Blockly.JSON.ORDER_NONE);
  var value_for = Blockly.JSON.valueToCode(block, 'for', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['condition_template'] = function(block) {
  var value_value_template = Blockly.JSON.valueToCode(block, 'value_template', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['condition_time'] = function(block) {
  var value_after = Blockly.JSON.valueToCode(block, 'after', Blockly.JSON.ORDER_NONE);
  var value_before = Blockly.JSON.valueToCode(block, 'before', Blockly.JSON.ORDER_NONE);
  var value_weekday = Blockly.JSON.valueToCode(block, 'weekday', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['condition_zone'] = function(block) {
  var text_entity_id = block.getFieldValue('entity_id');
  var value_state = Blockly.JSON.valueToCode(block, 'state', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};



// ------------------------- TRIGGERS --------------------------------

Blockly.JSON['trigger_event'] = function(block) {
  var text_event_type = block.getFieldValue('event_type');
  var statements_event_data = Blockly.JSON.statementToCode(block, 'event_data');
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['trigger_mqtt'] = function(block) {
  var text_topic = block.getFieldValue('topic');
  var value_payload = Blockly.JSON.valueToCode(block, 'payload', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '{';
  code += '"platform": "mqtt"';
  code += ', "topic": "' + text_topic + '"';
  
  if (value_payload && value_payload !=='') {
      code += ', "payload": ' + value_payload;
  }
  
  return code + '}\n';
};

Blockly.JSON['trigger_numeric_state'] = function(block) {
  var text_entity_id = block.getFieldValue('entity_id');
  var value_above = Blockly.JSON.valueToCode(block, 'above', Blockly.JSON.ORDER_NONE);
  var value_below = Blockly.JSON.valueToCode(block, 'below', Blockly.JSON.ORDER_NONE);
  var value_val_template = Blockly.JSON.valueToCode(block, 'val_template', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['trigger_state'] = function(block) {
  var text_entity_id = block.getFieldValue('entity_id');
  var value_from = Blockly.JSON.valueToCode(block, 'from', Blockly.JSON.ORDER_NONE);
  var value_to = Blockly.JSON.valueToCode(block, 'to', Blockly.JSON.ORDER_NONE);
  var value_for = Blockly.JSON.valueToCode(block, 'for', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['trigger_sun'] = function(block) {
  var dropdown_upordown = block.getFieldValue('upordown');
  var value_offset = Blockly.JSON.valueToCode(block, 'offset', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '{ "platform": "sun"';
  code+= ',"event": "' + dropdown_upordown + '"';
  
  if (value_offset) {
      code += ',"offset":' + value_offset;
  }
  
  code += '}\n'; 
  
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['trigger_template'] = function(block) {
  var value_value_template = Blockly.JSON.valueToCode(block, 'value_template', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['trigger_time'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_after = Blockly.JSON.valueToCode(block, 'after', Blockly.JSON.ORDER_NONE);
  var number_minutes = block.getFieldValue('minutes');
  var number_seconds = block.getFieldValue('seconds');
  var number_minutes_int = block.getFieldValue('minutes_int');
  var number_seconds_int = block.getFieldValue('seconds_int');
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['trigger_zone'] = function(block) {
  var text_entity_id = block.getFieldValue('entity_id');
  var dropdown_event = block.getFieldValue('event');
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['action'] = function(block) {
  var text_service = block.getFieldValue('service');
  var statements_entity_id = Blockly.JSON.statementToCode(block, 'entity_id');
  var statements_data = Blockly.JSON.statementToCode(block, 'data');
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['action_delay'] = function(block) {
  var value_delay = Blockly.JSON.valueToCode(block, 'delay', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['action_wait'] = function(block) {
  var value_wait = Blockly.JSON.valueToCode(block, 'wait', Blockly.JSON.ORDER_NONE);
  var value_timeout = Blockly.JSON.valueToCode(block, 'timeout', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JSON['action_event'] = function(block) {
  var text_event = block.getFieldValue('event');
  var value_event_data = Blockly.JSON.valueToCode(block, 'event_data', Blockly.JSON.ORDER_NONE);
  // TODO: Assemble JSON into code variable.
  var code = '...;\n';
  return code;
};