import * as Funcs from "./globalFuncs";

describe("Global Funcs", () => {
  describe("calcCircSupply=>", () => {
    let testObj = {
      max_supply: 0,
      circulating_supply: 0,
    };
    it("returns `N/A` if invalid max_supply or circulating_supply given", () => {
      let res = Funcs.calcCircSupply(testObj);
      expect(res).toEqual("N/A");
    });

    it("returns correct circulating supply", () => {
      testObj = {
        max_supply: 1000,
        circulating_supply: 500,
      };
      let res = Funcs.calcCircSupply(testObj);
      expect(res).toEqual("50.00");
    });
  });

  describe("convertToCurrencyNum=>", () => {
    it("returns `N/A` is `val` is falsey", () => {
      let res = Funcs.convertToCurrencyNum(0);
      expect(res).toEqual("N/A");
    });

    it("if valid `val` given, returns value in correct format", () => {
      let res = Funcs.convertToCurrencyNum(100000);
      expect(res).toEqual("100,000.00");
    });
  });

  describe("convertToVolNum=>", () => {
    it("returns `N/A` if `val` is falsey", () => {
      let res = Funcs.convertToVolNum(0);
      expect(res).toEqual("N/A");
    });

    it("returns correct value if `val` is valid", () => {
      let res = Funcs.convertToVolNum(1000);
      expect(res).toEqual("1,000");
    });
  });

  describe("convertVal=>", () => {
    let testObj = {
      max_supply: 1000,
      circulating_supply: 600,
    };
    it("if `key` not in switch statement, simply return `val` as is", () => {
      let res = Funcs.convertVal(1000, "not_valid", testObj);
      expect(res).toEqual(1000);
    });

    it("current_price->", () => {
      let res = Funcs.convertVal(1000, "current_price", testObj);
      expect(res).toEqual("$1,000.00");
    });

    it("market_cap->", () => {
      let res = Funcs.convertVal(10000, "market_cap", testObj);
      expect(res).toEqual("$10,000.00");
    });

    it("circulating_supply->", () => {
      let res = Funcs.convertVal(10000, "circulating_supply", testObj);
      expect(res).toEqual("10,000");
    });

    it("max_supply->", () => {
      let res = Funcs.convertVal(100001, "max_supply", testObj);
      expect(res).toEqual("100,001");
    });

    it("total_volume->", () => {
      let res = Funcs.convertVal(100002, "total_volume", testObj);
      expect(res).toEqual("100,002");
    });

    it("circ_supply_percent->", () => {
      let res = Funcs.convertVal(100002, "circ_supply_percent", testObj);
      expect(res).toEqual("60.00");
    });
  });
});
