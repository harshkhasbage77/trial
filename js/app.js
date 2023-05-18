const endDate = "24 Dec 2022 ";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  console.log(end);
  console.log(now);
  var diff = (end - now) / 1000;
  console.log(diff);

  // MY CODE... BUT THE TUTORS METHOD WAS BETTER AND SMALLER
  //   const days= Math.floor(diff / 3600 / 24);
  //   console.log(days);
  //   inputs[0].value=days;

  //   diff = diff - days*3600*24;
  //   const hrs= Math.floor(diff/3600)
  //   console.log(hrs);
  //   inputs[1].value=hrs;

  //   diff = diff - hrs*3600;
  //   const min= Math.floor(diff/60)
  //   console.log(min);
  //   inputs[2].value=min;

  //   diff = diff - min*60;
  //   const sec= Math.floor(diff)
  //   console.log(sec);
  //   inputs[3].value=sec;
  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff % (3600 * 24)) / 3600);
  inputs[2].value = Math.floor((diff % 3600) / 60);
  inputs[3].value = Math.floor(diff % 60);
}

// Initial call
clock();

setInterval(() => {
  clock(), 1000;
});
