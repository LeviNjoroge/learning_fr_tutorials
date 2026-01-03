

void main(){
  
  // convert string to integer
  var a, b, c;
  a=10;
  b="32";
  c = a + int.parse(b);
  print(c);

  // str to double
  var d, e, f;
  d = "3.14";
  e = 40;
  f = 40 * double.parse(d);
  print(f);

  // int or double to string
  var x, y, z;
  x = 101;
  y = "02";
  z = x.toString() + y;
  print(z);
}