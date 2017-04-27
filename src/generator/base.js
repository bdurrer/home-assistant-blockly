/**
 * This file contains the custom blockly language definition to generate JSON objects (usually blockly generates a String).
 * It does not contain any code specific to HA.
 */

Blockly.JSON = new Blockly.Generator('JSON');
/**
* Order of operation ENUMs.
* https://developer.mozilla.org/en/JavaScript/Reference/Operators/Operator_Precedence
*/
Blockly.JSON.ORDER_ATOMIC = 0; // 0 "" ...
Blockly.JSON.ORDER_NEW = 1.1; // new
Blockly.JSON.ORDER_MEMBER = 1.2; // . []
Blockly.JSON.ORDER_FUNCTION_CALL = 2; // ()
Blockly.JSON.ORDER_INCREMENT = 3; // ++
Blockly.JSON.ORDER_DECREMENT = 3; // --
Blockly.JSON.ORDER_BITWISE_NOT = 4.1; // ~
Blockly.JSON.ORDER_UNARY_PLUS = 4.2; // +
Blockly.JSON.ORDER_UNARY_NEGATION = 4.3; // -
Blockly.JSON.ORDER_LOGICAL_NOT = 4.4; // !
Blockly.JSON.ORDER_TYPEOF = 4.5; // typeof
Blockly.JSON.ORDER_VOID = 4.6; // void
Blockly.JSON.ORDER_DELETE = 4.7; // delete
Blockly.JSON.ORDER_DIVISION = 5.1; // /
Blockly.JSON.ORDER_MULTIPLICATION = 5.2; // *
Blockly.JSON.ORDER_MODULUS = 5.3; // %
Blockly.JSON.ORDER_SUBTRACTION = 6.1; // -
Blockly.JSON.ORDER_ADDITION = 6.2; // +
Blockly.JSON.ORDER_BITWISE_SHIFT = 7; // << >> >>>
Blockly.JSON.ORDER_RELATIONAL = 8; // < <= > >=
Blockly.JSON.ORDER_IN = 8; // in
Blockly.JSON.ORDER_INSTANCEOF = 8; // instanceof
Blockly.JSON.ORDER_EQUALITY = 9; // == != === !==
Blockly.JSON.ORDER_BITWISE_AND = 10; // &
Blockly.JSON.ORDER_BITWISE_XOR = 11; // ^
Blockly.JSON.ORDER_BITWISE_OR = 12; // |
Blockly.JSON.ORDER_LOGICAL_AND = 13; // &&
Blockly.JSON.ORDER_LOGICAL_OR = 14; // ||
Blockly.JSON.ORDER_CONDITIONAL = 15; // ?:
Blockly.JSON.ORDER_ASSIGNMENT = 16; // = += -= *= /= %= <<= >>= ...
Blockly.JSON.ORDER_COMMA = 17; // ,
Blockly.JSON.ORDER_NONE = 99; // (...)


Blockly.JSON.MODE_ARRAY = 1;
Blockly.JSON.MODE_OBJECT = 2;
Blockly.JSON.MODE_STRING = 3;

// goog.asserts.ENABLE_ASSERTS = false;

Blockly.JSON.generalBlockToObj = function (block) {
  if (block) {
    // dispatcher: block-specific transformer
    const func = this[block.type];
    if (func) {
      return func.call(this, block);
    }
    throw Error(`Don't know how to generate JSON code for a '${block.type}'`);
  } else {
    return null;
  }
};

Blockly.JSON.blockToCode = function (block) {
  // console.log('blockToCode:' + ((block) ? block.type : 'undef'));
  if (!block) {
    return null;
  }
  if (block.disabled) {
    // Skip past this block if it is disabled.
    return this.blockToCode(block.getNextBlock());
  }

  const func = this[block.type];
  const code = func.call(block, block);
  return code;
};

Blockly.JSON.scrub_ = function (block, code) {
  // blockToCode is overwritten, this should never be called
  /* eslint-disable no-console */
  console.log('UH OH, something called the scrubber!');
  console.log(block);
  console.log(code);
  /* eslint-enable no-console */
};

Blockly.JSON.statementToCode = function (block, name, mode = Blockly.JSON.MODE_ARRAY) {
  let targetBlock = block.getInputTargetBlock(name);
  let code = this.blockToCode(targetBlock);
  let mergedObject = {};
  if (Array.isArray(code)) {
    // ignore order setting
    code = code[0];
  }

  const elements = [];
  if (code !== null) {
    elements.push(code);
  }

  if (typeof code !== 'object' && mode === Blockly.JSON.MODE_OBJECT) {
    throw Error(`cannot use object mode with data type ${typeof code} from block '${targetBlock.type}'. Use array mode or make the transformer return objects`);
  }
  mergedObject = Object.assign(mergedObject, code);

  if (targetBlock) {
    targetBlock = targetBlock.nextConnection && targetBlock.nextConnection.targetBlock();

    if (targetBlock) {
      let i = 0;
      for (i = 0; targetBlock !== null && i < 200; i++) {
        code = this.blockToCode(targetBlock);
        if (Array.isArray(code)) {
          // ignore order setting
          code = code[0];
        }
        if (typeof code !== 'object' && mode === Blockly.JSON.MODE_OBJECT) {
          throw Error(`cannot use object mode with data type ${typeof code} from block '${targetBlock.type}'. Use array mode or make the transformer return objects`);
        }
        if (code !== null) {
          elements.push(code);
        }
        mergedObject = Object.assign(mergedObject, code);
        targetBlock = targetBlock.nextConnection && targetBlock.nextConnection.targetBlock();
      }
      if (i >= 100) {
        throw Error(`Block statement ${name} looped through following siblings over 100 times, something is obviously wrong here`);
      }
    }
  }

  if (mode === Blockly.JSON.MODE_ARRAY) {
    return elements;
  }

  if (mode === Blockly.JSON.MODE_OBJECT) {
    if (elements.length === 0) {
      return null;
    }
    return mergedObject;
  }

  throw Error('unknown statement mode');
};

Blockly.JSON.valueToCode = function (block, name, outerOrder) {
  if (isNaN(outerOrder)) {
    // order is irrelevant in our blockly setup
    throw Error(`Expecting valid order from block "${block.type}"`);
  }
  const targetBlock = block.getInputTargetBlock(name);
  if (!targetBlock) {
    return '';
  }
  const tuple = this.blockToCode(targetBlock);
  if (tuple === '') {
    // Disabled block.
    return '';
  }

  const code = tuple[0];
  if (!code && code !== 0) {
    // replace null, undefined, NaN, empty string
    // but keep number ZERO
    return '';
  }
  return code;
};

Blockly.JSON.addField = function (code, name, value, condition) {
  if (condition == null) {
    // default condition matches output of valueToCode
    // eslint-disable-next-line no-param-reassign
    condition = (value !== null && value !== '');
  }
  if (condition) {
    // eslint-disable-next-line no-param-reassign
    code[name] = value;
  }
  return code;
};
