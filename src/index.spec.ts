import { expect } from "chai";
import "mocha";
import { hello } from ".";

describe("My Test", function() {
    it("return the world", function() {
        expect(hello(), "world").to.eq("world", "Not the world!");
    });
});