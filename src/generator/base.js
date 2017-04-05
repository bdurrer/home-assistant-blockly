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

// goog.asserts.ENABLE_ASSERTS = false;

Blockly.JSON.workspaceToCode = function (workspace) {
  const topBlocks = workspace.getTopBlocks(false);
  let jsonText = '';
  for (let i = 0; i < topBlocks.length; i++) {
    const block = topBlocks[i];

    if (block.type === 'automation') {
      const jsonStructure = this.generalBlockToObj(block);
      jsonText += jsonStructure; // JSON.stringify(json_structure, null, 4) + '\n\n';
    }
  }

  return jsonText;
};

Blockly.JSON.generalBlockToObj = function (block) {
  if (block) {
    // dispatcher:
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
    return '';
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
  if (code === null) {
    return '';
  } // Block has handled code generation itself

  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();

  // this block has a sibling inside a statement, follow it!
  const nextCode = this.blockToCode(nextBlock);
  return code + nextCode;
};

Blockly.JSON.statementToCode = function (block, name, asArray) {
  let targetBlock = block.getInputTargetBlock(name);
  let code = this.blockToCode(targetBlock);
  if (Array.isArray(code)) {
    code = code[0];
  }

  const elements = [code];

  if (targetBlock) {
    targetBlock = targetBlock.nextConnection && targetBlock.nextConnection.targetBlock();

    if (targetBlock) {
      // ok this is a list of blocks, build an array.
      code = `[${code}`;

      let i = 0;
      for (i = 0; targetBlock !== null && i < 200; i++) {
        let nextCode = this.blockToCode(targetBlock);
        if (Array.isArray(nextCode)) {
          nextCode = nextCode[0];
        }
        elements.push(nextCode);
        code += `,${nextCode}`;
        targetBlock = targetBlock.nextConnection && targetBlock.nextConnection.targetBlock();
      }
      if (i >= 200) {
        throw Error(`Block statement ${name} looped through following siblings over 200 times, something is obviously wrong here`);
      }
      code += ']';
    }
  }

  if (asArray === true) {
    return elements;
  }

  return code;
};
