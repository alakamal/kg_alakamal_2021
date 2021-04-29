class Converting {
  Numbers = [];
  Result = null;
  PhoneticEquivalentArray = [
    'Zero',
    'One ',
    'Two ',
    'Three ',
    'Four ',
    'Five ',
    'Six ',
    'Seven ',
    'Eight ',
    'Nine ',
  ];
  constructor(Numbers) {
    for (var i = 0; i < Numbers.length; i++) {
      this.Numbers[i] = parseInt(Numbers[i]);
    }
  }
  Convert(Number) {
    let Output = '';
    if (Number.toString().length > 1) {
      const arr = Number.toString(10).split('');
      for (var i = 0; i < arr.length; i++) {
        Output =
          Output + this.PhoneticEquivalentArray[arr[i]].toString().trim();
      }
    } else Output = Output + this.PhoneticEquivalentArray[Number] + '';
    this.Result = Output.trim().split(',');
    for (var i = 0; i < this.Result.length; i++) {
      return this.Result[i];
    }
  }
}
module.exports = Converting;
