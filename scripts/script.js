function change( LightDark )
{
    if ( LightDark.value === "light_mode" )
        LightDark.value = "dark_mode";
    else
        LightDark.value = "light_mode";
    var currentTheme = 
    document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute('data-theme', currentTheme === "light" ? "dark" : "light")
}
var setting = document.getElementById("settings");
var settingWindow = document.getElementById("settings-container");
function openSettings() {
    settingWindow.style = ("display: block;");
}