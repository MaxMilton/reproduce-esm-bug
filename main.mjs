/**
 *
 * README:
 *  The contents of this file is not that important other than the import/require
 *  of the Couchbase library which is what seems to be causing the issue. Couchbase
 *  itself is a NoSQL database and the "couchbase" package is its node API/connector.
 *
 *  This code simply mocks an "upsert" (insert or create) of a document into the
 *  database. This code sample is taken from https://github.com/couchbase/couchnode
 *  and modified into modern JavaScript.
 *
 * NOTE:
 *  Couchbase node's mock API is currently broken so the expected result from this
 *  when working correctly is an error "ReferenceError: cluster is not defined".
 *
 */

import { Mock as couchbase } from 'couchbase';

const db = new couchbase.Cluster();
const bucket = cluster.openBucket();

bucket.upsert('testdoc', { name:'Frank' }, (err, result) => {
  if (err) throw err;

  bucket.get('testdoc', (err, result) => {
    if (err) throw err;

    console.log(result.value); // = {name: Frank}
  });
})
