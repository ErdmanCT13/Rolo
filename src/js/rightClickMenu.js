function attachMenu(element, options) {

    var menu = null

    console.log("attaching menu")
    element.addEventListener("contextmenu", function (e) {
        if (window.openContextMenu) {
            window.openContextMenu.remove() // remove the node
            window.openContextMenu = null
            console.log("removing")
        }
        //console.log("hello")
        e.preventDefault()
        if (event.button && event.button == 2) {
            menu = rightClickMenu(options, true)  // return the dom element, with root as true
            menu.style.position = "fixed"
            menu.style.top = `${e.clientY}px`
            menu.style.left = `${e.clientX}px`
            //console.log(e.clientX, e.clientY, menu)
            document.querySelector("body").appendChild(menu)
            window.openContextMenu = menu
        }
    })


    window.onresize = function () {
        if (window.openContextMenu) {
            window.openContextMenu.remove() // remove the node
            window.openContextMenu = null
        }
    }
    window.onclick = function () {
        //console.log("clicked the window")
        if (window.openContextMenu) {
            window.openContextMenu.remove() // remove the node
            window.openContextMenu = null
        }
    }
}

attachMenu(document.querySelector(".app-window--networks"), {
    nestedMenuButtonClass: "nested-menu-button",
    callbackButtonClass: "callback-button",
    nestedMenuClass: "nested-menu",
    menuItems: [
        {
            type: "callback",
            text: "Button 1",
            nestedMenuButtonClass: "nested-menu-button",
            callbackButtonClass: "callback-button",
            nestedMenuClass: "nested-menu",
            callback: function (element) {
                console.log("this is my call back, here is the element passed into it ", element)
            }
        },
        {
            type: "callback",
            text: "Button 2",
            nestedMenuButtonClass: "nested-menu-button",
            callbackButtonClass: "callback-button",
            nestedMenuClass: "nested-menu",
            callback: function (element) {
                console.log("this is my call back, here is the element passed into it ", element)
            }
        },
        {
            type: "nested",
            text: "Nested Button 1",
            nestedMenuButtonClass: "nested-menu-button",
            callbackButtonClass: "callback-button",
            nestedMenuClass: "nested-menu",
            menuItems: [
                {
                    type: "nested",
                    text: "Nested Button 1",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    menuItems: [
                        {
                            type: "callback",
                            text: "Button 2",
                            nestedMenuButtonClass: "nested-menu-button",
                            callbackButtonClass: "callback-button",
                            nestedMenuClass: "nested-menu",
                            callback: function (element) {
                                console.log("this is my call back, here is the element passed into it ", element)
                            }
                        },
                        {
                            type: "callback",
                            text: "Button 2",
                            nestedMenuButtonClass: "nested-menu-button",
                            callbackButtonClass: "callback-button",
                            nestedMenuClass: "nested-menu",
                            callback: function (element) {
                                console.log("this is my call back, here is the element passed into it ", element)
                            }
                        }
                    ]
                },
                {
                    type: "nested",
                    text: "Nested Button 1",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    menuItems: [
                        {
                            type: "callback",
                            text: "Button 2",
                            nestedMenuButtonClass: "nested-menu-button",
                            callbackButtonClass: "callback-button",
                            nestedMenuClass: "nested-menu",
                            callback: function (element) {
                                console.log("this is my call back, here is the element passed into it ", element)
                            }
                        },
                        {
                            type: "callback",
                            text: "Button 2",
                            nestedMenuButtonClass: "nested-menu-button",
                            callbackButtonClass: "callback-button",
                            nestedMenuClass: "nested-menu",
                            callback: function (element) {
                                console.log("this is my call back, here is the element passed into it ", element)
                            }
                        }
                    ]
                },
                {
                    type: "callback",
                    text: "Button 2",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    callback: function (element) {
                        console.log("this is my call back, here is the element passed into it ", element)
                    }
                },
                {
                    type: "callback",
                    text: "Button 2",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    callback: function (element) {
                        console.log("this is my call back, here is the element passed into it ", element)
                    }
                },
                {
                    type: "callback",
                    text: "Button 2",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    callback: function (element) {
                        console.log("this is my call back, here is the element passed into it ", element)
                    }
                },
                {
                    type: "callback",
                    text: "Button 2",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    callback: function (element) {
                        console.log("this is my call back, here is the element passed into it ", element)
                    }
                },
                {
                    type: "nested",
                    text: "Nested Button 1",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    menuItems: [
                        {
                            type: "callback",
                            text: "Button 2",
                            nestedMenuButtonClass: "nested-menu-button",
                            callbackButtonClass: "callback-button",
                            nestedMenuClass: "nested-menu",
                            callback: function (element) {
                                console.log("this is my call back, here is the element passed into it ", element)
                            }
                        },
                        {
                            type: "callback",
                            text: "Button 2",
                            nestedMenuButtonClass: "nested-menu-button",
                            callbackButtonClass: "callback-button",
                            nestedMenuClass: "nested-menu",
                            callback: function (element) {
                                console.log("this is my call back, here is the element passed into it ", element)
                            }
                        }
                    ]
                }
            ]
        }
    ]
})



function rightClickMenu(options, isRoot) { // returns a menu element with callbacks and nested menus attached
    //console.log(options)
    var button = document.createElement("div") // this is the first level menu
    var nestedMenu = document.createElement("div")

    if (!isRoot) {
        nestedMenu.classList.add(options.nestedMenuClass)
        button.classList.add(options.nestedMenuButtonClass)
        button.innerHTML = options.text
        button.appendChild(nestedMenu)
        //console.log("isRoot, appending nested menu to button")
    }
    else {
        nestedMenu.classList.add(options.nestedMenuClass)
        //console.log("not isRoot")
    }
    if (options.menuItems) {
        //console.log("found menu item")
        options.menuItems.forEach(function (button) {
            //console.log("menu-item")
            if (button.type == "nested") {
                //console.log("nested button")
                //console.log("options", button)
                nestedMenu.appendChild(rightClickMenu(button, false)) // if the button is a nested menu button, recursively create the nested menu
            }
            else if (button.type == "callback") {
                //console.log("callback button")
                var callbackButton = document.createElement("div")
                callbackButton.innerHTML = button.text
                callbackButton.classList.add(options.callbackButtonClass)
                nestedMenu.appendChild(callbackButton)
            }
        })
    }
    if (isRoot) {
        return nestedMenu
    }
    else {
        return button
    }
}


var test = {
    nestedMenuButtonClass: "nested-menu-button",
    callbackButtonClass: "callback-button",
    nestedMenuClass: "nested-menu",
    menuItems: [
        {
            type: "callback",
            nestedMenuButtonClass: "nested-menu-button",
            callbackButtonClass: "callback-button",
            nestedMenuClass: "nested-menu",
            callback: function (element) {
                console.log("this is my call back, here is the element passed into it ", element)
            }
        },
        {
            type: "callback",
            nestedMenuButtonClass: "nested-menu-button",
            callbackButtonClass: "callback-button",
            nestedMenuClass: "nested-menu",
            callback: function (element) {
                console.log("this is my call back, here is the element passed into it ", element)
            }
        },
        {
            type: "callback",
            nestedMenuButtonClass: "nested-menu-button",
            callbackButtonClass: "callback-button",
            nestedMenuClass: "nested-menu",
            callback: function (element) {
                console.log("this is my call back, here is the element passed into it ", element)
            }
        },
        {
            type: "callback",
            nestedMenuButtonClass: "nested-menu-button",
            callbackButtonClass: "callback-button",
            nestedMenuClass: "nested-menu",
            callback: function (element) {
                console.log("this is my call back, here is the element passed into it ", element)
            }
        },
        {
            type: "nested",
            nestedMenuButtonClass: "nested-menu-button",
            callbackButtonClass: "callback-button",
            nestedMenuClass: "nested-menu",
            menuItems: [
                {
                    type: "callback",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    callback: function (element) {
                        console.log("this is my call back, here is the element passed into it ", element)
                    }
                },
                {
                    type: "callback",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    callback: function (element) {
                        console.log("this is my call back, here is the element passed into it ", element)
                    }
                },
                {
                    type: "nested",
                    nestedMenuButtonClass: "nested-menu-button",
                    callbackButtonClass: "callback-button",
                    nestedMenuClass: "nested-menu",
                    menuItems: [

                    ]
                }
            ]
        }
    ]
}

console.log(rightClickMenu(test, true))



