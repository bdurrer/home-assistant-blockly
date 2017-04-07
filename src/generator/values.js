/* eslint dot-notation: "off", camelcase: "off" */

Blockly.JSON['val_text'] = function (block) {
  const text = block.getFieldValue('text');
  const code = text;
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_time_offset'] = function (block) {
  const plusminus = block.getFieldValue('type');
  let number_hours = block.getFieldValue('hours');
  let number_minutes = block.getFieldValue('minutes');
  let number_seconds = block.getFieldValue('seconds');

  if (number_hours.length === 1) {
    number_hours = `0${number_hours}`;
  }
  if (number_minutes.length === 1) {
    number_minutes = `0${number_minutes}`;
  }
  if (number_seconds.length === 1) {
    number_seconds = `0${number_seconds}`;
  }

  const code = `${plusminus}${number_hours}:${number_minutes}:${number_seconds}`;
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_template'] = function (block) {
  const template = block.getFieldValue('template');
  const code = template;
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_number'] = function (block) {
  const number = block.getFieldValue('number');
  const code = Number(number);
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_time'] = function (block) {
  let number_hours = block.getFieldValue('hours');
  let number_minutes = block.getFieldValue('minutes');
  let number_seconds = block.getFieldValue('seconds');

  if (number_hours.length === 1) {
    number_hours = `0${number_hours}`;
  }
  if (number_minutes.length === 1) {
    number_minutes = `0${number_minutes}`;
  }
  if (number_seconds.length === 1) {
    number_seconds = `0${number_seconds}`;
  }

  const code = `${number_hours}:${number_minutes}:${number_seconds}`;
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['val_weekday'] = function (block) {
  const checkbox_mon = block.getFieldValue('mon') === 'TRUE';
  const checkbox_tue = block.getFieldValue('tue') === 'TRUE';
  const checkbox_wed = block.getFieldValue('wed') === 'TRUE';
  const checkbox_thu = block.getFieldValue('thu') === 'TRUE';
  const checkbox_fri = block.getFieldValue('fri') === 'TRUE';
  const checkbox_sat = block.getFieldValue('sat') === 'TRUE';
  const checkbox_sun = block.getFieldValue('sun') === 'TRUE';

  const days = [];
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

  // array to comma-separated list ... as string
  const code = `${days.join(',')}`;
  return [code, Blockly.JSON.ORDER_NONE];
};

Blockly.JSON['property'] = function (block) {
  const name = block.getFieldValue('name');
  const value = Blockly.JSON.valueToCode(block, 'value', Blockly.JSON.ORDER_NONE);
  const code = {};
  code[name] = value;
  return [code, Blockly.JSON.ORDER_NONE];
};

/**
* Let's us use multiple properties as 'value' of a field so that we can have sub-properties.
*/
Blockly.JSON['val_property'] = function (block) {
  const properties = Blockly.JSON.statementToCode(block, 'properties', Blockly.JSON.MODE_OBJECT);
  const code = properties;
  return [code, Blockly.JSON.ORDER_NONE];
};
