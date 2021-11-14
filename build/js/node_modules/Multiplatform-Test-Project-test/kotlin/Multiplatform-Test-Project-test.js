(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Multiplatform-Test-Project', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Multiplatform-Test-Project'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Multiplatform-Test-Project-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Multiplatform-Test-Project-test'.");
    }if (typeof this['Multiplatform-Test-Project'] === 'undefined') {
      throw new Error("Error loading module 'Multiplatform-Test-Project-test'. Its dependency 'Multiplatform-Test-Project' was not found. Please, check whether 'Multiplatform-Test-Project' is loaded prior to 'Multiplatform-Test-Project-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'Multiplatform-Test-Project-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'Multiplatform-Test-Project-test'.");
    }root['Multiplatform-Test-Project-test'] = factory(typeof this['Multiplatform-Test-Project-test'] === 'undefined' ? {} : this['Multiplatform-Test-Project-test'], kotlin, this['Multiplatform-Test-Project'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$Multiplatform_Test_Project, $module$kotlin_test) {
  'use strict';
  var CommonSample = $module$Multiplatform_Test_Project.CommonSample;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function TestSampleJs() {
  }
  TestSampleJs.prototype.runFibTest = function () {
    (new CommonSample()).runFib();
  };
  TestSampleJs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestSampleJs',
    interfaces: []
  };
  _.TestSampleJs = TestSampleJs;
  suite('', false, function () {
    suite('TestSampleJs', false, function () {
      test('runFibTest', false, function () {
        return (new TestSampleJs()).runFibTest();
      });
    });
  });
  Kotlin.defineModule('Multiplatform-Test-Project-test', _);
  return _;
}));

//# sourceMappingURL=Multiplatform-Test-Project-test.js.map
