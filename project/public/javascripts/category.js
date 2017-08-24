"use strict";

//Dynamically creates the map feature. Initializes the map svg object and creates the individual states with their relevant information 
//contained within the information box. Appends the map to the html page. The method takes in the hard-coded state information from above as well 
//as json data regarding each state's information. 
function map(states, jsonData, infoType) {

    var g = document.getElementById("g5");
    g.innerHTML = '';

    var modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = "";

    //Creates the line that separates Hawaii and Alaska on the map graphic
    var newpath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newpath.setAttribute("id", "path67");
    newpath.setAttribute("fill", "none");
    newpath.setAttribute("stroke", "#A9A9A9");
    newpath.setAttribute("stroke-width", "2");
    newpath.setAttribute("d", "M385,593v55l36,45 M174,525h144l67,68h86l53,54v46");

    g.appendChild(newpath);
    var drop = document.getElementsByClassName("state-dropdown");
    var type;
    if (infoType == "programs") {
        type = 1;
    }
    else {
        type = 0;
    }
    var dropDiv = drop[type];
    var options = dropDiv.children;
    //Initializes the graphic for each individual state and makes them the default gray color. The information regarding the \
    //location of the states and their draw coordinates is passed in from the app.js file.

    states.forEach(function (state) {
        var stateOption;
        _(options).forEach(function (opt) {
            if (opt.innerHTML == state.id) {
                stateOption = opt;
            }
        })

        var newState = document.createElementNS("http://www.w3.org/2000/svg", "path");
        newState.setAttribute("class", state.id);
        newState.setAttribute("fill", "#D3D3D3");
        newState.setAttribute("d", state.d);
        newState.setAttribute("ng-controller", "modalCtrl");



        //The modal associated with the state-specific information is created along with each state in order to re-use state id's and ensure
        //that every state, not just the selected ones, has a modal that can be brought up.
        var modal = document.createElement("div");
        modal.setAttribute("class", "modal fade");
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("role", "dialog");
        var name = state.id + "Modal";
        modal.setAttribute("id", name);

        var dialog = document.createElement("div");
        dialog.setAttribute("class", "modal-dialog");
        dialog.setAttribute("role", "document");

        var content = document.createElement("div");
        content.setAttribute("class", "modal-content");

        var header = document.createElement("div");
        header.setAttribute("class", "modal-header");

        var title = document.createElement("h5");
        title.setAttribute("class", "modal-title");
        title.innerText = state.id;

        var closeTop = document.createElement("button");
        closeTop.setAttribute("class", "close");
        closeTop.setAttribute("type", "button");
        closeTop.setAttribute("data-dismiss", "modal");
        closeTop.setAttribute("aria-label", "Close");

        var icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-times-circle");
        icon.setAttribute("aria-hidden", "true");

        closeTop.appendChild(icon);

        header.appendChild(title);
        header.appendChild(closeTop);

        var body = document.createElement("div");
        body.setAttribute("class", "modal-body");

        var modalTable = document.createElement("table");
        modalTable.setAttribute("class", "table");
        modalTable.setAttribute("id", name + "Table");

        body.appendChild(modalTable);

        content.appendChild(header);
        content.appendChild(body);
        dialog.appendChild(content);
        modal.appendChild(dialog);

        var identity = "#" + name;

        stateOption.setAttribute("data-toggle", "modal");
        stateOption.setAttribute("data-target", identity);

        newState.setAttribute("data-toggle", "modal");
        newState.setAttribute("data-target", identity);

        modalContainer.appendChild(modal);

        g.appendChild(newState);

    });


    //Works when using category information. Attaches the relevant information to the info box for each state that falls within
    //the selected category.

    if (infoType == "category") {
        jsonData.forEach(function (state) {
            var change = g.getElementsByClassName(state.State);
            var modalTable = document.getElementById(state.State + 'ModalTable');
            var string = "";
            var mtBody = document.createElement("tbody");
            _.forIn(state, function (value, key) {
                if (value != null && value != "N") {
                    string = string + "<div>" + key + ": " + value + "</div>";
                }
                var tRow = document.createElement("tr");
                var head = document.createElement("th");
                head.setAttribute("scope", "row");
                head.innerText = key;
                var info = document.createElement("td");
                info.innerText = value;
                tRow.appendChild(head);
                tRow.appendChild(info);
                mtBody.appendChild(tRow);
            });
            modalTable.appendChild(mtBody);
            //in place to catch bug related to DC entry *Ask about why DC is included twice*
            if (change.length != 0) {
                change[0].setAttribute("data-info", string);
                change[0].setAttribute("fill", "#ffa500");
                change[0].setAttribute("id", "selected");
            }
        });

        //Works when filtering by programs currently active. Attaches the relevant information to the info box for each state that
        //currently offers the selected program
    } else if (infoType == "programs") {

        jsonData.forEach(function (entry) {
            var wave = _.findKey(entry, function (key) {
                return (key > 0 && key <= 10)
            })

            if (entry[wave] != undefined) {
                var state = g.getElementsByClassName(entry.State);
                var string = "";
                var modalTable = document.getElementById(entry.State + 'ModalTable');
                var mtBody = document.createElement("tbody");
                _.forEach(entry, function (value, key) {
                    if (value != null) {
                        if (key.includes('EffectiveDate') || key.includes('Wave') || key.includes("State")) {
                            string = string + "<div>" + key + ": " + value + "</div>";
                        }
                        var tRow = document.createElement("tr");
                        var head = document.createElement("th");
                        head.setAttribute("scope", "row");
                        head.innerText = key;
                        var info = document.createElement("td");
                        info.innerText = value;
                        tRow.appendChild(head);
                        tRow.appendChild(info);
                        mtBody.appendChild(tRow);
                    }
                });
                modalTable.appendChild(mtBody);

                if (state.length != 0) {
                    state[0].setAttribute("data-info", string);
                    state[0].setAttribute("fill", "#ffa500");
                    state[0].setAttribute("id", "selected");
                }
            }
        });

    } else {
        jsonData.forEach(function (field) {
            var state = g.getElementsByClassName(field.State);
            var string = "";
            var modalTable = document.getElementById(field.State + 'ModalTable');
            var mtBody = document.createElement("tbody");
            _.forEach(field, function (value, key) {
                if (value != null && value != "N") {
                    string = string + "<div>" + key + ": " + value + "</div>";
                }
                var tRow = document.createElement("tr");
                var head = document.createElement("th");
                head.setAttribute("scope", "row");
                head.innerText = key;
                var info = document.createElement("td");
                info.innerText = value;
                tRow.appendChild(head);
                tRow.appendChild(info);
                mtBody.appendChild(tRow);
            });
            modalTable.appendChild(mtBody);

            if (state.length != 0) {
                state[0].setAttribute("data-info", string);
                state[0].setAttribute("fill", "#ffa500");
                state[0].setAttribute("id", "selected");
            }
        });

    }

    //Script that controls the information box behavior. Only allows for infoboxes to be displayed on the currently highlighted/selected states
    $("#selected, circle").hover(function (e) {
        $('#info-box').css('display', 'block');
        $('#info-box').html($(this).data('info'));
    });

    $("#selected, circle").mouseleave(function (e) {
        $('#info-box').css('display', 'none');
    });

    $(document).mousemove(function (e) {
        $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
        $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
    }).mouseover();

    var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (ios) {
        $('a').on('click touchend', function () {
            var link = $(this).attr('href');
            window.open(link, '_blank');
            return false;
        });

    }
}