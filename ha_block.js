'use strict';

Blockly.JSON = new Blockly.Generator('JSON');
/**
 * Order of operation ENUMs.
 * https://developer.mozilla.org/en/JavaScript/Reference/Operators/Operator_Precedence
 */
Blockly.JSON.ORDER_ATOMIC = 0;           // 0 "" ...
Blockly.JSON.ORDER_NEW = 1.1;            // new
Blockly.JSON.ORDER_MEMBER = 1.2;         // . []
Blockly.JSON.ORDER_FUNCTION_CALL = 2;    // ()
Blockly.JSON.ORDER_INCREMENT = 3;        // ++
Blockly.JSON.ORDER_DECREMENT = 3;        // --
Blockly.JSON.ORDER_BITWISE_NOT = 4.1;    // ~
Blockly.JSON.ORDER_UNARY_PLUS = 4.2;     // +
Blockly.JSON.ORDER_UNARY_NEGATION = 4.3; // -
Blockly.JSON.ORDER_LOGICAL_NOT = 4.4;    // !
Blockly.JSON.ORDER_TYPEOF = 4.5;         // typeof
Blockly.JSON.ORDER_VOID = 4.6;           // void
Blockly.JSON.ORDER_DELETE = 4.7;         // delete
Blockly.JSON.ORDER_DIVISION = 5.1;       // /
Blockly.JSON.ORDER_MULTIPLICATION = 5.2; // *
Blockly.JSON.ORDER_MODULUS = 5.3;        // %
Blockly.JSON.ORDER_SUBTRACTION = 6.1;    // -
Blockly.JSON.ORDER_ADDITION = 6.2;       // +
Blockly.JSON.ORDER_BITWISE_SHIFT = 7;    // << >> >>>
Blockly.JSON.ORDER_RELATIONAL = 8;       // < <= > >=
Blockly.JSON.ORDER_IN = 8;               // in
Blockly.JSON.ORDER_INSTANCEOF = 8;       // instanceof
Blockly.JSON.ORDER_EQUALITY = 9;         // == != === !==
Blockly.JSON.ORDER_BITWISE_AND = 10;     // &
Blockly.JSON.ORDER_BITWISE_XOR = 11;     // ^
Blockly.JSON.ORDER_BITWISE_OR = 12;      // |
Blockly.JSON.ORDER_LOGICAL_AND = 13;     // &&
Blockly.JSON.ORDER_LOGICAL_OR = 14;      // ||
Blockly.JSON.ORDER_CONDITIONAL = 15;     // ?:
Blockly.JSON.ORDER_ASSIGNMENT = 16;      // = += -= *= /= %= <<= >>= ...
Blockly.JSON.ORDER_COMMA = 17;           // ,
Blockly.JSON.ORDER_NONE = 99;            // (...)

//goog.asserts.ENABLE_ASSERTS = false;

Blockly.JSON.workspaceToCode = function(workspace) {

    var json_text = '';

    var top_blocks = workspace.getTopBlocks(false);
    for(var i in top_blocks) {
        var top_block = top_blocks[i];

        if(top_block.type == 'automation') {
            var json_structure = this.generalBlockToObj ( top_block );

            json_text += json_structure //JSON.stringify(json_structure, null, 4) + '\n\n';
        }
    }

    return json_text;
};


Blockly.JSON.generalBlockToObj  = function(block) {

    if(block) {
        // dispatcher:
        var func = this[block.type];
        if(func) {
            return func.call(this, block);
        } else {
            console.log("Don't know how to generate JSON code for a '"+block.type+"'");
        }
    } else {
        return null;
    }
};

Blockly.JSON.blockToCode = function(block) {
  console.log('blockToCode:' + ((block) ? block.type : 'undef'));
  if (!block) {
    return '';
  }
  if (block.disabled) {
    // Skip past this block if it is disabled.
    return this.blockToCode(block.getNextBlock());
  }

  var func = this[block.type];
  var code = func.call(block, block);
  return code;
}


Blockly.JSON.scrub_ = function(block, code) {
  if (code === null) { return ''; } // Block has handled code generation itself

  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = this.blockToCode(nextBlock);
  return code + nextCode;
};


Blockly.JSON.statementToCode = function(block, name, asArray) {
    console.log('statementToCode:' + ((block) ? block.type : 'undef') + '--' + name);
  var targetBlock = block.getInputTargetBlock(name);
  var code = this.blockToCode(targetBlock);
  if(Array.isArray(code)) {
     code = code[0]; 
  }
  
  var elements = [];
  elements.push(code);
  
  if(targetBlock) {
      targetBlock = targetBlock.nextConnection && targetBlock.nextConnection.targetBlock();
      
      if(targetBlock) {
          // ok this is a list, build an array.
          code = '[' + code;
      
          var i=0;
          for(i=0;targetBlock !== null && i < 100; i++){
            var nextCode = this.blockToCode(targetBlock);
            if(Array.isArray(nextCode)) {
                nextCode = nextCode[0]; 
            }
            elements.push(nextCode);
            code += ',' + nextCode;
            targetBlock = targetBlock.nextConnection && targetBlock.nextConnection.targetBlock();
          }
          if(i >= 100){
            console.log('FAILED to make sense!'); 
          }
          code += ']';
      }
  }
  
  if (asArray === true) {
      return elements;
  }
  
  return code;
};


/*
Blockly.JSON['start'] = function(block) {

    var json    = this.generalBlockToObj( block.getInputTargetBlock( 'json' ) );

    return json;
};

Blockly.JSON['string'] = function(block) {
    var string_value = block.getFieldValue( 'string_value' );

    return string_value ;
};
*/