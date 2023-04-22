import { NodeHttpRPC } from "twirp-ts";
import { HaberdasherClientProtobuf } from "../generated";
import { PactV4, Verifier } from "@pact-foundation/pact";
import { app } from "..";
import { Server } from "http";
import { GracefulShutdownManager } from "@moebius/http-graceful-shutdown";
import { verify } from "crypto";

describe("Habadasher Twirp Project", () => {
  describe("consumer test", () => {
    it("tests the #FindHatRPC RPC call", () => {
      const provider = new PactV4({
        consumer: "twirp-client",
        provider: "twirp-provider",
        // logLevel: "debug", // set this to debug if you want verbose output
      });

      const protoPath =
        "/Users/matthew.fellows/development/public/twirp-client-poc/example/protos/service.proto";

      const findHatRPCCall = `{
        "pact:content-type": "application/protobuf",
        "pact:proto": "${protoPath}",
        "pact:message-type": "FindHatRPC",
        "hat_id": "1"
      }`;

      return provider
        .addInteraction()
        .given("a hat exists")
        .uponReceiving("a request to retrieve a hat")
        .usingPlugin({
          plugin: "protobuf",
          version: "0.3.0",
        })
        .withRequest(
          "POST",
          "/twirp/twirp.example.haberdasher.Haberdasher/FindHat",
          (builder) => {
            builder.pluginContents("application/protobuf", findHatRPCCall);
          }
        )
        .willRespondWith(200, (builder) => {
          builder.pluginContents("application/protobuf", findHatRPCCall);
        })
        .executeTest(async (server) => {
          const client = new HaberdasherClientProtobuf(
            NodeHttpRPC({
              baseUrl: `${server.url}/twirp`,
            })
          );

          const res = await client.FindHat({
            hatId: "1",
          });

          // This tells us we got back a protobuf message with the data we expected
          expect(res.hatId).toEqual("1");
        });
    });
  });
  describe("provider test", () => {
    let server: Server;
    let shutdownManager: GracefulShutdownManager;

    beforeAll((done) => {
      server = app.listen(8000, async () => {
        process.on("SIGTERM", () => {
          shutdownManager.terminate(() => {
            console.log("Server is gracefully terminated");
          });
        });

        console.log("Twirp provider running on port 8000");
        done();
      });
      shutdownManager = new GracefulShutdownManager(server);
    });

    afterAll((done) => {
      shutdownManager.terminate(done);
    });

    // Actual provider verification
    it("verifies the Twirp API", async () => {
      return new Verifier({
        pactUrls: ["./pacts/twirp-client-twirp-provider.json"],
        providerBaseUrl: "http://localhost:8000",
      }).verifyProvider();
    });
  });
});
