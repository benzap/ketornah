(ns ketornah-client.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [ketornah-client.core-test]
   [ketornah-client.common-test]))

(enable-console-print!)

(doo-tests 'ketornah-client.core-test
           'ketornah-client.common-test)
