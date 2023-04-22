# Example Twirp client pact test

Running the tests
```
git clone git@github.com:mefellows/twirp-pact-test-poc.git
cd twirp-pact-test-poc
npm i
cd example
npm it
```

NOTE: the current protobuf plugin expects an additional parameter is set on the content type. This project uses `patch-package` to get the Twirp TS library to add this header. I'm not sure if this is standard Twirp behaviour or not, but please note this current limitation if you are trying this in other languages.

See https://github.com/pactflow/pact-protobuf-plugin/issues/24 and the fix below for how it's solved here.

# Fix for content-type header

Twirp client and server doesn't send headers in the way the pact plugin expects, patching the `http.client.js` and `server.js` files in the `twirp-ts` package with the following [patch file](./patches/twirp-ts+2.4.0.patch) corrects it.