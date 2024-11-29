let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((value) => {
  value.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".box").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector(".box").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector(".box").value = string;
    }
  });
});
/*
here addEventListener return event object ->e so u cannot use value from loop in the addEventListener
target property of  event object works as innerhtl from whichthe element has trigger.*/
/*
When you use e.target.innerHTML, you're accessing the HTML content of the element that triggered the event. This is useful when you want to retrieve or manipulate the HTML content of an element, such as getting the text inside a <div> or the content of a <button>.

On the other hand, e.target.value is typically used with form elements like <input> or <textarea> to retrieve the value entered by the user.
*/
