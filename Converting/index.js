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
  Print() {
    for (var i = 0; i < this.Numbers.length; i++) {
      this.Validate(this.Numbers[i]);
    }
    for (var i = 0; i < this.Numbers.length; i++) {
      process.stdout.write(this.Convert(this.Numbers[i]));
      if (i < this.Numbers.length - 1) {
        process.stdout.write(',');
      }
    }
    process.stdout.write('\n');
  }
  Convert(Number) {
    let Output = '';
    this.Validate(Number);
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
  Validate(number) {
    if (
      Number.isInteger(number) == true &&
      number >= 0 &&
      typeof number === 'number'
    ) {
      return;
    } else {
      process.stdout.write('Please enter a valid Number.\n');
      process.exit();
    }
  }
}
module.exports = Converting;
