class RegExp2 {
  constructor() {}

  exec(str = "123") {
    let len = str.length;
    this.test(str, len);
    let isTest = !(len = 0 || len < 5);
    //        str.replace("");

    return isTest;
  }

  test(str = "", int = 1) {
    const array1 = [1, 5, "<", "/", ">", "=", " "];
    for (let i = 0; i < int; i++) {
      let lettre = str.substring(i, i + 1);
      const found = array1.find((element) => element == lettre);

      //console.log(found, "eklements ", lettre, i);
    }
  }

  isAllReadyExist(array1) {}
}
export default RegExp2;
