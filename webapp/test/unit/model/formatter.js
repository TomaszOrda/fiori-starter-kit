sap.ui.define([
    "stk/starterkit/model/formatter"
], function( formatter) {
    "use strict"
    QUnit.module("Name formatting cases");

    function formatNameTest(options) {
        //Act
        const $Name = formatter.formatName(options.sFirstName, options.sLastName);

        //Assert
        options.assert.strictEqual($Name, options.expected, "The name was correctly formatted ${$Name}");
    }

    QUnit.test("Should format Andrzej Naczepa to A. Naczepa", function(assert) {
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Andrzej",
            sLastName: "Naczepa",
            expected: "A. Naczepa"
        });
    });

    QUnit.test("Should format Francesco Colapinto to F. Colapinto", function(assert) {
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Francesco",
            sLastName: "Colapinto",
            expected: "F. Colapinto"
        });
    });

    QUnit.test("Should format Satoshi Nakamoto to S. Nakamoto", function(assert) {
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Satoshi",
            sLastName: "Nakamoto",
            expected: "S. Nakamoto"
        });
    });

    QUnit.test("Should format Antonio Lucio Vivaldi to A. L. Vivaldi", function(assert) {
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Antonio Lucio",
            sLastName: "Vivaldi",
            expected: "A. L. Vivaldi"
        });
    });

    QUnit.test("Should format Ruben Loftus-Cheek to R. Loftus-Cheek", function(assert) {
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Ruben",
            sLastName: "Loftus-Cheek",
            expected: "R. Loftus-Cheek"
        });
    });
})