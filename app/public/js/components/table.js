"use strict";

module.exports = function() {

    let test = 'table component';
    console.log('>>', test, '<<');
    let promise = new Promise((resolve) => {
        setTimeout(resolve, 500, 'promise resolved after 500 ms');
    });
    promise.then(console.log.bind(console))


    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/users', false);
    xhr.send();

    if (xhr.status != 200) {
        xhr.status == 404;
    } else {
        for (var index in JSON.parse(xhr.responseText)) {
            var id = Number(index) + 1;
                try {
                    if (JSON.parse(xhr.responseText)[index] !== null) {
                        var name = JSON.parse(xhr.responseText)[index].name;

                        document.getElementById("tbody").innerHTML = document.getElementById("tbody").innerHTML + (
                        `<tr >
             
                        <td>` + id + `</td>
                            <td>` + name + `</td>                    
                                <td id="formChange` + index + `" style="display: none" span="formChanges">
                                    <form action="/update?id=` + index + `" class="form-inline" method="post" ">
                                        <div class="form-group">
                                            <label for="updateName" class="sr-only">
                                                Имя
                                            </label>
                                            <input class="form-control" type="text" id="updateName" name="updateName" value=>
                                        </div>
                                    &nbsp;
                                <button type="submit" class="btn btn-primary" onclick=hide() >Изменить</button>
                            </form>
                        </td>
        
                            <td id="formDelete` + index + `"> <a href="/delete?id=` + index + `">Удалить</a> | <a href="javascript:void(0)" onclick=hide("formDelete` + index + `") >Изменить</a></td>
                        </form>
                    </td>
                </tr>`
                )
                }
            } catch (e) {
                console.log("Not correct JSON");
                // console.log(e);
            }
        }
    }
};