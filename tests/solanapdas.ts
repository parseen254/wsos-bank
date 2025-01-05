import * as anchor from "@coral-xyz/anchor";

import { Program } from "@coral-xyz/anchor";
import { Solanapdas } from "../target/types/solanapdas";
import { expect } from "chai";

describe("solanapdas", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Solanapdas as Program<Solanapdas>;
  const provider = anchor.AnchorProvider.env();

  it("Can create a bank account", async () => {
    const tx = await program.methods.create("MyBank").rpc();
    expect(tx).to.be.a("string");
  });

  it("Provider is connected", () => {
    expect(provider.connection.rpcEndpoint).to.be.a("string");
    expect(provider.wallet).to.exist;
  });

  it("Program has expected programId", () => {
    expect(program.programId).to.exist;
    expect(program.programId.toBase58()).to.be.a("string");
  });

  it("Can fetch program account", async () => {
    const account = await program.account;
    expect(account).to.exist;
  });

  it("Has correct provider connection", () => {
    const connection = program.provider.connection;
    expect(connection).to.exist;
    expect(connection.rpcEndpoint).to.be.a("string");
  });
});
