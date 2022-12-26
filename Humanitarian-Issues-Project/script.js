var count =  1;
var count2 = 1;
var count3 = 1;
var count4 = 1;
var count5 = 1;
var count6 = 1;

function update()
{
  count = count*-1;
  if (count ==-1)
  {
  var question = prompt("Which humanitarian crisis is the image showing? ('hint: look at the word bank! and enter the number associated with it')")
  if (question == 1)
  {
    document.getElementById('Syrian Crisis').src = "corrSyr.png";

  }
  else if (question != 1)
  {
   document.getElementById('Syrian Crisis').src = "incrSyr.png";

  }
  }
  if (count == 1)
  {
    document.getElementById('Syrian Crisis').src = "https://foreignpolicy.com/wp-content/uploads/2016/02/syrian_small.jpg";
  }
}

function update2()
{
  count2 = count2*-1;
  if (count2 ==-1)
  {
  var question = prompt("Which humanitarian crisis is the image showing? ('hint: look at the word bank! and enter the number associated with it')")
  if (question == 4)
  {
    document.getElementById('Yemen Crisis').src = "corrYem.png";

  }
  else if (question != 4)
  {
   document.getElementById('Yemen Crisis').src = "incrYem.png";

  }
  }
  if (count2 == 1)
  {
    document.getElementById('Yemen Crisis').src = "https://upfront.scholastic.com/content/dam/classroom-magazines/upfront/issues/2018-19/012819/p12-15-yemen/UPF012819-Yemen-promo.jpg";
  }
}


function update3()
{
  count3 = count3*-1;
  if (count3 ==-1)
  {
  var question = prompt("Which humanitarian crisis is the image showing? ('hint: look at the word bank! and enter the number associated with it')")
  if (question == 2)
  {
    document.getElementById('DRC Crisis').src = "corrDRC.png";

  }
  else if (question != 2)
  {
   document.getElementById('DRC Crisis').src = "incrDRC.png";

  }
  }
  if (count3 == 1)
  {
    document.getElementById('DRC Crisis').src = "https://reliefweb.int/sites/reliefweb.int/files/styles/attachment-large/public/headline-images/badylon2.jpg?itok=2MVevRdW";
  }
  //document.getElementById()
}

function update4()
{
  count4 = count4*-1;
  if (count4 ==-1)
  {
  var question = prompt("Which humanitarian crisis is the image showing? ('hint: look at the word bank! and enter the number associated with it')")
  if (question == 6)
  {
    document.getElementById('Afghanistan Crisis').src = "corrAfg.png";

  }
  else if (question != 6)
  {
   document.getElementById('Afghanistan Crisis').src = "incrAfg.png";

  }
  }
  if (count4 == 1)
  {
    document.getElementById('Afghanistan Crisis').src = "https://img.rt.com/files/2016.09/article/57d2aefcc46188794d8b458f.jpg";
  }
  //document.getElementById()
}

function update5()
{
  count5 = count5*-1;
  if (count5 ==-1)
  {
  var question = prompt("Which humanitarian crisis is the image showing? ('hint: look at the word bank! and enter the number associated with it')")
  if (question == 5)
  {
    document.getElementById('Somalian Crisis').src = "corrSom.png";

  }
  else if (question != 5)
  {
   document.getElementById('Somalian Crisis').src = "incrSom.png";

  }
  }
  if (count5 == 1)
  {
    document.getElementById('Somalian Crisis').src = "https://odihpn.org/wp-content/uploads/2012/03/8248659223_6e8494bdcc_o-900x500.jpg";
  }
}
function update6()
{
  count6 = count6*-1;
  if (count6 ==-1)
  {
  var question = prompt("Which humanitarian crisis is the image showing? ('hint: look at the word bank! and enter the number associated with it')")
  if (question == 3)
  {
    document.getElementById('South Sudan Crisis').src = "corrSS.png";

  }
  else if (question != 3)
  {
   document.getElementById('South Sudan Crisis').src = "incrSS.png";

  }
  }
  if (count6 == 1)
  {
    document.getElementById('South Sudan Crisis').src = "https://th.bing.com/th/id/Rb292f868a2ca5725323d081e3d7cb20c?rik=orDbXE39GxybuA&riu=http%3a%2f%2fdispatch.ug%2fwp-content%2fuploads%2f2018%2f02%2fSouth-Sudan-Crisis.jpg&ehk=7bkH5FBR9j4bqk0kiPCAw%2fmVXNMkJuBQdib2asY%2buD0%3d&risl=&pid=ImgRaw";
  }
}
