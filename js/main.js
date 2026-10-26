document.querySelectorAll("#colors button").forEach(function (item) {

    item.onclick = function (event) {
        document.querySelector("#demo").style.color = item.dataset.color;
        document.querySelector("#demo").style.textAlign = item.dataset.location;
    }

})


document.querySelector("#myForm").addEventListener("submit", function (event) {

    var works = document.querySelector("#works").value;
    var result = document.querySelector("#result");   // ul

    if (works == "") {
        alert("Enter Data");
        event.preventDefault();
    } else {

        var myLi = document.createElement("li");
        myLi.className = "flex justify-between items-center border border-gray-200 rounded-lg px-4 py-3 mb-3";
        myLi.innerHTML = "<span>" + works + "</span>";

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "🗑";
        deleteBtn.className = "text-red-500 hover:text-red-700 text-xl";

        deleteBtn.onclick = function () {
            myLi.remove();
        };

        myLi.append(deleteBtn);
        result.append(myLi);

        document.querySelector("#works").value = "";
        event.preventDefault();
    }

})